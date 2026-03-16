import type { Product, backendInterface } from "@/backend";
import TryOnCanvas from "@/components/TryOnCanvas";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useActor } from "@/hooks/useActor";
import {
  Camera,
  ChevronDown,
  Download,
  Loader2,
  RefreshCw,
  Sparkles,
  Upload,
} from "lucide-react";
import type React from "react";
import { memo, useCallback, useRef, useState } from "react";

// Compress a data URL to JPEG at given quality/max dimension
async function compressDataUrl(
  dataUrl: string,
  maxDim = 768,
  quality = 0.88,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Canvas context unavailable"));
      ctx.drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => reject(new Error("Image load failed"));
    img.src = dataUrl;
  });
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callReplicateVirtualTryOn(
  actor: backendInterface,
  humanImageDataUrl: string,
  garmentImageDataUrlOrUrl: string,
  garmentDescription: string,
): Promise<string> {
  // Compress human image to keep request size manageable
  const compressedHuman = await compressDataUrl(humanImageDataUrl, 768, 0.85);

  // For garment: if it's a data URL compress it, otherwise use as-is (URL)
  let garmentInput = garmentImageDataUrlOrUrl;
  if (garmentImageDataUrlOrUrl.startsWith("data:")) {
    garmentInput = await compressDataUrl(garmentImageDataUrlOrUrl, 768, 0.85);
  }

  // Step 1: Create prediction via backend canister proxy
  const createResponseJson = await actor.createReplicatePrediction(
    compressedHuman,
    garmentInput,
    garmentDescription,
  );
  const createData = JSON.parse(createResponseJson) as {
    id?: string;
    error?: string;
  };
  const predictionId = createData.id;
  if (!predictionId) {
    throw new Error(
      `No prediction ID returned: ${createData.error ?? createResponseJson}`,
    );
  }

  // Step 2: Poll via backend canister proxy (max 40 attempts, 3s apart = 2 min)
  for (let i = 0; i < 40; i++) {
    await sleep(3000);
    const pollResponseJson = await actor.pollReplicatePrediction(predictionId);
    const pollData = JSON.parse(pollResponseJson) as {
      status?: string;
      output?: string | string[];
      error?: string;
    };
    if (pollData.status === "succeeded") {
      const output = pollData.output;
      if (Array.isArray(output) && output.length > 0) return output[0];
      if (typeof output === "string") return output;
      throw new Error("Unexpected output format from Replicate");
    }
    if (pollData.status === "failed" || pollData.status === "canceled") {
      throw new Error(
        `AI generation ${pollData.status}: ${pollData.error ?? "unknown"}`,
      );
    }
    // status is "starting" or "processing" — keep polling
  }

  throw new Error("AI generation timed out after 2 minutes");
}

interface VirtualTryOnProps {
  product?: Product;
  allSarees?: Product[];
  allProducts?: Product[];
  // Also accept these alternative prop names for flexibility
  sarees?: Product[];
  selectedSareeId?: bigint;
  categoryLabel?: string; // e.g. "saree", "jewelry", "handbag"
}

type SkinTone = "fair" | "wheatish" | "dusky" | "dark";
type BodyType = "petite" | "average" | "tall" | "plus";
type Occasion = "wedding" | "festival" | "casual" | "office" | "party";

interface SuitabilityResult {
  score: number;
  label: string;
  tips: string[];
}

function computeScore(
  item: Product,
  skinTone: SkinTone,
  bodyType: BodyType,
  occasion: Occasion,
  cat: string,
): SuitabilityResult {
  // Deterministic but varied base score derived from product name hash
  const nameHash = item.name
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0);
  let score = 55 + (nameHash % 20); // base: 55–74
  const tips: string[] = [];
  const desc = `${item.description} ${item.name}`.toLowerCase();

  if (cat === "jewelry") {
    // Jewelry-specific scoring
    if (skinTone === "fair") {
      if (
        desc.includes("silver") ||
        desc.includes("pearl") ||
        desc.includes("white")
      )
        score += 10;
      tips.push("Silver and pearl jewelry complement fair skin elegantly.");
    } else if (skinTone === "wheatish") {
      if (
        desc.includes("gold") ||
        desc.includes("temple") ||
        desc.includes("antique")
      )
        score += 10;
      tips.push("Gold and antique jewelry beautifully enhances wheatish skin.");
    } else if (skinTone === "dusky") {
      if (
        desc.includes("gold") ||
        desc.includes("ruby") ||
        desc.includes("emerald")
      )
        score += 10;
      tips.push(
        "Bold gold and gemstone jewelry creates a stunning look on dusky skin.",
      );
    } else if (skinTone === "dark") {
      if (
        desc.includes("gold") ||
        desc.includes("bright") ||
        desc.includes("kundan")
      )
        score += 10;
      tips.push(
        "Kundan and gold jewelry creates a magnificent contrast on dark skin.",
      );
    }

    if (occasion === "wedding") {
      if (
        desc.includes("bridal") ||
        desc.includes("set") ||
        desc.includes("necklace")
      )
        score += 12;
      tips.push("Complete bridal jewelry sets are perfect for weddings.");
    } else if (occasion === "casual") {
      if (
        desc.includes("simple") ||
        desc.includes("light") ||
        desc.includes("stud")
      )
        score += 12;
      tips.push("Simple studs and light chains are ideal for everyday wear.");
    } else if (occasion === "festival") {
      if (
        desc.includes("traditional") ||
        desc.includes("temple") ||
        desc.includes("jhumka")
      )
        score += 10;
      tips.push("Traditional temple jewelry adds a festive touch.");
    } else if (occasion === "party") {
      if (
        desc.includes("statement") ||
        desc.includes("bold") ||
        desc.includes("cocktail")
      )
        score += 10;
      tips.push("Bold statement pieces make you stand out at parties.");
    }
    if (tips.length === 0) {
      tips.push(
        "Pair with a matching saree or lehenga for a coordinated look.",
      );
      tips.push("Layer delicate pieces for a trendy stacked effect.");
    }
  } else if (cat === "handbag") {
    // Handbag-specific scoring
    if (skinTone === "fair") {
      if (
        desc.includes("pastel") ||
        desc.includes("nude") ||
        desc.includes("blush")
      )
        score += 10;
      tips.push(
        "Pastel and nude bags pair effortlessly with fair-toned outfits.",
      );
    } else if (skinTone === "wheatish") {
      if (
        desc.includes("tan") ||
        desc.includes("brown") ||
        desc.includes("gold")
      )
        score += 10;
      tips.push("Tan and brown bags complement warm wheatish tones perfectly.");
    } else if (skinTone === "dusky") {
      if (
        desc.includes("bright") ||
        desc.includes("vibrant") ||
        desc.includes("red")
      )
        score += 10;
      tips.push("Vibrant and bright bags create a bold, eye-catching look.");
    } else if (skinTone === "dark") {
      if (
        desc.includes("jewel") ||
        desc.includes("embroidered") ||
        desc.includes("gold")
      )
        score += 10;
      tips.push(
        "Embroidered and jewel-toned bags look gorgeous against dark skin.",
      );
    }

    if (bodyType === "petite") {
      if (
        desc.includes("clutch") ||
        desc.includes("small") ||
        desc.includes("mini")
      )
        score += 8;
      tips.push(
        "Clutches and mini bags are perfectly proportioned for petite frames.",
      );
    } else if (bodyType === "tall") {
      if (
        desc.includes("tote") ||
        desc.includes("large") ||
        desc.includes("structured")
      )
        score += 8;
      tips.push("Large structured bags look balanced on tall frames.");
    } else if (bodyType === "plus") {
      if (
        desc.includes("tote") ||
        desc.includes("satchel") ||
        desc.includes("hobo")
      )
        score += 8;
      tips.push(
        "Totes and satchels are flattering and practical for plus-size frames.",
      );
    }

    if (occasion === "wedding") {
      if (
        desc.includes("potli") ||
        desc.includes("bridal") ||
        desc.includes("embroidered")
      )
        score += 12;
      tips.push("Embroidered potli bags are a classic choice for weddings.");
    } else if (occasion === "casual") {
      if (
        desc.includes("tote") ||
        desc.includes("canvas") ||
        desc.includes("casual")
      )
        score += 12;
      tips.push("Casual totes and everyday bags are perfect for day outings.");
    } else if (occasion === "party") {
      if (
        desc.includes("clutch") ||
        desc.includes("sequin") ||
        desc.includes("glitter")
      )
        score += 10;
      tips.push(
        "Glittery clutches and sequin bags are perfect party accessories.",
      );
    }
    if (tips.length === 0) {
      tips.push(
        "Match the bag color to your outfit accent for a polished look.",
      );
      tips.push("A contrasting bag can elevate a simple outfit instantly.");
    }
  } else {
    // Saree scoring (original logic)
    if (skinTone === "fair") {
      if (
        desc.includes("pastel") ||
        desc.includes("light") ||
        desc.includes("pink")
      )
        score += 10;
      tips.push("Pastel and light shades complement fair skin beautifully.");
    } else if (skinTone === "wheatish") {
      if (
        desc.includes("gold") ||
        desc.includes("yellow") ||
        desc.includes("orange")
      )
        score += 10;
      tips.push("Warm tones like gold and orange enhance wheatish skin.");
    } else if (skinTone === "dusky") {
      if (
        desc.includes("bright") ||
        desc.includes("vibrant") ||
        desc.includes("red")
      )
        score += 10;
      tips.push("Bright and vibrant colors look stunning on dusky skin.");
    } else if (skinTone === "dark") {
      if (
        desc.includes("bright") ||
        desc.includes("jewel") ||
        desc.includes("royal")
      )
        score += 10;
      tips.push("Jewel tones and bright colors create a striking contrast.");
    }

    if (bodyType === "petite") {
      if (
        desc.includes("light") ||
        desc.includes("chiffon") ||
        desc.includes("georgette")
      )
        score += 8;
      tips.push(
        "Lightweight fabrics like chiffon drape elegantly on petite frames.",
      );
    } else if (bodyType === "tall") {
      if (
        desc.includes("silk") ||
        desc.includes("heavy") ||
        desc.includes("brocade")
      )
        score += 8;
      tips.push("Heavy silks and brocades look magnificent on tall frames.");
    } else if (bodyType === "plus") {
      if (desc.includes("georgette") || desc.includes("crepe")) score += 8;
      tips.push(
        "Georgette and crepe fabrics flow gracefully and are very flattering.",
      );
    }

    if (occasion === "wedding") {
      if (desc.includes("silk") || desc.includes("bridal")) score += 12;
      tips.push("Silk sarees are perfect for weddings — timeless and elegant.");
    } else if (occasion === "casual") {
      if (desc.includes("cotton") || desc.includes("linen")) score += 12;
      tips.push("Cotton sarees are comfortable and perfect for everyday wear.");
    } else if (occasion === "office") {
      if (desc.includes("cotton") || desc.includes("simple")) score += 10;
      tips.push(
        "Simple, understated sarees work best for professional settings.",
      );
    } else if (occasion === "festival") {
      if (
        desc.includes("silk") ||
        desc.includes("bright") ||
        desc.includes("embroidered")
      )
        score += 10;
      tips.push(
        "Embroidered and bright sarees are perfect for festive occasions.",
      );
    } else if (occasion === "party") {
      if (
        desc.includes("georgette") ||
        desc.includes("net") ||
        desc.includes("sequin")
      )
        score += 10;
      tips.push("Flowing, embellished sarees make you the star of any party!");
    }
    if (tips.length === 0) {
      tips.push("Pair with traditional jewelry for a complete look.");
      tips.push("Choose a contrasting blouse to make the saree pop.");
    }
  }

  score = Math.min(100, Math.max(0, score));

  let label = "Good Match";
  if (score >= 90) label = "Perfect Match!";
  else if (score >= 75) label = "Great Match";
  else if (score >= 60) label = "Good Match";
  else if (score >= 45) label = "Fair Match";
  else label = "May Not Suit";

  return { score, label, tips };
}

function VirtualTryOn({
  product,
  allSarees,
  allProducts,
  sarees,
  selectedSareeId,
  categoryLabel = "saree",
}: VirtualTryOnProps) {
  // Normalize props: support both naming conventions
  const itemList = allProducts ?? allSarees ?? sarees ?? [];
  const initialId = product
    ? product.id.toString()
    : selectedSareeId
      ? selectedSareeId.toString()
      : (itemList[0]?.id.toString() ?? "");

  const { actor } = useActor();
  const [userImage, setUserImage] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string>(initialId);
  const [skinTone, setSkinTone] = useState<SkinTone>("wheatish");
  const [bodyType, setBodyType] = useState<BodyType>("average");
  const [occasion, setOccasion] = useState<Occasion>("casual");
  const [result, setResult] = useState<SuitabilityResult | null>(null);
  const [replicateImage, setReplicateImage] = useState<string | null>(null);
  const [replicateLoading, setReplicateLoading] = useState(false);
  const [replicateError, setReplicateError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedItem =
    product ?? itemList.find((s) => s.id.toString() === selectedId);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setUserImage(ev.target?.result as string);
      setResult(null);
      setReplicateImage(null);
      setReplicateError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleCheck = useCallback(async () => {
    if (!selectedItem) return;
    const res = computeScore(
      selectedItem,
      skinTone,
      bodyType,
      occasion,
      categoryLabel,
    );
    setResult(res);
    setReplicateImage(null);
    setReplicateError(null);

    // Run Replicate AI try-on for all categories when user has uploaded a photo
    if (userImage && selectedItem.imageUrl && actor) {
      setReplicateLoading(true);
      try {
        const aiImage = await callReplicateVirtualTryOn(
          actor,
          userImage,
          selectedItem.imageUrl,
          selectedItem.name,
        );
        setReplicateImage(aiImage);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "AI generation failed";
        setReplicateError(message);
      } finally {
        setReplicateLoading(false);
      }
    }

    // Scroll down a little to show the canvas result
    setTimeout(() => {
      const el = document.getElementById("tryon-result-section");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }, [
    selectedItem,
    skinTone,
    bodyType,
    occasion,
    categoryLabel,
    userImage,
    actor,
  ]);

  const handleReset = () => {
    setUserImage(null);
    setResult(null);
    setReplicateImage(null);
    setReplicateError(null);
    setReplicateLoading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDownloadReplicateImage = useCallback(() => {
    if (!replicateImage) return;
    const a = document.createElement("a");
    a.href = replicateImage;
    a.download = `dalis-boutique-tryon-${Date.now()}.jpg`;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  }, [replicateImage]);

  const scoreColor = result
    ? result.score >= 75
      ? "text-teal-700"
      : result.score >= 50
        ? "text-champagne-600"
        : "text-destructive"
    : "";

  const itemTypeName =
    categoryLabel === "jewelry"
      ? "Jewelry"
      : categoryLabel === "handbag"
        ? "Handbag"
        : "Saree";

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-teal-600" />
        <h3 className="font-display text-lg text-teal-800">
          Virtual Try-On — {itemTypeName}
        </h3>
      </div>
      <p className="font-sans text-sm text-muted-foreground mb-5">
        Upload your photo and select your preferences to see how this{" "}
        {itemTypeName.toLowerCase()} suits you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Item selector + item preview + user photo */}
        <div className="space-y-4">
          {/* Item selector (only when no product pre-selected) */}
          {!product && itemList.length > 0 && (
            <div>
              <label
                htmlFor="tryon-item-select"
                className="block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5"
              >
                Select {itemTypeName}
              </label>
              <div className="relative">
                <select
                  id="tryon-item-select"
                  value={selectedId}
                  onChange={(e) => {
                    setSelectedId(e.target.value);
                    setResult(null);
                  }}
                  className="w-full appearance-none text-sm border border-teal-200 rounded-md px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 pr-8"
                >
                  {itemList.map((s) => (
                    <option key={s.id.toString()} value={s.id.toString()}>
                      {s.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Item preview */}
          {selectedItem && (
            <div className="rounded-lg overflow-hidden border border-teal-100 aspect-[3/4] bg-sand-50">
              {selectedItem.imageUrl ? (
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Camera className="w-12 h-12 text-teal-200" />
                </div>
              )}
            </div>
          )}

          {/* User photo upload */}
          <div>
            <label
              htmlFor="tryon-file-input"
              className="block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5"
            >
              Your Photo (Optional)
            </label>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full border-2 border-dashed border-teal-200 rounded-lg p-4 text-center cursor-pointer hover:border-teal-400 transition-colors"
            >
              {userImage ? (
                <div className="relative">
                  <img
                    src={userImage}
                    alt="Uploaded portrait"
                    loading="lazy"
                    className="max-h-48 mx-auto rounded object-contain"
                  />
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReset();
                    }}
                    className="absolute top-1 right-1 bg-white rounded-full p-0.5 shadow"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-teal-600" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 py-2">
                  <Upload className="w-6 h-6 text-teal-300" />
                  <p className="font-sans text-xs text-muted-foreground">
                    Click to upload your photo
                  </p>
                </div>
              )}
            </button>
            <input
              id="tryon-file-input"
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Right: Preferences + result */}
        <div className="space-y-4">
          {/* Preferences */}
          <div className="grid grid-cols-1 gap-3">
            {/* Skin Tone */}
            <div>
              <label
                htmlFor="tryon-skin-tone"
                className="block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5"
              >
                Skin Tone
              </label>
              <div className="relative">
                <select
                  id="tryon-skin-tone"
                  value={skinTone}
                  onChange={(e) => setSkinTone(e.target.value as SkinTone)}
                  className="w-full appearance-none text-sm border border-teal-200 rounded-md px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 pr-8"
                >
                  <option value="fair">Fair</option>
                  <option value="wheatish">Wheatish</option>
                  <option value="dusky">Dusky</option>
                  <option value="dark">Dark</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400 pointer-events-none" />
              </div>
            </div>

            {/* Body Type */}
            <div>
              <label
                htmlFor="tryon-body-type"
                className="block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5"
              >
                Body Type
              </label>
              <div className="relative">
                <select
                  id="tryon-body-type"
                  value={bodyType}
                  onChange={(e) => setBodyType(e.target.value as BodyType)}
                  className="w-full appearance-none text-sm border border-teal-200 rounded-md px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 pr-8"
                >
                  <option value="petite">Petite</option>
                  <option value="average">Average</option>
                  <option value="tall">Tall</option>
                  <option value="plus">Plus Size</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400 pointer-events-none" />
              </div>
            </div>

            {/* Occasion */}
            <div>
              <label
                htmlFor="tryon-occasion"
                className="block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5"
              >
                Occasion
              </label>
              <div className="relative">
                <select
                  id="tryon-occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value as Occasion)}
                  className="w-full appearance-none text-sm border border-teal-200 rounded-md px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 pr-8"
                >
                  <option value="casual">Casual</option>
                  <option value="wedding">Wedding</option>
                  <option value="festival">Festival</option>
                  <option value="office">Office</option>
                  <option value="party">Party</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <Button
            onClick={handleCheck}
            disabled={!selectedItem || replicateLoading}
            className="w-full bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-sans text-sm tracking-widest uppercase rounded-full border-0 py-3 shadow-lg shadow-teal-200 disabled:opacity-60"
            data-ocid="tryon.primary_button"
          >
            {replicateLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating AI Look...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate My AI Look ✨
              </>
            )}
          </Button>

          {/* Result section */}
          {(result || replicateLoading) && (
            <div id="tryon-result-section" className="space-y-5 pt-2">
              {/* Replicate AI Loading State */}
              {replicateLoading && (
                <div
                  className="rounded-2xl overflow-hidden border border-violet-200 shadow-xl bg-gradient-to-br from-violet-50 to-rose-50 p-6 flex flex-col items-center gap-4"
                  data-ocid="tryon.loading_state"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full border-4 border-violet-200 border-t-violet-600 animate-spin" />
                    <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-violet-600" />
                  </div>
                  <div className="text-center">
                    <p className="font-sans font-semibold text-violet-800 text-sm">
                      Generating your AI look... this takes 30–90 seconds.
                    </p>
                    <p className="font-sans text-xs text-violet-500 mt-1">
                      Our AI is dressing you — please wait, do not close the
                      page.
                    </p>
                  </div>
                </div>
              )}

              {/* Replicate AI Generated Image */}
              {replicateImage && !replicateLoading && (
                <div
                  className="rounded-2xl overflow-hidden border border-emerald-200 shadow-2xl"
                  data-ocid="tryon.panel"
                >
                  <div className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-white" />
                      <h4 className="font-sans text-sm text-white font-bold tracking-wide">
                        ✨ AI Generated Look — Powered by IDM-VTON
                      </h4>
                    </div>
                    <p className="text-white/80 text-xs mt-0.5">
                      Real AI image showing how you'd look wearing this{" "}
                      {itemTypeName.toLowerCase()}
                    </p>
                  </div>
                  <div className="bg-gradient-to-b from-slate-50 to-emerald-50/30 p-3 flex flex-col items-center gap-3">
                    <img
                      src={replicateImage}
                      alt="AI generated virtual try-on"
                      className="max-w-full rounded-xl shadow-lg object-contain max-h-[500px]"
                      crossOrigin="anonymous"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownloadReplicateImage}
                      className="gap-2 text-teal-700 border-teal-300 hover:bg-teal-50"
                      data-ocid="tryon.secondary_button"
                    >
                      <Download className="w-4 h-4" />
                      Download Your AI Look
                    </Button>
                  </div>
                </div>
              )}

              {/* Replicate Error + Canvas Fallback */}
              {replicateError &&
                !replicateLoading &&
                userImage &&
                selectedItem?.imageUrl && (
                  <div className="space-y-3">
                    <div
                      className="rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-amber-800 text-xs font-sans"
                      data-ocid="tryon.error_state"
                    >
                      <p className="font-semibold mb-1">
                        AI generation unavailable — showing preview instead
                      </p>
                      <p className="text-amber-600">{replicateError}</p>
                    </div>
                    {/* Canvas fallback */}
                    <div className="rounded-2xl overflow-hidden border border-amber-200 shadow-2xl shadow-amber-100/50">
                      <div className="bg-gradient-to-r from-amber-600 via-rose-500 to-purple-600 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-white" />
                          <h4 className="font-sans text-sm text-white font-bold tracking-wide">
                            Style Preview
                          </h4>
                          <Sparkles className="w-4 h-4 text-white ml-auto" />
                        </div>
                        <p className="text-white/80 text-xs mt-0.5">
                          Advanced canvas compositing preview
                        </p>
                      </div>
                      <div className="bg-gradient-to-b from-slate-50 to-amber-50/30 p-3 flex justify-center">
                        <TryOnCanvas
                          userImage={userImage}
                          productImageUrl={selectedItem.imageUrl}
                          categoryLabel={categoryLabel}
                          productName={selectedItem.name}
                        />
                      </div>
                    </div>
                  </div>
                )}

              {/* Non-saree canvas try-on fallback (only when no replicate result and no error shown) */}
              {result &&
                !replicateLoading &&
                !replicateImage &&
                !replicateError &&
                categoryLabel !== "saree" &&
                userImage &&
                selectedItem?.imageUrl && (
                  <div
                    className="rounded-2xl overflow-hidden border border-amber-200 shadow-2xl shadow-amber-100/50"
                    data-ocid="tryon.panel"
                  >
                    <div className="bg-gradient-to-r from-amber-600 via-rose-500 to-purple-600 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-white" />
                        <h4 className="font-sans text-sm text-white font-bold tracking-wide">
                          Your AI-Generated Look
                        </h4>
                        <Sparkles className="w-4 h-4 text-white ml-auto" />
                      </div>
                      <p className="text-white/80 text-xs mt-0.5">
                        AI-Generated Preview — our system shows how this item
                        looks on you
                      </p>
                    </div>
                    <div className="bg-gradient-to-b from-slate-50 to-amber-50/30 p-3 flex justify-center">
                      <TryOnCanvas
                        userImage={userImage}
                        productImageUrl={selectedItem.imageUrl}
                        categoryLabel={categoryLabel}
                        productName={selectedItem.name}
                      />
                    </div>
                  </div>
                )}

              {/* Score + tips — BELOW the AI image */}
              {result && (
                <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-xl p-4 border border-teal-200 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span
                        className={`font-display text-lg font-semibold ${scoreColor}`}
                      >
                        {result.label}
                      </span>
                      <p className="text-xs text-teal-500 font-sans mt-0.5">
                        Suitability Score
                      </p>
                    </div>
                    <span
                      className={`font-serif text-3xl font-bold ${scoreColor}`}
                    >
                      {result.score}
                      <span className="text-base">%</span>
                    </span>
                  </div>
                  <Progress
                    value={result.score}
                    className="h-2.5 mb-4 rounded-full"
                  />
                  <ul className="space-y-2">
                    {result.tips.map((tip) => (
                      <li
                        key={tip}
                        className="flex items-start gap-2.5 text-xs font-sans text-teal-700 bg-white/60 rounded-lg px-3 py-2"
                      >
                        <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-amber-500" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(VirtualTryOn);

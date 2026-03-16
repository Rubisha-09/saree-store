import { c as createLucideIcon, r as reactExports, x as useLayoutEffect2, j as jsxRuntimeExports, g as createContextScope, q as Presence, m as Primitive, o as useControllableState, i as useComposedRefs, n as composeEventHandlers, d as cn, C as Category, y as ShieldCheck, z as Plus, B as Button, A as Trash2, D as ue } from "./index-D3JC8jlK.js";
import { d as useActor, e as useGetAllProducts, f as useAddProduct, g as useDeleteProduct, B as Badge, S as Skeleton } from "./useQueries-eecWsNPz.js";
import { L as Label, I as Input } from "./label-ChQdjVR6.js";
import { L as LoaderCircle, R as RefreshCw, E as EyeOff, a as Eye } from "./refresh-cw-gTXhO3bE.js";
import { P as Package } from "./package-4nyfGsYq.js";
import { L as Lock } from "./lock-IpL4W6ZQ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }],
  ["path", { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }]
];
const ImagePlus = createLucideIcon("image-plus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const WifiOff = createLucideIcon("wifi-off", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]
];
const Wifi = createLucideIcon("wifi", __iconNode);
function usePrevious(value) {
  const ref = reactExports.useRef({ value, previous: value });
  return reactExports.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}
function useSize(element) {
  const [size, setSize] = reactExports.useState(void 0);
  useLayoutEffect2(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });
      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }
        if (!entries.length) {
          return;
        }
        const entry = entries[0];
        let width;
        let height;
        if ("borderBoxSize" in entry) {
          const borderSizeEntry = entry["borderBoxSize"];
          const borderSize = Array.isArray(borderSizeEntry) ? borderSizeEntry[0] : borderSizeEntry;
          width = borderSize["inlineSize"];
          height = borderSize["blockSize"];
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }
        setSize({ width, height });
      });
      resizeObserver.observe(element, { box: "border-box" });
      return () => resizeObserver.unobserve(element);
    } else {
      setSize(void 0);
    }
  }, [element]);
  return size;
}
var CHECKBOX_NAME = "Checkbox";
var [createCheckboxContext] = createContextScope(CHECKBOX_NAME);
var [CheckboxProviderImpl, useCheckboxContext] = createCheckboxContext(CHECKBOX_NAME);
function CheckboxProvider(props) {
  const {
    __scopeCheckbox,
    checked: checkedProp,
    children,
    defaultChecked,
    disabled,
    form,
    name,
    onCheckedChange,
    required,
    value = "on",
    // @ts-expect-error
    internal_do_not_use_render
  } = props;
  const [checked, setChecked] = useControllableState({
    prop: checkedProp,
    defaultProp: defaultChecked ?? false,
    onChange: onCheckedChange,
    caller: CHECKBOX_NAME
  });
  const [control, setControl] = reactExports.useState(null);
  const [bubbleInput, setBubbleInput] = reactExports.useState(null);
  const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
  const isFormControl = control ? !!form || !!control.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    true
  );
  const context = {
    checked,
    disabled,
    setChecked,
    control,
    setControl,
    name,
    form,
    value,
    hasConsumerStoppedPropagationRef,
    required,
    defaultChecked: isIndeterminate(defaultChecked) ? false : defaultChecked,
    isFormControl,
    bubbleInput,
    setBubbleInput
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CheckboxProviderImpl,
    {
      scope: __scopeCheckbox,
      ...context,
      children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
    }
  );
}
var TRIGGER_NAME = "CheckboxTrigger";
var CheckboxTrigger = reactExports.forwardRef(
  ({ __scopeCheckbox, onKeyDown, onClick, ...checkboxProps }, forwardedRef) => {
    const {
      control,
      value,
      disabled,
      checked,
      required,
      setControl,
      setChecked,
      hasConsumerStoppedPropagationRef,
      isFormControl,
      bubbleInput
    } = useCheckboxContext(TRIGGER_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setControl);
    const initialCheckedStateRef = reactExports.useRef(checked);
    reactExports.useEffect(() => {
      const form = control == null ? void 0 : control.form;
      if (form) {
        const reset = () => setChecked(initialCheckedStateRef.current);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }
    }, [control, setChecked]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": isIndeterminate(checked) ? "mixed" : checked,
        "aria-required": required,
        "data-state": getState(checked),
        "data-disabled": disabled ? "" : void 0,
        disabled,
        value,
        ...checkboxProps,
        ref: composedRefs,
        onKeyDown: composeEventHandlers(onKeyDown, (event) => {
          if (event.key === "Enter") event.preventDefault();
        }),
        onClick: composeEventHandlers(onClick, (event) => {
          setChecked((prevChecked) => isIndeterminate(prevChecked) ? true : !prevChecked);
          if (bubbleInput && isFormControl) {
            hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
            if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
          }
        })
      }
    );
  }
);
CheckboxTrigger.displayName = TRIGGER_NAME;
var Checkbox$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCheckbox,
      name,
      checked,
      defaultChecked,
      required,
      disabled,
      value,
      onCheckedChange,
      form,
      ...checkboxProps
    } = props;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CheckboxProvider,
      {
        __scopeCheckbox,
        checked,
        defaultChecked,
        disabled,
        required,
        onCheckedChange,
        name,
        form,
        value,
        internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxTrigger,
            {
              ...checkboxProps,
              ref: forwardedRef,
              __scopeCheckbox
            }
          ),
          isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
            CheckboxBubbleInput,
            {
              __scopeCheckbox
            }
          )
        ] })
      }
    );
  }
);
Checkbox$1.displayName = CHECKBOX_NAME;
var INDICATOR_NAME = "CheckboxIndicator";
var CheckboxIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCheckbox, forceMount, ...indicatorProps } = props;
    const context = useCheckboxContext(INDICATOR_NAME, __scopeCheckbox);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Presence,
      {
        present: forceMount || isIndeterminate(context.checked) || context.checked === true,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef,
            style: { pointerEvents: "none", ...props.style }
          }
        )
      }
    );
  }
);
CheckboxIndicator.displayName = INDICATOR_NAME;
var BUBBLE_INPUT_NAME = "CheckboxBubbleInput";
var CheckboxBubbleInput = reactExports.forwardRef(
  ({ __scopeCheckbox, ...props }, forwardedRef) => {
    const {
      control,
      hasConsumerStoppedPropagationRef,
      checked,
      defaultChecked,
      required,
      disabled,
      name,
      value,
      form,
      bubbleInput,
      setBubbleInput
    } = useCheckboxContext(BUBBLE_INPUT_NAME, __scopeCheckbox);
    const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = bubbleInput;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      const bubbles = !hasConsumerStoppedPropagationRef.current;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        input.indeterminate = isIndeterminate(checked);
        setChecked.call(input, isIndeterminate(checked) ? false : checked);
        input.dispatchEvent(event);
      }
    }, [bubbleInput, prevChecked, checked, hasConsumerStoppedPropagationRef]);
    const defaultCheckedRef = reactExports.useRef(isIndeterminate(checked) ? false : checked);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.input,
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: defaultChecked ?? defaultCheckedRef.current,
        required,
        disabled,
        name,
        value,
        form,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
CheckboxBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(value) {
  return typeof value === "function";
}
function isIndeterminate(checked) {
  return checked === "indeterminate";
}
function getState(checked) {
  return isIndeterminate(checked) ? "indeterminate" : checked ? "checked" : "unchecked";
}
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Checkbox$1,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        CheckboxIndicator,
        {
          "data-slot": "checkbox-indicator",
          className: "flex items-center justify-center text-current transition-none",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" })
        }
      )
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const ADMIN_PASSWORD = "admin2024";
const SAREE_SUB_TYPES = [
  "Silk",
  "Cotton",
  "Embroidery",
  "Banarasi",
  "Georgette",
  "Chiffon",
  "Kanjivaram",
  "Casual",
  "Other"
];
async function compressImagePass(dataUrl, maxDim, quality) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round(height * maxDim / width);
          width = maxDim;
        } else {
          width = Math.round(width * maxDim / height);
          height = maxDim;
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Canvas not available"));
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = dataUrl;
  });
}
async function compressImage(dataUrl) {
  let result = await compressImagePass(dataUrl, 800, 0.82);
  if (result.length > 9e5) {
    result = await compressImagePass(result, 600, 0.72);
  }
  if (result.length > 7e5) {
    result = await compressImagePass(result, 500, 0.65);
  }
  if (result.length > 12e5) {
    throw new Error(
      "Image is too large even after compression. Please use a smaller photo."
    );
  }
  return result;
}
const defaultForm = {
  name: "",
  category: Category.saree,
  price: BigInt(0),
  description: "",
  imageUrl: "",
  isNewArrival: false,
  isOnOffer: false,
  offerDetails: void 0,
  stockQuantity: BigInt(0)
};
function AdminLoginGate({ onUnlock }) {
  const [password, setPassword] = reactExports.useState("");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setPassword("");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen bg-sand-50 flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-teal-100 shadow-md p-8 w-full max-w-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-teal-50 border-2 border-teal-100 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7 text-teal-600" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-2xl text-teal-800", children: "Admin Panel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-muted-foreground mt-1", children: "Dali's Boutique — Owner Access" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs text-teal-700 uppercase tracking-wider", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              type: showPw ? "text" : "password",
              value: password,
              onChange: (e) => {
                setPassword(e.target.value);
                setError(false);
              },
              placeholder: "Enter admin password",
              required: true,
              "data-ocid": "admin.input",
              className: `pr-10 border-teal-200 focus:ring-teal-400 focus:border-teal-400 ${error ? "border-red-400 focus:ring-red-400 focus:border-red-400" : ""}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowPw((v) => !v),
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-teal-400 hover:text-teal-600",
              children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" })
            }
          )
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            "data-ocid": "admin.login.error_state",
            className: "text-red-500 text-xs mt-1 font-sans",
            children: "Incorrect password. Please try again."
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "submit",
          "data-ocid": "admin.login.submit_button",
          className: "w-full bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans tracking-widest uppercase text-sm rounded-sm border-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 mr-2" }),
            " Enter Admin Panel"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mt-4 font-sans", children: "Owner access only" })
  ] }) });
}
function AdminPage() {
  const [unlocked, setUnlocked] = reactExports.useState(false);
  const { actor, isFetching: actorLoading } = useActor();
  const { data: products, isLoading: loadingProducts } = useGetAllProducts();
  const addProduct = useAddProduct();
  const deleteProduct = useDeleteProduct();
  const isConnected = !!actor && !actorLoading;
  const [form, setForm] = reactExports.useState(defaultForm);
  const [sareeSubType, setSareeSubType] = reactExports.useState("");
  const [priceInput, setPriceInput] = reactExports.useState("");
  const [stockInput, setStockInput] = reactExports.useState("");
  const [imagePreview, setImagePreview] = reactExports.useState("");
  const [imageCompressedSizeKb, setImageCompressedSizeKb] = reactExports.useState(null);
  const [uploadingImage, setUploadingImage] = reactExports.useState(false);
  const [showRetry, setShowRetry] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isConnected) {
      setShowRetry(false);
      return;
    }
    const timer = setTimeout(() => {
      setShowRetry(true);
    }, 8e3);
    return () => clearTimeout(timer);
  }, [isConnected]);
  if (!unlocked) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLoginGate, { onUnlock: () => setUnlocked(true) });
  }
  const handleImageFile = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    setUploadingImage(true);
    setImageCompressedSizeKb(null);
    try {
      const reader = new FileReader();
      reader.onload = async (ev) => {
        var _a2;
        try {
          const raw = (_a2 = ev.target) == null ? void 0 : _a2.result;
          const compressed = await compressImage(raw);
          const sizeKb = Math.round(compressed.length / 1024);
          setForm((prev) => ({ ...prev, imageUrl: compressed }));
          setImagePreview(compressed);
          setImageCompressedSizeKb(sizeKb);
        } catch (err) {
          const msg = err instanceof Error ? err.message : "Could not process image. Try a smaller photo.";
          ue.error(msg);
          console.error(err);
        } finally {
          setUploadingImage(false);
        }
      };
      reader.onerror = () => {
        ue.error("Failed to read image file.");
        setUploadingImage(false);
      };
      reader.readAsDataURL(file);
    } catch (_err) {
      ue.error("Image upload failed. Please try again.");
      setUploadingImage(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isConnected) {
      ue.error(
        "Still connecting to the server. Please wait a moment and try again."
      );
      return;
    }
    const finalImageUrl = imagePreview || form.imageUrl;
    let finalDescription = form.description;
    if (form.category === Category.saree && sareeSubType && sareeSubType !== "Other") {
      const tag = sareeSubType;
      if (!finalDescription.toLowerCase().includes(tag.toLowerCase())) {
        finalDescription = finalDescription ? `${finalDescription} | ${tag}` : tag;
      }
    }
    const product = {
      ...form,
      description: finalDescription,
      imageUrl: finalImageUrl,
      price: BigInt(Math.round(Number.parseFloat(priceInput) || 0)),
      stockQuantity: BigInt(Math.round(Number.parseFloat(stockInput) || 0))
    };
    try {
      await addProduct.mutateAsync(product);
      ue.success(
        "Product added successfully! It will appear in the store shortly."
      );
      setForm(defaultForm);
      setSareeSubType("");
      setPriceInput("");
      setStockInput("");
      setImagePreview("");
      setImageCompressedSizeKb(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("size") || msg.includes("large") || msg.includes("limit")) {
        ue.error(
          "Image is too large. Please use a smaller photo (under 1MB)."
        );
      } else if (msg.includes("Actor not available") || msg.includes("connection") || msg.includes("connect")) {
        ue.error(
          "Connection not ready. Please wait a few seconds and try again."
        );
      } else {
        ue.error(`Failed to add product: ${msg.slice(0, 100)}`);
      }
      console.error("addProduct error:", err);
    }
  };
  const handleDelete = async (id) => {
    if (confirm("Delete this product?")) {
      await deleteProduct.mutateAsync(id);
    }
  };
  const categoryLabel = (cat) => {
    if (cat === Category.saree) return "Saree";
    if (cat === Category.jewelry) return "Jewelry";
    return "Handbag";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "bg-sand-50 min-h-screen py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-7 h-7 text-teal-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl text-teal-800", children: "Admin Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-muted-foreground", children: "Manage your product catalogue — Dali's Boutique" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              "data-ocid": "admin.connection.status",
              className: `flex items-center gap-1.5 text-xs font-sans px-2.5 py-1 rounded-full border ${actorLoading ? "bg-yellow-50 border-yellow-200 text-yellow-700" : isConnected ? "bg-teal-50 border-teal-200 text-teal-700" : "bg-red-50 border-red-200 text-red-700"}`,
              children: actorLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 animate-spin" }),
                " Connecting..."
              ] }) : isConnected ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "w-3 h-3" }),
                " Connected"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "w-3 h-3" }),
                " Offline"
              ] })
            }
          ),
          showRetry && !isConnected && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "admin.connection.retry.button",
              onClick: () => window.location.reload(),
              className: "flex items-center gap-1 text-xs font-sans text-white bg-teal-600 hover:bg-teal-700 px-2.5 py-1 rounded-full transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3" }),
                " Retry"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setUnlocked(false),
            className: "text-xs font-sans text-teal-400 hover:text-teal-600 underline",
            children: "Lock"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-teal-100 shadow-sm p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl text-teal-800 mb-5 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-5 h-5 text-champagne-500" }),
          "Add New Product"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs text-teal-700 uppercase tracking-wider", children: "Product Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.name,
                onChange: (e) => setForm({ ...form, name: e.target.value }),
                placeholder: "e.g. Kanjivaram Silk Saree",
                required: true,
                "data-ocid": "admin.product.name.input",
                className: "mt-1 border-teal-200 focus:ring-teal-400 focus:border-teal-400"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs text-teal-700 uppercase tracking-wider", children: "Category *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: form.category,
                onChange: (e) => {
                  setForm({
                    ...form,
                    category: e.target.value
                  });
                  setSareeSubType("");
                },
                "data-ocid": "admin.product.category.select",
                className: "mt-1 w-full text-sm border border-teal-200 rounded-md px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: Category.saree, children: "Saree" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: Category.jewelry, children: "Jewelry" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: Category.handbag, children: "Handbag" })
                ]
              }
            )
          ] }),
          form.category === Category.saree && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs text-teal-700 uppercase tracking-wider", children: "Saree Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: sareeSubType,
                onChange: (e) => setSareeSubType(e.target.value),
                "data-ocid": "admin.product.sareetype.select",
                className: "mt-1 w-full text-sm border border-teal-200 rounded-md px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Select type —" }),
                  SAREE_SUB_TYPES.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: t, children: t }, t))
                ]
              }
            ),
            sareeSubType && sareeSubType !== "Other" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-teal-500 font-sans mt-1", children: [
              '"',
              sareeSubType,
              '" will be tagged in the description so customers can filter by this type.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs text-teal-700 uppercase tracking-wider", children: "Price (₹) *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: priceInput,
                  onChange: (e) => setPriceInput(e.target.value),
                  placeholder: "0",
                  min: "0",
                  required: true,
                  "data-ocid": "admin.product.price.input",
                  className: "mt-1 border-teal-200 focus:ring-teal-400 focus:border-teal-400"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs text-teal-700 uppercase tracking-wider", children: "Stock *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  value: stockInput,
                  onChange: (e) => setStockInput(e.target.value),
                  placeholder: "0",
                  min: "0",
                  required: true,
                  "data-ocid": "admin.product.stock.input",
                  className: "mt-1 border-teal-200 focus:ring-teal-400 focus:border-teal-400"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs text-teal-700 uppercase tracking-wider", children: "Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                value: form.description,
                onChange: (e) => setForm({ ...form, description: e.target.value }),
                placeholder: "Describe the material, color, occasion...",
                rows: 3,
                "data-ocid": "admin.product.description.textarea",
                className: "mt-1 border-teal-200 focus:ring-teal-400 focus:border-teal-400 resize-none"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs text-teal-700 uppercase tracking-wider", children: "Product Image" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: fileInputRef,
                  type: "file",
                  accept: "image/*",
                  onChange: handleImageFile,
                  className: "hidden",
                  id: "admin-image-file"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "label",
                {
                  htmlFor: "admin-image-file",
                  "data-ocid": "admin.product.image.upload_button",
                  className: `flex items-center justify-center gap-2 w-full cursor-pointer border-2 border-dashed rounded-lg py-4 px-3 text-sm font-sans transition-all ${uploadingImage ? "border-teal-300 bg-teal-50/60 text-teal-700 cursor-wait" : "border-teal-200 hover:border-teal-400 text-teal-600 hover:text-teal-800 hover:bg-teal-50/50"}`,
                  children: uploadingImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                    "Compressing image..."
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "w-5 h-5" }),
                    "Upload photo from computer / phone"
                  ] })
                }
              ),
              imagePreview && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg overflow-hidden border border-teal-100 aspect-[4/3] bg-sand-50", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: imagePreview,
                      alt: "Preview",
                      className: "w-full h-full object-cover object-center",
                      style: { imageRendering: "auto" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setImagePreview("");
                        setImageCompressedSizeKb(null);
                        setForm((prev) => ({ ...prev, imageUrl: "" }));
                        if (fileInputRef.current)
                          fileInputRef.current.value = "";
                      },
                      className: "absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full w-6 h-6 flex items-center justify-center text-teal-600 shadow text-xs font-bold",
                      children: "✕"
                    }
                  )
                ] }),
                imageCompressedSizeKb !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    "data-ocid": "admin.product.image.success_state",
                    className: "text-xs font-sans text-teal-600 flex items-center gap-1",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-2 h-2 rounded-full bg-teal-500" }),
                      "Image ready: ",
                      imageCompressedSizeKb,
                      " KB"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-teal-100" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-sans", children: "or paste image URL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 border-t border-teal-100" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  value: imagePreview ? "" : form.imageUrl,
                  onChange: (e) => {
                    setImagePreview("");
                    setForm((prev) => ({
                      ...prev,
                      imageUrl: e.target.value
                    }));
                  },
                  placeholder: "https://...",
                  "data-ocid": "admin.product.imageurl.input",
                  className: "border-teal-200 focus:ring-teal-400 focus:border-teal-400",
                  disabled: !!imagePreview
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                htmlFor: "admin-new-arrival",
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      id: "admin-new-arrival",
                      checked: form.isNewArrival,
                      onCheckedChange: (v) => setForm({ ...form, isNewArrival: !!v }),
                      "data-ocid": "admin.product.newarrival.checkbox",
                      className: "border-teal-300 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-sans text-teal-700", children: "New Arrival" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "label",
              {
                htmlFor: "admin-on-offer",
                className: "flex items-center gap-2 cursor-pointer",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Checkbox,
                    {
                      id: "admin-on-offer",
                      checked: form.isOnOffer,
                      onCheckedChange: (v) => setForm({ ...form, isOnOffer: !!v }),
                      "data-ocid": "admin.product.onoffer.checkbox",
                      className: "border-teal-300 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-sans text-teal-700", children: "On Offer" })
                ]
              }
            )
          ] }),
          form.isOnOffer && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs text-teal-700 uppercase tracking-wider", children: "Offer Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                value: form.offerDetails ?? "",
                onChange: (e) => setForm({
                  ...form,
                  offerDetails: e.target.value || void 0
                }),
                placeholder: "e.g. 20% off, Buy 1 Get 1...",
                "data-ocid": "admin.product.offerdetails.input",
                className: "mt-1 border-teal-200 focus:ring-teal-400 focus:border-teal-400"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              disabled: addProduct.isPending || !isConnected,
              "data-ocid": "admin.product.submit_button",
              className: "w-full bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans tracking-widest uppercase text-sm rounded-sm border-0 disabled:opacity-60",
              children: addProduct.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
                " ",
                "Adding..."
              ] }) : actorLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
                " ",
                "Connecting..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4 mr-2" }),
                " Add Product"
              ] })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-xl border border-teal-100 shadow-sm p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl text-teal-800 mb-5 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-champagne-500" }),
          "All Products",
          products && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-teal-100 text-teal-700 font-sans text-xs ml-1", children: products.length })
        ] }),
        loadingProducts ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: Array.from({ length: 5 }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-16 rounded-lg" }, i)) }) : products && products.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "data-ocid": "admin.products.list",
            className: "space-y-2 max-h-[600px] overflow-y-auto pr-1",
            children: products.map((product, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                "data-ocid": `admin.products.item.${idx + 1}`,
                className: "flex items-center gap-3 p-3 rounded-lg border border-teal-50 hover:border-teal-200 hover:bg-teal-50/50 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-14 h-16 rounded overflow-hidden bg-sand-100 border border-teal-100", children: product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: product.imageUrl,
                      alt: product.name,
                      loading: "lazy",
                      decoding: "async",
                      style: { imageRendering: "auto" },
                      className: "w-full h-full object-cover object-center"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-teal-200" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm text-teal-800 truncate", children: product.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-0.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-sans text-xs text-teal-600", children: [
                        "₹",
                        Number(product.price).toLocaleString("en-IN")
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          variant: "outline",
                          className: "text-xs font-sans border-teal-200 text-teal-600 py-0",
                          children: categoryLabel(product.category)
                        }
                      ),
                      product.isNewArrival && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-teal-100 text-teal-700 text-xs font-sans py-0", children: "New" }),
                      product.isOnOffer && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-champagne-100 text-champagne-700 text-xs font-sans py-0", children: "Sale" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "icon",
                      onClick: () => handleDelete(product.id),
                      disabled: deleteProduct.isPending,
                      "data-ocid": `admin.products.delete_button.${idx + 1}`,
                      className: "shrink-0 text-teal-300 hover:text-destructive hover:bg-destructive/10 transition-colors",
                      children: deleteProduct.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
                    }
                  )
                ]
              },
              product.id.toString()
            ))
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": "admin.products.empty_state",
            className: "text-center py-12",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-12 h-12 text-teal-200 mx-auto mb-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-teal-700", children: "No products yet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-muted-foreground mt-1", children: "Add your first product using the form" })
            ]
          }
        )
      ] }) })
    ] })
  ] }) });
}
export {
  AdminPage as default
};

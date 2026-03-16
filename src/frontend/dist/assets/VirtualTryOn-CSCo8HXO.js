import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as Sparkles, B as Button, g as createContextScope, m as Primitive, d as cn } from "./index-D3JC8jlK.js";
import { L as LoaderCircle, E as EyeOff, a as Eye, R as RefreshCw } from "./refresh-cw-gTXhO3bE.js";
import { d as useActor } from "./useQueries-eecWsNPz.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const CANVAS_W = 520;
const CANVAS_H = 650;
const PROCESSING_STEPS = [
  { label: "Scanning facial landmarks & body pose...", duration: 850 },
  { label: "Analysing skin tone & ambient lighting...", duration: 750 },
  { label: "Mapping garment geometry to body shape...", duration: 900 },
  { label: "Applying fabric texture & fold simulation...", duration: 800 },
  { label: "Rendering light interaction & shadows...", duration: 700 },
  { label: "Compositing final AI look...", duration: 650 }
];
function drawCoverFit(ctx, img, x, y, w, h) {
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const sw = img.naturalWidth * scale;
  const sh = img.naturalHeight * scale;
  ctx.drawImage(img, x + (w - sw) / 2, y + (h - sh) / 2, sw, sh);
}
function sampleAverageColor(ctx, x, y, w, h) {
  try {
    const cx = Math.max(0, Math.round(x));
    const cy = Math.max(0, Math.round(y));
    const cw = Math.max(1, Math.round(w));
    const ch = Math.max(1, Math.round(h));
    const data = ctx.getImageData(cx, cy, cw, ch).data;
    let r = 0;
    let g = 0;
    let b = 0;
    let count = 0;
    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }
    if (count === 0) return [200, 160, 120];
    return [
      Math.round(r / count),
      Math.round(g / count),
      Math.round(b / count)
    ];
  } catch {
    return [200, 160, 120];
  }
}
function drawDecorativeBorder(ctx) {
  ctx.save();
  const grad = ctx.createLinearGradient(0, 0, CANVAS_W, CANVAS_H);
  grad.addColorStop(0, "rgba(220,175,60,0.75)");
  grad.addColorStop(0.5, "rgba(255,215,100,0.95)");
  grad.addColorStop(1, "rgba(180,130,40,0.7)");
  ctx.strokeStyle = grad;
  ctx.lineWidth = 3;
  ctx.strokeRect(2, 2, CANVAS_W - 4, CANVAS_H - 4);
  ctx.strokeStyle = "rgba(200,160,50,0.3)";
  ctx.lineWidth = 1;
  ctx.strokeRect(8, 8, CANVAS_W - 16, CANVAS_H - 16);
  const corner = 22;
  ctx.strokeStyle = "rgba(220,175,60,0.9)";
  ctx.lineWidth = 2;
  for (const [cx, cy, sx, sy] of [
    [4, 4, 1, 1],
    [CANVAS_W - 4, 4, -1, 1],
    [4, CANVAS_H - 4, 1, -1],
    [CANVAS_W - 4, CANVAS_H - 4, -1, -1]
  ]) {
    ctx.beginPath();
    ctx.moveTo(cx + sx * corner, cy);
    ctx.lineTo(cx, cy);
    ctx.lineTo(cx, cy + sy * corner);
    ctx.stroke();
  }
  ctx.restore();
}
function drawWatermark(ctx) {
  ctx.save();
  ctx.font = "italic 11px Georgia, serif";
  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.textAlign = "right";
  ctx.shadowColor = "rgba(0,0,0,0.85)";
  ctx.shadowBlur = 6;
  ctx.fillText(
    "✨ Dali's Boutique — AI Look Generator",
    CANVAS_W - 14,
    CANVAS_H - 12
  );
  ctx.restore();
}
function drawBottomLabel(ctx, text) {
  ctx.save();
  const g = ctx.createLinearGradient(0, CANVAS_H - 80, 0, CANVAS_H);
  g.addColorStop(0, "rgba(0,0,0,0)");
  g.addColorStop(0.5, "rgba(0,0,0,0.6)");
  g.addColorStop(1, "rgba(0,0,0,0.88)");
  ctx.fillStyle = g;
  ctx.fillRect(0, CANVAS_H - 80, CANVAS_W, 80);
  ctx.font = "bold 16px Georgia, serif";
  ctx.fillStyle = "#fff8ee";
  ctx.textAlign = "center";
  ctx.shadowColor = "rgba(0,0,0,1)";
  ctx.shadowBlur = 10;
  ctx.fillText(text, CANVAS_W / 2, CANVAS_H - 20);
  ctx.restore();
}
function drawProductThumbnail(ctx, productImg) {
  const tw = 72;
  const th = 90;
  const tx = CANVAS_W - tw - 16;
  const ty = 16;
  const r = 8;
  ctx.save();
  ctx.shadowColor = "rgba(220,175,60,0.7)";
  ctx.shadowBlur = 16;
  ctx.beginPath();
  ctx.roundRect(tx - 3, ty - 3, tw + 6, th + 6, r + 2);
  ctx.fillStyle = "rgba(20,15,10,0.6)";
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(tx, ty, tw, th, r);
  ctx.clip();
  ctx.drawImage(productImg, tx, ty, tw, th);
  ctx.restore();
  ctx.save();
  ctx.beginPath();
  ctx.roundRect(tx, ty, tw, th, r);
  ctx.strokeStyle = "rgba(220,175,60,0.95)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.font = "bold 8px Arial, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.9)";
  ctx.textAlign = "center";
  ctx.shadowColor = "rgba(0,0,0,0.9)";
  ctx.shadowBlur = 4;
  ctx.fillText("PRODUCT", tx + tw / 2, ty + th + 13);
  ctx.restore();
}
function drawFabricFolds(ctx, x, y, w, h, foldCount = 8, alpha = 0.045) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.clip();
  for (let i = 0; i < foldCount; i++) {
    const fx = x + w / foldCount * i + w / (foldCount * 2);
    ctx.beginPath();
    for (let row = y; row < y + h; row += 2) {
      const offset = Math.sin((row - y) * 0.045 + i * 0.7) * 6 + fx;
      if (row === y) ctx.moveTo(offset, row);
      else ctx.lineTo(offset, row);
    }
    ctx.globalAlpha = alpha + (i % 2 === 0 ? 0.02 : 0);
    ctx.strokeStyle = i % 2 === 0 ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.3)";
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }
  ctx.restore();
}
function drawBodyVignette(ctx, startY) {
  ctx.save();
  const vgGrad = ctx.createRadialGradient(
    CANVAS_W / 2,
    CANVAS_H * 0.55,
    CANVAS_W * 0.18,
    CANVAS_W / 2,
    CANVAS_H * 0.55,
    CANVAS_W * 0.82
  );
  vgGrad.addColorStop(0, "rgba(0,0,0,0)");
  vgGrad.addColorStop(0.6, "rgba(0,0,0,0.05)");
  vgGrad.addColorStop(1, "rgba(0,0,0,0.22)");
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = vgGrad;
  ctx.fillRect(0, startY, CANVAS_W, CANVAS_H - startY);
  ctx.restore();
}
function compositeForSaree(ctx, userImg, productImg) {
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  drawCoverFit(ctx, userImg, 0, 0, CANVAS_W, CANVAS_H);
  ctx.restore();
  const [avgR, avgG, avgB] = sampleAverageColor(
    ctx,
    Math.floor(CANVAS_W * 0.3),
    Math.floor(CANVAS_H * 0.06),
    Math.floor(CANVAS_W * 0.4),
    Math.floor(CANVAS_H * 0.18)
  );
  const lightness = (avgR + avgG + avgB) / 3;
  const isDark = lightness < 130;
  const [bodyR, bodyG, bodyB] = sampleAverageColor(
    ctx,
    Math.floor(CANVAS_W * 0.25),
    Math.floor(CANVAS_H * 0.22),
    Math.floor(CANVAS_W * 0.5),
    Math.floor(CANVAS_H * 0.08)
  );
  const sareeStartY = Math.floor(CANVAS_H * 0.15);
  const sareeH = CANVAS_H - sareeStartY;
  const offCanvas = document.createElement("canvas");
  offCanvas.width = CANVAS_W;
  offCanvas.height = CANVAS_H;
  const offCtx = offCanvas.getContext("2d");
  offCtx.save();
  offCtx.globalAlpha = 1;
  offCtx.drawImage(productImg, 0, sareeStartY, CANVAS_W, sareeH);
  offCtx.restore();
  drawFabricFolds(offCtx, 0, sareeStartY, CANVAS_W, sareeH, 10, 0.04);
  offCtx.save();
  for (let row = sareeStartY; row < CANVAS_H; row += 4) {
    const alpha = row % 8 === 0 ? 0.028 : 0.014;
    offCtx.globalAlpha = alpha;
    offCtx.strokeStyle = row % 8 === 0 ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.5)";
    offCtx.lineWidth = 0.4;
    offCtx.beginPath();
    offCtx.moveTo(0, row);
    offCtx.lineTo(CANVAS_W, row);
    offCtx.stroke();
  }
  offCtx.restore();
  if (isDark) {
    offCtx.save();
    offCtx.globalAlpha = 0.12;
    offCtx.globalCompositeOperation = "multiply";
    offCtx.fillStyle = `rgb(${Math.round(avgR * 0.6)},${Math.round(avgG * 0.6)},${Math.round(avgB * 0.6)})`;
    offCtx.fillRect(0, sareeStartY, CANVAS_W, sareeH);
    offCtx.globalCompositeOperation = "source-over";
    offCtx.restore();
  } else {
    offCtx.save();
    offCtx.globalAlpha = 0.08;
    offCtx.globalCompositeOperation = "screen";
    const warmGrad = offCtx.createLinearGradient(
      0,
      sareeStartY,
      0,
      sareeStartY + sareeH * 0.4
    );
    warmGrad.addColorStop(
      0,
      `rgba(${avgR},${Math.round(avgG * 0.85)},${Math.round(avgB * 0.7)},1)`
    );
    warmGrad.addColorStop(1, "rgba(0,0,0,0)");
    offCtx.fillStyle = warmGrad;
    offCtx.fillRect(0, sareeStartY, CANVAS_W, sareeH * 0.4);
    offCtx.restore();
  }
  const fadeTopGrad = offCtx.createLinearGradient(
    0,
    sareeStartY,
    0,
    sareeStartY + 110
  );
  fadeTopGrad.addColorStop(0, "rgba(0,0,0,1)");
  fadeTopGrad.addColorStop(0.7, "rgba(0,0,0,0)");
  offCtx.globalCompositeOperation = "destination-out";
  offCtx.fillStyle = fadeTopGrad;
  offCtx.fillRect(0, sareeStartY, CANVAS_W, 110);
  const fadeLeftGrad = offCtx.createLinearGradient(0, 0, 40, 0);
  fadeLeftGrad.addColorStop(0, "rgba(0,0,0,0.55)");
  fadeLeftGrad.addColorStop(1, "rgba(0,0,0,0)");
  offCtx.fillStyle = fadeLeftGrad;
  offCtx.fillRect(0, sareeStartY, 40, sareeH);
  const fadeRightGrad = offCtx.createLinearGradient(
    CANVAS_W - 40,
    0,
    CANVAS_W,
    0
  );
  fadeRightGrad.addColorStop(0, "rgba(0,0,0,0)");
  fadeRightGrad.addColorStop(1, "rgba(0,0,0,0.55)");
  offCtx.fillStyle = fadeRightGrad;
  offCtx.fillRect(CANVAS_W - 40, sareeStartY, 40, sareeH);
  offCtx.globalCompositeOperation = "source-over";
  ctx.save();
  ctx.globalAlpha = 0.88;
  ctx.globalCompositeOperation = "source-over";
  ctx.drawImage(offCanvas, 0, 0, CANVAS_W, CANVAS_H);
  ctx.restore();
  const faceH = Math.floor(CANVAS_H * 0.2);
  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, CANVAS_W, faceH);
  ctx.clip();
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  drawCoverFit(ctx, userImg, 0, 0, CANVAS_W, CANVAS_H);
  ctx.restore();
  ctx.save();
  const seamGrad = ctx.createLinearGradient(0, faceH - 15, 0, faceH + 75);
  seamGrad.addColorStop(0, "rgba(0,0,0,0)");
  seamGrad.addColorStop(0.35, `rgba(${bodyR},${bodyG},${bodyB},0.08)`);
  seamGrad.addColorStop(0.7, "rgba(0,0,0,0.05)");
  seamGrad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = seamGrad;
  ctx.fillRect(0, faceH - 15, CANVAS_W, 90);
  ctx.restore();
  ctx.save();
  const neckShadow = ctx.createLinearGradient(0, faceH + 10, 0, faceH + 50);
  neckShadow.addColorStop(0, "rgba(0,0,0,0.18)");
  neckShadow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.globalAlpha = 0.6;
  ctx.fillStyle = neckShadow;
  ctx.fillRect(CANVAS_W * 0.2, faceH + 10, CANVAS_W * 0.6, 40);
  ctx.restore();
  const [sareeR, sareeG, sareeB] = sampleAverageColor(
    offCtx,
    Math.floor(CANVAS_W * 0.2),
    sareeStartY + 60,
    Math.floor(CANVAS_W * 0.6),
    80
  );
  ctx.save();
  ctx.globalAlpha = 0.07;
  ctx.globalCompositeOperation = "screen";
  ctx.fillStyle = `rgb(${sareeR},${sareeG},${sareeB})`;
  ctx.fillRect(CANVAS_W * 0.15, faceH - 30, CANVAS_W * 0.7, 80);
  ctx.restore();
  drawBodyVignette(ctx, faceH);
  drawProductThumbnail(ctx, productImg);
  drawBottomLabel(ctx, "✨ AI Saree Try-On — Dali's Boutique");
  drawDecorativeBorder(ctx);
  drawWatermark(ctx);
}
function compositeForJewelry(ctx, userImg, productImg) {
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  drawCoverFit(ctx, userImg, 0, 0, CANVAS_W, CANVAS_H);
  ctx.restore();
  const jw = Math.floor(CANVAS_W * 0.52);
  const aspect = productImg.naturalHeight > 0 && productImg.naturalWidth > 0 ? productImg.naturalHeight / productImg.naturalWidth : 1;
  const jh = Math.floor(jw * aspect);
  const jx = Math.floor((CANVAS_W - jw) / 2);
  const jy = Math.floor(CANVAS_H * 0.24);
  const [neckR, neckG, neckB] = sampleAverageColor(
    ctx,
    jx,
    jy,
    jw,
    Math.min(jh, 40)
  );
  const off = document.createElement("canvas");
  off.width = jw;
  off.height = jh;
  const offCtx = off.getContext("2d");
  offCtx.drawImage(productImg, 0, 0, jw, jh);
  offCtx.globalCompositeOperation = "destination-in";
  const mask = offCtx.createRadialGradient(
    jw / 2,
    jh / 2,
    jh * 0.05,
    jw / 2,
    jh / 2,
    jh * 0.68
  );
  mask.addColorStop(0, "rgba(0,0,0,1)");
  mask.addColorStop(0.6, "rgba(0,0,0,0.97)");
  mask.addColorStop(0.85, "rgba(0,0,0,0.7)");
  mask.addColorStop(1, "rgba(0,0,0,0)");
  offCtx.fillStyle = mask;
  offCtx.fillRect(0, 0, jw, jh);
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.globalCompositeOperation = "multiply";
  ctx.shadowColor = `rgb(${Math.round(neckR * 0.6)},${Math.round(neckG * 0.5)},${Math.round(neckB * 0.4)})`;
  ctx.shadowBlur = 18;
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 7;
  ctx.drawImage(off, jx + 5, jy + 8, jw, jh);
  ctx.restore();
  const scalePerspective = 0.96;
  const perspShift = jw * (1 - scalePerspective) / 2;
  ctx.save();
  ctx.globalAlpha = 0.95;
  ctx.globalCompositeOperation = "source-over";
  ctx.transform(scalePerspective, 0, 0, 1, perspShift, 0);
  ctx.drawImage(off, jx / scalePerspective, jy, jw, jh);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.globalCompositeOperation = "screen";
  const outerGlow = ctx.createRadialGradient(
    jx + jw / 2,
    jy + jh / 2,
    0,
    jx + jw / 2,
    jy + jh / 2,
    jw * 0.72
  );
  outerGlow.addColorStop(0, "rgba(255,215,80,0.85)");
  outerGlow.addColorStop(0.5, "rgba(255,185,50,0.4)");
  outerGlow.addColorStop(1, "rgba(255,165,30,0)");
  ctx.fillStyle = outerGlow;
  ctx.fillRect(jx - 30, jy - 20, jw + 60, jh + 40);
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.16;
  ctx.globalCompositeOperation = "screen";
  const innerGlow = ctx.createRadialGradient(
    jx + jw * 0.35,
    jy + jh * 0.3,
    0,
    jx + jw * 0.35,
    jy + jh * 0.3,
    jw * 0.35
  );
  innerGlow.addColorStop(0, "rgba(255,255,230,1)");
  innerGlow.addColorStop(0.4, "rgba(255,230,140,0.5)");
  innerGlow.addColorStop(1, "rgba(255,230,140,0)");
  ctx.fillStyle = innerGlow;
  ctx.fillRect(jx, jy, jw, jh);
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.06;
  ctx.globalCompositeOperation = "screen";
  ctx.fillStyle = "rgba(255,200,80,1)";
  ctx.fillRect(jx - 10, jy - 30, jw + 20, 60);
  ctx.restore();
  drawBottomLabel(ctx, "✨ AI Jewelry Look — Dali's Boutique");
  drawDecorativeBorder(ctx);
  drawWatermark(ctx);
}
function compositeForHandbag(ctx, userImg, productImg) {
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = "source-over";
  drawCoverFit(ctx, userImg, 0, 0, CANVAS_W, CANVAS_H);
  ctx.restore();
  const bw = Math.floor(CANVAS_W * 0.36);
  const aspect = productImg.naturalHeight > 0 && productImg.naturalWidth > 0 ? productImg.naturalHeight / productImg.naturalWidth : 1;
  const bh = Math.floor(bw * aspect);
  const bx = Math.floor(CANVAS_W * 0.56);
  const by = Math.floor(CANVAS_H * 0.58) - Math.floor(bh / 2);
  const [bgR, bgG, bgB] = sampleAverageColor(ctx, bx, by + bh - 30, bw, 30);
  ctx.save();
  ctx.globalAlpha = 0.28;
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = `rgb(${Math.round(bgR * 0.4)},${Math.round(bgG * 0.4)},${Math.round(bgB * 0.4)})`;
  ctx.beginPath();
  ctx.ellipse(bx + bw / 2, by + bh + 6, bw * 0.42, 9, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.28;
  ctx.globalCompositeOperation = "multiply";
  ctx.shadowColor = `rgb(${Math.round(bgR * 0.3)},${Math.round(bgG * 0.3)},${Math.round(bgB * 0.3)})`;
  ctx.shadowBlur = 28;
  ctx.shadowOffsetX = 7;
  ctx.shadowOffsetY = 12;
  ctx.drawImage(productImg, bx, by, bw, bh);
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.96;
  ctx.globalCompositeOperation = "source-over";
  ctx.transform(1, 0, -0.04, 1, by * 0.04, 0);
  ctx.shadowColor = "rgba(0,0,0,0.42)";
  ctx.shadowBlur = 16;
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 9;
  ctx.drawImage(productImg, bx, by, bw, bh);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.13;
  ctx.globalCompositeOperation = "screen";
  const hl = ctx.createLinearGradient(bx, by, bx + bw * 0.5, by + bh * 0.5);
  hl.addColorStop(0, "rgba(255,255,255,1)");
  hl.addColorStop(0.4, "rgba(255,255,255,0.4)");
  hl.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = hl;
  ctx.fillRect(bx, by, bw, bh * 0.6);
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.07;
  ctx.globalCompositeOperation = "screen";
  const midShine = ctx.createLinearGradient(
    bx,
    by + bh * 0.35,
    bx,
    by + bh * 0.55
  );
  midShine.addColorStop(0, "rgba(255,255,255,0)");
  midShine.addColorStop(0.5, "rgba(255,255,255,1)");
  midShine.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = midShine;
  ctx.fillRect(bx, by + bh * 0.35, bw, bh * 0.2);
  ctx.restore();
  drawProductThumbnail(ctx, productImg);
  drawBottomLabel(ctx, "✨ AI Handbag Look — Dali's Boutique");
  drawDecorativeBorder(ctx);
  drawWatermark(ctx);
}
function TryOnCanvas({
  userImage,
  productImageUrl,
  categoryLabel,
  productName
}) {
  const canvasRef = reactExports.useRef(null);
  const [phase, setPhase] = reactExports.useState(
    "processing"
  );
  const [steps, setSteps] = reactExports.useState(
    PROCESSING_STEPS.map((s, i) => ({
      label: s.label,
      done: false,
      active: i === 0
    }))
  );
  const [progress, setProgress] = reactExports.useState(0);
  const [showBefore, setShowBefore] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!userImage || !productImageUrl) return;
    setPhase("processing");
    setShowBefore(false);
    setSteps(
      PROCESSING_STEPS.map((s, i) => ({
        label: s.label,
        done: false,
        active: i === 0
      }))
    );
    setProgress(0);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const userImg = new Image();
    const productImg = new Image();
    let userLoaded = false;
    let productLoaded = false;
    let hasError = false;
    let cancelled = false;
    const totalDuration = PROCESSING_STEPS.reduce(
      (s, st) => s + st.duration,
      0
    );
    async function runSteps() {
      let elapsed = 0;
      for (let i = 0; i < PROCESSING_STEPS.length; i++) {
        if (cancelled) break;
        const step = PROCESSING_STEPS[i];
        setSteps(
          (prev) => prev.map((s, idx) => ({ ...s, active: idx === i, done: idx < i }))
        );
        const stepPct = step.duration / totalDuration * 100;
        const startPct = elapsed / totalDuration * 100;
        const startTime = Date.now();
        await new Promise((resolve) => {
          const tick = () => {
            if (cancelled) {
              resolve();
              return;
            }
            const t = Math.min(1, (Date.now() - startTime) / step.duration);
            setProgress(startPct + stepPct * t);
            if (t < 1) requestAnimationFrame(tick);
            else resolve();
          };
          requestAnimationFrame(tick);
        });
        elapsed += step.duration;
        setSteps(
          (prev) => prev.map((s, idx) => ({
            ...s,
            active: idx === i + 1,
            done: idx <= i
          }))
        );
      }
      setProgress(100);
    }
    function tryDraw() {
      if (!userLoaded || !productLoaded || hasError) return;
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      try {
        if (categoryLabel === "jewelry") {
          compositeForJewelry(ctx, userImg, productImg);
        } else if (categoryLabel === "handbag") {
          compositeForHandbag(ctx, userImg, productImg);
        } else {
          compositeForSaree(ctx, userImg, productImg);
        }
        setPhase("done");
      } catch {
        hasError = true;
        setPhase("error");
      }
    }
    userImg.onload = () => {
      userLoaded = true;
      tryDraw();
    };
    userImg.onerror = () => {
      hasError = true;
      setPhase("error");
    };
    userImg.src = userImage;
    productImg.crossOrigin = "anonymous";
    productImg.onload = () => {
      productLoaded = true;
      tryDraw();
    };
    productImg.onerror = () => {
      const fallback = new Image();
      fallback.onload = () => {
        productLoaded = true;
        tryDraw();
      };
      fallback.onerror = () => {
        hasError = true;
        setPhase("error");
      };
      fallback.src = productImageUrl;
    };
    productImg.src = productImageUrl;
    runSteps();
    return () => {
      cancelled = true;
    };
  }, [userImage, productImageUrl, categoryLabel]);
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    try {
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/jpeg", 0.94);
      a.download = `dalis-boutique-ai-look-${productName.replace(/\s+/g, "-").toLowerCase()}.jpg`;
      a.click();
    } catch {
    }
  };
  if (phase === "error") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center justify-center rounded-xl border border-dashed border-amber-300 bg-amber-50 text-amber-700 text-sm font-sans p-8",
        style: { width: CANVAS_W, maxWidth: "100%" },
        "data-ocid": "tryon.error_state",
        children: "Preview unavailable — please try a different image."
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 w-full", children: [
    phase === "processing" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-full rounded-2xl overflow-hidden shadow-2xl",
        style: {
          maxWidth: CANVAS_W,
          background: "linear-gradient(145deg, #0f0c08 0%, #1a1208 40%, #12100e 100%)"
        },
        "data-ocid": "tryon.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-11 h-11 rounded-full flex items-center justify-center shadow-lg shrink-0",
                style: {
                  background: "linear-gradient(135deg, #c8922a, #e8b84b, #9b6e1a)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-white font-semibold text-sm tracking-wide",
                  style: { fontFamily: "Georgia, serif" },
                  children: "AI Look Generator"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-400/70 text-xs", children: "Dali's Boutique Virtual Styling" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce",
                style: { animationDelay: `${i * 0.15}s` }
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-400/60", children: "Neural Processing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-300 font-semibold tabular-nums", children: [
                Math.round(progress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-2.5 rounded-full overflow-hidden",
                style: {
                  background: "rgba(255,200,80,0.08)",
                  border: "1px solid rgba(200,145,30,0.2)"
                },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full transition-all duration-100",
                    style: {
                      width: `${progress}%`,
                      background: "linear-gradient(90deg, #8B5E1A, #C8922A, #E8B84B, #F5D070)",
                      boxShadow: "0 0 8px rgba(232,184,75,0.55)"
                    }
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: steps.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex items-center gap-3 transition-all duration-300 ${step.done ? "opacity-55" : step.active ? "opacity-100" : "opacity-25"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${step.done ? "bg-green-900/40 border border-green-600/50" : step.active ? "border border-amber-400/60" : "border border-white/10"}`,
                    style: step.active ? {
                      background: "rgba(200,146,42,0.2)",
                      boxShadow: "0 0 8px rgba(200,146,42,0.3)"
                    } : {},
                    children: step.done ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-green-400" }) : step.active ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-3 h-3 text-amber-400 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-white/15" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `text-xs font-medium ${step.done ? "text-green-400/70 line-through decoration-green-700" : step.active ? "text-amber-300" : "text-white/25"}`,
                    style: step.active ? { fontFamily: "Georgia, serif" } : {},
                    children: step.label
                  }
                ),
                step.active && /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 text-amber-400 animate-pulse ml-auto shrink-0" })
              ]
            },
            step.label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "w-full rounded-xl overflow-hidden relative",
              style: {
                height: 180,
                background: "rgba(255,200,80,0.04)",
                border: "1px solid rgba(200,145,30,0.12)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 animate-pulse",
                    style: {
                      background: "linear-gradient(135deg, rgba(200,145,30,0.08) 0%, rgba(200,145,30,0.02) 50%, rgba(200,145,30,0.08) 100%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-7 h-7 text-amber-500/40 animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-400/40 text-xs", children: "Generating your AI look..." })
                ] })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative rounded-2xl overflow-hidden shadow-2xl",
        style: {
          maxWidth: "100%",
          display: phase === "done" ? "block" : "none",
          border: "1px solid rgba(220,175,60,0.3)"
        },
        children: [
          phase === "done" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setShowBefore((v) => !v),
              className: "flex items-center gap-1.5 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border transition-colors",
              style: {
                background: "rgba(0,0,0,0.55)",
                borderColor: "rgba(255,255,255,0.18)"
              },
              "data-ocid": "tryon.toggle",
              children: showBefore ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-3 h-3" }),
                " View AI Look"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-3 h-3" }),
                " View Original"
              ] })
            }
          ) }),
          phase === "done" && !showBefore && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "backdrop-blur-md text-[9px] px-2.5 py-1 rounded-full text-center leading-tight",
              style: {
                background: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(220,175,60,0.35)",
                color: "rgba(255,215,80,0.9)",
                letterSpacing: "0.05em"
              },
              children: "✨ AI Look Generator"
            }
          ) }),
          showBefore && userImage && phase === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", style: { zIndex: 5 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: userImage,
                alt: "Original portrait",
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm",
                style: { background: "rgba(0,0,0,0.65)", whiteSpace: "nowrap" },
                children: "Original Photo"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "canvas",
            {
              ref: canvasRef,
              width: CANVAS_W,
              height: CANVAS_H,
              "data-ocid": "tryon.canvas_target",
              style: { display: "block", maxWidth: "100%", height: "auto" }
            }
          )
        ]
      }
    ),
    phase === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: handleDownload,
          "data-ocid": "tryon.download_button",
          variant: "outline",
          size: "sm",
          className: "gap-2 text-xs tracking-wider uppercase rounded-full px-6",
          style: {
            borderColor: "rgba(200,145,30,0.55)",
            color: "#8B5E1A"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-3.5 h-3.5" }),
            "Save AI Look"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground text-center max-w-xs leading-relaxed", children: "AI Style Preview — for best results, use a clear front-facing photo with good lighting." })
    ] })
  ] });
}
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeProgress,
      value: valueProp = null,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      ...progressProps
    } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
      console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
      console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressProvider, { scope: __scopeProgress, value, max, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value ?? void 0,
        "data-max": max,
        ...progressProps,
        ref: forwardedRef
      }
    ) });
  }
);
Progress$1.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
      }
    );
  }
);
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress$1;
var Indicator = ProgressIndicator;
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
async function compressDataUrl(dataUrl, maxDim = 768, quality = 0.88) {
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
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function callReplicateVirtualTryOn(actor, humanImageDataUrl, garmentImageDataUrlOrUrl, garmentDescription) {
  const compressedHuman = await compressDataUrl(humanImageDataUrl, 768, 0.85);
  let garmentInput = garmentImageDataUrlOrUrl;
  if (garmentImageDataUrlOrUrl.startsWith("data:")) {
    garmentInput = await compressDataUrl(garmentImageDataUrlOrUrl, 768, 0.85);
  }
  const createResponseJson = await actor.createReplicatePrediction(
    compressedHuman,
    garmentInput,
    garmentDescription
  );
  const createData = JSON.parse(createResponseJson);
  const predictionId = createData.id;
  if (!predictionId) {
    throw new Error(
      `No prediction ID returned: ${createData.error ?? createResponseJson}`
    );
  }
  for (let i = 0; i < 40; i++) {
    await sleep(3e3);
    const pollResponseJson = await actor.pollReplicatePrediction(predictionId);
    const pollData = JSON.parse(pollResponseJson);
    if (pollData.status === "succeeded") {
      const output = pollData.output;
      if (Array.isArray(output) && output.length > 0) return output[0];
      if (typeof output === "string") return output;
      throw new Error("Unexpected output format from Replicate");
    }
    if (pollData.status === "failed" || pollData.status === "canceled") {
      throw new Error(
        `AI generation ${pollData.status}: ${pollData.error ?? "unknown"}`
      );
    }
  }
  throw new Error("AI generation timed out after 2 minutes");
}
function computeScore(item, skinTone, bodyType, occasion, cat) {
  const nameHash = item.name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  let score = 55 + nameHash % 20;
  const tips = [];
  const desc = `${item.description} ${item.name}`.toLowerCase();
  if (cat === "jewelry") {
    if (skinTone === "fair") {
      if (desc.includes("silver") || desc.includes("pearl") || desc.includes("white"))
        score += 10;
      tips.push("Silver and pearl jewelry complement fair skin elegantly.");
    } else if (skinTone === "wheatish") {
      if (desc.includes("gold") || desc.includes("temple") || desc.includes("antique"))
        score += 10;
      tips.push("Gold and antique jewelry beautifully enhances wheatish skin.");
    } else if (skinTone === "dusky") {
      if (desc.includes("gold") || desc.includes("ruby") || desc.includes("emerald"))
        score += 10;
      tips.push(
        "Bold gold and gemstone jewelry creates a stunning look on dusky skin."
      );
    } else if (skinTone === "dark") {
      if (desc.includes("gold") || desc.includes("bright") || desc.includes("kundan"))
        score += 10;
      tips.push(
        "Kundan and gold jewelry creates a magnificent contrast on dark skin."
      );
    }
    if (occasion === "wedding") {
      if (desc.includes("bridal") || desc.includes("set") || desc.includes("necklace"))
        score += 12;
      tips.push("Complete bridal jewelry sets are perfect for weddings.");
    } else if (occasion === "casual") {
      if (desc.includes("simple") || desc.includes("light") || desc.includes("stud"))
        score += 12;
      tips.push("Simple studs and light chains are ideal for everyday wear.");
    } else if (occasion === "festival") {
      if (desc.includes("traditional") || desc.includes("temple") || desc.includes("jhumka"))
        score += 10;
      tips.push("Traditional temple jewelry adds a festive touch.");
    } else if (occasion === "party") {
      if (desc.includes("statement") || desc.includes("bold") || desc.includes("cocktail"))
        score += 10;
      tips.push("Bold statement pieces make you stand out at parties.");
    }
    if (tips.length === 0) {
      tips.push(
        "Pair with a matching saree or lehenga for a coordinated look."
      );
      tips.push("Layer delicate pieces for a trendy stacked effect.");
    }
  } else if (cat === "handbag") {
    if (skinTone === "fair") {
      if (desc.includes("pastel") || desc.includes("nude") || desc.includes("blush"))
        score += 10;
      tips.push(
        "Pastel and nude bags pair effortlessly with fair-toned outfits."
      );
    } else if (skinTone === "wheatish") {
      if (desc.includes("tan") || desc.includes("brown") || desc.includes("gold"))
        score += 10;
      tips.push("Tan and brown bags complement warm wheatish tones perfectly.");
    } else if (skinTone === "dusky") {
      if (desc.includes("bright") || desc.includes("vibrant") || desc.includes("red"))
        score += 10;
      tips.push("Vibrant and bright bags create a bold, eye-catching look.");
    } else if (skinTone === "dark") {
      if (desc.includes("jewel") || desc.includes("embroidered") || desc.includes("gold"))
        score += 10;
      tips.push(
        "Embroidered and jewel-toned bags look gorgeous against dark skin."
      );
    }
    if (bodyType === "petite") {
      if (desc.includes("clutch") || desc.includes("small") || desc.includes("mini"))
        score += 8;
      tips.push(
        "Clutches and mini bags are perfectly proportioned for petite frames."
      );
    } else if (bodyType === "tall") {
      if (desc.includes("tote") || desc.includes("large") || desc.includes("structured"))
        score += 8;
      tips.push("Large structured bags look balanced on tall frames.");
    } else if (bodyType === "plus") {
      if (desc.includes("tote") || desc.includes("satchel") || desc.includes("hobo"))
        score += 8;
      tips.push(
        "Totes and satchels are flattering and practical for plus-size frames."
      );
    }
    if (occasion === "wedding") {
      if (desc.includes("potli") || desc.includes("bridal") || desc.includes("embroidered"))
        score += 12;
      tips.push("Embroidered potli bags are a classic choice for weddings.");
    } else if (occasion === "casual") {
      if (desc.includes("tote") || desc.includes("canvas") || desc.includes("casual"))
        score += 12;
      tips.push("Casual totes and everyday bags are perfect for day outings.");
    } else if (occasion === "party") {
      if (desc.includes("clutch") || desc.includes("sequin") || desc.includes("glitter"))
        score += 10;
      tips.push(
        "Glittery clutches and sequin bags are perfect party accessories."
      );
    }
    if (tips.length === 0) {
      tips.push(
        "Match the bag color to your outfit accent for a polished look."
      );
      tips.push("A contrasting bag can elevate a simple outfit instantly.");
    }
  } else {
    if (skinTone === "fair") {
      if (desc.includes("pastel") || desc.includes("light") || desc.includes("pink"))
        score += 10;
      tips.push("Pastel and light shades complement fair skin beautifully.");
    } else if (skinTone === "wheatish") {
      if (desc.includes("gold") || desc.includes("yellow") || desc.includes("orange"))
        score += 10;
      tips.push("Warm tones like gold and orange enhance wheatish skin.");
    } else if (skinTone === "dusky") {
      if (desc.includes("bright") || desc.includes("vibrant") || desc.includes("red"))
        score += 10;
      tips.push("Bright and vibrant colors look stunning on dusky skin.");
    } else if (skinTone === "dark") {
      if (desc.includes("bright") || desc.includes("jewel") || desc.includes("royal"))
        score += 10;
      tips.push("Jewel tones and bright colors create a striking contrast.");
    }
    if (bodyType === "petite") {
      if (desc.includes("light") || desc.includes("chiffon") || desc.includes("georgette"))
        score += 8;
      tips.push(
        "Lightweight fabrics like chiffon drape elegantly on petite frames."
      );
    } else if (bodyType === "tall") {
      if (desc.includes("silk") || desc.includes("heavy") || desc.includes("brocade"))
        score += 8;
      tips.push("Heavy silks and brocades look magnificent on tall frames.");
    } else if (bodyType === "plus") {
      if (desc.includes("georgette") || desc.includes("crepe")) score += 8;
      tips.push(
        "Georgette and crepe fabrics flow gracefully and are very flattering."
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
        "Simple, understated sarees work best for professional settings."
      );
    } else if (occasion === "festival") {
      if (desc.includes("silk") || desc.includes("bright") || desc.includes("embroidered"))
        score += 10;
      tips.push(
        "Embroidered and bright sarees are perfect for festive occasions."
      );
    } else if (occasion === "party") {
      if (desc.includes("georgette") || desc.includes("net") || desc.includes("sequin"))
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
  categoryLabel = "saree"
}) {
  var _a;
  const itemList = allProducts ?? allSarees ?? sarees ?? [];
  const initialId = product ? product.id.toString() : selectedSareeId ? selectedSareeId.toString() : ((_a = itemList[0]) == null ? void 0 : _a.id.toString()) ?? "";
  const { actor } = useActor();
  const [userImage, setUserImage] = reactExports.useState(null);
  const [selectedId, setSelectedId] = reactExports.useState(initialId);
  const [skinTone, setSkinTone] = reactExports.useState("wheatish");
  const [bodyType, setBodyType] = reactExports.useState("average");
  const [occasion, setOccasion] = reactExports.useState("casual");
  const [result, setResult] = reactExports.useState(null);
  const [replicateImage, setReplicateImage] = reactExports.useState(null);
  const [replicateLoading, setReplicateLoading] = reactExports.useState(false);
  const [replicateError, setReplicateError] = reactExports.useState(null);
  const fileInputRef = reactExports.useRef(null);
  const selectedItem = product ?? itemList.find((s) => s.id.toString() === selectedId);
  const handleImageUpload = (e) => {
    var _a2;
    const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a3;
      setUserImage((_a3 = ev.target) == null ? void 0 : _a3.result);
      setResult(null);
      setReplicateImage(null);
      setReplicateError(null);
    };
    reader.readAsDataURL(file);
  };
  const handleCheck = reactExports.useCallback(async () => {
    if (!selectedItem) return;
    const res = computeScore(
      selectedItem,
      skinTone,
      bodyType,
      occasion,
      categoryLabel
    );
    setResult(res);
    setReplicateImage(null);
    setReplicateError(null);
    if (userImage && selectedItem.imageUrl && actor) {
      setReplicateLoading(true);
      try {
        const aiImage = await callReplicateVirtualTryOn(
          actor,
          userImage,
          selectedItem.imageUrl,
          selectedItem.name
        );
        setReplicateImage(aiImage);
      } catch (err) {
        const message = err instanceof Error ? err.message : "AI generation failed";
        setReplicateError(message);
      } finally {
        setReplicateLoading(false);
      }
    }
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
    actor
  ]);
  const handleReset = () => {
    setUserImage(null);
    setResult(null);
    setReplicateImage(null);
    setReplicateError(null);
    setReplicateLoading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  const handleDownloadReplicateImage = reactExports.useCallback(() => {
    if (!replicateImage) return;
    const a = document.createElement("a");
    a.href = replicateImage;
    a.download = `dalis-boutique-tryon-${Date.now()}.jpg`;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  }, [replicateImage]);
  const scoreColor = result ? result.score >= 75 ? "text-teal-700" : result.score >= 50 ? "text-champagne-600" : "text-destructive" : "";
  const itemTypeName = categoryLabel === "jewelry" ? "Jewelry" : categoryLabel === "handbag" ? "Handbag" : "Saree";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-teal-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-lg text-teal-800", children: [
        "Virtual Try-On — ",
        itemTypeName
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-sans text-sm text-muted-foreground mb-5", children: [
      "Upload your photo and select your preferences to see how this",
      " ",
      itemTypeName.toLowerCase(),
      " suits you."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        !product && itemList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "label",
            {
              htmlFor: "tryon-item-select",
              className: "block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5",
              children: [
                "Select ",
                itemTypeName
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                id: "tryon-item-select",
                value: selectedId,
                onChange: (e) => {
                  setSelectedId(e.target.value);
                  setResult(null);
                },
                className: "w-full appearance-none text-sm border border-teal-200 rounded-md px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 pr-8",
                children: itemList.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.id.toString(), children: s.name }, s.id.toString()))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400 pointer-events-none" })
          ] })
        ] }),
        selectedItem && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg overflow-hidden border border-teal-100 aspect-[3/4] bg-sand-50", children: selectedItem.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: selectedItem.imageUrl,
            alt: selectedItem.name,
            loading: "lazy",
            className: "w-full h-full object-cover"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-12 h-12 text-teal-200" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "label",
            {
              htmlFor: "tryon-file-input",
              className: "block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5",
              children: "Your Photo (Optional)"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                var _a2;
                return (_a2 = fileInputRef.current) == null ? void 0 : _a2.click();
              },
              className: "w-full border-2 border-dashed border-teal-200 rounded-lg p-4 text-center cursor-pointer hover:border-teal-400 transition-colors",
              children: userImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: userImage,
                    alt: "Uploaded portrait",
                    loading: "lazy",
                    className: "max-h-48 mx-auto rounded object-contain"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation();
                      handleReset();
                    },
                    className: "absolute top-1 right-1 bg-white rounded-full p-0.5 shadow",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3.5 h-3.5 text-teal-600" })
                  }
                )
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-6 h-6 text-teal-300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-xs text-muted-foreground", children: "Click to upload your photo" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              id: "tryon-file-input",
              ref: fileInputRef,
              type: "file",
              accept: "image/*",
              onChange: handleImageUpload,
              className: "hidden"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "tryon-skin-tone",
                className: "block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5",
                children: "Skin Tone"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "tryon-skin-tone",
                  value: skinTone,
                  onChange: (e) => setSkinTone(e.target.value),
                  className: "w-full appearance-none text-sm border border-teal-200 rounded-md px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 pr-8",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "fair", children: "Fair" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "wheatish", children: "Wheatish" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "dusky", children: "Dusky" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "dark", children: "Dark" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400 pointer-events-none" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "tryon-body-type",
                className: "block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5",
                children: "Body Type"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "tryon-body-type",
                  value: bodyType,
                  onChange: (e) => setBodyType(e.target.value),
                  className: "w-full appearance-none text-sm border border-teal-200 rounded-md px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 pr-8",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "petite", children: "Petite" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "average", children: "Average" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "tall", children: "Tall" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "plus", children: "Plus Size" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400 pointer-events-none" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "tryon-occasion",
                className: "block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5",
                children: "Occasion"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  id: "tryon-occasion",
                  value: occasion,
                  onChange: (e) => setOccasion(e.target.value),
                  className: "w-full appearance-none text-sm border border-teal-200 rounded-md px-3 py-2 bg-white text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 pr-8",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "casual", children: "Casual" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "wedding", children: "Wedding" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "festival", children: "Festival" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "office", children: "Office" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "party", children: "Party" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-teal-400 pointer-events-none" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: handleCheck,
            disabled: !selectedItem || replicateLoading,
            className: "w-full bg-gradient-to-r from-teal-700 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white font-sans text-sm tracking-widest uppercase rounded-full border-0 py-3 shadow-lg shadow-teal-200 disabled:opacity-60",
            "data-ocid": "tryon.primary_button",
            children: replicateLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
              "Generating AI Look..."
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
              "Generate My AI Look ✨"
            ] })
          }
        ),
        (result || replicateLoading) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "tryon-result-section", className: "space-y-5 pt-2", children: [
          replicateLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl overflow-hidden border border-violet-200 shadow-xl bg-gradient-to-br from-violet-50 to-rose-50 p-6 flex flex-col items-center gap-4",
              "data-ocid": "tryon.loading_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full border-4 border-violet-200 border-t-violet-600 animate-spin" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "absolute inset-0 m-auto w-6 h-6 text-violet-600" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans font-semibold text-violet-800 text-sm", children: "Generating your AI look... this takes 30–90 seconds." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-xs text-violet-500 mt-1", children: "Our AI is dressing you — please wait, do not close the page." })
                ] })
              ]
            }
          ),
          replicateImage && !replicateLoading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl overflow-hidden border border-emerald-200 shadow-2xl",
              "data-ocid": "tryon.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 px-4 py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-white" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sans text-sm text-white font-bold tracking-wide", children: "✨ AI Generated Look — Powered by IDM-VTON" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/80 text-xs mt-0.5", children: [
                    "Real AI image showing how you'd look wearing this",
                    " ",
                    itemTypeName.toLowerCase()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-b from-slate-50 to-emerald-50/30 p-3 flex flex-col items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: replicateImage,
                      alt: "AI generated virtual try-on",
                      className: "max-w-full rounded-xl shadow-lg object-contain max-h-[500px]",
                      crossOrigin: "anonymous"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: handleDownloadReplicateImage,
                      className: "gap-2 text-teal-700 border-teal-300 hover:bg-teal-50",
                      "data-ocid": "tryon.secondary_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                        "Download Your AI Look"
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          replicateError && !replicateLoading && userImage && (selectedItem == null ? void 0 : selectedItem.imageUrl) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-amber-800 text-xs font-sans",
                "data-ocid": "tryon.error_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: "AI generation unavailable — showing preview instead" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-amber-600", children: replicateError })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden border border-amber-200 shadow-2xl shadow-amber-100/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-amber-600 via-rose-500 to-purple-600 px-4 py-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-white" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sans text-sm text-white font-bold tracking-wide", children: "Style Preview" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-white ml-auto" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs mt-0.5", children: "Advanced canvas compositing preview" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-b from-slate-50 to-amber-50/30 p-3 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                TryOnCanvas,
                {
                  userImage,
                  productImageUrl: selectedItem.imageUrl,
                  categoryLabel,
                  productName: selectedItem.name
                }
              ) })
            ] })
          ] }),
          result && !replicateLoading && !replicateImage && !replicateError && categoryLabel !== "saree" && userImage && (selectedItem == null ? void 0 : selectedItem.imageUrl) && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl overflow-hidden border border-amber-200 shadow-2xl shadow-amber-100/50",
              "data-ocid": "tryon.panel",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-amber-600 via-rose-500 to-purple-600 px-4 py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-white" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-sans text-sm text-white font-bold tracking-wide", children: "Your AI-Generated Look" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-white ml-auto" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-xs mt-0.5", children: "AI-Generated Preview — our system shows how this item looks on you" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-b from-slate-50 to-amber-50/30 p-3 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  TryOnCanvas,
                  {
                    userImage,
                    productImageUrl: selectedItem.imageUrl,
                    categoryLabel,
                    productName: selectedItem.name
                  }
                ) })
              ]
            }
          ),
          result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-xl p-4 border border-teal-200 shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `font-display text-lg font-semibold ${scoreColor}`,
                    children: result.label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-teal-500 font-sans mt-0.5", children: "Suitability Score" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `font-serif text-3xl font-bold ${scoreColor}`,
                  children: [
                    result.score,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "%" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Progress,
              {
                value: result.score,
                className: "h-2.5 mb-4 rounded-full"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: result.tips.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-start gap-2.5 text-xs font-sans text-teal-700 bg-white/60 rounded-lg px-3 py-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 mt-0.5 shrink-0 text-amber-500" }),
                  tip
                ]
              },
              tip
            )) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const VirtualTryOn$1 = reactExports.memo(VirtualTryOn);
export {
  ChevronDown as C,
  Progress as P,
  VirtualTryOn$1 as V
};

import { c as createLucideIcon, r as reactExports, u as useNavigate, t as useCart, j as jsxRuntimeExports, v as ShoppingBag, B as Button } from "./index-D3JC8jlK.js";
import { B as Badge } from "./useQueries-eecWsNPz.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function parseDiscountPercent(offerDetails) {
  if (!offerDetails) return 0;
  const match = offerDetails.match(/(\d+)\s*%/);
  return match ? Number(match[1]) : 0;
}
function getDiscountedPrice(price, offerDetails) {
  const pct = parseDiscountPercent(offerDetails);
  if (pct <= 0 || pct >= 100) return null;
  return Math.round(Number(price) * (1 - pct / 100));
}
function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      onClick: () => navigate({ to: "/product/$id", params: { id: product.id.toString() } }),
      className: "group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left w-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] overflow-hidden bg-sand-100", children: [
          product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.name,
              loading: "lazy",
              decoding: "async",
              style: { imageRendering: "auto" },
              className: "w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center bg-teal-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-12 h-12 text-teal-200" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 left-2 flex flex-col gap-1", children: [
            product.isNewArrival && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-teal-600 text-white text-xs px-2 py-0.5 rounded-sm font-sans tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 mr-1" }),
              "New"
            ] }),
            product.isOnOffer && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-champagne-500 text-teal-900 text-xs px-2 py-0.5 rounded-sm font-sans tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-2.5 h-2.5 mr-1" }),
              "Sale"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleAddToCart,
              className: "w-full rounded-none bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans text-xs tracking-widest uppercase py-3 border-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-3.5 h-3.5 mr-2" }),
                "Add to Cart"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base text-foreground group-hover:text-teal-700 transition-colors line-clamp-1", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-sans mt-0.5 line-clamp-2", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap mt-2", children: product.isOnOffer && getDiscountedPrice(product.price, product.offerDetails) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-lg font-semibold text-teal-700", children: [
              "₹",
              getDiscountedPrice(
                product.price,
                product.offerDetails
              ).toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-sm text-muted-foreground line-through", children: [
              "₹",
              Number(product.price).toLocaleString("en-IN")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-red-100 text-red-700 text-xs px-1.5 py-0 font-sans border-0", children: [
              parseDiscountPercent(product.offerDetails),
              "% off"
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-lg font-semibold text-teal-700", children: [
            "₹",
            Number(product.price).toLocaleString("en-IN")
          ] }) }),
          Number(product.stockQuantity) === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive font-sans mt-1", children: "Out of stock" })
        ] })
      ]
    }
  );
}
const ProductCard$1 = reactExports.memo(ProductCard);
export {
  ProductCard$1 as P,
  Star as S,
  Tag as T
};

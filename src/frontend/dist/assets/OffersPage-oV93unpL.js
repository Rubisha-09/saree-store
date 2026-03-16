import { u as useNavigate, j as jsxRuntimeExports, S as Sparkles, B as Button } from "./index-D3JC8jlK.js";
import { T as Tag, P as ProductCard } from "./ProductCard-BgkvJsEb.js";
import { a as useGetOnOfferProducts, S as Skeleton } from "./useQueries-eecWsNPz.js";
import { A as ArrowRight } from "./arrow-right-DTErdXlS.js";
function OffersPage() {
  const navigate = useNavigate();
  const { data: offerProducts, isLoading } = useGetOnOfferProducts();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-teal-800 py-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-8 w-32 h-32 rounded-full bg-champagne-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-12 w-48 h-48 rounded-full bg-teal-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-champagne-300" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-champagne-500/20 border border-champagne-400/40 rounded-full px-4 py-1.5 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-3.5 h-3.5 text-champagne-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-xs text-champagne-300 tracking-widest uppercase", children: "Limited Time" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-5xl text-champagne-100 mb-3", children: "Special Offers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-teal-300 text-base max-w-md mx-auto", children: "Exclusive deals on our finest collections. Don't miss out!" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-sand-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: Array.from({ length: 8 }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
    ] }, i)) }) : offerProducts && offerProducts.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-sans text-sm text-muted-foreground", children: [
        offerProducts.length,
        " offer",
        offerProducts.length !== 1 ? "s" : "",
        " available"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: offerProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }, product.id.toString())) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-12 h-12 text-teal-200 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-teal-700 mb-2", children: "No offers right now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-muted-foreground mb-6", children: "Check back soon for exclusive deals and discounts!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => navigate({ to: "/" }),
          className: "bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans tracking-widest uppercase text-sm rounded-sm border-0",
          children: [
            "Browse All Products ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
          ]
        }
      )
    ] }) }) })
  ] });
}
export {
  OffersPage as default
};

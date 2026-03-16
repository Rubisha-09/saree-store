import { E as useSearch, u as useNavigate, j as jsxRuntimeExports, a as Search, B as Button } from "./index-D3JC8jlK.js";
import { P as ProductCard } from "./ProductCard-BgkvJsEb.js";
import { h as useSearchProducts, S as Skeleton } from "./useQueries-eecWsNPz.js";
import { A as ArrowLeft } from "./arrow-left-BzqPF5sF.js";
import { P as Package } from "./package-4nyfGsYq.js";
function SearchPage() {
  const { q } = useSearch({ from: "/search" });
  const navigate = useNavigate();
  const { data: results, isLoading } = useSearchProducts(q ?? "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-sand-50 min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-teal-800 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => navigate({ to: "/" }),
          className: "flex items-center gap-1.5 text-sm text-teal-300 hover:text-champagne-300 font-sans mb-4 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back to Home"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-6 h-6 text-champagne-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl text-champagne-100", children: "Search Results" }),
          q && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-sans text-sm text-teal-300 mt-0.5", children: [
            'Results for "',
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-champagne-300", children: q }),
            '"'
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: Array.from({ length: 8 }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
    ] }, i)) }) : results && results.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-sans text-sm text-muted-foreground mb-6", children: [
        results.length,
        " result",
        results.length !== 1 ? "s" : "",
        " found"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: results.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }, product.id.toString())) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-12 h-12 text-teal-200 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-teal-700 mb-2", children: "No results found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-muted-foreground mb-6", children: q ? `No products match "${q}"` : "Enter a search term to find products" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: () => navigate({ to: "/" }),
          className: "bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans tracking-widest uppercase text-sm rounded-sm border-0",
          children: "Browse All Products"
        }
      )
    ] }) }) })
  ] });
}
export {
  SearchPage as default
};

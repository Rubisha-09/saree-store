import { u as useNavigate, C as Category, r as reactExports, j as jsxRuntimeExports, S as Sparkles, B as Button, a as Search } from "./index-D3JC8jlK.js";
import { P as ProductCard } from "./ProductCard-BgkvJsEb.js";
import { V as VirtualTryOn } from "./VirtualTryOn-CSCo8HXO.js";
import { D as Dialog, a as DialogTrigger, b as DialogContent, c as DialogHeader, d as DialogTitle, S as SlidersHorizontal } from "./dialog-N1zPQc8i.js";
import { b as useGetProductsByCategory, S as Skeleton } from "./useQueries-eecWsNPz.js";
import { A as ArrowRight } from "./arrow-right-DTErdXlS.js";
import { P as Package } from "./package-4nyfGsYq.js";
import "./refresh-cw-gTXhO3bE.js";
function HandbagsPage() {
  useNavigate();
  const { data: products, isLoading } = useGetProductsByCategory(
    Category.handbag
  );
  const [search, setSearch] = reactExports.useState("");
  const [sortBy, setSortBy] = reactExports.useState("default");
  const [maxPrice, setMaxPrice] = reactExports.useState(5e4);
  const [tryOnOpen, setTryOnOpen] = reactExports.useState(false);
  const filtered = (products ?? []).filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    const matchPrice = Number(p.price) <= maxPrice;
    return matchSearch && matchPrice;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return Number(a.price) - Number(b.price);
    if (sortBy === "price-desc") return Number(b.price) - Number(a.price);
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-56 md:h-72 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/assets/generated/handbag-category.dim_600x400.jpg",
          alt: "Handbags Collection",
          loading: "lazy",
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-900/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-xs text-champagne-400 tracking-widest uppercase mb-2", children: "Collections" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-5xl text-champagne-100", children: "Handbags" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-teal-200 text-sm mt-2", children: "Clutches, Totes & Potli Bags" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-teal-50 border-b border-teal-100 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-teal-600" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-teal-800 text-base", children: "Not sure which bag suits you?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-xs text-teal-500", children: "Upload your photo and check suitability" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: tryOnOpen, onOpenChange: setTryOnOpen, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            "data-ocid": "handbags.tryon.open_modal_button",
            className: "bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans text-xs tracking-widest uppercase rounded-sm border-0 shrink-0",
            children: [
              "Try On ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 ml-1.5" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "font-serif text-teal-800", children: "Virtual Try-On — Handbags" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            VirtualTryOn,
            {
              allProducts: products ?? [],
              categoryLabel: "handbag"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white border-b border-border py-4 sticky top-16 z-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[180px] max-w-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Search handbags...",
            className: "w-full pl-8 pr-3 py-2 text-sm border border-border rounded bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-teal-400 focus:border-teal-400"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "w-3.5 h-3.5 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            value: sortBy,
            onChange: (e) => setSortBy(e.target.value),
            className: "text-sm border border-border rounded px-3 py-2 bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-teal-400",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "default", children: "Sort: Default" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price-asc", children: "Price: Low to High" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "price-desc", children: "Price: High to Low" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "Name: A-Z" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-sans text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Max: ₹",
          maxPrice.toLocaleString("en-IN")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "range",
            min: 500,
            max: 5e4,
            step: 500,
            value: maxPrice,
            onChange: (e) => setMaxPrice(Number(e.target.value)),
            className: "w-24 accent-teal-600"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-sans ml-auto", children: [
        filtered.length,
        " product",
        filtered.length !== 1 ? "s" : ""
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-sand-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: Array.from({ length: 8 }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
    ] }, i)) }) : filtered.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: filtered.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }, product.id.toString())) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-12 h-12 text-teal-200 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-teal-700 mb-2", children: "No handbags found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-muted-foreground", children: "Try adjusting your search or filters" })
    ] }) }) })
  ] });
}
export {
  HandbagsPage as default
};

import { c as createLucideIcon, u as useNavigate, j as jsxRuntimeExports, B as Button, S as Sparkles, H as Heart } from "./index-D3JC8jlK.js";
import { S as Star, P as ProductCard, T as Tag } from "./ProductCard-BgkvJsEb.js";
import { u as useGetNewArrivals, a as useGetOnOfferProducts, B as Badge, S as Skeleton } from "./useQueries-eecWsNPz.js";
import { A as ArrowRight } from "./arrow-right-DTErdXlS.js";
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
      d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "rib7q0"
    }
  ],
  [
    "path",
    {
      d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
      key: "1ymkrd"
    }
  ]
];
const Quote = createLucideIcon("quote", __iconNode);
const handbagCategory = "/assets/generated/handbag-category.dim_600x400.jpg";
const jewelryCategory = "/assets/generated/jewelry-category.dim_600x400.jpg";
const sareeCategory = "/assets/generated/saree-category.dim_600x400.jpg";
const heroBanner = "/assets/generated/saree-hero-banner-girl.dim_1400x600.jpg";
const founderPhoto = "/assets/uploads/WhatsApp-Image-2026-03-05-at-8.33.24-PM-1.jpeg";
function HomePage() {
  const navigate = useNavigate();
  const { data: newArrivals, isLoading: loadingNew } = useGetNewArrivals();
  const { data: offerProducts, isLoading: loadingOffers } = useGetOnOfferProducts();
  const categories = [
    {
      name: "Sarees",
      path: "/sarees",
      image: sareeCategory,
      description: "Silk, Cotton & More"
    },
    {
      name: "Jewelry",
      path: "/jewelry",
      image: jewelryCategory,
      description: "Gold, Silver & Gems"
    },
    {
      name: "Handbags",
      path: "/handbags",
      image: handbagCategory,
      description: "Clutches & Totes"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative h-[520px] md:h-[600px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: heroBanner,
          alt: "New Collection 2026",
          loading: "eager",
          fetchPriority: "high",
          decoding: "sync",
          style: { imageRendering: "auto" },
          className: "w-full h-full object-cover object-center"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-champagne-500/20 text-champagne-300 border border-champagne-400/40 font-sans text-xs tracking-widest uppercase mb-4", children: "New Collection 2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-serif text-4xl md:text-5xl lg:text-6xl text-champagne-100 leading-tight mb-4", children: [
          "Timeless",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-champagne-400 italic", children: "Elegance" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-teal-200 text-base md:text-lg mb-8 leading-relaxed", children: "Discover handpicked sarees, jewelry, and accessories crafted for the modern woman." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => navigate({ to: "/sarees" }),
              className: "bg-champagne-500 hover:bg-champagne-400 text-teal-900 font-sans tracking-widest uppercase text-sm rounded-sm border-0 px-6",
              children: [
                "Shop Sarees",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => navigate({ to: "/offers" }),
              variant: "outline",
              className: "border-champagne-400/60 text-champagne-300 hover:bg-champagne-400/10 font-sans tracking-widest uppercase text-sm rounded-sm",
              children: "View Offers"
            }
          )
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-sand-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl text-teal-800 mb-2", children: "Shop by Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-muted-foreground text-sm tracking-wider", children: "Explore our curated collections" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => navigate({ to: cat.path }),
          className: "group relative overflow-hidden rounded-lg aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: cat.image,
                alt: cat.name,
                loading: "lazy",
                decoding: "async",
                style: { imageRendering: "auto" },
                className: "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/20 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-champagne-200 mb-0.5", children: cat.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-xs text-teal-200 tracking-wider uppercase", children: cat.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 mt-2 text-xs text-champagne-400 font-sans group-hover:gap-2 transition-all", children: [
                "Explore ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
              ] })
            ] })
          ]
        },
        cat.path
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 text-champagne-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-xs text-champagne-600 tracking-widest uppercase", children: "Just In" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl text-teal-800", children: "New Arrivals" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            onClick: () => navigate({ to: "/sarees" }),
            className: "hidden sm:flex border-teal-200 text-teal-700 hover:bg-teal-50 font-sans text-xs tracking-wider uppercase rounded-sm",
            children: [
              "View All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 ml-1" })
            ]
          }
        )
      ] }),
      loadingNew ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: Array.from({ length: 4 }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] rounded-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
      ] }, i)) }) : newArrivals && newArrivals.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: newArrivals.slice(0, 4).map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }, product.id.toString())) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 text-muted-foreground font-sans", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-10 h-10 text-teal-200 mx-auto mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "New arrivals coming soon!" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-teal-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-8 h-8 text-champagne-400 mx-auto mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl text-champagne-200 mb-3", children: "Special Offers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-teal-300 text-sm mb-6 max-w-md mx-auto", children: "Exclusive deals on our finest collections. Limited time only." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => navigate({ to: "/offers" }),
          className: "bg-champagne-500 hover:bg-champagne-400 text-teal-900 font-sans tracking-widest uppercase text-sm rounded-sm border-0 px-8",
          children: [
            "Shop Offers ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
          ]
        }
      )
    ] }) }),
    offerProducts && offerProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-sand-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-champagne-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-xs text-champagne-600 tracking-widest uppercase", children: "Limited Time" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl text-teal-800", children: "On Sale" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "outline",
            onClick: () => navigate({ to: "/offers" }),
            className: "hidden sm:flex border-teal-200 text-teal-700 hover:bg-teal-50 font-sans text-xs tracking-wider uppercase rounded-sm",
            children: [
              "View All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5 ml-1" })
            ]
          }
        )
      ] }),
      loadingOffers ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: Array.from({ length: 4 }, (_, i) => i).map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] rounded-lg" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-3/4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-1/2" })
      ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: offerProducts.slice(0, 4).map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }, product.id.toString())) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 bg-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-72 h-72 bg-champagne-100/40 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-teal-50 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-xs text-champagne-600 tracking-widest uppercase", children: "From the Founder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl text-teal-800 mt-2", children: "A Word from Our Heart" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-72 h-80 md:w-80 md:h-96", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl border-2 border-champagne-300/60 translate-x-3 translate-y-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl shadow-2xl w-full h-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: founderPhoto,
                  alt: "Dalisha.V — Founder of Dali's Boutique",
                  loading: "lazy",
                  decoding: "async",
                  className: "w-full h-full object-cover object-top"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-teal-900/70 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-champagne-200 text-base font-semibold", children: "Dalisha.V" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-teal-300 text-xs tracking-wider uppercase mt-0.5", children: "Founder & Curator" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "w-10 h-10 text-champagne-400 opacity-60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-serif text-2xl md:text-3xl text-teal-800 leading-relaxed italic", children: '"Every saree carries a story — of the hands that wove it, the tradition that inspired it, and the woman who will wear it with pride."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-muted-foreground text-base leading-relaxed", children: "I started Dali's Boutique with a simple belief: every woman deserves to feel radiant in a saree that truly belongs to her. Each piece in our collection is personally chosen by me — for its quality, its grace, and the joy it brings." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-0.5 bg-champagne-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-sm text-teal-700 font-semibold tracking-wide", children: "Dalisha.V" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 text-champagne-500 fill-champagne-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-xs text-muted-foreground tracking-wider uppercase", children: "Dali's Boutique" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-4 mt-2", children: [
              "Handpicked Collections",
              "Crafted with Love",
              "Ships Pan-India"
            ].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "bg-teal-50 border border-teal-200 text-teal-700 font-sans text-xs tracking-wider uppercase px-3 py-1.5 rounded-full",
                children: tag
              },
              tag
            )) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-sand-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-10 h-10 text-teal-600 mx-auto mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl text-teal-800 mb-3", children: "Virtual Try-On" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-muted-foreground text-base mb-6 max-w-lg mx-auto", children: "Not sure which saree suits you? Use our AI-powered suitability checker to find your perfect match." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          onClick: () => navigate({ to: "/sarees" }),
          className: "bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans tracking-widest uppercase text-sm rounded-sm border-0 px-8",
          children: [
            "Try It Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  HomePage as default
};

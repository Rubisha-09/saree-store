import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, S as Sparkles, B as Button, g as createContextScope, h as React2, i as useComposedRefs, k as createSlot, l as useId, m as Primitive, n as composeEventHandlers, o as useControllableState, p as useCallbackRef, q as Presence, d as cn, s as useParams, u as useNavigate, t as useCart, C as Category, L as Link, v as ShoppingBag, w as Separator, M as Minus } from "./index-D3JC8jlK.js";
import { S as Star, T as Tag, P as ProductCard } from "./ProductCard-BgkvJsEb.js";
import { C as ChevronDown, P as Progress, V as VirtualTryOn } from "./VirtualTryOn-CSCo8HXO.js";
import { c as useGetProduct, b as useGetProductsByCategory, S as Skeleton, B as Badge } from "./useQueries-eecWsNPz.js";
import { P as Package } from "./package-4nyfGsYq.js";
import { A as ArrowLeft } from "./arrow-left-BzqPF5sF.js";
import { C as ChevronRight, a as CircleCheckBig, T as Truck } from "./truck-CvXICkH5.js";
import { L as Lock } from "./lock-IpL4W6ZQ.js";
import "./refresh-cw-gTXhO3bE.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
];
const RefreshCcw = createLucideIcon("refresh-ccw", __iconNode);
function calculateSuitability(product, skinTone, bodyType, occasion) {
  const nameHash = product.name.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  let score = 55 + nameHash % 20;
  const tips = [];
  const desc = product.description.toLowerCase();
  const name = product.name.toLowerCase();
  if (skinTone === "fair") {
    if (desc.includes("pastel") || desc.includes("light") || desc.includes("pink"))
      score += 10;
    if (desc.includes("dark") || desc.includes("black")) score -= 5;
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
    if (name.includes("silk") || desc.includes("silk") || desc.includes("bridal"))
      score += 12;
    tips.push("Silk sarees are perfect for weddings — timeless and elegant.");
  } else if (occasion === "casual") {
    if (desc.includes("cotton") || desc.includes("linen")) score += 12;
    tips.push("Cotton sarees are comfortable and perfect for everyday wear.");
  } else if (occasion === "office") {
    if (desc.includes("cotton") || desc.includes("linen") || desc.includes("simple"))
      score += 10;
    tips.push(
      "Simple, understated sarees work best for professional settings."
    );
  } else if (occasion === "festival") {
    if (desc.includes("silk") || desc.includes("bright") || desc.includes("embroidered"))
      score += 10;
    tips.push(
      "Embroidered and bright sarees are perfect for festive occasions."
    );
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
function SuitabilityChecker({ product }) {
  const [skinTone, setSkinTone] = reactExports.useState("wheatish");
  const [bodyType, setBodyType] = reactExports.useState("average");
  const [occasion, setOccasion] = reactExports.useState("casual");
  const [result, setResult] = reactExports.useState(null);
  const handleCheck = () => {
    const res = calculateSuitability(product, skinTone, bodyType, occasion);
    setResult(res);
  };
  const scoreColor = result ? result.score >= 75 ? "text-teal-700" : result.score >= 50 ? "text-champagne-600" : "text-destructive" : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-teal-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-teal-800", children: "Suitability Checker" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-muted-foreground mb-5", children: "Find out how well this saree suits your style and occasion." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            htmlFor: "skin-tone-select",
            className: "block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5",
            children: "Skin Tone"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "skin-tone-select",
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
            htmlFor: "body-type-select",
            className: "block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5",
            children: "Body Type"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "body-type-select",
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
            htmlFor: "occasion-select",
            className: "block font-sans text-xs text-teal-700 uppercase tracking-wider mb-1.5",
            children: "Occasion"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              id: "occasion-select",
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        onClick: handleCheck,
        className: "bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans text-xs tracking-widest uppercase rounded-sm border-0 mb-5",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 mr-1.5" }),
          "Check Suitability"
        ]
      }
    ),
    result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-50 rounded-lg p-4 border border-teal-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display text-xl ${scoreColor}`, children: result.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `font-serif text-2xl font-bold ${scoreColor}`, children: [
          result.score,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: result.score, className: "h-2 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: result.tips.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "flex items-start gap-2 text-sm font-sans text-teal-700",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 mt-0.5 shrink-0 text-champagne-500" }),
            tip
          ]
        },
        tip
      )) })
    ] })
  ] });
}
const SuitabilityChecker$1 = reactExports.memo(SuitabilityChecker);
function createCollection(name) {
  const PROVIDER_NAME = name + "CollectionProvider";
  const [createCollectionContext, createCollectionScope2] = createContextScope(PROVIDER_NAME);
  const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(
    PROVIDER_NAME,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  );
  const CollectionProvider = (props) => {
    const { scope, children } = props;
    const ref = React2.useRef(null);
    const itemMap = React2.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionProviderImpl, { scope, itemMap, collectionRef: ref, children });
  };
  CollectionProvider.displayName = PROVIDER_NAME;
  const COLLECTION_SLOT_NAME = name + "CollectionSlot";
  const CollectionSlotImpl = createSlot(COLLECTION_SLOT_NAME);
  const CollectionSlot = React2.forwardRef(
    (props, forwardedRef) => {
      const { scope, children } = props;
      const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
      const composedRefs = useComposedRefs(forwardedRef, context.collectionRef);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionSlotImpl, { ref: composedRefs, children });
    }
  );
  CollectionSlot.displayName = COLLECTION_SLOT_NAME;
  const ITEM_SLOT_NAME = name + "CollectionItemSlot";
  const ITEM_DATA_ATTR = "data-radix-collection-item";
  const CollectionItemSlotImpl = createSlot(ITEM_SLOT_NAME);
  const CollectionItemSlot = React2.forwardRef(
    (props, forwardedRef) => {
      const { scope, children, ...itemData } = props;
      const ref = React2.useRef(null);
      const composedRefs = useComposedRefs(forwardedRef, ref);
      const context = useCollectionContext(ITEM_SLOT_NAME, scope);
      React2.useEffect(() => {
        context.itemMap.set(ref, { ref, ...itemData });
        return () => void context.itemMap.delete(ref);
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsx(CollectionItemSlotImpl, { ...{ [ITEM_DATA_ATTR]: "" }, ref: composedRefs, children });
    }
  );
  CollectionItemSlot.displayName = ITEM_SLOT_NAME;
  function useCollection2(scope) {
    const context = useCollectionContext(name + "CollectionConsumer", scope);
    const getItems = React2.useCallback(() => {
      const collectionNode = context.collectionRef.current;
      if (!collectionNode) return [];
      const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
      const items = Array.from(context.itemMap.values());
      const orderedItems = items.sort(
        (a, b) => orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
      );
      return orderedItems;
    }, [context.collectionRef, context.itemMap]);
    return getItems;
  }
  return [
    { Provider: CollectionProvider, Slot: CollectionSlot, ItemSlot: CollectionItemSlot },
    useCollection2,
    createCollectionScope2
  ];
}
var DirectionContext = reactExports.createContext(void 0);
function useDirection(localDir) {
  const globalDir = reactExports.useContext(DirectionContext);
  return localDir || globalDir || "ltr";
}
var ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus";
var EVENT_OPTIONS = { bubbles: false, cancelable: true };
var GROUP_NAME = "RovingFocusGroup";
var [Collection, useCollection, createCollectionScope] = createCollection(GROUP_NAME);
var [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(
  GROUP_NAME,
  [createCollectionScope]
);
var [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME);
var RovingFocusGroup = reactExports.forwardRef(
  (props, forwardedRef) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: props.__scopeRovingFocusGroup, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RovingFocusGroupImpl, { ...props, ref: forwardedRef }) }) });
  }
);
RovingFocusGroup.displayName = GROUP_NAME;
var RovingFocusGroupImpl = reactExports.forwardRef((props, forwardedRef) => {
  const {
    __scopeRovingFocusGroup,
    orientation,
    loop = false,
    dir,
    currentTabStopId: currentTabStopIdProp,
    defaultCurrentTabStopId,
    onCurrentTabStopIdChange,
    onEntryFocus,
    preventScrollOnEntryFocus = false,
    ...groupProps
  } = props;
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const direction = useDirection(dir);
  const [currentTabStopId, setCurrentTabStopId] = useControllableState({
    prop: currentTabStopIdProp,
    defaultProp: defaultCurrentTabStopId ?? null,
    onChange: onCurrentTabStopIdChange,
    caller: GROUP_NAME
  });
  const [isTabbingBackOut, setIsTabbingBackOut] = reactExports.useState(false);
  const handleEntryFocus = useCallbackRef(onEntryFocus);
  const getItems = useCollection(__scopeRovingFocusGroup);
  const isClickFocusRef = reactExports.useRef(false);
  const [focusableItemsCount, setFocusableItemsCount] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener(ENTRY_FOCUS, handleEntryFocus);
      return () => node.removeEventListener(ENTRY_FOCUS, handleEntryFocus);
    }
  }, [handleEntryFocus]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    RovingFocusProvider,
    {
      scope: __scopeRovingFocusGroup,
      orientation,
      dir: direction,
      loop,
      currentTabStopId,
      onItemFocus: reactExports.useCallback(
        (tabStopId) => setCurrentTabStopId(tabStopId),
        [setCurrentTabStopId]
      ),
      onItemShiftTab: reactExports.useCallback(() => setIsTabbingBackOut(true), []),
      onFocusableItemAdd: reactExports.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount + 1),
        []
      ),
      onFocusableItemRemove: reactExports.useCallback(
        () => setFocusableItemsCount((prevCount) => prevCount - 1),
        []
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.div,
        {
          tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
          "data-orientation": orientation,
          ...groupProps,
          ref: composedRefs,
          style: { outline: "none", ...props.style },
          onMouseDown: composeEventHandlers(props.onMouseDown, () => {
            isClickFocusRef.current = true;
          }),
          onFocus: composeEventHandlers(props.onFocus, (event) => {
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
              const entryFocusEvent = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
              event.currentTarget.dispatchEvent(entryFocusEvent);
              if (!entryFocusEvent.defaultPrevented) {
                const items = getItems().filter((item) => item.focusable);
                const activeItem = items.find((item) => item.active);
                const currentItem = items.find((item) => item.id === currentTabStopId);
                const candidateItems = [activeItem, currentItem, ...items].filter(
                  Boolean
                );
                const candidateNodes = candidateItems.map((item) => item.ref.current);
                focusFirst(candidateNodes, preventScrollOnEntryFocus);
              }
            }
            isClickFocusRef.current = false;
          }),
          onBlur: composeEventHandlers(props.onBlur, () => setIsTabbingBackOut(false))
        }
      )
    }
  );
});
var ITEM_NAME = "RovingFocusGroupItem";
var RovingFocusGroupItem = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeRovingFocusGroup,
      focusable = true,
      active = false,
      tabStopId,
      children,
      ...itemProps
    } = props;
    const autoId = useId();
    const id = tabStopId || autoId;
    const context = useRovingFocusContext(ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd, onFocusableItemRemove, currentTabStopId } = context;
    reactExports.useEffect(() => {
      if (focusable) {
        onFocusableItemAdd();
        return () => onFocusableItemRemove();
      }
    }, [focusable, onFocusableItemAdd, onFocusableItemRemove]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Collection.ItemSlot,
      {
        scope: __scopeRovingFocusGroup,
        id,
        focusable,
        active,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.span,
          {
            tabIndex: isCurrentTabStop ? 0 : -1,
            "data-orientation": context.orientation,
            ...itemProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!focusable) event.preventDefault();
              else context.onItemFocus(id);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => context.onItemFocus(id)),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if (event.key === "Tab" && event.shiftKey) {
                context.onItemShiftTab();
                return;
              }
              if (event.target !== event.currentTarget) return;
              const focusIntent = getFocusIntent(event, context.orientation, context.dir);
              if (focusIntent !== void 0) {
                if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
                event.preventDefault();
                const items = getItems().filter((item) => item.focusable);
                let candidateNodes = items.map((item) => item.ref.current);
                if (focusIntent === "last") candidateNodes.reverse();
                else if (focusIntent === "prev" || focusIntent === "next") {
                  if (focusIntent === "prev") candidateNodes.reverse();
                  const currentIndex = candidateNodes.indexOf(event.currentTarget);
                  candidateNodes = context.loop ? wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                setTimeout(() => focusFirst(candidateNodes));
              }
            }),
            children: typeof children === "function" ? children({ isCurrentTabStop, hasTabStop: currentTabStopId != null }) : children
          }
        )
      }
    );
  }
);
RovingFocusGroupItem.displayName = ITEM_NAME;
var MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function getDirectionAwareKey(key, dir) {
  if (dir !== "rtl") return key;
  return key === "ArrowLeft" ? "ArrowRight" : key === "ArrowRight" ? "ArrowLeft" : key;
}
function getFocusIntent(event, orientation, dir) {
  const key = getDirectionAwareKey(event.key, dir);
  if (orientation === "vertical" && ["ArrowLeft", "ArrowRight"].includes(key)) return void 0;
  if (orientation === "horizontal" && ["ArrowUp", "ArrowDown"].includes(key)) return void 0;
  return MAP_KEY_TO_FOCUS_INTENT[key];
}
function focusFirst(candidates, preventScroll = false) {
  const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
  for (const candidate of candidates) {
    if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
    candidate.focus({ preventScroll });
    if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
  }
}
function wrapArray(array, startIndex) {
  return array.map((_, index) => array[(startIndex + index) % array.length]);
}
var Root = RovingFocusGroup;
var Item = RovingFocusGroupItem;
var TABS_NAME = "Tabs";
var [createTabsContext] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
    reactExports.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root2 = Tabs$1;
var List = TabsList$1;
var Trigger = TabsTrigger$1;
var Content = TabsContent$1;
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
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
function getCategoryLabel(category) {
  if (category === Category.jewelry) return "Jewelry";
  if (category === Category.handbag) return "Handbags";
  return "Sarees";
}
function getCategoryRoute(category) {
  if (category === Category.jewelry) return "/jewelry";
  if (category === Category.handbag) return "/handbags";
  return "/sarees";
}
function getCategoryTryOnLabel(category) {
  if (category === Category.jewelry) return "jewelry";
  if (category === Category.handbag) return "handbag";
  return "saree";
}
function getProductHighlights(description) {
  const parts = description.split(/\.\s+|,\s+/).map((s) => s.trim()).filter((s) => s.length > 8);
  return parts.slice(0, 4);
}
const SWATCH_PALETTES = [
  ["#8B0000", "#C0392B", "#E74C3C", "#FF8C69"],
  ["#006400", "#228B22", "#2ECC71", "#A8E6CF"],
  ["#00008B", "#1A5276", "#2980B9", "#AED6F1"],
  ["#4B0082", "#7D3C98", "#A569BD", "#D2B4DE"],
  ["#8B4513", "#C0813A", "#E59866", "#FAD7A0"],
  ["#2C3E50", "#566573", "#AEB6BF", "#D5DBDB"],
  ["#B7950B", "#D4AC0D", "#F1C40F", "#F9E79F"],
  ["#FF1493", "#C71585", "#E91E8C", "#FFB6C1"]
];
function ProductDetailPage() {
  const { id } = useParams({ from: "/product/$id" });
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = reactExports.useState(1);
  const [selectedSwatch, setSelectedSwatch] = reactExports.useState(0);
  const productId = BigInt(id);
  const { data: product, isLoading } = useGetProduct(productId);
  const categoryForRelated = (product == null ? void 0 : product.category) ?? Category.saree;
  const { data: relatedRaw } = useGetProductsByCategory(categoryForRelated);
  const relatedProducts = (relatedRaw ?? []).filter((p) => p.id.toString() !== id).slice(0, 8);
  const handleAddToCart = () => {
    if (!product) return;
    for (let i = 0; i < qty; i++) {
      addToCart(product);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "main",
      {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
        "data-ocid": "product.detail.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-40" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "aspect-[3/4] rounded-xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-24 rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-3/4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-1/3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-1/4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-full" })
            ] })
          ] })
        ]
      }
    );
  }
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "main",
      {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center",
        "data-ocid": "product.detail.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-16 h-16 text-teal-200 mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl text-teal-800 mb-2", children: "Product not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: () => navigate({ to: "/" }),
              className: "bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans tracking-wider uppercase text-sm rounded-sm border-0 mt-4",
              "data-ocid": "product.secondary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
                " Back to Home"
              ]
            }
          )
        ]
      }
    );
  }
  const isSaree = product.category === Category.saree;
  const inStock = Number(product.stockQuantity) > 0;
  const maxQty = Math.min(Number(product.stockQuantity) || 10, 10);
  const starCount = Number(product.id) % 2 === 0 ? 4 : 5;
  const highlights = getProductHighlights(product.description);
  const categoryLabel = getCategoryLabel(product.category);
  const categoryRoute = getCategoryRoute(product.category);
  const tryOnLabel = getCategoryTryOnLabel(product.category);
  const swatches = SWATCH_PALETTES[Number(product.id) % SWATCH_PALETTES.length];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "bg-sand-50 min-h-screen", "data-ocid": "product.detail.page", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "nav",
      {
        className: "flex items-center gap-1.5 text-xs font-sans text-muted-foreground mb-6",
        "aria-label": "Breadcrumb",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "hover:text-teal-700 transition-colors",
              "data-ocid": "product.breadcrumb.link",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: categoryRoute,
              className: "hover:text-teal-700 transition-colors",
              "data-ocid": "product.breadcrumb.link",
              children: categoryLabel
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground line-clamp-1 max-w-[200px]", children: product.name })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl p-6 md:p-8 shadow-md border border-teal-50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[3/4] rounded-xl overflow-hidden bg-sand-100 ring-1 ring-teal-100", children: product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.imageUrl,
            alt: product.name,
            loading: "eager",
            fetchPriority: "high",
            decoding: "sync",
            style: { imageRendering: "auto" },
            className: "w-full h-full object-cover object-center"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center bg-teal-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-20 h-20 text-teal-200" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-1.5", children: [
          product.isNewArrival && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-teal-600 text-white font-sans text-xs tracking-wider rounded-sm shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 mr-1" }),
            " New Arrival"
          ] }),
          product.isOnOffer && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-champagne-500 text-teal-900 font-sans text-xs tracking-wider rounded-sm shadow-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-2.5 h-2.5 mr-1" }),
            " On Sale"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block bg-teal-50 text-teal-700 border border-teal-200 text-xs font-sans tracking-widest uppercase px-3 py-1 rounded-full", children: categoryLabel }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl md:text-4xl text-teal-800 leading-tight", children: product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Star,
            {
              className: `w-4 h-4 ${n <= starCount ? "text-amber-400 fill-amber-400" : "text-gray-200 fill-gray-200"}`
            },
            n
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-sans text-muted-foreground", children: [
            "(",
            128 + Number(product.id) % 47,
            " reviews)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 flex-wrap", children: product.isOnOffer && getDiscountedPrice(product.price, product.offerDetails) ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-3xl font-bold text-teal-700", children: [
            "₹",
            getDiscountedPrice(
              product.price,
              product.offerDetails
            ).toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-xl text-muted-foreground line-through", children: [
            "₹",
            Number(product.price).toLocaleString("en-IN")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-red-600 font-sans bg-red-50 px-2 py-0.5 rounded font-semibold", children: [
            parseDiscountPercent(product.offerDetails),
            "% OFF"
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-3xl font-bold text-teal-700", children: [
            "₹",
            Number(product.price).toLocaleString("en-IN")
          ] }),
          product.isOnOffer && product.offerDetails && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-champagne-600 font-sans bg-champagne-100 px-2 py-0.5 rounded", children: product.offerDetails })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sans text-xs uppercase tracking-widest text-teal-600 mb-2", children: "Colour Options" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            swatches.map((color, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setSelectedSwatch(idx),
                title: `Color option ${idx + 1}`,
                "aria-label": `Select color ${idx + 1}`,
                className: `w-7 h-7 rounded-full border-2 transition-all ${selectedSwatch === idx ? "border-teal-600 scale-110 shadow-md" : "border-white shadow-sm hover:scale-105"}`,
                style: { backgroundColor: color },
                "data-ocid": "product.color.toggle"
              },
              color
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-sans text-muted-foreground ml-1", children: [
              [
                "Deep Red",
                "Forest Green",
                "Royal Blue",
                "Violet",
                "Mahogany",
                "Charcoal",
                "Golden",
                "Rose Pink"
              ][Number(product.id) % 8],
              " ",
              "selected"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-teal-50" }),
        highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-sans text-xs uppercase tracking-widest text-teal-600 mb-2", children: "Product Highlights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: highlights.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2 text-sm font-sans text-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-teal-500 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: point })
              ]
            },
            point
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: inStock ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-4 h-4 text-teal-600 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-sans text-teal-700", children: [
            "In Stock (",
            Number(product.stockQuantity),
            " available)"
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 text-destructive shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-sans text-destructive", children: "Out of Stock" })
        ] }) }),
        inStock && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-sans text-muted-foreground", children: "Qty:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center border border-teal-200 rounded-md overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setQty((prev) => Math.max(1, prev - 1)),
                disabled: qty <= 1,
                className: "w-9 h-9 flex items-center justify-center text-teal-700 hover:bg-teal-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
                "aria-label": "Decrease quantity",
                "data-ocid": "product.toggle",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "w-3.5 h-3.5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 text-center text-sm font-sans font-semibold text-foreground border-x border-teal-200", children: qty }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setQty((prev) => Math.min(maxQty, prev + 1)),
                disabled: qty >= maxQty,
                className: "w-9 h-9 flex items-center justify-center text-teal-700 hover:bg-teal-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
                "aria-label": "Increase quantity",
                "data-ocid": "product.toggle",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base leading-none", children: "+" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            onClick: handleAddToCart,
            disabled: !inStock,
            className: "w-full bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans tracking-widest uppercase rounded-sm border-0 py-6 text-sm disabled:opacity-50",
            "data-ocid": "product.add_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }),
              inStock ? `Add to Cart${qty > 1 ? ` (${qty})` : ""}` : "Out of Stock"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-sans text-center", children: "Free shipping on orders above ₹2,999" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 pt-1", children: [
          { icon: CircleCheckBig, label: "100% Authentic" },
          { icon: RefreshCcw, label: "Easy Returns" },
          { icon: Lock, label: "Secure Payment" }
        ].map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col items-center gap-1 py-2 bg-teal-50 rounded-lg border border-teal-100 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4 text-teal-600" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-sans text-teal-700 leading-tight", children: label })
            ]
          },
          label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 bg-white rounded-2xl p-6 border border-teal-50 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-lg text-teal-800 mb-4", children: "Product Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
        {
          label: "SKU",
          value: `DALI-${product.id}`
        },
        {
          label: "Category",
          value: categoryLabel
        },
        {
          label: "Availability",
          value: inStock ? "In Stock" : "Out of Stock"
        },
        {
          label: "Material",
          value: product.description.split(/[\s,]+/).find(
            (w) => [
              "silk",
              "cotton",
              "georgette",
              "chiffon",
              "brocade",
              "crepe",
              "linen",
              "net",
              "gold",
              "silver",
              "leather",
              "fabric"
            ].includes(w.toLowerCase())
          ) ?? "Premium Quality"
        }
      ].map(({ label, value }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-sans uppercase tracking-widest text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-sans font-medium text-foreground capitalize", children: value })
      ] }, label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "suitability", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "bg-teal-50 border border-teal-100 rounded-lg p-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "suitability",
            className: "font-sans text-sm data-[state=active]:bg-teal-700 data-[state=active]:text-champagne-200 rounded",
            "data-ocid": "product.tryon.tab",
            children: "Suitability Check"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "tryon",
            className: "font-sans text-sm data-[state=active]:bg-teal-700 data-[state=active]:text-champagne-200 rounded",
            "data-ocid": "product.tryon.tab",
            children: "Virtual Try-On"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "suitability", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl p-6 border border-teal-50 shadow-sm", children: isSaree ? /* @__PURE__ */ jsxRuntimeExports.jsx(SuitabilityChecker$1, { product }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        VirtualTryOn,
        {
          product,
          allProducts: relatedProducts,
          categoryLabel: tryOnLabel
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "tryon", className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white rounded-xl p-6 border border-teal-50 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        VirtualTryOn,
        {
          product,
          allProducts: relatedProducts,
          categoryLabel: tryOnLabel
        }
      ) }) })
    ] }) }),
    relatedProducts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-teal-600 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl text-teal-800", children: "You May Also Like" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: categoryRoute,
            className: "flex items-center gap-1 text-sm font-sans text-teal-600 hover:text-teal-800 transition-colors whitespace-nowrap",
            "data-ocid": "product.breadcrumb.link",
            children: [
              "View All ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-sans text-sm text-muted-foreground mb-5 ml-7", children: [
        "More from ",
        categoryLabel
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:grid lg:grid-cols-4 gap-5", children: relatedProducts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": `product.related.item.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p })
        },
        p.id.toString()
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex lg:hidden gap-4 overflow-x-auto pb-3 -mx-1 px-1 snap-x snap-mandatory scrollbar-none", children: relatedProducts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "w-48 shrink-0 snap-start",
          "data-ocid": `product.related.item.${i + 1}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p })
        },
        p.id.toString()
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: categoryRoute, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          className: "border-teal-300 text-teal-700 hover:bg-teal-50 font-sans tracking-wider uppercase text-xs rounded-sm",
          "data-ocid": "product.secondary_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4 mr-2" }),
            "View All ",
            categoryLabel
          ]
        }
      ) }) })
    ] })
  ] }) });
}
export {
  ProductDetailPage as default
};

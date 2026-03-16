import { c as createLucideIcon, t as useCart, u as useNavigate, r as reactExports, j as jsxRuntimeExports, B as Button, v as ShoppingBag, w as Separator } from "./index-D3JC8jlK.js";
import { L as Label, I as Input } from "./label-ChQdjVR6.js";
import { a as CircleCheckBig, T as Truck, C as ChevronRight } from "./truck-CvXICkH5.js";
import { L as Lock } from "./lock-IpL4W6ZQ.js";
import { P as Package } from "./package-4nyfGsYq.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const gpayQR = "/assets/uploads/WhatsApp-Image-2026-03-07-at-11.19.38-AM-1-1.jpeg";
const STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu & Kashmir"
];
function CheckoutPage() {
  const { items, subtotal, clearCart, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = reactExports.useState("address");
  const [isPlacing, setIsPlacing] = reactExports.useState(false);
  const [orderId] = reactExports.useState(
    `DALI${Date.now().toString().slice(-8).toUpperCase()}`
  );
  const [address, setAddress] = reactExports.useState({
    fullName: "",
    phone: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: ""
  });
  const [payment, setPayment] = reactExports.useState({ type: "upi" });
  const shipping = subtotal >= 2999 ? 0 : 99;
  const total = subtotal + shipping;
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setStep("payment");
  };
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setStep("review");
  };
  const handlePlaceOrder = async () => {
    setIsPlacing(true);
    await new Promise((r) => setTimeout(r, 1800));
    clearCart();
    setIsCartOpen(false);
    setIsPlacing(false);
    setStep("confirmed");
  };
  const stepList = [
    { id: "address", label: "Address" },
    { id: "payment", label: "Payment" },
    { id: "review", label: "Review" }
  ];
  const currentStepIndex = stepList.findIndex((s) => s.id === step);
  if (step === "confirmed") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "main",
      {
        className: "min-h-screen bg-sand-50 flex items-center justify-center px-4",
        "data-ocid": "checkout.page",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-lg border border-teal-100 p-8 max-w-md w-full text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-9 h-9 text-teal-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl text-teal-800 mb-2", children: "Order Placed!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-sans text-muted-foreground text-sm mb-4", children: [
            "Thank you, ",
            address.fullName,
            ". Your order has been placed successfully."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-teal-50 rounded-xl p-4 mb-6 text-left space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm font-sans", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Order ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-teal-800", children: orderId })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm font-sans", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Amount Paid" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-teal-800", children: [
                "₹",
                total.toLocaleString("en-IN")
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm font-sans", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Delivery to" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-teal-800 text-right max-w-[60%]", children: [
                address.city,
                ", ",
                address.state
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm font-sans", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Est. Delivery" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-teal-800", children: "5-7 Business Days" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-sans text-muted-foreground justify-center mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "w-4 h-4 text-teal-500" }),
            "Tracking details will be sent to ",
            address.email || address.phone
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: () => navigate({ to: "/" }),
              className: "w-full bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans tracking-widest uppercase rounded-sm border-0",
              "data-ocid": "checkout.primary_button",
              children: "Continue Shopping"
            }
          )
        ] })
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "main",
    {
      className: "min-h-screen bg-sand-50 py-8 px-4",
      "data-ocid": "checkout.page",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-1.5 text-xs font-sans text-muted-foreground mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => navigate({ to: "/" }),
              className: "hover:text-teal-700 transition-colors",
              "data-ocid": "checkout.breadcrumb.link",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setIsCartOpen(true),
              className: "hover:text-teal-700 transition-colors",
              "data-ocid": "checkout.breadcrumb.link",
              children: "Cart"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Checkout" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex items-center justify-center gap-2 mb-8",
            "data-ocid": "checkout.steps.panel",
            children: stepList.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: `flex items-center gap-1.5 text-sm font-sans px-3 py-1.5 rounded-full transition-colors ${i <= currentStepIndex ? "bg-teal-700 text-champagne-200" : "bg-white border border-teal-200 text-muted-foreground"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: i + 1 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: s.label })
                  ]
                }
              ),
              i < stepList.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronRight,
                {
                  className: `w-4 h-4 ${i < currentStepIndex ? "text-teal-500" : "text-teal-200"}`
                }
              )
            ] }, s.id))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
            step === "address" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-teal-50 p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-5 h-5 text-teal-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-xl text-teal-800", children: "Delivery Address" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleAddressSubmit, className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "Full Name *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        required: true,
                        placeholder: "e.g. Priya Sharma",
                        value: address.fullName,
                        onChange: (e) => setAddress((p) => ({
                          ...p,
                          fullName: e.target.value
                        })),
                        className: "border-teal-200 focus:ring-teal-500",
                        "data-ocid": "checkout.fullname.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "Phone Number *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        required: true,
                        type: "tel",
                        placeholder: "10-digit mobile number",
                        pattern: "[0-9]{10}",
                        maxLength: 10,
                        value: address.phone,
                        onChange: (e) => setAddress((p) => ({ ...p, phone: e.target.value })),
                        className: "border-teal-200 focus:ring-teal-500",
                        "data-ocid": "checkout.phone.input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "Email Address" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      type: "email",
                      placeholder: "for order updates (optional)",
                      value: address.email,
                      onChange: (e) => setAddress((p) => ({ ...p, email: e.target.value })),
                      className: "border-teal-200 focus:ring-teal-500",
                      "data-ocid": "checkout.email.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "Address Line 1 *" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      required: true,
                      placeholder: "House / Flat No., Street, Area",
                      value: address.addressLine1,
                      onChange: (e) => setAddress((p) => ({
                        ...p,
                        addressLine1: e.target.value
                      })),
                      className: "border-teal-200 focus:ring-teal-500",
                      "data-ocid": "checkout.address1.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "Address Line 2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      placeholder: "Landmark, Colony (optional)",
                      value: address.addressLine2,
                      onChange: (e) => setAddress((p) => ({
                        ...p,
                        addressLine2: e.target.value
                      })),
                      className: "border-teal-200 focus:ring-teal-500",
                      "data-ocid": "checkout.address2.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "City *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        required: true,
                        placeholder: "City",
                        value: address.city,
                        onChange: (e) => setAddress((p) => ({ ...p, city: e.target.value })),
                        className: "border-teal-200 focus:ring-teal-500",
                        "data-ocid": "checkout.city.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "State *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        required: true,
                        value: address.state,
                        onChange: (e) => setAddress((p) => ({ ...p, state: e.target.value })),
                        className: "w-full h-10 px-3 rounded-md border border-teal-200 bg-background font-sans text-sm focus:outline-none focus:ring-2 focus:ring-teal-500",
                        "data-ocid": "checkout.state.select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select" }),
                          STATES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "Pincode *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        required: true,
                        placeholder: "6-digit",
                        pattern: "[0-9]{6}",
                        maxLength: 6,
                        value: address.pincode,
                        onChange: (e) => setAddress((p) => ({
                          ...p,
                          pincode: e.target.value
                        })),
                        className: "border-teal-200 focus:ring-teal-500",
                        "data-ocid": "checkout.pincode.input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "submit",
                    className: "w-full bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans tracking-widest uppercase rounded-sm border-0 py-5 mt-2",
                    "data-ocid": "checkout.address.submit_button",
                    children: [
                      "Continue to Payment",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-2" })
                    ]
                  }
                )
              ] })
            ] }),
            step === "payment" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-teal-50 p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5 text-teal-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-xl text-teal-800", children: "Payment Method" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs font-sans text-teal-600 bg-teal-50 px-2 py-0.5 rounded", children: "100% Secure" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handlePaymentSubmit, className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
                  { type: "upi", icon: Smartphone, label: "UPI" },
                  { type: "card", icon: CreditCard, label: "Card" },
                  {
                    type: "cod",
                    icon: Package,
                    label: "Cash on Delivery"
                  },
                  {
                    type: "netbanking",
                    icon: House,
                    label: "Net Banking"
                  }
                ].map(({ type, icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setPayment({ type }),
                    className: `flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border-2 transition-all text-sm font-sans ${payment.type === type ? "border-teal-600 bg-teal-50 text-teal-800" : "border-teal-100 bg-white text-muted-foreground hover:border-teal-300"}`,
                    "data-ocid": `checkout.${type}.toggle`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-center leading-tight", children: label })
                    ]
                  },
                  type
                )) }),
                payment.type === "upi" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 py-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-center", children: "Scan the QR code using GPay, PhonePe, or any UPI app" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-2 border-teal-200 rounded-xl p-3 bg-white shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: gpayQR,
                      alt: "GPay QR Code",
                      width: 220,
                      height: 220,
                      className: "rounded-lg object-contain"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-teal-800 text-base tracking-wide", children: "pushpasanthi54@oksbi" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "Enter UPI Transaction ID after payment *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        required: true,
                        placeholder: "e.g. 123456789012",
                        value: payment.upiId ?? "",
                        onChange: (e) => setPayment((p) => ({ ...p, upiId: e.target.value })),
                        className: "border-teal-200 focus:ring-teal-500",
                        "data-ocid": "checkout.upi.input"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Enter the 12-digit transaction ID from your UPI app after completing payment" })
                  ] })
                ] }),
                payment.type === "card" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "Card Number *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        required: true,
                        placeholder: "1234 5678 9012 3456",
                        maxLength: 19,
                        value: payment.cardNumber ?? "",
                        onChange: (e) => {
                          const v = e.target.value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ").slice(0, 19);
                          setPayment((p) => ({ ...p, cardNumber: v }));
                        },
                        className: "border-teal-200 focus:ring-teal-500",
                        "data-ocid": "checkout.card_number.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "Name on Card *" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        required: true,
                        placeholder: "As printed on card",
                        value: payment.cardName ?? "",
                        onChange: (e) => setPayment((p) => ({
                          ...p,
                          cardName: e.target.value
                        })),
                        className: "border-teal-200 focus:ring-teal-500",
                        "data-ocid": "checkout.card_name.input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "Expiry (MM/YY) *" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          required: true,
                          placeholder: "MM/YY",
                          maxLength: 5,
                          value: payment.cardExpiry ?? "",
                          onChange: (e) => {
                            const v = e.target.value.replace(/\D/g, "").replace(/(\d{2})(?=\d)/, "$1/").slice(0, 5);
                            setPayment((p) => ({ ...p, cardExpiry: v }));
                          },
                          className: "border-teal-200 focus:ring-teal-500",
                          "data-ocid": "checkout.card_expiry.input"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1 block", children: "CVV *" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          required: true,
                          type: "password",
                          placeholder: "3 digits",
                          maxLength: 3,
                          value: payment.cardCvv ?? "",
                          onChange: (e) => setPayment((p) => ({
                            ...p,
                            cardCvv: e.target.value.replace(/\D/g, "")
                          })),
                          className: "border-teal-200 focus:ring-teal-500",
                          "data-ocid": "checkout.card_cvv.input"
                        }
                      )
                    ] })
                  ] })
                ] }),
                payment.type === "cod" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-5 h-5 text-amber-600 shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-sans font-semibold text-amber-800", children: [
                      "Pay ₹",
                      total.toLocaleString("en-IN"),
                      " on delivery"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-amber-700 mt-0.5", children: "Keep exact change ready. Available across most pin codes." })
                  ] })
                ] }),
                payment.type === "netbanking" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: ["SBI", "HDFC", "ICICI", "Axis", "Kotak", "Other"].map(
                  (bank) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      className: "py-2 px-3 text-sm font-sans border border-teal-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-colors",
                      "data-ocid": "checkout.bank.toggle",
                      children: bank
                    },
                    bank
                  )
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "button",
                      variant: "outline",
                      onClick: () => setStep("address"),
                      className: "flex-1 border-teal-200 text-teal-700 hover:bg-teal-50 font-sans uppercase rounded-sm text-xs",
                      "data-ocid": "checkout.back.secondary_button",
                      children: "Back"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      type: "submit",
                      className: "flex-1 bg-teal-700 hover:bg-teal-600 text-champagne-200 font-sans tracking-widest uppercase rounded-sm border-0",
                      "data-ocid": "checkout.payment.submit_button",
                      children: [
                        "Review Order",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-2" })
                      ]
                    }
                  )
                ] })
              ] })
            ] }),
            step === "review" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-teal-50 p-6 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5 text-teal-600" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-xl text-teal-800", children: "Review Your Order" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-teal-50 rounded-xl p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-sans uppercase tracking-widest text-teal-600 mb-1", children: "Delivering to" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-sans font-semibold text-teal-800", children: address.fullName }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-sans text-muted-foreground mt-0.5", children: [
                    address.addressLine1,
                    address.addressLine2 && `, ${address.addressLine2}`
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-sans text-muted-foreground", children: [
                    address.city,
                    ", ",
                    address.state,
                    " - ",
                    address.pincode
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-sans text-muted-foreground", children: address.phone })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setStep("address"),
                    className: "text-xs text-teal-600 hover:underline font-sans",
                    "data-ocid": "checkout.edit_address.secondary_button",
                    children: "Edit"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-teal-50 rounded-xl p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-sans uppercase tracking-widest text-teal-600 mb-1", children: "Payment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-sans font-semibold text-teal-800 capitalize", children: payment.type === "upi" ? `UPI — ${payment.upiId}` : payment.type === "card" ? `Card ending ****${(payment.cardNumber ?? "").replace(/\s/g, "").slice(-4)}` : payment.type === "cod" ? "Cash on Delivery" : "Net Banking" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setStep("payment"),
                    className: "text-xs text-teal-600 hover:underline font-sans",
                    "data-ocid": "checkout.edit_payment.secondary_button",
                    children: "Edit"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-sans uppercase tracking-widest text-teal-600 mb-3", children: [
                  "Items (",
                  items.reduce((s, i) => s + i.quantity, 0),
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex gap-3 items-center",
                    "data-ocid": `checkout.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-16 rounded overflow-hidden bg-sand-100 shrink-0", children: item.product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: item.product.imageUrl,
                          alt: item.product.name,
                          className: "w-full h-full object-cover"
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-5 h-5 text-teal-200" }) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-sans font-medium text-teal-800 line-clamp-1", children: item.product.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          "Qty: ",
                          item.quantity
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-serif font-semibold text-teal-700 shrink-0", children: [
                        "₹",
                        (Number(item.product.price) * item.quantity).toLocaleString("en-IN")
                      ] })
                    ]
                  },
                  item.product.id.toString()
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    variant: "outline",
                    onClick: () => setStep("payment"),
                    className: "flex-1 border-teal-200 text-teal-700 hover:bg-teal-50 font-sans uppercase rounded-sm text-xs",
                    "data-ocid": "checkout.back.secondary_button",
                    children: "Back"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    onClick: handlePlaceOrder,
                    disabled: isPlacing,
                    className: "flex-2 flex-grow bg-amber-600 hover:bg-amber-500 text-white font-sans tracking-widest uppercase rounded-sm border-0 py-5 disabled:opacity-70",
                    "data-ocid": "checkout.place_order.primary_button",
                    children: isPlacing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                      "Placing Order..."
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 mr-2" }),
                      "Place Order — ₹",
                      total.toLocaleString("en-IN")
                    ] })
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-teal-50 p-5 sticky top-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-lg text-teal-800 mb-4", children: "Order Summary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 mb-4", children: items.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-2",
                "data-ocid": `checkout.summary.item.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-12 rounded overflow-hidden bg-sand-100 shrink-0", children: item.product.imageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: item.product.imageUrl,
                      alt: item.product.name,
                      className: "w-full h-full object-cover"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "w-4 h-4 text-teal-200" }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-sans text-foreground line-clamp-1", children: item.product.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                      "Qty ",
                      item.quantity
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-serif font-semibold text-teal-700 shrink-0", children: [
                    "₹",
                    (Number(item.product.price) * item.quantity).toLocaleString("en-IN")
                  ] })
                ]
              },
              item.product.id.toString()
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-teal-100 mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-sm font-sans", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "₹",
                  subtotal.toLocaleString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Shipping" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: shipping === 0 ? "text-teal-600 font-medium" : "",
                    children: shipping === 0 ? "FREE" : `₹${shipping}`
                  }
                )
              ] }),
              shipping === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-teal-600", children: "Free shipping on orders above ₹2,999" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-teal-100" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-semibold text-teal-800 text-base", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "₹",
                  total.toLocaleString("en-IN")
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-4 border-t border-teal-50 flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5 text-teal-500 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Payments are secured with 256-bit SSL encryption" })
            ] })
          ] }) })
        ] })
      ] })
    }
  );
}
export {
  CheckoutPage as default
};

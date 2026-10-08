export interface CategoryGuide {
  slug: string;
  quickAnswer: {
    question: string;
    answer: string;
  };
  specTable: {
    title: string;
    headers: string[];
    rows: string[][];
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const CATEGORY_GUIDES: Record<string, CategoryGuide> = {
  bedsheets: {
    slug: "bedsheets",
    quickAnswer: {
      question: "What makes sateen weave cotton ideal for luxury bedsheets?",
      answer:
        "Sateen weave uses a four-over, one-under thread structure that exposes more yarn surface, creating a subtle luminous sheen, a silky-smooth handfeel, and exceptional breathability. Pure long-staple cotton sateen (300–400 thread count) regulates body temperature year-round without trapping static or excess heat.",
    },
    specTable: {
      title: "Standard Dimensions & Sizing Architecture",
      headers: ["Format", "Flat Sheet Size", "Pillowcases Included", "Optimal Mattress Depth"],
      rows: [
        ["King Bed Set", "108\" × 108\" (274 × 274 cm)", "2 Covers (18\" × 27\")", "Up to 10\" (25 cm) depth"],
        ["Queen Bed Set", "90\" × 108\" (228 × 274 cm)", "2 Covers (18\" × 27\")", "Up to 10\" (25 cm) depth"],
        ["Bespoke Custom", "Custom Tailored Upon Request", "Custom Proportions", "Deep pillow-top mattresses"],
      ],
    },
    faqs: [
      {
        question: "How does cotton sateen differ from percale bedsheets?",
        answer:
          "Percale features a traditional one-over, one-under weave delivering a crisp, matte texture similar to luxury hotel poplin. Cotton sateen features a denser four-over, one-under weave that yields a silkier drape, a luminous subtle sheen, and softer tactile warmth right out of the box.",
      },
      {
        question: "How should luxury cotton bedsheets be washed to maintain their sheen?",
        answer:
          "Wash in cool or lukewarm water (max 30°C) on a gentle cycle using a mild liquid detergent. Avoid harsh chlorine bleaches and fabric softeners. Line dry in the shade to preserve natural yarn tensile strength, or tumble dry on low heat.",
      },
      {
        question: "Does K J ENTERPRISES accept bespoke bedsheet dimensions?",
        answer:
          "Yes. For custom mattress proportions, oversized European beds, or deep pillow-top depths, reach out to our concierge via phone (+91 88658 74772) or our contact enquiry form.",
      },
    ],
  },
  comforters: {
    slug: "comforters",
    quickAnswer: {
      question: "What is an all-season comforter and why is box-quilting essential?",
      answer:
        "An all-season comforter is engineered with a balanced 250–300 GSM micro-loft fill calibrated for spring, autumn, and air-conditioned summer rooms. Box-stitch quilting secures the insulation within individual chambers, preventing filler shifting, cold pockets, and clumping over repeated use.",
    },
    specTable: {
      title: "Comforter Sizing & Loft Specifications",
      headers: ["Model", "Dimensions", "Fill Weight (GSM)", "Climate Suitability"],
      rows: [
        ["Double / King Comforter", "90\" × 100\" (228 × 254 cm)", "280–300 GSM", "All-Season & AC Bedrooms"],
        ["Single Comforter", "60\" × 90\" (152 × 228 cm)", "280–300 GSM", "Individual Lounging & Guest Suites"],
        ["Reversible Monochrome", "Dual-tone styling", "Hypoallergenic Micro-loft", "Modern Minimalist Bedrooms"],
      ],
    },
    faqs: [
      {
        question: "Is an all-season comforter suitable for Indian summer air-conditioning?",
        answer:
          "Yes. Our 280–300 GSM micro-loft weight is specifically calibrated for climate-controlled spaces (20°C–25°C), providing cozy warmth without the stuffiness or overheating of heavy winter quilts.",
      },
      {
        question: "Will the comforter filling shift or clump after washing?",
        answer:
          "No. Precision square and diamond box-quilting permanently secures the lightweight micro-loft filling across the entire surface, ensuring even loft and uniform insulation after washing.",
      },
      {
        question: "Is the comforter hypoallergenic?",
        answer:
          "Yes. The micro-loft fiberfill and outer shell are completely hypoallergenic, dust-mite resistant, and engineered for sensitive skin.",
      },
    ],
  },
  "cushion-covers": {
    slug: "cushion-covers",
    quickAnswer: {
      question: "How do you style monochrome cushion covers for modern minimalist living?",
      answer:
        "Apply the 2:2:1 styling formula: anchor the sofa ends with two 18×18-inch foundational cushions in solid textures, layer two 16×16-inch cushions featuring geometric bouclé or jacquard weave, and finish with a central accent pillow. This creates tactile richness without visual clutter.",
    },
    specTable: {
      title: "Cushion Cover Dimensions & Proportion Guide",
      headers: ["Size", "Dimensions (cm)", "Recommended Insert", "Best Application"],
      rows: [
        ["Standard Square", "16\" × 16\" (40 × 40 cm)", "17\" × 17\" Insert", "Accent chairs, loveseats, and layered sofa setups"],
        ["Classic Foundation", "18\" × 18\" (45 × 45 cm)", "19\" × 19\" or 20\" × 20\" Insert", "Sofa corner anchors and master bed styling"],
        ["Tailored Finishing", "Concealed bottom zip", "High-density micro-fiber fill", "Architectural clean edge lines"],
      ],
    },
    faqs: [
      {
        question: "What size insert should I buy for an 18×18 inch cushion cover?",
        answer:
          "Always select an insert that is 1 to 2 inches larger than the cover (e.g. 19×19\" or 20×20\"). This ensures a full, luxurious, plump silhouette with no sagging corners.",
      },
      {
        question: "Are K J ENTERPRISES cushion covers machine washable?",
        answer:
          "Textured and jacquard cushion covers should be washed inside out on a delicate cold cycle, or spot-cleaned to preserve the woven dimensional yarn structure.",
      },
      {
        question: "Do the cushion covers come with inserts?",
        answer:
          "K J ENTERPRISES offers premium covers with concealed zippers. Bespoke feather-feel or microfiber inserts can be arranged upon inquiry.",
      },
    ],
  },
  curtains: {
    slug: "curtains",
    quickAnswer: {
      question: "How should curtains be measured and hung for luxury architectural drama?",
      answer:
        "Mount the curtain track or rod 4 to 6 inches above the window frame or directly below ceiling molding to visually elevate ceiling height. For luxurious fullness, choose a total fabric width 2.0 to 2.5 times the window width, letting the fabric graze the floor with a 0.5-inch break.",
    },
    specTable: {
      title: "Curtain Drop & Heading Specifications",
      headers: ["Drop Format", "Length (Feet / Meters)", "Fullness Recommendation", "Heading Style"],
      rows: [
        ["Standard Window", "5 ft (152 cm)", "2.0× track width", "Eyelet / Tailored Pleat"],
        ["Standard Door", "7 ft (213 cm)", "2.0× to 2.5× track width", "Eyelet / Concealed Tab"],
        ["Full Architectural Drop", "9 ft (274 cm)", "2.5× track width", "Floor-to-ceiling clean puddle drape"],
      ],
    },
    faqs: [
      {
        question: "What is the ideal curtain fullness for a luxury finish?",
        answer:
          "A fullness ratio of 2.0× to 2.5× is recommended. For example, if your window span is 6 feet, your total curtain width across both panels should be 12 to 15 feet to produce deep, sculptural folds.",
      },
      {
        question: "Do your curtains offer complete light blackout or soft filtering?",
        answer:
          "Our collection features architectural light-filtering drapes that eliminate harsh glare and maintain daytime privacy while bathing interiors in soft, diffused ambient daylight. Custom blackout lining is available on bespoke request.",
      },
      {
        question: "Can I order custom heights for high-ceiling apartments?",
        answer:
          "Yes. We specialize in bespoke curtain drops for villas, penthouses, and high-ceiling residences. Contact us at +91 88658 74772 with your rail-to-floor measurements.",
      },
    ],
  },
};

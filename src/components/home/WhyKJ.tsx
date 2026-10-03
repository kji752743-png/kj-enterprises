import { Sparkles, Layers, Sliders, MessageSquare } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const strengths = [
  {
    icon: Sparkles,
    title: "Disciplined Aesthetics",
    description:
      "A restrained monochromatic palette of white, black, and light grey engineered to harmoniously complement modern furniture and minimalist interior architecture.",
  },
  {
    icon: Layers,
    title: "Tactile Comfort",
    description:
      "Every textile in our portfolio is selected with careful consideration for softness, breathability, and enduring drape in everyday living environments.",
  },
  {
    icon: Sliders,
    title: "Refined Proportion",
    description:
      "Thoughtfully proportioned dimensions across bedsheets, comforters, cushions, and drapery to ensure seamless fit and architectural drape.",
  },
  {
    icon: MessageSquare,
    title: "Dedicated Consultation",
    description:
      "Direct communication with our team to help you select harmonious combinations for bedrooms, guest suites, and contemporary living spaces.",
  },
];

export default function WhyKJ() {
  return (
    <section className="py-24 sm:py-32 bg-neutral-100/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Our Commitment"
          title="Why K J ENTERPRISES"
          subtitle="A dedicated approach to home furnishings grounded in balance, tactile quality, and attentive service."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 border border-neutral-200/80 flex flex-col justify-between space-y-6"
              >
                <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-black">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-medium text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest pt-2 border-t border-neutral-100">
                  Principle 0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

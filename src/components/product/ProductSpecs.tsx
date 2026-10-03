import { ProductSpecifications } from "../../types";

interface ProductSpecsProps {
  specifications: ProductSpecifications;
}

export default function ProductSpecs({ specifications }: ProductSpecsProps) {
  const specsList = [
    { label: "Dimensions / Sizing", value: specifications.dimensions },
    { label: "Material & Weave", value: specifications.material },
    { label: "Color / Palette", value: specifications.color },
    { label: "Design Finish", value: specifications.design },
    { label: "Care Instructions", value: specifications.careInstructions },
  ].filter((spec) => Boolean(spec.value));

  if (specsList.length === 0) return null;

  return (
    <div className="space-y-4 pt-6 border-t border-neutral-200">
      <h3 className="text-xs uppercase tracking-widest font-semibold text-black">
        Product Specifications
      </h3>
      <div className="divide-y divide-neutral-100 text-xs sm:text-sm">
        {specsList.map((item, idx) => (
          <div key={idx} className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
            <span className="text-neutral-500 font-medium">{item.label}</span>
            <span className="sm:col-span-2 text-neutral-800 font-light leading-relaxed">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

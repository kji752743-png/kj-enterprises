import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import brandData from "../../../data/brand.json";

export default function BrandIntro() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-medium tracking-ultra uppercase text-neutral-500 block">
              The Brand
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-tight">
              Quiet Elegance for the Contemporary Home
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-8 lg:pl-6">
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-light">
              {brandData.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-neutral-200">
              {brandData.philosophy.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <span className="font-mono text-xs text-neutral-400">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-base font-medium text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-black font-medium border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-400 transition-colors"
              >
                <span>Read Full Philosophy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

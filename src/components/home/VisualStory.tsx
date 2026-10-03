import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function VisualStory() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-square w-full border border-neutral-200 overflow-hidden">
              <Image
                src="/images/hero/hero_bed_sheets.jpg"
                alt="Editorial Bedroom Styling by K J ENTERPRISES"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md p-6 max-w-xs border border-neutral-200 shadow-lg hidden sm:block">
              <span className="text-[10px] tracking-ultra uppercase text-neutral-500 block mb-1">
                Visual Curation
              </span>
              <p className="text-xs text-neutral-700 font-light leading-relaxed">
                Bedrooms curated with balanced monochrome tones offer sensory relief from daily demands.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <span className="text-[11px] font-medium tracking-ultra uppercase text-neutral-500 block">
              Editorial Feature
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-tight">
              Spaces Designed for Living Well
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              We look at home textiles as architectural elements rather than mere accessories. The drape of a curtain, the tactile depth of a comforter, and the smooth touch of cotton bedsheets work in concert to define the atmosphere of a sanctuary.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              By adhering to disciplined monochromatic palettes and refined materials, K J ENTERPRISES brings enduring harmony to modern residential interiors.
            </p>

            <div className="pt-4">
              <Link
                href="/collections"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-6 py-3.5 bg-black text-white hover:bg-neutral-800 transition-colors font-medium"
              >
                <span>View Complete Collection</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="py-24 sm:py-32 bg-neutral-950 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-8">
        <span className="text-[11px] font-medium tracking-ultra uppercase text-neutral-400 block">
          CONCIERGE & BESPOKE INQUIRIES
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight">
          Let’s Create Beautiful Sanctuaries
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
          Explore our complete archive of home textiles or connect with K J ENTERPRISES for personal consultations, custom drapery sizing, and residential styling projects.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
          <Link
            href="/collections"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-all font-medium"
          >
            <span>Explore Collection</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest px-8 py-4 border border-neutral-600 text-white hover:border-white hover:bg-white/10 transition-all font-medium"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

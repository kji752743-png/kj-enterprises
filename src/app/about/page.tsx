import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllCategories, getBrandInfo } from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Story & Design Philosophy",
  description:
    "Discover the philosophy behind K J ENTERPRISES. We create architectural home furnishings celebrating the harmony between tactile indulgence, minimalist aesthetics, and everyday living.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const categories = getAllCategories();
  const brand = getBrandInfo();

  return (
    <div className="bg-white text-black">
      {/* Editorial Header */}
      <section className="py-20 sm:py-28 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-4">
          <span className="text-[11px] font-medium tracking-ultra uppercase text-neutral-500 block">
            ABOUT K J ENTERPRISES • ATELIER STORY
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-tight tracking-tight">
            Crafting Sanctuaries of Quiet Luxury & Comfort
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed pt-2">
            {brand.shortStatement}
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 sm:py-28 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <span className="text-[10px] tracking-ultra uppercase text-neutral-400 block mb-2">
                Brand Origin
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal">
                Who We Are
              </h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-neutral-700 font-light leading-relaxed text-sm sm:text-base">
              <p>
                {brand.overview}
              </p>
              <p>
                At K J ENTERPRISES, we approach home textiles with architectural intention. Rather than fleeting trends, we develop pieces centered around harmonious proportions, restful color schemes, and tactile comfort that stands the test of everyday living.
              </p>
              <div className="p-6 bg-neutral-50 border border-neutral-200">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                  Brand Notice
                </span>
                <p className="text-xs text-neutral-600 italic">
                  Information regarding corporate history, founders, and specialized certifications will be updated as verified company documentation is released by the management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 sm:py-28 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <SectionHeading
            eyebrow="Our Guiding Values"
            title="Design Philosophy"
            subtitle="The intersection of style, comfort, home, and everyday living."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand.philosophy.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-neutral-200 space-y-4"
              >
                <span className="font-mono text-xs text-neutral-400">
                  0{index + 1}
                </span>
                <h3 className="font-serif text-xl font-medium text-black">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Visual Hero Banner */}
      <section className="relative h-[65vh] w-full overflow-hidden bg-neutral-900">
        <Image
          src="/images/hero/hero_bed_sheets.jpg"
          alt="K J ENTERPRISES Editorial Atmosphere"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="max-w-2xl px-6 text-center text-white space-y-3">
            <span className="text-[10px] uppercase tracking-ultra text-neutral-300 block">
              Atmosphere & Living
            </span>
            <p className="font-serif text-2xl sm:text-4xl font-normal leading-relaxed">
              &ldquo;The luxury of a peaceful home begins with the textures you touch each day.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer (Four Categories) */}
      <section className="py-20 sm:py-28 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="What We Offer"
            subtitle="Explore our four foundational home furnishing categories."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="group block border border-neutral-200 p-6 bg-white hover:border-black transition-colors"
              >
                <div className="relative aspect-square w-full mb-4 overflow-hidden bg-neutral-100">
                  <Image
                    src={cat.heroImage}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-center luxury-image-zoom"
                  />
                </div>
                <h3 className="font-serif text-lg font-medium text-black group-hover:text-neutral-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-1 line-clamp-2">
                  {cat.tagline}
                </p>
                <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] uppercase tracking-widest text-black font-medium">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 sm:py-24 bg-neutral-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal">
            Begin Your Space Journey
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Browse our complete collection of bedsheets, comforters, cushions, and curtains, or reach out to our team with your specific requirements.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collections"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest px-8 py-3.5 bg-white text-black hover:bg-neutral-200 transition-colors font-medium"
            >
              <span>Explore Collection</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest px-8 py-3.5 border border-neutral-700 text-white hover:border-white hover:bg-white/10 transition-colors font-medium"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

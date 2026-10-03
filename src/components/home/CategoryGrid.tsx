import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { getAllCategories } from "../../lib/products";
import TiltCard from "../3d/TiltCard";

export default function CategoryGrid() {
  const categories = getAllCategories();

  return (
    <section className="py-24 sm:py-32 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Collections"
          title="Product Categories"
          subtitle="Explore our thoughtfully curated collections designed to elevate the intimate and shared spaces of your home."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <TiltCard key={category.id} className="h-full">
              <Link
                href={`/collections/${category.slug}`}
                className="group block relative bg-white border border-neutral-200 overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={category.heroImage}
                    alt={`K J ENTERPRISES ${category.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center luxury-image-zoom"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                  
                  <span className="absolute top-4 right-4 font-mono text-xs uppercase tracking-widest bg-white/90 backdrop-blur-sm text-neutral-800 px-2.5 py-1">
                    0{index + 1}
                  </span>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-medium tracking-ultra uppercase text-neutral-500 block mb-1">
                      {category.tagline}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-black group-hover:text-neutral-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-neutral-600 font-light mt-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs uppercase tracking-widest font-medium text-black">
                    <span>Explore {category.name}</span>
                    <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

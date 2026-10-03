"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { getAllProducts } from "../../lib/products";

const categories = [
  { label: "All", value: "all" },
  { label: "Bedsheets", value: "bedsheets" },
  { label: "Comforters", value: "comforters" },
  { label: "Cushion Covers", value: "cushion-covers" },
  { label: "Curtains", value: "curtains" },
];

export default function ProductDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const allProducts = getAllProducts();

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts.slice(0, 6)
      : allProducts.filter((p) => p.categorySlug === selectedCategory);

  return (
    <section className="py-24 sm:py-32 bg-white text-black border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Discovery"
          title="Curated Selections"
          subtitle="Explore our design portfolio. Filter by room requirement to discover pieces tailored for your home."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-200 border ${
                  isActive
                    ? "bg-black text-white border-black font-medium"
                    : "bg-white text-neutral-600 border-neutral-200 hover:border-black hover:text-black"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group bg-white border border-neutral-200 flex flex-col h-full hover:border-black transition-colors duration-300">
                  <Link
                    href={`/product/${product.slug}`}
                    className="relative aspect-square w-full overflow-hidden bg-neutral-100 block"
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center luxury-image-zoom"
                    />
                    <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest uppercase bg-white/90 backdrop-blur-sm px-2 py-0.5 text-neutral-800">
                      {product.category}
                    </span>
                  </Link>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] uppercase tracking-ultra text-neutral-400 block">
                        {product.tagline}
                      </span>
                      <h3 className="font-serif text-xl font-normal text-black group-hover:text-neutral-700 transition-colors">
                        <Link href={`/product/${product.slug}`}>{product.name}</Link>
                      </h3>
                      <p className="text-xs text-neutral-600 line-clamp-2 font-light leading-relaxed pt-1">
                        {product.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <Link
                        href={`/product/${product.slug}`}
                        className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-medium text-black hover:text-neutral-600 transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={`/contact?interest=${encodeURIComponent(product.name)}`}
                        className="text-[11px] uppercase tracking-wider text-neutral-500 hover:text-black border-b border-transparent hover:border-black transition-colors"
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-14">
          <Link
            href="/collections"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-8 py-4 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 font-medium"
          >
            <span>View All Collections</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

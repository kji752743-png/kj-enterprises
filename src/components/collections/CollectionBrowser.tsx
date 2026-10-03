"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search, SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "../../types";

interface CollectionBrowserProps {
  initialProducts: Product[];
  initialCategory?: string;
}

const categories = [
  { label: "All Collections", value: "all" },
  { label: "Bedsheets", value: "bedsheets" },
  { label: "Comforters", value: "comforters" },
  { label: "Cushion Covers", value: "cushion-covers" },
  { label: "Curtains", value: "curtains" },
];

export default function CollectionBrowser({
  initialProducts,
  initialCategory = "all",
}: CollectionBrowserProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "name-asc" | "name-desc">("featured");

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        const matchesCategory =
          activeCategory === "all" || product.categorySlug === activeCategory;
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          product.name.toLowerCase().includes(query) ||
          product.tagline.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "name-asc") return a.name.localeCompare(b.name);
        if (sortBy === "name-desc") return b.name.localeCompare(a.name);
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [initialProducts, activeCategory, searchQuery, sortBy]);

  return (
    <div className="space-y-8">
      <div className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`text-xs uppercase tracking-widest px-4 py-2 border transition-all ${
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

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-neutral-200 focus:outline-none focus:border-black text-black placeholder:text-neutral-400"
            />
            <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <SlidersHorizontal className="w-3.5 h-3.5 text-neutral-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs bg-white border border-neutral-200 px-3 py-2 focus:outline-none focus:border-black text-neutral-700 cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-neutral-500 font-mono tracking-wider">
        <span>
          SHOWING {filteredProducts.length} OF {initialProducts.length} PRODUCTS
        </span>
        {activeCategory !== "all" && (
          <button
            onClick={() => setActiveCategory("all")}
            className="text-black underline uppercase text-[11px]"
          >
            Clear Category Filter
          </button>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-neutral-300 p-8 space-y-4">
          <p className="font-serif text-2xl text-neutral-700">No products found</p>
          <p className="text-sm text-neutral-500">
            Try adjusting your search query or selecting a different category.
          </p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="text-xs uppercase tracking-widest px-6 py-2.5 bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                      <h3 className="font-serif text-lg font-normal text-black group-hover:text-neutral-700 transition-colors leading-snug">
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
                        <span>Details</span>
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
      )}
    </div>
  );
}

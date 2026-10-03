"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import FabricCanvas from "../3d/FabricCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 0.85 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero/hero_bed_sheets.jpg"
          alt="K J ENTERPRISES Luxury Bedding and Home Furnishings"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
      </motion.div>

      <FabricCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-4"
        >
          <span className="text-xs sm:text-sm font-medium tracking-ultra uppercase text-neutral-300 border-b border-neutral-500 pb-1">
            K J ENTERPRISES • Home Furnishing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08] mb-6"
        >
          Style Meets Comfort
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Thoughtfully designed home furnishings for beautiful, comfortable living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/collections"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Explore Collection</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest px-8 py-4 border border-white/60 text-white hover:bg-white/10 transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Discover the Brand</span>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-[10px] uppercase tracking-ultra hidden sm:flex flex-col items-center space-y-2">
        <span>Scroll</span>
        <div className="w-[1px] h-8 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}

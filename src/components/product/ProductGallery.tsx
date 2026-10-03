"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "../ui/Lightbox";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const activeImage = images[selectedIndex] || images[0];

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full bg-neutral-100 border border-neutral-200 overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full cursor-zoom-in"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src={activeImage}
              alt={`${productName} - View ${selectedIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center luxury-image-zoom"
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2.5 text-black hover:bg-black hover:text-white transition-colors border border-neutral-200"
          aria-label="Zoom image"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>

      {images.length > 1 && (
        <div className="flex items-center space-x-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-20 flex-shrink-0 border overflow-hidden transition-all ${
                selectedIndex === idx
                  ? "border-black ring-1 ring-black"
                  : "border-neutral-200 hover:border-neutral-400 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      <Lightbox
        isOpen={isLightboxOpen}
        images={images}
        currentIndex={selectedIndex}
        onClose={() => setIsLightboxOpen(false)}
        onNext={() => setSelectedIndex((prev) => (prev + 1) % images.length)}
        onPrev={() =>
          setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
        }
        alt={productName}
      />
    </div>
  );
}

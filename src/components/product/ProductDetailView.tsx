"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, ChevronRight, Share2, Check } from "lucide-react";
import ProductGallery from "./ProductGallery";
import ProductSpecs from "./ProductSpecs";
import EnquiryModal from "./EnquiryModal";
import RelatedProducts from "./RelatedProducts";
import { Product } from "../../types";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailView({
  product,
  relatedProducts,
}: ProductDetailViewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white text-black">
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-4 border-b border-neutral-100 text-xs text-neutral-500 flex items-center space-x-2"
      >
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
        <Link href="/collections" className="hover:text-black transition-colors">
          Collections
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
        <Link
          href={`/collections/${product.categorySlug}`}
          className="hover:text-black transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
        <span className="text-black font-medium truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.images}
              productName={product.name}
            />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 block mb-1">
                {product.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-black tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-xs uppercase tracking-ultra text-neutral-400 mt-2 font-medium">
                {product.tagline}
              </p>
            </div>

            <div className="space-y-4 text-sm text-neutral-700 font-light leading-relaxed">
              <p>{product.description}</p>
            </div>

            <div className="pt-2 space-y-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest py-4 bg-black text-white hover:bg-neutral-800 transition-colors font-medium shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire About This Product</span>
              </button>

              <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
                <Link
                  href={`/contact?interest=${encodeURIComponent(product.name)}`}
                  className="hover:text-black underline underline-offset-4"
                >
                  Or submit custom enquiry via Contact page
                </Link>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center space-x-1 hover:text-black transition-colors"
                  aria-label="Share product"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black" />
                      <span>Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <ProductSpecs specifications={product.specifications} />

            <div className="p-4 bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 space-y-1 font-light">
              <p className="font-medium text-black">Informational Showcase</p>
              <p>
                K J ENTERPRISES provides curated consultations for residential and trade projects. Connect with our team for dimension customization and fabric swatch availability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {product.story && (
        <section className="py-16 sm:py-24 border-t border-neutral-200 bg-white">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-4">
            <span className="text-[10px] uppercase tracking-ultra text-neutral-400 block">
              Design Context
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-black">
              {product.story.headline}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
              {product.story.paragraph}
            </p>
          </div>
        </section>
      )}

      <RelatedProducts products={relatedProducts} />

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
        category={product.category}
      />
    </div>
  );
}

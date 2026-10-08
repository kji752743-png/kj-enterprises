import { Metadata } from "next";
import CollectionBrowser from "@/components/collections/CollectionBrowser";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Curated Home Collections | Bedsheets, Comforters, Cushions & Curtains",
  description:
    "Browse the complete luxury home furnishings archive by K J ENTERPRISES. Discover premium bed linen ensembles, cloud-loft comforters, designer cushion covers, and tailored curtains.",
};

export default function CollectionsPage() {
  const products = getAllProducts();

  return (
    <div className="bg-white text-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="THE COMPLETE ARCHIVE"
          title="Curated Home Collections"
          subtitle="Explore architectural textiles designed with disciplined monochromatic palettes, refined textures, and enduring proportions for intimate and shared spaces."
        />

        <CollectionBrowser initialProducts={products} initialCategory="all" />
      </div>
    </div>
  );
}

import { Metadata } from "next";
import CollectionBrowser from "@/components/collections/CollectionBrowser";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Complete Home Furnishing Collections",
  description:
    "Explore the comprehensive home furnishings portfolio by K J ENTERPRISES. Bedding, comforters, cushion covers, and curtains thoughtfully engineered for modern aesthetics.",
};

export default function CollectionsPage() {
  const products = getAllProducts();

  return (
    <div className="bg-white text-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="All Collections"
          subtitle="Explore our curated home furnishings. Filter by category, search specific designs, or view detailed specifications."
        />

        <CollectionBrowser initialProducts={products} initialCategory="all" />
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import CollectionBrowser from "@/components/collections/CollectionBrowser";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllCategories, getCategoryBySlug, getAllProducts } from "@/lib/products";

interface Props {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);
  if (!category) {
    return { title: "Category Not Found" };
  }
  return {
    title: `${category.name} Collection`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.category);
  if (!category) {
    notFound();
  }

  const allProducts = getAllProducts();

  return (
    <div className="bg-white text-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Category"
          title={category.name}
          subtitle={category.description}
        />

        <CollectionBrowser
          initialProducts={allProducts}
          initialCategory={category.slug}
        />
      </div>
    </div>
  );
}

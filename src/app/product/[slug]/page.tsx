import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailView from "@/components/product/ProductDetailView";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";
import { generateProductSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | K J ENTERPRISES`,
      description: product.shortDescription,
      images: [
        {
          url: product.images[0],
          width: 1024,
          height: 1024,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.slug);
  const productSchema = generateProductSchema(product);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Collections", url: "/collections" },
    { name: product.category, url: `/collections/${product.categorySlug}` },
    { name: product.name, url: `/product/${product.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductDetailView product={product} relatedProducts={related} />
    </>
  );
}

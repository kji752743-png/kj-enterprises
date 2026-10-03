import productsData from "../../data/products.json";
import categoriesData from "../../data/categories.json";
import brandData from "../../data/brand.json";
import { Product, Category, BrandInfo } from "../types";

const products: Product[] = productsData as Product[];
const categories: Category[] = categoriesData as Category[];
const brand: BrandInfo = brandData as BrandInfo;

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(productSlug: string): Product[] {
  const current = getProductBySlug(productSlug);
  if (!current) return [];

  const explicit = products.filter((p) =>
    current.relatedProductSlugs.includes(p.slug)
  );
  if (explicit.length > 0) return explicit;

  return products
    .filter((p) => p.categorySlug === current.categorySlug && p.slug !== current.slug)
    .slice(0, 3);
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getBrandInfo(): BrandInfo {
  return brand;
}

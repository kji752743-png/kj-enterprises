import { Product } from "../types";

export const siteConfig = {
  name: "K J ENTERPRISES",
  title: "K J ENTERPRISES | Premium Home Furnishings & Luxury Bedding",
  description:
    "Thoughtfully designed home furnishings for beautiful, comfortable living. Explore our refined collections of bedsheets, comforters, cushion covers, and curtains.",
  url: "https://kjenterprises.com",
  ogImage: "/images/hero/hero_bed_sheets.jpg",
};

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "K J ENTERPRISES",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/hero/hero_bed_sheets.jpg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      streetAddress: "[BUSINESS ADDRESS]",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8865874772",
      email: "kji752743@gmail.com",
      contactType: "Customer Support",
    },
  };
}

export function generateProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) =>
      img.startsWith("http") ? img : `${siteConfig.url}${img}`
    ),
    category: product.category,
    brand: {
      "@type": "Brand",
      name: "K J ENTERPRISES",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: "0",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/product/${product.slug}`,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

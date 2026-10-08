import { Product } from "../types";

export const siteConfig = {
  name: "K J ENTERPRISES",
  title: "K J ENTERPRISES | Luxury Home Furnishings & Bespoke Living Textiles",
  description:
    "Transform your living spaces into sanctuaries of calm elegance. Explore K J ENTERPRISES' curated portfolio of premium bedsheets, cloud-soft comforters, designer cushion covers, and architectural curtains.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shopify-wine-iota.vercel.app",
  ogImage: "/images/hero/hero_bed_sheets.jpg",
};

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "K J ENTERPRISES",
    alternateName: "K J Enterprises Luxury Home Furnishings",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/hero/hero_bed_sheets.jpg`,
    image: `${siteConfig.url}/images/hero/hero_bed_sheets.jpg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8865874772",
      email: "kji752743@gmail.com",
      contactType: "Customer Support & Concierge",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    knowsAbout: [
      "Luxury Bedsheets",
      "All-Season Comforters",
      "Designer Cushion Covers",
      "Architectural Curtains & Drapes",
      "Home Furnishings",
      "Interior Living Textiles",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "K J ENTERPRISES",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-IN",
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
    material: product.specifications?.material || "Premium Home Textile",
    color: product.specifications?.color || "Monochrome Neutral",
    brand: {
      "@type": "Brand",
      name: "K J ENTERPRISES",
    },
    itemCondition: "https://schema.org/NewCondition",
    url: `${siteConfig.url}/product/${product.slug}`,
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

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface ProductSpecifications {
  dimensions?: string;
  material?: string;
  color?: string;
  design?: string;
  careInstructions?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "Bedsheets" | "Comforters" | "Cushion Covers" | "Curtains";
  categorySlug: "bedsheets" | "comforters" | "cushion-covers" | "curtains";
  tagline: string;
  description: string;
  shortDescription: string;
  images: string[];
  featured: boolean;
  specifications: ProductSpecifications;
  story?: {
    headline: string;
    paragraph: string;
  };
  relatedProductSlugs: string[];
}

export interface Category {
  id: string;
  slug: "bedsheets" | "comforters" | "cushion-covers" | "curtains";
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  shortStatement: string;
  overview: string;
  philosophy: {
    title: string;
    description: string;
  }[];
  contactPlaceholders: {
    phone: string;
    email: string;
    address: string;
    operatingHours: string;
  };
}

export interface EnquirySubmission {
  name: string;
  phone: string;
  email: string;
  categoryInterest?: string;
  productInterest?: string;
  message: string;
}

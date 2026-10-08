import { Metadata } from "next";
import { notFound } from "next/navigation";
import CollectionBrowser from "@/components/collections/CollectionBrowser";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllCategories, getCategoryBySlug, getAllProducts } from "@/lib/products";
import { CATEGORY_GUIDES } from "@/lib/guides";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";

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
    title: `${category.name} | Luxury Home Textiles`,
    description: category.description,
    alternates: {
      canonical: `/collections/${params.category}`,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.category);
  if (!category) {
    notFound();
  }

  const allProducts = getAllProducts();
  const guide = CATEGORY_GUIDES[params.category];

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Collections", url: "/collections" },
    { name: category.name, url: `/collections/${category.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = guide ? generateFAQSchema(guide.faqs) : null;

  return (
    <div className="bg-white text-black py-16 sm:py-24">
      {/* Schemas for Breadcrumb and FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          as="h1"
          eyebrow="CURATED CATEGORY"
          title={category.name}
          subtitle={category.description}
        />

        <CollectionBrowser
          initialProducts={allProducts}
          initialCategory={category.slug}
        />

        {/* AEO / GEO Educational Insights & Specification Section */}
        {guide && (
          <div className="mt-24 pt-16 border-t border-neutral-200 space-y-16">
            {/* Quick Answer Definition Callout (High AEO Value) */}
            <div className="bg-neutral-50 border-l-2 border-black p-6 sm:p-8">
              <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400 block mb-2">
                Atelier Architectural Note • Material Insight
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-black mb-3">
                {guide.quickAnswer.question}
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
                {guide.quickAnswer.answer}
              </p>
            </div>

            {/* Sizing & Proportion HTML Table (High SERP Snippet Value) */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400 block">
                  Proportion & Dimension Standards
                </span>
                <h3 className="font-serif text-2xl font-normal text-black">
                  {guide.specTable.title}
                </h3>
              </div>
              <div className="overflow-x-auto border border-neutral-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-black uppercase tracking-wider text-[11px] font-medium">
                    <tr>
                      {guide.specTable.headers.map((h, i) => (
                        <th key={i} className="py-3 px-4 sm:px-6">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 font-light text-neutral-700">
                    {guide.specTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-neutral-50/50 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`py-3.5 px-4 sm:px-6 ${
                              cIdx === 0 ? "font-medium text-black" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Frequently Addressed Inquiries Accordion Grid */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-ultra uppercase text-neutral-400 block">
                  Guidance & Care
                </span>
                <h3 className="font-serif text-2xl font-normal text-black">
                  Frequently Addressed Category Questions
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {guide.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-neutral-200 p-6 bg-white space-y-3"
                  >
                    <h4 className="font-serif text-base font-medium text-black leading-snug">
                      {faq.question}
                    </h4>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

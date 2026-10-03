import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product } from "../../types";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 border-t border-neutral-200 bg-neutral-50/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="space-y-2 mb-10">
          <span className="text-[10px] uppercase tracking-ultra text-neutral-500 block">
            Harmonious Pairings
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-black">
            Related Furnishings
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-white border border-neutral-200 flex flex-col hover:border-black transition-colors"
            >
              <Link
                href={`/product/${item.slug}`}
                className="relative aspect-square w-full overflow-hidden bg-neutral-100 block"
              >
                <Image
                  src={item.images[0]}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center luxury-image-zoom"
                />
                <span className="absolute top-3 left-3 text-[9px] font-mono tracking-widest uppercase bg-white/90 backdrop-blur-sm px-2 py-0.5 text-neutral-800">
                  {item.category}
                </span>
              </Link>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-lg font-normal text-black group-hover:text-neutral-700 transition-colors">
                    <Link href={`/product/${item.slug}`}>{item.name}</Link>
                  </h3>
                  <p className="text-xs text-neutral-500 line-clamp-2 mt-1 font-light">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs uppercase tracking-widest text-black font-medium">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

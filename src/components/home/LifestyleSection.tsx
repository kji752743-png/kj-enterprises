import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";

const lifestyleStories = [
  {
    title: "Bedroom Serenity",
    subtitle: "Crisp Bedding & Soft Lofts",
    description: "Layering monochrome cotton sheets with an all-season comforter establishes a peaceful foundation for restorative sleep.",
    image: "/images/hero/hero_bed_sheets.jpg",
    link: "/collections/bedsheets",
  },
  {
    title: "Living Room Geometry",
    subtitle: "Architectural Cushions",
    description: "Structured accent cushion covers in contrasting textures bring geometric interest and comfort to contemporary lounge seating.",
    image: "/images/categories/cushions.jpg",
    link: "/collections/cushion-covers",
  },
  {
    title: "Ambient Light & Grace",
    subtitle: "Drapery & Spatial Depth",
    description: "Full-height curtains sculpt natural daylight, framing windows with an architectural presence that enhances spatial elegance.",
    image: "/images/categories/curtains.jpg",
    link: "/collections/curtains",
  },
];

export default function LifestyleSection() {
  return (
    <section className="py-24 sm:py-32 bg-white text-black border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Inspiration"
          title="Living with K J ENTERPRISES"
          subtitle="Discover how thoughtful textile layering elevates atmosphere, texture, and everyday tranquility."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lifestyleStories.map((story, idx) => (
            <div
              key={idx}
              className="group flex flex-col space-y-4 border border-neutral-200 p-4 bg-neutral-50/50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center luxury-image-zoom"
                />
              </div>

              <div className="space-y-2 pt-2 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-ultra text-neutral-400 block">
                    {story.subtitle}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-black group-hover:text-neutral-700 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1">
                    {story.description}
                  </p>
                </div>

                <div className="pt-3">
                  <Link
                    href={story.link}
                    className="text-xs uppercase tracking-widest text-black font-medium border-b border-black pb-0.5 hover:text-neutral-600 transition-colors"
                  >
                    Explore Styling
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

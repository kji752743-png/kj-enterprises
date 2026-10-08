interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  as = "h2",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const HeadingTag = as;

  return (
    <div
      className={`space-y-3 mb-12 sm:mb-16 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-xl"
      } ${className}`}
    >
      {eyebrow && (
        <span className="text-[11px] font-medium tracking-ultra uppercase text-neutral-500 block">
          {eyebrow}
        </span>
      )}
      <HeadingTag className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black tracking-tight leading-tight">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}

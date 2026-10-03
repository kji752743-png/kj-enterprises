interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

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
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-black tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}

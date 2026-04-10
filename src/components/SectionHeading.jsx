export default function SectionHeading({ eyebrow, title, align = "left" }) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-8 flex flex-col ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-[#2A9D8F]/55 bg-[#2A9D8F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#1F6E64]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl">{title}</h2>
    </div>
  );
}

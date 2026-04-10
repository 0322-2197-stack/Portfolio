import SectionHeading from "./SectionHeading";

export default function EducationSection({ education }) {
  return (
    <section id="education" className="rounded-3xl border border-[#B7CAC5] bg-[#F8FCFB]/95 p-7 backdrop-blur xl:p-10">
      <SectionHeading eyebrow="Education" title="Academic Timeline" />

      <div className="relative ml-2 border-l border-[#2A9D8F]/55 pl-6">
        {education.map((item, index) => (
          <article key={`${item.year}-${item.school}`} className={index === 0 ? "pb-8" : "pb-0"}>
            <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-[#2A9D8F] shadow-lg shadow-[#2A9D8F]/30" />
            <p className="text-sm font-semibold text-[#1F6E64]">{item.year}</p>
            <h3 className="mt-2 text-base font-semibold leading-snug text-[#1F2937]">{item.title}</h3>
            <p className="mt-1 text-sm text-[#4B5563]">{item.school}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

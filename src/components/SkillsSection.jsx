import SectionHeading from "./SectionHeading";

function SkillPill({ label, tone = "cyan" }) {
  const toneClass =
    tone === "violet"
      ? "border-[#E9C46A]/60 bg-[#E9C46A]/20 text-[#8A5A00] hover:border-[#D9B253]"
      : "border-[#2A9D8F]/60 bg-[#2A9D8F]/14 text-[#1F6E64] hover:border-[#2A9D8F]/85";

  return (
    <li
      className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${toneClass}`}
    >
      {label}
    </li>
  );
}

export default function SkillsSection({ technical, soft }) {
  return (
    <section id="skills" className="rounded-3xl border border-[#B7CAC5] bg-[#F8FCFB]/95 p-7 backdrop-blur xl:p-10">
      <SectionHeading eyebrow="Skills" title="What I Bring" />

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#1F2937]">Technical Skills</h3>
          <ul className="flex flex-wrap gap-3">
            {technical.map((skill) => (
              <SkillPill key={skill} label={skill} />
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#1F2937]">Soft Skills</h3>
          <ul className="flex flex-wrap gap-3">
            {soft.map((skill) => (
              <SkillPill key={skill} label={skill} tone="violet" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

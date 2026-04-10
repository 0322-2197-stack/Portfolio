import SectionHeading from "./SectionHeading";

function CertCard({ title, items, accent }) {
  const accentClass =
    accent === "violet"
      ? "from-[#E9C46A]/28 to-[#F6E8C2]/45 border-[#D9B253]/75"
      : accent === "emerald"
        ? "from-[#E76F51]/18 to-[#FBE5DF]/50 border-[#D96A4F]/70"
        : "from-[#2A9D8F]/22 to-[#DEF2EF]/55 border-[#23877B]/75";

  return (
    <article className={`rounded-2xl border bg-gradient-to-br p-5 shadow-sm ${accentClass}`}>
      <h3 className="text-lg font-semibold text-[#1F2937]">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-[#4B5563]">
        {items.map((item) => (
          <li key={item} className="rounded-lg border border-[#9FB3AF] bg-white/90 px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="rounded-3xl border border-[#9FB3AF] bg-[#F8FCFB]/95 p-7 shadow-sm shadow-[#2A9D8F]/8 backdrop-blur xl:p-10">
      <SectionHeading eyebrow="Certifications" title="Credentials and Events" />

      <div className="grid gap-5 md:grid-cols-3">
        <CertCard title="IBM" items={certifications.ibm} accent="cyan" />
        <CertCard title="Cisco" items={certifications.cisco} accent="violet" />
        <CertCard title="Events/Summits" items={certifications.events} accent="emerald" />
      </div>
    </section>
  );
}

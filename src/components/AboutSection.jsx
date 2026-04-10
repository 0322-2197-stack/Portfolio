import SectionHeading from "./SectionHeading";

export default function AboutSection({ text }) {
  return (
    <section id="about" className="rounded-3xl border border-[#B7CAC5] bg-[#F8FCFB]/95 p-7 backdrop-blur xl:p-10">
      <SectionHeading eyebrow="About" title="Who I Am" />
      <p className="max-w-3xl text-sm leading-relaxed text-[#4B5563] sm:text-base">{text}</p>
    </section>
  );
}

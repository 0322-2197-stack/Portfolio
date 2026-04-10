import SectionHeading from "./SectionHeading";

export default function FeaturedProjectSection({ project }) {
  return (
    <section id="featured-project" className="rounded-3xl border border-[#B7CAC5] bg-[#F8FCFB]/95 p-7 shadow-lg shadow-[#2A9D8F]/10 xl:p-10">
      <SectionHeading eyebrow="Featured Project" title={project.name} />

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="group rounded-2xl border border-[#B7CAC5] bg-white p-4 transition duration-300 hover:border-[#2A9D8F]/65">
          <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-[#8FB9B2] bg-[#F2F8F7] text-center text-sm text-[#6B7280]">
            Project Screenshot Placeholder
          </div>
        </div>

        <div className="rounded-2xl border border-[#B7CAC5] bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F6E64]">{project.context}</p>
          <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-[#E9C46A]/45 bg-[#E9C46A]/20 px-3 py-1 text-xs font-medium text-[#8A5A00]"
              >
                {tech}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="mt-6 rounded-xl bg-gradient-to-r from-[#2A9D8F] to-[#E76F51] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:from-[#21877A] hover:to-[#D46043]"
          >
            View Repository
          </button>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection({ name, headline, location, cta }) {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-[#B7CAC5] bg-[#F8FCFB]/95 p-7 shadow-xl shadow-[#2A9D8F]/10 backdrop-blur xl:p-12">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#2A9D8F]/14 blur-3xl" />
      <div className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-[#E76F51]/16 blur-3xl" />

      <div className="relative max-w-3xl">
        <p className="mb-4 inline-flex rounded-full border border-[#2A9D8F]/55 bg-[#2A9D8F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#1F6E64]">
          Portfolio 2026
        </p>
        <h1 className="text-4xl font-black leading-tight text-[#1F2937] sm:text-6xl">
          {name}
          <span className="mt-2 block bg-gradient-to-r from-[#2A9D8F] to-[#E76F51] bg-clip-text text-transparent">
            {headline}
          </span>
        </h1>
        <p className="mt-5 text-sm text-[#4B5563] sm:text-base">{location}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#featured-project"
            className="rounded-xl bg-[#2A9D8F] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#21877A]"
          >
            {cta.primary}
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-[#2A9D8F]/65 bg-transparent px-5 py-3 text-sm font-semibold text-[#1F6E64] transition duration-300 hover:-translate-y-1 hover:border-[#1F6E64] hover:bg-[#2A9D8F]/10"
          >
            {cta.secondary}
          </a>
        </div>
      </div>
    </header>
  );
}

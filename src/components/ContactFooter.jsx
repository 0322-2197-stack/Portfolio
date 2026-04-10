import SectionHeading from "./SectionHeading";

export default function ContactFooter({ contact }) {
  const githubLabel = contact.github?.replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, "") || "GitHub Profile";
  const linkedinLabel =
    contact.linkedinDisplayName ||
    contact.linkedin?.replace(/^https?:\/\/(www\.)?linkedin\.com\/in\//, "").replace(/\/$/, "") ||
    "LinkedIn Profile";

  return (
    <footer id="contact" className="rounded-3xl border border-[#B7CAC5] bg-[#F8FCFB]/95 p-7 backdrop-blur xl:p-10">
      <SectionHeading eyebrow="Contact" title="Let us Connect" />

      <div className="grid gap-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <a
          href={`tel:${contact.phone}`}
          className="rounded-xl border border-[#BFCFCA] bg-white p-4 text-[#1F2937] transition duration-300 hover:-translate-y-1 hover:border-[#2A9D8F]/70"
        >
          <p className="text-xs uppercase tracking-[0.12em] text-[#6B7280]">Phone</p>
          <p className="mt-2 text-base font-semibold">{contact.phone}</p>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="rounded-xl border border-[#BFCFCA] bg-white p-4 text-[#1F2937] transition duration-300 hover:-translate-y-1 hover:border-[#2A9D8F]/70"
        >
          <p className="text-xs uppercase tracking-[0.12em] text-[#6B7280]">Email</p>
          <p className="mt-2 break-all text-base font-semibold">{contact.email}</p>
        </a>

        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-[#BFCFCA] bg-white p-4 text-[#1F2937] transition duration-300 hover:-translate-y-1 hover:border-[#2A9D8F]/70"
        >
          <p className="text-xs uppercase tracking-[0.12em] text-[#6B7280]">GitHub</p>
          <p className="mt-2 break-all text-base font-semibold">{githubLabel}</p>
        </a>

        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-[#BFCFCA] bg-white p-4 text-[#1F2937] transition duration-300 hover:-translate-y-1 hover:border-[#2A9D8F]/70"
        >
          <p className="text-xs uppercase tracking-[0.12em] text-[#6B7280]">LinkedIn</p>
          <p className="mt-2 break-all text-base font-semibold">{linkedinLabel}</p>
        </a>
      </div>
    </footer>
  );
}

import AboutSection from "./components/AboutSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactFooter from "./components/ContactFooter";
import EducationSection from "./components/EducationSection";
import FeaturedProjectSection from "./components/FeaturedProjectSection";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import SideNavBar from "./components/SideNavBar";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-[#1F2937]">
      <div className="pointer-events-none fixed inset-0 opacity-60 [background:radial-gradient(circle_at_12%_12%,rgba(42,157,143,0.11),transparent_36%),radial-gradient(circle_at_84%_14%,rgba(233,196,106,0.12),transparent_34%),radial-gradient(circle_at_45%_88%,rgba(231,111,81,0.1),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:radial-gradient(#2a9d8f_0.55px,transparent_0.55px)] [background-size:20px_20px]" />

      <SideNavBar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
        <section id="hero">
          <HeroSection
            name={portfolioData.name}
            headline={portfolioData.headline}
            location={portfolioData.location}
            cta={portfolioData.cta}
          />
        </section>

        <section id="about">
          <AboutSection text={portfolioData.about} />
        </section>

        <section id="featured-project">
          <FeaturedProjectSection project={portfolioData.featuredProject} />
        </section>

        <section id="skills">
          <SkillsSection technical={portfolioData.skills.technical} soft={portfolioData.skills.soft} />
        </section>

        <section id="education">
          <EducationSection education={portfolioData.education} />
        </section>

        <section id="certifications">
          <CertificationsSection certifications={portfolioData.certifications} />
        </section>

        <section id="contact">
          <ContactFooter contact={portfolioData.contact} />
        </section>
      </main>
    </div>
  );
}

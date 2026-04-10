import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNavBar from "./components/SideNavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";
import EducationPage from "./pages/EducationPage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden bg-white text-[#1F2937]">
        <div className="pointer-events-none fixed inset-0 opacity-60 [background:radial-gradient(circle_at_12%_12%,rgba(42,157,143,0.11),transparent_36%),radial-gradient(circle_at_84%_14%,rgba(233,196,106,0.12),transparent_34%),radial-gradient(circle_at_45%_88%,rgba(231,111,81,0.1),transparent_32%)]" />
        <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:radial-gradient(#2a9d8f_0.55px,transparent_0.55px)] [background-size:20px_20px]" />

        <SideNavBar />

        <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-7 sm:px-8 lg:px-10 lg:py-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

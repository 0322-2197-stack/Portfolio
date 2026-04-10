import { useState } from "react";

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "featured-project", label: "Featured Project" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-5 top-5 z-50 flex flex-col gap-1.5 rounded-lg bg-[#2A9D8F] p-2 text-white lg:hidden"
        aria-label="Toggle navigation"
      >
        <span className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`h-0.5 w-6 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
        <span className={`h-0.5 w-6 bg-white transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 transform bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out lg:relative lg:h-auto lg:w-56 lg:translate-x-0 lg:transform-none lg:border-r lg:border-[#B7CAC5] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="sticky top-0 flex flex-col gap-2 p-8 lg:gap-1 lg:p-6">
          <h2 className="mb-6 text-2xl font-black text-[#1F2937] lg:mb-8">Menu</h2>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="rounded-lg px-4 py-3 text-left text-sm font-semibold text-[#4B5563] transition-all duration-200 hover:bg-[#2A9D8F]/10 hover:text-[#1F6E64] active:bg-[#2A9D8F]/20 lg:text-xs"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

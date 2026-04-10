import { useState } from "react";

export default function SideNavBar() {
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
    }
  };

  return (
    <>
      {/* Sidebar */}
      <aside className="sticky top-0 z-40 h-screen w-64 bg-white/95 backdrop-blur-md border-r border-[#B7CAC5] lg:w-56">
        <nav className="flex flex-col gap-2 overflow-y-auto p-8 lg:gap-1 lg:p-6">
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
    </>
  );
}

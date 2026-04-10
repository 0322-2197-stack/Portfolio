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
    <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#B7CAC5] shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-5 py-4 sm:px-8 lg:gap-4 lg:px-10">
        <h2 className="whitespace-nowrap text-lg font-black text-[#1F2937]">Menu</h2>
        <div className="flex gap-1 lg:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold text-[#4B5563] transition-all duration-200 hover:bg-[#2A9D8F]/10 hover:text-[#1F6E64] active:bg-[#2A9D8F]/20 lg:px-4 lg:py-2.5 lg:text-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

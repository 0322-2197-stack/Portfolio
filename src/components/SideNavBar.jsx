import { NavLink } from "react-router-dom";

export default function SideNavBar() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Featured Project" },
    { path: "/skills", label: "Skills" },
    { path: "/education", label: "Education" },
    { path: "/certifications", label: "Certifications" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#B7CAC5] shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-5 py-4 sm:px-8 lg:gap-4 lg:px-10">
        <h2 className="whitespace-nowrap text-lg font-black text-[#1F2937]">Menu</h2>
        <div className="flex gap-1 lg:gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 lg:px-4 lg:py-2.5 lg:text-sm ${
                  isActive
                    ? "bg-[#2A9D8F]/20 text-[#1F6E64]"
                    : "text-[#4B5563] hover:bg-[#2A9D8F]/10 hover:text-[#1F6E64] active:bg-[#2A9D8F]/20"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

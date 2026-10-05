import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { MagneticButton } from "../motion/MagneticButton";

const NAV_ITEMS = [
  { path: "/silicon-to-system", label: "Thesis" },
  { path: "/journey", label: "Journey" },
  { path: "/expertise", label: "Expertise" },
  { path: "/packaging", label: "Packaging" },
  { path: "/ecosystem", label: "Ecosystem" },
  { path: "/insights", label: "Insights" },
  { path: "/speaking", label: "Speaking" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 40);

      if (currentScrollY > 300) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          setHidden(true);
        } else if (lastScrollY - currentScrollY > 10) {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-[#07090D]/90 backdrop-blur-md border-b border-[#1F2633]/80 py-3.5 shadow-xl shadow-black/20"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FA8FF] rounded"
          >
            <span className="font-display font-bold tracking-tight text-lg text-[#FAFAF8] group-hover:text-[#6FA8FF] transition-colors whitespace-nowrap">
              SHARAT KAUL
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6FA8FF] group-hover:bg-[#8DBBFF] transition-colors" />
          </Link>

          {/* Zone 2: 4-7 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-mono tracking-wider uppercase text-[#A8B0BA]">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-[#FAFAF8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-[#6FA8FF] after:transition-all whitespace-nowrap ${
                    isActive
                      ? "text-[#FAFAF8] font-semibold after:w-full"
                      : "after:w-0 hover:after:w-full"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <Link to="/contact">
              <MagneticButton className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium tracking-wide text-[#FAFAF8] bg-[#151A22] hover:bg-[#1F2633] border border-[#1F2633] hover:border-[#6FA8FF]/40 rounded transition-all whitespace-nowrap shadow-sm">
                <span>Initiate Dialogue</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6FA8FF]" />
              </MagneticButton>
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#A8B0BA] hover:text-[#FAFAF8] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FA8FF] rounded"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

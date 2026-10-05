import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { MagneticButton } from "../motion/MagneticButton";

const NAV_ITEMS = [
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/customers", label: "Customers" },
  { path: "/experience", label: "Experience" },
  { path: "/insights", label: "Insights" },
  { path: "/speaking", label: "Speaking" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

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
            ? "bg-[#08090B]/90 backdrop-blur-md border-b border-[#242933]/80 py-3.5 shadow-xl shadow-black/30"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
          >
            <span className="font-display font-bold tracking-tight text-lg text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors whitespace-nowrap">
              RKS CONSULTING
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A46C] group-hover:bg-[#E1C58F] transition-colors" />
          </Link>

          {/* Zone 2: Clean consulting text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono tracking-wider uppercase text-[#969BA3]">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-[#FAFAF8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C9A46C] after:transition-all whitespace-nowrap ${
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

          {/* Zone 3: Executive Consultation CTA */}
          <div className="flex items-center gap-3">
            <Link to="/contact">
              <MagneticButton className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium tracking-wide text-[#FAFAF8] bg-[#1B1E24] hover:bg-[#242933] border border-[#242933] hover:border-[#C9A46C]/60 rounded-lg transition-all whitespace-nowrap shadow-sm group">
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C9A46C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#969BA3] hover:text-[#FAFAF8] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
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

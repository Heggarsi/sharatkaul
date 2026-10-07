import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { MagneticButton } from "../motion/MagneticButton";
import { SERVICES_DATA } from "../../data/services";
import { RKSLogo } from "../ui/RKSLogo";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll hiding/revealing
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      if (currentScrollY > 300) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          setHidden(true);
          setServicesDropdownOpen(false);
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

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled
            ? "bg-[#08090B]/90 backdrop-blur-md border-b border-[#242933]/80 py-2.5 shadow-xl shadow-black/30"
            : "bg-transparent border-b border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Standalone Large Brand Logo (Theme-Responsive with Transparent Background) */}
          <Link
            to="/"
            className="group flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded py-0.5"
            aria-label="RKS Consulting Home"
          >
            <RKSLogo
              className="h-10 sm:h-12 md:h-13 w-auto object-contain group-hover:opacity-95 transition-opacity"
              alt="RKS Consulting"
            />
          </Link>

          {/* Zone 2: Navigation links with Services dropdown */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono tracking-wider uppercase text-[#969BA3]">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-[#FAFAF8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C9A46C] after:transition-all whitespace-nowrap ${
                  isActive
                    ? "text-[#FAFAF8] font-semibold after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              About
            </NavLink>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 py-1 text-xs font-mono uppercase tracking-wider transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C9A46C] after:transition-all ${
                  isServicesActive
                    ? "text-[#FAFAF8] font-semibold after:w-full"
                    : "text-[#969BA3] hover:text-[#FAFAF8] after:w-0 hover:after:w-full"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#C9A46C] transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Minimal, Premium Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 rounded-2xl bg-[#111317] border border-[#242933] shadow-2xl shadow-black/80 py-2.5 z-50 animate-page-fade-in backdrop-blur-md">
                  {/* Clean Non-duplicate Category Header */}
                  <div className="px-4 py-2 border-b border-[#242933]/60 text-[10px] font-mono uppercase tracking-widest text-[#C9A46C]">
                    Advisory Practices
                  </div>

                  <div className="py-1">
                    {SERVICES_DATA.map((service) => (
                      <Link
                        key={service.id}
                        to={service.path}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-center justify-between px-4 py-2.5 hover:bg-[#1B1E24] text-xs font-sans transition-colors group ${
                          location.pathname === service.path
                            ? "text-[#C9A46C] bg-[#1B1E24]/60 font-medium"
                            : "text-[#FAFAF8]/90 hover:text-[#FAFAF8]"
                        }`}
                      >
                        <span className="group-hover:translate-x-1 transition-transform truncate pr-2">
                          {service.title}
                        </span>
                        <span className="text-[10px] font-mono text-[#66717D] group-hover:text-[#C9A46C] shrink-0">
                          {service.num}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Single Clean Overview Link */}
                  <div className="px-4 pt-2 pb-1 border-t border-[#242933]/60">
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-[11px] font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors flex items-center justify-between py-1"
                    >
                      <span>View All Services Overview →</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `hover:text-[#FAFAF8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C9A46C] after:transition-all whitespace-nowrap ${
                  isActive
                    ? "text-[#FAFAF8] font-semibold after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              Customers
            </NavLink>

            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `hover:text-[#FAFAF8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C9A46C] after:transition-all whitespace-nowrap ${
                  isActive
                    ? "text-[#FAFAF8] font-semibold after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              Experience
            </NavLink>

            <NavLink
              to="/insights"
              className={({ isActive }) =>
                `hover:text-[#FAFAF8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C9A46C] after:transition-all whitespace-nowrap ${
                  isActive
                    ? "text-[#FAFAF8] font-semibold after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              Insights
            </NavLink>

            <NavLink
              to="/speaking"
              className={({ isActive }) =>
                `hover:text-[#FAFAF8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C9A46C] after:transition-all whitespace-nowrap ${
                  isActive
                    ? "text-[#FAFAF8] font-semibold after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              Speaking
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-[#FAFAF8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#C9A46C] after:transition-all whitespace-nowrap ${
                  isActive
                    ? "text-[#FAFAF8] font-semibold after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Zone 3: Executive Consultation CTA and Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Toggle Button */}
            <ThemeToggle showLabel={false} />

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

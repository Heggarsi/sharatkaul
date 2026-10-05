import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, ArrowUpRight, Linkedin } from "lucide-react";
import { PROFILE } from "../../data/profile";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { path: "/about", label: "About", num: "01" },
  { path: "/services", label: "Services", num: "02" },
  { path: "/customers", label: "Customers & Partners", num: "03" },
  { path: "/experience", label: "Experience & Impact", num: "04" },
  { path: "/insights", label: "Insights & Perspectives", num: "05" },
  { path: "/speaking", label: "Speaking", num: "06" },
  { path: "/contact", label: "Contact", num: "07" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Close on Escape & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    if (firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="fixed inset-0 z-50 bg-[#08090B] flex flex-col justify-between p-6 sm:p-10 transition-opacity duration-300"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#242933] pb-6">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-2"
        >
          <span className="font-display font-bold text-lg tracking-tight text-[#FAFAF8]">
            RKS CONSULTING
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A46C]" />
        </Link>
        <button
          ref={firstFocusableRef}
          onClick={onClose}
          className="p-2 text-[#969BA3] hover:text-[#FAFAF8] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <nav className="my-auto py-6 overflow-y-auto max-h-[65vh]">
        <ul className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={onClose}
                className="w-full text-left py-2 group flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A46C] rounded"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-[#66717D] group-hover:text-[#C9A46C] transition-colors tabular-nums">
                    {link.num}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#C9A46C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Action Button */}
        <div className="mt-8 pt-6 border-t border-[#242933]">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-lg"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-[#08090B]" />
          </Link>
        </div>
      </nav>

      {/* Bottom Footer */}
      <div className="border-t border-[#242933] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs font-mono text-[#66717D]">
          TECHNOLOGY · STRATEGY · ECOSYSTEMS
        </div>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#969BA3] hover:text-[#FAFAF8] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#C9A46C]" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

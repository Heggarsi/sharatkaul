import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X, ArrowUpRight, Linkedin } from "lucide-react";
import { PROFILE } from "../../data/profile";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { path: "/", label: "Overview", num: "01" },
  { path: "/silicon-to-system", label: "Silicon to System", num: "02" },
  { path: "/journey", label: "Three Decades Journey", num: "03" },
  { path: "/expertise", label: "Expertise Constellation", num: "04" },
  { path: "/packaging", label: "Advanced Packaging", num: "05" },
  { path: "/ecosystem", label: "India Semiconductor", num: "06" },
  { path: "/insights", label: "Thought Leadership", num: "07" },
  { path: "/speaking", label: "Speaking & Summits", num: "08" },
  { path: "/contact", label: "Initiate Dialogue", num: "09" },
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
      className="fixed inset-0 z-50 bg-[#07090D] flex flex-col justify-between p-6 sm:p-10 transition-opacity duration-300"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#1F2633] pb-6">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-2"
        >
          <span className="font-display font-bold text-lg tracking-tight text-[#FAFAF8]">
            SHARAT KAUL
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#6FA8FF]" />
        </Link>
        <button
          ref={firstFocusableRef}
          onClick={onClose}
          className="p-2 text-[#A8B0BA] hover:text-[#FAFAF8] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FA8FF] rounded"
          aria-label="Close navigation menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <nav className="my-auto py-6 overflow-y-auto max-h-[70vh]">
        <ul className="flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={onClose}
                className="w-full text-left py-2 group flex items-center justify-between focus:outline-none focus-visible:ring-1 focus-visible:ring-[#6FA8FF] rounded"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-[#66717D] group-hover:text-[#6FA8FF] transition-colors tabular-nums">
                    {link.num}
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#FAFAF8] group-hover:text-[#6FA8FF] transition-colors">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#66717D] group-hover:text-[#6FA8FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Footer */}
      <div className="border-t border-[#1F2633] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs font-mono text-[#66717D]">
          SEMICONDUCTOR · ADVANCED PACKAGING · STRATEGY
        </div>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-[#A8B0BA] hover:text-[#FAFAF8] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#6FA8FF]" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

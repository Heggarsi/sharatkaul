import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, ShieldCheck } from "lucide-react";
import { PROFILE } from "../../data/profile";
import { RKSLogo } from "../ui/RKSLogo";
import footerLogo from "../../assets/images/regenerated_image_1791204533956.jpg";

export function Footer() {
  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/customers", label: "Customers" },
    { path: "/experience", label: "Experience" },
    { path: "/insights", label: "Insights" },
    { path: "/speaking", label: "Speaking" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-[#08090B] border-t border-[#242933] pt-20 pb-12 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Section with Name & Descriptor */}
        <div className="border-b border-[#242933] pb-14 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <Link to="/" className="inline-flex flex-col items-start gap-3 group mb-4" aria-label="RKS Consulting">
                <img
                  src={footerLogo}
                  alt="RKS"
                  className="h-14 sm:h-16 w-auto object-contain group-hover:scale-[1.02] transition-transform"
                />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3">
                  <span className="font-mono text-3xl sm:text-4xl font-black tracking-tight text-[#FAFAF8] leading-none">
                    RKS
                  </span>
                  <span className="text-sm sm:text-base tracking-[0.25em] text-[#C9A46C] font-mono uppercase font-bold leading-none">
                    CONSULTING
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Clean Consulting Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono uppercase tracking-wider text-[#969BA3]">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="hover:text-[#C9A46C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Verification & Legal Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs font-mono text-[#66717D]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C9A46C]" />
            <span>
              Executive advisory profile &amp; verified professional milestones.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#969BA3] hover:text-[#C9A46C] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn ↗</span>
            </a>
            <span>© 2026 RKS Consulting. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

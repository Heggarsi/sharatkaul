import { Link } from "react-router-dom";
import { Linkedin, ShieldCheck } from "lucide-react";
import { PROFILE } from "../../data/profile";

export function Footer() {
  return (
    <footer className="relative bg-[#07090D] border-t border-[#1F2633] pt-24 pb-12 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Huge Cinematic Name Display */}
        <div className="border-b border-[#1F2633] pb-16 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <div>
              <div className="text-xs font-mono text-[#6FA8FF] tracking-widest uppercase mb-4">
                SEMICONDUCTOR · ADVANCED PACKAGING · STRATEGY
              </div>
              <Link to="/" className="inline-block">
                <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-[#FAFAF8] leading-none select-none hover:text-[#6FA8FF] transition-colors">
                  SHARAT KAUL
                </h2>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm font-mono text-[#A8B0BA]">
            <Link to="/silicon-to-system" className="hover:text-[#6FA8FF] transition-colors">
              <span className="text-[#66717D]">01.</span> Silicon to System
            </Link>
            <Link to="/packaging" className="hover:text-[#6FA8FF] transition-colors">
              <span className="text-[#66717D]">02.</span> Advanced Packaging
            </Link>
            <Link to="/journey" className="hover:text-[#6FA8FF] transition-colors">
              <span className="text-[#66717D]">03.</span> Career Journey
            </Link>
            <Link to="/ecosystem" className="hover:text-[#6FA8FF] transition-colors">
              <span className="text-[#66717D]">04.</span> National Ecosystems
            </Link>
          </div>
        </div>

        {/* Verification & Legal Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-xs font-mono text-[#66717D]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#69A88A]" />
            <span>
              All professional milestones, affiliations &amp; degrees verified from public records and LinkedIn profile.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8B0BA] hover:text-[#6FA8FF] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>© {new Date().getFullYear()} Sharat Kaul. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

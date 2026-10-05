import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Linkedin } from "lucide-react";
import { PROFILE } from "../../data/profile";
import { ExecutiveConsultingVisual } from "../visuals/ExecutiveConsultingVisual";
import { MagneticButton } from "../motion/MagneticButton";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-14 px-6 lg:px-12 bg-[#08090B] overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[radial-gradient(circle,rgba(201,164,108,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Hero Split Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Executive Headline & Value Proposition */}
          <div className="lg:col-span-7">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#111317] border border-[#242933] text-[11px] font-mono tracking-widest uppercase text-[#C9A46C] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A46C]" />
              <span>SEMICONDUCTOR • TECHNOLOGY • STRATEGY</span>
            </div>

            {/* Massive Executive Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-8">
              SHAPING TECHNOLOGY. <br />
              BUILDING ECOSYSTEMS. <br />
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#C9A46C] via-[#E1C58F] to-[#FAFAF8]">
                CREATING IMPACT.
              </span>
            </h1>

            {/* Supporting Business Line */}
            <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl font-normal leading-relaxed mb-10">
              Strategic technology leadership across semiconductors, advanced manufacturing, business development and ecosystem growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/services">
                <MagneticButton className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-xl shadow-[#C9A46C]/10 whitespace-nowrap">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-[#08090B]" />
                </MagneticButton>
              </Link>

              <Link to="/contact">
                <button className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#111317] text-[#FAFAF8] border border-[#242933] hover:border-[#C9A46C]/50 hover:bg-[#1B1E24] font-mono text-xs font-medium tracking-wide transition-all whitespace-nowrap">
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C9A46C]" />
                </button>
              </Link>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-xl text-xs font-mono text-[#969BA3] hover:text-[#FAFAF8] transition-colors whitespace-nowrap"
              >
                <Linkedin className="w-4 h-4 text-[#C9A46C]" />
                <span>LinkedIn Profile ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Premium Executive Composition Visual */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <ExecutiveConsultingVisual />
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-[#242933]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#66717D]">
        <div className="flex items-center gap-3">
          <span className="text-[#FAFAF8]">SHARAT KAUL</span>
          <span>|</span>
          <span>STRATEGIC ADVISORY · ADVANCED PACKAGING · OSAT</span>
        </div>
        <div>GLOBAL PERSPECTIVE · US &amp; INDIA CORRIDOR</div>
      </div>
    </section>
  );
}

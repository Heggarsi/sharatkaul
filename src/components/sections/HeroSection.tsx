import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight, Linkedin } from "lucide-react";
import { PROFILE } from "../../data/profile";
import { WaferHeroVisual } from "../visuals/WaferHeroVisual";
import { MagneticButton } from "../motion/MagneticButton";

export function HeroSection() {
  const scrollToNext = () => {
    const el = document.getElementById("credibility");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 px-6 lg:px-12 bg-[#07090D] overflow-hidden"
    >
      {/* Background Silicon Wafer Visual & Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <WaferHeroVisual />
        <div className="absolute inset-0 technical-grid pointer-events-none opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090D]/40 via-transparent to-[#07090D] pointer-events-none" />
      </div>

      {/* Top Eyebrow / Coordinate Stamp */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1F2633]/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#6FA8FF] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#A8B0BA]">
              SEMICONDUCTOR · ADVANCED PACKAGING · STRATEGY
            </span>
          </div>
          <div className="text-[10px] font-mono text-[#66717D] tracking-wider">
            GRID: 28.6139° N, 77.2090° E // 32.7767° N, 96.7970° W
          </div>
        </div>
      </div>

      {/* Main Hero Center Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Subtle Monospace Kicker */}
          <div className="text-xs font-mono text-[#6FA8FF] tracking-widest uppercase mb-4">
            EXECUTIVE ARCHITECTURE &amp; ECOSYSTEMS
          </div>

          {/* Main Massive Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FAFAF8] leading-[1.04] mb-8">
            SHAPING WHAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAF8] via-[#A8B0BA] to-[#6FA8FF]">
              COMES AFTER
            </span>{" "}
            THE CHIP.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl md:text-2xl text-[#A8B0BA] max-w-2xl font-normal leading-relaxed mb-10">
            30+ years across semiconductor technology, strategy, manufacturing,
            and ecosystem development.
          </p>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/silicon-to-system">
              <MagneticButton className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#FAFAF8] text-[#07090D] font-mono text-xs font-semibold tracking-wide hover:bg-[#6FA8FF] transition-all shadow-lg shadow-white/5 whitespace-nowrap">
                <span>Explore the Journey</span>
                <ArrowRight className="w-4 h-4 text-[#07090D]" />
              </MagneticButton>
            </Link>

            <Link
              to="/insights"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#151A22] text-[#FAFAF8] border border-[#1F2633] hover:border-[#6FA8FF]/50 font-mono text-xs font-medium tracking-wide transition-all whitespace-nowrap"
            >
              <span>Read the Insights</span>
              <ArrowUpRight className="w-4 h-4 text-[#6FA8FF]" />
            </Link>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-xs font-mono text-[#A8B0BA] hover:text-[#FAFAF8] transition-colors whitespace-nowrap"
            >
              <Linkedin className="w-4 h-4 text-[#6FA8FF]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#66717D]" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Technical Status Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-[#1F2633]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#66717D]">
        <div className="flex items-center gap-4">
          <span className="text-[#A8B0BA]">SHARAT KAUL</span>
          <span className="text-[#1F2633]">|</span>
          <span>SILICON → CHIPLET → PACKAGE → SYSTEM</span>
        </div>
        <button
          onClick={scrollToNext}
          className="flex items-center gap-2 hover:text-[#6FA8FF] transition-colors focus:outline-none"
        >
          <span>SCROLL TO PROCEED</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#6FA8FF] animate-bounce" />
        </button>
      </div>
    </section>
  );
}

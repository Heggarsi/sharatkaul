import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroSection } from "../components/sections/HeroSection";
import { CredibilitySection } from "../components/sections/CredibilitySection";
import { FocusSection } from "../components/sections/FocusSection";
import { SiliconStackVisual } from "../components/visuals/SiliconStackVisual";
import { FeaturedIdeaSovereigntySection } from "../components/sections/FeaturedIdeaSovereigntySection";
import { PhilosophySection } from "../components/sections/PhilosophySection";
import { ContactSection } from "../components/sections/ContactSection";

export function HomePage() {
  return (
    <>
      {/* Frame 01: Hero */}
      <HeroSection />

      {/* Frame 02: 30+ Years Track Record */}
      <CredibilitySection />

      {/* Frame 03: Practice Pillars */}
      <FocusSection />

      {/* Signature Architecture Preview */}
      <section className="relative py-28 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
                  SIGNATURE ARCHITECTURE
                </span>
                <div className="h-[1px] w-12 bg-[#1F2633]" />
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08]">
                FROM SILICON <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FA8FF] to-[#D88A52]">
                  TO SYSTEMS.
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end gap-4">
              <p className="text-sm text-[#A8B0BA] max-w-md">
                Deconstructing monolithic scaling limits into modular chiplets, 2.5D interposers, and sovereign datacenter infrastructure.
              </p>
              <Link
                to="/silicon-to-system"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#151A22] border border-[#1F2633] hover:border-[#6FA8FF] text-xs font-mono text-[#FAFAF8] hover:text-[#6FA8FF] transition-all"
              >
                <span>Explore Full 5-Stage Thesis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <SiliconStackVisual />
        </div>
      </section>

      {/* Strategic Manifesto */}
      <FeaturedIdeaSovereigntySection />

      {/* Guiding Ethos */}
      <PhilosophySection />

      {/* Direct Contact Dialogue */}
      <ContactSection />
    </>
  );
}

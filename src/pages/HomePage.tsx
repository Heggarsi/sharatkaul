import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BookOpen, Calendar, MapPin, Mic } from "lucide-react";
import { HeroSection } from "../components/sections/HeroSection";
import { CredibilitySection } from "../components/sections/CredibilitySection";
import { IntroductionSection } from "../components/sections/IntroductionSection";
import { ValueChainSection } from "../components/sections/ValueChainSection";
import { WhySharatSection } from "../components/sections/WhySharatSection";
import { FinalCTASection } from "../components/sections/FinalCTASection";
import { SERVICES_DATA } from "../data/services";
import { CUSTOMER_CATEGORIES, PLACEHOLDER_LOGOS } from "../data/customers";
import { LogoPlaceholder } from "../components/ui/LogoPlaceholder";
import { INSIGHTS_DATA } from "../data/insights";
import { SPEAKING_ENGAGEMENTS } from "../data/speaking";

export function HomePage() {
  // 4 Primary Services for Homepage preview (Section 22)
  const previewServices = SERVICES_DATA.slice(0, 4);

  // 2 Primary Insights for Homepage preview
  const previewInsights = INSIGHTS_DATA.slice(0, 2);

  // 2 Speaking items for Homepage preview
  const previewSpeaking = SPEAKING_ENGAGEMENTS.slice(0, 2);

  return (
    <>
      {/* 01: HERO */}
      <HeroSection />

      {/* 02: CREDIBILITY */}
      <CredibilitySection />

      {/* 03: INTRODUCTION (WHO IS SHARAT KAUL?) */}
      <IntroductionSection />

      {/* 04: SERVICES (HOW I CAN HELP) */}
      <section className="py-24 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
                STRATEGIC SERVICES
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] leading-tight">
                HOW I CAN HELP
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previewServices.map((service) => (
              <div
                key={service.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#C9A46C] font-semibold">
                      {service.num}
                    </span>
                    <span className="text-[11px] font-mono text-[#66717D] uppercase tracking-wider">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-3 group-hover:text-[#C9A46C] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#242933] flex items-center justify-between">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] font-mono text-[#66717D]">ADVISORY PRACTICE</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#1B1E24] hover:bg-[#242933] border border-[#242933] hover:border-[#C9A46C]/40 text-xs font-mono text-[#FAFAF8] transition-all"
            >
              <span>Explore All 6 Advisory Offerings</span>
              <ArrowRight className="w-4 h-4 text-[#C9A46C]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 05: EXPERIENCE (EXPERIENCE THAT SPANS THE VALUE CHAIN) */}
      <ValueChainSection />

      {/* 06: CUSTOMERS / PARTNERS (WORKING ACROSS THE ECOSYSTEM) */}
      <section className="py-24 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
                CLIENT &amp; PARTNER SECTORS
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] leading-tight">
                WORKING ACROSS <br />
                <span className="font-serif italic font-normal text-[#C9A46C]">THE ECOSYSTEM.</span>
              </h2>
            </div>
            <Link
              to="/customers"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors"
            >
              <span>Explore Engagement Model</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Category Pills / Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {CUSTOMER_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-5 rounded-xl bg-[#111317] border border-[#242933] text-center flex flex-col justify-center items-center"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A46C] mb-3" />
                <span className="font-display text-xs sm:text-sm font-semibold text-[#FAFAF8]">
                  {cat.category}
                </span>
              </div>
            ))}
          </div>

          {/* Logo Wall Slots */}
          <div className="p-8 rounded-2xl bg-[#111317]/60 border border-[#242933]">
            <div className="text-xs font-mono text-[#66717D] uppercase tracking-wider mb-6 text-center">
              Partner &amp; Client Ecosystem Slots // Confidential Retainers
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PLACEHOLDER_LOGOS.map((logo) => (
                <LogoPlaceholder
                  key={logo.id}
                  name={logo.name}
                  slotLabel={logo.type}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 07: WHY SHARAT (COMPLEX PROBLEMS NEED CONNECTED THINKING) */}
      <WhySharatSection />

      {/* 08: INSIGHTS (PERSPECTIVES & THOUGHT LEADERSHIP) */}
      <section className="py-24 px-6 lg:px-12 bg-[#111317] border-y border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
                THOUGHT LEADERSHIP
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] leading-tight">
                PERSPECTIVES &amp; <br />
                <span className="font-serif italic font-normal text-[#C9A46C]">BRIEFINGS.</span>
              </h2>
            </div>
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors"
            >
              <span>View All Briefs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewInsights.map((article) => (
              <div
                key={article.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#08090B] border border-[#242933] hover:border-[#C9A46C]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#C9A46C]">
                      {article.category}
                    </span>
                    <span className="text-xs font-mono text-[#66717D]">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-4">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242933]">
                  <Link
                    to="/insights"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FAFAF8] hover:text-[#C9A46C] transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#C9A46C]" />
                    <span>Read Brief in Insights</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09: SPEAKING (IDEAS WORTH SHARING) */}
      <section className="py-24 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
                KEYNOTES &amp; SYMPOSIA
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#FAFAF8] leading-tight">
                IDEAS WORTH SHARING
              </h2>
            </div>
            <Link
              to="/speaking"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors"
            >
              <span>Explore Speaking Topics</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previewSpeaking.map((spk) => (
              <div
                key={spk.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C9A46C] mb-3">
                    <Mic className="w-3.5 h-3.5" />
                    <span>{spk.format}</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] mb-3">
                    {spk.topic}
                  </h3>

                  <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                    {spk.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242933] flex items-center justify-between text-xs font-mono text-[#66717D]">
                  <span className="text-[#FAFAF8]">{spk.event}</span>
                  <span>{spk.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10: PERSONAL PHILOSOPHY ("TECHNOLOGY IS ONLY HALF THE STORY.") */}
      <section className="py-24 px-6 lg:px-12 bg-[#111317] border-y border-[#242933] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1E24] border border-[#242933] text-[10px] font-mono text-[#C9A46C] uppercase tracking-wider mb-6">
            PERSONAL PHILOSOPHY
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAFAF8] leading-tight mb-8">
            "Technology is only <span className="italic text-[#C9A46C]">half</span> the story."
          </h2>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl mx-auto leading-relaxed mb-8">
            The other half is understanding people, markets, partnerships and the ecosystems required to turn technology into impact.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A46C] hover:text-[#E1C58F] transition-colors"
          >
            <span>Learn More About RKS Consulting</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 11: FINAL CTA */}
      <FinalCTASection />
    </>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, CheckCircle2, GraduationCap, Linkedin, ShieldCheck } from "lucide-react";
import { PROFILE } from "../data/profile";
import { EDUCATION_DATA } from "../data/education";
import { LEADERSHIP_ROLES } from "../data/organizations";
import { RECOGNITIONS } from "../data/awards";

export function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#08090B] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
              EXECUTIVE PROFILE
            </span>
            <div className="h-[1px] w-12 bg-[#242933]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-6">
            ABOUT <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">SHARAT KAUL.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl leading-relaxed">
            A technology and business leader working at the intersection of semiconductors, strategy and ecosystem development.
          </p>
        </div>
      </section>

      {/* Narrative Section: The Journey, Technology, Business, Ecosystem, Leadership */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Bio Highlights */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-[#111317] border border-[#242933]">
                <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-4">
                  Executive Overview
                </h3>
                <p className="text-sm text-[#969BA3] leading-relaxed mb-6">
                  With over three decades of engineering and leadership experience spanning Silicon Valley, Texas, and India, Sharat Kaul operates as a senior strategic advisor to foundry consortiums, government bodies, and technology ventures.
                </p>

                <div className="space-y-3 pt-4 border-t border-[#242933] text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-[#242933]/50">
                    <span className="text-[#66717D]">Role</span>
                    <span className="text-[#FAFAF8]">Strategic Technology Advisor</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#242933]/50">
                    <span className="text-[#66717D]">Focus</span>
                    <span className="text-[#C9A46C]">Semiconductor Strategy &amp; OSAT</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#242933]/50">
                    <span className="text-[#66717D]">Global Reach</span>
                    <span className="text-[#FAFAF8]">US &amp; India Corridors</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#66717D]">Stewardship</span>
                    <span className="text-[#FAFAF8]">Co-Chair iMAPS India</span>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1B1E24] hover:bg-[#242933] border border-[#242933] text-xs font-mono text-[#FAFAF8] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#C9A46C]" />
                    <span>View Verified LinkedIn Profile ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Pillars Storytelling */}
            <div className="lg:col-span-7 space-y-10">
              <div className="border-b border-[#242933] pb-8">
                <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-wider mb-2 block">
                  01 // THE JOURNEY
                </span>
                <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-3">
                  Evolution of a 30-Year Career
                </h3>
                <p className="text-sm sm:text-base text-[#969BA3] leading-relaxed">
                  Sharat’s career began in foundational silicon engineering at Texas Instruments, progressing through Electronic Design Automation (EDA) synthesis at Synopsys, ultra-low power programmable silicon marketing at QuickLogic, global high-tech practice scaling at Infinite Computer Solutions, clean-tech hardware commercialization at Solar-Apps Energy, and advanced packaging manufacturing at Krypton Solutions.
                </p>
              </div>

              <div className="border-b border-[#242933] pb-8">
                <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-wider mb-2 block">
                  02 // TECHNOLOGY
                </span>
                <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-3">
                  Semiconductor Physics to Modern OSAT
                </h3>
                <p className="text-sm sm:text-base text-[#969BA3] leading-relaxed">
                  Rooted in deep-submicron physics and digital signal processing, Sharat’s technical focus centers on the post-Moore transition: disaggregated chiplet architectures, 2.5D/3D interposers, through-silicon vias, high-density substrates, and the cleanroom operational discipline required for high-yield Outsourced Semiconductor Assembly and Test (OSAT).
                </p>
              </div>

              <div className="border-b border-[#242933] pb-8">
                <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-wider mb-2 block">
                  03 // BUSINESS
                </span>
                <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-3">
                  Strategy, Commercialization &amp; Venture Execution
                </h3>
                <p className="text-sm sm:text-base text-[#969BA3] leading-relaxed">
                  Holding an MBA from SMU Cox School of Business alongside an MS in Electrical Engineering from UT Dallas, Sharat couples technical rigor with commercial pragmatism. He has closed multi-million-dollar enterprise high-tech service contracts, launched hardware ventures, and guided executives on risk-adjusted capital allocation.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-wider mb-2 block">
                  04 // ECOSYSTEM &amp; LEADERSHIP
                </span>
                <h3 className="font-display text-2xl font-bold text-[#FAFAF8] mb-3">
                  Industry Relationships &amp; National Stewardship
                </h3>
                <p className="text-sm sm:text-base text-[#969BA3] leading-relaxed">
                  Recognized as an ecosystem builder, Sharat co-leads the International Microelectronics Assembly and Packaging Society (iMAPS) India chapter, serves on the Board of Semiconductor Technologies at Gujarat Technological University (GTU), contributes strategic volunteer perspective to the India Semiconductor Mission (ISM), and is an elevated Senior Member of IEEE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Personal Brand Editorial Statement */}
      <section className="py-24 px-6 lg:px-12 bg-[#111317] border-y border-[#242933] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1E24] border border-[#242933] text-[10px] font-mono text-[#C9A46C] uppercase tracking-wider mb-6">
            GUIDING ETHOS
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAFAF8] leading-tight mb-8">
            "Technology is only <span className="italic text-[#C9A46C]">half</span> the story."
          </h2>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl mx-auto leading-relaxed">
            The other half is understanding people, markets, partnerships, and the ecosystems required to turn technology into impact.
          </p>
        </div>
      </section>

      {/* Verified Education & Credentials */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              ACADEMIC &amp; PROFESSIONAL CREDENTIALS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Academic Foundations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                className="p-8 rounded-2xl bg-[#111317] border border-[#242933] flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-[#1B1E24] text-[#C9A46C] w-fit mb-6">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-[#C9A46C] uppercase mb-1">
                    {edu.discipline}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-[#969BA3] mb-4">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-[#66717D] leading-relaxed">
                    {edu.context}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#242933] text-[9px] font-mono text-[#66717D]">
                  VERIFIED CREDENTIAL
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] mb-2">
                Explore Detailed Career Milestones
              </h3>
              <p className="text-sm text-[#969BA3]">
                Review the complete executive chronological track record from Texas Instruments to strategic advisory.
              </p>
            </div>
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all whitespace-nowrap"
            >
              <span>View Experience Page</span>
              <ArrowRight className="w-4 h-4 text-[#08090B]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

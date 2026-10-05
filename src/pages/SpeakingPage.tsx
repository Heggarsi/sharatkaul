import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Mic, Presentation, Users, Volume2 } from "lucide-react";
import { SPEAKING_ENGAGEMENTS } from "../data/speaking";

export function SpeakingPage() {
  const speakingTopics = [
    {
      title: "Semiconductor Strategy & Sovereignty",
      audience: "Government Ministers, Foundry Executives & Institutional Investors",
      summary: "Strategic frameworks for capital deployment, fabless-to-OSAT integration, and sovereign supply-chain resilience."
    },
    {
      title: "Advanced Packaging & Post-Moore Architectures",
      audience: "System Architects, Hardware Engineering Leaders & Cleanroom Operators",
      summary: "Technical and commercial economics of 2.5D/3D interposers, modular chiplets, through-silicon vias, and high-density substrates."
    },
    {
      title: "India's Semiconductor Opportunity",
      audience: "Bilateral Trade Conclaves, Policy Task Forces & Industry Bodies",
      summary: "Actionable roadmaps to transition India's 20% global chip design talent into physical packaging and domestic manufacturing ownership."
    },
    {
      title: "Manufacturing & OSAT Scale-Up",
      audience: "EMS Providers, Factory Directors & Operations Leaders",
      summary: "Navigating cleanroom ramp-ups, yield defect reduction, known-good-die testing, and high-reliability automotive/defense qualification."
    },
    {
      title: "Workforce & Curricular Modernization",
      audience: "Academic Deans, University Boards & Engineering Faculties",
      summary: "Restructuring university engineering syllabi to supply thousands of cleanroom-ready engineers for emerging fab and OSAT facilities."
    },
    {
      title: "Technology Leadership & Cross-Border Deals",
      audience: "High-Tech CEOs, Founders & Deep-Tech Entrepreneurs",
      summary: "Lessons from 30 years scaling cross-border engineering teams across North America and India."
    }
  ];

  return (
    <div className="pt-28 pb-24">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#08090B] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
              PUBLIC ADDRESSES &amp; KEYNOTES
            </span>
            <div className="h-[1px] w-12 bg-[#242933]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-6">
            IDEAS WORTH <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">SHARING.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl leading-relaxed">
            Conversations on technology, leadership, semiconductors and India's evolving industrial ecosystem.
          </p>
        </div>
      </section>

      {/* Core Keynote Topics */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              REPERTOIRE OF KEYNOTES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Speaking &amp; Briefing Topics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingTopics.map((topic, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#111317] border border-[#242933] hover:border-[#C9A46C]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-2.5 rounded-lg bg-[#1B1E24] text-[#C9A46C] w-fit mb-4">
                    <Presentation className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#969BA3] leading-relaxed mb-6">
                    {topic.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242933]">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#C9A46C] mb-1">
                    Target Forum Audience:
                  </div>
                  <div className="text-xs font-sans text-[#FAFAF8]">
                    {topic.audience}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Historical Engagements */}
      <section className="py-20 px-6 lg:px-12 bg-[#111317] border-y border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              VERIFIED ENGAGEMENTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Selected Public Addresses &amp; Symposia
            </h2>
            <p className="text-sm text-[#969BA3] mt-2">
              Verified addresses, symposium chairmanships, and panel discussions on microelectronics and policy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPEAKING_ENGAGEMENTS.map((item, idx) => (
              <div
                key={item.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#08090B] border border-[#242933] hover:border-[#C9A46C]/60 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1B1E24] border border-[#242933] text-xs font-mono text-[#C9A46C]">
                      <Mic className="w-3.5 h-3.5" />
                      <span>{item.format}</span>
                    </div>
                    <span className="text-xs font-mono text-[#66717D] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] tracking-tight mb-4 leading-snug">
                    {item.topic}
                  </h3>

                  <p className="text-sm text-[#969BA3] leading-relaxed mb-8">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#242933] space-y-2">
                  <div className="text-sm font-mono text-[#FAFAF8] font-semibold">
                    {item.event}
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#66717D] gap-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A46C]" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A46C]" />
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#1B1E24]/60 border border-[#242933] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] mb-2">
                Inquire for Keynote or Panel Participation
              </h3>
              <p className="text-sm text-[#969BA3]">
                Available for industry summits, corporate strategy retreats, and academic leadership convocations.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all whitespace-nowrap"
            >
              <span>Submit Speaking Request</span>
              <ArrowRight className="w-4 h-4 text-[#08090B]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

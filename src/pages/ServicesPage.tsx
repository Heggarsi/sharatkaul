import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles } from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "../data/services";

export function ServicesPage() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <div className="pt-28 pb-24">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#08090B] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
              STRATEGIC OFFERINGS
            </span>
            <div className="h-[1px] w-12 bg-[#242933]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-6">
            CONSULTING &amp; ADVISORY <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">SERVICES.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl leading-relaxed">
            Turning complex semiconductor technology challenges into clear strategic direction, scalable manufacturing partnerships, and commercial growth.
          </p>
        </div>
      </section>

      {/* Services Grid with Progressive Disclosure */}
      <section className="py-20 px-6 lg:px-12 bg-[#08090B]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Service Selection Cards */}
            <div className="lg:col-span-6 space-y-4">
              {SERVICES_DATA.map((service) => {
                const isSelected = selectedServiceId === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`cursor-pointer p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative ${
                      isSelected
                        ? "bg-[#1B1E24] border-[#C9A46C] shadow-xl shadow-black/40 -translate-y-0.5"
                        : "bg-[#111317]/70 border-[#242933] hover:border-[#969BA3]/40 hover:bg-[#151A22]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#C9A46C] font-semibold">
                          {service.num}
                        </span>
                        <div className="h-2 w-[1px] bg-[#242933]" />
                        <span className="text-[11px] font-mono text-[#969BA3] uppercase tracking-wider">
                          {service.tagline}
                        </span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isSelected ? "text-[#C9A46C] translate-x-1" : "text-[#66717D]"
                        }`}
                      />
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#FAFAF8] mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#969BA3] leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Sticky Detail Inspector */}
            <div className="lg:col-span-6 lg:sticky lg:top-28 self-start">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#242933] shadow-2xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C9A46C] uppercase tracking-wider mb-2">
                  <span>SERVICE {activeService.num} SPECIFICATION</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FAFAF8] mb-4">
                  {activeService.title}
                </h3>

                <p className="text-sm sm:text-base text-[#969BA3] leading-relaxed mb-8">
                  {activeService.detailedDescription}
                </p>

                {/* Key Deliverables */}
                <div className="mb-8 p-6 rounded-xl bg-[#1B1E24]/60 border border-[#242933]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAFAF8] font-semibold mb-4">
                    Key Client Deliverables:
                  </h4>
                  <ul className="space-y-2.5">
                    {activeService.keyDeliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#969BA3]">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A46C] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Outcomes */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#C9A46C] font-semibold mb-3">
                    Target Business Outcomes:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.businessOutcomes.map((b, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-[#08090B] border border-[#242933] text-xs font-sans text-[#FAFAF8]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#C9A46C] text-[#08090B] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[#E1C58F] transition-all shadow-lg"
                >
                  <span>Inquire Regarding This Service</span>
                  <ArrowRight className="w-4 h-4 text-[#08090B]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Model Overview */}
      <section className="py-20 px-6 lg:px-12 bg-[#111317] border-t border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest mb-3">
              ENGAGEMENT MODEL
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#FAFAF8]">
              Flexible Advisory Formats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#08090B] border border-[#242933]">
              <div className="text-xs font-mono text-[#C9A46C] mb-2 uppercase">Retained Advisory</div>
              <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">Executive Retainer</h3>
              <p className="text-sm text-[#969BA3] leading-relaxed">
                Ongoing strategic counsel for C-suite leaders and boards navigating major technological shifts, foundry roadmaps, and M&amp;A due diligence.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#08090B] border border-[#242933]">
              <div className="text-xs font-mono text-[#C9A46C] mb-2 uppercase">Sprint Engagements</div>
              <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">Project Deep Dives</h3>
              <p className="text-sm text-[#969BA3] leading-relaxed">
                Focused 4 to 12-week strategic sprints: OSAT feasibility evaluations, cleanroom readiness audits, or cross-border market entry architectures.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#08090B] border border-[#242933]">
              <div className="text-xs font-mono text-[#C9A46C] mb-2 uppercase">Board &amp; Keynote</div>
              <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3">Board &amp; Industry Briefings</h3>
              <p className="text-sm text-[#969BA3] leading-relaxed">
                High-impact private executive sessions, corporate offsites, and keynote perspectives framing the macro semiconductor landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Mic } from "lucide-react";
import { SPEAKING_ENGAGEMENTS } from "../data/speaking";

export function SpeakingPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#07090D] border-b border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#D88A52] uppercase tracking-widest">
              PUBLIC ADDRESSES &amp; SYMPOSIA
            </span>
            <div className="h-[1px] w-12 bg-[#1F2633]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.06] mb-6">
            IDEAS WORTH TAKING <br />
            <span className="text-[#A8B0BA]">TO THE STAGE.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#A8B0BA] max-w-2xl leading-relaxed">
            Delivering clear strategic imperatives on semiconductor manufacturing sovereignty, packaging innovation, and workforce training directly to industry executives, academic leaders, and government stakeholders.
          </p>
        </div>
      </section>

      {/* Speaking Grid */}
      <section className="py-24 px-6 lg:px-12 bg-[#07090D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPEAKING_ENGAGEMENTS.map((item, idx) => (
              <div
                key={item.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#0D1117] border border-[#1F2633] hover:border-[#6FA8FF]/60 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#151A22] border border-[#1F2633] text-xs font-mono text-[#6FA8FF]">
                      <Mic className="w-3.5 h-3.5" />
                      <span>{item.format}</span>
                    </div>
                    <span className="text-xs font-mono text-[#66717D] tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#FAFAF8] tracking-tight mb-4 leading-snug">
                    {item.topic}
                  </h2>

                  <p className="text-sm sm:text-base text-[#A8B0BA] leading-relaxed mb-8">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1F2633] space-y-3">
                  <div className="text-sm font-mono text-[#FAFAF8] font-semibold">
                    {item.event}
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-xs font-mono text-[#66717D] gap-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#D88A52]" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#6FA8FF]" />
                      {item.year}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-[#66717D] pt-2">
                    {item.sourceNote}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#1F2633] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#66717D]">
              NEXT: EXECUTIVE DIALOGUE &amp; ADVISORY
            </span>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#6FA8FF] hover:text-[#FAFAF8] transition-colors"
            >
              <span>Initiate Executive Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

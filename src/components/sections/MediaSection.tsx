import { MEDIA_ITEMS } from "../../data/media";
import { MessageSquare, ArrowUpRight } from "lucide-react";

export function MediaSection() {
  return (
    <section id="media" className="relative py-28 px-6 lg:px-12 bg-[#0D1117] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            15 // INDUSTRY EXCHANGE
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        <div className="max-w-4xl mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08] mb-4">
            IN CONVERSATION.
          </h2>
          <p className="text-base text-[#A8B0BA] max-w-2xl leading-relaxed">
            Public symposium dialogues, policy consultations, and semiconductor panel analyses on manufacturing feasibility, workforce readiness, and chiplet integration.
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEDIA_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#07090D] border border-[#1F2633] hover:border-[#6FA8FF]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#D88A52] uppercase tracking-wider">
                    {item.format}
                  </span>
                  <span className="text-xs font-mono text-[#66717D]">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#FAFAF8] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A8B0BA] leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1F2633]">
                <div className="text-xs font-mono text-[#66717D] mb-3">
                  FORUM: {item.source}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#151A22] border border-[#1F2633] text-[10px] font-mono text-[#A8B0BA]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

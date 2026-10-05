import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ThoughtLeadershipSection } from "../components/sections/ThoughtLeadershipSection";
import { MediaSection } from "../components/sections/MediaSection";
import { PhilosophySection } from "../components/sections/PhilosophySection";

export function InsightsPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#07090D] border-b border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
              STRATEGIC DISCOURSE
            </span>
            <div className="h-[1px] w-12 bg-[#1F2633]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.06] mb-6">
            THINKING ABOUT <br />
            <span className="text-[#A8B0BA]">WHAT COMES NEXT.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#A8B0BA] max-w-2xl leading-relaxed">
            Analytical essays, technical briefs, and executive perspectives on post-Moore physics, heterogeneous integration economics, and sovereign semiconductor supply networks.
          </p>
        </div>
      </section>

      {/* Frame 12: Editorial Thought Leadership Grid & Modal Reader */}
      <ThoughtLeadershipSection />

      {/* Frame 15: Media & Public Discourse */}
      <MediaSection />

      {/* Frame 19: Guiding Philosophy */}
      <PhilosophySection />

      {/* Navigation Footer */}
      <section className="px-6 lg:px-12 py-12 bg-[#07090D] border-t border-[#1F2633]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#66717D]">
            NEXT: KEYNOTES &amp; STAGE ENGAGEMENTS
          </span>
          <Link
            to="/speaking"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#6FA8FF] hover:text-[#FAFAF8] transition-colors"
          >
            <span>View Speaking Engagements &amp; Symposia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { ContactSection } from "../components/sections/ContactSection";

export function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#07090D] border-b border-[#1F2633]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
              ADVISORY &amp; DIALOGUE
            </span>
            <div className="h-[1px] w-12 bg-[#1F2633]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.06] mb-6">
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FA8FF] via-[#FAFAF8] to-[#D88A52]">
              WHAT COMES NEXT.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#A8B0BA] max-w-2xl leading-relaxed">
            Direct executive consultations covering advanced packaging architectures, OSAT manufacturing ramp-ups, fabless-to-package strategies, national roadmaps, and microelectronics workforce pipelines.
          </p>
        </div>
      </section>

      {/* Frame 20: Contact Section */}
      <ContactSection />
    </div>
  );
}

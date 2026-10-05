import { ContactSection } from "../components/sections/ContactSection";

export function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Editorial Page Header */}
      <section className="px-6 lg:px-12 py-16 bg-[#08090B] border-b border-[#242933]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
              CONFIDENTIAL INQUIRY
            </span>
            <div className="h-[1px] w-12 bg-[#242933]" />
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAFAF8] leading-[1.05] mb-6">
            LET'S TALK ABOUT <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">WHAT COMES NEXT.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#969BA3] max-w-2xl leading-relaxed">
            Whether you are exploring a new technology opportunity, building a manufacturing capability, developing strategic partnerships or navigating a complex industry challenge, let's start a conversation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  );
}

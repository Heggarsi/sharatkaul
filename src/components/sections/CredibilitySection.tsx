import React from "react";

export function CredibilitySection() {
  const metrics = [
    {
      figure: "30+",
      sub: "Years",
      title: "Years of Experience",
      detail: "From foundational Texas Instruments DSPs to high-reliability OSAT manufacturing and cutting-edge 2.5D/3D heterogeneous packaging."
    },
    {
      figure: "GLOBAL",
      sub: "Corridor",
      title: "Industry Perspective",
      detail: "Leading cross-border technology practices, client delivery, and commercial alliances across Silicon Valley, Texas, and India."
    },
    {
      figure: "SEMICONDUCTOR",
      sub: "Depth",
      title: "Technology & Manufacturing",
      detail: "Deep physical and commercial grounding across EDA synthesis, ultra-low power silicon, and high-yield cleanroom packaging."
    },
    {
      figure: "STRATEGY",
      sub: "Advisory",
      title: "Business & Ecosystem",
      detail: "Advising enterprise leadership, institutional boards, and public policy makers on sovereign microelectronics capability."
    },
    {
      figure: "LEADERSHIP",
      sub: "Stewardship",
      title: "Industry Engagement",
      detail: "Co-Chair iMAPS India Chapter, GTU Board of Semiconductor Technologies, and active contributor to the India Semiconductor Mission."
    }
  ];

  return (
    <section id="credibility" className="relative py-24 px-6 lg:px-12 bg-[#08090B] border-t border-[#242933]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#C9A46C] uppercase tracking-widest">
            PROVEN TRACK RECORD
          </span>
          <div className="h-[1px] w-12 bg-[#242933]" />
        </div>

        {/* Section Heading */}
        <div className="mb-16 max-w-4xl">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08]">
            EXPERIENCE THAT CONNECTS <br />
            <span className="font-serif italic font-normal text-[#C9A46C]">TECHNOLOGY AND BUSINESS.</span>
          </h2>
        </div>

        {/* 5 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((item, idx) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between p-6 rounded-xl bg-[#111317]/60 border border-[#242933] hover:border-[#C9A46C]/60 hover:bg-[#1B1E24]/60 transition-all duration-300"
            >
              <div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#FAFAF8] group-hover:text-[#C9A46C] transition-colors">
                    {item.figure}
                  </span>
                  <span className="font-mono text-[10px] text-[#C9A46C] uppercase tracking-wider">
                    {item.sub}
                  </span>
                </div>

                <h3 className="font-display text-sm font-semibold text-[#FAFAF8] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#969BA3] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#242933] text-[9px] font-mono text-[#66717D]">
                INDEX 0{idx + 1} // VERIFIED RECORD
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

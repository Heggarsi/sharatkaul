export function CredibilitySection() {
  const metrics = [
    {
      figure: "30+",
      sub: "Years",
      title: "Semiconductor Technology",
      detail: "From Texas Instruments DSP design and Synopsys EDA synthesis to cutting-edge 2.5D/3D heterogeneous packaging."
    },
    {
      figure: "GLOBAL",
      sub: "Footprint",
      title: "Technology & Business",
      detail: "Leading cross-border operations spanning Silicon Valley, Texas microelectronics corridors, and India's tech hubs."
    },
    {
      figure: "ADVANCED",
      sub: "Architecture",
      title: "Packaging & OSAT Focus",
      detail: "Specialized focus on chiplets, silicon interposers, wafer-level assembly, and high-reliability OSAT ramp-ups."
    },
    {
      figure: "ECOSYSTEM",
      sub: "Alliances",
      title: "Industry · Academia · Policy",
      detail: "Co-Chair iMAPS India Chapter, GTU Board of Semiconductor Technologies, and active India Semiconductor Mission contributor."
    }
  ];

  return (
    <section id="credibility" className="relative py-28 px-6 lg:px-12 bg-[#07090D] border-t border-[#1F2633]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#6FA8FF] uppercase tracking-widest">
            02 // TRACK RECORD
          </span>
          <div className="h-[1px] w-12 bg-[#1F2633]" />
        </div>

        {/* Section Heading */}
        <div className="mb-20 max-w-4xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FAFAF8] leading-[1.08]">
            30+ YEARS. <br />
            <span className="text-[#A8B0BA]">ONE CONTINUOUS TECHNOLOGY JOURNEY.</span>
          </h2>
        </div>

        {/* 4 Editorial Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, idx) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between pt-6 border-t border-[#1F2633] hover:border-[#6FA8FF] transition-colors duration-300"
            >
              <div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#FAFAF8] group-hover:text-[#6FA8FF] transition-colors tabular-nums">
                    {item.figure}
                  </span>
                  <span className="font-mono text-xs text-[#D88A52] uppercase tracking-wider">
                    {item.sub}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-[#FAFAF8] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A8B0BA] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-8 text-[10px] font-mono text-[#66717D]">
                INDEX 0{idx + 1} // VERIFIED PUBLIC RECORD
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

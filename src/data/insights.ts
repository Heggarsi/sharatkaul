export interface InsightArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  keyTheses: string[];
  externalUrl?: string;
  editorialNote: string;
}

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: "packaging-is-architecture",
    title: "Packaging Is Becoming Architecture: The Post-Moore Frontier",
    category: "Advanced Packaging",
    readTime: "6 min read",
    summary: "As monolithic die scaling hits economic and thermal walls, performance scaling has shifted from gate length shrink to heterogeneous packaging, die-to-die interconnects, and package-level power delivery.",
    keyTheses: [
      "Monolithic cost per good die increases asymptotically beyond 3nm; chiplet partitioning restores economic linearity.",
      "Interconnect latency and bandwidth density are the new benchmarks of system performance.",
      "Thermal dissipation and mechanical warpage dictate packaging feasibility at 1000W compute envelopes."
    ],
    editorialNote: "Original editorial thesis synthesizing 30 years of semiconductor architecture transitions."
  },
  {
    id: "india-packaging-first",
    title: "Why India's Semiconductor Sovereignty Must Start with Advanced Packaging",
    category: "Semiconductor Strategy",
    readTime: "8 min read",
    summary: "While high-volume leading-edge wafer fabs require tens of billions in capex and decade-long gestation, advanced packaging (OSAT/ATMP) offers a faster, high-impact pathway to domestic technological sovereignty.",
    keyTheses: [
      "India already possesses ~20% of the world's semiconductor design engineers; connecting design directly to domestic packaging creates immediate value capture.",
      "OSAT facilities require significantly lower water and cleanroom capex than 3nm front-end fabs, enabling accelerated production readiness.",
      "Packaging sovereignty protects critical infrastructure, aerospace, and telecom supply chains against geopolitical shocks."
    ],
    editorialNote: "Strategic position paper reflecting discourse presented at national industry forums."
  },
  {
    id: "chiplet-standardization",
    title: "The Battle for the Die-to-Die Interconnect: UCIe, BoW, and Open Silicon",
    category: "Chiplets",
    readTime: "5 min read",
    summary: "For the chiplet revolution to achieve plug-and-play democratized silicon, industry standards like UCIe and Bunch of Wires (BoW) must balance electrical efficiency with multi-vendor testability.",
    keyTheses: [
      "Known Good Die (KGD) test methodologies require paradigm shifts in wafer-probe and test vectors.",
      "Proprietary interconnect interfaces risk creating vendor lock-in that undermines heterogeneous integration benefits.",
      "Open standards enable smaller fabless innovators to build bespoke accelerators without financing a full custom tapeout."
    ],
    editorialNote: "Technical commentary on heterogeneous integration standards and market dynamics."
  },
  {
    id: "glass-core-substrates",
    title: "Glass Core Substrates: Overcoming the Organic ABF Limit",
    category: "Substrate Technology",
    readTime: "7 min read",
    summary: "An in-depth analysis of why the semiconductor industry is pivoting toward glass core substrates for high-density AI accelerators requiring unprecedented planarity, dimensional stability, and high-frequency signaling.",
    keyTheses: [
      "Glass exhibits superior surface smoothness, enabling sub-micron line and space routing.",
      "Coefficient of Thermal Expansion (CTE) matched closely to silicon prevents destructive package warping at thermal extremes.",
      "Manufacturing hurdles: Through-Glass Via (TGV) formation and brittle mechanical handling in standard OSAT lines."
    ],
    editorialNote: "Advanced materials technical brief exploring next-generation packaging substrates."
  }
];

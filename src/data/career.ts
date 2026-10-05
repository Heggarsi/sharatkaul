export interface CareerMilestone {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  focus: string;
  description: string;
  tags: string[];
}

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    id: "consulting-present",
    period: "2023 — Present",
    role: "Strategic Semiconductor & Advanced Packaging Advisor",
    organization: "Independent Advisory / Ecosystem Initiatives",
    location: "Global / India",
    focus: "National Semiconductor Roadmap & OSAT Capability",
    description: "Advising public policy bodies, foundry consortiums, and technology startups on advanced packaging architectures, OSAT readiness, fabless-to-package pipelines, and supply-chain sovereignty.",
    tags: ["Advanced Packaging", "OSAT", "Chiplets", "Heterogeneous Integration", "Policy Advisory"]
  },
  {
    id: "krypton",
    period: "2021 — 2023",
    role: "Director / Advanced Semiconductor Solutions",
    organization: "Krypton Solutions",
    location: "Plano, TX & Global Operations",
    focus: "OSAT & Advanced Electronics Manufacturing",
    description: "Spearheaded advanced manufacturing initiatives, microelectronics packaging, multi-chip module integration, and high-reliability EMS/OSAT delivery for defense, aerospace, and computing verticals.",
    tags: ["OSAT", "Advanced Packaging", "EMS", "High-Reliability", "Defense & Aerospace"]
  },
  {
    id: "imaps-iosa",
    period: "2020 — Present",
    role: "Co-Chair & Board Member",
    organization: "iMAPS India / Semiconductor Industry Forums",
    location: "Bengaluru, India",
    focus: "Microelectronics Packaging Society & Standards",
    description: "Championed the revival and expansion of microelectronics packaging forums across South Asia, connecting academic researchers, test houses, and packaging vendors with global standards.",
    tags: ["iMAPS", "Ecosystem", "Packaging Standards", "Academia Collaboration"]
  },
  {
    id: "solar-apps",
    period: "2013 — 2020",
    role: "Founder & Chief Executive Officer",
    organization: "Solar-Apps Energy",
    location: "India & US",
    focus: "Renewable Technology & Hardware Commercialization",
    description: "Founded and built a solar clean-tech venture from inception through multi-megawatt commercial deployment. Led product engineering, power electronics integration, and sustainable energy delivery.",
    tags: ["Clean Tech", "Power Electronics", "Entrepreneurship", "Product Commercialization"]
  },
  {
    id: "infinite",
    period: "2008 — 2013",
    role: "Vice President — Technology & High-Tech Practice",
    organization: "Infinite Computer Solutions",
    location: "Dallas / Bengaluru",
    focus: "Telecom, Embedded Systems & Silicon Engineering",
    description: "Managed global technology practices across silicon design verification, embedded systems, and telecom hardware engineering. Scaled cross-border engineering teams across North America and India.",
    tags: ["Silicon Verification", "Embedded Systems", "Global Engineering", "Scale"]
  },
  {
    id: "quicklogic",
    period: "2004 — 2008",
    role: "Senior Director / Technical Marketing & Architecture",
    organization: "QuickLogic Corporation",
    location: "Sunnyvale, CA & Dallas, TX",
    focus: "Ultra-Low Power Programmable Logic & ASICs",
    description: "Directed architecture definition, programmable silicon marketing, and customer enablement for ultra-low power FPGA devices and customer-specific standard products (CSSPs).",
    tags: ["FPGA", "Ultra-Low Power", "Silicon Architecture", "Customer Enablement"]
  },
  {
    id: "synopsys",
    period: "1998 — 2004",
    role: "Senior Engineering Manager / Staff Applications Consultant",
    organization: "Synopsys",
    location: "Mountain View, CA & Dallas, TX",
    focus: "Electronic Design Automation (EDA) & Synthesis",
    description: "Guided top-tier semiconductor customers through synthesis, timing closure, design-for-test (DFT), and deep submicron physical design flows for complex SoC implementations.",
    tags: ["EDA", "Design Compiler", "SoC Design", "Timing Closure", "DFT"]
  },
  {
    id: "texas-instruments",
    period: "1993 — 1998",
    role: "Design Engineer / Semiconductor Technical Lead",
    organization: "Texas Instruments",
    location: "Dallas, TX & Bengaluru",
    focus: "Digital Signal Processors & ASIC Development",
    description: "Foundational years working on cutting-edge DSP core architectures, IC design methodologies, and silicon characterization at one of the world's most storied semiconductor pioneers.",
    tags: ["DSP Architecture", "Silicon Characterization", "CMOS", "Semiconductor Foundations"]
  }
];

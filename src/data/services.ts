export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  shortDescription: string;
  detailedDescription: string;
  keyDeliverables: string[];
  businessOutcomes: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "semiconductor-strategy",
    num: "01",
    title: "Semiconductor Strategy",
    tagline: "Navigating Industry Inflections & Capital Allocation",
    shortDescription: "Helping enterprise leadership, foundry consortiums, and technology investors identify high-return positions within the rapidly evolving global semiconductor landscape.",
    detailedDescription: "The global semiconductor paradigm is shifting from simple monolithic die shrink toward multi-faceted geopolitical, manufacturing, and architectural frontiers. We guide executive teams through comprehensive market opportunity sizing, technology direction evaluation, sovereign subsidy alignment, and competitive positioning.",
    keyDeliverables: [
      "Market opportunity & competitive benchmarking",
      "Technology roadmap & node prioritization",
      "Sovereign incentive & policy optimization",
      "Foundry & fabless commercialization models"
    ],
    businessOutcomes: [
      "De-risked multi-year capital deployment",
      "Clear positioning against global incumbents",
      "Accelerated board-level consensus"
    ]
  },
  {
    id: "advanced-packaging-osat",
    num: "02",
    title: "Advanced Packaging & OSAT Advisory",
    tagline: "Capturing Value in Post-Moore Heterogeneous Manufacturing",
    shortDescription: "Helping organizations evaluate advanced packaging architectures, OSAT partner qualification, chiplet standards, and assembly test readiness.",
    detailedDescription: "As monolithic silicon economics encounter thermal and yield boundaries, competitive performance advantage is won in advanced packaging. We advise companies on navigating 2.5D/3D interposers, through-silicon vias, high-density substrates, and building scalable relationships with world-class OSAT partners.",
    keyDeliverables: [
      "2.5D/3D & Chiplet feasibility assessments",
      "OSAT vendor selection & cleanroom readiness",
      "Known Good Die (KGD) test methodology audit",
      "Thermal, substrate & power integrity strategy"
    ],
    businessOutcomes: [
      "Up to 40% reduction in mask & tape-out risk",
      "Predictable volume packaging ramp-up",
      "Access to Tier-1 packaging supply chains"
    ]
  },
  {
    id: "tech-business-dev",
    num: "03",
    title: "Technology & Business Development",
    tagline: "Bridging Core Silicon to Market Demand & Strategic Partners",
    shortDescription: "Connecting deep engineering breakthroughs with commercial customer contracts, strategic alliances, and international market entry.",
    detailedDescription: "Groundbreaking microelectronics technology requires commercial validation to generate enterprise value. We help technology providers translate complex IP and hardware into customer-facing value propositions, structuring strategic alliances, and closing bilateral high-tech commercial corridors between Silicon Valley and India.",
    keyDeliverables: [
      "Go-to-market architecture & value proposition design",
      "Cross-border technology commercialization (US-India)",
      "Strategic partnership structuring & negotiations",
      "Customer pipeline qualification for deep-tech IP"
    ],
    businessOutcomes: [
      "Shortened enterprise sales & qualification cycles",
      "High-trust institutional partnerships",
      "Durable commercial revenue contracts"
    ]
  },
  {
    id: "ecosystem-development",
    num: "04",
    title: "Ecosystem Development & Public-Private Alliances",
    tagline: "Aligning Government, Industry, Academia & Capital",
    shortDescription: "Connecting disparate stakeholders—ministers, foundry executives, university deans, and venture investors—into resilient national technology ecosystems.",
    detailedDescription: "Semiconductor capability cannot thrive in isolation as a single factory. It requires a cohesive web of precision equipment, specialty chemicals, design talent, and regulatory frameworks. We advise industry bodies, government task forces (such as the India Semiconductor Mission), and universities on constructing self-sustaining microelectronics ecosystems.",
    keyDeliverables: [
      "Tri-sector stakeholder alignment (Govt-Industry-Academia)",
      "National packaging forum leadership (iMAPS chapter)",
      "Curricula modernization & workforce pipeline setup",
      "Ecosystem supply chain localization roadmaps"
    ],
    businessOutcomes: [
      "Institutional policy coherence & fast-track approvals",
      "Steady pipeline of cleanroom-ready engineers",
      "Sovereign microelectronics resilience"
    ]
  },
  {
    id: "manufacturing-scaleup",
    num: "05",
    title: "Manufacturing & Scale-Up Advisory",
    tagline: "From Silicon Prototype to High-Yield Volume Production",
    shortDescription: "Structuring the operational bridge from first lab prototype and engineering samples to robust, high-reliability commercial manufacturing.",
    detailedDescription: "Moving hardware from functional prototype to high-yield volume production is where deep-tech companies face their highest capital mortality. We bring hands-on operational leadership across cleanrooms, high-reliability defense/aerospace testing, and EMS delivery to guide organizations through yield ramp-ups and quality certification.",
    keyDeliverables: [
      "Operational readiness & cleanroom tool qualification",
      "Defect density mitigation & yield enhancement",
      "High-reliability compliance (Automotive, Defense, Industrial)",
      "Supplier capacity audit & contract governance"
    ],
    businessOutcomes: [
      "Drastic reduction in volume yield ramp delays",
      "Zero-defect delivery for mission-critical verticals",
      "Predictable unit economics at scale"
    ]
  },
  {
    id: "executive-advisory",
    num: "06",
    title: "Executive & Board Advisory",
    tagline: "Confidential Strategic Counsel for C-Suite & Boards",
    shortDescription: "Serving as trusted advisor to CEOs, founders, and investment committees navigating high-stakes technology transformations.",
    detailedDescription: "When multi-million-dollar technology investments or geopolitical supply-chain shifts threaten existing business models, executive leaders need confidential, non-partisan strategic perspective. We provide independent technical due diligence, executive coaching on hardware strategy, and guidance during key corporate governance junctures.",
    keyDeliverables: [
      "Confidential C-suite technology sparring",
      "M&A and investment technical due diligence",
      "Board briefings on semiconductor geopolitical trends",
      "Executive talent benchmarking for high-tech practices"
    ],
    businessOutcomes: [
      "Independent validation of high-capex bets",
      "Actionable foresight on supply-chain shifts",
      "Protection of shareholder value"
    ]
  }
];

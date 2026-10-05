export interface MediaItem {
  id: string;
  title: string;
  source: string;
  format: "Industry Analysis" | "Symposium Proceedings" | "Policy Brief" | "Executive Discourse";
  year: string;
  summary: string;
  topics: string[];
}

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "media-1",
    title: "Building the Indian OSAT Backbone: Infrastructure, Cleanrooms, and Workforce Realities",
    source: "Semiconductor Ecosystem Discussions",
    format: "Industry Analysis",
    year: "2023",
    summary: "Detailed review of the prerequisite operational capabilities for ATMP/OSAT ramp-ups: ultrapure gas supply, sub-micron thermal paste dispensing, automated optical inspection, and trained technician cohorts.",
    topics: ["OSAT", "Manufacturing", "Cleanrooms", "India Semiconductor Mission"]
  },
  {
    id: "media-2",
    title: "Why Heterogeneous Integration Changes the Economics of the Fabless Model",
    source: "Microelectronics Technical Briefing",
    format: "Executive Discourse",
    year: "2024",
    summary: "How startups and enterprise system architects can utilize chiplet-based heterogeneous integration to bring custom silicon to market at a fraction of leading-edge monolithic mask costs.",
    topics: ["Chiplets", "Fabless Economics", "Heterogeneous Integration", "ASIC"]
  },
  {
    id: "media-3",
    title: "Bridging Academia and Foundries: The Gujarat Semiconductor Curriculum Framework",
    source: "GTU Board of Semiconductor Technologies",
    format: "Policy Brief",
    year: "2023",
    summary: "Strategic outline on restructuring undergraduate electrical and materials engineering courses to align with hands-on semiconductor packaging, EDA automation, and cleanroom test protocols.",
    topics: ["Workforce Development", "Curricula", "University Partnerships", "Talent Pipeline"]
  }
];

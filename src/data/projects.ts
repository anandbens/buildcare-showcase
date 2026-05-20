import wpLiquid from "@/assets/projects/wp-liquid.jpg";
import wpCrystalline from "@/assets/projects/wp-crystalline.jpg";
import wpEpdm from "@/assets/projects/wp-epdm.jpg";
import wpPvc from "@/assets/projects/wp-pvc.jpg";
import wpTpo from "@/assets/projects/wp-tpo.jpg";
import wpGrouting from "@/assets/projects/wp-grouting.jpg";
import pu1 from "@/assets/projects/pu-1.jpg";
import pu2 from "@/assets/projects/pu-2.jpg";
import pu3 from "@/assets/projects/pu-3.jpg";
import epoxy1 from "@/assets/projects/epoxy-1.jpg";
import epoxy2 from "@/assets/projects/epoxy-2.jpg";
import epoxy3 from "@/assets/projects/epoxy-3.jpg";
import polish1 from "@/assets/projects/polish-1.jpg";
import polish2 from "@/assets/projects/polish-2.jpg";
import polish3 from "@/assets/projects/polish-3.jpg";
import polish4 from "@/assets/projects/polish-4.jpg";
import polish5 from "@/assets/projects/polish-5.jpg";
import polish6 from "@/assets/projects/polish-6.jpg";
import retro1 from "@/assets/projects/retro-1.jpg";
import retro2 from "@/assets/projects/retro-2.jpg";
import retro3 from "@/assets/projects/retro-3.jpg";
import retro4 from "@/assets/projects/retro-4.jpg";
import retro5 from "@/assets/projects/retro-5.jpg";
import grout1 from "@/assets/projects/grout-1.jpg";
import grout2 from "@/assets/projects/grout-2.jpg";
import grout3 from "@/assets/projects/grout-3.jpg";
import insul1 from "@/assets/projects/insul-1.jpg";
import insul2 from "@/assets/projects/insul-2.jpg";
import insul3 from "@/assets/projects/insul-3.jpg";

export type ProjectCategory =
  | "Waterproofing"
  | "Epoxy Flooring"
  | "PU Flooring"
  | "Concrete Polishing"
  | "Concrete Grinding & Polishing"
  | "Building Repair & Retrofitting"
  | "Grouting"
  | "Roof & Deck Insulation";

export type ProjectStatus = "completed" | "ongoing";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  image: string;
  location: string;
  client: string;
  year: string;
  area?: string;
  summary: string;
  scope: string[];
  gallery: string[];
}

export const PROJECTS: Project[] = [
  // Waterproofing
  {
    slug: "liquid-applied-waterproofing-rooftop",
    title: "Liquid Applied Waterproofing — Commercial Rooftop",
    category: "Waterproofing",
    status: "completed",
    image: wpLiquid,
    location: "Chennai, Tamil Nadu",
    client: "Confidential — Commercial Tower",
    year: "2023",
    area: "4,200 sq.m",
    summary:
      "Two-coat acrylic polymer modified cementitious waterproofing on a high-traffic rooftop, finished with a UV-stable PU topcoat for long-term durability.",
    scope: [
      "Substrate survey, profiling and crack mapping",
      "Surface preparation by mechanical grinding",
      "Primer + 2 coats elastomeric liquid membrane",
      "UV-stable PU protective topcoat",
      "Ponding test handover with 10-year guarantee",
    ],
    gallery: [wpLiquid, wpCrystalline, wpGrouting],
  },
  {
    slug: "crystalline-waterproofing-podium",
    title: "Crystalline Waterproofing — Podium Slab",
    category: "Waterproofing",
    status: "completed",
    image: wpCrystalline,
    location: "Coimbatore, Tamil Nadu",
    client: "Industrial Manufacturer",
    year: "2022",
    area: "6,800 sq.m",
    summary:
      "Integral crystalline admixture combined with surface-applied crystalline slurry to deliver self-healing waterproofing on a critical podium deck.",
    scope: [
      "Integral crystalline admixture dosing at batch plant",
      "Crystalline slurry on green concrete",
      "Construction joint treatment with hydrophilic strip",
      "Post-application water test",
    ],
    gallery: [wpCrystalline, wpLiquid, wpEpdm],
  },
  {
    slug: "epdm-membrane-roof",
    title: "EPDM Membrane Roofing — Large Format Warehouse",
    category: "Waterproofing",
    status: "completed",
    image: wpEpdm,
    location: "Hosur, Tamil Nadu",
    client: "Logistics Park",
    year: "2023",
    area: "12,000 sq.m",
    summary:
      "Single-ply EPDM membrane installation for a large-format distribution facility with mechanically fastened and adhered details around penetrations.",
    scope: [
      "Substrate cleaning & insulation layout",
      "1.5 mm EPDM single-ply membrane installation",
      "Hot-air welded seams & flashing detailing",
      "Quality audit + 15-year manufacturer warranty",
    ],
    gallery: [wpEpdm, wpTpo, wpPvc],
  },
  {
    slug: "pvc-membrane-terrace",
    title: "PVC Membrane Waterproofing — Hospital Terrace",
    category: "Waterproofing",
    status: "completed",
    image: wpPvc,
    location: "Chennai, Tamil Nadu",
    client: "Multi-Specialty Hospital",
    year: "2024",
    area: "3,500 sq.m",
    summary:
      "1.5 mm reinforced PVC membrane installed over insulated rooftop with full perimeter detailing for a working hospital campus.",
    scope: ["Vapour barrier + XPS insulation", "PVC single-ply membrane", "Detail flashings & rain-water outlet boots"],
    gallery: [wpPvc, wpEpdm, wpTpo],
  },
  {
    slug: "tpo-membrane-factory",
    title: "TPO Membrane System — Manufacturing Facility",
    category: "Waterproofing",
    status: "ongoing",
    image: wpTpo,
    location: "Sriperumbudur, Tamil Nadu",
    client: "Automotive Tier-1 Supplier",
    year: "2026",
    area: "18,500 sq.m",
    summary:
      "Ongoing TPO single-ply roofing system for an expansion block, designed for high reflectivity and energy savings.",
    scope: ["Mechanically fastened TPO membrane", "Hot-air welded seams", "Edge metal & parapet detailing"],
    gallery: [wpTpo, wpEpdm, wpPvc],
  },
  {
    slug: "pressure-grouting-basement",
    title: "Pressure Grouting — Basement Water Ingress",
    category: "Waterproofing",
    status: "completed",
    image: wpGrouting,
    location: "Chennai, Tamil Nadu",
    client: "IT Park Developer",
    year: "2022",
    summary:
      "Multi-stage PU + cement grouting program to seal active leakages in a 3-level basement raft and retaining walls.",
    scope: ["Leak mapping & port drilling", "PU resin injection grouting", "Cementitious consolidation grouting"],
    gallery: [wpGrouting, grout1, grout2],
  },

  // PU Flooring
  {
    slug: "pu-flooring-food-plant",
    title: "Heavy-Duty PU Cementitious Flooring — Food Processing",
    category: "PU Flooring",
    status: "completed",
    image: pu1,
    location: "Tirupur, Tamil Nadu",
    client: "Food & Beverage Plant",
    year: "2023",
    area: "5,400 sq.m",
    summary:
      "6 mm HACCP-compliant PU cementitious screed for wet processing areas with thermal-shock resistance up to 120°C.",
    scope: ["Diamond grinding & shotblasting", "6 mm PU cementitious screed", "Coved skirting + drain detailing"],
    gallery: [pu1, pu2, pu3],
  },
  {
    slug: "pu-flooring-dairy",
    title: "PU Self-Smoothing Flooring — Dairy Unit",
    category: "PU Flooring",
    status: "completed",
    image: pu2,
    location: "Erode, Tamil Nadu",
    client: "Dairy Processing",
    year: "2024",
    area: "2,800 sq.m",
    summary:
      "3 mm PU self-smoothing system over treated concrete for hygienic, chemical-resistant flooring in a dairy plant.",
    scope: ["Mechanical surface preparation", "PU primer + 3 mm self-smoothing PU", "Coved skirting"],
    gallery: [pu2, pu1, pu3],
  },
  {
    slug: "pu-flooring-pharma",
    title: "PU Flooring — Pharmaceutical Cleanroom",
    category: "PU Flooring",
    status: "ongoing",
    image: pu3,
    location: "Sriperumbudur, Tamil Nadu",
    client: "Pharma Manufacturer",
    year: "2026",
    area: "1,600 sq.m",
    summary:
      "PU resinous cleanroom flooring with anti-bacterial finish and seamless coving for ISO Class 7 environments.",
    scope: ["Shotblast prep", "PU primer + 2 mm PU self-smoothing", "Anti-bacterial topcoat"],
    gallery: [pu3, pu1, pu2],
  },

  // Epoxy Flooring
  {
    slug: "epoxy-flooring-warehouse",
    title: "Epoxy Self-Smoothing — Warehouse",
    category: "Epoxy Flooring",
    status: "completed",
    image: epoxy1,
    location: "Oragadam, Tamil Nadu",
    client: "3PL Warehousing",
    year: "2023",
    area: "9,200 sq.m",
    summary:
      "2 mm epoxy self-smoothing system designed for MHE traffic, with line-marking and aisle demarcation.",
    scope: ["Surface preparation", "Epoxy primer + 2 mm self-smoothing", "Line marking & aisle striping"],
    gallery: [epoxy1, epoxy2, epoxy3],
  },
  {
    slug: "epoxy-flooring-automotive",
    title: "Epoxy Coating System — Automotive Workshop",
    category: "Epoxy Flooring",
    status: "completed",
    image: epoxy2,
    location: "Chennai, Tamil Nadu",
    client: "Automotive OEM",
    year: "2022",
    area: "6,000 sq.m",
    summary:
      "300-micron solvent-free epoxy coating with high abrasion resistance for vehicle workshop bays.",
    scope: ["Diamond grinding", "Epoxy primer + 2 coats high-build epoxy", "Anti-slip aggregate broadcast"],
    gallery: [epoxy2, epoxy1, epoxy3],
  },
  {
    slug: "epoxy-flooring-electronics",
    title: "ESD Epoxy Flooring — Electronics Manufacturing",
    category: "Epoxy Flooring",
    status: "ongoing",
    image: epoxy3,
    location: "Sriperumbudur, Tamil Nadu",
    client: "Electronics Manufacturer",
    year: "2026",
    area: "4,000 sq.m",
    summary:
      "Anti-static (ESD) epoxy flooring with copper grid and conductive primer for sensitive electronics assembly lines.",
    scope: ["Conductive primer + copper earth strip", "ESD epoxy self-smoothing", "Resistance testing & certification"],
    gallery: [epoxy3, epoxy1, epoxy2],
  },

  // Concrete Polishing
  {
    slug: "concrete-polishing-showroom",
    title: "Mirror Polished Concrete — Retail Showroom",
    category: "Concrete Polishing",
    status: "completed",
    image: polish1,
    location: "Chennai, Tamil Nadu",
    client: "Retail Brand",
    year: "2024",
    area: "1,800 sq.m",
    summary:
      "8-step diamond polishing with densifier and lithium guard to deliver a mirror-gloss concrete finish.",
    scope: ["Diamond grinding 30/60/120 grit", "Lithium densifier", "Polishing 200 → 1500/3000 grit", "Stain guard"],
    gallery: [polish1, polish2, polish3],
  },
  {
    slug: "concrete-polishing-office",
    title: "Polished Concrete — Corporate Office",
    category: "Concrete Polishing",
    status: "completed",
    image: polish2,
    location: "Bengaluru, Karnataka",
    client: "IT Services",
    year: "2023",
    area: "2,400 sq.m",
    summary:
      "Honed concrete finish with satin sheen for a contemporary corporate office floor.",
    scope: ["Mechanical grinding", "Densifier", "Honed polish to 400 grit", "Penetrating sealer"],
    gallery: [polish2, polish1, polish4],
  },
  {
    slug: "concrete-polishing-museum",
    title: "High-Gloss Polished Concrete — Public Space",
    category: "Concrete Polishing",
    status: "ongoing",
    image: polish3,
    location: "Chennai, Tamil Nadu",
    client: "Cultural Institution",
    year: "2026",
    summary:
      "High-gloss polished concrete with custom edge details for a heritage-grade public interior.",
    scope: ["Surface profiling", "Multi-step diamond polishing", "Lithium densifier + guard"],
    gallery: [polish3, polish1, polish2],
  },

  // Concrete Grinding & Polishing
  {
    slug: "concrete-grinding-dye-polish-lounge",
    title: "Concrete Grinding, Dye & Polish — Hospitality",
    category: "Concrete Grinding & Polishing",
    status: "completed",
    image: polish4,
    location: "Chennai, Tamil Nadu",
    client: "Hospitality Group",
    year: "2024",
    area: "1,100 sq.m",
    summary:
      "Custom-colour dyed and polished concrete for a premium hospitality lounge, with seamless transitions across zones.",
    scope: ["Grinding to expose aggregate", "Acetone dye colouring", "Densifier", "Polishing to 1500 grit"],
    gallery: [polish4, polish5, polish6],
  },
  {
    slug: "concrete-grinding-polishing-mall",
    title: "Concrete Grinding & Polishing — Shopping Mall",
    category: "Concrete Grinding & Polishing",
    status: "completed",
    image: polish5,
    location: "Coimbatore, Tamil Nadu",
    client: "Shopping Mall",
    year: "2023",
    area: "7,500 sq.m",
    summary:
      "Full-coverage grind and polish across mall common areas with low-maintenance satin finish.",
    scope: ["Aggressive grinding", "Crack & joint repair", "Polishing 100 → 800 grit", "Stain guard"],
    gallery: [polish5, polish6, polish4],
  },
  {
    slug: "concrete-grinding-polishing-airport",
    title: "Concrete Grinding & Polishing — Transit Hub",
    category: "Concrete Grinding & Polishing",
    status: "ongoing",
    image: polish6,
    location: "Tamil Nadu",
    client: "Public Infrastructure",
    year: "2026",
    summary:
      "Phased concrete grinding & polishing program for a high-footfall transit hub during operational hours.",
    scope: ["Night-shift execution", "Diamond grinding & polishing", "Joint stabilisation"],
    gallery: [polish6, polish5, polish4],
  },

  // Building Repair & Retrofitting
  {
    slug: "retrofitting-beams-carbon-fiber",
    title: "Carbon Fibre Retrofitting of Beams",
    category: "Building Repair & Retrofitting",
    status: "completed",
    image: retro1,
    location: "Chennai, Tamil Nadu",
    client: "Commercial Building",
    year: "2022",
    summary:
      "Structural strengthening of beams using unidirectional CFRP laminates after detailed structural audit.",
    scope: ["Structural audit", "Epoxy injection of cracks", "CFRP laminate bonding", "Protective coating"],
    gallery: [retro1, retro2, retro3],
  },
  {
    slug: "repair-structural-column",
    title: "Structural Column Repair & Jacketing",
    category: "Building Repair & Retrofitting",
    status: "completed",
    image: retro2,
    location: "Tamil Nadu",
    client: "Industrial Plant",
    year: "2023",
    summary:
      "Distressed column repair using micro-concrete jacketing with corrosion inhibitor treatment for rebars.",
    scope: ["Concrete removal", "Rebar treatment", "Micro-concrete pour", "Protective coating"],
    gallery: [retro2, retro3, retro4],
  },
  {
    slug: "retrofitting-pt-beam",
    title: "Retrofitting of Post-Tensioned Beam",
    category: "Building Repair & Retrofitting",
    status: "completed",
    image: retro3,
    location: "Chennai, Tamil Nadu",
    client: "Mixed-Use Tower",
    year: "2023",
    summary:
      "Specialised retrofitting of PT beams using CFRP laminates with anchorage detailing.",
    scope: ["Strain monitoring", "Surface prep", "CFRP laminate + end anchors"],
    gallery: [retro3, retro1, retro4],
  },
  {
    slug: "retrofitting-beam-slab",
    title: "Retrofitting of Beam & Slab Assembly",
    category: "Building Repair & Retrofitting",
    status: "ongoing",
    image: retro4,
    location: "Tamil Nadu",
    client: "Public Institution",
    year: "2026",
    summary:
      "Combined beam-slab retrofitting program using CFRP sheets and laminates for upgraded load capacity.",
    scope: ["Load assessment", "CFRP sheets to slab soffit", "Laminates to beams"],
    gallery: [retro4, retro1, retro2],
  },
  {
    slug: "retrofitting-columns-multi",
    title: "Retrofitting of Multiple Columns",
    category: "Building Repair & Retrofitting",
    status: "completed",
    image: retro5,
    location: "Tamil Nadu",
    client: "Industrial Facility",
    year: "2022",
    summary:
      "Seismic upgrade of multiple columns using CFRP wrapping along with cementitious repair of cover concrete.",
    scope: ["Surface restoration", "CFRP wrapping", "UV-protective coating"],
    gallery: [retro5, retro1, retro2],
  },

  // Grouting
  {
    slug: "grouting-machine-foundation",
    title: "Machine Foundation & Bolt Pocket Grouting",
    category: "Grouting",
    status: "completed",
    image: grout1,
    location: "Tamil Nadu",
    client: "Heavy Industries",
    year: "2023",
    summary:
      "Non-shrink cementitious grouting for critical machine base plates with high early strength gain.",
    scope: ["Surface prep & shuttering", "Non-shrink grout pour", "Strength tests & handover"],
    gallery: [grout1, grout2, grout3],
  },
  {
    slug: "grouting-epoxy-injection",
    title: "Epoxy Resin Injection Grouting",
    category: "Grouting",
    status: "completed",
    image: grout2,
    location: "Chennai, Tamil Nadu",
    client: "Commercial Building",
    year: "2024",
    summary:
      "Low-viscosity epoxy resin injection to seal structural cracks and restore monolithic action.",
    scope: ["Crack mapping & port drilling", "Two-component epoxy injection", "Surface sealing"],
    gallery: [grout2, grout1, grout3],
  },
  {
    slug: "grouting-pu-injection",
    title: "Polyurethane Injection Grouting",
    category: "Grouting",
    status: "ongoing",
    image: grout3,
    location: "Tamil Nadu",
    client: "Infrastructure",
    year: "2026",
    summary:
      "PU resin injection grouting to seal active water leakages in below-grade structures.",
    scope: ["Leak mapping", "PU resin injection", "Verification testing"],
    gallery: [grout3, grout2, grout1],
  },

  // Insulation
  {
    slug: "insulation-roof-deck",
    title: "Roof Deck Insulation System",
    category: "Roof & Deck Insulation",
    status: "completed",
    image: insul1,
    location: "Tamil Nadu",
    client: "Industrial Facility",
    year: "2023",
    area: "8,000 sq.m",
    summary:
      "Energy-efficient roof deck insulation using rigid foam boards with full vapour barrier and fastening details.",
    scope: ["Vapour barrier", "Rigid foam board installation", "Mechanical fastening", "Membrane top layer"],
    gallery: [insul1, insul2, insul3],
  },
  {
    slug: "insulation-fastening",
    title: "Insulation Fastening — Steel Deck Roof",
    category: "Roof & Deck Insulation",
    status: "completed",
    image: insul2,
    location: "Tamil Nadu",
    client: "Warehouse",
    year: "2024",
    summary:
      "Specialised mechanical fastening for insulation boards over a profiled steel deck roof.",
    scope: ["Layout & marking", "Mechanical fastening with stress plates", "QA pull-out testing"],
    gallery: [insul2, insul1, insul3],
  },
  {
    slug: "insulation-moisture-barrier",
    title: "Moisture Barrier for Insulation",
    category: "Roof & Deck Insulation",
    status: "ongoing",
    image: insul3,
    location: "Tamil Nadu",
    client: "Cold Storage",
    year: "2026",
    summary:
      "High-performance moisture barrier system beneath an insulation build-up for a cold storage facility.",
    scope: ["Substrate prep", "Self-adhered vapour barrier", "Detail flashings"],
    gallery: [insul3, insul1, insul2],
  },
];

export const CATEGORIES: ProjectCategory[] = [
  "Concrete Polishing",
  "Concrete Grinding & Polishing",
  "Epoxy Flooring",
  "PU Flooring",
  "Waterproofing",
  "Building Repair & Retrofitting",
  "Grouting",
  "Roof & Deck Insulation",
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

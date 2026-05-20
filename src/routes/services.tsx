import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CATEGORIES, PROJECTS } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/components/EnquiryDialog";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Chennai Buildcare Technologies" },
      {
        name: "description",
        content:
          "Waterproofing, epoxy & PU flooring, concrete grinding & polishing, repair & retrofitting, grouting and acid-proof treatments — engineered systems with warranty.",
      },
      { property: "og:title", content: "Services — Chennai Buildcare Technologies" },
    ],
  }),
  component: ServicesPage,
});

const SERVICE_DETAILS: Record<string, { intro: string; bullets: string[] }> = {
  Waterproofing: {
    intro:
      "Comprehensive waterproofing solutions — integral, liquid-applied, membrane and pressure grouting — designed around structural demand and client specification.",
    bullets: [
      "Integral systems: workability, crystalline and hydrophobic admixtures",
      "Liquid applied: acrylic PMC, 1K/2K PU, PMMA, silane, polyurea",
      "EPDM, TPO, PVC and APP/SBS membrane systems",
      "Pressure grouting with cement, epoxy and PU resin",
    ],
  },
  "Epoxy Flooring": {
    intro:
      "Engineered epoxy systems from thin-film coatings to heavy-duty screeds — assessed by product, load, traffic and hygiene requirements.",
    bullets: [
      "Coatings (< 500 microns)",
      "Self-smoothing (1–2 mm)",
      "Screed (≥ 3 mm)",
      "ESD (anti-static) flooring with copper grid",
    ],
  },
  "PU Flooring": {
    intro:
      "Polyurethane resinous systems for chemical, thermal and impact resistance — including HACCP-compliant PU cementitious flooring for food and pharma.",
    bullets: [
      "PU coatings (< 500 microns)",
      "Self-smoothing (2–3 mm)",
      "Heavy-duty PU cementitious (4–12 mm)",
      "Methyl Methacrylate Acrylic (MMA)",
    ],
  },
  "Concrete Polishing": {
    intro:
      "Multi-step diamond polishing with densifiers and guards delivering durable, dust-free, low-maintenance concrete finishes.",
    bullets: [
      "8-step diamond polishing",
      "Lithium silicate densifiers",
      "Stain guard topcoats",
      "Honed to high-gloss finishes",
    ],
  },
  "Concrete Grinding & Polishing": {
    intro:
      "Aggressive grinding followed by polishing — ideal for large-format commercial and industrial floors needing refurbishment.",
    bullets: [
      "Surface profiling and grinding",
      "Crack and joint repair",
      "Densification and polishing",
      "Optional acetone dye colouring",
    ],
  },
  "Building Repair & Retrofitting": {
    intro:
      "Structural strengthening using CFRP, epoxy systems and micro-concrete — preceded by detailed structural audits.",
    bullets: [
      "Carbon fibre sheets & laminates (uni & bidirectional)",
      "Epoxy injection, anchoring and repair mortars",
      "Pourable and thixotropic micro-concrete",
      "Quick-setting, high-early-strength and heat-resistant grouts",
    ],
  },
  Grouting: {
    intro:
      "Grouting solutions for repair, strengthening and machine foundations — from machine base plates to crane rails and stanchion columns.",
    bullets: [
      "Epoxy resin grouting",
      "Non-shrink cementitious grouting",
      "Polyurethane grouting",
      "Polyester anchoring systems",
    ],
  },
  "Roof & Deck Insulation": {
    intro:
      "Energy-saving roof and steel deck insulation systems aligned with green building goals.",
    bullets: [
      "Blanket insulation (fiberglass, mineral wool)",
      "Rigid foam boards (XPS, polyiso, PUR)",
      "Sprayed and foamed-in-place systems",
      "Moisture barriers and fastening details",
    ],
  },
};

function ServicesPage() {
  const { open } = useEnquiry();
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Engineered systems for every concrete challenge."
        subtitle="From the foundation to the roof — and every floor in between — we deliver warrantied construction chemical solutions."
      />

      <section className="py-16 bg-secondary/30 border-b">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <a
                key={c}
                href={`#${slugify(c)}`}
                className="rounded-full border bg-card px-4 py-2 text-sm font-medium hover:bg-brand hover:text-brand-foreground transition"
              >
                {c}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="container-x py-16 space-y-20">
        {CATEGORIES.map((c, i) => {
          const detail = SERVICE_DETAILS[c];
          const proj = PROJECTS.find((p) => p.category === c);
          const reverse = i % 2 === 1;
          return (
            <section key={c} id={slugify(c)} className="scroll-mt-24">
              <div className={`grid lg:grid-cols-2 gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="relative overflow-hidden rounded-2xl shadow-elegant aspect-[4/3]">
                  {proj && (
                    <img src={proj.image} alt={c} className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
                  )}
                  <div className="absolute top-4 left-4 rounded-full bg-brand text-brand-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand">Service</p>
                  <h2 className="mt-2 text-3xl md:text-4xl font-bold">{c}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{detail.intro}</p>
                  <ul className="mt-5 space-y-2">
                    {detail.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm">
                        <Check className="h-5 w-5 text-brand shrink-0" /> <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button variant="brand" onClick={() => open({ service: c })}>
                      Enquire about {c.split(" ")[0]}
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/projects" search={{}}>
                        View {c} projects <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

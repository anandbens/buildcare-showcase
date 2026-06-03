import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { CATEGORIES, PROJECTS } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/components/EnquiryDialog";
import gyprocPlasteringImg from "@/assets/projects/gyproc-plastering.jpg";
import tilesEpoxyImg from "@/assets/projects/tiles-epoxy.jpg";
import gyprocCeilingImg from "@/assets/projects/gyproc-ceiling.jpg";
import partitionWallsImg from "@/assets/projects/partition-walls.jpg";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Droplets,
  Layers,
  Shield,
  Gem,
  Hammer,
  Wrench,
  Construction,
  Thermometer,
  Layers3,
  Paintbrush,
  Grid3x3,
  PanelTop,
  Columns3,
} from "lucide-react";

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
  "Polyurethane Flooring Food Industry": {
    intro:
      "HACCP-compliant polyurethane cementitious flooring engineered for food & beverage processing plants — delivering thermal-shock, chemical and impact resistance with a seamless, hygienic, anti-bacterial finish that stands up to daily wash-down and steam cleaning.",
    bullets: [
      "Heavy-duty PU cementitious screed (4–12 mm) for wet processing areas",
      "Withstands thermal shock up to 120°C — ideal for steam & hot water wash-down",
      "Seamless coved skirting & drain detailing for hygienic, easy-to-clean surfaces",
      "Anti-bacterial, anti-slip and chemical-resistant finish (acids, fats, sugars, oils)",
      "HACCP, FSSAI and food-safety compliant systems",
      "Suitable for dairies, bakeries, breweries, meat & seafood processing, cold storage",
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
  "Di-Electric Flooring": {
    intro:
      "High-voltage insulating di-electric flooring systems for substations, panel rooms and electrical infrastructure — engineered for operator safety and code compliance.",
    bullets: [
      "Insulating epoxy primer & topcoat",
      "Up to 65 kV dielectric strength systems",
      "Anti-static & non-conductive finishes",
      "Dielectric testing & certification",
    ],
  },
  "Concrete Densification": {
    intro:
      "Concrete grinding and densification delivering a durable, matt-finish floor through a controlled 3-step process.",
    bullets: [
      "Surface cleaning",
      "Surface poured with lithium silicate densifier",
      "Grinding the surface with floor hardener for matt finish",
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
  "Gyproc Plastering": {
    intro:
      "Premium Gyproc plastering solutions for smooth, durable, and crack-resistant wall finishes across residential, commercial, and industrial projects.",
    bullets: [
      "Smooth wall finishing systems",
      "Crack-resistant plaster applications",
      "Lightweight surface solutions",
      "Fast-track interior finishing systems",
    ],
  },
  "Tiles Epoxy": {
    intro:
      "High-performance tile epoxy solutions designed for superior bonding, waterproofing, chemical resistance, and long-lasting floor durability.",
    bullets: [
      "Epoxy tile joint filling",
      "Chemical-resistant epoxy systems",
      "Waterproof tile applications",
      "Industrial and commercial flooring solutions",
    ],
  },
  "Gyproc Ceiling": {
    intro:
      "Modern Gyproc ceiling systems engineered for elegant interiors, acoustic comfort, and seamless architectural finishes.",
    bullets: [
      "False ceiling installations",
      "Acoustic ceiling systems",
      "Moisture-resistant ceiling panels",
      "Decorative and designer ceiling solutions",
    ],
  },
  "Partition Walls & Boards": {
    intro:
      "Lightweight partition wall and board systems for efficient space division, modern interiors, and flexible commercial layouts.",
    bullets: [
      "Gypsum partition wall systems",
      "Drywall board installations",
      "Acoustic partition solutions",
      "Modular interior wall systems",
    ],
  },
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Waterproofing: Droplets,
  "Polyurethane Flooring Food Industry": Layers,
  "PU Flooring": Shield,
  "Di-Electric Flooring": Sparkles,
  "Concrete Densification": Gem,
  "Concrete Grinding & Polishing": Hammer,
  "Building Repair & Retrofitting": Construction,
  Grouting: Wrench,
  "Roof & Deck Insulation": Thermometer,
  "Gyproc Plastering": Paintbrush,
  "Tiles Epoxy": Grid3x3,
  "Gyproc Ceiling": PanelTop,
  "Partition Walls & Boards": Columns3,
};

const SERVICE_FALLBACK_IMAGES: Record<string, string> = {
  "Gyproc Plastering": gyprocPlasteringImg,
  "Tiles Epoxy": tilesEpoxyImg,
  "Gyproc Ceiling": gyprocCeilingImg,
  "Partition Walls & Boards": partitionWallsImg,
};

function ServicesPage() {
  const { open } = useEnquiry();
  const [active, setActive] = useState<string>(CATEGORIES[0]);
  const heroImage = PROJECTS[0]?.image;

  return (
    <>
      <Helmet><title>{"Services — Chennai Buildcare Technologies"}</title><meta name="description" content={"Waterproofing, Polyurethane Flooring Food Industry, concrete grinding & polishing, repair & retrofitting, grouting and acid-proof treatments — engineered systems with warranty."} /><meta property="og:title" content={"Services — Chennai Buildcare Technologies"} /></Helmet>
      
      {/* === HERO === */}
      <section className="relative isolate overflow-hidden bg-[#0b1220] text-white">
        <div className="absolute inset-0">
          {heroImage && (
            <img
              src={heroImage}
              alt=""
              className="h-full w-full object-cover opacity-30 animate-kenburns"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0b1220]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent" />
        </div>

        {/* industrial grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ambient glows */}
        <div className="absolute -top-32 -right-20 h-[520px] w-[520px] rounded-full bg-brand/30 blur-[160px] animate-float-pulse" />
        <div className="absolute -bottom-20 -left-20 h-[420px] w-[420px] rounded-full bg-brand/15 blur-[140px]" />

        <div className="relative container-x py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand ring-1 ring-white/15 fade-in-up">
              <Sparkles className="h-3.5 w-3.5" /> Capabilities
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance fade-in-up">
              Engineered systems for every{" "}
              <span className="bg-gradient-to-r from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">
                concrete challenge
              </span>
              .
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 fade-in-up">
              From the foundation to the roof — and every floor in between — we deliver warrantied
              construction chemical solutions backed by qualified civil engineers.
            </p>

            <div className="mt-8 flex items-center gap-8 fade-in-up">
              <Stat value={`${CATEGORIES.length}`} label="Service Lines" />
              <Stat value="24h" label="Response" />
              <Stat value="10+ yrs" label="Warranty" />
            </div>
          </div>
        </div>
      </section>

      {/* === STICKY FILTER === */}
      <section className="sticky top-20 z-30 border-b border-slate-200/60 bg-white/70 backdrop-blur-2xl shadow-[0_4px_20px_-12px_rgba(15,23,42,0.15)]">
        <div className="container-x py-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500">
            <Layers3 className="h-3.5 w-3.5 text-brand" /> Jump to service
          </span>
          <div className="relative flex-1 min-w-[240px] max-w-md">
            <select
              value={active}
              onChange={(e) => {
                const value = e.target.value;
                setActive(value);
                const el = document.getElementById(slugify(value));
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="w-full appearance-none rounded-full border border-slate-200 bg-white/90 backdrop-blur px-5 py-3 pr-12 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-transparent transition-all hover:border-brand hover:text-brand focus:outline-none focus:border-brand focus:ring-brand/30"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ArrowRight className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 rotate-90 text-brand" />
          </div>
        </div>
      </section>


      {/* === BODY === */}
      <div className="relative bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] overflow-hidden">
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,1) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,1) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-40 -left-32 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-[#0f172a]/5 blur-[140px] pointer-events-none" />

        <div className="relative container-x py-20 lg:py-28 space-y-28 lg:space-y-32">
          {CATEGORIES.map((c, i) => {
            const detail = SERVICE_DETAILS[c];
            const proj = PROJECTS.find((p) => p.category === c);
            const image = proj?.image ?? SERVICE_FALLBACK_IMAGES[c];
            const reverse = i % 2 === 1;
            const Icon = SERVICE_ICONS[c] ?? Layers;
            return (
              <section key={c} id={slugify(c)} className="scroll-mt-32 fade-in-up">
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div className="relative group">
                    {/* layered background card */}
                    <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-brand/25 to-transparent blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                    <div
                      className={`absolute -bottom-6 ${
                        reverse ? "-left-6" : "-right-6"
                      } hidden md:block h-full w-full rounded-[28px] bg-gradient-to-br from-slate-200/70 to-slate-100/40 -z-10`}
                    />
                    <div className="relative overflow-hidden rounded-[28px] aspect-[4/3] shadow-[0_30px_60px_-24px_rgba(15,23,42,0.35)] ring-1 ring-slate-200/60">
                      {image && (
                        <img
                          src={image}
                          alt={c}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.1]"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-[#0f172a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* number badge (glass) */}
                      <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-2xl bg-white/15 backdrop-blur-xl px-4 py-2.5 text-white ring-1 ring-white/25 shadow-lg">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                          Service
                        </span>
                        <span className="text-lg font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* icon chip */}
                      <div className="absolute bottom-5 right-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#f59e3a] to-[#e07016] text-white flex items-center justify-center shadow-brand ring-2 ring-white/30">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div>
                    <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
                      <span className="h-px w-10 bg-gradient-to-r from-brand to-brand/0" />
                      Capability · {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f172a]">
                      {c}
                    </h2>
                    <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-brand to-transparent" />
                    <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
                      {detail.intro}
                    </p>

                    <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {detail.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-3 items-start text-sm text-slate-700 group/item"
                        >
                          <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-brand/20 to-brand/5 ring-1 ring-brand/30 flex items-center justify-center group-hover/item:from-brand group-hover/item:to-brand/80 group-hover/item:ring-brand transition-all duration-300">
                            <Check className="h-3 w-3 text-brand group-hover/item:text-white transition-colors" />
                          </span>
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-9 flex flex-wrap gap-3">
                      <button
                        onClick={() => open({ service: c })}
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#f59e3a] to-[#e07016] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider shadow-[0_12px_28px_-10px_rgba(234,140,46,0.65)] hover:shadow-[0_18px_36px_-10px_rgba(234,140,46,0.8)] hover:-translate-y-0.5 transition-all duration-300 ring-1 ring-white/20"
                      >
                        Enquire about {c.split(" ")[0]}
                        <ArrowUpRight className="h-4 w-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                      </button>
                      <Link
                        to={`/projects?category=${encodeURIComponent(c)}`}
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-xl text-slate-800 px-6 py-3 text-sm font-bold uppercase tracking-wider border border-slate-200 hover:border-brand hover:text-brand hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                      >
                        View Projects
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* === CTA === */}
        <section className="relative container-x pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-10 md:p-16 shadow-elegant">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand/30 blur-[120px]" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand/15 blur-[120px]" />
            <div className="relative grid md:grid-cols-[1.5fr_auto] gap-8 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                  Start your project
                </p>
                <h3 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight">
                  Not sure which system fits your site?
                </h3>
                <p className="mt-4 text-white/70 max-w-xl">
                  Share your scope and our engineers will recommend the right spec — with material,
                  warranty and timeline mapped out.
                </p>
              </div>
              <button
                onClick={() => open()}
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-7 py-4 text-sm font-bold uppercase tracking-wider shadow-brand hover:bg-brand/90 transition-all hover:translate-x-1"
              >
                Talk to an engineer
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-brand/60 pl-4">
      <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{label}</div>
    </div>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default ServicesPage;

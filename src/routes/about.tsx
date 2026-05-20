import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Award,
  Target,
  Eye,
  Wrench,
  ShieldCheck,
  Users,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import heroCover from "@/assets/brand/hero-cover.jpg";
import badge from "@/assets/brand/25years.jpg";
import equipmentShowcase from "@/assets/brand/equipment-showcase.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Chennai Buildcare Technologies" },
      {
        name: "description",
        content:
          "Established in 1998, Chennai Buildcare Technologies is a professional civil engineering company specialising in construction chemical solutions across India.",
      },
      { property: "og:title", content: "About Chennai Buildcare Technologies" },
      { property: "og:description", content: "25 years pioneering innovative concrete solutions." },
    ],
  }),
  component: AboutPage,
});

const EQUIPMENT = [
  "Surface Preparation Machines",
  "Multi-Purpose Mixing Machines",
  "Screed Laying Machines",
  "PU & Epoxy Grouting Pumps",
  "Concrete Repair Heavy Duty Breakers",
  "Light Duty Hand Mixers",
  "Epoxy / PU Flooring Toolkits",
  "Airless Paint Sprayers",
  "Concrete Hardness & Gloss Meters",
];

const VALUES = [
  {
    icon: Target,
    t: "Mission",
    d: "Deliver economical, sustainable construction chemical solutions that perform for decades.",
  },
  {
    icon: Eye,
    t: "Vision",
    d: "Be India's most trusted civil engineering partner for waterproofing, flooring and rehabilitation.",
  },
  {
    icon: Award,
    t: "Values",
    d: "Quality, safety, sustainability and a stringent commitment to client outcomes.",
  },
];

const TRUST = [
  {
    icon: Users,
    n: "Skilled Workforce",
    d: "Trained engineers, technicians and applicators executing every project.",
  },
  {
    icon: ShieldCheck,
    n: "Safety First",
    d: "Stringent compliance with site safety standards and global protocols.",
  },
  {
    icon: Award,
    n: "Proven Record",
    d: "Prestigious projects delivered across India and overseas.",
  },
];

function AboutPage() {
  return (
    <>
      {/* === HERO === */}
      <section className="relative isolate overflow-hidden bg-[#0b1220] text-white">
        <div className="absolute inset-0">
          <img
            src={heroCover}
            alt=""
            className="h-full w-full object-cover opacity-30 animate-kenburns"
          />
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
              <Sparkles className="h-3.5 w-3.5" /> Since 1998
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance fade-in-up">
              Engineering trust into every{" "}
              <span className="bg-gradient-to-r from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">
                square metre
              </span>
              .
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 fade-in-up">
              Chennai Buildcare Technologies is a professional civil engineering company
              specialising in world-class, economical and sustainable construction chemical
              solutions across India.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 fade-in-up">
              <div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">
                  25+
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">Years</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">
                  1200+
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">Projects</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">
                  12L+
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">Sq.m</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,oklch(0.74_0.17_55/0.08),transparent_55%)]" />
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 fade-in-up">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              <span className="h-px w-8 bg-brand" /> Our story
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              25 years of pioneering{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                innovative concrete solutions.
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Chennai Buildcare Technologies is synonymous with world-class, innovative concrete
              solutions that are economical and score high on the sustainability front. Established
              in 1998, we have made rapid inroads across waterproofing, repairs & rehabilitation,
              epoxy / PU flooring, concrete grinding & polishing, grouting, and acid-proof
              treatments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A systematic approach — understanding the client's unique requirements, working out a
              solution through thorough analysis and finally professional implementation — has
              powered our climb to the top of the industry.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-8 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl border bg-card/60 backdrop-blur-xl p-8 shadow-elegant">
              <img
                src={badge}
                alt="25 years celebration"
                className="mx-auto h-56 w-56 object-contain"
                loading="lazy"
              />
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { n: "25+", l: "Years" },
                  { n: "1200+", l: "Projects" },
                  { n: "12L+", l: "Sq.m" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-secondary/60 py-3">
                    <div className="text-xl font-bold text-primary">{s.n}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="relative py-24 bg-[#0a1020] text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[60%] bg-brand/20 blur-[120px] rounded-full" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              What drives us
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Built on{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                purpose & precision.
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.t}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 hover:bg-white/[0.07] hover:border-brand/40 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-brand">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{v.t}</h3>
                <p className="mt-3 text-primary-foreground/70 leading-relaxed">{v.d}</p>
                <div className="mt-6 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & EQUIPMENT — premium split */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,oklch(0.74_0.17_55/0.08),transparent_50%)]" />
        <div className="container-x grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border shadow-elegant">
              <img
                src={equipmentShowcase}
                alt="Industrial equipment lineup"
                className="w-full h-[520px] object-cover"
                loading="lazy"
                width={1280}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020]/80 via-transparent to-transparent" />
              {/* floating stat card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-5 text-primary-foreground">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-brand">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary-foreground/70">
                      Continuous upgrades
                    </div>
                    <div className="text-lg font-semibold">Latest-gen industrial toolkit</div>
                  </div>
                </div>
              </div>
            </div>
            {/* floating badge */}
            <div className="hidden md:block absolute -top-6 -right-6 rounded-2xl bg-card border shadow-elegant p-4 w-44">
              <div className="text-3xl font-bold text-brand">9+</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Equipment Categories
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              <span className="h-px w-8 bg-brand" /> Infrastructure
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              State-of-the-art{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                tools & equipment.
              </span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our top management invests relentlessly in the latest technologies and constant
              up-gradation. We deploy the most modern and sophisticated tools for industrial
              flooring, waterproofing, repair & rehabilitation, grouting and acid-proof treatments.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {EQUIPMENT.map((e) => (
                <span
                  key={e}
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur-sm px-4 py-2 text-sm font-medium hover:border-brand/60 hover:bg-brand/5 hover:-translate-y-0.5 hover:shadow-brand transition-all duration-300"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-brand">
                    <Wrench className="h-3 w-3 text-primary" />
                  </span>
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST — floating premium cards */}
      <section className="relative py-24 bg-secondary/30 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Why teams trust us
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              The CBT{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">advantage.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TRUST.map((b) => (
              <div
                key={b.n}
                className="group relative rounded-2xl bg-card border p-8 hover:-translate-y-2 hover:shadow-elegant transition-all duration-500"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-brand">
                  <b.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{b.n}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMATIC CTA */}
      <section className="relative py-28 overflow-hidden bg-[#0a1020] text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute -top-20 -left-20 h-96 w-96 bg-brand/25 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 bg-brand/20 blur-[140px] rounded-full" />
        <div className="container-x relative text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            <span className="h-px w-8 bg-brand" /> Let's collaborate
          </p>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
            Let's build something{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">that lasts.</span>
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/75 max-w-xl mx-auto">
            Talk to our civil engineers about your project specification — site visit, scope review
            and proposal within 48 hours.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="brand" size="lg" className="group shadow-brand">
              <Link to="/contact">
                Get in touch
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 backdrop-blur-md text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              <Link to="/projects">View our projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

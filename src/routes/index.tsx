import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/components/EnquiryDialog";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Building2,
  Droplets,
  Hammer,
  Layers,
  Sparkles,
  Wrench,
  Flame,
  Quote,
} from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import { CLIENTS } from "@/data/clients";
import heroCover from "@/assets/brand/hero-cover.jpg";
import badge from "@/assets/brand/25years.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chennai Buildcare Technologies — Concrete & Construction Chemical Experts" },
      {
        name: "description",
        content:
          "Waterproofing, epoxy & PU flooring, polished concrete, structural retrofitting and grouting solutions delivered across India for 25+ years.",
      },
    ],
  }),
  component: HomePage,
});

const SERVICE_ICONS: Record<string, typeof Droplets> = {
  Waterproofing: Droplets,
  "Epoxy Flooring": Layers,
  "PU Flooring": Layers,
  "Concrete Polishing": Sparkles,
  "Concrete Grinding & Polishing": Sparkles,
  "Building Repair & Retrofitting": Hammer,
  Grouting: Wrench,
  "Roof & Deck Insulation": Flame,
};

function HomePage() {
  const { open } = useEnquiry();
  const featured = PROJECTS.filter((p) => p.status === "completed").slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroCover} alt="" className="h-full w-full object-cover animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="relative container-x py-24 text-primary-foreground">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/15 ring-1 ring-brand/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand fade-in-up">
              <Award className="h-3.5 w-3.5" /> 25 Years · 1998 – 2023
            </div>
            <h1 className="mt-5 text-5xl md:text-7xl font-bold text-balance leading-[1.05] fade-in-up">
              Pioneering innovative <span className="text-brand">concrete solutions</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/85 fade-in-up">
              From world-class waterproofing to mirror-polished concrete, Chennai Buildcare
              Technologies engineers economical, sustainable construction chemical systems for
              India's most demanding sites.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 fade-in-up">
              <Button size="lg" variant="brand" onClick={() => open()}>
                Request a Site Consultation <ArrowRight />
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/projects">Explore Projects</Link>
              </Button>
            </div>

            <dl className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
              {[
                { k: "25+", v: "Years of Expertise" },
                { k: "12L+", v: "Sq.m Industrial Flooring" },
                { k: "500+", v: "Projects Delivered" },
                { k: "100+", v: "Marquee Clients" },
              ].map((s) => (
                <div key={s.v} className="border-l-2 border-brand/60 pl-4">
                  <dt className="text-3xl md:text-4xl font-bold text-brand">{s.k}</dt>
                  <dd className="text-sm text-primary-foreground/80 mt-1">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">About CBT</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-balance">
              Discover quality-driven civil engineering innovation
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Established in 1998, Chennai Buildcare Technologies has become the preferred choice
              for industrial clients across India through a stringent commitment to quality and a
              top management team comprised entirely of qualified civil engineers.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "Qualified & skilled workforce",
                "Quality solutions at affordable rates",
                "Stringent commitment to safety",
                "Environment-sustainable systems",
                "State-of-the-art tools & equipment",
                "Proven Indian & international track record",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <ShieldCheck className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="brand" size="lg" className="mt-8">
              <Link to="/about">Learn more about us <ArrowRight /></Link>
            </Button>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
              <img src={heroCover} alt="Construction" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <img src={badge} alt="25 years celebration" className="h-32 w-32 rounded-full bg-white p-2 shadow-elegant" />
            </div>
            <div className="absolute -top-4 -right-4 bg-card border rounded-xl px-5 py-4 shadow-elegant">
              <div className="text-3xl font-bold text-brand">12L+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Sq.m delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9]">
        <div className="container-x relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand">
                <span className="h-px w-8 bg-brand" /> What we do
              </span>
              <h2 className="mt-5 text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-balance leading-[1.1] text-[#0f172a]">
                Full-spectrum construction chemical solutions
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Engineered systems delivered by qualified civil engineers — from world-class
                waterproofing to mirror-polished industrial floors.
              </p>
            </div>
            <Link
              to="/services"
              className="group/cta inline-flex items-center gap-2 self-start lg:self-end text-sm font-semibold text-[#0f172a] hover:text-brand transition-colors"
            >
              View all services
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0f172a] text-white group-hover/cta:bg-brand group-hover/cta:rotate-45 transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((c, i) => {
              const Icon = SERVICE_ICONS[c] ?? Building2;
              return (
                <Link
                  to="/services"
                  key={c}
                  style={{ animationDelay: `${i * 80}ms` }}
                  className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant fade-in-up"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff9a4d] to-[#ff5a1a] flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>

                  <h3 className="mt-5 font-semibold text-lg leading-tight text-[#0f172a]">
                    {c}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    Specialist crews. Turnkey delivery. Warrantied systems built to perform.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">Our Projects</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">Recent work, delivered with precision.</h2>
            </div>
            <Link to="/projects" className="text-sm font-semibold text-brand inline-flex items-center gap-2 hover:gap-3 transition-all">
              View all projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                key={p.slug}
                className="group relative block overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-elegant transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 left-3 rounded-full bg-brand/95 text-brand-foreground px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                  {p.category}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold leading-tight line-clamp-2">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.location} · {p.year}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="py-16 bg-primary text-primary-foreground overflow-hidden">
        <div className="container-x">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Trusted by</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Leaders across industries.
            </h2>
          </div>
        </div>
        <div className="mt-10 relative">
          <div className="flex w-max animate-marquee gap-3 px-3">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div key={i} className="shrink-0 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-3 text-sm font-medium">
                {c.name}
              </div>
            ))}
          </div>
        </div>
        <div className="container-x mt-10 text-center">
          <Link to="/clients" className="text-sm font-semibold text-brand inline-flex items-center gap-2 hover:gap-3 transition-all">
            See our full client list <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL / VALUE */}
      <section className="py-20">
        <div className="container-x grid lg:grid-cols-3 gap-6">
          {[
            { icon: Users, t: "Civil engineers at the helm", d: "Every project is led by qualified civil engineers — not just supervisors." },
            { icon: ShieldCheck, t: "Warrantied systems", d: "We deliver brand-backed waterproofing & flooring systems with long-term performance warranties." },
            { icon: Award, t: "25 years of trust", d: "An unbroken track record of prestigious projects across India and abroad." },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border bg-card p-8">
              <v.icon className="h-9 w-9 text-brand" />
              <h3 className="mt-4 text-lg font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 text-primary-foreground shadow-elegant">
            <Quote className="absolute -top-4 -left-4 h-32 w-32 text-brand/10" />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-balance">
                  Have a tough concrete challenge?
                </h2>
                <p className="mt-4 text-primary-foreground/85 text-lg">
                  Tell us about your site. Our engineers will design the right specification — and
                  back it with a warrantied delivery.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button variant="brand" size="lg" onClick={() => open()}>
                  Start your enquiry
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <Link to="/contact">Contact our offices</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

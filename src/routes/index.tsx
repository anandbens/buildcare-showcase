import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/components/EnquiryDialog";
import {
  ArrowRight,
  ArrowUpRight,
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
  CheckCircle2,
  Zap,
  Quote,
} from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import heroCover from "@/assets/brand/hero-cover.jpg";
import badge from "@/assets/brand/25years.jpg";

const SERVICE_ICONS: Record<string, typeof Droplets> = {
  Waterproofing: Droplets,
  "Polyurethane Flooring Food Industry": Layers,
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
  const topServices = CATEGORIES.slice(0, 8);

  return (
    <>
      <Helmet><title>{"Chennai Buildcare Technologies — Concrete & Construction Chemical Experts"}</title><meta name="description" content={"Waterproofing, Polyurethane Flooring Food Industry, polished concrete, structural retrofitting and grouting solutions delivered across India for 15 years."} /></Helmet>
      
      {/* ========== HERO ========== */}
      <section className="relative isolate overflow-hidden min-h-[92vh] flex items-center bg-[#0a1020]">
        {/* Background image + overlays */}
        <div className="absolute inset-0">
          <img src={heroCover} alt="" className="h-full w-full object-cover scale-110 animate-kenburns opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020]/95 via-[#0a1020]/80 to-[#0a1020]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-transparent to-[#0a1020]/40" />
        </div>

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[#f59e3a]/20 blur-[140px] animate-pulse" />
        <div className="absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full bg-[#3b6fa0]/30 blur-[160px]" />
        <div className="absolute top-1/3 right-1/4 h-72 w-72 rounded-full bg-[#e07016]/15 blur-[100px]" />

        {/* Light streaks */}
        <div className="absolute top-0 left-1/3 h-full w-px bg-gradient-to-b from-transparent via-[#f59e3a]/30 to-transparent" />
        <div className="absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

        <div className="relative container-x py-28 md:py-36 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-xl ring-1 ring-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 fade-in-up">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f59e3a] animate-pulse" />
              <Award className="h-3.5 w-3.5 text-[#f59e3a]" /> Trusted since 2011 · 15 Years
            </div>

            <h1 className="mt-7 text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-balance leading-[1.02] tracking-tight fade-in-up">
              Pioneering{" "}
              <span className="bg-gradient-to-r from-[#f59e3a] via-[#ff7a45] to-[#e07016] bg-clip-text text-transparent">
                innovative concrete
              </span>{" "}
              solutions.
            </h1>

            <p className="mt-7 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed fade-in-up">
              From world-class waterproofing to mirror-polished concrete, Chennai Buildcare
              Technologies engineers economical, sustainable construction chemical systems for
              India's most demanding sites.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 fade-in-up">
              <button
                onClick={() => open()}
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f59e3a] to-[#e07016] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-12px_rgba(245,158,58,0.6)] transition-all hover:shadow-[0_25px_60px_-10px_rgba(245,158,58,0.8)] hover:-translate-y-0.5"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                Request a Site Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-xl ring-1 ring-white/15 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:ring-white/25 transition-all"
              >
                Explore Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ========== ABOUT ========== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-[#f59e3a]/10 blur-[100px]" />

        <div className="container-x grid lg:grid-cols-12 gap-14 items-center relative">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#e07016]">
              <span className="h-px w-8 bg-[#e07016]" /> About CBT
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-balance leading-[1.08] text-[#0f172a]">
              Quality-driven civil engineering,{" "}
              <span className="bg-gradient-to-r from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">
                built to last.
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Established in 2011, Chennai Buildcare Technologies has become the preferred choice
              for industrial clients across India through a stringent commitment to quality and a
              top management team comprised entirely of qualified civil engineers.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Qualified & skilled workforce",
                "Quality solutions at affordable rates",
                "Stringent commitment to safety",
                "Environment-sustainable systems",
                "State-of-the-art tools & equipment",
                "Proven Indian & international track record",
              ].map((b, i) => (
                <li
                  key={b}
                  style={{ animationDelay: `${i * 70}ms` }}
                  className="group flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white/60 backdrop-blur-sm p-4 transition-all hover:border-[#f59e3a]/40 hover:shadow-[0_10px_30px_-12px_rgba(245,158,58,0.3)] hover:-translate-y-0.5 fade-in-up"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#f59e3a]/15 to-[#e07016]/10 ring-1 ring-[#f59e3a]/20 text-[#e07016] group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-medium text-slate-800 pt-1.5">{b}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="brand" size="lg" className="mt-10 rounded-full">
              <Link to="/about">Learn more about us <ArrowRight /></Link>
            </Button>
          </div>

          <div className="lg:col-span-5 relative">
            {/* Layered image card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#f59e3a]/30 to-[#3b6fa0]/20 rounded-[2rem] blur-2xl" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.4)]">
                <img src={heroCover} alt="Construction" className="h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020]/70 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#f59e3a]/40 blur-xl" />
                  <img src={badge} alt="25 years" className="relative h-32 w-32 rounded-full bg-white p-2 shadow-2xl ring-4 ring-white" />
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -top-6 -right-6 rounded-2xl bg-white/90 backdrop-blur-xl ring-1 ring-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.3)] px-6 py-4">
                <div className="text-3xl font-bold bg-gradient-to-br from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">12L+</div>
                <div className="text-[10px] text-slate-600 uppercase tracking-[0.15em] font-semibold">Sq.m delivered</div>
              </div>

              {/* Floating mini badge */}
              <div className="absolute top-1/2 -right-4 hidden md:flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e3a5f] shadow-xl ring-1 ring-white/10">
                <Zap className="h-6 w-6 text-[#f59e3a]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#0a1020] text-white">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#f59e3a]/15 blur-[150px]" />
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-[#3b6fa0]/20 blur-[150px]" />

        <div className="container-x relative">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#f59e3a]">
                <span className="h-px w-8 bg-[#f59e3a]" /> What we do
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-balance leading-[1.08]">
                Full-spectrum construction{" "}
                <span className="bg-gradient-to-r from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">
                  chemical solutions
                </span>
              </h2>
              <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-xl">
                Engineered systems delivered by qualified civil engineers — from world-class
                waterproofing to mirror-polished industrial floors.
              </p>
            </div>
            <Link
              to="/services"
              className="group/cta inline-flex items-center gap-2 self-start lg:self-end text-sm font-semibold text-white hover:text-[#f59e3a] transition-colors"
            >
              View all services
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f59e3a] to-[#e07016] text-white group-hover/cta:rotate-45 transition-all duration-300 shadow-[0_10px_30px_-8px_rgba(245,158,58,0.6)]">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topServices.map((c, i) => {
              const Icon = SERVICE_ICONS[c] ?? Building2;
              return (
                <Link
                  to="/services"
                  key={c}
                  style={{ animationDelay: `${i * 70}ms` }}
                  className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white/[0.04] backdrop-blur-xl ring-1 ring-white/10 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:ring-[#f59e3a]/40 hover:bg-white/[0.07] fade-in-up"
                >
                  {/* Hover glow */}
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#f59e3a]/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f59e3a] to-[#e07016] flex items-center justify-center text-white shadow-[0_10px_30px_-8px_rgba(245,158,58,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="relative mt-6 font-semibold text-lg leading-tight text-white">
                    {c}
                  </h3>
                  <p className="relative mt-2 text-sm text-white/55 leading-relaxed flex-1">
                    Specialist crews. Turnkey delivery. Warrantied systems built to perform.
                  </p>
                  <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#f59e3a]">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-[#f59e3a]/8 blur-[120px]" />

        <div className="container-x relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#e07016]">
                <span className="h-px w-8 bg-[#e07016]" /> Our Projects
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-balance leading-[1.08] text-[#0f172a]">
                Recent work, delivered with{" "}
                <span className="bg-gradient-to-r from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">precision.</span>
              </h2>
            </div>
            <Link to="/projects" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0f172a] hover:text-[#e07016] transition-colors">
              View all projects
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0f172a] text-white group-hover:bg-gradient-to-br group-hover:from-[#f59e3a] group-hover:to-[#e07016] group-hover:rotate-45 transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <Link
                to={`/projects/${p.slug}`}
                key={p.slug}
                style={{ animationDelay: `${i * 80}ms` }}
                className="group relative block overflow-hidden rounded-3xl bg-card ring-1 ring-slate-200/80 shadow-sm hover:shadow-[0_30px_60px_-20px_rgba(15,23,42,0.3)] transition-all duration-500 hover:-translate-y-1 fade-in-up"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020]/90 via-[#0a1020]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 rounded-full bg-white/15 backdrop-blur-xl ring-1 ring-white/30 text-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider">
                    {p.category}
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute bottom-4 right-4 h-11 w-11 rounded-full bg-gradient-to-br from-[#f59e3a] to-[#e07016] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-[0_10px_30px_-8px_rgba(245,158,58,0.6)]">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>

                  {/* Title overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="font-semibold text-lg leading-tight line-clamp-2 drop-shadow-md">{p.title}</h3>
                    <p className="mt-1 text-xs text-white/75">{p.location} · {p.year}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ========== TRUST / VALUES ========== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-[#3b6fa0]/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f59e3a]/8 blur-[120px]" />

        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#e07016]">
              <span className="h-px w-8 bg-[#e07016]" /> Why CBT
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-balance leading-[1.08] text-[#0f172a]">
              Engineered trust,{" "}
              <span className="bg-gradient-to-r from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">delivered on site.</span>
            </h2>
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              { icon: Users, t: "Civil engineers at the helm", d: "Every project is led by qualified civil engineers — not just supervisors." },
              { icon: ShieldCheck, t: "Warrantied systems", d: "Brand-backed waterproofing & flooring systems with long-term performance warranties." },
              { icon: Award, t: "25 years of trust", d: "An unbroken track record of prestigious projects across India and abroad." },
            ].map((v, i) => (
              <div
                key={v.t}
                style={{ animationDelay: `${i * 100}ms` }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-20px_rgba(245,158,58,0.35)] hover:border-[#f59e3a]/30 fade-in-up"
              >
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-[#f59e3a]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f59e3a] to-[#e07016] text-white shadow-[0_10px_30px_-8px_rgba(245,158,58,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="relative mt-6 text-xl font-semibold text-[#0f172a]">{v.t}</h3>
                <p className="relative mt-3 text-sm text-slate-600 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="pb-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0a1020] p-10 md:p-16 text-white shadow-[0_40px_80px_-30px_rgba(15,23,42,0.5)]">
            {/* Background image overlay */}
            <div className="absolute inset-0 opacity-20">
              <img src={heroCover} alt="" className="h-full w-full object-cover animate-kenburns" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1020]/95 via-[#0a1020]/85 to-[#0a1020]/60" />

            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Glows */}
            <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#f59e3a]/30 blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#3b6fa0]/30 blur-[100px]" />

            <Quote className="absolute top-6 left-6 h-24 w-24 text-white/5" />

            <div className="relative grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#f59e3a]">
                  <span className="h-px w-8 bg-[#f59e3a]" /> Let's build
                </span>
                <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.05]">
                  Have a tough{" "}
                  <span className="bg-gradient-to-r from-[#f59e3a] to-[#e07016] bg-clip-text text-transparent">
                    concrete challenge?
                  </span>
                </h2>
                <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-xl">
                  Tell us about your site. Our engineers will design the right specification — and
                  back it with a warrantied delivery.
                </p>
              </div>
              <div className="lg:col-span-2 flex flex-wrap gap-3 lg:justify-end">
                <button
                  onClick={() => open()}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f59e3a] to-[#e07016] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_20px_50px_-12px_rgba(245,158,58,0.6)] transition-all hover:shadow-[0_25px_60px_-10px_rgba(245,158,58,0.8)] hover:-translate-y-0.5"
                >
                  Start your enquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-xl ring-1 ring-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:ring-white/30 transition-all"
                >
                  Contact our offices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

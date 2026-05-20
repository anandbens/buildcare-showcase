import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PROJECTS, CATEGORIES, type ProjectStatus } from "@/data/projects";
import { MapPin, ArrowUpRight, Sparkles, Building2, CheckCircle2, Clock } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Chennai Buildcare Technologies" },
      {
        name: "description",
        content:
          "Browse our completed and ongoing projects across waterproofing, epoxy & PU flooring, polished concrete and structural retrofitting.",
      },
      { property: "og:title", content: "Our Projects — Chennai Buildcare Technologies" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [tab, setTab] = useState<ProjectStatus>("completed");
  const [category, setCategory] = useState<"All" | (typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(
    () =>
      PROJECTS.filter(
        (p) => p.status === tab && (category === "All" || p.category === category),
      ),
    [tab, category],
  );

  const groupedByCategory = filtered.reduce<Record<string, typeof PROJECTS>>((acc, p) => {
    (acc[p.category] ||= []).push(p);
    return acc;
  }, {});

  const totalCompleted = PROJECTS.filter((p) => p.status === "completed").length;
  const totalOngoing = PROJECTS.filter((p) => p.status === "ongoing").length;
  const featured = PROJECTS.find((p) => p.status === "completed") ?? PROJECTS[0];

  return (
    <>
      {/* === HERO === */}
      <section className="relative isolate overflow-hidden bg-[#0b1220] text-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={featured.image}
            alt=""
            className="h-full w-full object-cover opacity-40 animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0b1220]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent" />
        </div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Orange glow */}
        <div className="absolute -top-32 -right-20 h-[520px] w-[520px] rounded-full bg-brand/30 blur-[160px]" />

        <div className="relative container-x py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand ring-1 ring-white/15 fade-in-up">
              <Sparkles className="h-3.5 w-3.5" /> Portfolio
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance fade-in-up">
              Built to last.
              <br />
              <span className="text-brand">Engineered to perform.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 fade-in-up">
              A curated portfolio of completed and ongoing projects across industrial, commercial
              and infrastructure sectors — delivered by qualified civil engineers.
            </p>

            {/* Stats strip */}
            <div className="mt-8 flex items-center gap-8 fade-in-up">
              <StatCompact value={`${totalCompleted}+`} label="Completed" />
              <StatCompact value={`${totalOngoing}+`} label="Ongoing" />
              <StatCompact value={`${CATEGORIES.length}`} label="Categories" />
            </div>
          </div>
        </div>
      </section>

      {/* === FILTER BAR === */}
      <section className="sticky top-20 z-20 bg-white/85 backdrop-blur-xl border-b border-slate-200/70">
        <div className="container-x py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="inline-flex rounded-full bg-slate-100 p-1 self-start">
            {(["completed", "ongoing"] as ProjectStatus[]).map((s) => {
              const Icon = s === "completed" ? CheckCircle2 : Clock;
              return (
                <button
                  key={s}
                  onClick={() => setTab(s)}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                    tab === s
                      ? "bg-[#0f172a] text-white shadow-lg shadow-slate-900/20"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {s}
                  <span className="text-xs opacity-70">
                    ({PROJECTS.filter((p) => p.status === s).length})
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterChip active={category === "All"} onClick={() => setCategory("All")}>
              All
            </FilterChip>
            {CATEGORIES.map((c) => (
              <FilterChip key={c} active={category === c} onClick={() => setCategory(c)}>
                {c}
              </FilterChip>
            ))}
          </div>
        </div>
      </section>

      {/* === BODY === */}
      <div className="relative bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc]">
        <div className="container-x py-20 space-y-24">
          {Object.keys(groupedByCategory).length === 0 && (
            <div className="text-center py-32">
              <Building2 className="mx-auto h-12 w-12 text-slate-300" />
              <p className="mt-4 text-slate-500">
                No projects in this category yet — please check back soon.
              </p>
            </div>
          )}

          {CATEGORIES.filter((c) => groupedByCategory[c]?.length).map((c, sectionIdx) => (
            <section key={c} className="scroll-mt-32">
              {/* Section header */}
              <div className="flex items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                    <span className="h-px w-8 bg-brand" />
                    Category {String(sectionIdx + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-[#0f172a]">
                    {c}
                  </h2>
                </div>
                <span className="text-sm font-medium text-slate-500 shrink-0 pb-2">
                  {groupedByCategory[c].length} project
                  {groupedByCategory[c].length > 1 ? "s" : ""}
                </span>
              </div>

              {/* Project grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {groupedByCategory[c].map((p, i) => (
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    key={p.slug}
                    className="group relative block overflow-hidden rounded-3xl bg-white border border-slate-200/70 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.1)] hover:shadow-[0_28px_60px_-20px_rgba(15,23,42,0.25)] hover:-translate-y-1.5 hover:border-slate-300 transition-all duration-500 fade-in-up"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      />
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-[#0f172a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Status badge */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#0f172a] shadow-md">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            p.status === "completed" ? "bg-emerald-500" : "bg-brand animate-pulse"
                          }`}
                        />
                        {p.status}
                      </div>

                      {/* Year chip */}
                      <div className="absolute top-4 right-4 rounded-full bg-[#0f172a]/80 backdrop-blur text-white px-3 py-1.5 text-[10px] font-bold tracking-wider opacity-0 group-hover:opacity-100 translate-y-[-4px] group-hover:translate-y-0 transition-all duration-500">
                        {p.year}
                      </div>

                      {/* Hover CTA icon */}
                      <div className="absolute bottom-4 right-4 h-11 w-11 rounded-full bg-brand text-brand-foreground flex items-center justify-center shadow-brand opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                        {p.category}
                      </p>
                      <h3 className="mt-2 font-bold text-lg leading-snug line-clamp-2 text-[#0f172a] group-hover:text-brand transition-colors duration-300">
                        {p.title}
                      </h3>
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-sm">
                        <span className="inline-flex items-center gap-1.5 text-slate-500">
                          <MapPin className="h-3.5 w-3.5" /> {p.location}
                        </span>
                        <span className="font-semibold text-slate-400 group-hover:text-brand transition-colors">
                          {p.year}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* === CTA === */}
        <section className="container-x pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-10 md:p-16 shadow-elegant">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand/30 blur-[120px]" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand/15 blur-[120px]" />
            <div className="relative grid md:grid-cols-[1.5fr_auto] gap-8 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                  Start your project
                </p>
                <h3 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight">
                  Have a site that needs an expert?
                </h3>
                <p className="mt-4 text-white/70 max-w-xl">
                  From waterproofing and flooring to structural retrofitting — our engineers design
                  the right spec and our crews deliver it cleanly.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-7 py-4 text-sm font-bold uppercase tracking-wider shadow-brand hover:bg-brand/90 transition-all hover:translate-x-1"
              >
                Talk to an engineer
                <ArrowUpRight className="h-4 w-4" />
              </Link>
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

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
        active
          ? "bg-[#0f172a] text-white border-[#0f172a] shadow-md"
          : "bg-white text-slate-600 border-slate-200 hover:border-brand hover:text-brand"
      }`}
    >
      {children}
    </button>
  );
}

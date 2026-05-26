import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PROJECTS, CATEGORIES, type ProjectStatus } from "@/data/projects";
import {
  ArrowUpRight,
  Sparkles,
  Building2,
  CheckCircle2,
  Clock,
  Layers3,
} from "lucide-react";

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
        <div className="absolute inset-0">
          <img
            src={featured.image}
            alt=""
            className="h-full w-full object-cover opacity-40 animate-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0b1220]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent" />
        </div>

        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

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

            <div className="mt-8 flex items-center gap-8 fade-in-up">
              <Stat value={`${totalCompleted}+`} label="Completed" />
              <Stat value={`${totalOngoing}+`} label="Ongoing" />
              <Stat value={`${CATEGORIES.length}`} label="Categories" />
            </div>
          </div>
        </div>
      </section>

      {/* === FILTER BAR === */}
      <section className="sticky top-20 z-30 border-b border-slate-200/60 bg-white/70 backdrop-blur-2xl shadow-[0_4px_20px_-12px_rgba(15,23,42,0.15)]">
        <div className="container-x py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          {/* Status pill group */}
          <div className="relative inline-flex rounded-full bg-slate-100/80 backdrop-blur p-1.5 self-start ring-1 ring-slate-200/60 shadow-inner">
            {(["completed", "ongoing"] as ProjectStatus[]).map((s) => {
              const Icon = s === "completed" ? CheckCircle2 : Clock;
              const isActive = tab === s;
              const count = PROJECTS.filter((p) => p.status === s).length;
              return (
                <button
                  key={s}
                  onClick={() => setTab(s)}
                  className={`relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-[0_10px_24px_-8px_rgba(234,140,46,0.6)] bg-gradient-to-br from-[#f59e3a] to-[#e07016] ring-1 ring-white/20"
                      : "text-slate-500 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {s}
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/25 text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            <FilterChip active={category === "All"} onClick={() => setCategory("All")}>
              <Layers3 className="h-3.5 w-3.5" />
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
      <div className="relative bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] overflow-hidden">
        {/* Subtle industrial grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,1) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,1) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Soft accent glows */}
        <div className="absolute top-40 -left-32 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-40 -right-32 h-[420px] w-[420px] rounded-full bg-[#0f172a]/5 blur-[140px] pointer-events-none" />

        <div className="relative container-x py-20 lg:py-24 space-y-28">
          {Object.keys(groupedByCategory).length === 0 && (
            <div className="text-center py-32">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-slate-100 flex items-center justify-center">
                <Building2 className="h-7 w-7 text-slate-400" />
              </div>
              <p className="mt-5 text-slate-500">
                No projects in this category yet — please check back soon.
              </p>
            </div>
          )}

          {CATEGORIES.filter((c) => groupedByCategory[c]?.length).map((c, sectionIdx) => (
            <section key={c} className="scroll-mt-32">
              {/* Section header */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 pb-6 border-b border-slate-200/80 relative">
                <span className="absolute left-0 -bottom-px h-[2px] w-24 bg-gradient-to-r from-brand to-transparent" />
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-brand">
                    <span className="h-px w-10 bg-gradient-to-r from-brand to-brand/0" />
                    Category · {String(sectionIdx + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#0f172a]">
                    {c}
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 self-start md:self-auto md:pb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {groupedByCategory[c].length} Project
                    {groupedByCategory[c].length > 1 ? "s" : ""}
                  </span>
                </div>
              </div>

              {/* Project grid */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {groupedByCategory[c].map((p, i) => (
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    key={p.slug}
                    className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white border border-slate-200/70 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.18)] hover:shadow-[0_36px_70px_-24px_rgba(15,23,42,0.28)] hover:-translate-y-2 hover:border-slate-300/80 transition-all duration-500 ease-out fade-in-up"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.12]"
                      />
                      {/* Premium gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Status chip */}
                      <div
                        className={`absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-lg backdrop-blur-md ring-1 ${
                          p.status === "completed"
                            ? "bg-emerald-500/95 text-white ring-emerald-300/50 shadow-emerald-500/30"
                            : "bg-brand/95 text-brand-foreground ring-brand/30 shadow-brand/40"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-white ${
                            p.status === "ongoing" ? "animate-pulse" : ""
                          }`}
                        />
                        {p.status}
                      </div>

                      {/* Year chip */}
                      <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur text-[#0f172a] px-3 py-1.5 text-[10px] font-bold tracking-wider shadow-md ring-1 ring-white/40">
                        <Calendar className="h-3 w-3" />
                        {p.year}
                      </div>

                      {/* Hover CTA */}
                      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <span className="text-white font-semibold text-sm tracking-wide drop-shadow-md">
                          View Project
                        </span>
                        <span className="h-11 w-11 rounded-full bg-brand text-brand-foreground flex items-center justify-center shadow-brand ring-2 ring-white/30 group-hover:rotate-45 transition-transform duration-500">
                          <ArrowUpRight className="h-5 w-5" />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-6 lg:p-7">
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-brand">
                        <span className="h-px w-5 bg-brand" />
                        {p.category}
                      </div>
                      <h3 className="mt-3 font-bold text-lg lg:text-xl leading-snug line-clamp-2 text-[#0f172a] group-hover:text-brand transition-colors duration-300">
                        {p.title}
                      </h3>

                      <div className="mt-6 pt-5 border-t border-dashed border-slate-200 flex items-center justify-between text-sm">
                        <span className="inline-flex items-center gap-1.5 text-slate-500 font-medium">
                          <MapPin className="h-3.5 w-3.5 text-brand" /> {p.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-brand transition-colors">
                          <Calendar className="h-3 w-3" />
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
      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-300 ${
        active
          ? "bg-[#0f172a] text-white border-[#0f172a] shadow-[0_8px_20px_-8px_rgba(15,23,42,0.5)] -translate-y-0.5"
          : "bg-white/80 backdrop-blur text-slate-600 border-slate-200 hover:border-brand hover:text-brand hover:-translate-y-0.5 hover:shadow-md"
      }`}
    >
      {children}
    </button>
  );
}

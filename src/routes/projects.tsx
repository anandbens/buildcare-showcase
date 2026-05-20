import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { PROJECTS, CATEGORIES, type ProjectStatus } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";

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

  const filtered = PROJECTS.filter(
    (p) => p.status === tab && (category === "All" || p.category === category),
  );

  const groupedByCategory = filtered.reduce<Record<string, typeof PROJECTS>>((acc, p) => {
    (acc[p.category] ||= []).push(p);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Projects"
        subtitle="Every project below was delivered by qualified civil engineers and skilled crews — segregated by service category for easy navigation."
      />

      {/* Tabs */}
      <section className="sticky top-20 z-20 bg-background/95 backdrop-blur border-b">
        <div className="container-x py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="inline-flex rounded-full bg-secondary p-1 self-start">
            {(["completed", "ongoing"] as ProjectStatus[]).map((s) => (
              <button
                key={s}
                onClick={() => setTab(s)}
                className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition ${
                  tab === s
                    ? "bg-gradient-brand text-brand-foreground shadow-brand"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s} Projects
                <span className="ml-2 text-xs opacity-80">
                  ({PROJECTS.filter((p) => p.status === s).length})
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("All")}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                category === "All"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card hover:border-brand"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-xs px-3 py-1.5 rounded-full border transition ${
                  category === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card hover:border-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container-x py-16 space-y-16">
        {Object.keys(groupedByCategory).length === 0 && (
          <p className="text-center text-muted-foreground py-20">
            No projects in this category yet — please check back soon.
          </p>
        )}

        {CATEGORIES.filter((c) => groupedByCategory[c]?.length).map((c) => (
          <section key={c}>
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">Category</p>
                <h2 className="text-2xl md:text-3xl font-bold mt-1">{c}</h2>
              </div>
              <span className="text-sm text-muted-foreground">
                {groupedByCategory[c].length} project{groupedByCategory[c].length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedByCategory[c].map((p) => (
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  key={p.slug}
                  className="group block overflow-hidden rounded-2xl bg-card border hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-3 left-3 rounded-full bg-brand/95 text-brand-foreground px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                      {p.status}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold leading-tight line-clamp-2 group-hover:text-brand transition">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {p.location} · {p.year}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      View details <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, PROJECTS, type Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/components/EnquiryDialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeft, MapPin, Calendar, Building, Ruler, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Chennai Buildcare Technologies` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.summary },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [{ title: "Project — Chennai Buildcare Technologies" }],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-bold">Project not found</h1>
      <Button asChild variant="brand" className="mt-6">
        <Link to="/projects">Back to all projects</Link>
      </Button>
    </div>
  ),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const { open } = useEnquiry();

  const related = PROJECTS.filter(
    (p) => p.category === project.category && p.slug !== project.slug,
  ).slice(0, 3);

  return (
    <>
      {/* Hero banner */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt="" className="h-full w-full object-cover animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/30" />
        </div>
        <div className="relative container-x py-20 md:py-28 text-primary-foreground">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-brand fade-in-up"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all projects
          </Link>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-3 py-1 text-xs font-semibold uppercase tracking-widest fade-in-up">
            {project.category} · {project.status}
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance max-w-4xl fade-in-up">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85 fade-in-up">
            {project.summary}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10">
            {/* Carousel */}
            <Carousel className="w-full">
              <CarouselContent>
                {project.gallery.map((g, i) => (
                  <CarouselItem key={i}>
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl shadow-elegant">
                      <img src={g} alt={`${project.title} ${i + 1}`} className="h-full w-full object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>

            <div>
              <h2 className="text-2xl font-bold">Scope of work</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {project.scope.map((s) => (
                  <li key={s} className="flex gap-2 rounded-lg border bg-card px-4 py-3 text-sm">
                    <Check className="h-5 w-5 text-brand shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery grid */}
            <div>
              <h2 className="text-2xl font-bold">Project gallery</h2>
              <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.gallery.map((g, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-xl group">
                    <img
                      src={g}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-2xl border bg-card p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-brand">Project details</h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <Row icon={Building} label="Client" value={project.client} />
                  <Row icon={MapPin} label="Location" value={project.location} />
                  <Row icon={Calendar} label="Year" value={project.year} />
                  {project.area && <Row icon={Ruler} label="Area" value={project.area} />}
                </dl>
              </div>

              <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-6 shadow-elegant">
                <h3 className="text-lg font-semibold">Have a similar requirement?</h3>
                <p className="mt-2 text-sm text-primary-foreground/85">
                  Talk to our civil engineers about your site — we'll design a spec that fits.
                </p>
                <Button variant="brand" className="mt-4 w-full" onClick={() => open({ service: project.category })}>
                  Enquire about this service
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container-x">
            <div className="flex items-end justify-between gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">More {project.category} projects</h2>
              <Link to="/projects" className="text-sm font-semibold text-brand inline-flex items-center gap-1 hover:gap-2 transition-all">
                All projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  key={p.slug}
                  className="group block overflow-hidden rounded-2xl bg-card border hover:shadow-elegant transition"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold line-clamp-2 group-hover:text-brand transition">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Row({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-4 w-4 text-brand mt-0.5 shrink-0" />
      <div>
        <dt className="text-xs uppercase tracking-wider text-muted-foreground">{label}</dt>
        <dd className="font-medium">{value}</dd>
      </div>
    </div>
  );
}

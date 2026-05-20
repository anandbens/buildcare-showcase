import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CLIENTS } from "@/data/clients";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/components/EnquiryDialog";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — Chennai Buildcare Technologies" },
      {
        name: "description",
        content:
          "Trusted by leading brands across automotive, pharma, FMCG, hospitality and infrastructure — see our complete client list.",
      },
      { property: "og:title", content: "Our Clients — Chennai Buildcare Technologies" },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  const { open } = useEnquiry();
  const sectors = Array.from(new Set(CLIENTS.map((c) => c.sector))).sort();

  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title="Trusted by leaders across industries."
        subtitle="We've worked as specialised contractors and vendors for some of the most respected names in Indian and international industry."
      />

      <section className="py-16">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CLIENTS.map((c) => (
              <div
                key={c.name}
                className="group relative aspect-[3/2] rounded-2xl border bg-white flex flex-col items-center justify-between p-4 shadow-sm hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="flex-1 w-full flex items-center justify-center">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    className="max-h-[70%] max-w-[85%] w-auto h-auto object-contain"
                  />
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground text-center">
                  {c.sector}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container-x">
          <h2 className="text-2xl md:text-3xl font-bold">Industries we serve</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {sectors.map((s) => (
              <span key={s} className="rounded-full bg-card border px-4 py-2 text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Add your name to our client roster.</h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            From a single site repair to multi-location flooring contracts — we'd love to be your
            construction chemical partner.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
            <Button variant="brand" size="lg" onClick={() => open()}>
              Request a consultation
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">See our work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

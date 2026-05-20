import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Award, Target, Eye, Wrench, ShieldCheck, Users, ArrowRight } from "lucide-react";
import heroCover from "@/assets/brand/hero-cover.jpg";
import badge from "@/assets/brand/25years.jpg";

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

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Since 1998"
        title="Engineering trust into every square metre."
        subtitle="Chennai Buildcare Technologies is a professional civil engineering company specialising in world-class, economical and sustainable construction chemical solutions."
        image={heroCover}
      />

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Our story</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              25 years of pioneering innovative concrete solutions.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Chennai Buildcare Technologies is a name synonymous with world-class, innovative
              concrete solutions that are economical and score high on the sustainability front.
              Established in 1998, the company has made rapid inroads into the market with a varied
              spectrum of services — waterproofing, repairs and rehabilitation, epoxy / PU flooring,
              concrete grinding and polishing, grouting, and acid-proof treatments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              What makes us stand apart is a team of qualified, skilled technicians and a top
              management team of qualified civil engineers with highly specialised experience. A
              systematic approach — understanding the client's unique requirements, working out a
              solution through thorough analysis and finally professional implementation — has
              powered our climb to the top of the industry.
            </p>
          </div>
          <div className="lg:col-span-5">
            <img src={badge} alt="25 years celebration" className="mx-auto h-64 w-64 object-contain" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
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
          ].map((v) => (
            <div key={v.t} className="rounded-2xl bg-card border p-8 hover:shadow-elegant transition">
              <v.icon className="h-9 w-9 text-brand" />
              <h3 className="mt-4 text-xl font-semibold">{v.t}</h3>
              <p className="mt-2 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Infrastructure</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">State-of-the-art tools & equipment.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The top management of Chennai Buildcare Technologies are firm believers in investing
              in the latest technologies and constant up-gradation at regular intervals. We utilise
              the most modern and sophisticated tools and equipment for executing industrial
              flooring, waterproofing, repair & rehabilitation, grouting and acid-proof treatments.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {EQUIPMENT.map((e) => (
              <div key={e} className="flex items-start gap-2 rounded-lg border bg-card px-4 py-3 text-sm">
                <Wrench className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                <span>{e}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-x grid md:grid-cols-3 gap-8">
          {[
            { icon: Users, n: "Skilled Workforce", d: "Trained engineers, technicians and applicators." },
            { icon: ShieldCheck, n: "Safety First", d: "Stringent compliance with site safety standards." },
            { icon: Award, n: "Proven Record", d: "Prestigious projects across India and abroad." },
          ].map((b) => (
            <div key={b.n} className="flex gap-4">
              <b.icon className="h-10 w-10 text-brand shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">{b.n}</h3>
                <p className="mt-1 text-primary-foreground/80 text-sm">{b.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-x text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Let's build something that lasts.</h2>
          <p className="mt-3 text-muted-foreground">
            Talk to our civil engineers about your project specification.
          </p>
          <Button asChild variant="brand" size="lg" className="mt-6">
            <Link to="/contact">Get in touch <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}

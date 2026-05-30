import { PageHero } from "@/components/PageHero";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { CATEGORIES } from "@/data/projects";

const OFFICES = [
  {
    city: "Coimbatore — Head Office",
    address: "S4, B Block, PGP Village, Singanallur, Coimbatore 641005",
  },
  {
    city: "Chennai — Branch",
    address: "No 16/12, NSK 3rd Street, Lakshmipuram, Thiruvanmiyur, Chennai 600041",
  },
  {
    city: "Tirupur — Branch",
    address: "14/15, Municipal Colony, College Road, Tirupur 641602",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Helmet><title>{"Contact — Chennai Buildcare Technologies"}</title><meta name="description" content={"Visit or call our Chennai, Coimbatore and Tirupur offices. Send us a project enquiry and our civil engineers will respond within 24 hours."} /><meta property="og:title" content={"Contact Chennai Buildcare Technologies"} /></Helmet>
      
      <PageHero
        eyebrow="Contact Us"
        title="Let's start your project."
        subtitle="Reach out to any of our offices, or send us your project brief — our civil engineers will respond within 24 hours."
      />

      <section className="py-16">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Our offices</h2>
              <p className="mt-2 text-muted-foreground">
                Three locations across Tamil Nadu — serving projects pan-India.
              </p>
            </div>

            <div className="space-y-4">
              {OFFICES.map((o) => (
                <div key={o.city} className="rounded-2xl border bg-card p-6 hover:shadow-elegant transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center text-brand-foreground shadow-brand shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{o.city}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{o.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-6 space-y-3 shadow-elegant">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand" />
                <a href="tel:+919444018098" className="font-semibold">+91 94440 18098</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand" />
                <a href="tel:+917010342011" className="font-semibold">+91 70103 42011</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand" />
                <a href="mailto:veshiva@gmail.com" className="font-semibold">veshiva@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand" />
                <span className="text-sm text-primary-foreground/90">Mon – Sat · 9:00 AM – 6:30 PM</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-elegant h-fit">
            <h2 className="text-2xl font-bold">Send us an enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your project brief — we'll respond within one business day.
            </p>

            {submitted ? (
              <div className="mt-10 text-center py-10 fade-in-up">
                <CheckCircle2 className="mx-auto h-14 w-14 text-brand" />
                <h3 className="mt-3 text-xl font-semibold">Thank you!</h3>
                <p className="mt-1 text-muted-foreground">We've received your enquiry.</p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="c-name">Full Name *</Label>
                    <Input id="c-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-company">Company</Label>
                    <Input id="c-company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-email">Email *</Label>
                    <Input id="c-email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-phone">Phone *</Label>
                    <Input id="c-phone" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-service">Service Required</Label>
                  <select
                    id="c-service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select a service…</option>
                    {CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-message">Project Details</Label>
                  <Textarea id="c-message" rows={5} placeholder="Location, scope, area, timelines…" />
                </div>
                <Button type="submit" variant="brand" size="lg" className="w-full">
                  Send Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;

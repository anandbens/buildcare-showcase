import { createContext, useContext, useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CATEGORIES } from "@/data/projects";
import { CheckCircle2 } from "lucide-react";

interface EnquiryCtx {
  open: (preset?: { service?: string }) => void;
  close: () => void;
}

const Ctx = createContext<EnquiryCtx | null>(null);

export function useEnquiry() {
  const c = useContext(Ctx);
  if (!c) throw new Error("EnquiryProvider missing");
  return c;
}

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const open: EnquiryCtx["open"] = (preset) => {
    setSubmitted(false);
    setService(preset?.service ?? "");
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/sendmail.php", {
        method: "POST",
        body: formData,
      });
      const text = await response.text();

      if (text.includes("Message Sent")) {
        setSubmitted(true);
        setTimeout(() => setIsOpen(false), 2000);
      } else {
        alert(text);
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-lg p-0 overflow-hidden">
          <div className="bg-gradient-hero text-primary-foreground px-6 py-5">
            <DialogHeader className="text-left">
              <DialogTitle className="text-2xl font-bold text-primary-foreground">
                Request a Free Site Consultation
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/80">
                Tell us about your project — our civil engineers respond within 24 hours.
              </DialogDescription>
            </DialogHeader>
          </div>

          {submitted ? (
            <div className="px-6 py-10 text-center fade-in-up">
              <CheckCircle2 className="mx-auto h-14 w-14 text-brand" />
              <h3 className="mt-3 text-xl font-semibold">Thank you!</h3>
              <p className="mt-1 text-muted-foreground">
                Your enquiry has been received. We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form className="px-6 py-5 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" placeholder="Company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" name="phone" required placeholder="+91" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Required</Label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="">Select a service…</option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Location, scope, approx. area, timelines…"
                />
              </div>
              <Button type="submit" size="lg" variant="brand" className="w-full" disabled={isSubmitting}>
                Send Enquiry
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </Ctx.Provider>
  );
}

export function FloatingEnquiryButton() {
  const { open } = useEnquiry();
  return (
    <button
      onClick={() => open()}
      aria-label="Quick Inquiry"
      className="fixed right-0 top-1/2 z-40 -translate-y-1/2 origin-right -rotate-90 translate-x-[calc(50%-1.25rem)] rounded-t-xl bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-primary-foreground shadow-[0_8px_24px_-6px_rgba(15,23,42,0.4)] ring-1 ring-white/10 hover:bg-primary/90 hover:shadow-[0_12px_28px_-6px_rgba(15,23,42,0.5)] transition-all duration-300"
    >
      Quick Inquiry
    </button>
  );
}

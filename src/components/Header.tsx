import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/components/EnquiryDialog";
import logo from "@/assets/brand/logo.jpg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Our Projects" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { open: openEnquiry } = useEnquiry();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <>
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container-x flex items-center justify-between py-2">
          <div className="flex gap-5 opacity-90">
            <span>25 Years of Excellence · 1998 – 2023</span>
            <span>·</span>
            <span>ISO Driven Quality Systems</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919444018098" className="flex items-center gap-1.5 hover:text-brand">
              <Phone className="h-3 w-3" /> +91 94440 18098
            </a>
            <a href="tel:+917010342011" className="flex items-center gap-1.5 hover:text-brand">
              <Phone className="h-3 w-3" /> +91 70103 42011
            </a>
            <a href="mailto:veshiva@gmail.com" className="hover:text-brand">
              veshiva@gmail.com
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b">
        <div className="container-x flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Chennai Buildcare Technologies" className="h-12 w-12 rounded object-contain bg-white" />
            <div className="leading-tight">
              <div className="font-display font-bold text-primary text-lg">Chennai Buildcare</div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Technologies</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => {
              const active = n.to === "/" ? pathname === "/" : pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-brand" : "text-foreground hover:text-brand"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button variant="brand" onClick={() => openEnquiry()}>
              Get a Quote
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t bg-background">
            <nav className="container-x py-3 flex flex-col">
              {NAV.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b last:border-0 text-sm font-medium"
                >
                  {n.label}
                </Link>
              ))}
              <Button
                variant="brand"
                className="mt-3"
                onClick={() => {
                  setOpen(false);
                  openEnquiry();
                }}
              >
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

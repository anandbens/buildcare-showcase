import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/components/EnquiryDialog";
import logo from "@/assets/brand/logo.jpg";
import badge15 from "@/assets/brand/15years.png";

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
  const { pathname } = useLocation();

  return (
    <>
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container-x flex items-center justify-between py-2">
          <div className="flex gap-5 opacity-90">
            <span>15 Years of Excellence Since 2011</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919444018098" className="flex items-center gap-1.5 hover:text-brand">
              <Phone className="h-3 w-3" /> +91 94440 18098
            </a>
            <a href="tel:+917010342011" className="flex items-center gap-1.5 hover:text-brand">
              <Phone className="h-3 w-3" /> +91 70103 42011
            </a>
            <a href="mailto:veshiva@gmail.com" className="flex items-center gap-1.5 hover:text-brand">
              <Mail className="h-3 w-3" /> veshiva@gmail.com
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

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="brand" onClick={() => openEnquiry()}>
              Get a Quote
            </Button>
            <img
              src={badge15}
              alt="15 Years Celebration 2011-2026"
              className="h-14 w-14 rounded-full object-contain bg-white ring-2 ring-brand/30 p-0.5 shrink-0"
            />
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

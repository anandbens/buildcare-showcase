import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/brand/logo.jpg";
import { CATEGORIES } from "@/data/projects";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-x py-16 grid gap-10 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="CBT" className="h-12 w-12 rounded bg-white object-contain" />
            <div className="leading-tight">
              <div className="font-display font-bold text-lg">Chennai Buildcare</div>
              <div className="text-xs uppercase tracking-widest opacity-70">Technologies</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            Pioneering innovative concrete solutions since 1998. World-class waterproofing,
            industrial flooring, polished concrete and structural rehabilitation services.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {CATEGORIES.slice(0, 6).map((c) => (
              <li key={c}>
                <Link to="/services" className="opacity-80 hover:opacity-100 hover:text-brand transition">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-brand">About Us</Link></li>
            <li><Link to="/projects" className="opacity-80 hover:opacity-100 hover:text-brand">Our Projects</Link></li>
            <li><Link to="/clients" className="opacity-80 hover:opacity-100 hover:text-brand">Clients</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-brand">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-brand">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm opacity-90">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
              <span>No 16/12, NSK 3rd Street, Lakshmipuram, Thiruvanmiyur, Chennai 600041</span>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand" />
              <span>S4, B Block, PGP Village, Singanallur, Coimbatore 641005</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-brand" aria-hidden="true" />
              <a href="tel:+910000000000" className="hover:text-brand">+91 00000 00000</a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-brand" aria-hidden="true" />
              <a href="mailto:info@chennaibuildcare.com" className="hover:text-brand">info@chennaibuildcare.com</a>
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
          >
            Visit our offices <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-70">
          <span>© {new Date().getFullYear()} Chennai Buildcare Technologies. All rights reserved.</span>
          <span>Crafted with engineering precision.</span>
        </div>
      </div>
    </footer>
  );
}

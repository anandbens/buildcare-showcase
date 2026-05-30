import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CLIENTS } from "@/data/clients";
import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/components/EnquiryDialog";
import {
  Sparkles,
  Users,
  Factory,
  Repeat,
  ArrowUpRight,
  Building2,
  Car,
  Pill,
  ShoppingBag,
  Hotel,
  Cpu,
  HeartPulse,
  GraduationCap,
  Wheat,
  Hammer,
  Zap,
  Shirt,
  Phone,
  Home,
  Briefcase,
} from "lucide-react";

const SECTOR_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Automotive: Car,
  Pharma: Pill,
  FMCG: ShoppingBag,
  Hospitality: Hotel,
  Electronics: Cpu,
  Healthcare: HeartPulse,
  Education: GraduationCap,
  Agribusiness: Wheat,
  Construction: Hammer,
  "Power & Automation": Zap,
  Textiles: Shirt,
  "Medical Textiles": Shirt,
  Telecom: Phone,
  "Real Estate": Home,
  Infrastructure: Building2,
  Industrial: Factory,
  Dairy: Wheat,
  Steel: Factory,
  "Steel & Energy": Factory,
  "Consumer Appliances": ShoppingBag,
};

function getSectorIcon(sector: string) {
  return SECTOR_ICONS[sector] ?? Briefcase;
}

function ClientsPage() {
  const { open } = useEnquiry();
  const sectors = Array.from(new Set(CLIENTS.map((c) => c.sector))).sort();

  return (
    <>
      <Helmet><title>{"Our Clients — Chennai Buildcare Technologies"}</title><meta name="description" content={"Trusted by leading brands across automotive, pharma, FMCG, hospitality and infrastructure — see our complete client list."} /><meta property="og:title" content={"Our Clients — Chennai Buildcare Technologies"} /></Helmet>
      
      {/* === HERO === */}
      <section className="relative isolate overflow-hidden bg-[#0b1220] text-white">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-32 -right-20 h-[520px] w-[520px] rounded-full bg-brand/30 blur-[160px]" />
        <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[160px]" />

        <div className="relative container-x py-16 md:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand ring-1 ring-white/15 fade-in-up">
              <Sparkles className="h-3.5 w-3.5" /> Our Clients
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance fade-in-up">
              Trusted by leaders.
              <br />
              <span className="text-brand">Across every industry.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 fade-in-up">
              We've partnered as specialised contractors with some of the most respected names in
              Indian and international industry — from Fortune 500 manufacturers to landmark
              hospitality brands.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl fade-in-up">
            <StatCard icon={Users} value={`${CLIENTS.length}+`} label="Happy Clients" />
            <StatCard icon={Factory} value={`${sectors.length}+`} label="Industries Served" />
            <StatCard icon={Repeat} value="92%" label="Client Retention" />
          </div>
        </div>
      </section>

      {/* === LOGO GRID === */}
      <section className="relative bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,.04) 1px,transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-40 right-10 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[140px] pointer-events-none" />

        <div className="relative container-x">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand ring-1 ring-brand/20">
              <Building2 className="h-3.5 w-3.5" /> Client Roster
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Brands that build with us.
            </h2>
            <p className="mt-3 text-slate-600">
              A snapshot of the organisations that rely on Chennai Buildcare for mission-critical
              construction chemical solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {CLIENTS.map((c, i) => (
              <div
                key={c.name}
                className="group relative aspect-[4/3] rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-slate-200/70 shadow-[0_4px_20px_-12px_rgba(15,23,42,0.15)] hover:shadow-[0_20px_40px_-16px_rgba(234,140,46,0.35)] hover:-translate-y-1.5 hover:ring-brand/30 transition-all duration-500 overflow-hidden fade-in-up"
                style={{ animationDelay: `${Math.min(i * 30, 600)}ms` }}
              >
                {/* hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/0 via-brand/0 to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full w-full flex items-center justify-center p-5">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    loading="lazy"
                    className="max-h-[70%] max-w-[80%] w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === INDUSTRIES === */}
      <section className="relative py-20 bg-slate-50 overflow-hidden">
        <div className="absolute -top-20 left-1/3 h-[300px] w-[300px] rounded-full bg-brand/10 blur-[120px] pointer-events-none" />

        <div className="relative container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand ring-1 ring-brand/20">
              <Factory className="h-3.5 w-3.5" /> Sectors
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Industries we serve
            </h2>
            <p className="mt-3 text-slate-600">
              Deep specialisation across diversified verticals — built on decades of on-site
              engineering experience.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {sectors.map((s, i) => {
              const Icon = getSectorIcon(s);
              return (
                <span
                  key={s}
                  className="group inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm hover:shadow-[0_10px_24px_-12px_rgba(234,140,46,0.5)] hover:border-brand/40 hover:text-brand hover:-translate-y-0.5 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${Math.min(i * 40, 600)}ms` }}
                >
                  <Icon className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
                  {s}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="relative py-24 bg-[#0b1220] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[680px] rounded-full bg-brand/20 blur-[160px]" />

        <div className="relative container-x">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f59e3a] to-[#e07016] shadow-[0_18px_40px_-12px_rgba(234,140,46,0.6)] mb-6">
              <Sparkles className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Add your name to our <span className="text-brand">client roster</span>.
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
              From a single site repair to multi-location flooring contracts — we'd love to be your
              construction chemical partner.
            </p>
            <div className="mt-8 flex justify-center gap-3 flex-wrap">
              <Button
                size="lg"
                onClick={() => open()}
                className="bg-gradient-to-br from-[#f59e3a] to-[#e07016] hover:from-[#f7ad55] hover:to-[#ea8730] text-white shadow-[0_14px_32px_-10px_rgba(234,140,46,0.7)] hover:shadow-[0_20px_40px_-10px_rgba(234,140,46,0.9)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Request a consultation
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur"
              >
                <Link to="/projects">See our work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}) {
  return (
    <div className="group relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-5 hover:bg-white/[0.08] hover:border-brand/30 transition-all duration-500 overflow-hidden">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand/30 to-brand/10 ring-1 ring-brand/30">
          <Icon className="h-5 w-5 text-brand" />
        </div>
        <div>
          <div className="text-2xl md:text-3xl font-bold tracking-tight">{value}</div>
          <div className="text-xs uppercase tracking-[0.15em] text-white/60 mt-0.5">{label}</div>
        </div>
      </div>
    </div>
  );
}

export default ClientsPage;

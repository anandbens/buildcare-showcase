import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, eyebrow, image, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      {image && (
        <div className="absolute inset-0 opacity-25">
          <img src={image} alt="" className="h-full w-full object-cover animate-kenburns" />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
      <div className="relative container-x py-24 md:py-32 text-primary-foreground">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand ring-1 ring-brand/40 fade-in-up">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-balance fade-in-up">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85 fade-in-up">{subtitle}</p>
        )}
        {children && <div className="mt-8 fade-in-up">{children}</div>}
      </div>
    </section>
  );
}

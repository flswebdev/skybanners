import { ClipboardList, PenLine, Palette, Wind, ArrowRight } from "lucide-react";
import { ALL_SERVICES } from "@/lib/constants";

const iconMap = { ClipboardList, PenLine, Palette, Wind } as const;

interface CrossPromoSectionProps {
  currentSlug: string;
}

export function CrossPromoSection({ currentSlug }: CrossPromoSectionProps) {
  const others = ALL_SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted mb-6">
          Other Services
        </p>
        <div className="divide-y divide-card-border border-y border-card-border">
          {others.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center justify-between gap-6 py-5 group"
              >
                <div className="flex items-center gap-4">
                  <Icon className="h-5 w-5 text-red shrink-0" />
                  <div>
                    <span className="font-semibold text-heading group-hover:text-red transition-colors">
                      {service.title}
                    </span>
                    <p className="text-sm text-muted">{service.description}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted group-hover:text-red transition-colors shrink-0" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

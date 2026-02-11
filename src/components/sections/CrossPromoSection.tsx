import { ClipboardList, PenLine, Palette, Wind } from "lucide-react";
import { Card } from "@/components/ui";
import { ALL_SERVICES } from "@/lib/constants";

const iconMap = { ClipboardList, PenLine, Palette, Wind } as const;

interface CrossPromoSectionProps {
  currentSlug: string;
}

export function CrossPromoSection({ currentSlug }: CrossPromoSectionProps) {
  const others = ALL_SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section className="py-20 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Explore Our Other Services
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Not sure which format is right? Explore all our aerial advertising
            options and find the perfect fit for your campaign.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {others.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <a key={service.slug} href={`/services/${service.slug}`}>
                <Card glow className="h-full">
                  <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

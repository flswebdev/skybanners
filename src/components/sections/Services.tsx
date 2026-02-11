import { ClipboardList, PenLine, Palette, Wind, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  ClipboardList,
  PenLine,
  Palette,
  Wind,
} as const;

export function Services() {
  return (
    <section id="services" className="py-20 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Our Services
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Custom aerial advertising solutions for every occasion
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card key={service.title} glow>
                <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {service.description}
                </p>
                {"href" in service && (
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-red hover:text-red/80 transition-colors"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

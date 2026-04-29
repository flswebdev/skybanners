import { ClipboardList, PenLine, Palette, Wind, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  ClipboardList,
  PenLine,
  Palette,
  Wind,
} as const;

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
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
            const hasBadge = "badge" in service && service.badge;
            const customIcon = (service as { customIcon?: string }).customIcon;
            const largeIcon = (service as { largeIcon?: boolean }).largeIcon;
            return (
              <div key={service.title} className="group relative border border-card-border bg-white p-6 hover:-translate-y-0.5 hover:border-muted/30 hover:shadow-md transition-all duration-200">
                {hasBadge && (
                  <div className="absolute -top-2.5 left-4">
                    <span className="inline-flex items-center rounded-full bg-red px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {service.badge}
                    </span>
                  </div>
                )}
                {customIcon ? (
                  <div className="h-12 w-full mb-4">
                    <img
                      src={customIcon}
                      alt={service.title}
                      className="h-full w-auto object-contain mx-auto"
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-lg bg-red/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-red" />
                  </div>
                )}
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

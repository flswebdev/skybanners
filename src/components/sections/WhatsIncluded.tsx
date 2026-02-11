import { Ruler, Map, Camera, Smartphone, BarChart3, Target } from "lucide-react";
import { Card } from "@/components/ui";
import { INCLUSIONS } from "@/lib/constants";

const iconMap = {
  Ruler,
  Map,
  Camera,
  Smartphone,
  BarChart3,
  Target,
} as const;

export function WhatsIncluded() {
  return (
    <section className="py-20 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Every Campaign Includes
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Premium service with complete documentation and analytics
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INCLUSIONS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Card key={item.title} glow>
                <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

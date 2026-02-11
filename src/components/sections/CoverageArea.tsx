import { Waves, Trophy, Tent, Building2, Info, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui";
import { COVERAGE_AREAS, FLIGHT_INFO } from "@/lib/constants";

const iconMap = {
  Waves,
  Trophy,
  Tent,
  Building2,
} as const;

export function CoverageArea() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            We Serve Southern Ontario
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Strategic coverage across beaches, festivals, stadiums, and
            high-traffic urban areas
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coverage grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {COVERAGE_AREAS.map((area) => {
              const Icon = iconMap[area.icon];
              return (
                <Card key={area.title} glow>
                  <div className="h-12 w-12 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {area.description}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Flight info panel */}
          <Card className="bg-background-alt border-blue/20">
            <div className="flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-blue" />
              <h3 className="text-lg font-semibold text-heading">
                Flight Information
              </h3>
            </div>
            <ul className="space-y-4">
              {FLIGHT_INFO.map((item) => (
                <li key={item.label}>
                  <span className="block text-sm font-semibold text-blue">
                    {item.label}
                  </span>
                  <span className="text-sm text-muted">{item.value}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <div className="text-center mt-8">
          <a
            href="/locations"
            className="inline-flex items-center gap-1 text-sm font-medium text-red hover:text-red/80 transition-colors"
          >
            See All Locations <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

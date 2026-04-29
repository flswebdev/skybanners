import { Info } from "lucide-react";
import { COVERAGE_AREAS, FLIGHT_INFO } from "@/lib/constants";


export function CoverageArea() {
  return (
    <section className="py-20 bg-background-alt relative overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#111827 1px, transparent 1px), linear-gradient(to right, #111827 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            We Serve Southern Ontario
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Strategic coverage across beaches, festivals, stadiums, and
            high-traffic urban areas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-stretch">
          {/* Photo */}
          <div className="rounded-none overflow-hidden relative bg-gray-100 border border-card-border flex items-center justify-center min-h-[320px]">
            <img
              src="/images/coverage-banner.jpg"
              alt="Aerial banner over Southern Ontario"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Coverage list */}
          <div className="flex flex-col justify-center divide-y divide-card-border">
            {COVERAGE_AREAS.map((area) => (
              <div key={area.title} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-base font-semibold text-heading mb-1">{area.title}</h3>
                <p className="text-base text-muted leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flight info strip */}
        <div className="rounded-none border border-card-border bg-white p-6">
          <div className="flex items-center gap-2 mb-5">
            <Info className="h-4 w-4 text-blue" />
            <h3 className="text-sm font-semibold text-heading uppercase tracking-widest">
              Flight Information
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {FLIGHT_INFO.map((item) => (
              <div key={item.label}>
                <span className="block text-xs font-semibold text-blue uppercase tracking-wide mb-1">
                  {item.label}
                </span>
                <span className="text-sm text-muted leading-snug">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

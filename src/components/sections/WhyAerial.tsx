import { Target, MapPin, Smartphone, Sparkles, ArrowRight } from "lucide-react";
import { BENEFITS } from "@/lib/constants";

const iconMap = {
  Target,
  MapPin,
  Smartphone,
  Sparkles,
} as const;

export function WhyAerial() {
  return (
    <section id="why-aerial" className="py-20 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-light mb-5">
            The Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Aerial Advertising Works
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Cut through the noise with sky-high visibility
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div key={benefit.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-200">
                <div className="h-12 w-12 rounded-lg bg-blue/20 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-light" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <a
            href="/why-aerial"
            className="inline-flex items-center gap-1 text-sm font-medium text-red hover:text-red/80 transition-colors"
          >
            See the Full Data <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

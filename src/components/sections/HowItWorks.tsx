import { MessageSquare, Palette, Plane, BarChart3, ArrowRight } from "lucide-react";
import { STEPS } from "@/lib/constants";

const iconMap = {
  MessageSquare,
  Palette,
  Plane,
  BarChart3,
} as const;

export function HowItWorks() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-red/30 bg-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red mb-5">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            From concept to sky-high impact in four simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.number}
                className="relative rounded-xl border border-white/10 bg-white/5 p-6 hover:-translate-y-0.5 hover:border-white/20 transition-all duration-200"
              >
                <div className="text-5xl font-extrabold text-white/8 absolute top-4 right-4 select-none">
                  {step.number}
                </div>
                <div className="h-12 w-12 rounded-lg bg-red/20 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-red" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-1 text-sm font-medium text-red hover:text-red/80 transition-colors"
          >
            See the Full Process <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

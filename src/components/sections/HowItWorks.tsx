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
    <section className="py-20 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            How It Works
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            From concept to sky-high impact in four simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <div
                key={step.number}
                className="relative rounded-xl border border-card-border bg-card p-6 shadow-sm"
              >
                <div className="text-5xl font-extrabold text-card-border/60 absolute top-4 right-4">
                  {step.number}
                </div>
                <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-red" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
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

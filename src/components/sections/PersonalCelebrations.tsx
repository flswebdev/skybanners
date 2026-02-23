import { Heart, Baby, Cake, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { CELEBRATIONS } from "@/lib/constants";

const iconMap = {
  Heart,
  Baby,
  Cake,
  Mail,
} as const;

export function PersonalCelebrations() {
  return (
    <section id="personal" className="py-20 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — headline + CTA */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-light mb-6">
              Personal Celebrations
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Make Your<br />Special Moment<br />
              <span className="text-blue-light">Stand Out</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
              We&apos;ve helped create incredible moments for proposals, weddings,
              gender reveals, and personal celebrations. Your message in the sky
              creates memories that last a lifetime.
            </p>
            <Button href="/personal" variant="primary" size="large">
              Plan Your Moment <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right — occasion list */}
          <div className="divide-y divide-white/10">
            {CELEBRATIONS.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div key={item.title} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                  <Icon className="h-5 w-5 text-blue-light mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

import { Heart, Baby, Cake, Mail, Target, Trophy, PartyPopper, Share2, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui";
import { CELEBRATIONS, BUSINESS_SOLUTIONS, FLIGHT_DURATIONS } from "@/lib/constants";

const personalIcons = { Heart, Baby, Cake, Mail } as const;
const businessIcons = { Target, Trophy, PartyPopper, Share2 } as const;

export function AudienceSplit() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

          {/* B2C — Personal */}
          <div className="py-20 lg:pr-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue/30 bg-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-light mb-6">
              Personal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Make Your Special<br />
              <span className="text-blue-light">Moment Stand Out</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
              We&apos;ve helped create incredible moments for proposals, weddings,
              gender reveals, and personal celebrations. Your message in the sky
              creates memories that last a lifetime.
            </p>

            <div className="divide-y divide-white/10 mb-10">
              {CELEBRATIONS.map((item) => {
                const Icon = personalIcons[item.icon as keyof typeof personalIcons];
                return (
                  <div key={item.title} className="flex items-start gap-4 py-5 first:pt-0">
                    <Icon className="h-4 w-4 text-blue-light mt-1 shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-0.5">{item.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Flight durations */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-blue-light shrink-0" />
                <span className="text-sm font-semibold text-white/80">Flight Duration Options</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {FLIGHT_DURATIONS.filter((d) => d.value !== "custom").map((dur) => (
                  <div
                    key={dur.value}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center"
                  >
                    <span className="text-white/70 font-medium text-xs">{dur.label}</span>
                  </div>
                ))}
                <div className="rounded-lg border border-blue/20 bg-blue/10 px-3 py-2 text-center">
                  <span className="text-blue-light font-medium text-xs">Custom</span>
                </div>
              </div>
            </div>

            <Button href="/personal" variant="primary" size="large">
              Plan Your Moment <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* B2B — Business */}
          <div className="py-20 lg:pl-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-red/30 bg-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red mb-6">
              Business
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Amplify Your<br />
              <span className="text-red">Brand Message</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
              Partner with us to create memorable marketing moments. Our aerial
              advertising services help agencies and brands stand out with
              campaigns that get people talking and deliver real results.
            </p>

            <div className="divide-y divide-white/10 mb-10">
              {BUSINESS_SOLUTIONS.map((item) => {
                const Icon = businessIcons[item.icon as keyof typeof businessIcons];
                return (
                  <div key={item.title} className="flex items-start gap-4 py-5 first:pt-0">
                    <Icon className="h-4 w-4 text-red mt-1 shrink-0" />
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-0.5">{item.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button href="/business" variant="outline" size="large" className="border-white/20 text-white hover:bg-white/10 hover:border-white/40">
              Explore Business Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

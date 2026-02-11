import type { Metadata } from "next";
import {
  Sparkles, Baby, Palette, Layers,
  Heart, Trophy, PartyPopper, Building2, GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Button, Card } from "@/components/ui";
import { ServiceHero, SpecsTable, CrossPromoSection } from "@/components/sections";
import {
  SMOKE_PAGE,
  SMOKE_SPECS,
  SMOKE_BENEFITS,
  SMOKE_USE_CASES,
  SMOKE_COLORS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Smoke Displays | Sky Banners",
  description:
    "Coloured smoke displays in 8 colours for gender reveals, celebrations, and events. Standalone or as an add-on to any banner flight. Southern Ontario.",
};

const benefitIcons = { Sparkles, Baby, Palette, Layers } as const;
const useCaseIcons = { Baby, Heart, Trophy, PartyPopper, Building2, GraduationCap } as const;

export default function SmokeDisplaysPage() {
  return (
    <main>
      <ServiceHero {...SMOKE_PAGE} />

      {/* What It Is + Specs */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                What Are Smoke Displays?
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Smoke displays release coloured smoke trails from an aircraft
                as it flies over your event or celebration. The result is a
                dramatic, sky-spanning display of colour visible for miles in
                clear conditions.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Most popular for gender reveals, smoke displays are available in
                8 colours and can be booked as a standalone service or added to
                any banner flight for extra drama.
              </p>
              <p className="text-muted leading-relaxed">
                Combine a &ldquo;It&apos;s a Boy!&rdquo; letter banner with blue
                smoke for our most popular personal package.
              </p>
            </div>
            <div className="space-y-6">
              <SpecsTable title="Smoke Display Specs" specs={SMOKE_SPECS} />
              <div className="rounded-xl border border-card-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold text-heading mb-4">
                  Available Colours
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {SMOKE_COLORS.map((smoke) => (
                    <div key={smoke.color} className="text-center">
                      <div
                        className="w-14 h-14 rounded-full mx-auto mb-2 border-2 border-card-border shadow-md"
                        style={{ backgroundColor: smoke.hex }}
                      />
                      <span className="text-xs text-muted font-medium">
                        {smoke.color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Why Choose Smoke Displays?
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Nothing creates a spectacle quite like coloured smoke in the sky.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SMOKE_BENEFITS.map((item) => {
              const Icon = benefitIcons[item.icon as keyof typeof benefitIcons];
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

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Ideal For
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Smoke displays add spectacle and emotion to any outdoor event.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SMOKE_USE_CASES.map((item) => {
              const Icon = useCaseIcons[item.icon as keyof typeof useCaseIcons];
              return (
                <Card key={item.title} glow>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-heading mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Promo */}
      <CrossPromoSection currentSlug="smoke-displays" />

      {/* CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a <span className="text-red">Smoke Display</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Book a coloured smoke display for your gender reveal, celebration,
            or event. As fast as 48-hour turnaround.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#contact" variant="primary" size="large">
              Book Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="tel:1-877-759-2266" variant="outline" size="large" className="border-white/20 text-white hover:bg-white/10">
              Call 1-877-SKY-BANNER
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

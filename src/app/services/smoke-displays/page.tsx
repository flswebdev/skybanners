import type { Metadata } from "next";
import Image from "next/image";
import {
  Sparkles, Baby, Palette, Layers,
  Heart, Trophy, PartyPopper, Building2, GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui";
import { ServiceHero, SpecsTable, CrossPromoSection } from "@/components/sections";
import { GenderRevealCallout } from "./GenderRevealCallout";
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
    "Coloured smoke displays in pink or blue for gender reveals, celebrations, and events. Standalone or as an add-on to any banner flight. Southern Ontario.",
};

const benefitIcons = { Sparkles, Baby, Palette, Layers } as const;
const useCaseIcons = { Baby, Heart, Trophy, PartyPopper, Building2, GraduationCap } as const;

export default function SmokeDisplaysPage() {
  return (
    <main>
      <ServiceHero {...SMOKE_PAGE} video="/videos/smoke-hero.mp4" />

      {/* What It Is + Image */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                pink or blue and can be booked as a standalone service or added to
                any banner flight for extra drama.
              </p>
              <GenderRevealCallout />
            </div>
            <div className="overflow-hidden shadow-lg">
              <Image
                src="/smoke-display-1.jpg"
                alt="Coloured smoke display from aircraft"
                width={1920}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Specs + Colours below */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden shadow-lg h-full order-last lg:order-first">
              <Image
                src="/smoke-display-2.jpg"
                alt="Smoke display aerial view"
                width={1920}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <SpecsTable title="Smoke Display Specs" specs={SMOKE_SPECS} />
              <div className="mt-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                  Available Colours
                </h3>
                <div className="flex gap-6">
                  {SMOKE_COLORS.map((smoke) => (
                    <div key={smoke.color} className="text-center">
                      <div
                        className="w-12 h-12 rounded-full mx-auto mb-2"
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

      {/* Benefits + Use Cases */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-8">
              Why Choose Smoke Displays?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {SMOKE_BENEFITS.map((item) => {
                const Icon = benefitIcons[item.icon as keyof typeof benefitIcons];
                return (
                  <div key={item.title}>
                    <div className="h-10 w-10 rounded-lg bg-red/10 flex items-center justify-center mb-3">
                      <Icon className="h-5 w-5 text-red" />
                    </div>
                    <h3 className="text-base font-semibold text-heading mb-1">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-card-border pt-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-8">Ideal For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {SMOKE_USE_CASES.map((item) => {
                const Icon = useCaseIcons[item.icon as keyof typeof useCaseIcons];
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <Icon className="h-5 w-5 text-blue mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-base font-semibold text-heading mb-0.5">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
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
              Book a Smoke Display <ArrowRight className="ml-2 h-4 w-4" />
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

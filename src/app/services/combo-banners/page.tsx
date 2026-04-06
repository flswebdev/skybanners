import type { Metadata } from "next";
import Image from "next/image";
import {
  Layers, TrendingUp, Share2, Award,
  Building2, Megaphone, Trophy, Heart, Store, Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui";
import { ServiceHero, SpecsTable, CrossPromoSection } from "@/components/sections";
import {
  COMBO_PAGE,
  COMBO_SPECS,
  COMBO_BENEFITS,
  COMBO_USE_CASES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Combo Banners | Sky Banners",
  description:
    "Billboard + letter combo banners combine full-colour printed graphics with bold text messaging. The highest-engagement aerial format. Southern Ontario.",
};

const benefitIcons = { Layers, TrendingUp, Share2, Award } as const;
const useCaseIcons = { Building2, Megaphone, Trophy, Heart, Store, Calendar } as const;

export default function ComboBannersPage() {
  return (
    <main>
      <ServiceHero {...COMBO_PAGE} video="/videos/gender-reveal-hero.mp4#t=36" />

      {/* What It Is + Image */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                What Are Combo Banners?
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Combo banners combine a full-colour printed billboard graphic
                with bold letter text in a single aerial banner. Your brand logo,
                product image, or custom artwork flies alongside a text
                message&mdash;delivering both visual impact and a clear call to
                action.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                This format produces the highest engagement rates of any aerial
                advertising option. People process both the visual and the text
                simultaneously, creating stronger recall and more social media
                shares.
              </p>
              <p className="text-muted leading-relaxed">
                Combo banners are our most popular format&mdash;perfect for campaigns
                where you need both branding and messaging in a single pass.
              </p>
            </div>
            <div className="overflow-hidden shadow-lg">
              <Image
                src="/combo-banner-1.jpg"
                alt="Combo banner aerial advertising"
                width={1920}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Specs below */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden shadow-lg h-full order-last lg:order-first">
              <Image
                src="/combo-banner-2.jpg"
                alt="Combo banner in flight"
                width={1920}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <SpecsTable title="Combo Banner Specs" specs={COMBO_SPECS} />
          </div>
        </div>
      </section>

      {/* Benefits + Use Cases */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-8">
              Why Choose Combo Banners?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {COMBO_BENEFITS.map((item) => {
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
              {COMBO_USE_CASES.map((item) => {
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
      <CrossPromoSection currentSlug="combo-banners" />

      {/* CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a <span className="text-red">Combo Banner</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            The best of both worlds. Get a custom quote for your billboard +
            letter combo banner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#contact" variant="primary" size="large">
              Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
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

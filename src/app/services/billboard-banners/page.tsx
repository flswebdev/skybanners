import type { Metadata } from "next";
import {
  Palette, Eye, Camera, Award,
  Building2, Megaphone, Store, Clapperboard, Heart, Trophy,
  ArrowRight,
} from "lucide-react";
import { Button, Card } from "@/components/ui";
import { ServiceHero, SpecsTable, CrossPromoSection } from "@/components/sections";
import {
  BILLBOARD_PAGE,
  BILLBOARD_SPECS,
  BILLBOARD_BENEFITS,
  BILLBOARD_USE_CASES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Billboard Banners | Sky Banners",
  description:
    "Full-colour printed aerial banners with your logo, branding, and custom designs. Maximum visual impact for brand recognition from the sky. Southern Ontario.",
};

const benefitIcons = { Palette, Eye, Camera, Award } as const;
const useCaseIcons = { Building2, Megaphone, Store, Clapperboard, Heart, Trophy } as const;

export default function BillboardBannersPage() {
  return (
    <main>
      <ServiceHero {...BILLBOARD_PAGE} />

      {/* What It Is + Specs */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                What Are Billboard Banners?
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Billboard banners are large-format, full-colour printed banners
                towed behind an aircraft. Unlike letter banners (which use
                individual characters), billboard banners display your complete
                artwork&mdash;logos, photos, gradients, and custom designs&mdash;at
                massive scale.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Think of it as a moving billboard in the sky. Your design is
                professionally printed on durable aviation-grade material and
                flies over beaches, stadiums, festivals, and urban areas where
                thousands of people will see it.
              </p>
              <p className="text-muted leading-relaxed">
                We handle everything: design assistance, production, flight
                planning, and professional documentation of your banner in action.
              </p>
            </div>
            <SpecsTable title="Billboard Banner Specs" specs={BILLBOARD_SPECS} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Why Choose Billboard Banners?
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              When your brand needs maximum visual impact, billboard banners
              deliver like no other aerial format.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BILLBOARD_BENEFITS.map((item) => {
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
              Billboard banners work for any campaign that benefits from custom
              visuals and full branding.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BILLBOARD_USE_CASES.map((item) => {
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
      <CrossPromoSection currentSlug="billboard-banners" />

      {/* CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a <span className="text-red">Billboard Banner</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Get a custom quote for your full-colour printed aerial banner.
            Design assistance included.
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

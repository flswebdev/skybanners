import type { Metadata } from "next";
import Image from "next/image";
import {
  Palette, Eye, Camera, Award,
  Building2, Megaphone, Store, Clapperboard, Heart, Trophy,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui";
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
      <ServiceHero {...BILLBOARD_PAGE} video="/videos/billboard-hero.mov" />

      {/* What It Is + Image */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                Full-Colour. Full Scale.
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
            <div className="overflow-hidden shadow-lg">
              <Image
                src="/billboard-banner.jpg"
                alt="Full-colour billboard banner towed behind aircraft"
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
                src="/images/billboard-specs.jpg"
                alt="The Gaslight District billboard banner in flight"
                width={1920}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <SpecsTable title="Billboard Banner Specs" specs={BILLBOARD_SPECS} />
          </div>
        </div>
      </section>

      {/* Benefits + Use Cases */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-8 text-center sm:text-left">
              Built for Maximum Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
              {BILLBOARD_BENEFITS.map((item, i) => (
                <div key={item.title} className="border-t border-card-border py-6 text-center sm:text-left">
                  <span className="text-xs font-bold text-red tracking-widest">0{i + 1}</span>
                  <h3 className="text-base font-semibold text-heading mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-card-border pt-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-8 text-center sm:text-left">Best For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {BILLBOARD_USE_CASES.map((item) => (
                <div key={item.title} className="text-center sm:text-left">
                  <h3 className="text-sm font-semibold text-heading mb-1">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
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
            <Button href="/contact" variant="primary" size="large">
              Get a Billboard Quote <ArrowRight className="ml-2 h-4 w-4" />
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

import type { Metadata } from "next";
import Image from "next/image";
import {
  Zap, DollarSign, Type, Repeat,
  Heart, Megaphone, PartyPopper, Store, TrendingUp, Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui";
import { ServiceHero, SpecsTable, CrossPromoSection } from "@/components/sections";
import {
  LETTER_PAGE,
  LETTER_SPECS,
  LETTER_BENEFITS,
  LETTER_USE_CASES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Letter Banners | Sky Banners",
  description:
    "Bold character banners for aerial text messages. No production cost, quick turnaround. Up to 50 characters. Proposals, promotions, and celebrations in Southern Ontario.",
};

const benefitIcons = { Zap, DollarSign, Type, Repeat } as const;
const useCaseIcons = { Heart, Megaphone, PartyPopper, Store, TrendingUp, Calendar } as const;

export default function LetterBannersPage() {
  return (
    <main>
      <ServiceHero
        {...LETTER_PAGE}
        image={{ src: "/letter-banners-hangar.jpg", alt: "Letter banner segments laid out in the hangar ready for flight" }}
      />

      {/* What It Is + Image */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                What Are Letter Banners?
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Letter banners use individual high-contrast characters attached
                in sequence to spell out your message. Each letter is a separate
                banner segment, creating a bold, easy-to-read text message
                visible from over a kilometre away.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Because letters are reusable inventory&mdash;not custom
                printed&mdash;there&apos;s no production cost and turnaround can be
                as fast as 24&ndash;48 hours. This makes letter banners the most
                affordable and fastest aerial option.
              </p>
              <p className="text-muted leading-relaxed">
                Maximum 40 characters including spaces. Keep your message short
                and punchy — the best aerial messages are read in seconds.
              </p>
            </div>
            <div className="overflow-hidden shadow-lg">
              <Image
                src="/marry-me-wide.jpg"
                alt="Letter banner in the sky — MY JAAN WILL YOU MARRY ME?"
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
                src="/letter-banner-field2.jpg"
                alt="Letter banner segments laid out in a field before flight"
                width={1260}
                height={945}
                className="w-full h-full object-cover"
              />
            </div>
            <SpecsTable title="Letter Banner Specs" specs={LETTER_SPECS} />
          </div>
        </div>
      </section>

      {/* Benefits + Use Cases */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-heading mb-8">
              Why Choose Letter Banners?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {LETTER_BENEFITS.map((item) => {
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
              {LETTER_USE_CASES.map((item) => {
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
      <CrossPromoSection currentSlug="letter-banners" />

      {/* CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a <span className="text-red">Letter Banner</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            No production cost. Quick turnaround. Tell us your message and
            we&apos;ll get it in the sky.
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

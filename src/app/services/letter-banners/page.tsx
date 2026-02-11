import type { Metadata } from "next";
import {
  Zap, DollarSign, Type, Repeat,
  Heart, Megaphone, PartyPopper, Store, TrendingUp, Calendar,
  ArrowRight,
} from "lucide-react";
import { Button, Card } from "@/components/ui";
import { ServiceHero, SpecsTable, CrossPromoSection } from "@/components/sections";
import {
  LETTER_PAGE,
  LETTER_SPECS,
  LETTER_SIZE_LIMITS,
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
      <ServiceHero {...LETTER_PAGE} />

      {/* What It Is + Specs */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                Character limits depend on letter height. Larger letters mean
                fewer characters but greater visibility.
              </p>
            </div>
            <div className="space-y-6">
              <SpecsTable title="Letter Banner Specs" specs={LETTER_SPECS} />
              <div className="rounded-xl border border-card-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold text-heading mb-4">
                  Character Limits by Size
                </h3>
                <div className="space-y-3">
                  {LETTER_SIZE_LIMITS.map((size) => (
                    <div key={size.height} className="flex items-center justify-between gap-4 rounded-lg bg-background-alt px-4 py-3">
                      <div>
                        <span className="text-sm font-semibold text-heading">{size.height} letters</span>
                        <span className="block text-xs text-muted">{size.description}</span>
                      </div>
                      <span className="text-lg font-extrabold text-blue">{size.maxChars}</span>
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
              Why Choose Letter Banners?
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Fast, affordable, and unmissable. Letter banners are the go-to
              choice for text-based messages.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LETTER_BENEFITS.map((item) => {
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
              Any message that can be expressed in text works beautifully as a
              letter banner.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LETTER_USE_CASES.map((item) => {
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

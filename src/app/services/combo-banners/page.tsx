import type { Metadata } from "next";
import {
  Layers, TrendingUp, Share2, Award,
  Building2, Megaphone, Trophy, Heart, Store, Calendar,
  ArrowRight,
} from "lucide-react";
import { Button, Card } from "@/components/ui";
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
      <ServiceHero {...COMBO_PAGE} />

      {/* What It Is + Specs */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                Combo banners are our premium format&mdash;perfect for campaigns
                where you need both branding and messaging in a single pass.
              </p>
            </div>
            <SpecsTable title="Combo Banner Specs" specs={COMBO_SPECS} />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Why Choose Combo Banners?
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The ultimate aerial format for brands that want it all&mdash;visuals
              and messaging, together.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMBO_BENEFITS.map((item) => {
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
              Any campaign that benefits from showing and telling at the same
              time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMBO_USE_CASES.map((item) => {
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

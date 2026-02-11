import type { Metadata } from "next";
import {
  HelpCircle, Briefcase, Heart, Settings, DollarSign,
  ArrowRight,
} from "lucide-react";
import { Button, AccordionItem } from "@/components/ui";
import { ServiceHero } from "@/components/sections";
import { FAQ_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | Sky Banners",
  description:
    "Frequently asked questions about aerial advertising. Pricing, process, banner types, file formats, weather policy, and more.",
};

const categoryIcons = { HelpCircle, Briefcase, Heart, Settings, DollarSign } as const;

export default function FAQPage() {
  return (
    <main>
      <ServiceHero
        badge="FAQ"
        headline="Frequently Asked Questions"
        headlineAccent="Asked Questions"
        description="Everything you need to know about aerial advertising with Sky Banners. Can't find your answer? Contact us directly."
        primaryCta="Contact Us"
        secondaryCta="Browse Questions"
        secondaryCtaHref="#questions"
      />

      {/* FAQ Categories */}
      <section id="questions" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-16">
            {FAQ_CATEGORIES.map((cat) => {
              const Icon = categoryIcons[cat.icon as keyof typeof categoryIcons] || HelpCircle;
              return (
                <div key={cat.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-red/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-red" />
                    </div>
                    <h2 className="text-2xl font-bold text-heading">
                      {cat.category}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {cat.questions.map((faq) => (
                      <AccordionItem
                        key={faq.question}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            We&apos;re happy to answer any questions about aerial advertising,
            pricing, or our process. Reach out and we&apos;ll get back to you
            within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#contact" variant="primary" size="large">
              Ask Us Anything
            </Button>
            <Button href="tel:1-877-759-2266" variant="secondary" size="large">
              Call 1-877-SKY-BANNER
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to <span className="text-red">Get Started</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            You&apos;ve got the answers. Now let&apos;s put your message in the
            sky.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#contact" variant="primary" size="large">
              Start Your Campaign <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

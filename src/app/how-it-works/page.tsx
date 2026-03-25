import type { Metadata } from "next";
import {
  Zap, ClipboardList, Wind,
  CheckCircle, ArrowRight,
} from "lucide-react";
import { Button, Card, AccordionItem } from "@/components/ui";
import { ServiceHero } from "@/components/sections";
import {
  HOW_IT_WORKS_PAGE,
  FILE_FORMATS,
  LEAD_TIMES,
  DELIVERABLES,
  PROCESS_FAQS,
} from "@/lib/constants";
import { StepsSection } from "./StepsSection";

export const metadata: Metadata = {
  title: "How It Works | Sky Banners",
  description:
    "From consultation to sky-high impact in 5 simple steps. Learn our process, file requirements, lead times, and what you receive after your aerial campaign.",
};

const leadIcons = { Zap, ClipboardList, Wind } as const;

export default function HowItWorksPage() {
  return (
    <main>
      <ServiceHero {...HOW_IT_WORKS_PAGE} />

      {/* 5-Step Expanded Process */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StepsSection />
        </div>
      </section>

      {/* File Formats */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              {FILE_FORMATS.title}
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              {FILE_FORMATS.description}
            </p>
            <div className="space-y-3 mb-6">
              {FILE_FORMATS.formats.map((f) => (
                <div
                  key={f.format}
                  className="flex items-start gap-4 rounded-lg border border-card-border bg-card px-5 py-4 shadow-sm"
                >
                  <span className="text-sm font-bold text-blue bg-blue/10 px-2.5 py-1 rounded">
                    {f.format}
                  </span>
                  <span className="text-sm text-muted">{f.description}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted italic">{FILE_FORMATS.note}</p>
          </div>
        </div>
      </section>

      {/* Lead Times */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Lead Times
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              How much notice do you need? It depends on the banner type.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {LEAD_TIMES.map((item) => {
              const Icon = leadIcons[item.icon as keyof typeof leadIcons];
              return (
                <Card key={item.type} glow>
                  <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-1">
                    {item.type}
                  </h3>
                  <p className="text-2xl font-extrabold text-blue mb-2">
                    {item.time}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              What You Receive
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Every campaign includes professional documentation and reporting.
              Here&apos;s what you get after your flight.
            </p>
            <ul className="space-y-3">
              {DELIVERABLES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process FAQs */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Common Questions About the Process
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {PROCESS_FAQS.map((faq) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
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
            Your first step is a free consultation. Tell us about your campaign
            and we&apos;ll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#contact" variant="primary" size="large">
              Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
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

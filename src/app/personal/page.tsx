import type { Metadata } from "next";
import {
  Heart, Baby, Cake, GraduationCap, Star, PartyPopper, Mail,
  PenLine, ClipboardList, Palette, Wind,
  CheckCircle, ArrowRight, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui";
import { Card } from "@/components/ui";
import { AccordionItem } from "@/components/ui";
import {
  PERSONAL_OCCASIONS,
  PERSONAL_BANNER_OPTIONS,
  SMOKE_COLORS,
  PERSONAL_INCLUSIONS,
  PERSONAL_FAQS,
  FLIGHT_DURATIONS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Personal Aerial Banners & Celebrations",
  description:
    "Make your proposal, gender reveal, birthday, or special moment unforgettable with a personal aerial banner. Smoke displays in 8 colours. Southern Ontario.",
};

const occasionIcons = {
  Heart,
  Rings: Heart,
  Baby,
  Cake,
  GraduationCap,
  Star,
  PartyPopper,
  Mail,
} as const;

const bannerIcons = { PenLine, ClipboardList, Palette, Wind } as const;

export default function PersonalPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-red font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> Personal Celebrations
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="text-red">Your Message.</span>{" "}
              <span className="text-blue">Their Sky.</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Some moments deserve more than a text message. A proposal, a
              gender reveal, a milestone birthday&mdash;when you put it in the
              sky, it becomes a memory that lasts forever. We handle everything
              so you can focus on the reaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/#contact" variant="primary" size="large">
                Plan Your Moment
              </Button>
              <Button href="#occasions" variant="secondary" size="large">
                See Occasions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section id="occasions" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Every Occasion Deserves the Sky
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From proposals to retirements, we&apos;ve flown banners for every
              kind of celebration. Here&apos;s what we can do for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERSONAL_OCCASIONS.map((occasion) => {
              const Icon =
                occasionIcons[occasion.icon as keyof typeof occasionIcons];
              return (
                <div
                  key={occasion.title}
                  className="relative rounded-xl border border-card-border bg-card p-6 shadow-sm hover:border-red/30 hover:shadow-md transition-all duration-300"
                >
                  {occasion.popular && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider text-red bg-red/10 px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">
                    {occasion.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {occasion.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner & Smoke Options */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Choose Your Format
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Letter banners, billboard banners, combos, or smoke displays&mdash;pick
              the option that makes your moment unforgettable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERSONAL_BANNER_OPTIONS.map((option) => {
              const Icon =
                bannerIcons[option.icon as keyof typeof bannerIcons];
              return (
                <Card key={option.title} glow>
                  <div className="h-12 w-12 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {option.description}
                  </p>
                  <p className="text-xs text-red font-medium">
                    Best for: {option.bestFor}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Smoke Colours */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                Smoke Display Colours
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Add dramatic flair to your celebration with coloured smoke
                trails visible for miles. Perfect for gender reveals&mdash;choose
                pink for a girl or blue for a boy. Or pick any colour to match
                your event theme.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Smoke displays can be booked on their own or combined with a
                banner for the ultimate sky-high celebration.
              </p>
              <Button href="/#contact" variant="primary">
                Book a Smoke Display
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {SMOKE_COLORS.map((smoke) => (
                <div key={smoke.color} className="text-center">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-card-border shadow-md"
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
      </section>

      {/* Flight Duration & Inclusions */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Flight Duration */}
            <div className="rounded-xl border border-card-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-heading mb-2">
                Flight Duration Options
              </h3>
              <p className="text-muted text-sm mb-6">
                Choose how long your banner flies. For proposals and events
                with a specific moment, shorter flights work great. For
                festivals and parties, longer flights maximize the wow factor.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {FLIGHT_DURATIONS.map((dur) => (
                  <div
                    key={dur.value}
                    className="rounded-lg border border-card-border bg-background-alt px-4 py-3 text-center"
                  >
                    <span className="text-heading font-medium text-sm">
                      {dur.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div className="rounded-xl border border-card-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-heading mb-2">
                Every Celebration Includes
              </h3>
              <p className="text-muted text-sm mb-6">
                We handle everything from design to documentation. You just
                show up and enjoy the moment.
              </p>
              <ul className="space-y-3">
                {PERSONAL_INCLUSIONS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-red mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Questions About Personal Banners
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Everything you need to know about booking a personal aerial
              banner or smoke display.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {PERSONAL_FAQS.map((faq) => (
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
            Make It <span className="text-red">Unforgettable</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Whether it&apos;s a proposal, gender reveal, birthday, or a simple
            &ldquo;I love you&rdquo;&mdash;put your message where everyone can
            see it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#contact" variant="primary" size="large">
              Start Planning <ArrowRight className="ml-2 h-4 w-4" />
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

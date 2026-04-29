import type { Metadata } from "next";
import Image from "next/image";
import {
  Heart, Baby, Cake, GraduationCap, Star, PartyPopper, Mail,
  PenLine, ClipboardList, Palette, Wind,
  CheckCircle, ArrowRight, Sparkles, Camera,
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
    "Make your proposal, gender reveal, birthday, or special moment unforgettable with a personal aerial banner. Smoke displays in pink or blue. Southern Ontario.",
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
              A proposal. A gender reveal. A birthday they&apos;ll talk about
              for years. We put your message in the sky&mdash;you just make sure
              they&apos;re looking up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/#contact" variant="primary" size="large">
                Plan Your Moment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section id="occasions" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Left-aligned header */}
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-3">
              Every Occasion Deserves the Sky
            </h2>
            <p className="text-muted max-w-xl">
              From proposals to retirements, we&apos;ve flown banners for every
              kind of celebration.
            </p>
          </div>

          {/* Featured — popular occasions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {PERSONAL_OCCASIONS.filter((o) => o.popular).map((occasion) => {
              const Icon = occasionIcons[occasion.icon as keyof typeof occasionIcons];
              const image = "image" in occasion ? occasion.image : null;
              return (
                <div
                  key={occasion.title}
                  className="border border-card-border overflow-hidden shadow-sm hover:shadow-md hover:border-red/30 transition-all duration-300 group"
                >
                  {/* Card header — photo or placeholder */}
                  <div className="relative h-48 overflow-hidden">
                    {image ? (
                      <Image
                        src={image}
                        alt={occasion.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="h-full bg-background-alt border-b border-dashed border-card-border flex flex-col items-center justify-center gap-2 text-muted">
                        <Camera className="h-7 w-7 opacity-30" />
                        <span className="text-xs font-medium opacity-40">Add photo</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-card">
                    {"badge" in occasion && occasion.badge && (
                      <span className="inline-flex text-[10px] font-bold uppercase tracking-wider text-red bg-red/10 px-2 py-0.5 rounded-full mb-3">
                        {occasion.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-semibold text-heading mb-2">
                      {occasion.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {occasion.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Supporting — remaining occasions */}
          <div className="border border-card-border bg-background-alt p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-5">
              More Occasions We Fly For
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-5">
              {PERSONAL_OCCASIONS.filter((o) => !o.popular).map((occasion) => {
                const Icon = occasionIcons[occasion.icon as keyof typeof occasionIcons];
                return (
                  <div key={occasion.title} className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-red/10 border border-red/20 flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-red" />
                    </div>
                    <p className="text-sm font-semibold text-red leading-tight">
                      {occasion.title}
                    </p>
                  </div>
                );
              })}
            </div>
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
                  <p className="text-xs text-red font-medium mb-4">
                    Best for: {option.bestFor}
                  </p>
                  <a
                    href={`/services/${option.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue hover:text-red transition-colors"
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
                  </a>
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
                pink for a girl or blue for a boy.
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
          <div className="max-w-2xl mx-auto">
            {/* What's Included */}
            <div className="rounded-xl border border-card-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-heading mb-2">
                Every Celebration Includes
              </h3>
              <p className="text-muted text-sm mb-6">
                We handle everything from design to flight. You just
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

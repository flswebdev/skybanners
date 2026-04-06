import type { Metadata } from "next";
import {
  Target, TrendingUp, DollarSign, Share2, Eye,
  Megaphone, Trophy, Store, Repeat,
  ClipboardList, PenLine, Palette,
  CheckCircle, ArrowRight, Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui";
import { Card } from "@/components/ui";
import {
  FEATURED_CLIENTS,
  B2B_BANNER_OPTIONS,
  B2B_WHY_AERIAL,
  B2B_USE_CASES,
  B2B_INCLUSIONS,
  FLIGHT_DURATIONS,
  STATS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aerial Advertising for Business",
  description:
    "Amplify your brand with aerial banner advertising across Southern Ontario. Trusted by McDonald's, Sony, Subway, Shell, and more. 88% recall rate, CPM under $6.",
};

const whyIcons = { TrendingUp, DollarSign, Share2, Eye } as const;
const useCaseIcons = { Megaphone, Trophy, Store, Repeat } as const;
const bannerIcons = { ClipboardList, PenLine, Palette } as const;

export default function BusinessPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-red font-semibold mb-3 flex items-center gap-2">
              <Users className="h-5 w-5" /> For Business
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="text-heading">Put Your Brand </span>
              <span className="text-blue">in the Sky</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Aerial advertising delivers the highest recall rate of any
              advertising medium. When your banner flies over a stadium, beach,
              or festival, tens of thousands of people look up and remember your
              brand. No ad blockers. No scrolling past. Just pure, unmissable
              visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#quote" variant="primary" size="large">
                Get a Business Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-background border-y border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, i) => (
              <div key={stat.id}>
                <div className={`text-3xl font-extrabold ${i % 2 === 0 ? "text-red" : "text-blue"}`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section id="clients" className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We&apos;ve pulled banners for major brands across Southern Ontario.
              From global corporations to local businesses, our aerial
              advertising delivers results.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 items-center justify-items-center sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-8">
            {FEATURED_CLIENTS.map((client) => (
              <div key={client.name} className="flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={48}
                  className="opacity-100"
                  style={{ height: "32px", width: "auto", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Aerial for Business */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Why Aerial Advertising Outperforms
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Compared to digital, print, TV, and traditional outdoor media,
              aerial banners deliver unmatched recall and cost efficiency.
            </p>
          </div>
          <div className="relative w-full h-72 mb-12 overflow-hidden rounded-lg">
            <Image
              src="/business-gaslight.jpg"
              alt="Gaslight District combo banner flying in the sky"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {B2B_WHY_AERIAL.map((item) => {
              const Icon = whyIcons[item.icon as keyof typeof whyIcons];
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

      {/* Banner Options */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Banner Options for Your Campaign
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Choose the format that best fits your brand and campaign goals.
              All banners include custom design, production, and professional
              documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {B2B_BANNER_OPTIONS.map((option) => {
              const Icon = bannerIcons[option.icon as keyof typeof bannerIcons];
              return (
                <div
                  key={option.title}
                  className="rounded-xl border border-card-border bg-card p-6 shadow-sm hover:border-blue/30 transition-colors"
                >
                  <div className="h-12 w-12 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-heading mb-2">
                    {option.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <CheckCircle className="h-4 w-4 text-red mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
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
              How Brands Use Aerial Advertising
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From one-time product launches to recurring seasonal campaigns,
              aerial banners fit into any marketing strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {B2B_USE_CASES.map((item) => {
              const Icon =
                useCaseIcons[item.icon as keyof typeof useCaseIcons];
              return (
                <Card key={item.title} glow>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-heading mb-2">
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

      {/* Flight Duration & What's Included */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Flight Durations */}
            <div className="rounded-xl border border-card-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-heading mb-2">
                Flight Duration Options
              </h3>
              <p className="text-muted text-sm mb-6">
                Choose the flight time that fits your campaign. Longer flights
                mean more passes over your target area and more impressions.
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
                Every Campaign Includes
              </h3>
              <p className="text-muted text-sm mb-6">
                Full-service aerial advertising from design to documentation.
                No hidden fees.
              </p>
              <ul className="space-y-3">
                {B2B_INCLUSIONS.map((item) => (
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

      {/* CTA */}
      <section id="quote" className="py-20 bg-charcoal relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to <span className="text-red">Fly</span> Your Brand?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Join McDonald&apos;s, Sony, Subway, and other brands who&apos;ve
            trusted Sky Banners to take their message to the sky. Get a custom
            quote for your campaign.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#contact" variant="primary" size="large">
              Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
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

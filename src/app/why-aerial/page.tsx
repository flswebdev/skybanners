import type { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui";
import { ServiceHero, SocialProof } from "@/components/sections";
import {
  WHY_AERIAL_PAGE,
  WHY_AERIAL_DEEP_STATS,
  WHY_AERIAL_COMPARISON,
  WHY_AERIAL_SOCIAL_EFFECT,
  WHY_AERIAL_AUDIENCE_REACH,
  WHY_AERIAL_PRIVATE_AIR_SHOW,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Aerial Advertising | Sky Banners",
  description:
    "88% recall, 79% brand ID, <$6 CPM. See the data behind why aerial advertising outperforms TV, digital, print, and radio. Southern Ontario.",
};

export default function WhyAerialPage() {
  return (
    <main>
      <ServiceHero
        {...WHY_AERIAL_PAGE}
        image={{
          src: "/why-aerial-hero.jpg",
          alt: "Aircraft towing a McDonald's combo banner across a clear blue sky",
          className: "absolute inset-0 w-full h-full object-cover object-left sm:object-center",
        }}
      />

      {/* Deep Stats */}
      <section id="details" className="py-12 bg-background border-y border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {WHY_AERIAL_DEEP_STATS.map((stat) => (
              <div key={stat.label}>
                <div className={`text-4xl sm:text-5xl font-extrabold mb-1 ${stat.color === "red" ? "text-red" : "text-blue"}`}>
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-heading">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Aerial vs. Other Media
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Side-by-side comparison of recall, brand identification, cost, and
              ad-blocking susceptibility.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-sm text-muted border-b border-card-border">
                  <th className="px-4 py-3 font-semibold">Medium</th>
                  <th className="px-4 py-3 font-semibold">Recall</th>
                  <th className="px-4 py-3 font-semibold">Brand ID</th>
                  <th className="px-4 py-3 font-semibold">CPM</th>
                  <th className="px-4 py-3 font-semibold">Blockable?</th>
                </tr>
              </thead>
              <tbody>
                {WHY_AERIAL_COMPARISON.map((row) => (
                  <tr
                    key={row.medium}
                    className={`border-b border-card-border text-sm ${row.highlight ? "bg-red/5 font-semibold" : ""}`}
                  >
                    <td className="px-4 py-3 text-heading">
                      {row.medium}
                      {row.highlight && (
                        <span className="ml-2 text-[10px] uppercase tracking-wider text-red bg-red/10 px-1.5 py-0.5 font-bold">
                          Best
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">{row.recall}</td>
                    <td className="px-4 py-3">{row.brandId}</td>
                    <td className="px-4 py-3">{row.cpm}</td>
                    <td className="px-4 py-3">{row.adBlockable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Media Multiplier */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                {WHY_AERIAL_SOCIAL_EFFECT.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {WHY_AERIAL_SOCIAL_EFFECT.description}
              </p>
            </div>
            <div className="grid grid-cols-3 border-t border-l border-card-border">
              {WHY_AERIAL_SOCIAL_EFFECT.stats.map((stat) => (
                <div key={stat.label} className="border-b border-r border-card-border px-5 py-6 text-center">
                  <div className="text-2xl font-extrabold text-blue mb-1">{stat.number}</div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audience Reach */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Audience Reach by Venue
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Estimated audience size per flight based on venue type and typical attendance.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-0">
            {WHY_AERIAL_AUDIENCE_REACH.map((item) => (
              <div key={item.venue} className="border-t border-card-border py-6 last:col-span-2 last:text-center sm:last:col-span-1 sm:last:text-left">
                <h3 className="text-base font-semibold text-heading mb-1">{item.venue}</h3>
                <p className="text-xl font-extrabold text-blue">{item.reach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Air Show Effect */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              {WHY_AERIAL_PRIVATE_AIR_SHOW.title}
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              {WHY_AERIAL_PRIVATE_AIR_SHOW.description}
            </p>
            <ul className="space-y-3">
              {WHY_AERIAL_PRIVATE_AIR_SHOW.points.map((point) => (
                <li key={point} className="flex items-start gap-3 justify-center sm:justify-start">
                  <CheckCircle className="h-5 w-5 text-red mt-0.5 shrink-0" />
                  <span className="text-foreground text-left">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 overflow-hidden">
              <img
                src="/private-air-show.png"
                alt="McDonald's $1.00 any size soft drink billboard banner in flight"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <SocialProof />

      {/* CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to <span className="text-red">Own the Sky</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Join the brands and individuals who&apos;ve chosen the most
            memorable advertising medium available.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="large">
              Start Your Campaign <ArrowRight className="ml-2 h-4 w-4" />
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

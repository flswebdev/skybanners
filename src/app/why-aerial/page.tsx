import type { Metadata } from "next";
import {
  Trophy, Waves, Tent, Building2, Flag, Music,
  ArrowRight, CheckCircle, Share2, Eye,
} from "lucide-react";
import { Button, Card } from "@/components/ui";
import { ServiceHero } from "@/components/sections";
import {
  WHY_AERIAL_PAGE,
  WHY_AERIAL_DEEP_STATS,
  WHY_AERIAL_COMPARISON,
  WHY_AERIAL_SOCIAL_EFFECT,
  WHY_AERIAL_AUDIENCE_REACH,
  WHY_AERIAL_PRIVATE_AIR_SHOW,
  CLIENT_LOGOS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Aerial Advertising | Sky Banners",
  description:
    "88% recall, 79% brand ID, <$6 CPM. See the data behind why aerial advertising outperforms TV, digital, print, and radio. Southern Ontario.",
};

const reachIcons = { Trophy, Waves, Tent, Building2, Flag, Music } as const;

export default function WhyAerialPage() {
  return (
    <main>
      <ServiceHero {...WHY_AERIAL_PAGE} />

      {/* Deep Stats */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              The Numbers Don&apos;t Lie
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Aerial advertising consistently outperforms every other medium on
              recall, brand identification, and cost efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_AERIAL_DEEP_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-card-border bg-card p-8 shadow-sm"
              >
                <div className={`text-5xl font-extrabold mb-2 ${stat.color === "red" ? "text-red" : "text-blue"}`}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-heading mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {stat.description}
                </p>
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
                        <span className="ml-2 text-[10px] uppercase tracking-wider text-red bg-red/10 px-1.5 py-0.5 rounded-full font-bold">
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
              <div className="h-12 w-12 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                <Share2 className="h-6 w-6 text-blue" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                {WHY_AERIAL_SOCIAL_EFFECT.title}
              </h2>
              <p className="text-muted leading-relaxed">
                {WHY_AERIAL_SOCIAL_EFFECT.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {WHY_AERIAL_SOCIAL_EFFECT.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-card-border bg-card p-5 text-center shadow-sm"
                >
                  <div className="text-2xl font-extrabold text-blue mb-1">
                    {stat.number}
                  </div>
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
              Estimated audience size per flight based on venue type and typical
              attendance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_AERIAL_AUDIENCE_REACH.map((item) => {
              const Icon = reachIcons[item.icon as keyof typeof reachIcons];
              return (
                <Card key={item.venue} glow>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-red/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-heading">
                        {item.venue}
                      </h3>
                      <p className="text-xl font-extrabold text-blue">
                        {item.reach}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Private Air Show Effect */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
              <Eye className="h-6 w-6 text-red" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              {WHY_AERIAL_PRIVATE_AIR_SHOW.title}
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              {WHY_AERIAL_PRIVATE_AIR_SHOW.description}
            </p>
            <ul className="space-y-3">
              {WHY_AERIAL_PRIVATE_AIR_SHOW.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-red mt-0.5 shrink-0" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Trusted by Leading Brands
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="rounded-xl border border-card-border bg-card p-5 flex items-center justify-center shadow-sm min-h-[80px]"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-10 max-w-full object-contain"
                  />
                ) : (
                  <span className="text-sm font-bold text-heading text-center leading-tight">{client.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <Button href="/#contact" variant="primary" size="large">
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

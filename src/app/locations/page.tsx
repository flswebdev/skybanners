import type { Metadata } from "next";
import {
  Building2, Waves, Trophy, Tent, Trees, GraduationCap,
  Music, Users, Heart,
  ArrowRight, MapPin,
} from "lucide-react";
import { Button, Card } from "@/components/ui";
import { ServiceHero } from "@/components/sections";
import {
  LOCATIONS_PAGE,
  COVERAGE_CITIES,
  VENUE_TYPES,
  OPERATING_SEASON,
  EVENT_TYPES,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Coverage Locations | Sky Banners",
  description:
    "Aerial advertising across Southern Ontario. Toronto, Hamilton, London, Kitchener-Waterloo, Barrie, Niagara. Beaches, stadiums, festivals. May\u2013October.",
};

const venueIcons = { Waves, Trophy, Tent, Building2, Trees, GraduationCap } as const;
const eventIcons = { Trophy, Music, Users, Building2, Heart, Waves } as const;

export default function LocationsPage() {
  return (
    <main>
      <ServiceHero {...LOCATIONS_PAGE} />

      {/* City Coverage Grid */}
      <section id="details" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Cities We Serve
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We fly across the most populated and event-rich regions of
              Southern Ontario.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COVERAGE_CITIES.map((city) => (
              <div
                key={city.city}
                className="rounded-xl border border-card-border bg-card p-6 shadow-sm hover:border-blue/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-blue/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-heading">{city.city}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  {city.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {city.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-[11px] font-medium text-blue bg-blue/10 px-2 py-0.5 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Types */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Venue Types We Cover
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Wherever large outdoor audiences gather, we can fly your banner.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VENUE_TYPES.map((venue) => {
              const Icon = venueIcons[venue.icon as keyof typeof venueIcons];
              return (
                <Card key={venue.title} glow>
                  <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">
                    {venue.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {venue.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operating Season */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
                {OPERATING_SEASON.title}
              </h2>
              <p className="text-3xl font-extrabold text-blue mb-4">
                {OPERATING_SEASON.season}
              </p>
              <p className="text-muted leading-relaxed">
                {OPERATING_SEASON.description}
              </p>
            </div>
            <div className="rounded-xl border border-card-border bg-card p-6 shadow-sm">
              <dl className="space-y-4">
                {OPERATING_SEASON.details.map((item) => (
                  <div key={item.label} className="flex justify-between gap-4">
                    <dt className="text-sm text-muted font-medium">{item.label}</dt>
                    <dd className="text-sm text-heading font-semibold text-right">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Event Types We Cover
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From CFL games to Canada Day celebrations, we fly at every type
              of outdoor event in Southern Ontario.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENT_TYPES.map((event) => {
              const Icon = eventIcons[event.icon as keyof typeof eventIcons];
              return (
                <Card key={event.title} glow>
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-heading mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {event.examples}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Fly Your Banner <span className="text-red">Across Ontario</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Tell us your target location and event. We&apos;ll plan the perfect
            flight route.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#contact" variant="primary" size="large">
              Book Your Location <ArrowRight className="ml-2 h-4 w-4" />
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

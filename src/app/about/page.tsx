import type { Metadata } from "next";
import {
  MapPin, Handshake, Shield, Camera,
  ArrowRight,
} from "lucide-react";
import { Button, Card } from "@/components/ui";
import { ServiceHero } from "@/components/sections";
import {
  ABOUT_PAGE,
  COMPANY_STORY,
  FLEET_INFO,
  DIFFERENTIATORS,
  CLIENT_LOGOS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Sky Banners",
  description:
    "Southern Ontario\u2019s aerial advertising experts. Full-service aerial banner advertising from design to documentation. McDonald\u2019s, Sony, Subway, and more.",
};

const diffIcons = { MapPin, Handshake, Shield, Camera } as const;

export default function AboutPage() {
  return (
    <main>
      <ServiceHero {...ABOUT_PAGE} secondaryCtaHref="#story" />

      {/* Our Story */}
      <section id="story" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-6">
                {COMPANY_STORY.title}
              </h2>
              <div className="space-y-4">
                {COMPANY_STORY.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-card-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-heading mb-2">
                {FLEET_INFO.title}
              </h3>
              <p className="text-muted text-sm mb-6">{FLEET_INFO.description}</p>
              <dl className="space-y-4">
                {FLEET_INFO.details.map((item) => (
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

      {/* Why Choose Sky Banners */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Why Choose Sky Banners?
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We&apos;re not just another vendor. Here&apos;s what sets us
              apart.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIATORS.map((item) => {
              const Icon = diffIcons[item.icon as keyof typeof diffIcons];
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

      {/* Client Logos */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From global corporations to local businesses, our clients trust us
              to deliver.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="rounded-xl border border-card-border bg-card p-5 flex items-center justify-center shadow-sm hover:border-red/30 hover:shadow-md transition-all duration-300 min-h-[80px]"
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
            Let&apos;s <span className="text-red">Work Together</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Ready to put your message in the sky? Get in touch for a free,
            no-obligation consultation.
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

import { Button } from "@/components/ui";

interface ServiceHeroProps {
  badge: string;
  headline: string;
  headlineAccent: string;
  description: string;
  primaryCta: string;
  primaryCtaHref?: string;
  secondaryCta: string;
  secondaryCtaHref?: string;
}

export function ServiceHero({
  badge,
  headline,
  headlineAccent,
  description,
  primaryCta,
  primaryCtaHref = "/#contact",
  secondaryCta,
  secondaryCtaHref = "#details",
}: ServiceHeroProps) {
  // Split headline around the accent portion
  const parts = headline.split(headlineAccent);

  return (
    <section className="relative pt-32 pb-20 bg-background-alt">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-red font-semibold mb-3">{badge}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="text-heading">{parts[0]}</span>
            <span className="text-blue">{headlineAccent}</span>
            {parts[1] && <span className="text-heading">{parts[1]}</span>}
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={primaryCtaHref} variant="primary" size="large">
              {primaryCta}
            </Button>
            <Button href={secondaryCtaHref} variant="secondary" size="large">
              {secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

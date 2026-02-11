import { Button } from "@/components/ui";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-alt">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-red">{HERO.title}</span>
          <br />
          <span className="text-blue">{HERO.titleAccent}</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted leading-relaxed mb-10">
          {HERO.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#contact" variant="primary" size="large">
            {HERO.primaryCta}
          </Button>
          <Button href="#services" variant="secondary" size="large">
            {HERO.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui";

interface ServiceHeroProps {
  badge: string;
  headline: string;
  headlineAccent: string;
  description: string;
  primaryCta: string;
  primaryCtaHref?: string;
  primaryCtaClassName?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  secondaryCtaClassName?: string;
  image?: { src: string; alt: string };
  video?: string;
}

export function ServiceHero({
  badge,
  headline,
  headlineAccent,
  description,
  primaryCta,
  primaryCtaHref = "/#contact",
  primaryCtaClassName,
  secondaryCta,
  secondaryCtaHref = "#details",
  secondaryCtaClassName,
  image,
  video,
}: ServiceHeroProps) {
  const parts = headline.split(headlineAccent);

  return (
    <section className="relative pt-32 pb-20 bg-background-alt overflow-hidden">
      {video && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
            <source src={video} type="video/quicktime" />
          </video>
          <div className="absolute inset-0 bg-white/60" />
        </>
      )}
      {!video && image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/60" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="inline-block font-semibold mb-3 text-white bg-red px-3 py-1 text-sm uppercase tracking-widest">{badge}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            <span className="text-heading block">{parts[0]}</span>
            <span className="text-blue block">{headlineAccent}</span>
            {parts[1] && <span className="text-heading">{parts[1]}</span>}
          </h1>
          <p className="text-lg leading-relaxed mb-8 text-muted">
            {description}
          </p>
          <div className="flex flex-col items-center sm:items-start sm:flex-row gap-4 justify-center lg:justify-start">
            <Button href={primaryCtaHref} variant="primary" size="large" className={primaryCtaClassName}>
              {primaryCta}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCtaHref} variant="secondary" size="large" className={secondaryCtaClassName}>
                {secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

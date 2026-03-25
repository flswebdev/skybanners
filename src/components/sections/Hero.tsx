"use client";

import { LayoutGroup, motion } from "motion/react";
import { Button } from "@/components/ui";
import { TextRotate } from "@/components/ui/text-rotate";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,85,221,0.08),transparent)] bg-background-alt" />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#111827 1px, transparent 1px), linear-gradient(to right, #111827 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue/20 bg-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue mb-8">
          Southern Ontario&apos;s Aerial Advertising Specialists
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-red">{HERO.title}</span>
          <br />
          <LayoutGroup>
            <motion.span
              className="inline-flex items-center justify-center gap-3 whitespace-nowrap"
              layout
            >
              <motion.span
                className="text-heading"
                layout
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                Their
              </motion.span>
              <TextRotate
                texts={[
                  "Sky.",
                  "Commute.",
                  "Beach Day.",
                  "Game Day.",
                  "Festival.",
                ]}
                mainClassName="text-white bg-red px-3 py-1 rounded-lg overflow-hidden justify-center"
                splitLevelClassName="overflow-hidden pb-2"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </motion.span>
          </LayoutGroup>
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

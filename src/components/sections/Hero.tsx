"use client";

import { LayoutGroup, motion } from "motion/react";
import { Button } from "@/components/ui";
import { TextRotate } from "@/components/ui/text-rotate";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-0 lg:h-[75vh] flex flex-col items-start lg:items-stretch justify-start overflow-hidden">
      {/* Hero video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://media.skybanners.ca/hero.mp4"
        poster="https://media.skybanners.ca/hero-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Top fade overlay */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white/80 to-transparent z-10" />

      {/* Main headline — left side */}
      <div className="relative z-20 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-48 lg:pt-16 lg:pb-0 lg:flex-1 lg:flex lg:flex-col lg:justify-center text-center lg:text-left">
        <div className="lg:max-w-[50%]">
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-red block mb-1 lg:mb-4">{HERO.title}</span>
            <LayoutGroup>
              <motion.span
                className="inline-flex items-center justify-center lg:justify-start gap-3 whitespace-nowrap"
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
        </div>
      </div>

      {/* Bubble card — pinned to bottom of hero */}
      <div className="absolute z-20 bottom-8 inset-x-0 px-4 sm:px-6 lg:px-8 lg:static lg:pb-16 lg:pt-0">
        <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 lg:p-8 text-center lg:text-left lg:max-w-[50%]">
          <p className="text-lg text-white leading-relaxed mb-6">
            {HERO.subtitle}
          </p>
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
            <Button href="#contact" variant="primary" size="large" className="text-sm px-5 sm:text-base sm:px-8">
              {HERO.primaryCta}
            </Button>
            <Button href="#services" variant="secondary" size="large" className="text-sm px-5 sm:text-base sm:px-8 !bg-blue !text-white !border-blue hover:!bg-blue/90">
              {HERO.secondaryCta}
            </Button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

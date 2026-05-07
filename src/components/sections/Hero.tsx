"use client";

import Image from "next/image";
import { LayoutGroup, motion } from "motion/react";
import { TextRotate } from "@/components/ui/text-rotate";
import { HERO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative mt-[4.5rem] min-h-[50vh] lg:min-h-0 lg:h-[55vh] flex flex-col items-start lg:items-stretch justify-center overflow-hidden">
      {/* Hero image background */}
      <Image
        src="/images/hero.jpg"
        alt="Sky Banners plane towing a letter banner"
        fill
        className="object-cover object-top"
        priority
      />
      {/* Top fade overlay */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white/80 to-transparent z-10" />

      {/* Main headline — left side */}
      <div className="relative z-20 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center lg:text-left">
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

    </section>
  );
}

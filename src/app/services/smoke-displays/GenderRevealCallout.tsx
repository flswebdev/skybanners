"use client";

import { useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { TextRotate } from "@/components/ui/text-rotate";

export function GenderRevealCallout() {
  const [index, setIndex] = useState(0);
  const isBoy = index === 0;

  return (
    <div className="mt-6 rounded-2xl bg-background-alt border border-card-border p-6">
      <div className="text-2xl sm:text-3xl font-extrabold text-heading leading-snug flex flex-wrap items-center gap-x-2 gap-y-1">
        <span>Combine a</span>
        <LayoutGroup>
          <motion.span layout>
            <TextRotate
              texts={["\"It's a Boy!\"", "\"It's a Girl!\""]}
              onNext={(i) => setTimeout(() => setIndex(i), 550)}
              mainClassName={`text-white px-3 py-1 rounded-lg overflow-hidden justify-center inline-flex ${isBoy ? "bg-blue" : "bg-[#F43F5E]"}`}
              splitLevelClassName="overflow-hidden pb-1"
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
        <span>letter banner with matching smoke.</span>
      </div>
    </div>
  );
}

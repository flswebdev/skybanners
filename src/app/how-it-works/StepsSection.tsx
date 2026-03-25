"use client";

import { MessageSquare, Palette, Printer, Plane, Camera, CheckCircle } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect, useLayoutEffect, useCallback } from "react";
import { EXPANDED_STEPS } from "@/lib/constants";

const stepIcons = { MessageSquare, Palette, Printer, Plane, Camera } as const;

// Border fires when the snake line arrives at each card
const ANIMATION_DELAY = 2;
const BORDER_DELAYS = [0, 3.5, 7.0, 10.5, 14.0].map((d) => d + ANIMATION_DELAY) as unknown as readonly number[];
const TOTAL_DURATION = 16;

// How far the bezier arc bulges outside the container edge (px)
const ARC_OVERHANG = 96;
// How far from the top of each card the line travels (px) — roughly icon centre
const LINE_Y_OFFSET = 60;

export function StepsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const [borderStep, setBorderStep] = useState(-1);
  const [pathD, setPathD] = useState("");

  const computePath = useCallback(() => {
    if (!containerRef.current) return;
    const allReady = cardRefs.current.every((r) => r !== null);
    if (!allReady) return;

    const container = containerRef.current.getBoundingClientRect();
    const W = container.width;
    const R = ARC_OVERHANG;

    const ys = cardRefs.current.map((card) => {
      const rect = card!.getBoundingClientRect();
      return rect.top - container.top + LINE_Y_OFFSET;
    });

    // Build serpentine path:
    //  even steps  → line goes LEFT  to RIGHT, arc bulges right
    //  odd  steps  → line goes RIGHT to LEFT,  arc bulges left
    // Entry: horizontal line left→right under heading, then bezier arc looping into right side of card 01
    // Measure the spacer div's vertical centre relative to the container
    const spacerRect = spacerRef.current?.getBoundingClientRect();
    const entryY = spacerRect
      ? spacerRect.top - container.top + spacerRect.height / 2
      : 88;
    let d = `M 0 ${entryY} L ${W} ${entryY} C ${W + R} ${entryY} ${W + R} ${ys[0]} ${W} ${ys[0]}`;
    for (let i = 0; i < ys.length; i++) {
      const y = ys[i];
      const isEven = i % 2 === 0;
      if (isEven) {
        // right → left, arc bulges left
        d += ` L 0 ${y}`;
        if (i < ys.length - 1) {
          const y2 = ys[i + 1];
          d += ` C ${-R} ${y} ${-R} ${y2} 0 ${y2}`;
        }
      } else {
        // left → right, arc bulges right
        d += ` L ${W} ${y}`;
        if (i < ys.length - 1) {
          const y2 = ys[i + 1];
          d += ` C ${W + R} ${y} ${W + R} ${y2} ${W} ${y2}`;
        }
      }
    }

    setPathD(d);
  }, []);

  // Compute after first render and on resize
  useLayoutEffect(() => {
    computePath();
    const ro = new ResizeObserver(computePath);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [computePath]);

  // Card border / greyscale activation
  useEffect(() => {
    if (!inView) return;
    const timers = BORDER_DELAYS.map((delay, i) =>
      setTimeout(() => setBorderStep(i), delay * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <div ref={containerRef} className="relative">
      {/* Heading above the entry line */}
      <h2 className="text-3xl sm:text-4xl font-bold text-heading text-center mb-4">
        Your Campaign, Step by Step
      </h2>

      {/* Entry line lives here — SVG drawn over this gap */}
      <div ref={spacerRef} className="h-16" />

      {/* Subheading below the entry line */}
      <p className="text-muted text-center max-w-2xl mx-auto mb-10">
        We handle everything from start to finish. Here&apos;s exactly what happens when you book with Sky Banners.
      </p>
      {/* SVG snake path — sits behind cards */}
      {pathD && (
        <svg
          className="absolute inset-0 pointer-events-none"
          width="100%"
          height="100%"
          style={{ overflow: "visible", zIndex: 0 }}
          aria-hidden
        >
          {/* Ghost grey path — always visible so you can see where the line will go */}
          <path
            d={pathD}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={2}
            strokeLinecap="round"
          />
          {/* Animated red path drawing over the grey one */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="#E81C1C"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: TOTAL_DURATION, ease: "linear", delay: ANIMATION_DELAY }}
          />
        </svg>
      )}

      {/* Step cards */}
      <div className="relative flex flex-col gap-6" style={{ zIndex: 10 }}>
        {EXPANDED_STEPS.map((step, i) => {
          const Icon = stepIcons[step.icon as keyof typeof stepIcons];
          const bordered = borderStep >= i;
          return (
            <motion.div
              key={step.number}
              ref={(el) => { cardRefs.current[i] = el; }}
              animate={{
                borderColor: bordered ? "#E81C1C" : "#E5E7EB",
                opacity: bordered ? 1 : 0.35,
                filter: bordered ? "grayscale(0%)" : "grayscale(80%)",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-xl border-2 bg-card p-8 shadow-sm"
            >
              {/* Step number */}
              <motion.div
                animate={{ color: bordered ? "#E81C1C" : "#D1D5DB" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-6xl font-extrabold absolute top-6 right-6 leading-none select-none"
              >
                {step.number}
              </motion.div>

              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-lg bg-red/10 flex items-center justify-center shrink-0">
                  <Icon className="h-7 w-7 text-red" />
                </div>
                <div className="flex-1 pr-16">
                  <h3 className="text-xl font-bold text-heading mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail: string) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle className="h-4 w-4 text-red mt-0.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

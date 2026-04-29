"use client";

import { MessageSquare, Palette, Printer, Plane, CheckCircle } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { EXPANDED_STEPS } from "@/lib/constants";

const iconMap = { MessageSquare, Palette, Printer, Plane } as const;

const CIRCLE_DELAYS   = [0, 1.6, 3.2, 4.8];
const LINE_DELAYS     = [0.5, 2.1, 3.7];
const LINE_DURATION   = 0.9;
const CONNECTOR_DELAY    = 0.5;
const CONNECTOR_DURATION = 0.54;
const BORDER_DELAYS = [
  0,
  CIRCLE_DELAYS[1] + CONNECTOR_DELAY + CONNECTOR_DURATION,
  CIRCLE_DELAYS[2] + CONNECTOR_DELAY + CONNECTOR_DURATION,
  CIRCLE_DELAYS[3] + CONNECTOR_DELAY + CONNECTOR_DURATION,
];

export function StepsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(-1);
  const [borderStep, setBorderStep] = useState(-1);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reducedMotion) {
      setActiveStep(EXPANDED_STEPS.length - 1);
      setBorderStep(EXPANDED_STEPS.length - 1);
      return;
    }
    const timers = [
      ...CIRCLE_DELAYS.map((delay, i) => setTimeout(() => setActiveStep(i), delay * 1000)),
      ...BORDER_DELAYS.map((delay, i) => setTimeout(() => setBorderStep(i), delay * 1000)),
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView, reducedMotion]);

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-heading text-center mb-4">
        Your Campaign, Step by Step
      </h2>
      <p className="text-muted text-center max-w-2xl mx-auto mb-10">
        We handle everything from start to finish. Here&apos;s exactly what happens when you book with Sky Banners.
      </p>

      <div ref={ref}>
        {/* ── Desktop: circles + lines + cards ── */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-6 relative mb-6">
            {/* Background grey track */}
            <div className="absolute top-[18px] h-0.5 bg-gray-200" style={{ left: "12.5%", right: "12.5%" }} />
            {/* Animated red fill lines */}
            {LINE_DELAYS.map((lineDelay, i) => (
              <motion.div
                key={i}
                className="absolute top-[18px] h-0.5 bg-red origin-left"
                style={{ left: `${12.5 + i * 25}%`, width: "25%" }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: LINE_DURATION, delay: lineDelay, ease: "easeInOut" }}
              />
            ))}
            {/* Step number circles */}
            {EXPANDED_STEPS.map((step, i) => (
              <div key={step.number} className="flex justify-center z-10">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, delay: CIRCLE_DELAYS[i], ease: "backOut" }}
                  className="w-9 h-9 rounded-full bg-red text-white text-sm font-bold flex items-center justify-center shadow-md"
                >
                  {step.number}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Desktop cards */}
          <div className="grid grid-cols-4 gap-6">
            {EXPANDED_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              const active = activeStep >= i;
              return (
                <motion.div
                  key={step.number}
                  animate={{
                    opacity: active ? 1 : 0.35,
                    filter: active ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative rounded-xl border border-card-border bg-white p-6"
                >
                  <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{step.description}</p>
                  <ul className="space-y-1.5">
                    {step.details.map((detail: string) => (
                      <li key={detail} className="flex items-start gap-2 text-xs text-muted">
                        <CheckCircle className="h-3.5 w-3.5 text-red mt-0.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: stacked cards with vertical connectors ── */}
        <div className="flex flex-col gap-0 lg:hidden">
          {EXPANDED_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            const bordered = borderStep >= i;
            return (
              <div key={step.number} className="flex flex-col items-center">
                <motion.div
                  animate={{
                    borderColor: bordered ? "#E81C1C" : "#E5E7EB",
                    opacity: bordered ? 1 : 0.35,
                    filter: bordered ? "grayscale(0%)" : "grayscale(90%)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full rounded-xl border-2 bg-white p-6 relative"
                >
                  <motion.span
                    animate={{ color: bordered ? "#E81C1C" : "#D1D5DB" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute top-4 right-4 text-4xl font-extrabold select-none leading-none"
                  >
                    {step.number}
                  </motion.span>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-lg bg-red/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-red" />
                    </div>
                    <h3 className="text-base font-semibold text-heading">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-3">{step.description}</p>
                  <ul className="space-y-1.5">
                    {step.details.map((detail: string) => (
                      <li key={detail} className="flex items-start gap-2 text-xs text-muted">
                        <CheckCircle className="h-3.5 w-3.5 text-red mt-0.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                {i < EXPANDED_STEPS.length - 1 && (
                  <div className="w-0.5 h-8 bg-gray-200 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-red origin-top"
                      initial={{ scaleY: 0 }}
                      animate={bordered ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ duration: CONNECTOR_DURATION, delay: CONNECTOR_DELAY, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

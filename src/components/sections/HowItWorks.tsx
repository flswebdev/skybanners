"use client";

import { MessageSquare, Palette, Plane, BarChart3, ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { STEPS } from "@/lib/constants";

const iconMap = {
  MessageSquare,
  Palette,
  Plane,
  BarChart3,
} as const;

const CIRCLE_DELAYS        = [0, 1.6, 3.2, 4.8];
const LINE_DELAYS          = [0.5, 2.1, 3.7];   // absolute — desktop horizontal lines
const LINE_DURATION        = 0.9;
const CONNECTOR_DELAY      = 0.5;               // relative delay after card activates — mobile vertical lines
const CONNECTOR_DURATION   = 0.54;              // LINE_DURATION * 0.6
// Border fires exactly when the vertical connector finishes reaching the next card
const BORDER_DELAYS = [
  0,
  CIRCLE_DELAYS[1] + CONNECTOR_DELAY + CONNECTOR_DURATION,
  CIRCLE_DELAYS[2] + CONNECTOR_DELAY + CONNECTOR_DURATION,
  CIRCLE_DELAYS[3] + CONNECTOR_DELAY + CONNECTOR_DURATION,
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(-1);
  const [borderStep, setBorderStep] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    const timers = [
      ...CIRCLE_DELAYS.map((delay, i) => setTimeout(() => setActiveStep(i), delay * 1000)),
      ...BORDER_DELAYS.map((delay, i) => setTimeout(() => setBorderStep(i), delay * 1000)),
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <section className="relative py-20 bg-background-alt overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#111827 1px, transparent 1px), linear-gradient(to right, #111827 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-red/30 bg-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red mb-5">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">How It Works</h2>
          <p className="text-muted max-w-2xl mx-auto">
            From concept to sky-high impact in four simple steps
          </p>
        </div>

        <div ref={ref}>
          {/* ── Desktop: horizontal circles + line track ── */}
          <div className="hidden lg:grid grid-cols-4 gap-6 relative mb-6">
            <div className="absolute top-[18px] h-0.5 bg-gray-200" style={{ left: "12.5%", right: "12.5%" }} />
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
            {STEPS.map((step, i) => (
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

          {/* ── Mobile: stacked cards with animated red border + vertical connector ── */}
          <div className="flex flex-col gap-0 lg:hidden">
            {STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              const bordered = borderStep >= i;
              return (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Card — everything activates together when line arrives */}
                  <motion.div
                    animate={{
                      borderColor: bordered ? "#E81C1C" : "#E5E7EB",
                      opacity: bordered ? 1 : 0.35,
                      filter: bordered ? "grayscale(0%)" : "grayscale(90%)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full rounded-xl border-2 bg-white p-6 relative"
                  >
                    {/* Step number */}
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
                    <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                  </motion.div>

                  {/* Vertical connector — not after last card */}
                  {i < STEPS.length - 1 && (
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

          {/* ── Desktop: 4-col cards ── */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {STEPS.map((step, i) => {
              const Icon = iconMap[step.icon];
              const active = activeStep >= i;
              return (
                <motion.div
                  key={step.number}
                  animate={{
                    opacity: active ? 1 : 0.35,
                    filter: active ? "grayscale(0%)" : "grayscale(100%)",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative rounded-xl border border-card-border bg-white p-6 hover:-translate-y-0.5 hover:shadow-md transition-[transform,box-shadow] duration-200"
                >
                  <div className="h-12 w-12 rounded-lg bg-red/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-red" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative text-center mt-8">
          <a
            href="/how-it-works"
            className="inline-flex items-center gap-1 text-sm font-medium text-red hover:text-red/80 transition-colors"
          >
            See the Full Process <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

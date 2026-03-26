"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const WAVE_DURATION = 15000; // 15s × 4 stats = 60s, matches gradient below

export function Stats() {
  const [activeStat, setActiveStat] = useState<string | null>(null);
  const [waveIndex, setWaveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveIndex((prev) => (prev + 1) % STATS.length);
    }, WAVE_DURATION);
    return () => clearInterval(interval);
  }, []);

  const active = STATS.find((s) => s.id === activeStat);

  return (
    <section className="py-8 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {STATS.map((stat, i) => {
            const isWave = waveIndex === i;
            return (
              <div
                key={stat.id}
                className="relative cursor-pointer rounded-xl overflow-hidden hover:bg-white/10 transition-colors flex flex-col"
                onClick={() => setActiveStat(stat.id)}
              >
                {/* ── Content ── */}
                <div className="relative z-10 p-3 text-center group flex flex-col items-center h-full">
                  <motion.div
                    animate={
                      isWave
                        ? { color: "#3388FF", scale: 1.05 }
                        : { color: i % 2 === 0 ? "#E81C1C" : "#3388FF", scale: 1 }
                    }
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="text-2xl font-extrabold mb-1 tabular-nums"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs font-medium text-white/80 flex-1">{stat.label}</div>
                  <div className="text-[10px] text-white/30 flex items-center justify-center gap-1 group-hover:text-white/50 transition-colors whitespace-nowrap mt-2">
                    View source <ArrowRight className="h-2.5 w-2.5 shrink-0" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveStat(null)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className={cn(
              "relative bg-white border border-card-border rounded-2xl p-8 max-w-lg w-full shadow-xl",
              "animate-fade-in-up"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveStat(null)}
              className="absolute top-4 right-4 text-muted hover:text-heading cursor-pointer"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-5xl font-extrabold text-red mb-3">{active.number}</div>
            <h2 className="text-2xl font-bold text-heading mb-4">{active.label}</h2>
            <p className="text-muted leading-relaxed mb-3">{active.detail}</p>
            {"extra" in active && active.extra && (
              <p className="text-muted leading-relaxed mb-6">{active.extra}</p>
            )}
            <Button href="#contact" onClick={() => setActiveStat(null)}>
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}

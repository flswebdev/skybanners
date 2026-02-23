"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Stats() {
  const [activeStat, setActiveStat] = useState<string | null>(null);

  const active = STATS.find((s) => s.id === activeStat);

  return (
    <section className="py-16 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <div
              key={stat.id}
              className="group relative cursor-pointer rounded-xl border border-white/10 bg-white/5 p-6 text-center hover:border-white/20 hover:bg-white/10 transition-all duration-200"
              onClick={() => setActiveStat(stat.id)}
            >
              <div className={cn(
                "text-4xl font-extrabold mb-2 tabular-nums",
                i % 2 === 0 ? "text-red" : "text-blue-light"
              )}>
                {stat.number}
              </div>
              <div className="text-sm font-medium text-white/80 mb-3">{stat.label}</div>
              <div className="text-xs text-white/30 flex items-center justify-center gap-1 group-hover:text-white/50 transition-colors">
                View source <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
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
            <div className="text-5xl font-extrabold text-red mb-3">
              {active.number}
            </div>
            <h2 className="text-2xl font-bold text-heading mb-4">
              {active.label}
            </h2>
            <p className="text-muted leading-relaxed mb-3">{active.detail}</p>
            {'extra' in active && active.extra && (
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

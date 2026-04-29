"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-5 rounded-xl overflow-hidden transition-all duration-300",
            "border border-card-border bg-background-alt",
            "hover:shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 will-change-transform",
            item.colSpan === 3 ? "md:col-span-3" : item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover && "-translate-y-0.5 shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          )}
        >
          {/* Dot pattern on hover */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col h-full">
            {/* Title + meta */}
            <div className="mb-2">
              <h3 className="font-semibold text-heading tracking-tight text-[15px] leading-snug">
                {item.title}
              </h3>
              {item.meta && (
                <p className="text-xs text-muted mt-0.5">{item.meta}</p>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-muted leading-relaxed flex-1">{item.description}</p>

            {/* Status + Tags */}
            <div className="flex items-center flex-wrap gap-1.5 mt-4">
              {item.status && (
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md border border-card-border bg-white text-muted">
                  {item.status}
                </span>
              )}
              {item.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.5 rounded-md border border-card-border bg-white text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Gradient border on hover */}
          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-200 to-transparent transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          />
        </div>
      ))}
    </div>
  );
}

export { BentoGrid };

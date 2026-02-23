import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export function Card({ className, glow, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-card-border bg-card p-6 shadow-sm transition-all duration-200",
        glow && "hover:-translate-y-0.5 hover:shadow-lg hover:border-red/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

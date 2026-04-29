"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  dark?: boolean;
}

export function AccordionItem({ question, answer, dark }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(
      "overflow-hidden transition-colors",
      dark
        ? "border border-white/10 bg-white/5 hover:border-white/20"
        : "border border-card-border bg-card shadow-sm"
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between p-5 text-left transition-colors cursor-pointer",
          dark ? "hover:bg-white/5" : "hover:bg-background-alt"
        )}
      >
        <h3 className={cn(
          "text-lg font-semibold pr-4",
          dark ? "text-white" : "text-heading"
        )}>{question}</h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-red transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className={cn(
            "px-5 pb-5 leading-relaxed",
            dark ? "text-white/60" : "text-muted"
          )}>{answer}</p>
        </div>
      </div>
    </div>
  );
}

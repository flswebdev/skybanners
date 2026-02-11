"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-card-border rounded-xl overflow-hidden bg-card shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left hover:bg-background-alt transition-colors cursor-pointer"
      >
        <h3 className="text-lg font-semibold text-heading pr-4">{question}</h3>
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
          <p className="px-5 pb-5 text-muted leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

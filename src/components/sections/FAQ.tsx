"use client";

import { AccordionItem } from "@/components/ui";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Everything you need to know about aerial advertising
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

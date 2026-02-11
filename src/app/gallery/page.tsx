"use client";

import { useState } from "react";
import { ImageIcon, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui";
import {
  GALLERY_PAGE,
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  GALLERY_SUBMIT,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-red font-semibold mb-3">{GALLERY_PAGE.badge}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="text-heading">Sky Banners </span>
              <span className="text-blue">{GALLERY_PAGE.headlineAccent}</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {GALLERY_PAGE.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/#contact" variant="primary" size="large">
                {GALLERY_PAGE.primaryCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
                  activeCategory === cat
                    ? "bg-red text-white"
                    : "bg-background-alt text-muted hover:text-heading hover:bg-card-border/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-card-border bg-card shadow-sm overflow-hidden hover:border-blue/30 hover:shadow-md transition-all duration-300"
              >
                {/* Placeholder image area */}
                <div className="aspect-video bg-background-alt flex items-center justify-center">
                  <div className="text-center">
                    <ImageIcon className="h-12 w-12 text-card-border mx-auto mb-2" />
                    <span className="text-xs text-muted">Photo coming soon</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue bg-blue/10 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-semibold text-heading mt-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-xs text-muted mt-2">
                    Client: <span className="font-medium">{item.client}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Your Photos */}
      <section className="py-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-12 w-12 rounded-lg bg-blue/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="h-6 w-6 text-blue" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
            {GALLERY_SUBMIT.title}
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            {GALLERY_SUBMIT.description}
          </p>
          <Button href="/#contact" variant="primary" size="large">
            {GALLERY_SUBMIT.cta}
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for Your <span className="text-red">Sky Banner</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Your campaign could be next in our gallery. Get started today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/#contact" variant="primary" size="large">
              Start Your Campaign <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="tel:1-877-759-2266" variant="outline" size="large" className="border-white/20 text-white hover:bg-white/10">
              Call 1-877-SKY-BANNER
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";
import { SITE_NAME, NAV_ITEMS } from "@/lib/constants";
import type { NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function renderDesktopItem(item: NavItem) {
    if (item.type === "dropdown") {
      return (
        <div key={item.label} className="relative group">
          <button className="flex items-center gap-1 text-sm text-muted hover:text-heading transition-colors cursor-pointer">
            {item.label}
            <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
          </button>
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 z-50">
            <div className="w-64 rounded-xl border border-card-border bg-white shadow-lg p-2">
              {item.items.map((sub) => (
                <a
                  key={sub.href}
                  href={sub.href}
                  className="block rounded-lg px-3 py-2.5 hover:bg-background-alt transition-colors"
                >
                  <span className="block text-sm font-medium text-heading">
                    {sub.label}
                  </span>
                  <span className="block text-xs text-muted mt-0.5">
                    {sub.description}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        className="text-sm text-muted hover:text-heading transition-colors"
      >
        {item.label}
      </a>
    );
  }

  function renderMobileItem(item: NavItem) {
    if (item.type === "dropdown") {
      const isExpanded = mobileDropdown === item.label;
      return (
        <div key={item.label}>
          <button
            onClick={() =>
              setMobileDropdown(isExpanded ? null : item.label)
            }
            className="flex items-center justify-between w-full text-muted hover:text-heading transition-colors cursor-pointer"
          >
            {item.label}
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform duration-200",
                isExpanded && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "grid transition-all duration-200",
              isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <div className="pl-4 pt-2 space-y-2">
                {item.items.map((sub) => (
                  <a
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-muted hover:text-heading transition-colors"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        onClick={() => setIsOpen(false)}
        className="text-muted hover:text-heading transition-colors"
      >
        {item.label}
      </a>
    );
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-card-border shadow-sm"
          : "bg-white border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.5rem] items-center justify-between">
          <a href="/" className="flex items-center group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/sky-banners-logo.png"
              alt={SITE_NAME}
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {(NAV_ITEMS as readonly NavItem[]).map(renderDesktopItem)}
            <Button href="/#contact" size="default">
              Get Started
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-heading cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[32rem] pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-4 pt-4 border-t border-card-border">
            {(NAV_ITEMS as readonly NavItem[]).map(renderMobileItem)}
            <Button href="/#contact" className="w-fit">
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}

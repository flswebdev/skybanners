import { Button } from "@/components/ui";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden bg-charcoal">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(232,28,28,0.12),transparent)]" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Take Your Message to the <span className="text-red">Sky</span>?
        </h2>
        <p className="text-white/50 max-w-xl mx-auto mb-10 text-lg">
          One of the only aerial advertising providers in Southern Ontario
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="large">
            Get a Quote
          </Button>
          <Button href="tel:1-877-759-2266" variant="outline" size="large" className="border-white/20 text-white hover:bg-white/10 hover:border-white/40">
            Call 1-877-SKY-BANNER
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui";

export function CTASection() {
  return (
    <section className="py-20 bg-charcoal relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Take Your Message to the <span className="text-red">Sky</span>?
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-8">
          One of the only aerial advertising providers in Southern Ontario
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#contact" variant="primary" size="large">
            Get a Quote
          </Button>
          <Button href="#contact" variant="outline" size="large" className="border-white/20 text-white hover:bg-white/10">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

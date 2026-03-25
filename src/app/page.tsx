import {
  Hero,
  Services,
  Stats,
  WhyAerial,
  CoverageArea,
  HowItWorks,
  WhatsIncluded,
  FAQ,
  ContactForm,
} from "@/components/sections";

import { FlippingCardDemo } from "@/components/sections/FlippingCardDemo";
import { GradientBackground } from "@/components/ui/gradient-background";

const sharedGradients = [
  "linear-gradient(135deg, #ffffff 0%, #0055DD 100%)",
  "linear-gradient(135deg, #E81C1C 0%, #ffffff 100%)",
  "linear-gradient(135deg, #0055DD 0%, #E81C1C 100%)",
  "linear-gradient(135deg, #ffffff 0%, #E81C1C 100%)",
  "linear-gradient(135deg, #0055DD 0%, #ffffff 100%)",
];

export default function Home() {
  return (
    <main className="bg-charcoal">
      <Hero />
      <GradientBackground gradients={sharedGradients} animationDuration={60} className="min-h-0">
        <Stats />
        <FlippingCardDemo />
      </GradientBackground>
      <Services />
      <HowItWorks />
      <WhyAerial />
      <CoverageArea />
      <FAQ />
      <ContactForm />
    </main>
  );
}

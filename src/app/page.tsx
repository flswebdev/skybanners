import {
  Hero,
  Services,
  AudienceSplit,
  Stats,
  WhyAerial,
  CoverageArea,
  HowItWorks,
  WhatsIncluded,
  FAQ,
  ContactForm,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AudienceSplit />
      <Stats />
      <WhyAerial />
      <CoverageArea />
      <HowItWorks />
      <WhatsIncluded />
      <FAQ />
      <ContactForm />
    </main>
  );
}

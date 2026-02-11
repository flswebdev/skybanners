import {
  Hero,
  Stats,
  Services,
  WhyAerial,
  BusinessSolutions,
  PersonalCelebrations,
  HowItWorks,
  CoverageArea,
  WhatsIncluded,
  FAQ,
  ContactForm,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyAerial />
      <BusinessSolutions />
      <PersonalCelebrations />
      <HowItWorks />
      <CoverageArea />
      <WhatsIncluded />
      <FAQ />
      <ContactForm />
      <CTASection />
    </main>
  );
}

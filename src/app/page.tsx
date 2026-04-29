import {
  Hero,
  SocialProof,
  Stats,
  AudienceSplit,
  Services,
  HowItWorks,
  WhyAerial,
  CoverageArea,
  FAQ,
  ContactForm,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <SocialProof />
      <Services />
      <AudienceSplit />
      <HowItWorks />
      <WhyAerial />
      <CoverageArea />
      <FAQ />
      <ContactForm />
    </main>
  );
}

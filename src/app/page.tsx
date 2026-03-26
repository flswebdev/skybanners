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
      <SocialProof />
      <Stats />
      <AudienceSplit />
      <Services />
      <HowItWorks />
      <WhyAerial />
      <CoverageArea />
      <FAQ />
      <ContactForm />
    </main>
  );
}

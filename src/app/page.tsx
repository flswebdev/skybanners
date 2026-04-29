import {
  Hero,
  SocialProof,
  AudienceSplit,
  Services,
  HowItWorks,
  WhyAerial,
  Gallery,
  CoverageArea,
  FAQ,
  ContactForm,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AudienceSplit />
      <SocialProof />
      <HowItWorks />
      <WhyAerial />
      <Gallery />
      <CoverageArea />
      <FAQ />
      <ContactForm />
    </main>
  );
}

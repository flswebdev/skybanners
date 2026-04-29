import type { Metadata } from "next";
import { ContactForm } from "@/components/sections";
import { AccordionItem } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us | Sky Banners",
  description:
    "Get a custom quote for aerial banner advertising in Southern Ontario. Billboard banners, letter banners, combo banners, and smoke displays. Response within 24 hours.",
};

const FAQ_SECTIONS = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "Where do you operate?",
        answer: "We serve Southern Ontario and Quebec, including Toronto, Hamilton, London, Kitchener-Waterloo, Barrie, Niagara, and surrounding areas. If there's an outdoor event or audience in Southern Ontario or Quebec, we can reach them.",
      },
      {
        question: "When do you fly?",
        answer: "We operate year-round, weather permitting. We fly during daylight hours for optimal visibility.",
      },
      {
        question: "What happens if weather cancels my flight?",
        answer: "If weather conditions prevent flying, we reschedule at no additional charge. We monitor forecasts closely and keep you informed well in advance.",
      },
      {
        question: "Can I be present during the flight?",
        answer: "Yes — from the ground! We'll coordinate the flight timing so you can be at the target location to watch your banner fly overhead. For proposals and events, we'll time the flyover to your exact moment.",
      },
    ],
  },
  {
    title: "Pricing",
    faqs: [
      {
        question: "How much does aerial advertising cost?",
        answer: "Every campaign is quoted individually — pricing depends on your flight route, setup time, fuel, and how long your banner will be in the air over your target area. Letter banners are our most accessible format, while billboard and combo banners include custom design and printing. Reach out for a free quote.",
      },
      {
        question: "What's included in the price?",
        answer: "Every campaign includes: custom banner design (for billboard/combo banners), strategic route planning, the flight, and weather guarantee with free rescheduling.",
      },
      {
        question: "Are there any hidden fees?",
        answer: "None. Your quote covers everything: design, production (if applicable), and the flight. Weather rescheduling is free. The only additional cost would be if you request a significantly longer flight or additional services after booking.",
      },
      {
        question: "Do you offer payment plans or deposits?",
        answer: "We typically require a deposit to secure your flight date, with the balance due before the flight. For large campaigns or multi-flight packages, we can discuss flexible payment arrangements.",
      },
    ],
  },
  {
    title: "Personal & Celebrations",
    faqs: [
      {
        question: "How far in advance do I need to book?",
        answer: "We recommend 3–4 weeks for custom billboard banners. Letter banners and smoke displays can sometimes be arranged with shorter notice. For proposals and events with specific dates, book as early as possible to guarantee your slot.",
      },
      {
        question: "Can you help with a surprise proposal?",
        answer: "We specialize in surprise flyovers! We'll work discreetly with you on timing and positioning. We can coordinate with your photographer, plan the exact moment, and ensure your partner is looking up at the right time.",
      },
      {
        question: "Can you guarantee the exact time of the flyover?",
        answer: "We coordinate timing closely with you and aim for your specified window. Weather and air traffic can cause minor adjustments, but we stay in constant communication and will fly within your event timeframe.",
      },
      {
        question: "Will I know when the banner is flying over?",
        answer: "Absolutely. Your pilot will reach out before the flyover so you know exactly when to look up. We recommend having someone ready with their phone to capture the moment.",
      },
      {
        question: "How do gender reveal smoke displays work?",
        answer: "We release coloured smoke (pink or blue) from the aircraft while flying over your event location. The smoke is visible for miles and creates a dramatic reveal moment. You can combine it with a banner for the full experience.",
      },
      {
        question: "What occasions can I book a banner for?",
        answer: "Anything! Proposals, weddings, gender reveals, birthdays, graduations, anniversaries, retirements, or any custom message. If you can say it in 40 characters (for letter banners) or design it (for billboard banners), we can fly it.",
      },
    ],
  },
  {
    title: "Business Campaigns",
    faqs: [
      {
        question: "How effective is aerial advertising for brands?",
        answer: "Extremely effective. Aerial advertising delivers an 88% recall rate — the highest of any advertising medium. 79% of viewers correctly identify the brand, and the CPM is under $6, making it one of the most cost-efficient options available.",
      },
      {
        question: "Can I target a specific event or location?",
        answer: "Absolutely. We specialize in event targeting. Whether it's a CFL game, music festival, beach crowd, or grand opening, we plan routes to maximize visibility over your exact target audience.",
      },
      {
        question: "What brands have you worked with?",
        answer: "We've flown banners for McDonald's, Sony, Subway, Shell Gas, McCain's, Jet Auto Wash, and many more. From global brands to local businesses, our aerial advertising delivers results across industries.",
      },
      {
        question: "Do you offer multi-flight packages?",
        answer: "Yes. Many of our business clients book recurring flights throughout the season. Multi-flight packages offer better rates and build sustained brand awareness over time. Contact us for package pricing.",
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-red font-semibold mb-3 text-sm uppercase tracking-widest">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="text-heading">Let&apos;s Plan Your </span>
              <span className="text-blue">Banner</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              Tell us about your message, your audience, and your date. We&apos;ll
              put together a custom quote and flight plan within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Everything you need to know before booking. Can&apos;t find your
              answer? Just ask us directly using the form above.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
            {FAQ_SECTIONS.map((section) => (
              <div
                key={section.title}
              >
                <h3 className="text-base font-bold text-heading mb-4 pb-3 border-b border-card-border">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.faqs.map((faq) => (
                    <AccordionItem
                      key={faq.question}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

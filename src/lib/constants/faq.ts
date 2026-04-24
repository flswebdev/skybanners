export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  icon: string;
  questions: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    category: "General",
    icon: "HelpCircle",
    questions: [
      {
        question: "What is aerial advertising?",
        answer: "Aerial advertising uses aircraft to tow large banners over target audiences at beaches, stadiums, festivals, and urban areas. It's one of the oldest and most effective forms of out-of-home advertising, delivering the highest recall rate of any medium.",
      },
      {
        question: "Where do you operate?",
        answer: "We serve Southern Ontario and Quebec, including Toronto, Hamilton, London, Kitchener-Waterloo, Barrie, Niagara, and surrounding areas. If there's an outdoor event or audience in Southern Ontario or Quebec, we can reach them.",
      },
      {
        question: "When do you fly?",
        answer: "We operate year-round, weather permitting. We fly during daylight hours for optimal visibility and can accommodate bookings across all seasons.",
      },
      {
        question: "How far in advance should I book?",
        answer: "We recommend 2–4 weeks for billboard and combo banners (which require design and production). Letter banners and smoke displays can sometimes be arranged within 24–48 hours. For peak dates (long weekends, major events), book as early as possible.",
      },
      {
        question: "What happens if weather cancels my flight?",
        answer: "Safety is our top priority. If weather conditions prevent flying, we reschedule your flight at no additional charge. We monitor forecasts closely and keep you informed well in advance.",
      },
    ],
  },
  {
    category: "Business",
    icon: "Briefcase",
    questions: [
      {
        question: "How effective is aerial advertising for brands?",
        answer: "Extremely effective. Aerial advertising delivers an 88% recall rate—the highest of any advertising medium. 79% of viewers correctly identify the brand, and the CPM is under $6, making it one of the most cost-efficient options available.",
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
  {
    category: "Personal",
    icon: "Heart",
    questions: [
      {
        question: "Can you help with a surprise proposal?",
        answer: "We specialize in surprise flyovers! We'll work discreetly with you on timing and positioning. We can coordinate with your photographer, plan the exact moment, and ensure your partner is looking up at the right time.",
      },
      {
        question: "How do gender reveal smoke displays work?",
        answer: "We release coloured smoke (pink or blue) from the aircraft while flying over your event location. The smoke is visible for miles and creates a dramatic reveal moment. You can combine it with a banner for the full experience.",
      },
      {
        question: "What occasions can I book a banner for?",
        answer: "Anything! Proposals, weddings, gender reveals, birthdays, graduations, anniversaries, retirements, or any custom message. If you can say it in 40 characters (for letter banners) or design it (for billboard banners), we can fly it.",
      },
      {
        question: "Can I include a photo on my banner?",
        answer: "Yes—with billboard or combo banners, you can include photos, artwork, or any custom design. Combo banners let you pair a printed graphic with text for maximum personal impact.",
      },
    ],
  },
  {
    category: "Technical",
    icon: "Settings",
    questions: [
      {
        question: "What file formats do you accept for banner designs?",
        answer: "We accept PNG, JPG, PDF, AI (Adobe Illustrator), and EPS files. For best results, provide files at 150 DPI minimum at the banner's print size. Vector formats (AI, PDF) are ideal for logos and text.",
      },
      {
        question: "How many characters can a letter banner have?",
        answer: "Character limits depend on letter size: 5ft letters = 50 characters, 7ft = 40 characters, 10ft = 30 characters, 12ft = 25 characters. We'll help you craft a message that fits within the limit and maximizes impact.",
      },
      {
        question: "How visible are banners from the ground?",
        answer: "Very visible. Our banners are designed for ground-level readability. On a clear day, banners are visible from over a kilometre away. Letter banners use high-contrast characters, and billboard banners are sized for maximum visual impact.",
      },
      {
        question: "What if I don't have a design?",
        answer: "No problem! Our design team can create your banner artwork from scratch. Just provide your logo, brand guidelines, or even a rough idea, and we'll design something eye-catching. Design assistance is included at no extra cost.",
      },
    ],
  },
  {
    category: "Pricing",
    icon: "DollarSign",
    questions: [
      {
        question: "How much does aerial advertising cost?",
        answer: "Pricing varies based on banner type, size, flight duration, and location. Letter banners are the most affordable (no production cost), while billboard and combo banners include design and printing. Contact us for a custom quote—consultations are free.",
      },
      {
        question: "What's included in the price?",
        answer: "Every campaign includes: custom banner design (for billboard/combo), strategic route planning, the flight itself, professional photo & video documentation, a social media content package, and a post-campaign analytics report.",
      },
      {
        question: "Are there any hidden fees?",
        answer: "None. Your quote covers everything: design, production (if applicable), flight, documentation, and content delivery. Weather rescheduling is free. The only additional cost would be if you request a significantly longer flight or additional services after booking.",
      },
      {
        question: "Do you offer payment plans or deposits?",
        answer: "We typically require a deposit to secure your flight date, with the balance due before the flight. For large campaigns or multi-flight packages, we can discuss flexible payment arrangements. Contact us to discuss your needs.",
      },
    ],
  },
];

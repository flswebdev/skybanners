export const HOW_IT_WORKS_PAGE = {
  badge: "How It Works",
  headline: "From Concept to Sky in 5 Simple Steps",
  headlineAccent: "5 Simple Steps",
  description:
    "We handle everything from initial consultation to post-flight documentation. Here\u2019s exactly what to expect when you book an aerial campaign with Sky Banners.",
  primaryCta: "Start Your Campaign",
  secondaryCta: "Contact Us",
} as const;

export const EXPANDED_STEPS = [
  {
    number: "01",
    icon: "MessageSquare" as const,
    title: "Consultation",
    description: "Tell us about your campaign. We\u2019ll discuss your message, target audience, ideal location, timing, and budget to create a tailored flight plan.",
    details: [
      "Free, no-obligation consultation",
      "Phone, email, or in-person meeting",
      "We\u2019ll recommend the best banner type for your goals",
      "Custom quote provided within 24 hours",
    ],
  },
  {
    number: "02",
    icon: "Palette" as const,
    title: "Design & Approval",
    description: "For billboard and combo banners, our design team creates your custom banner artwork. You review, request changes, and approve the final design before production.",
    details: [
      "Professional design assistance included",
      "Unlimited revisions until you\u2019re satisfied",
      "Digital proof provided for your approval",
      "Letter banners skip this step \u2014 no design needed",
    ],
  },
  {
    number: "03",
    icon: "Printer" as const,
    title: "Production",
    description: "Your approved design goes to print on durable aviation-grade material. Our banners are built to look sharp at altitude and withstand the elements.",
    details: [
      "High-resolution digital printing",
      "Aviation-grade nylon material",
      "Quality-checked before every flight",
      "Turnaround: 1\u20132 weeks after approval",
    ],
  },
  {
    number: "04",
    icon: "Plane" as const,
    title: "Flight Execution",
    description: "Your banner takes to the sky. Our experienced pilots fly optimized routes over your target area at peak visibility times. We coordinate timing with your event.",
    details: [
      "FAA/Transport Canada certified pilots",
      "GPS-tracked flight routes",
      "Real-time coordination for events",
      "Weather monitoring with free rescheduling",
    ],
  },
  {
    number: "05",
    icon: "Camera" as const,
    title: "Documentation & Delivery",
    description: "After the flight, you receive professional photos, video footage, flight data, and a campaign summary. Everything you need to measure impact and share on social media.",
    details: [
      "Professional aerial photos & video",
      "Social media-ready content package",
      "Flight route & duration data",
      "Estimated impressions report",
    ],
  },
] as const;

export const FILE_FORMATS = {
  title: "File Formats & Design Requirements",
  description: "For billboard and combo banners, we accept most common design file formats. Our team can also work from rough concepts or brand guidelines.",
  formats: [
    { format: "PNG", description: "Recommended. Lossless quality with transparency support." },
    { format: "JPG", description: "Acceptable. Use highest quality settings (300 DPI minimum)." },
    { format: "PDF", description: "Vector PDF preferred for logos and text-heavy designs." },
    { format: "AI", description: "Adobe Illustrator native files. Ideal for vector artwork." },
    { format: "EPS", description: "Encapsulated PostScript files, ideal for scalable vector artwork." },
  ],
  note: "Don\u2019t have a design? No problem. Our team can create one from your brand guidelines, logo, or even a rough sketch.",
} as const;

export const LEAD_TIMES = [
  {
    type: "Letter Banners",
    time: "24\u201348 hours",
    description: "No production needed. Just pick your message and we\u2019ll schedule your flight.",
    icon: "Zap" as const,
  },
  {
    type: "Billboard Banners",
    time: "2\u20133 weeks",
    description: "Includes design, approval, and print production. Rush service may be available.",
    icon: "ClipboardList" as const,
  },
  {
    type: "Smoke Displays",
    time: "48 hours",
    description: "Minimal setup required. Book quickly for gender reveals and events.",
    icon: "Wind" as const,
  },
] as const;

export const DELIVERABLES = [
  "High-resolution aerial photographs of your banner in flight",
  "Professional video footage (drone and/or ground-level)",
  "Social media content package (cropped and optimized for Instagram, Facebook, etc.)",
  "GPS flight route map showing your banner\u2019s path",
  "Flight duration and timing report",
  "Estimated audience impressions based on location and event data",
] as const;

export const PROCESS_FAQS = [
  {
    question: "What if I need to reschedule my flight?",
    answer: "We understand plans change. We offer free rescheduling for weather delays, and flexible rescheduling for other reasons with reasonable notice. We\u2019ll always work with you to find an alternative date.",
  },
  {
    question: "Can I be present during the flight?",
    answer: "Absolutely! We encourage it. We\u2019ll coordinate the flight timing so you can be at the target location to see your banner fly overhead. For proposals and events, we\u2019ll time the flyover to your exact moment.",
  },
  {
    question: "How do you determine the flight route?",
    answer: "We plan routes based on your target audience, venue location, wind patterns, and air traffic. Our pilots use GPS tracking to follow optimized paths that maximize visibility over your target area.",
  },
  {
    question: "What happens if weather cancels my flight?",
    answer: "Safety comes first. If weather prevents a flight, we reschedule at no additional charge. We monitor forecasts closely and will notify you in advance if conditions look unfavourable.",
  },
] as const;

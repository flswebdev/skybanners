export const PERSONAL_OCCASIONS = [
  {
    icon: "Heart" as const,
    title: "Marriage Proposals",
    description: "Pop the question in the most unforgettable way. Imagine their face when they look up and see your message in the sky. We coordinate timing perfectly with your plan.",
    popular: true,
  },
  {
    icon: "Rings" as const,
    title: "Wedding Celebrations",
    description: "Surprise your guests with a sky-high congratulations. Fly a banner over your ceremony, reception venue, or bridal shower for a once-in-a-lifetime moment.",
    popular: false,
  },
  {
    icon: "Baby" as const,
    title: "Gender Reveals",
    description: "Announce your baby\u2019s gender with coloured smoke displays visible for miles. Choose pink or blue smoke for the ultimate reveal moment. Banner + smoke combos available.",
    popular: true,
  },
  {
    icon: "Cake" as const,
    title: "Birthdays & Milestones",
    description: "Make their birthday legendary. Whether it\u2019s a Sweet 16, 30th, 50th, or 100th\u2014a sky banner turns any birthday into front-page news.",
    popular: false,
  },
  {
    icon: "GraduationCap" as const,
    title: "Graduations",
    description: "Celebrate their achievement with a message they\u2019ll never forget. Fly a congratulations banner over the ceremony or grad party.",
    popular: false,
  },
  {
    icon: "Star" as const,
    title: "Anniversaries",
    description: "Mark your milestone with a grand romantic gesture. Whether it\u2019s your 1st or 50th anniversary, put your love story in the sky.",
    popular: false,
  },
  {
    icon: "PartyPopper" as const,
    title: "Retirement Celebrations",
    description: "Send them off in style. A retirement banner flying overhead makes for an unforgettable farewell celebration.",
    popular: false,
  },
  {
    icon: "Mail" as const,
    title: "Custom Messages",
    description: "Apologies, thank-yous, promposals, \"I love you\"\u2014if you can say it in 40 characters, we can fly it. Any message, any occasion.",
    popular: true,
  },
] as const;

export const SMOKE_COLORS = [
  { color: "White", hex: "#FFFFFF" },
  { color: "Red", hex: "#EF4444" },
  { color: "Blue", hex: "#3B82F6" },
  { color: "Green", hex: "#22C55E" },
  { color: "Yellow", hex: "#EAB308" },
  { color: "Orange", hex: "#F97316" },
  { color: "Purple", hex: "#A855F7" },
  { color: "Pink", hex: "#EC4899" },
] as const;

export const PERSONAL_BANNER_OPTIONS = [
  {
    icon: "PenLine" as const,
    title: "Letter Banner",
    description: "Your custom message in bold, individual characters. Up to 40 characters\u2014perfect for proposals, birthday wishes, and congratulations.",
    bestFor: "Short, punchy messages",
  },
  {
    icon: "ClipboardList" as const,
    title: "Billboard Banner",
    description: "Full-colour printed banner with custom graphics, photos, or artwork. Go beyond text with imagery that captures your moment.",
    bestFor: "Visual messages with photos or artwork",
  },
  {
    icon: "Palette" as const,
    title: "Combo Banner",
    description: "Printed graphic plus text\u2014combine a photo or design with your personal message for maximum emotional impact.",
    bestFor: "Photo + message combinations",
  },
  {
    icon: "Wind" as const,
    title: "Smoke Display",
    description: "Coloured smoke trails in the sky. Available in 8 colours. Perfect for gender reveals (pink or blue) or adding dramatic flair to any celebration.",
    bestFor: "Gender reveals & dramatic reveals",
  },
] as const;

export const PERSONAL_INCLUSIONS = [
  "Custom message or banner design",
  "Professional flight crew",
  "Coordinated timing for your event",
  "Photo & video of your banner in flight",
  "Flexible location options across Southern Ontario",
  "Weather guarantee & free rescheduling",
] as const;

export const PERSONAL_FAQS = [
  {
    question: "How far in advance do I need to book?",
    answer: "We recommend 2\u20133 weeks for custom billboard banners. Letter banners and smoke displays can sometimes be arranged with shorter notice. For proposals and events with specific dates, book as early as possible to guarantee your slot.",
  },
  {
    question: "Can you guarantee the exact time of the flyover?",
    answer: "We coordinate timing closely with you and aim for your specified window. Weather and air traffic can cause minor adjustments, but we stay in constant communication and will fly within your event timeframe.",
  },
  {
    question: "What if my proposal / event is a surprise?",
    answer: "We specialize in surprise flyovers! We\u2019ll work discreetly with you on timing and positioning. Just make sure your person is looking up when the banner appears\u2014we can help coordinate that too.",
  },
  {
    question: "How visible is the banner from the ground?",
    answer: "Very visible. Our banners are designed to be clearly readable from the ground. Letter banners use large individual characters, and billboard banners are sized for maximum visual impact. On a clear day, banners are visible from over a kilometre away.",
  },
  {
    question: "What smoke colours are available for gender reveals?",
    answer: "We offer 8 smoke colours: white, red, blue, green, yellow, orange, purple, and pink. For gender reveals, most people choose pink (girl) or blue (boy). You can also combine banner + smoke for a full reveal experience.",
  },
  {
    question: "Can I get photos and video of the flight?",
    answer: "Absolutely. Every flight includes professional photo and video documentation of your banner in the sky. We provide high-quality files you can share on social media, frame, or keep as a memory.",
  },
] as const;

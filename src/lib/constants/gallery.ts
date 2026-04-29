export const GALLERY_PAGE = {
  badge: "Gallery",
  headline: "Sky Banners in Action",
  headlineAccent: "in Action",
  description:
    "See examples of our aerial advertising campaigns across Southern Ontario. From brand campaigns over stadiums to personal proposals over beaches—this is what we do.",
  primaryCta: "Start Your Campaign",
  secondaryCta: "View All",
} as const;

export const GALLERY_CATEGORIES = [
  "All",
  "Billboard Banners",
  "Letter Banners",
  "Combo Banners",
  "Smoke Displays",
  "Events",
] as const;

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "McDonald’s Grand Opening Campaign",
    category: "Combo Banners",
    description: "McDonald’s grand opening combo banner flown over Southern Ontario, combining bold branding with a clear message.",
    client: "McDonald’s",
    src: "/images/gallery/gallery-2.jpg",
  },
  {
    id: 2,
    title: "The Gaslight District Campaign",
    category: "Billboard Banners",
    description: "Full-colour billboard banner for The Gaslight District — sharp, full-bleed branding against a perfect blue sky.",
    client: "The Gaslight District",
    src: "/images/gallery/gallery-3.jpg",
  },
  {
    id: 3,
    title: "Jet Auto Wash Campaign",
    category: "Billboard Banners",
    description: "Season-long billboard banner campaign for Jet Auto Wash — recognizable branding seen across Southern Ontario skies.",
    client: "Jet Auto Wash",
    src: "/images/gallery/gallery-7.jpg",
  },
  {
    id: 4,
    title: "Marriage Proposal",
    category: "Letter Banners",
    description: "A once-in-a-lifetime question, written across the sky. She said yes.",
    client: "Personal",
    src: "/images/gallery/gallery-9.jpg",
  },
  {
    id: 5,
    title: "Birthday Celebration",
    category: "Letter Banners",
    description: "A sky-high birthday surprise — a message no one in the crowd could miss.",
    client: "Personal",
    src: "/images/gallery/gallery-4.png",
  },
  {
    id: 6,
    title: "Veritas Charities Campaign",
    category: "Combo Banners",
    description: "Combo banner raising awareness for Veritas Charities’ annual fundraising campaign.",
    client: "Veritas Charities",
    src: "/images/gallery/gallery-5.png",
  },
  {
    id: 7,
    title: "Gaslight District Free Music Fest",
    category: "Events",
    description: "Combo banner promoting The Gaslight District’s free outdoor music festival — July 28–30.",
    client: "The Gaslight District",
    src: "/images/gallery/gallery-8.jpg",
  },
  {
    id: 8,
    title: "Gender Reveal Smoke Display",
    category: "Smoke Displays",
    description: "Vibrant smoke display over Southern Ontario countryside for a family’s gender reveal celebration.",
    client: "Personal",
    src: "/images/gallery/gallery-4.jpg",
  },
  {
    id: 9,
    title: "Smoke Display at Takeoff",
    category: "Smoke Displays",
    description: "A dramatic smoke display captured at takeoff — the start of a very memorable flight.",
    client: "Personal",
    src: "/images/gallery/gallery-6.jpg",
  },
] as const;

export const GALLERY_SUBMIT = {
  title: "Have Photos of Our Work?",
  description: "If we flew a banner for you, we’d love to feature your photos in our gallery. Send us your shots and we’ll add them with your permission.",
  cta: "Submit Your Photos",
} as const;

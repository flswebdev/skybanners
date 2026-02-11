export const GALLERY_PAGE = {
  badge: "Gallery",
  headline: "Sky Banners in Action",
  headlineAccent: "in Action",
  description:
    "See examples of our aerial advertising campaigns across Southern Ontario. From brand campaigns over stadiums to personal proposals over beaches\u2014this is what we do.",
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
    title: "McDonald's Summer Campaign",
    category: "Billboard Banners",
    description: "Full-colour billboard banner over Wasaga Beach promoting summer menu items.",
    client: "McDonald's",
    placeholder: true,
  },
  {
    id: 2,
    title: "Subway Grand Opening",
    category: "Letter Banners",
    description: "Letter banner announcing new Subway location over Hamilton.",
    client: "Subway",
    placeholder: true,
  },
  {
    id: 3,
    title: "Sony Product Launch",
    category: "Combo Banners",
    description: "Combo banner with Sony branding and product launch messaging at CNE.",
    client: "Sony",
    placeholder: true,
  },
  {
    id: 4,
    title: "Gender Reveal \u2014 It's a Girl!",
    category: "Smoke Displays",
    description: "Pink smoke display over a Kitchener-Waterloo backyard celebration.",
    client: "Personal",
    placeholder: true,
  },
  {
    id: 5,
    title: "Jet Auto Wash Recurring Campaign",
    category: "Billboard Banners",
    description: "Season-long billboard campaign for Jet Auto Wash across Southern Ontario.",
    client: "Jet Auto Wash",
    placeholder: true,
  },
  {
    id: 6,
    title: "Marriage Proposal \u2014 Will You Marry Me?",
    category: "Letter Banners",
    description: "Surprise proposal letter banner over a Lake Ontario beach.",
    client: "Personal",
    placeholder: true,
  },
  {
    id: 7,
    title: "CFL Game Day Sponsorship",
    category: "Events",
    description: "Pre-game flyover at Tim Hortons Field for a major brand sponsor.",
    client: "Corporate",
    placeholder: true,
  },
  {
    id: 8,
    title: "Shell Gas Summer Promotion",
    category: "Combo Banners",
    description: "Shell branding with summer promotion messaging over Barrie waterfront.",
    client: "Shell Gas",
    placeholder: true,
  },
  {
    id: 9,
    title: "Gender Reveal \u2014 It's a Boy!",
    category: "Smoke Displays",
    description: "Blue smoke display combined with letter banner at a London park.",
    client: "Personal",
    placeholder: true,
  },
  {
    id: 10,
    title: "Birthday Celebration",
    category: "Letter Banners",
    description: "\"Happy 50th Dave!\" letter banner flyover during a surprise party.",
    client: "Personal",
    placeholder: true,
  },
  {
    id: 11,
    title: "McCain's Beach Campaign",
    category: "Billboard Banners",
    description: "McCain\u2019s branded billboard banner over Grand Bend beach crowds.",
    client: "McCain's",
    placeholder: true,
  },
  {
    id: 12,
    title: "Music Festival Sponsorship",
    category: "Events",
    description: "Aerial banner flyover during a major summer music festival.",
    client: "Corporate",
    placeholder: true,
  },
] as const;

export const GALLERY_SUBMIT = {
  title: "Have Photos of Our Work?",
  description: "If we flew a banner for you, we\u2019d love to feature your photos in our gallery. Send us your shots and we\u2019ll add them with your permission.",
  cta: "Submit Your Photos",
} as const;

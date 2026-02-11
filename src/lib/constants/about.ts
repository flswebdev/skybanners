export const ABOUT_PAGE = {
  badge: "About Sky Banners",
  headline: "Southern Ontario\u2019s Aerial Advertising Experts",
  headlineAccent: "Aerial Advertising Experts",
  description:
    "We\u2019re one of the only dedicated aerial advertising providers in Southern Ontario. From brand campaigns to personal celebrations, we put your message where everyone can see it\u2014in the sky.",
  primaryCta: "Get a Quote",
  secondaryCta: "See Our Services",
} as const;

export const COMPANY_STORY = {
  title: "Our Story",
  paragraphs: [
    "Sky Banners was founded on a simple idea: the sky is the most powerful billboard there is. In a world saturated with digital ads, pop-ups, and sponsored content, aerial advertising cuts through the noise in a way nothing else can.",
    "We serve all of Southern Ontario\u2014from the beaches of Lake Huron to the stadiums of Toronto, from Niagara\u2019s tourist corridors to Kitchener-Waterloo\u2019s tech campus events. Our clients range from global brands like McDonald\u2019s and Sony to couples planning the proposal of a lifetime.",
    "Every flight is personal to us. Whether you\u2019re a marketing director launching a product or a father planning a gender reveal, we treat every campaign with the same care, professionalism, and attention to detail.",
  ],
} as const;

export const FLEET_INFO = {
  title: "Our Fleet & Operations",
  description: "We operate purpose-equipped aircraft designed for banner towing across Southern Ontario\u2019s diverse terrain and weather conditions.",
  details: [
    { label: "Aircraft", value: "Purpose-equipped banner tow planes" },
    { label: "Pilots", value: "FAA/Transport Canada certified, experienced" },
    { label: "Season", value: "May through October" },
    { label: "Coverage", value: "All of Southern Ontario" },
    { label: "GPS Tracking", value: "Every flight route recorded" },
    { label: "Safety Record", value: "Impeccable safety standards" },
  ],
} as const;

export const DIFFERENTIATORS = [
  {
    icon: "MapPin" as const,
    title: "Local Expertise",
    description: "We know Southern Ontario\u2019s events, venues, and flight corridors. Our route planning is optimized for this region\u2019s unique geography and audience patterns.",
  },
  {
    icon: "Handshake" as const,
    title: "Full-Service Provider",
    description: "Design, production, flight, and documentation\u2014all in-house. One point of contact, no subcontracting, no surprises.",
  },
  {
    icon: "Shield" as const,
    title: "Weather Guarantee",
    description: "If weather grounds your flight, we reschedule at no charge. You never pay for a flight that doesn\u2019t happen.",
  },
  {
    icon: "Camera" as const,
    title: "Professional Documentation",
    description: "Every flight includes high-quality photos, video, and a campaign report. You get content to share and data to measure.",
  },
] as const;

export const CLIENT_LOGOS = [
  "McDonald's",
  "Sony",
  "Subway",
  "Shell Gas",
  "McCain's",
  "Mooseheads",
  "East Park",
  "GTA Exotics",
  "Jet Auto Wash",
  "Wealthsimple",
  "MGM",
] as const;

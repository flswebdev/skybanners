export const ABOUT_PAGE = {
  badge: "About Sky Banners",
  headline: "Southern Ontario's Aerial Advertising Experts",
  headlineAccent: "Aerial Advertising Experts",
  description:
    "We're one of the only dedicated aerial advertising providers serving Southern Ontario and Quebec. From brand campaigns to personal celebrations, we put your message where everyone can see it—in the sky.",
  primaryCta: "Get a Quote",
  secondaryCta: "See Our Services",
} as const;

export const COMPANY_STORY = {
  title: "Our Story",
  paragraphs: [
    "Sky Banners was founded on a simple idea: the sky is the most powerful billboard there is. In a world saturated with digital ads, pop-ups, and sponsored content, aerial advertising cuts through the noise in a way nothing else can.",
    "We serve Southern Ontario and Quebec—from the beaches of Lake Huron to the stadiums of Toronto, from Niagara's tourist corridors to Kitchener-Waterloo's tech campus events. Our clients range from global brands like McDonald's and Sony to couples planning the proposal of a lifetime.",
    "Every flight is personal to us. Whether you're a marketing director launching a product or a father planning a gender reveal, we treat every campaign with the same care, professionalism, and attention to detail.",
  ],
} as const;

export const FLEET_INFO = {
  title: "Our Fleet & Operations",
  description: "We operate purpose-equipped aircraft designed for banner towing across Southern Ontario and Quebec.",
  details: [
    { label: "Aircraft", value: "Purpose-equipped banner tow planes" },
    { label: "Pilots", value: "FAA/Transport Canada certified, experienced" },
    { label: "Operations", value: "Year-round (weather permitting)" },
    { label: "Coverage", value: "Southern Ontario & Quebec" },
    { label: "GPS Tracking", value: "Every flight route recorded" },
    { label: "Safety Record", value: "Impeccable safety standards" },
  ],
} as const;

export const DIFFERENTIATORS = [
  {
    icon: "MapPin" as const,
    title: "Local Expertise",
    description: "We know Southern Ontario's events, venues, and flight corridors inside and out. Our route planning is optimized for this region's unique geography and audience patterns.",
  },
  {
    icon: "Handshake" as const,
    title: "Full-Service Provider",
    description: "Design, production, flight, and documentation—all in-house. One point of contact, no subcontracting, no surprises.",
  },
  {
    icon: "Shield" as const,
    title: "Weather Guarantee",
    description: "If weather grounds your flight, we reschedule at no charge. You never pay for a flight that doesn't happen.",
  },
  {
    icon: "Camera" as const,
    title: "Professional Documentation",
    description: "Every flight includes high-quality photos, video, and a campaign report. You get content to share and data to measure.",
  },
] as const;

export const CLIENT_LOGOS = [
  { name: "McDonald's",  logo: "/logos/clients/mcdonalds.svg",   dark: false },
  { name: "Sony",        logo: "/logos/clients/sony.svg",        dark: false },
  { name: "Subway",      logo: "/logos/clients/subway.svg",      dark: false },
  { name: "Shell",       logo: "/logos/clients/shell.svg",       dark: false },
  { name: "McCain's",    logo: "/logos/clients/mccain.svg",      dark: false },
  { name: "Mooseheads",  logo: "/logos/clients/mooseheads.png",  dark: false },
  { name: "East Park",   logo: "/logos/clients/eastpark.svg",    dark: false },
  { name: "GTA Exotics", logo: null,                             dark: false },
  { name: "Jet Auto Wash", logo: "/logos/clients/jetautowash.png", dark: false },
  { name: "Wealthsimple", logo: "/logos/clients/wealthsimple.svg", dark: false },
  { name: "MGM",         logo: "/logos/clients/mgm.png",         dark: false },
] as const;

export const WHY_AERIAL_PAGE = {
  badge: "Why Aerial Advertising",
  headline: "The Most Memorable Form of Advertising",
  headlineAccent: "Most Memorable",
  description:
    "Aerial banners deliver the highest recall rate, lowest CPM, and strongest brand association of any advertising medium. Here\u2019s the data behind why brands choose aerial.",
  primaryCta: "Start Your Campaign",
  secondaryCta: "See the Numbers",
} as const;

export const WHY_AERIAL_DEEP_STATS = [
  {
    number: "88%",
    label: "Recall Rate",
    description: "88% of people recall seeing an aerial advertisement\u2014the highest recall rate of any advertising medium. TV averages 32%, digital display averages 14%.",
    color: "red" as const,
  },
  {
    number: "79%",
    label: "Brand Identification",
    description: "79% of viewers correctly identify the brand on an aerial banner. Compare that to 41% for TV commercials and 23% for online display ads.",
    color: "blue" as const,
  },
  {
    number: "67%",
    label: "Message Recall",
    description: "67% of people recall the specific message on an aerial banner after a single exposure. Most media require 7+ impressions to achieve similar recall.",
    color: "red" as const,
  },
  {
    number: "<$6",
    label: "Cost Per Thousand",
    description: "With a CPM under $6, aerial advertising is one of the most cost-efficient media available. Compare: TV $28, radio $10, digital display $11, billboard $5\u201325.",
    color: "blue" as const,
  },
] as const;

export const WHY_AERIAL_COMPARISON = [
  {
    medium: "Aerial Banners",
    recall: "88%",
    brandId: "79%",
    cpm: "<$6",
    adBlockable: "No",
    highlight: true,
  },
  {
    medium: "Television",
    recall: "32%",
    brandId: "41%",
    cpm: "$28",
    adBlockable: "DVR/Skip",
    highlight: false,
  },
  {
    medium: "Radio",
    recall: "27%",
    brandId: "29%",
    cpm: "$10",
    adBlockable: "No",
    highlight: false,
  },
  {
    medium: "Digital Display",
    recall: "14%",
    brandId: "23%",
    cpm: "$11",
    adBlockable: "Yes",
    highlight: false,
  },
  {
    medium: "Print (Newspaper)",
    recall: "19%",
    brandId: "31%",
    cpm: "$15\u201332",
    adBlockable: "No",
    highlight: false,
  },
  {
    medium: "Static Billboard",
    recall: "46%",
    brandId: "38%",
    cpm: "$5\u201325",
    adBlockable: "No",
    highlight: false,
  },
] as const;

export const WHY_AERIAL_SOCIAL_EFFECT = {
  title: "The Social Media Multiplier",
  description:
    "When an aerial banner flies overhead, people don\u2019t just look up\u2014they pull out their phones. Every flight generates organic social media content that extends your reach far beyond the flight path.",
  stats: [
    { number: "4 in 10", label: "viewers photograph aerial banners" },
    { number: "3 in 10", label: "share the photo on social media" },
    { number: "Free", label: "cost of organic social amplification" },
  ],
} as const;

export const WHY_AERIAL_AUDIENCE_REACH = [
  { venue: "Stadium / Arena", reach: "20,000\u201360,000+", icon: "Trophy" as const },
  { venue: "Beach / Waterfront", reach: "10,000+", icon: "Waves" as const },
  { venue: "Festival / Fair", reach: "15,000\u201380,000+", icon: "Tent" as const },
  { venue: "Urban Flyover", reach: "30,000\u2013100,000+", icon: "Building2" as const },
  { venue: "Concert Venue", reach: "5,000\u201350,000+", icon: "Music" as const },
] as const;

export const WHY_AERIAL_PRIVATE_AIR_SHOW = {
  title: "Your Private Air Show",
  description:
    "An aerial banner doesn\u2019t blend in. It commands the sky like a private air show for your brand. There\u2019s no competing ad next to it, no scrolling past it, and no way to block it. For the duration of the flight, you own the sky.",
  points: [
    "100% share of voice \u2014 no competing ads in the sky",
    "Zero ad fatigue \u2014 every flight is a novel experience",
    "Captive audience \u2014 people at outdoor events have nowhere to look but up",
    "Emotional response \u2014 aerial banners trigger curiosity and excitement",
  ],
} as const;

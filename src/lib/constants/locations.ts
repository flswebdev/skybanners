export const LOCATIONS_PAGE = {
  badge: "Coverage Area",
  headline: "Serving Southern Ontario from Coast to Coast",
  headlineAccent: "Southern Ontario",
  description:
    "We fly aerial banners across the most populated and event-rich regions of Southern Ontario. From Toronto to London, Niagara to Barrie\u2014if there\u2019s an audience, we can reach them.",
  primaryCta: "Book Your Location",
  secondaryCta: "See City Details",
} as const;

export const COVERAGE_CITIES = [
  {
    city: "Toronto & GTA",
    description: "Canada\u2019s largest metro. Beaches, stadiums, festivals, and millions of potential viewers throughout the Greater Toronto Area.",
    highlights: ["CNE", "Woodbine Beach", "Rogers Centre", "Ontario Place"],
    icon: "Building2" as const,
  },
  {
    city: "Hamilton",
    description: "Steel City\u2019s waterfront, stadiums, and vibrant event scene make it a prime aerial advertising market.",
    highlights: ["Tim Hortons Field", "Bayfront Park", "Dundurn Castle", "Gage Park"],
    icon: "Building2" as const,
  },
  {
    city: "London",
    description: "Western University events, festivals, and a growing entertainment district with year-round opportunities.",
    highlights: ["Western Fair", "Victoria Park", "Budweiser Gardens", "Harris Park"],
    icon: "Building2" as const,
  },
  {
    city: "Kitchener-Waterloo",
    description: "Tech hub with major events including Oktoberfest, university campuses, and a booming downtown core.",
    highlights: ["Oktoberfest", "UW Campus", "Bingemans", "McLennan Park"],
    icon: "Building2" as const,
  },
  {
    city: "Barrie & Simcoe County",
    description: "Gateway to cottage country with waterfront events, Kempenfest, and a growing year-round population.",
    highlights: ["Kempenfest", "Centennial Beach", "Barrie Waterfront", "Springwater Park"],
    icon: "Building2" as const,
  },
  {
    city: "Niagara Region",
    description: "Tourist capital of Ontario. Millions of visitors annually at the Falls, wineries, and summer festivals.",
    highlights: ["Niagara Falls", "Wine Country", "St. Catharines", "Fort Erie Race Track"],
    icon: "Building2" as const,
  },
] as const;

export const VENUE_TYPES = [
  {
    icon: "Waves" as const,
    title: "Beaches & Waterfronts",
    description: "Lake Ontario, Lake Huron, Georgian Bay\u2014summer crowds look up when a banner passes over the water.",
  },
  {
    icon: "Trophy" as const,
    title: "Stadiums & Arenas",
    description: "Pre-game and halftime flyovers reach captive audiences of 10,000\u201360,000+ fans.",
  },
  {
    icon: "Tent" as const,
    title: "Festivals & Fairs",
    description: "Summer festivals, county fairs, and outdoor concerts draw massive crowds in open-air venues.",
  },
  {
    icon: "Building2" as const,
    title: "Urban Centers",
    description: "Downtown cores, shopping districts, and high-traffic corridors in every major city.",
  },
  {
    icon: "Trees" as const,
    title: "Parks & Recreation",
    description: "Golf courses, provincial parks, and outdoor recreation areas with engaged audiences.",
  },
  {
    icon: "GraduationCap" as const,
    title: "University Campuses",
    description: "Reach students and faculty at convocations, homecomings, and campus events.",
  },
] as const;

export const OPERATING_SEASON = {
  title: "Operating Season",
  season: "May through October",
  description:
    "Our flying season runs from May through October, weather permitting. This coincides with Southern Ontario\u2019s peak outdoor event season\u2014beaches, festivals, sporting events, and celebrations.",
  details: [
    { label: "Season Start", value: "Early May (Victoria Day weekend)" },
    { label: "Season End", value: "Late October (weather permitting)" },
    { label: "Peak Months", value: "June, July, August" },
    { label: "Flight Hours", value: "Daylight hours, optimal visibility" },
    { label: "Weather Policy", value: "Free rescheduling for weather delays" },
    { label: "Booking Advice", value: "Book 2\u20134 weeks ahead for peak dates" },
  ],
} as const;

export const EVENT_TYPES = [
  { title: "Sporting Events", icon: "Trophy" as const, examples: "CFL games, OHL hockey, soccer matches, golf tournaments" },
  { title: "Music & Concerts", icon: "Music" as const, examples: "Summer concerts, music festivals, outdoor shows" },
  { title: "Community Events", icon: "Users" as const, examples: "Canada Day, Ribfest, Taste of the Danforth, Oktoberfest" },
  { title: "Corporate Events", icon: "Building2" as const, examples: "Grand openings, product launches, company picnics" },
  { title: "Personal Celebrations", icon: "Heart" as const, examples: "Weddings, proposals, gender reveals, birthdays" },
  { title: "Beach Days", icon: "Waves" as const, examples: "Wasaga Beach, Grand Bend, Sauble Beach, Port Stanley" },
] as const;

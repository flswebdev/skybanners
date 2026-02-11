export const FEATURED_CLIENTS = [
  { name: "McDonald's", highlight: true },
  { name: "Mooseheads", highlight: false },
  { name: "Shell Gas", highlight: false },
  { name: "Subway", highlight: true },
  { name: "East Park", highlight: false },
  { name: "GTA Exotics", highlight: false },
  { name: "McCain's", highlight: true },
  { name: "Jet Auto Wash", highlight: true, note: "Repeat client" },
  { name: "Sony", highlight: true },
  { name: "Wealthsimple", highlight: true },
  { name: "MGM", highlight: true },
] as const;

export const B2B_BANNER_OPTIONS = [
  {
    icon: "ClipboardList" as const,
    title: "Billboard Banners",
    description: "Large custom printed graphics with your full branding\u2014logos, colours, imagery. Maximum visual impact for brand recognition from the sky.",
    features: [
      "Full-colour printed graphics",
      "Custom dimensions for maximum visibility",
      "Upload your own design (PNG, JPG, PDF, AI, PSD)",
      "Professional design assistance available",
    ],
  },
  {
    icon: "PenLine" as const,
    title: "Letter Banners",
    description: "Individual character banners for bold text messages. Perfect for promotions, URLs, hashtags, and calls to action.",
    features: [
      "Up to 40 characters",
      "High-contrast, readable from the ground",
      "Quick turnaround vs. billboard banners",
      "Ideal for event-day promotions",
    ],
  },
  {
    icon: "Palette" as const,
    title: "Combo Banners",
    description: "The best of both worlds. Combine your printed branding with custom text messaging for maximum impact and flexibility.",
    features: [
      "Billboard graphic + text in one banner",
      "Brand logo with promotional message",
      "Highest engagement format",
      "Custom layout and design",
    ],
  },
] as const;

export const B2B_WHY_AERIAL = [
  {
    icon: "TrendingUp" as const,
    title: "88% Recall Rate",
    description: "Aerial advertising produces the highest recall rate of any advertising medium. Your brand sticks in people's minds long after the flight.",
  },
  {
    icon: "DollarSign" as const,
    title: "Under $6 CPM",
    description: "Reach thousands at events, beaches, and stadiums for a fraction of the cost of traditional outdoor, TV, or digital campaigns.",
  },
  {
    icon: "Share2" as const,
    title: "Organic Social Amplification",
    description: "People photograph and share aerial banners on social media. Your paid flight generates free organic reach across platforms.",
  },
  {
    icon: "Eye" as const,
    title: "Zero Ad Fatigue",
    description: "No scrolling past, no ad blockers, no banner blindness. When your message is in the sky, everyone looks up.",
  },
] as const;

export const B2B_USE_CASES = [
  {
    icon: "Megaphone" as const,
    title: "Product Launches",
    description: "Generate massive buzz for new products. Fly your launch message over target demographics at peak events.",
  },
  {
    icon: "Trophy" as const,
    title: "Sporting Events & Concerts",
    description: "Reach captive audiences of 10,000\u201350,000+ at stadiums, arenas, and outdoor venues across Southern Ontario.",
  },
  {
    icon: "Store" as const,
    title: "Grand Openings & Sales",
    description: "Drive foot traffic with sky-high announcements. Nothing says \u201Cwe\u2019re here\u201D like a banner overhead.",
  },
  {
    icon: "Repeat" as const,
    title: "Seasonal & Recurring Campaigns",
    description: "Build brand consistency with recurring flights. Our repeat clients like Jet Auto Wash fly multiple times per season.",
  },
] as const;

export const FLIGHT_DURATIONS = [
  { value: "15", label: "15 minutes" },
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "1 hour" },
  { value: "90", label: "1.5 hours" },
  { value: "120", label: "2 hours" },
  { value: "custom", label: "Custom duration" },
] as const;

export const B2B_INCLUSIONS = [
  "Custom banner design & production",
  "Strategic flight route planning",
  "Event-specific targeting & timing",
  "Professional photo & video documentation",
  "Social media content package",
  "Post-campaign analytics & impressions report",
] as const;

// ── Billboard Banners Page ──────────────────────────────────────────

export const BILLBOARD_PAGE = {
  badge: "Billboard Banners",
  headline: "Full-Colour Banners That Command Attention",
  headlineAccent: "Command Attention",
  description: "",
  primaryCta: "Get a Billboard Quote",
} as const;

export const BILLBOARD_SPECS = [
  { label: "Banner Type", value: "Full-colour digital print" },
  { label: "Material", value: "Durable aviation-grade nylon" },
  { label: "Accepted Formats", value: "PNG, JPG, PDF, AI, EPS" },
  { label: "Resolution", value: "Minimum 150 DPI at scale" },
  { label: "Lead Time", value: "2\u20133 weeks (design + production)" },
  { label: "Design Assistance", value: "Included at no extra cost" },
] as const;

export const BILLBOARD_BENEFITS = [
  {
    icon: "Palette" as const,
    title: "Full Branding Control",
    description: "Your logo, brand colours, product imagery, and custom design\u2014exactly as you envision it, printed at banner scale.",
  },
  {
    icon: "Eye" as const,
    title: "Maximum Visual Impact",
    description: "Large-format banners are visible from over a kilometre away. Full-colour graphics create an unmissable aerial billboard.",
  },
  {
    icon: "Camera" as const,
    title: "Photo-Ready Quality",
    description: "High-resolution prints look stunning in the documentation photos and videos included with every flight.",
  },
  {
    icon: "Award" as const,
    title: "Premium Perception",
    description: "A custom-printed banner signals investment and professionalism. Audiences associate quality banners with premium brands.",
  },
] as const;

export const BILLBOARD_USE_CASES = [
  {
    icon: "Building2" as const,
    title: "Corporate Brand Awareness",
    description: "Fly your brand identity over stadiums, beaches, and festivals to build recognition at scale.",
  },
  {
    icon: "Megaphone" as const,
    title: "Product Launches",
    description: "Introduce new products with eye-catching visuals that people photograph and share on social media.",
  },
  {
    icon: "Store" as const,
    title: "Grand Openings",
    description: "Announce your new location with a banner that the entire neighbourhood can see.",
  },
  {
    icon: "Clapperboard" as const,
    title: "Movie & Media Promotions",
    description: "Promote premieres, festivals, and media events with large-scale artwork banners.",
  },
  {
    icon: "Heart" as const,
    title: "Wedding & Event Banners",
    description: "Custom printed banners with photos, artwork, or designs for personal celebrations.",
  },
  {
    icon: "Trophy" as const,
    title: "Sports Sponsorship",
    description: "Display your brand at sporting events where tens of thousands of fans look up simultaneously.",
  },
] as const;

// ── Letter Banners Page ─────────────────────────────────────────────

export const LETTER_PAGE = {
  badge: "Letter Banners",
  headline: "Bold Text Messages in the Sky",
  headlineAccent: "in the Sky",
  description: "",
  primaryCta: "Get a Letter Banner Quote",
} as const;

export const LETTER_SPECS = [
  { label: "Banner Type", value: "Individual character letters" },
  { label: "Max Characters", value: "40 including spaces" },
  { label: "Production Cost", value: "None \u2014 letters are reusable" },
  { label: "Turnaround", value: "As fast as 24\u201348 hours" },
  { label: "Colours", value: "Black or red characters on white" },
  { label: "Visibility", value: "Readable from 1+ km away" },
  { label: "Best For", value: "Proposals, celebrations, grand openings, event promos" },
] as const;

export const LETTER_SIZE_LIMITS = [
  { height: "5 ft", maxChars: 50, description: "Maximum characters for compact banners" },
  { height: "7 ft", maxChars: 40, description: "Standard size, best balance of visibility and length" },
  { height: "10 ft", maxChars: 30, description: "Large letters, great for stadiums and beaches" },
  { height: "12 ft", maxChars: 25, description: "Extra large \u2014 maximum visibility from the ground" },
] as const;

export const LETTER_BENEFITS = [
  {
    icon: "Zap" as const,
    title: "Quick Turnaround",
    description: "No printing or production needed. Letter banners can be ready in as little as 24\u201348 hours for last-minute campaigns.",
  },
  {
    icon: "DollarSign" as const,
    title: "No Production Cost",
    description: "Letters are reusable inventory\u2014you only pay for the flight. This makes letter banners the most cost-effective option.",
  },
  {
    icon: "Type" as const,
    title: "Bold & Readable",
    description: "High-contrast characters are designed to be clearly readable from the ground. No squinting\u2014your message is instantly clear.",
  },
  {
    icon: "Repeat" as const,
    title: "Easy to Change",
    description: "Flying a different message next week? Just change the letters. Perfect for recurring or multi-message campaigns.",
  },
] as const;

export const LETTER_USE_CASES = [
  {
    icon: "Heart" as const,
    title: "Marriage Proposals",
    description: "\"Will You Marry Me?\" in the sky is the ultimate romantic gesture. We coordinate timing for the perfect surprise.",
  },
  {
    icon: "Megaphone" as const,
    title: "Event Promotions",
    description: "Fly your hashtag, URL, or promo code over festivals and events for immediate engagement.",
  },
  {
    icon: "PartyPopper" as const,
    title: "Birthday & Celebration Messages",
    description: "\"Happy 30th Sarah!\" or \"Congrats Class of 2026!\"\u2014personal messages that become lifelong memories.",
  },
  {
    icon: "Store" as const,
    title: "Grand Opening Announcements",
    description: "\"NOW OPEN\" with your business name drives foot traffic from miles around.",
  },
  {
    icon: "TrendingUp" as const,
    title: "Flash Sales & Promotions",
    description: "Time-sensitive offers benefit from the quick turnaround. Book today, fly tomorrow.",
  },
  {
    icon: "Calendar" as const,
    title: "Seasonal Campaigns",
    description: "Change your message weekly or monthly throughout the flying season for sustained awareness.",
  },
] as const;

// ── Combo Banners Page ──────────────────────────────────────────────

export const COMBO_PAGE = {
  badge: "Combo Banners",
  headline: "The Best of Both Worlds",
  headlineAccent: "Both Worlds",
  description: "",
  primaryCta: "Get a Combo Banner Quote",
} as const;

export const COMBO_SPECS = [
  { label: "Banner Type", value: "Billboard graphic + letter text" },
  { label: "Graphic Formats", value: "PNG, JPG, PDF, AI, EPS" },
  { label: "Text Characters", value: "Up to 30 characters alongside graphic" },
  { label: "Lead Time", value: "2\u20133 weeks (design + production)" },
  { label: "Design Assistance", value: "Included at no extra cost" },
  { label: "Best For", value: "Brand logo + promotional message" },
] as const;

export const COMBO_BENEFITS = [
  {
    icon: "Layers" as const,
    title: "Visual + Text Combined",
    description: "Your brand logo or imagery immediately grabs attention, while the text message delivers a clear call to action.",
  },
  {
    icon: "TrendingUp" as const,
    title: "Highest Engagement",
    description: "Combo banners produce the highest engagement rates of any aerial format. People process both image and text simultaneously.",
  },
  {
    icon: "Share2" as const,
    title: "Maximum Social Sharing",
    description: "The visual element makes combo banners the most photographed and shared format on social media.",
  },
  {
    icon: "Award" as const,
    title: "Complete Brand Message",
    description: "Deliver your complete brand story in a single pass\u2014no compromise between visuals and messaging.",
  },
] as const;

export const COMBO_USE_CASES = [
  {
    icon: "Building2" as const,
    title: "Brand + Promotion",
    description: "Your logo alongside a special offer or event announcement. The most effective format for driving brand recall and action.",
  },
  {
    icon: "Megaphone" as const,
    title: "Product Launch + Call to Action",
    description: "Show your new product and tell people where to get it\u2014all in one banner pass.",
  },
  {
    icon: "Trophy" as const,
    title: "Sponsorship Branding",
    description: "Display your sponsor logo with event-specific messaging at stadiums and venues.",
  },
  {
    icon: "Heart" as const,
    title: "Personal Photo + Message",
    description: "A photo of the couple alongside \"Will You Marry Me?\" creates an unforgettable proposal.",
  },
  {
    icon: "Store" as const,
    title: "Grand Opening + Directions",
    description: "Your store logo with address or cross-streets directs traffic right to your door.",
  },
  {
    icon: "Calendar" as const,
    title: "Event Branding + Details",
    description: "Festival logos, concert posters, or event artwork with date and ticket info.",
  },
] as const;

// ── Smoke Displays Page ─────────────────────────────────────────────

export const SMOKE_PAGE = {
  badge: "Smoke Displays",
  headline: "Dramatic Colour in the Sky",
  headlineAccent: "in the Sky",
  description: "",
  primaryCta: "Book a Smoke Display",
} as const;

export const SMOKE_SPECS = [
  { label: "Available Colours", value: "Red & Blue" },
  { label: "Visibility", value: "Visible for miles in clear conditions" },
  { label: "Duration", value: "Varies by flight time" },
  { label: "Add-On Available", value: "Yes \u2014 combine with any banner type" },
  { label: "Lead Time", value: "As fast as 48 hours" },
  { label: "Best For", value: "Gender reveals, celebrations, events" },
] as const;

export const SMOKE_BENEFITS = [
  {
    icon: "Sparkles" as const,
    title: "Dramatic Visual Impact",
    description: "Nothing matches the spectacle of coloured smoke trails across the sky. It\u2019s a show-stopping moment everyone remembers.",
  },
  {
    icon: "Baby" as const,
    title: "Perfect for Gender Reveals",
    description: "Blue smoke visible for miles makes the ultimate gender reveal. Surprise your entire neighbourhood with the news.",
  },
  {
    icon: "Palette" as const,
    title: "Red & Blue",
    description: "Choose red or blue smoke to match your event. Perfect for gender reveals, team colours, or brand activations.",
  },
  {
    icon: "Layers" as const,
    title: "Combine with Banners",
    description: "Add smoke to any banner flight for extra drama. A gender reveal banner + coloured smoke is our most popular personal package.",
  },
] as const;

export const SMOKE_USE_CASES = [
  {
    icon: "Baby" as const,
    title: "Gender Reveals",
    description: "The most popular smoke display\u2014blue smoke announces your baby\u2019s gender in spectacular fashion.",
  },
  {
    icon: "Heart" as const,
    title: "Proposals & Celebrations",
    description: "Add coloured smoke trails to your proposal or wedding banner for extra romance and spectacle.",
  },
  {
    icon: "Trophy" as const,
    title: "Sporting Events",
    description: "Team-coloured smoke over stadiums and tailgate parties fires up the crowd.",
  },
  {
    icon: "PartyPopper" as const,
    title: "Festival & Event Openings",
    description: "Kick off your event with a dramatic aerial smoke display that signals the start of something special.",
  },
  {
    icon: "Building2" as const,
    title: "Brand Colour Displays",
    description: "Fly your brand colours across the sky for a unique, memorable marketing activation.",
  },
  {
    icon: "GraduationCap" as const,
    title: "Graduation Celebrations",
    description: "School colours in the sky over graduation ceremonies create unforgettable memories.",
  },
] as const;

// ── Cross-Promo Data ────────────────────────────────────────────────

export const ALL_SERVICES = [
  {
    slug: "billboard-banners",
    title: "Billboard Banners",
    description: "Full-colour printed banners with logos and imagery",
    icon: "ClipboardList" as const,
  },
  {
    slug: "letter-banners",
    title: "Letter Banners",
    description: "Bold character banners for text messages",
    icon: "PenLine" as const,
  },
  {
    slug: "combo-banners",
    title: "Combo Banners",
    description: "Billboard + letter banner combined",
    icon: "Palette" as const,
  },
  {
    slug: "smoke-displays",
    title: "Smoke Displays",
    description: "Coloured smoke for reveals and celebrations",
    icon: "Wind" as const,
  },
] as const;

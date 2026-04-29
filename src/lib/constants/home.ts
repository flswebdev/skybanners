export const HERO = {
  title: "Your Message.",
  titleAccent: "Their Sky.",
  subtitle:
    "No scrolling past. No ad blockers. No banner blindness. Your message, in the sky, over your exact audience.",
  primaryCta: "Book Your Flight",
  secondaryCta: "Explore Services",
} as const;

export const STATS = [
  {
    id: "recall",
    number: "88%",
    label: "Recall Rate",
    detail:
      "Audiences remember aerial banners. Studies show 88% of people recall seeing an aerial advertisement, making it one of the most memorable forms of advertising available.",
    extra:
      "Unlike digital ads that are quickly scrolled past or banner ads that blend into the background, aerial advertising creates a lasting impression. The unique nature of seeing a message in the sky triggers stronger memory formation and brand recall.",
  },
  {
    id: "recognition",
    number: "79%",
    label: "Brand Recognition",
    detail:
      "79% of audiences recall the exact brand advertised on aerial banners. This high brand recognition rate means your message doesn\u2019t just get seen \u2014 it gets remembered and associated with your brand.",
  },
  {
    id: "cpm",
    number: "<$6",
    label: "CPM Cost",
    detail:
      "With a cost per thousand impressions under $6, aerial advertising delivers one of the lowest CPMs in outdoor advertising. Reach massive audiences at sporting events, beaches, and festivals for a fraction of traditional media costs.",
  },
  {
    id: "highest",
    number: "#1",
    label: "Highest Recall in Advertising",
    detail:
      "Out-of-home media, including aerial banners, produces stronger recall than TV, radio, print, and digital advertising. When people look up and see your message in the sky, they remember it.",
  },
] as const;

export const SERVICES = [
  {
    icon: "ClipboardList" as const,
    title: "Billboard Banners",
    href: "/services/billboard-banners",
    description: "Large banners with printed designs, perfect for visual impact and brand imagery.",
  },
  {
    icon: "PenLine" as const,
    customIcon: "/icons/letter-banners-icon.png",
    title: "Letter Banners",
    href: "/services/letter-banners",
    description: "Custom text messages up to 40 characters. No production cost — ready in as little as 24 hrs.",
    badge: "Fastest Turnaround" as const,
  },
  {
    icon: "Palette" as const,
    title: "Combo Banners",
    href: "/services/combo-banners",
    description: "Billboard graphic paired with bold text. Our highest-engagement format for brands and events.",
    badge: "Most Popular" as const,
  },
  {
    icon: "Wind" as const,
    title: "Smoke Displays",
    href: "/services/smoke-displays",
    description: "Coloured smoke trails in pink or blue for gender reveals, celebrations, and events.",
  },
] as const;

export const BENEFITS = [
  {
    icon: "Target" as const,
    title: "Unmissable Impact",
    description: "Your message commands attention in the sky\u2014impossible to ignore or skip.",
  },
  {
    icon: "MapPin" as const,
    title: "Targeted Reach",
    description: "Perfect for events, beaches, festivals, stadiums, and high-traffic areas.",
  },
  {
    icon: "Smartphone" as const,
    title: "Social Media Ready",
    description: "People love photographing and sharing aerial banners, extending your reach organically.",
  },
  {
    icon: "Sparkles" as const,
    title: "Positive Association",
    description: "Aerial ads create excitement and curiosity, linking positive emotions to your brand.",
  },
] as const;

export const BUSINESS_SOLUTIONS = [
  {
    icon: "Target" as const,
    title: "Brand Awareness Campaigns",
    description: "Launch new products or services with massive sky-high visibility",
  },
  {
    icon: "Trophy" as const,
    title: "Event Marketing",
    description: "Own the skies at sporting events, concerts, and festivals with targeted aerial presence",
  },
  {
    icon: "PartyPopper" as const,
    title: "Grand Openings",
    description: "Turn heads at your store opening with aerial announcements everyone will see",
  },
  {
    icon: "Share2" as const,
    title: "Social Media Amplification",
    description: "Create shareable moments that boost your digital campaigns",
  },
] as const;

export const CELEBRATIONS = [
  {
    icon: "Heart" as const,
    title: "Proposals & Weddings",
    description: "Pop the question or celebrate your big day with a message in the sky",
  },
  {
    icon: "Baby" as const,
    title: "Gender Reveals",
    description: 'Announce "It\'s a Boy!" or "It\'s a Girl!" in the most memorable way possible',
  },
  {
    icon: "Cake" as const,
    title: "Special Celebrations",
    description: "Birthdays, anniversaries, graduations - celebrate any milestone from the sky",
  },
  {
    icon: "Mail" as const,
    title: "Personalized Messages",
    description: 'Say "I Love You," "Happy Birthday," or any custom message to someone special',
  },
] as const;

export const STEPS = [
  {
    number: "01",
    icon: "MessageSquare" as const,
    title: "Consultation",
    description:
      "Share your vision with us. We\u2019ll discuss your message, target audience, timing, and location to create the perfect aerial campaign.",
  },
  {
    number: "02",
    icon: "Palette" as const,
    title: "Design & Approval",
    description:
      "Have your own design? Send it over and we\u2019ll bring it to life. Prefer help? Our team will work with your branding and messaging to create something that stands out. You review and approve before production begins.",
  },
  {
    number: "03",
    icon: "Plane" as const,
    title: "Flight Execution",
    description:
      "We fly your banner over your target area at optimal times. Professional photo and video documentation included.",
  },
  {
    number: "04",
    icon: "BarChart3" as const,
    title: "Results Delivered",
    description:
      "Receive high-quality photos, videos, flight data, and campaign analytics to measure your impact.",
  },
] as const;

export const COVERAGE_AREAS = [
  {
    icon: "Waves" as const,
    title: "Beach & Waterfront Events",
    description: "Lake Ontario beaches, Wasaga Beach, Grand Bend, and popular waterfront destinations",
  },
  {
    icon: "Trophy" as const,
    title: "Stadiums & Arenas",
    description: "Major sporting venues, concert halls, and entertainment complexes across the region",
  },
  {
    icon: "Tent" as const,
    title: "Festivals & Events",
    description: "Summer festivals, fairs, outdoor concerts, and community celebrations",
  },
  {
    icon: "Building2" as const,
    title: "Urban Centers",
    description: "High-traffic areas in Toronto, Hamilton, Kitchener-Waterloo, London, and surrounding cities",
  },
] as const;

export const FLIGHT_INFO = [
  { label: "Operations", value: "Year-round (weather permitting)" },
  { label: "Flight Times", value: "Daylight hours, optimal visibility conditions" },
  { label: "Lead Time", value: "2-3 weeks recommended for custom banners" },
  { label: "Weather Policy", value: "Flights rescheduled at no charge for weather delays" },
] as const;

export const INCLUSIONS = [
  {
    icon: "Ruler" as const,
    title: "Custom Banner Design",
    description: "Professional design services to create eye-catching banners that maximize impact and brand recognition.",
  },
  {
    icon: "Map" as const,
    title: "Strategic Route Planning",
    description: "Optimized flight paths targeting your ideal audience at peak visibility times and locations.",
  },
  {
    icon: "Camera" as const,
    title: "Photo & Video Documentation",
    description: "High-quality aerial photography and video footage of your banner in flight, perfect for social media.",
  },
  {
    icon: "Smartphone" as const,
    title: "Social Media Content Package",
    description: "Ready-to-post photos and videos optimized for Instagram, Facebook, Twitter, and other platforms.",
  },
  {
    icon: "BarChart3" as const,
    title: "Campaign Analytics",
    description: "Detailed flight reports including duration, route data, estimated impressions, and reach metrics.",
  },
  {
    icon: "Target" as const,
    title: "Event Targeting",
    description: "Precision timing to maximize exposure at concerts, games, festivals, and special events.",
  },
] as const;

export const FAQS = [
  {
    question: "How much does aerial advertising cost?",
    answer:
      "Letter banners are the most affordable option — no production cost, you only pay for the flight. Billboard and combo banners include custom design and printing. Every campaign includes photo & video documentation and a social media content package. Contact us for a custom quote — consultations are free.",
  },
  {
    question: "How long does it take to create a banner?",
    answer:
      "Custom banners typically require 2-3 weeks for design, approval, and production. Letter banners can be ready faster. Rush service may be available for urgent campaigns.",
  },
  {
    question: "What happens if the weather is bad?",
    answer:
      "Safety is our priority. If weather conditions prevent flying, we\u2019ll reschedule your flight at no additional charge. We monitor conditions closely and keep you informed.",
  },
  {
    question: "How many people will see my banner?",
    answer:
      "Visibility depends on location and duration. Beach flights can reach 10,000-50,000+ people. Stadium and event flights can reach even larger audiences. We provide estimated impressions based on your flight plan.",
  },
  {
    question: "Can I choose my flight time and location?",
    answer:
      "Absolutely! We work with you to plan the optimal route, timing, and location to reach your target audience. Whether it\u2019s a beach, stadium, or urban area, we customize each flight.",
  },
  {
    question: "What size can the banners be?",
    answer:
      "Billboard banners can be quite large for maximum visual impact. Letter banners are limited to 40 characters. Combo banners combine both. We\u2019ll help you choose the right size for your message and budget.",
  },
] as const;

export const CAMPAIGN_TYPES = [
  { value: "", label: "Select type..." },
  { value: "business", label: "Business/Brand Campaign" },
  { value: "event", label: "Event Marketing" },
  { value: "grand-opening", label: "Grand Opening" },
  { value: "proposal", label: "Proposal/Wedding" },
  { value: "gender-reveal", label: "Gender Reveal" },
  { value: "celebration", label: "Special Celebration" },
  { value: "other", label: "Other" },
] as const;

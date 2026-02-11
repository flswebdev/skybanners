// ── Navigation Types ─────────────────────────────────────────────────

type NavLink = { label: string; href: string; type: "link" };
type NavDropdown = {
  label: string;
  type: "dropdown";
  items: { label: string; href: string; description: string }[];
};
export type NavItem = NavLink | NavDropdown;

// ── Header Navigation ───────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Services",
    type: "dropdown",
    items: [
      {
        label: "Billboard Banners",
        href: "/services/billboard-banners",
        description: "Full-colour printed banners with logos and imagery",
      },
      {
        label: "Letter Banners",
        href: "/services/letter-banners",
        description: "Bold character banners for text messages",
      },
      {
        label: "Combo Banners",
        href: "/services/combo-banners",
        description: "Billboard + letter banner combined",
      },
      {
        label: "Smoke Displays",
        href: "/services/smoke-displays",
        description: "Coloured smoke for reveals and celebrations",
      },
    ],
  },
  { label: "Why Aerial", href: "/why-aerial", type: "link" },
  { label: "How It Works", href: "/how-it-works", type: "link" },
  { label: "For Business", href: "/business", type: "link" },
  { label: "For You", href: "/personal", type: "link" },
  { label: "About", href: "/about", type: "link" },
] as const;

// Back-compat: flat array used by old code that hasn't been updated yet
export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Aerial", href: "#why-aerial" },
  { label: "For Business", href: "/business" },
  { label: "For You", href: "/personal" },
] as const;

// ── Footer Navigation ───────────────────────────────────────────────

export const FOOTER_SERVICES = [
  { label: "Billboard Banners", href: "/services/billboard-banners" },
  { label: "Letter Banners", href: "/services/letter-banners" },
  { label: "Combo Banners", href: "/services/combo-banners" },
  { label: "Smoke Displays", href: "/services/smoke-displays" },
] as const;

export const FOOTER_EXPLORE = [
  { label: "Why Aerial", href: "/why-aerial" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Locations", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
] as const;

export const FOOTER_ABOUT = [
  { label: "Our Story", href: "/about" },
  { label: "For Business", href: "/business" },
  { label: "For You", href: "/personal" },
] as const;

// Deprecated — kept for back-compat until Footer is updated
export const FOOTER_BUSINESS = [
  { label: "Brand Campaigns", href: "/business" },
  { label: "Event Marketing", href: "/business" },
  { label: "Grand Openings", href: "/business" },
] as const;

export const FOOTER_PERSONAL = [
  { label: "Proposals", href: "/personal" },
  { label: "Gender Reveals", href: "/personal" },
  { label: "Celebrations", href: "/personal" },
] as const;

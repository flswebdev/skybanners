export const SITE_NAME = "Sky Banners";
export const SITE_DESCRIPTION = "Aerial advertising in Southern Ontario. Billboard banners, letter banners, combo banners, and smoke services for businesses and personal celebrations.";
export const SITE_URL = "https://skybanners.ca";

export const CONTACT = {
  phone: "1-877-SKY-BANNER",
  phoneFormatted: "1-877-759-2266",
  email: "info@skybanners.ca",
  serviceArea: "Southern Ontario",
  cities: "Toronto \u2022 Hamilton \u2022 London \u2022 Kitchener-Waterloo & More",
  officeHours: "Mon-Fri: 9am - 6pm EST",
  weekendHours: "Sat-Sun: By Appointment",
} as const;

// Update hrefs once social accounts are created.
// Leave href as "" to hide the icon in the Footer automatically.
export const SOCIAL_LINKS = {
  instagram: { href: "", label: "Instagram" },
  tiktok:    { href: "", label: "TikTok" },
  facebook:  { href: "", label: "Facebook" },
  linkedin:  { href: "", label: "LinkedIn" },
} as const;

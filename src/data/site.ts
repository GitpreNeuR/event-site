/**
 * Central brand + company configuration.
 * Change the brand name, tagline or contact details here and they update
 * across navigation, footer, metadata, structured data and legal pages.
 *
 * Fields marked PLACEHOLDER must be replaced with verified business details
 * before launch. They are intentionally obvious so they are never mistaken
 * for real information.
 */
export interface SiteConfig {
  name: string;
  wordmarkSuffix: string;
  tagline: string;
  description: string;
  shortDescription: string;
  url: string;
  locale: string;
  city: string;
  region: string;
  country: string;
  contact: {
    email: string;
    phoneDisplay: string;
    phoneHref: string | null;
    whatsappHref: string | null;
    studio: string;
    hours: string;
    isPlaceholder: boolean;
  };
  social: { label: string; href: string }[];
  legal: { entityName: string; registeredAddress: string; jurisdiction: string; lastUpdated: string };
  ogImage: string;
}

export const site: SiteConfig = {
  name: "Aangan",
  wordmarkSuffix: "Celebration Atelier",
  tagline: "Celebrations & events, designed in Mumbai",
  description:
    "Aangan is a Mumbai celebration and event studio designing birthdays, family ceremonies, weddings and corporate gatherings — from the first idea to the last guest home.",
  shortDescription:
    "A celebration and event studio for Mumbai — birthdays, ceremonies, weddings and brand gatherings, planned with care and produced with precision.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  locale: "en_IN",
  city: "Mumbai",
  region: "Maharashtra",
  country: "India",

  // PLACEHOLDER contact details — replace before launch.
  contact: {
    email: "hello@aangan.example",
    phoneDisplay: "+91 00000 00000",
    phoneHref: null, // e.g. "tel:+919800000000" once a real number exists
    whatsappHref: null, // e.g. "https://wa.me/919800000000"
    studio: "Studio address to be confirmed",
    hours: "Consultations by appointment, Monday – Saturday",
    isPlaceholder: true,
  },

  // PLACEHOLDER social profiles — point these at the real accounts.
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Pinterest", href: "https://www.pinterest.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],

  // Legal entity details are unknown; legal pages render these as placeholders.
  legal: {
    entityName: "[Registered company name]",
    registeredAddress: "[Registered office address]",
    jurisdiction: "[Governing jurisdiction]",
    lastUpdated: "[Date of last review]",
  },

  ogImage: "/images/hero/candlelit-table.webp",
};

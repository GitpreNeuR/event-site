import type { FooterNav, MegaMenuColumnData, MenuItem, NavItem } from "@/types/navigation";

import { mumbaiAreas } from "./mumbai-areas";

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Experiences", href: "/experiences" },
  { label: "Locations", href: "/locations" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: NavItem = { label: "Plan Your Event", href: "/contact" };

/**
 * Five-column Services mega menu. Items reference service slugs
 * (resolved to /services/[slug]) or an explicit href.
 * `icon` names map to Lucide icons in MegaMenuColumn.
 */
export const megaMenu: MegaMenuColumnData[] = [
  {
    id: "our-services",
    heading: "Our Services",
    icon: "Sparkles",
    items: [
      { slug: "birthday-planner-mumbai", label: "Birthday Planner Mumbai" },
      { slug: "kids-birthday-planner-mumbai", label: "Kids Birthday Planner Mumbai" },
      { slug: "birthday-decoration-mumbai", label: "Birthday Decoration Mumbai" },
      { slug: "birthday-celebration-at-home-mumbai", label: "Birthday Celebration at Home Mumbai" },
      { slug: "luxury-birthday-planner-mumbai", label: "Luxury Birthday Planner Mumbai" },
      { slug: "premium-birthday-planner-mumbai", label: "Premium Birthday Planner Mumbai" },
      { slug: "premium-housewarming-mumbai", label: "Premium Housewarming Mumbai" },
      { slug: "premium-baby-shower-mumbai", label: "Premium Baby Shower Mumbai" },
      { slug: "premium-birthday-end-to-end-planning-mumbai", label: "Premium Birthday End-to-End Planning Mumbai" },
    ],
  },
  {
    id: "theme-based",
    heading: "Theme-Based",
    icon: "Palette",
    items: [
      { slug: "unicorn-theme-birthday-mumbai", label: "Unicorn Theme Birthday Mumbai" },
      { slug: "jungle-theme-birthday-mumbai", label: "Jungle Theme Birthday Mumbai" },
      { slug: "barbie-theme-birthday-mumbai", label: "Barbie Theme Birthday Mumbai" },
      { slug: "space-theme-birthday-mumbai", label: "Space Theme Birthday Mumbai" },
      { slug: "cocomelon-theme-birthday-mumbai", label: "Cocomelon Birthday Theme Mumbai" },
      { slug: "boss-baby-decoration-mumbai", label: "Boss Baby Decoration Mumbai" },
    ],
  },
  {
    id: "age-based",
    heading: "Age-Based",
    icon: "Cake",
    items: [
      { slug: "first-birthday-planner-mumbai", label: "1st Birthday Planner Mumbai" },
      { slug: "kids-birthday-party-mumbai", label: "Kids Birthday Party Mumbai" },
      { slug: "teen-birthday-celebration-mumbai", label: "Teen Birthday Celebration Mumbai" },
      { slug: "adult-birthday-planner-mumbai", label: "Adult Birthday Planner Mumbai" },
    ],
  },
  {
    id: "venue-location",
    heading: "Venue & Location",
    icon: "Building2",
    items: [
      { slug: "birthday-venues-mumbai", label: "Birthday Venues Mumbai" },
      { slug: "indoor-birthday-venues-mumbai", label: "Indoor Birthday Venues Mumbai" },
      // Browse-by-area hub, so this entry is not a duplicate of the venue service page.
      { href: "/locations", label: "Birthday Venues in Mumbai" },
      { slug: "birthday-party-resorts-mumbai", label: "Birthday Party Resorts Mumbai" },
      { slug: "birthday-venues-under-50k-mumbai", label: "Birthday Venues Under ₹50K in Mumbai" },
    ],
  },
  {
    id: "by-area",
    heading: "By Area",
    icon: "MapPin",
    compact: true,
    items: mumbaiAreas.map((area) => ({ href: `/locations/${area.slug}`, label: area.name })),
  },
];

/** Studio-wide services shown along the bottom of the mega menu. */
export const megaMenuFooter: MenuItem[] = [
  { slug: "weddings-and-ceremonies", label: "Weddings" },
  { slug: "corporate-events", label: "Corporate" },
  { slug: "conferences-and-summits", label: "Conferences" },
  { slug: "product-launches-and-activations", label: "Launches" },
  { slug: "private-celebrations", label: "Private" },
  { slug: "event-design-and-production", label: "Production" },
];

export const footerNav: FooterNav = {
  studio: [
    { label: "About", href: "/about" },
    { label: "Experiences", href: "/experiences" },
    { label: "Journal", href: "/journal" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Birthday Planning", href: "/services/birthday-planner-mumbai" },
    { label: "Weddings & Ceremonies", href: "/services/weddings-and-ceremonies" },
    { label: "Corporate Events", href: "/services/corporate-events" },
    { label: "Launches & Activations", href: "/services/product-launches-and-activations" },
    { label: "Housewarming", href: "/services/premium-housewarming-mumbai" },
    { label: "Baby Showers", href: "/services/premium-baby-shower-mumbai" },
    { label: "All Services", href: "/services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const resolveMenuHref = (item: MenuItem): string => item.href ?? `/services/${item.slug}`;

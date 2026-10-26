export interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}

/** A menu entry points at a service slug or at an explicit href. */
export type MenuItem = { label: string; slug: string; href?: undefined } | { label: string; href: string; slug?: undefined };

export type MegaMenuIcon = "Sparkles" | "Palette" | "Cake" | "Building2" | "MapPin";

export interface MegaMenuColumnData {
  id: string;
  heading: string;
  icon?: MegaMenuIcon;
  compact?: boolean;
  items: MenuItem[];
}

export interface FooterNav {
  studio: NavItem[];
  services: NavItem[];
  legal: NavItem[];
}

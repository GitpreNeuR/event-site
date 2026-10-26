/** Shared inquiry schema: used by the form (client) and the API route (server). */

export const eventTypes = [
  "Birthday",
  "First birthday",
  "Kids birthday",
  "Housewarming / Griha pravesh",
  "Baby shower / Godh bharai",
  "Wedding or ceremony",
  "Private celebration",
  "Corporate event",
  "Conference or summit",
  "Product launch / Activation",
  "Something else",
] as const;

export const guestRanges = ["Up to 25", "25 – 50", "50 – 100", "100 – 250", "250 – 500", "500+"] as const;

export const budgetRanges = [
  "Under ₹50,000",
  "₹50,000 – ₹1,50,000",
  "₹1,50,000 – ₹5,00,000",
  "₹5,00,000 – ₹15,00,000",
  "₹15,00,000+",
  "Not sure yet",
] as const;

export type EventType = (typeof eventTypes)[number];
export type GuestRange = (typeof guestRanges)[number];
export type BudgetRange = (typeof budgetRanges)[number];

/** Form state. Select fields hold "" until the visitor chooses an option. */
export interface InquiryValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  eventType: EventType | "";
  date: string;
  location: string;
  guests: GuestRange | "";
  budget: BudgetRange | "";
  details: string;
  consent: boolean;
  /** Honeypot — must stay empty. */
  website: string;
}

export type InquiryField = keyof InquiryValues;
export type InquiryErrors = Partial<Record<InquiryField, string>>;

/** The validated, trimmed payload forwarded to the delivery webhook. */
export type InquiryPayload = Omit<InquiryValues, "website" | "eventType" | "guests" | "budget"> & {
  eventType: EventType;
  guests: GuestRange;
  budget: BudgetRange;
};

/** JSON response shape shared by /api/inquiry and /api/newsletter. */
export type FormApiResponse =
  | { ok: true; message: string; mode: "webhook" | "development-log" }
  | { ok: false; message: string; fieldErrors?: InquiryErrors };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{7,20}$/;

export const initialInquiry: InquiryValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  eventType: "",
  date: "",
  location: "",
  guests: "",
  budget: "",
  details: "",
  consent: false,
  website: "",
};

const includes = <T extends string>(list: readonly T[], value: string): value is T => (list as readonly string[]).includes(value);

/** Narrows untrusted input (e.g. a request body) to a string-keyed record. */
export function asRecord(input: unknown): Record<string, unknown> {
  return typeof input === "object" && input !== null && !Array.isArray(input) ? (input as Record<string, unknown>) : {};
}

const readText = (values: Record<string, unknown>, key: InquiryField) => {
  const value = values[key];
  return typeof value === "string" ? value.trim() : "";
};

/**
 * Returns { field: message } for invalid fields; empty object when valid.
 * Accepts untrusted input, so it can run on the server as-is.
 */
export function validateInquiry(input: unknown): InquiryErrors {
  const values = asRecord(input);
  const text = (key: InquiryField) => readText(values, key);
  const errors: InquiryErrors = {};

  if (text("name").length < 2) errors.name = "Please tell us your name.";
  if (!EMAIL_RE.test(text("email"))) errors.email = "Please enter a valid email address.";
  if (text("phone") && !PHONE_RE.test(text("phone"))) errors.phone = "Please enter a valid phone number, or leave it blank.";
  if (!includes(eventTypes, text("eventType"))) errors.eventType = "Please choose the type of event.";
  if (!text("date")) errors.date = "Please share a date or an approximate timeframe.";
  if (!text("location")) errors.location = "Please share the area or venue, even if approximate.";
  if (!includes(guestRanges, text("guests"))) errors.guests = "Please choose an estimated guest count.";
  if (!includes(budgetRanges, text("budget"))) errors.budget = "Please choose a budget range (or ‘Not sure yet’).";
  if (text("details").length > 3000) errors.details = "Please keep details under 3,000 characters.";
  if (values.consent !== true) errors.consent = "Please confirm we may contact you about this inquiry.";
  return errors;
}

/** Parses untrusted input into a clean payload, or returns field errors. */
export function parseInquiry(input: unknown): { ok: true; data: InquiryPayload } | { ok: false; errors: InquiryErrors } {
  const errors = validateInquiry(input);
  const values = asRecord(input);
  const text = (key: InquiryField) => readText(values, key).slice(0, 3000);
  const eventType = text("eventType");
  const guests = text("guests");
  const budget = text("budget");
  if (Object.keys(errors).length || !includes(eventTypes, eventType) || !includes(guestRanges, guests) || !includes(budgetRanges, budget)) {
    return { ok: false, errors };
  }
  return {
    ok: true,
    data: {
      name: text("name"),
      email: text("email"),
      phone: text("phone"),
      company: text("company"),
      eventType,
      date: text("date"),
      location: text("location"),
      guests,
      budget,
      details: text("details"),
      consent: true,
    },
  };
}

const eventTypeBySlug: Record<string, EventType> = {
  "weddings-and-ceremonies": "Wedding or ceremony",
  "corporate-events": "Corporate event",
  "conferences-and-summits": "Conference or summit",
  "product-launches-and-activations": "Product launch / Activation",
  "private-celebrations": "Private celebration",
};

/** Best-guess event type for a service slug (used to prefill the form). */
export function eventTypeForService(slug = ""): EventType | "" {
  if (!slug) return "";
  if (slug.startsWith("first-birthday")) return "First birthday";
  if (slug.startsWith("kids-") || slug.includes("theme") || slug.includes("boss-baby")) return "Kids birthday";
  if (slug.includes("housewarming")) return "Housewarming / Griha pravesh";
  if (slug.includes("baby-shower")) return "Baby shower / Godh bharai";
  if (slug.includes("birthday")) return "Birthday";
  return eventTypeBySlug[slug] ?? "";
}

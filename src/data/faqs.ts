/**
 * Studio-wide FAQs, grouped for the /faq page.
 * Policy answers (deposits, cancellations, payments) are deliberately
 * written as placeholders until the business confirms its terms.
 */
import type { FaqItem } from "@/types/common";

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "general",
    title: "General Questions",
    items: [
      { q: "What kinds of events do you plan?", a: "Birthdays for every age, housewarmings, baby showers, weddings and ceremonies, private dinners, corporate events, conferences and brand launches — primarily across Mumbai and the wider Mumbai region." },
      { q: "Do you manage events from concept to execution?", a: "Yes. We can handle everything from the first idea and budget through design, vendors, logistics and on-the-day management. You can also engage us for specific parts, such as decor or day-of coordination." },
      { q: "Can you customise an event to our requirements?", a: "Every event is planned from your brief. We do not sell fixed packages; we recommend a scope based on your guests, venue, budget and priorities." },
      { q: "Which areas do you serve?", a: "Our focus is Mumbai, with Thane and Navi Mumbai as target service areas in the wider region. See our Locations page, and confirm your specific location during a consultation." },
    ],
  },
  {
    id: "corporate",
    title: "Corporate Events",
    items: [
      { q: "Can you work with our procurement and finance teams?", a: "Yes. We can provide itemised estimates, supplier details and documentation in the format your teams require." },
      { q: "Do you provide AV and stage production?", a: "We design and manage stage, lighting, sound and LED production through trusted technical partners, coordinated by our team." },
      { q: "Can you support hybrid or live-streamed events?", a: "Yes. We coordinate streaming partners, camera positions and run-of-show so in-room and remote audiences are both well served." },
    ],
  },
  {
    id: "weddings-private",
    title: "Weddings & Private Events",
    items: [
      { q: "Can you plan only some of our wedding functions?", a: "Yes. Many families engage us for specific functions such as the sangeet and reception, while managing others themselves." },
      { q: "Do you plan intimate gatherings?", a: "Absolutely — dinners for ten to forty guests are some of the most rewarding events we plan." },
      { q: "Can you respect specific religious or family customs?", a: "Yes. We plan rituals with your family and officiant, and design decor and timings around your traditions." },
    ],
  },
  {
    id: "planning",
    title: "Planning & Logistics",
    items: [
      { q: "How early should we begin planning an event?", a: "As a guide: three to six weeks for most birthdays, four to eight weeks for corporate events, and six to twelve months for multi-day weddings. Shorter timelines are sometimes possible — ask us." },
      { q: "Do you work with our existing vendors?", a: "Usually, yes. If you already have trusted vendors, we coordinate with them and fill any gaps." },
      { q: "What happens if it rains?", a: "For any outdoor plan during or near the monsoon, we prepare a covered or indoor backup as part of the plan, not as an afterthought." },
      { q: "Do you handle building and society permissions?", a: "We help you understand and coordinate building, society and venue requirements. Some permissions must be obtained by the resident or host, and we'll tell you which." },
    ],
  },
  {
    id: "budget",
    title: "Budget & Payments",
    items: [
      { q: "How do you price your services?", a: "Pricing depends on scope, scale and complexity. After an initial consultation we share an itemised estimate. [Placeholder: add the studio's fee structure once confirmed.]" },
      { q: "Is a deposit required to confirm a booking?", a: "[Placeholder: describe the studio's booking deposit policy here once it has been finalised and reviewed.]" },
      { q: "What is your cancellation policy?", a: "[Placeholder: insert the confirmed cancellation and rescheduling policy. Vendor and venue cancellation terms may apply separately.]" },
      { q: "Can you work within a fixed budget?", a: "Yes. Tell us your budget at the start and we'll recommend where to focus spending and where to save." },
    ],
  },
  {
    id: "booking",
    title: "Booking & Consultation",
    items: [
      { q: "How can we request a consultation?", a: "Use the inquiry form on our Contact page with as much detail as you have. We'll reply to arrange a conversation." },
      { q: "Is the first consultation free?", a: "[Placeholder: confirm whether initial consultations are complimentary.]" },
      { q: "What should we prepare before the consultation?", a: "A rough date, guest count, location preference, budget range and any inspiration images. Approximate answers are fine." },
    ],
  },
];

/** A short selection for the homepage preview. */
export function getFaqCategory(id: string): FaqCategory {
  const category = faqCategories.find((c) => c.id === id);
  if (!category) throw new Error(`Unknown FAQ category "${id}"`);
  return category;
}

function pick(categoryId: string, index: number): FaqItem {
  const item = getFaqCategory(categoryId).items[index];
  if (!item) throw new Error(`FAQ "${categoryId}"[${index}] does not exist`);
  return item;
}

export const faqPreview: FaqItem[] = [pick("planning", 0), pick("general", 1), pick("general", 2), pick("booking", 0)];

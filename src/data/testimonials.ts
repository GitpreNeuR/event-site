/**
 * SAMPLE testimonials for development only.
 * These are written to show the layout and tone; they are not real client
 * quotes. Replace with genuine, permissioned feedback before launch and set
 * `isSample: false` on each real entry.
 */

export interface Testimonial {
  quote: string;
  attribution: string;
  context: string;
  isSample: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "We wanted our daughter's first birthday to feel calm for the grandparents and fun for the cousins. The plan worked around her nap, and we actually got to sit down and eat.",
    attribution: "Parent, first birthday",
    context: "Sample testimonial",
    isSample: true,
  },
  {
    quote:
      "Three functions, two venues and one very large family — and somehow every transition was on time. We were guests at our own sangeet, which is exactly what we hoped for.",
    attribution: "Couple, wedding weekend",
    context: "Sample testimonial",
    isSample: true,
  },
  {
    quote:
      "The brief was clear, the budget tracking was transparent, and our leadership team stopped asking me for updates because the shared timeline already answered them.",
    attribution: "People & Culture lead, annual offsite",
    context: "Sample testimonial",
    isSample: true,
  },
];

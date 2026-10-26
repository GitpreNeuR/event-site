/**
 * Journal articles. Written as SAMPLE editorial content — useful, general
 * guidance — and labelled as such until reviewed by the business.
 *
 * Body blocks: { type: "p" | "h2" | "h3" | "ul" | "quote", text | items }
 */
import type { Article, ArticleCategory } from "@/types/article";

export const articleCategories: ArticleCategory[] = ["Planning", "Venues", "Birthdays", "Corporate", "Guest Experience"];

export const articles: Article[] = [
  {
    slug: "event-planning-timeline",
    title: "Event Planning Timelines: What to Know Before You Book Anything",
    category: "Planning",
    date: "2026-09-18",
    readingTime: 6,
    featured: true,
    excerpt:
      "How far ahead to start, what to lock in first, and why the order of decisions matters more than the number of weeks.",
    image: "/images/about/planning-notebook.webp",
    imageAlt: "A planner's notebook open on a desk with stickers and a pen",
    body: [
      { type: "p", text: "The most common question we hear is “how early is early enough?” The honest answer is that it depends less on the number of weeks and more on the order in which decisions are made. Lock the right things first and a shorter timeline becomes manageable; lock them in the wrong order and even months can feel rushed." },
      { type: "h2", text: "Decide the three fixed points first" },
      { type: "p", text: "Before you look at decor or menus, agree three things: the date (or a small range of dates), an approximate guest count, and a budget envelope. Almost every other decision — venue, caterer, entertainment — depends on these." },
      { type: "ul", items: ["Date: a fixed date narrows venue options; a flexible one widens them.", "Guest count: the single biggest driver of venue size and food cost.", "Budget: an honest range, including a contingency of around ten percent."] },
      { type: "h2", text: "A realistic guide by event type" },
      { type: "p", text: "These are starting points, not rules. In Mumbai, festive seasons and winter weekends fill quickly, so add time if your date falls in a busy period." },
      { type: "ul", items: ["Birthdays and small private events: three to six weeks.", "Housewarmings and baby showers: three to five weeks, often shaped by an auspicious date.", "Corporate events and launches: four to eight weeks, longer for custom fabrication.", "Multi-day weddings: six to twelve months."] },
      { type: "h2", text: "What to book in what order" },
      { type: "p", text: "Venue first, because it fixes capacity, timings and many vendor rules. Then the vendors most likely to be booked out — often photographers, popular caterers and entertainers. Decor and styling come next, designed for the space you have confirmed. Invitations go out once the venue and time are certain." },
      { type: "quote", text: "The order of decisions matters more than the number of weeks." },
      { type: "h2", text: "The final fortnight" },
      { type: "p", text: "The last two weeks are for confirmation, not creation. Reconfirm every vendor's timing and access, share a single run-sheet with everyone involved, and agree who makes decisions on the day. If something new comes up now, ask whether it is essential before adding it." },
    ],
  },
  {
    slug: "choosing-the-right-event-venue",
    title: "A Guide to Choosing the Right Event Venue in Mumbai",
    category: "Venues",
    date: "2026-08-27",
    readingTime: 7,
    excerpt:
      "Capacity is only the beginning. The questions that actually separate a good venue from a stressful one.",
    image: "/images/venues/indoor-dining.webp",
    imageAlt: "An indoor event space with round tables and warm pendant lights",
    body: [
      { type: "p", text: "Most venue searches start with capacity and price. Both matter, but neither tells you how the event will feel or how smoothly it will run. In a city like Mumbai, where travel time, building rules and weather can shape an evening, a few practical questions are worth asking early." },
      { type: "h2", text: "Start with your guests, not the venue" },
      { type: "p", text: "Where are most guests travelling from, and when? A beautiful venue that adds ninety minutes of evening traffic for half your guests may not be the best choice. Consider elders, young children and anyone who relies on public transport." },
      { type: "h2", text: "Questions to ask every venue" },
      { type: "ul", items: ["What exactly is included in the price — and what is charged separately?", "Is there a minimum spend, and how are taxes and service charges applied?", "Are outside caterers, decorators or entertainers allowed?", "How long is the set-up window before guests arrive, and how quickly must we clear out?", "Are there sound or time limits?", "What is the plan if it rains?", "Is there parking or a safe drop-off point?"] },
      { type: "h2", text: "Look at the room as a designer would" },
      { type: "p", text: "Ceiling height affects decor. Pillars affect sightlines. Natural light changes photographs. Power points dictate where lighting and sound can go. Visit at the same time of day as your event if you can." },
      { type: "h2", text: "Get it in writing" },
      { type: "p", text: "Before paying anything, ask for the confirmed date, timings, inclusions, restrictions and cancellation terms in writing. Prices and policies change, so verify current terms directly with the venue rather than relying on old quotes or listings." },
    ],
  },
  {
    slug: "planning-a-memorable-product-launch",
    title: "How to Plan a Memorable Product Launch",
    category: "Corporate",
    date: "2026-07-30",
    readingTime: 6,
    excerpt:
      "A launch has seconds to make an impression. Build the event around the reveal and design everything else to support it.",
    image: "/images/services/launch-runway.webp",
    imageAlt: "A model walking a circular runway at a launch event",
    body: [
      { type: "p", text: "A product launch is one of the few events where a single moment carries most of the weight. Guests may stay for two hours, but what they remember — and share — is usually the sixty seconds around the reveal." },
      { type: "h2", text: "Define the one thing guests should remember" },
      { type: "p", text: "Before choosing a venue or a format, write down the single idea you want guests to leave with. Every choice that follows — lighting, music, script, staging — should make that idea clearer." },
      { type: "h2", text: "Design the reveal like a performance" },
      { type: "ul", items: ["Build anticipation: a change in light or sound signals that something is about to happen.", "Control the sightlines: make sure every guest, and every camera, can see the product.", "Rehearse it: run the cue sequence until it works every time.", "Plan the after-moment: give guests a way to get close to the product straight away."] },
      { type: "h2", text: "Think about the people with cameras" },
      { type: "p", text: "Press and creators need good light, clear positions and a little time. Plan a dedicated moment for them rather than hoping they find an angle in the crowd." },
      { type: "h2", text: "Keep it buildable" },
      { type: "p", text: "Ambitious set pieces are exciting, but they need fabrication time, venue approvals and safe installation. Bring your production team in early so the concept that is approved is the one that gets built." },
    ],
  },
  {
    slug: "creating-a-better-guest-experience",
    title: "How to Create a Better Guest Experience",
    category: "Guest Experience",
    date: "2026-06-25",
    readingTime: 5,
    excerpt:
      "Guests rarely remember the centrepieces. They remember whether they felt welcome, comfortable and looked after.",
    image: "/images/services/toast.webp",
    imageAlt: "Guests raising glasses in a toast across a dinner table",
    body: [
      { type: "p", text: "Ask guests about an event a month later and they rarely describe the decor in detail. They remember whether they were greeted, whether they found a seat, whether the food arrived while they were still hungry, and whether the evening had a rhythm." },
      { type: "h2", text: "Walk the event as a guest" },
      { type: "p", text: "Before the day, walk through the event from a guest's point of view: arrival, parking or drop-off, the welcome, finding a drink, finding a seat, finding the bathroom, leaving. Every moment of confusion is a design problem you can solve in advance." },
      { type: "h2", text: "Small comforts that make a big difference" },
      { type: "ul", items: ["A clear welcome at the entrance — a person, not just a sign.", "Comfortable seating for elders, away from speakers.", "Water and a light bite within minutes of arrival.", "A quiet corner for parents with small children.", "A clear end to the evening, so no one is left wondering when to leave."] },
      { type: "h2", text: "Pace the evening" },
      { type: "p", text: "Long gaps make guests restless; too much programme makes them tired. Plan a few clear moments — a welcome, a toast, the meal, a highlight — and leave space between them for conversation." },
    ],
  },
  {
    slug: "questions-to-ask-before-hiring-an-event-planner",
    title: "Questions to Ask Before Hiring an Event Planner",
    category: "Planning",
    date: "2026-05-21",
    readingTime: 5,
    excerpt:
      "Eight questions that reveal how a planner actually works — and whether they are the right fit for your event.",
    image: "/images/about/planning-desk.webp",
    imageAlt: "A smiling woman writing notes at a bright desk",
    body: [
      { type: "p", text: "Portfolios show what a planner can make look beautiful. The questions below help you understand how they work — which is what you will actually experience over the weeks of planning." },
      { type: "h2", text: "Eight useful questions" },
      { type: "ul", items: ["Who will be my day-to-day contact, and who will be there on the day?", "How do you charge, and what exactly is included?", "How do you choose vendors, and can I use my own?", "Do you receive commissions from vendors or venues, and will you disclose them?", "How will you keep me updated?", "What does your contingency planning look like — for rain, delays or no-shows?", "Can I see an example run-sheet or timeline?", "What do you need from me to make this go well?"] },
      { type: "h2", text: "Listen for specifics" },
      { type: "p", text: "Good answers are specific: names, documents, processes. Vague reassurance is not a plan. A planner who asks you thoughtful questions in return is usually a planner who will think carefully about your event." },
    ],
  },
  {
    slug: "planning-a-birthday-party-in-mumbai",
    title: "Planning a Birthday Party in Mumbai: A Practical Checklist",
    category: "Birthdays",
    date: "2026-04-16",
    readingTime: 6,
    excerpt:
      "Society rules, monsoon backups, travel time and the order of bookings — a practical checklist for Mumbai birthdays.",
    image: "/images/birthday/pink-balloon-setup.webp",
    imageAlt: "A pink and white balloon birthday setup with a neon sign",
    body: [
      { type: "p", text: "Birthday parties in Mumbai come with a few city-specific considerations: building and society rules, travel time between suburbs, and a monsoon that can make outdoor plans unpredictable for several months a year." },
      { type: "h2", text: "Four weeks before" },
      { type: "ul", items: ["Agree the date, guest count and budget.", "Decide home, clubhouse, restaurant or banquet venue.", "If at home or in a society space, check timing, lift, parking and decor rules.", "Choose a theme or styling direction."] },
      { type: "h2", text: "Three weeks before" },
      { type: "ul", items: ["Book the venue, cake and entertainer.", "Brief your decorator with photos and measurements of the space.", "Send invitations with clear timing and directions."] },
      { type: "h2", text: "One week before" },
      { type: "ul", items: ["Confirm RSVPs and dietary needs.", "Share a simple run-sheet with every vendor.", "Confirm set-up and pack-down timings with the venue or society.", "If outdoors between June and September, confirm your rain backup."] },
      { type: "h2", text: "On the day" },
      { type: "p", text: "Ask one person — a planner, friend or family member — to be the point of contact for vendors, so the hosts can spend time with guests. Schedule the cake early for young children, and keep water and snacks within easy reach." },
    ],
  },
];

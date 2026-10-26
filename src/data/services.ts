/**
 * Core studio services (weddings, corporate, brand, private, production).
 * Mumbai birthday & family-celebration landing pages live in
 * `birthday-services.js`. Both lists are merged in `src/lib/services.js`
 * and rendered by the same `/services/[slug]` template.
 *
 * Headlines support *asterisks* for an italic accent word.
 */
import type { ProcessKey, ProcessStep, Service, ServiceGroup, ServicePillar } from "@/types/service";


export const serviceGroups: Record<ServiceGroup, { label: string; order: number }> = {
  weddings: { label: "Weddings & Ceremonies", order: 1 },
  corporate: { label: "Corporate & Conferences", order: 2 },
  brand: { label: "Brand Experiences", order: 3 },
  private: { label: "Private Celebrations", order: 4 },
  production: { label: "Design & Production", order: 5 },
  birthday: { label: "Birthday Planning", order: 6 },
  ceremony: { label: "Family Ceremonies", order: 7 },
  theme: { label: "Theme-Based Birthdays", order: 8 },
  age: { label: "Birthdays by Age", order: 9 },
  venue: { label: "Venues & Locations", order: 10 },
};

/** Planning sequences reused by service pages, keyed by `processKey`. */
export const processes: Record<ProcessKey, ProcessStep[]> = {
  studio: [
    { title: "Discover", body: "A working session to understand the occasion, the guests, the budget envelope and what success should feel like." },
    { title: "Design", body: "A creative direction — mood, palette, layout and guest journey — presented as a visual deck you can react to." },
    { title: "Plan", body: "Vendors shortlisted and briefed, a costed plan, a production schedule and a single shared timeline." },
    { title: "Produce", body: "Fabrication, rehearsals, technical checks and run-of-show sign-off before anything reaches the venue." },
    { title: "Deliver", body: "Our team runs the day on site, so you can host — then we manage breakdown and close-out." },
  ],
  corporate: [
    { title: "Brief", body: "Objectives, audience, stakeholders and constraints captured in one agreed brief." },
    { title: "Concept", body: "Format, content flow, staging and attendee experience mapped against the brief." },
    { title: "Plan", body: "Venue, vendors, budget tracking, approvals and a production calendar shared with your team." },
    { title: "Produce", body: "Technical riders, rehearsals, speaker and show calling, registration and logistics." },
    { title: "Report", body: "On-site management, followed by a close-out with learnings and vendor reconciliation." },
  ],
  birthday: [
    { title: "Consult", body: "A short call about the guest of honour, guest list, date, budget and the feeling you want." },
    { title: "Concept", body: "A theme or styling direction with decor, colour, cake and activity ideas pulled together." },
    { title: "Confirm", body: "Venue or home layout, vendor bookings, a costed plan and a simple timeline for the day." },
    { title: "Set Up", body: "Decor installation, entertainment and food coordinated before the first guest arrives." },
    { title: "Celebrate", body: "A coordinator runs the schedule on the day, then manages pack-down so you are free." },
  ],
  venue: [
    { title: "Requirements", body: "Guest count, date, budget range, location preferences and must-haves noted up front." },
    { title: "Shortlist", body: "Venue options researched against your brief, with known trade-offs explained honestly." },
    { title: "Visit & Compare", body: "Site visits or video walk-throughs, with layout, access and inclusions compared side by side." },
    { title: "Secure", body: "Help reviewing the venue's terms, timings, restrictions and what is and is not included." },
    { title: "Plan the Day", body: "Decor, catering and schedule designed around the venue you choose." },
  ],
};

export const coreServices: Service[] = [
  {
    slug: "weddings-and-ceremonies",
    title: "Weddings & Ceremonies",
    menuLabel: "Weddings & Ceremonies",
    group: "weddings",
    eyebrow: "Weddings · Mehendi · Sangeet · Haldi",
    headline: "Weddings planned around *your* families, not a template",
    summary:
      "Multi-day wedding planning and design — from intimate ceremonies to full sangeet weekends — held together by one calm team.",
    intro: [
      "An Indian wedding is rarely one event. It is a sequence of rituals, meals and parties, each with its own guest list, dress code and emotional weight. We plan the whole arc so that the haldi feels as considered as the reception, and so that families can be present rather than managing vendors.",
      "We work with couples and their parents to agree priorities early: which ceremonies matter most, where the budget should concentrate, and which traditions need to be honoured exactly. That clarity shapes every design and logistics decision that follows.",
    ],
    image: "/images/services/wedding-mandap.webp",
    imageAlt: "Bride and groom seated under a floral mandap with family gathered around",
    gallery: [
      { src: "/images/hero/ballroom-mandap.webp", alt: "A ballroom wedding ceremony with a gold-lit mandap and candlelight" },
      { src: "/images/services/garden-reception.webp", alt: "An outdoor reception with draped canopies and round tables" },
    ],
    includes: [
      "Wedding planning across all functions",
      "Creative direction and mandap design",
      "Venue search and site coordination",
      "Vendor sourcing, briefing and contracts support",
      "Guest hospitality, travel and RSVP tracking",
      "Ritual timing coordinated with your officiant",
      "Entertainment and sangeet production",
      "On-site team for every function",
    ],
    highlights: [
      { title: "One plan, many functions", body: "A single master timeline across every ceremony, so transitions between mehendi, sangeet and pheras are rehearsed rather than improvised." },
      { title: "Design with meaning", body: "Florals, colour and set pieces chosen to sit comfortably with family customs, not compete with them." },
      { title: "Hospitality first", body: "Seating, elders' comfort, meal timing and guest movement planned as carefully as the decor." },
    ],
    processKey: "studio",
    faqs: [
      { q: "How far ahead should we start planning a wedding?", a: "For multi-day weddings in Mumbai, starting six to twelve months ahead gives the widest choice of venues and vendors, especially in peak season. Smaller ceremonies can be planned in less time — tell us your date and we will be candid about what is realistic." },
      { q: "Can you plan only some of our functions?", a: "Yes. Some families ask us to design and run the sangeet and reception while they manage the religious ceremonies themselves. We scope the engagement around what you need." },
      { q: "Do you work with our existing vendors?", a: "Usually, yes. If you already have a caterer, decorator or photographer you trust, we coordinate with them and fill the remaining gaps." },
    ],
    related: ["private-celebrations", "event-design-and-production", "premium-housewarming-mumbai"],
    seo: {
      title: "Wedding Planner in Mumbai — Ceremonies, Sangeet & Receptions",
      description: "Wedding planning and design in Mumbai across mehendi, haldi, sangeet, pheras and receptions — one team coordinating venues, vendors and guests.",
    },
    cta: { title: "Tell us about your wedding", body: "Share your dates, functions and guest count. We'll come back with how we would approach it." },
  },
  {
    slug: "corporate-events",
    title: "Corporate Events",
    menuLabel: "Corporate Events",
    group: "corporate",
    eyebrow: "Annual Days · Awards · Offsites · Leadership Dinners",
    headline: "Corporate gatherings with a *clear* reason to exist",
    summary:
      "Annual days, award nights, offsites and leadership dinners designed around business objectives — and run with production discipline.",
    intro: [
      "A corporate event is a business tool. Whether the goal is recognising a team, aligning leadership or thanking partners, the format, content and atmosphere should all point at the same outcome. We start by agreeing what that outcome is.",
      "From there we handle the venue, staging, run-of-show, guest logistics and supplier management, with transparent budget tracking and one point of contact for your internal stakeholders.",
    ],
    image: "/images/services/corporate-banquet.webp",
    imageAlt: "A banquet hall set with round tables, gold chairs and chandeliers",
    gallery: [
      { src: "/images/services/corporate-dinner.webp", alt: "A formal dinner table with black linen, glassware and flowers" },
      { src: "/images/services/toast.webp", alt: "Guests raising glasses in a toast at a dinner" },
    ],
    includes: [
      "Event strategy and format design",
      "Venue sourcing and negotiation support",
      "Stage, AV and lighting production",
      "Awards and recognition show design",
      "Run-of-show and show calling",
      "Guest registration and hospitality",
      "Entertainment curation",
      "Budget tracking and supplier reconciliation",
    ],
    highlights: [
      { title: "Objectives on paper", body: "Every recommendation traces back to an agreed brief, which makes internal approvals faster." },
      { title: "Production discipline", body: "Technical riders, rehearsals and cue sheets, so the programme runs to time." },
      { title: "Brand-consistent detail", body: "Signage, stage graphics and collateral coordinated with your brand guidelines." },
    ],
    processKey: "corporate",
    faqs: [
      { q: "Can you work with our procurement process?", a: "Yes. We can provide itemised estimates, vendor details and documentation in the format your procurement or finance team needs." },
      { q: "Do you manage events outside Mumbai?", a: "Our focus is Mumbai and the surrounding region. For offsites further afield, contact us with the details and we will tell you honestly whether we are the right fit." },
      { q: "What lead time do you need?", a: "Four to eight weeks suits most corporate events. Large annual days or award nights benefit from three months or more." },
    ],
    related: ["conferences-and-summits", "product-launches-and-activations", "event-design-and-production"],
    seo: {
      title: "Corporate Event Management in Mumbai — Annual Days, Awards & Offsites",
      description: "Corporate event planning in Mumbai: annual days, award nights, offsites and leadership dinners with full production, AV and guest management.",
    },
    cta: { title: "Planning a company event?", body: "Send us the occasion, audience size and timing, and we will outline a format and next steps." },
  },
  {
    slug: "conferences-and-summits",
    title: "Conferences & Summits",
    menuLabel: "Conferences & Summits",
    group: "corporate",
    eyebrow: "Conferences · Summits · Town Halls · Panels",
    headline: "Conferences where the *content* lands",
    summary:
      "Programme design, staging and attendee logistics for conferences, summits and town halls where clarity and timing matter.",
    intro: [
      "Good conferences are built around attention. We design the flow of sessions, breaks and networking so energy holds through the day, and we stage content so speakers are clear, legible and on time.",
      "Behind the scenes we coordinate registration, speaker management, technical production and venue operations, with a show caller keeping every segment to its cue.",
    ],
    image: "/images/services/conference-hall.webp",
    imageAlt: "A speaker presenting on a lit stage to a large audience in an auditorium",
    gallery: [
      { src: "/images/services/conference-stage.webp", alt: "An audience watching a speaker in a dimly lit conference hall" },
      { src: "/images/services/conference-audience.webp", alt: "Rows of attendees seated during a conference session" },
    ],
    includes: [
      "Agenda and session flow design",
      "Speaker briefing and rehearsal schedules",
      "Stage design, LED and AV production",
      "Registration and badge management",
      "Breakout and networking spaces",
      "Hybrid and live-stream coordination",
      "Show calling and time management",
      "Post-event close-out report",
    ],
    highlights: [
      { title: "Built for attention", body: "Session lengths, transitions and breaks planned so audiences stay with the programme." },
      { title: "Speaker care", body: "Clear briefs, tech checks and green-room management so speakers arrive confident." },
      { title: "Calm operations", body: "Registration, catering and room changes coordinated around the agenda." },
    ],
    processKey: "corporate",
    faqs: [
      { q: "Can you support hybrid or streamed sessions?", a: "Yes. We coordinate with streaming and AV partners on camera positions, audio and run-of-show so in-room and online audiences both get a clean experience." },
      { q: "Do you help with the agenda itself?", a: "We can advise on structure, pacing and formats. Your team owns the content; we help it land." },
      { q: "How do you handle speaker changes on the day?", a: "Our show caller maintains a live running order, and contingency slots are built into the schedule from the start." },
    ],
    related: ["corporate-events", "event-design-and-production", "product-launches-and-activations"],
    seo: {
      title: "Conference & Summit Management in Mumbai",
      description: "Conference and summit planning in Mumbai — agenda flow, staging, AV, speaker management and registration delivered by one production team.",
    },
    cta: { title: "Shape your next conference", body: "Tell us the audience, the format and the date — we'll suggest a production approach." },
  },
  {
    slug: "product-launches-and-activations",
    title: "Product Launches & Brand Activations",
    menuLabel: "Launches & Activations",
    group: "brand",
    eyebrow: "Launches · Activations · Experiential · Exhibitions",
    headline: "Launches people *remember*, and talk about",
    summary:
      "Product unveilings, press moments and brand activations designed to be experienced in person and shared afterwards.",
    intro: [
      "A launch has seconds to make an impression. We build the moment around the product — the reveal, the light, the sound, the way guests move towards it — and design everything else to support that.",
      "For activations and pop-ups we think about dwell time, footfall and what guests will photograph. Every experience is designed to be practical to build, safe to run and true to the brand.",
    ],
    image: "/images/services/launch-runway.webp",
    imageAlt: "A model walking a circular runway at a crowded launch event",
    gallery: [
      { src: "/images/services/lighting-beams.webp", alt: "Coloured stage lighting beams cutting through haze" },
      { src: "/images/services/floral-lights.webp", alt: "Illuminated oversized flower installations hanging above a space" },
    ],
    includes: [
      "Launch concept and reveal choreography",
      "Set design and fabrication management",
      "Lighting, sound and content playback",
      "Press and influencer moment planning",
      "Brand activation and pop-up design",
      "Guest flow and dwell-time planning",
      "Permissions and venue coordination",
      "Photography and content capture briefs",
    ],
    highlights: [
      { title: "The reveal, rehearsed", body: "Lighting, music and timing cues rehearsed until the moment lands every time." },
      { title: "Designed to be shared", body: "Sightlines and photo moments planned deliberately rather than left to chance." },
      { title: "Buildable ideas", body: "Concepts developed with fabricators early, so what is pitched is what gets built." },
    ],
    processKey: "corporate",
    faqs: [
      { q: "Can you work alongside our creative or PR agency?", a: "Yes. We often act as the production partner to an agency, turning their concept into a buildable, safe and on-time event." },
      { q: "Do you handle permissions for public activations?", a: "We coordinate with venues and relevant authorities, but requirements vary by location. We confirm what applies for each site during planning." },
      { q: "How quickly can a launch be turned around?", a: "Simple launches can be produced in a few weeks. Custom fabrication or large-format staging usually needs more lead time." },
    ],
    related: ["event-design-and-production", "corporate-events", "conferences-and-summits"],
    seo: {
      title: "Product Launch & Brand Activation Agency in Mumbai",
      description: "Product launches, press events and brand activations in Mumbai — reveal design, staging, lighting and experiential production.",
    },
    cta: { title: "Have something to launch?", body: "Share the product, audience and timing. We'll come back with an initial approach." },
  },
  {
    slug: "private-celebrations",
    title: "Private Celebrations",
    menuLabel: "Private Celebrations",
    group: "private",
    eyebrow: "Anniversaries · Dinners · Milestones · Reunions",
    headline: "Private gatherings with an *unhurried* kind of luxury",
    summary:
      "Anniversaries, milestone dinners, proposals and family reunions — designed with restraint and hosted with warmth.",
    intro: [
      "Some of the most meaningful events are the smallest. A long table for thirty, a terrace at dusk, a dinner where every chair has been placed on purpose. We bring the same planning rigour to private gatherings that we bring to large productions — just quieter.",
      "We take care of the setting, food, music and flow of the evening, and keep our team discreet so the hosts can be hosts.",
    ],
    image: "/images/services/night-supper.webp",
    imageAlt: "Friends gathered around a low table outdoors at night under string lights",
    gallery: [
      { src: "/images/services/candle-dinner.webp", alt: "A long candlelit dinner table set with glassware and linen" },
      { src: "/images/experiences/rooftop-lanterns.webp", alt: "Two lanterns glowing on a terrace overlooking city lights" },
    ],
    includes: [
      "Concept and styling direction",
      "Venue or home set-up planning",
      "Table design, florals and lighting",
      "Menu planning with caterers or chefs",
      "Live music and entertainment",
      "Invitations and guest coordination",
      "Surprise and proposal logistics",
      "Discreet on-site hosting team",
    ],
    highlights: [
      { title: "Intimacy by design", body: "Layouts, lighting and sound levels chosen so conversation stays easy." },
      { title: "Personal detail", body: "Menus, place cards and keepsakes that reflect the people being celebrated." },
      { title: "Invisible service", body: "Our team stays in the background, managing timing and vendors quietly." },
    ],
    processKey: "studio",
    faqs: [
      { q: "Do you plan very small events?", a: "Yes. We regularly plan dinners for ten to forty guests. The scope is smaller, but the attention to detail is the same." },
      { q: "Can you plan a surprise?", a: "We plan surprises carefully — including how to keep them secret. We'll agree a single point of contact so nothing leaks." },
      { q: "Can the event be at our home?", a: "Absolutely. We'll assess space, access and building rules first, then plan layout, decor and service around them." },
    ],
    related: ["luxury-birthday-planner-mumbai", "adult-birthday-planner-mumbai", "weddings-and-ceremonies"],
    seo: {
      title: "Private Party & Celebration Planner in Mumbai",
      description: "Private celebration planning in Mumbai — anniversaries, milestone dinners, proposals and reunions, designed and hosted with care.",
    },
    cta: { title: "Planning something personal?", body: "Tell us who you're celebrating and roughly how many guests. We'll take it from there." },
  },
  {
    slug: "event-design-and-production",
    title: "Event Design & Production",
    menuLabel: "Design & Production",
    group: "production",
    eyebrow: "Creative Direction · Decor · Staging · Lighting · AV",
    headline: "Design and production, *engineered* to the last cue",
    summary:
      "Creative direction, decor, stage design, lighting and audiovisual production — available on its own or as part of full planning.",
    intro: [
      "Design is where an event's personality lives; production is what makes it real. We develop concepts as mood boards, layouts and renders, then manage fabrication, floristry, lighting and AV so the finished room matches what was promised.",
      "Planners, agencies and families who already have logistics covered often engage us for design and production alone.",
    ],
    image: "/images/services/stage-lighting.webp",
    imageAlt: "An empty stage washed in purple light with vertical light bars",
    gallery: [
      { src: "/images/services/floral-lights.webp", alt: "Glowing flower-shaped light installations suspended overhead" },
      { src: "/images/experiences/florals-white.webp", alt: "A dining table with white and peach floral arrangements" },
    ],
    includes: [
      "Creative concept and mood boards",
      "Floor plans and 3D visualisation",
      "Decor, florals and styling",
      "Stage and set design",
      "Lighting design",
      "Sound, LED and AV coordination",
      "Fabrication and installation management",
      "Breakdown and venue handover",
    ],
    highlights: [
      { title: "Seen before it's built", body: "Layouts and visuals agreed before fabrication starts, so there are fewer surprises on install day." },
      { title: "Light as material", body: "Lighting is designed from the start, not added at the end — it changes everything." },
      { title: "Technical rigour", body: "Power, rigging, load-in windows and venue rules planned with suppliers in advance." },
    ],
    processKey: "studio",
    faqs: [
      { q: "Can we hire you only for decor and design?", a: "Yes. Design and production can be engaged on its own, alongside your own planner or internal team." },
      { q: "Do you provide 3D visuals?", a: "For larger productions we provide floor plans and visualisations so stakeholders can approve the design before fabrication." },
      { q: "Who handles venue technical requirements?", a: "We coordinate power, rigging and load-in requirements with the venue and our technical suppliers." },
    ],
    related: ["product-launches-and-activations", "weddings-and-ceremonies", "birthday-decoration-mumbai"],
    seo: {
      title: "Event Design, Decor & Production in Mumbai",
      description: "Event design and production in Mumbai — creative direction, decor, florals, staging, lighting and AV delivered by one team.",
    },
    cta: { title: "Need a design partner?", body: "Send your brief, venue and date and we'll talk through a creative direction." },
  },
];

/** The six pillars shown on the homepage and services overview. */
export const servicePillars: ServicePillar[] = [
  {
    title: "Birthdays & Milestones",
    description: "First birthdays to sixtieths — themes, decor, venues and on-the-day coordination across Mumbai.",
    href: "/services/birthday-planner-mumbai",
    image: "/images/birthday/pink-balloon-setup.webp",
    imageAlt: "A pink and white balloon birthday setup with a neon sign",
    caption: "Birthday planning — styled for the guest of honour.",
  },
  {
    title: "Family Ceremonies",
    description: "Griha pravesh, godh bharai and naming ceremonies, planned with respect for ritual and comfort for elders.",
    href: "/services/premium-housewarming-mumbai",
    image: "/images/birthday/diyas-tray.webp",
    imageAlt: "Lit clay diyas on a tray scattered with petals",
    caption: "Housewarmings and baby showers — tradition, gently styled.",
  },
  {
    title: "Weddings & Ceremonies",
    description: "Mehendi to reception, every function planned as one calm, coherent arc.",
    href: "/services/weddings-and-ceremonies",
    image: "/images/services/wedding-mandap.webp",
    imageAlt: "A couple seated under a floral mandap with family around them",
    caption: "Weddings — one plan across every function.",
  },
  {
    title: "Corporate & Conferences",
    description: "Annual days, award nights, offsites and summits with production discipline.",
    href: "/services/corporate-events",
    image: "/images/services/conference-hall.webp",
    imageAlt: "A speaker presenting on stage to a large audience",
    caption: "Corporate events — objectives first, then the show.",
  },
  {
    title: "Launches & Activations",
    description: "Product reveals and brand experiences designed to be felt in the room and shared afterwards.",
    href: "/services/product-launches-and-activations",
    image: "/images/services/launch-runway.webp",
    imageAlt: "A model walking a circular runway at a launch",
    caption: "Launches — built around a single unforgettable moment.",
  },
  {
    title: "Design & Production",
    description: "Creative direction, decor, staging, lighting and AV — on its own or as part of full planning.",
    href: "/services/event-design-and-production",
    image: "/images/services/stage-lighting.webp",
    imageAlt: "An empty stage washed in purple light",
    caption: "Production — engineered to the last cue.",
  },
];

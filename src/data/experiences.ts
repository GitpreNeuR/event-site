/**
 * Illustrative concept studies.
 * These are SAMPLE projects that show how the studio would approach each
 * kind of event. They are not past client work and must be labelled as such
 * wherever they appear. Replace with real case studies (with permission).
 */
import type { Experience, ExperienceFilter } from "@/types/experience";


export const experienceLabel = "Illustrative concept";

export const experienceCategories: ExperienceFilter[] = [
  "All",
  "Weddings",
  "Birthdays",
  "Private Celebrations",
  "Corporate",
  "Brand Experiences",
];

export const experiences: Experience[] = [
  {
    slug: "a-monsoon-mehendi",
    title: "A Monsoon Mehendi",
    category: "Weddings",
    setting: "Covered courtyard, sample setting",
    scale: "Around 120 guests",
    excerpt: "Saffron drapes, marigold canopies and a rain-ready layout for an afternoon of henna and music.",
    cover: "/images/experiences/henna-yellow.webp",
    coverAlt: "Henna-patterned hands resting on a yellow sari beside marigold garlands",
    overview:
      "This concept imagines a mehendi held in July, when Mumbai's monsoon makes outdoor plans risky. The goal was to keep the joy of an open-air function while removing the weather from the equation.",
    concept:
      "A covered courtyard dressed in layered saffron and turmeric drapes, with marigold strings hung at different heights to create a canopy. Low seating clusters let guests sit with the artists, and a central dhol area pulls energy into the middle of the room.",
    objectives: [
      "Keep the event fully usable in heavy rain",
      "Create intimate seating zones for henna artists",
      "Build a natural focal point for music and dance",
      "Use fresh, local florals in a refined way",
    ],
    details: [
      { label: "Palette", value: "Saffron, turmeric, marigold, ivory" },
      { label: "Florals", value: "Marigold strings, jasmine, mango leaves" },
      { label: "Format", value: "Afternoon into early evening" },
      { label: "Key moment", value: "Dhol-led dance circle at sunset" },
    ],
    gallery: [
      { src: "/images/about/henna-marigold.webp", alt: "Hands with henna and marigold garlands in warm light" },
      { src: "/images/experiences/marigold-close.webp", alt: "Close-up of vibrant orange marigolds" },
      { src: "/images/hero/marigold-garlands.webp", alt: "Marigold and jasmine strands hanging at varied heights" },
    ],
  },
  {
    slug: "the-long-table-supper",
    title: "The Long-Table Supper",
    category: "Private Celebrations",
    setting: "Private terrace, sample setting",
    scale: "Around 40 guests",
    excerpt: "A single candlelit table under the sky for an anniversary dinner that felt like a family meal.",
    cover: "/images/hero/candlelit-table.webp",
    coverAlt: "A long candlelit dinner table with flowers in a dark, warm room",
    overview:
      "A study in intimacy: one long table, forty chairs and nothing to distract from conversation. The concept was designed for a 25th anniversary where the hosts wanted every guest at the same table.",
    concept:
      "Low florals so guests can see each other, clusters of taper candles for warmth, and a menu served family-style to encourage passing and sharing. Music stays acoustic and quiet until dessert.",
    objectives: [
      "Seat every guest at one table",
      "Keep sightlines clear for conversation",
      "Build a slow, generous dining rhythm",
      "Mark a single heartfelt toast",
    ],
    details: [
      { label: "Palette", value: "Candlelight, deep green, rust" },
      { label: "Service", value: "Family-style courses" },
      { label: "Music", value: "Acoustic trio, then a short DJ set" },
      { label: "Key moment", value: "A toast from the couple's children" },
    ],
    gallery: [
      { src: "/images/services/candle-dinner.webp", alt: "A long table of candles, glassware and linen" },
      { src: "/images/about/long-table-flowers.webp", alt: "A long dinner table with colourful floral centrepieces" },
      { src: "/images/experiences/candelabra-roses.webp", alt: "Silver candelabras and red roses on a dining table" },
    ],
  },
  {
    slug: "a-leadership-summit",
    title: "A Leadership Summit",
    category: "Corporate",
    setting: "Hotel auditorium, sample setting",
    scale: "Around 400 delegates",
    excerpt: "A one-day summit designed around attention, with tight transitions and a stage that kept speakers clear.",
    cover: "/images/services/conference-hall.webp",
    coverAlt: "A speaker on a lit stage in front of a large audience",
    overview:
      "This concept explores how a full-day leadership summit can hold attention from the opening keynote to the closing panel.",
    concept:
      "Shorter sessions, a recurring visual language on stage and LED, and breaks timed to the natural dips in energy. Networking zones outside the hall are designed as part of the agenda, not afterthoughts.",
    objectives: [
      "Keep sessions on time to the minute",
      "Make every speaker legible to the back row",
      "Design breaks that encourage real conversation",
      "Deliver a clean experience for remote viewers",
    ],
    details: [
      { label: "Format", value: "Keynotes, panels, fireside chats" },
      { label: "Production", value: "LED wall, confidence monitors, live stream" },
      { label: "Operations", value: "Registration, green room, show calling" },
      { label: "Key moment", value: "Closing panel with live audience Q&A" },
    ],
    gallery: [
      { src: "/images/services/conference-stage.webp", alt: "A speaker addressing an audience in a dim conference hall" },
      { src: "/images/services/conference-audience.webp", alt: "Delegates listening during a session" },
      { src: "/images/services/corporate-dinner.webp", alt: "A formal dinner table for summit guests" },
    ],
  },
  {
    slug: "an-after-dark-product-reveal",
    title: "An After-Dark Product Reveal",
    category: "Brand Experiences",
    setting: "Industrial studio, sample setting",
    scale: "Around 250 guests and press",
    excerpt: "Light, haze and a timed reveal for a launch designed to be shared within minutes.",
    cover: "/images/services/lighting-beams.webp",
    coverAlt: "Coloured lighting beams cutting through haze over a dark floor",
    overview:
      "A concept for an evening product launch where the reveal itself is the centrepiece — and where every guest leaves with a photograph worth posting.",
    concept:
      "Guests enter through a darkened corridor into a hazy, light-sculpted space. At a set time the room falls silent, a sequenced lighting cue builds, and the product is revealed on a rotating plinth. A runway-style walk-through follows.",
    objectives: [
      "Create one unforgettable reveal moment",
      "Design clear sightlines for press and creators",
      "Keep guests moving through brand zones",
      "Produce shareable content on the night",
    ],
    details: [
      { label: "Production", value: "Moving-head lighting, haze, spatial audio" },
      { label: "Set", value: "Rotating plinth, mirrored runway" },
      { label: "Content", value: "Photo and video capture stations" },
      { label: "Key moment", value: "Sixty-second sequenced reveal" },
    ],
    gallery: [
      { src: "/images/services/launch-runway.webp", alt: "A model on a circular runway at a launch event" },
      { src: "/images/services/stage-lighting.webp", alt: "A stage washed in purple light" },
      { src: "/images/services/floral-lights.webp", alt: "Illuminated flower installations overhead" },
    ],
  },
  {
    slug: "garden-reception-under-canopies",
    title: "Garden Reception Under Canopies",
    category: "Weddings",
    setting: "Outdoor lawn, sample setting",
    scale: "Around 300 guests",
    excerpt: "Floating fabric canopies, chandeliers in the open air and a reception that flows from cocktail hour to dinner.",
    cover: "/images/services/garden-reception.webp",
    coverAlt: "An outdoor reception under draped white canopies with round tables",
    overview:
      "A winter reception concept on an open lawn, designed so the space changes character as the evening goes on.",
    concept:
      "Draped canopies define zones for cocktails, dinner and dancing without walls. Chandeliers and warm uplighting take over as the sun sets, and a floral aisle leads guests from arrival to the couple's stage.",
    objectives: [
      "Define zones on an open lawn",
      "Transition smoothly from daylight to evening",
      "Seat elders comfortably near the stage",
      "Keep the dance floor central and inviting",
    ],
    details: [
      { label: "Palette", value: "Ivory, blush, soft greenery" },
      { label: "Structure", value: "Fabric canopies and chandeliers" },
      { label: "Season", value: "Winter evening" },
      { label: "Key moment", value: "First dance under the central canopy" },
    ],
    gallery: [
      { src: "/images/services/wedding-aisle.webp", alt: "A floral aisle leading to a wedding mandap outdoors" },
      { src: "/images/experiences/green-table.webp", alt: "A dining table with white florals and green linen" },
      { src: "/images/experiences/white-arch.webp", alt: "A white circular arch framing a floral stage" },
    ],
  },
  {
    slug: "first-birthday-at-home",
    title: "A First Birthday at Home",
    category: "Birthdays",
    setting: "Apartment and society terrace, sample setting",
    scale: "Around 60 family guests",
    excerpt: "A gentle, nap-friendly first birthday split between a living room puja and a terrace party.",
    cover: "/images/birthday/first-candles.webp",
    coverAlt: "A young child in a paper crown blowing out birthday candles",
    overview:
      "This concept shows how a first birthday for an extended family can be hosted at home — without the home feeling crowded.",
    concept:
      "A short morning puja in the living room, then a move to the society terrace for lunch and the cake. Decor is soft and low, with a cushioned play corner and a quiet room kept free for naps.",
    objectives: [
      "Respect the family ritual in the morning",
      "Move guests smoothly between two spaces",
      "Schedule the cake around the baby's routine",
      "Give grandparents comfortable seating and shade",
    ],
    details: [
      { label: "Palette", value: "Cream, sage, soft gold" },
      { label: "Format", value: "Morning puja, terrace lunch" },
      { label: "Comfort", value: "Play corner, quiet room, shaded seating" },
      { label: "Key moment", value: "Smash cake before nap time" },
    ],
    gallery: [
      { src: "/images/birthday/unicorn-cake.webp", alt: "A white celebration cake with a rainbow and clouds" },
      { src: "/images/birthday/home-50th.webp", alt: "A living room dressed with balloons and flowers" },
      { src: "/images/experiences/pastel-table.webp", alt: "A pastel table with flowers and glassware" },
    ],
  },
  {
    slug: "a-ballroom-sangeet",
    title: "A Ballroom Sangeet",
    category: "Weddings",
    setting: "Hotel ballroom, sample setting",
    scale: "Around 350 guests",
    excerpt: "Gold light, a raised stage and choreographed family performances in a classic Mumbai ballroom.",
    cover: "/images/hero/ballroom-mandap.webp",
    coverAlt: "A ballroom with a gold-lit stage, chandelier and candlelit floor",
    overview:
      "A sangeet concept built around performance: families on stage, friends on the floor and a show that runs to time.",
    concept:
      "A raised stage with a warm gold backdrop, a professional show caller and rehearsed transitions between performances. The dance floor opens straight after the final act, with lighting shifting from theatre to party mode.",
    objectives: [
      "Run family performances like a well-paced show",
      "Keep sightlines clear for every table",
      "Switch the room from theatre to party in minutes",
      "Capture every performance on video",
    ],
    details: [
      { label: "Palette", value: "Antique gold, ivory, deep red" },
      { label: "Production", value: "Stage, LED, theatrical lighting" },
      { label: "Programme", value: "Eight family performances" },
      { label: "Key moment", value: "Couple's surprise performance" },
    ],
    gallery: [
      { src: "/images/venues/ornate-hall.webp", alt: "An ornate gold ballroom with chandeliers" },
      { src: "/images/services/wedding-mandap.webp", alt: "A colourful floral mandap with family gathered" },
      { src: "/images/experiences/champagne-tables.webp", alt: "A reception table set with champagne glasses and flowers" },
    ],
  },
  {
    slug: "jungle-safari-birthday",
    title: "A Jungle Safari Birthday",
    category: "Birthdays",
    setting: "Clubhouse lawn, sample setting",
    scale: "Around 35 children and parents",
    excerpt: "An explorer's afternoon with a safari entrance, animal trail and a cake worth the expedition.",
    cover: "/images/birthday/jungle-lion.webp",
    coverAlt: "A jungle-themed party set with lion cut-outs and green turf",
    overview:
      "A concept for a six-year-old's birthday that turns a clubhouse lawn into a small safari park.",
    concept:
      "Children receive explorer kits at a safari-style entrance, then follow an animal trail with clues at each station. The trail ends at the cake table, timed for the moment energy peaks.",
    objectives: [
      "Channel high energy into a guided activity",
      "Keep decor safe and secure outdoors",
      "Give parents a shaded seating area",
      "Time the cake for maximum excitement",
    ],
    details: [
      { label: "Palette", value: "Leaf green, sand, sunshine yellow" },
      { label: "Activities", value: "Explorer kits, animal trail, face painting" },
      { label: "Backup", value: "Indoor hall booked for rain" },
      { label: "Key moment", value: "Trail finale at the cake table" },
    ],
    gallery: [
      { src: "/images/birthday/jungle-cake.webp", alt: "A cake decorated with giraffe and zebra figures" },
      { src: "/images/birthday/tenth-birthday.webp", alt: "A green and yellow party table with a light-up number" },
      { src: "/images/birthday/kids-party-hats.webp", alt: "Children in party hats outdoors" },
    ],
  },
];

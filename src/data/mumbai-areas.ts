/**
 * Target service areas across the Mumbai market.
 *
 * These are areas the studio intends to serve. They are NOT claims of local
 * offices, teams, venue partnerships or past events. Confirm real operating
 * coverage before launch and update `coverageNote` in `areaDisclaimer`.
 *
 * Thane and Navi Mumbai (incl. Vashi and Nerul) are separate municipal
 * areas within the Mumbai Metropolitan Region; `boundaryNote` says so.
 */
import type { AreaZone, MumbaiArea } from "@/types/location";


export const areaZones: Record<AreaZone, string> = {
  western: "Western Suburbs",
  eastern: "Eastern Suburbs",
  island: "South & Central Mumbai",
  thane: "Thane",
  navi: "Navi Mumbai",
};

export const region = "Mumbai Metropolitan Region";

export const areaDisclaimer =
  "Listed as a target service area. Availability for a specific date and location is confirmed during your consultation; we do not operate a local office here.";

export const mumbaiAreas: MumbaiArea[] = [
  {
    slug: "andheri",
    name: "Andheri",
    zone: "western",
    city: "Mumbai",
    intro:
      "Andheri is two neighbourhoods in one: the café-lined lanes of Lokhandwala and Versova in the west, and the hotels and business districts near the airport in the east.",
    character:
      "That mix gives birthday planners in Andheri unusual range. A child's party might be in a society clubhouse off Four Bungalows, while a milestone dinner could be in a hotel banquet room a short drive from the airport — convenient for guests flying in.",
    venueNotes: [
      { title: "Hotel banquets in the east", body: "Andheri East has many hotel event spaces, which suit larger guest lists and families with out-of-town guests." },
      { title: "Cafés and private dining in the west", body: "Smaller adult birthdays often work well in private areas of restaurants around Lokhandwala and Versova." },
      { title: "Metro-friendly", body: "Metro connectivity makes Andheri a practical meeting point for guests coming from across the suburbs." },
    ],
    homeNote:
      "Many Andheri apartments have compact living rooms but generous society amenities — a clubhouse or terrace often gives more breathing room for a kids' party.",
    travelNote:
      "Traffic around the Western Express Highway and the airport can be heavy in the evening; we schedule set-up and guest arrival windows around it.",
    featuredServices: ["birthday-planner-mumbai", "kids-birthday-planner-mumbai", "birthday-decoration-mumbai", "adult-birthday-planner-mumbai"],
    themes: ["space-theme-birthday-mumbai", "jungle-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai"],
    faqs: [
      { q: "Is Andheri East or West better for a birthday venue?", a: "It depends on your guests. East suits hotel-style events and guests travelling from the airport; West suits cafés, clubhouses and relaxed gatherings." },
      { q: "Can you decorate a society clubhouse in Andheri?", a: "Yes. We check your society's timing, power and decor rules first, then plan the setup around them." },
    ],
    nearby: ["juhu", "santacruz", "goregaon"],
    image: "/images/mumbai/city-night.webp",
    imageAlt: "Mumbai's suburbs lit up at night under a cloudy sky",
  },
  {
    slug: "bandra",
    name: "Bandra",
    zone: "western",
    city: "Mumbai",
    intro:
      "Bandra is where Mumbai's old bungalows, sea-facing promenades and some of its best-loved restaurants share the same few square kilometres.",
    character:
      "Birthdays here lean towards the intimate and stylish — a dinner on a terrace off Pali Hill, a brunch in a café on Chapel Road, or a garden party at a family bungalow. The neighbourhood's character rewards restrained, thoughtful design over loud decor.",
    venueNotes: [
      { title: "Restaurants and private rooms", body: "Many Bandra restaurants offer private dining areas that suit adult birthdays of 15 to 40 guests." },
      { title: "Bungalows and terraces", body: "Older homes with gardens or terraces can host beautiful celebrations, subject to neighbour-friendly sound and timings." },
      { title: "Sea-facing settings", body: "Venues near Bandstand and Carter Road offer views, but often limited space — great for smaller guest lists." },
    ],
    homeNote:
      "Bandra apartments vary from compact to generous. Narrow lanes and limited parking mean we plan vendor drop-offs and guest arrival carefully.",
    travelNote:
      "Weekend evenings are busy; we suggest staggered guest arrival and drop-off points for venues on narrow roads.",
    featuredServices: ["luxury-birthday-planner-mumbai", "adult-birthday-planner-mumbai", "birthday-celebration-at-home-mumbai", "premium-birthday-planner-mumbai"],
    themes: ["barbie-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai", "boss-baby-decoration-mumbai"],
    faqs: [
      { q: "Can you plan a surprise dinner in Bandra?", a: "Yes. Private dining areas and terraces in Bandra suit surprise dinners well. We'll manage the secrecy and timing." },
      { q: "Is parking a problem for Bandra events?", a: "It can be. We plan valet or drop-off points where the venue allows, and advise guests in advance." },
    ],
    nearby: ["khar", "santacruz", "worli"],
    image: "/images/mumbai/sea-link-dusk.webp",
    imageAlt: "The Bandra–Worli Sea Link at golden hour seen from the rocky shore",
  },
  {
    slug: "borivali",
    name: "Borivali",
    zone: "western",
    city: "Mumbai",
    intro:
      "At the northern end of the Western line, Borivali is green, family-centred and home to large residential complexes on the edge of Sanjay Gandhi National Park.",
    character:
      "Birthday celebrations in Borivali are often family affairs — grandparents, cousins and neighbours together. That makes good seating, generous food and a mix of activities for all ages just as important as decor.",
    venueNotes: [
      { title: "Society clubhouses and lawns", body: "Large complexes often have clubhouses or lawns, which are practical and familiar for guests." },
      { title: "Banquet halls for bigger guest lists", body: "Banquet halls in the area suit first birthdays and milestone parties with extended family." },
      { title: "Green surroundings", body: "Greener pockets make jungle and garden themes feel natural — with a monsoon backup plan." },
    ],
    homeNote:
      "Larger Borivali homes and society terraces can host comfortable at-home parties; we check lift access and society rules first.",
    travelNote:
      "For guests coming from South Mumbai, Borivali is a longer drive; we suggest timings that avoid peak traffic.",
    featuredServices: ["first-birthday-planner-mumbai", "kids-birthday-party-mumbai", "birthday-decoration-mumbai", "premium-baby-shower-mumbai"],
    themes: ["jungle-theme-birthday-mumbai", "cocomelon-theme-birthday-mumbai", "space-theme-birthday-mumbai"],
    faqs: [
      { q: "Are garden parties possible in Borivali?", a: "Yes, particularly in societies with lawns. Between June and September we always plan a covered or indoor backup." },
      { q: "Can you plan a large first birthday in Borivali?", a: "Yes — we plan seating, food and timings for extended families, and coordinate any ritual or puja." },
    ],
    nearby: ["kandivali", "malad", "goregaon"],
    image: "/images/mumbai/skyline-day.webp",
    imageAlt: "Residential high-rises across Mumbai's suburbs on a clear day",
  },
  {
    slug: "powai",
    name: "Powai",
    zone: "eastern",
    city: "Mumbai",
    intro:
      "Built around its lake, Powai combines planned townships, high-rise living and a large working population from the offices and campuses nearby.",
    character:
      "Many Powai families live in towers with well-equipped clubhouses, so birthday planning here often centres on making a familiar space feel special. Lakeside views and hotel venues give adult celebrations a polished alternative.",
    venueNotes: [
      { title: "Township clubhouses", body: "High-rise societies often offer clubhouses and party rooms that are ideal for kids' birthdays." },
      { title: "Hotel event spaces", body: "Hotels in the area suit milestone birthdays and corporate-style celebrations." },
      { title: "Lake-view settings", body: "Terraces and rooftop spaces with lake views work beautifully for sunset dinners." },
    ],
    homeNote:
      "Tower apartments mean lift bookings, security passes and fixed set-up windows — we coordinate them with building management.",
    travelNote:
      "Powai sits between the Western and Eastern suburbs, making it a reasonable meeting point for guests from both sides.",
    featuredServices: ["kids-birthday-planner-mumbai", "birthday-decoration-mumbai", "teen-birthday-celebration-mumbai", "luxury-birthday-planner-mumbai"],
    themes: ["space-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai", "boss-baby-decoration-mumbai"],
    faqs: [
      { q: "Can you work within Powai society rules?", a: "Yes. We coordinate lift bookings, vendor passes and timing restrictions with your building's management." },
      { q: "Is Powai suitable for a corporate-style birthday?", a: "Yes. Hotel venues in the area are well suited to more formal celebrations." },
    ],
    nearby: ["ghatkopar", "andheri", "chembur"],
    image: "/images/mumbai/skyline-night.webp",
    imageAlt: "Mumbai's high-rise skyline glowing at night",
  },
  {
    slug: "juhu",
    name: "Juhu",
    zone: "western",
    city: "Mumbai",
    intro:
      "Juhu is synonymous with its long beach, sea-facing hotels and leafy lanes of bungalows — one of the city's most celebratory addresses.",
    character:
      "Birthdays in Juhu often make the most of the sea and sunset: poolside afternoons, terrace dinners and bungalow garden parties. The setting does a lot of work, so we design decor that frames the view rather than competing with it.",
    venueNotes: [
      { title: "Sea-facing hotels", body: "Hotel lawns, poolsides and banquet rooms suit larger, more formal celebrations." },
      { title: "Bungalow gardens", body: "Private gardens host relaxed, elegant parties — with attention to sound limits for neighbours." },
      { title: "Sunset timing", body: "We time key moments to golden hour when a venue has a western view." },
    ],
    homeNote:
      "Bungalow homes give space for garden parties; apartments may suit an intimate dinner with a terrace.",
    travelNote:
      "Juhu Tara Road can be slow at peak hours; we plan vendor deliveries for quieter windows.",
    featuredServices: ["luxury-birthday-planner-mumbai", "adult-birthday-planner-mumbai", "premium-birthday-planner-mumbai", "birthday-party-resorts-mumbai"],
    themes: ["barbie-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai", "jungle-theme-birthday-mumbai"],
    faqs: [
      { q: "Can you plan a beachside birthday in Juhu?", a: "Public beaches have rules and practical limits. We usually recommend hotel lawns or private sea-facing venues instead, and will advise on what's permitted." },
      { q: "What's the best time for a sea-facing party?", a: "Late afternoon into sunset works beautifully outside the monsoon months." },
    ],
    nearby: ["santacruz", "andheri", "bandra"],
    image: "/images/mumbai/sunset-shore.webp",
    imageAlt: "Sunset over the Arabian Sea with the Mumbai skyline in silhouette",
  },
  {
    slug: "goregaon",
    name: "Goregaon",
    zone: "western",
    city: "Mumbai",
    intro:
      "Goregaon has grown quickly, with new residential towers, malls and business parks alongside the greenery of Aarey and the film studios further east.",
    character:
      "A young, growing population makes Goregaon a hub for kids' birthdays and first birthdays. Newer residential complexes tend to have modern amenities, while the green belt suits garden-themed celebrations.",
    venueNotes: [
      { title: "Modern clubhouses", body: "New towers usually have party halls with good AC and power — practical for decor-heavy themes." },
      { title: "Restaurants and banquets", body: "A range of restaurants and banquet spaces suit mid-sized family celebrations." },
      { title: "Green settings", body: "Outdoor settings near the green belt suit jungle and garden themes outside the monsoon." },
    ],
    homeNote:
      "Newer apartments often allow easy lift access for vendors, which simplifies at-home celebrations.",
    travelNote:
      "Goregaon is well connected by the Western Express Highway and Metro; we plan arrival times to avoid evening congestion.",
    featuredServices: ["first-birthday-planner-mumbai", "kids-birthday-planner-mumbai", "birthday-decoration-mumbai", "indoor-birthday-venues-mumbai"],
    themes: ["jungle-theme-birthday-mumbai", "cocomelon-theme-birthday-mumbai", "space-theme-birthday-mumbai"],
    faqs: [
      { q: "Can you decorate a Goregaon party hall in one afternoon?", a: "Most birthday setups take two to four hours, so an afternoon slot usually works. We confirm timing with the society." },
      { q: "Do you plan first birthdays in Goregaon?", a: "Yes — first birthdays are among the most common celebrations we plan across the western suburbs." },
    ],
    nearby: ["malad", "andheri", "borivali"],
    image: "/images/venues/rooftop-party.webp",
    imageAlt: "Guests mingling on a rooftop under a canopy at night",
  },
  {
    slug: "malad",
    name: "Malad",
    zone: "western",
    city: "Mumbai",
    intro:
      "Malad stretches from busy commercial streets and malls in the east to the quieter coastline around Marve and Madh in the west.",
    character:
      "That coastline is part of what makes Malad interesting for celebrations: villas and bungalows near Madh and Marve are popular for day-long or overnight birthdays, while the city side offers banquets and restaurants for conventional parties.",
    venueNotes: [
      { title: "Villas near the coast", body: "Private villa rentals towards Madh and Marve suit pool parties and overnight celebrations — rules vary by property." },
      { title: "Banquets and restaurants", body: "Malad's commercial areas offer banquets and restaurants for family-sized events." },
      { title: "Ferry and road access", body: "Some coastal properties are reached by road loops or ferries; we plan transport accordingly." },
    ],
    homeNote:
      "For at-home parties, Malad's larger societies often have clubhouses that make set-up easier.",
    travelNote:
      "Getting to coastal villas can take longer than maps suggest on weekends; we build in buffer time for guests and vendors.",
    featuredServices: ["birthday-party-resorts-mumbai", "adult-birthday-planner-mumbai", "teen-birthday-celebration-mumbai", "kids-birthday-party-mumbai"],
    themes: ["jungle-theme-birthday-mumbai", "barbie-theme-birthday-mumbai", "space-theme-birthday-mumbai"],
    faqs: [
      { q: "Can you plan a villa birthday near Madh or Marve?", a: "Yes. We check the property's rules on music, decor and outside vendors, and plan guest transport." },
      { q: "Is an overnight birthday possible?", a: "Yes, at properties that allow it. We coordinate rooms, meals and the party schedule." },
    ],
    nearby: ["goregaon", "kandivali", "borivali"],
    image: "/images/venues/resort-palms.webp",
    imageAlt: "A large swimming pool surrounded by palm trees",
  },
  {
    slug: "kandivali",
    name: "Kandivali",
    zone: "western",
    city: "Mumbai",
    intro:
      "Kandivali is a residential heartland of the western suburbs, with large townships and established family neighbourhoods on both sides of the railway line.",
    character:
      "Birthdays here are community events. Townships with their own clubhouses and lawns make it easy to invite neighbours, and that familiarity suits kids' parties and first birthdays particularly well.",
    venueNotes: [
      { title: "Township amenities", body: "Clubhouses, lawns and party halls within townships are convenient and familiar for guests." },
      { title: "Banquets for family milestones", body: "Banquet halls in the area suit larger first birthdays and milestone parties." },
      { title: "Daytime parties", body: "Kids' parties often work best as late-morning or afternoon events here, ahead of evening traffic." },
    ],
    homeNote:
      "Society terraces can be a great alternative to a living room for a larger at-home party, subject to permissions.",
    travelNote:
      "Most guests are local, which makes afternoon parties practical for families with young children.",
    featuredServices: ["kids-birthday-party-mumbai", "first-birthday-planner-mumbai", "birthday-decoration-mumbai", "birthday-venues-under-50k-mumbai"],
    themes: ["cocomelon-theme-birthday-mumbai", "jungle-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai"],
    faqs: [
      { q: "Can you work with township management in Kandivali?", a: "Yes — we coordinate permissions, set-up windows and vendor entry with the township or society." },
      { q: "Do you offer budget-conscious planning?", a: "Yes. Our budget-first approach works well with clubhouse venues and simpler decor." },
    ],
    nearby: ["borivali", "malad", "goregaon"],
    image: "/images/birthday/decorated-hall.webp",
    imageAlt: "A clubhouse-style hall decorated for a birthday with long tables and balloons",
  },
  {
    slug: "thane",
    name: "Thane",
    zone: "thane",
    city: "Thane",
    boundaryNote:
      "Thane is a separate city with its own municipal corporation, located in Thane district within the Mumbai Metropolitan Region.",
    intro:
      "Known as the city of lakes, Thane combines an older core around Masunda and Upvan lakes with fast-growing townships along Ghodbunder Road.",
    character:
      "Thane families often have more space — both at home and in the venues available — which makes larger, multi-generational birthdays and ceremonies very achievable. Lakeside settings add a scenic option for daytime events.",
    venueNotes: [
      { title: "Larger banquet halls", body: "Thane offers many banquet venues suited to big family gatherings and first birthdays." },
      { title: "Township clubhouses", body: "Newer townships along Ghodbunder Road have clubhouses and lawns for kids' parties." },
      { title: "Lakeside settings", body: "Venues near the lakes suit relaxed daytime celebrations outside monsoon months." },
    ],
    homeNote:
      "Larger apartments and villas in some Thane townships give room for comfortable at-home celebrations.",
    travelNote:
      "For guests coming from Mumbai, the Eastern Express Highway can be congested at peak times; we plan timings accordingly.",
    featuredServices: ["first-birthday-planner-mumbai", "premium-housewarming-mumbai", "premium-baby-shower-mumbai", "kids-birthday-planner-mumbai"],
    themes: ["jungle-theme-birthday-mumbai", "boss-baby-decoration-mumbai", "cocomelon-theme-birthday-mumbai"],
    faqs: [
      { q: "Is Thane part of Mumbai?", a: "Thane is a separate city with its own municipal corporation, within the wider Mumbai Metropolitan Region. We list it as a target service area for that reason." },
      { q: "Can you plan a housewarming in a new Thane township?", a: "Yes — we coordinate with building management, plan the puja set-up and arrange catering for guests." },
    ],
    nearby: ["mulund", "ghatkopar", "powai"],
    image: "/images/venues/banquet-rounds.webp",
    imageAlt: "A banquet hall with round tables set for a celebration",
  },
  {
    slug: "navi-mumbai",
    name: "Navi Mumbai",
    zone: "navi",
    city: "Navi Mumbai",
    boundaryNote:
      "Navi Mumbai is a planned city with its own municipal corporation, across the harbour from Mumbai within the Mumbai Metropolitan Region.",
    intro:
      "Planned as a twin city to Mumbai, Navi Mumbai is organised into nodes with wide roads, open spaces and newer residential sectors.",
    character:
      "The planned layout makes many things easier — parking, larger venues, wider access roads. For birthday planning that often means more choice of spacious halls and lawns, and simpler vendor logistics.",
    venueNotes: [
      { title: "Spacious venues", body: "Larger banquet halls and lawns suit big family celebrations." },
      { title: "Easier logistics", body: "Wider roads and parking can make vendor access and guest arrival smoother." },
      { title: "Node by node", body: "We plan around the node your guests live in — Vashi, Nerul, Kharghar, Belapur and others." },
    ],
    homeNote:
      "Newer housing sectors often have society halls and podium gardens suitable for kids' parties.",
    travelNote:
      "Guests from Mumbai typically cross via the harbour bridges; we suggest timings that avoid peak bridge traffic.",
    featuredServices: ["birthday-planner-mumbai", "kids-birthday-party-mumbai", "premium-housewarming-mumbai", "birthday-venues-mumbai"],
    themes: ["space-theme-birthday-mumbai", "jungle-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai"],
    faqs: [
      { q: "Do you treat Navi Mumbai as part of Mumbai?", a: "No — Navi Mumbai is a separate planned city. We list it as a target service area within the wider Mumbai region." },
      { q: "Which Navi Mumbai nodes can you plan in?", a: "We consider requests across Navi Mumbai and confirm availability for your specific location during the consultation." },
    ],
    nearby: ["vashi", "nerul", "chembur"],
    image: "/images/venues/indoor-dining.webp",
    imageAlt: "An indoor event venue with round tables and warm pendant lighting",
  },
  {
    slug: "vashi",
    name: "Vashi",
    zone: "navi",
    city: "Navi Mumbai",
    boundaryNote: "Vashi is a node of Navi Mumbai, a separate planned city within the Mumbai Metropolitan Region.",
    intro:
      "Vashi is Navi Mumbai's original commercial and residential node — the first stop across the harbour, with malls, offices and well-established neighbourhoods.",
    character:
      "As a well-connected hub, Vashi is a natural choice for celebrations bringing together guests from both Mumbai and Navi Mumbai. Banquets, restaurants and society halls cover most party sizes.",
    venueNotes: [
      { title: "Central meeting point", body: "Vashi's position near the bridges makes it convenient for guests from both sides of the harbour." },
      { title: "Banquets and restaurants", body: "A range of event spaces suits everything from intimate dinners to large family celebrations." },
      { title: "Established societies", body: "Older societies often have halls or terraces for at-home style parties." },
    ],
    homeNote: "Many Vashi homes are in established societies — we check rules on terrace use and timings.",
    travelNote: "Proximity to the bridges makes evening events accessible for Mumbai guests, with planning for peak hours.",
    featuredServices: ["adult-birthday-planner-mumbai", "kids-birthday-planner-mumbai", "premium-baby-shower-mumbai", "birthday-decoration-mumbai"],
    themes: ["boss-baby-decoration-mumbai", "barbie-theme-birthday-mumbai", "space-theme-birthday-mumbai"],
    faqs: [
      { q: "Is Vashi a good meeting point for guests from Mumbai?", a: "Often, yes — it's one of the first nodes across the harbour, which helps when guests are coming from both cities." },
      { q: "Can you plan a baby shower in Vashi?", a: "Yes. We plan comfortable, well-timed showers at homes, society halls and banquet venues." },
    ],
    nearby: ["nerul", "navi-mumbai", "chembur"],
    image: "/images/venues/ornate-hall.webp",
    imageAlt: "An ornate banquet hall with gold detailing and chandeliers",
  },
  {
    slug: "nerul",
    name: "Nerul",
    zone: "navi",
    city: "Navi Mumbai",
    boundaryNote: "Nerul is a node of Navi Mumbai, a separate planned city within the Mumbai Metropolitan Region.",
    intro:
      "Nerul is a residential node of Navi Mumbai known for its planned sectors, parks and green pockets near the harbour wetlands.",
    character:
      "Its parks and open spaces make Nerul pleasant for daytime celebrations, and its residential sectors are full of young families — so kids' birthdays and first birthdays are common requests.",
    venueNotes: [
      { title: "Society halls and podiums", body: "Residential societies often have halls and podium gardens suited to kids' parties." },
      { title: "Green, open settings", body: "Garden and jungle themes feel natural here outside the monsoon." },
      { title: "Banquet options nearby", body: "Banquets in Nerul and neighbouring nodes suit larger family gatherings." },
    ],
    homeNote: "Podium gardens can be an excellent at-home alternative, with society permission.",
    travelNote: "Nerul is well connected by road and rail within Navi Mumbai; we plan around guests' starting points.",
    featuredServices: ["first-birthday-planner-mumbai", "kids-birthday-party-mumbai", "birthday-celebration-at-home-mumbai", "birthday-venues-under-50k-mumbai"],
    themes: ["jungle-theme-birthday-mumbai", "cocomelon-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai"],
    faqs: [
      { q: "Can a party be held in a society podium garden?", a: "Often, yes, with society approval. We plan shade, seating and a rain backup." },
      { q: "Do you plan small, budget-conscious parties in Nerul?", a: "Yes — society venues and simpler decor make budget-friendly celebrations very achievable." },
    ],
    nearby: ["vashi", "navi-mumbai", "chembur"],
    image: "/images/venues/fairy-lights.webp",
    imageAlt: "Warm fairy lights strung across a draped event space",
  },
  {
    slug: "khar",
    name: "Khar",
    zone: "western",
    city: "Mumbai",
    intro:
      "Wedged between Bandra and Santacruz, Khar is compact and lively — known for its restaurants, rooftop spots and the shopping bustle near Linking Road.",
    character:
      "Khar suits stylish, smaller celebrations: an adult birthday dinner on a rooftop, a teen party in a private room, or a polished at-home evening in a West Khar apartment.",
    venueNotes: [
      { title: "Rooftops and private rooms", body: "Many restaurants offer private sections or rooftop spaces for groups." },
      { title: "Compact homes", body: "Apartments are often smaller, so at-home parties benefit from careful layout planning." },
      { title: "Neighbourhood feel", body: "Quieter residential lanes reward neighbour-friendly sound and timing." },
    ],
    homeNote: "We design compact, high-impact decor for Khar apartments so rooms still feel open.",
    travelNote: "Linking Road traffic peaks in the evening; we plan vendor timings accordingly.",
    featuredServices: ["adult-birthday-planner-mumbai", "teen-birthday-celebration-mumbai", "birthday-celebration-at-home-mumbai", "luxury-birthday-planner-mumbai"],
    themes: ["barbie-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai", "boss-baby-decoration-mumbai"],
    faqs: [
      { q: "Can you book a rooftop for a birthday in Khar?", a: "We can research rooftop and private-dining options for your date and confirm current availability and terms directly." },
      { q: "How do you decorate small apartments?", a: "We focus decor on one or two strong moments — a backdrop and a table — so rooms stay comfortable." },
    ],
    nearby: ["bandra", "santacruz", "juhu"],
    image: "/images/experiences/rooftop-lanterns.webp",
    imageAlt: "Two lanterns glowing on a rooftop terrace overlooking city lights",
  },
  {
    slug: "santacruz",
    name: "Santacruz",
    zone: "western",
    city: "Mumbai",
    intro:
      "Santacruz mixes older bungalows and quiet residential lanes with newer towers, and sits close to the domestic airport and Juhu.",
    character:
      "Its central western location makes Santacruz convenient for guests from across the suburbs. Celebrations range from intimate home gatherings to family dinners at nearby hotels.",
    venueNotes: [
      { title: "Close to the airport", body: "Handy for families with guests flying in for a milestone birthday." },
      { title: "Homes with character", body: "Older homes and bungalows can host warm, personal celebrations." },
      { title: "Hotel options nearby", body: "Nearby hotel venues suit larger, more formal parties." },
    ],
    homeNote: "We plan layouts that make the most of older homes' verandas, courtyards and terraces.",
    travelNote: "Airport-area traffic can be unpredictable; we build buffers into vendor and guest schedules.",
    featuredServices: ["birthday-celebration-at-home-mumbai", "adult-birthday-planner-mumbai", "premium-housewarming-mumbai", "birthday-planner-mumbai"],
    themes: ["unicorn-theme-birthday-mumbai", "jungle-theme-birthday-mumbai", "space-theme-birthday-mumbai"],
    faqs: [
      { q: "Is Santacruz convenient for out-of-town guests?", a: "Yes — its proximity to the airport makes it practical for guests travelling in." },
      { q: "Can you plan in an older bungalow?", a: "Yes. We assess power, access and space first, and protect the property during set-up." },
    ],
    nearby: ["khar", "juhu", "andheri"],
    image: "/images/birthday/home-50th.webp",
    imageAlt: "A home decorated for a fiftieth birthday with balloons and flowers",
  },
  {
    slug: "chembur",
    name: "Chembur",
    zone: "eastern",
    city: "Mumbai",
    intro:
      "Leafy and established, Chembur is one of the eastern suburbs' older residential neighbourhoods, with long-standing clubs and tree-lined streets.",
    character:
      "Chembur's mix of heritage families and new residents makes for a wide range of celebrations — traditional ceremonies, elegant dinners and children's parties. Its eastern location and freeway access also make South Mumbai guests easy to accommodate.",
    venueNotes: [
      { title: "Established clubs and halls", body: "Older community spaces and halls suit family ceremonies and milestone birthdays." },
      { title: "Central for the east", body: "A convenient meeting point for guests from the eastern suburbs and South Mumbai." },
      { title: "Tree-lined settings", body: "Gardens and greener spaces suit daytime celebrations outside the monsoon." },
    ],
    homeNote: "Many Chembur homes are in older buildings — we check lift sizes and access for decor deliveries.",
    travelNote: "Freeway access helps guests from South Mumbai reach Chembur quickly outside peak hours.",
    featuredServices: ["premium-housewarming-mumbai", "first-birthday-planner-mumbai", "adult-birthday-planner-mumbai", "birthday-decoration-mumbai"],
    themes: ["jungle-theme-birthday-mumbai", "boss-baby-decoration-mumbai", "cocomelon-theme-birthday-mumbai"],
    faqs: [
      { q: "Can you plan a traditional ceremony in Chembur?", a: "Yes — housewarmings, baby showers and first-birthday rituals, coordinated with your family's customs." },
      { q: "Is Chembur convenient for guests from South Mumbai?", a: "Generally, yes, thanks to freeway access — we suggest timings to avoid peak traffic." },
    ],
    nearby: ["ghatkopar", "navi-mumbai", "dadar"],
    image: "/images/experiences/green-table.webp",
    imageAlt: "A long table dressed with white florals and green linen in a garden setting",
  },
  {
    slug: "ghatkopar",
    name: "Ghatkopar",
    zone: "eastern",
    city: "Mumbai",
    intro:
      "Ghatkopar is a busy, family-centred eastern suburb with strong community ties and good connections across the city.",
    character:
      "Celebrations in Ghatkopar are often large and festive, with extended families and community friends. Generous food, comfortable seating and well-planned programmes matter as much as decor.",
    venueNotes: [
      { title: "Community and banquet halls", body: "Halls in the area suit large first birthdays, baby showers and milestone parties." },
      { title: "Vegetarian-friendly planning", body: "Many families prefer vegetarian or Jain menus — we brief caterers in detail." },
      { title: "Metro connectivity", body: "Metro links to Andheri make it easier for guests from the western suburbs." },
    ],
    homeNote: "We plan at-home celebrations around society rules and the space available for guests and food.",
    travelNote: "LBS Marg and station areas can be crowded; we plan vendor timings and drop-offs carefully.",
    featuredServices: ["first-birthday-planner-mumbai", "premium-baby-shower-mumbai", "kids-birthday-planner-mumbai", "birthday-venues-mumbai"],
    themes: ["cocomelon-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai", "jungle-theme-birthday-mumbai"],
    faqs: [
      { q: "Can you coordinate Jain or vegetarian menus?", a: "Yes. We brief caterers on dietary practices and check ingredients for every item." },
      { q: "Do you plan large family celebrations in Ghatkopar?", a: "Yes — we plan seating, food service and programmes for extended families." },
    ],
    nearby: ["powai", "chembur", "mulund"],
    image: "/images/venues/floral-hall.webp",
    imageAlt: "A reception hall dressed with a floral archway and white seating",
  },
  {
    slug: "lower-parel",
    name: "Lower Parel",
    zone: "island",
    city: "Mumbai",
    intro:
      "Lower Parel's former textile mills now house offices, hotels and some of the city's most popular restaurants and rooftop bars.",
    character:
      "It is a natural home for polished adult celebrations — a 30th in a private dining room, a 40th on a rooftop, or a milestone dinner in a hotel. Central location makes it easy for guests from across the city.",
    venueNotes: [
      { title: "Restaurants and rooftops", body: "Private dining rooms and rooftops suit adult birthdays of many sizes." },
      { title: "Hotel venues", body: "Hotel ballrooms and suites suit formal milestone celebrations." },
      { title: "Weeknight-friendly", body: "Close to offices, so weeknight celebrations after work are practical." },
    ],
    homeNote: "High-rise residences nearby often have amenity floors or terraces suitable for parties.",
    travelNote: "Central location helps, but evening office traffic is heavy; we suggest arrival times after the rush.",
    featuredServices: ["adult-birthday-planner-mumbai", "luxury-birthday-planner-mumbai", "teen-birthday-celebration-mumbai", "private-celebrations"],
    themes: ["barbie-theme-birthday-mumbai", "boss-baby-decoration-mumbai", "space-theme-birthday-mumbai"],
    faqs: [
      { q: "Can you plan a weeknight birthday dinner in Lower Parel?", a: "Yes — weeknight private dining works well here, especially for colleagues and friends coming from work." },
      { q: "Do you decorate restaurant private rooms?", a: "Yes, within each restaurant's rules. We confirm what's permitted before designing." },
    ],
    nearby: ["worli", "dadar", "bandra"],
    image: "/images/services/candle-dinner.webp",
    imageAlt: "A candlelit dinner table set with glassware and white plates",
  },
  {
    slug: "worli",
    name: "Worli",
    zone: "island",
    city: "Mumbai",
    intro:
      "Worli looks out over the Arabian Sea and the Sea Link, with a skyline of residential towers and hotels along its sea face.",
    character:
      "Sea views and high-rise living shape celebrations here: sunset dinners, sky-lounge parties and refined at-home gatherings with a view. We design to frame the outlook, keeping decor elegant and low.",
    venueNotes: [
      { title: "Sea-view hotels and lounges", body: "Hotels and lounges with sea views suit milestone and luxury birthdays." },
      { title: "High-rise residences", body: "Apartments with views make intimate dinners memorable — with building rules to plan around." },
      { title: "Central and connected", body: "The Sea Link and coastal roads connect Worli to the western suburbs." },
    ],
    homeNote: "We coordinate service lifts, security and set-up windows in high-rise buildings.",
    travelNote: "Coastal road connections make Worli reachable from the western suburbs; we plan around peak times.",
    featuredServices: ["luxury-birthday-planner-mumbai", "adult-birthday-planner-mumbai", "premium-birthday-planner-mumbai", "birthday-celebration-at-home-mumbai"],
    themes: ["barbie-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai", "boss-baby-decoration-mumbai"],
    faqs: [
      { q: "Can you plan a sunset dinner with a sea view in Worli?", a: "Yes. We'll time the evening around sunset and research suitable venues or plan at your home." },
      { q: "Do you handle high-rise building logistics?", a: "Yes — service lifts, security passes and set-up windows are coordinated with building management." },
    ],
    nearby: ["lower-parel", "dadar", "bandra"],
    image: "/images/mumbai/sea-link.webp",
    imageAlt: "The Bandra–Worli Sea Link stretching across the water towards the skyline",
  },
  {
    slug: "dadar",
    name: "Dadar",
    zone: "island",
    city: "Mumbai",
    intro:
      "Dadar is Mumbai's cultural crossroads — home to Shivaji Park, historic institutions, busy markets and the city's well-known flower market.",
    character:
      "Tradition runs deep here, so housewarmings, baby showers and first-birthday rituals are common, alongside lively family birthdays. Proximity to fresh flowers makes traditional floral decor a natural choice.",
    venueNotes: [
      { title: "Halls for family ceremonies", body: "Halls in the area suit traditional functions and larger family gatherings." },
      { title: "Fresh florals close by", body: "Fresh marigold, jasmine and seasonal flowers suit traditional decor." },
      { title: "Central for the whole city", body: "Dadar's rail connections make it easy for guests from both lines." },
    ],
    homeNote: "Older buildings may have smaller lifts and stairs — we plan decor that can be carried in easily.",
    travelNote: "Station-area congestion is significant; we plan deliveries outside peak hours.",
    featuredServices: ["premium-housewarming-mumbai", "premium-baby-shower-mumbai", "first-birthday-planner-mumbai", "birthday-planner-mumbai"],
    themes: ["jungle-theme-birthday-mumbai", "cocomelon-theme-birthday-mumbai", "unicorn-theme-birthday-mumbai"],
    faqs: [
      { q: "Can you plan traditional floral decor in Dadar?", a: "Yes — marigold, mango leaves, jasmine and diyas, styled with a clean, considered hand." },
      { q: "Is Dadar convenient for guests from different suburbs?", a: "Yes — it is well connected by both the Western and Central railway lines." },
    ],
    nearby: ["worli", "lower-parel", "chembur"],
    image: "/images/hero/marigold-garlands.webp",
    imageAlt: "Strands of fresh marigold and jasmine garlands hanging in soft light",
  },
  {
    slug: "mulund",
    name: "Mulund",
    zone: "eastern",
    city: "Mumbai",
    intro:
      "At the northern edge of the eastern suburbs, bordering Thane, Mulund is a calm, family-oriented neighbourhood with hills on its western side.",
    character:
      "Celebrations in Mulund tend to be warm, local and family-focused — kids' parties in society halls, first birthdays with extended family, and festive gatherings at home.",
    venueNotes: [
      { title: "Society halls", body: "Society halls and clubhouses are practical for kids' birthdays." },
      { title: "Banquets for big families", body: "Banquet venues suit first birthdays and milestone parties." },
      { title: "Close to Thane", body: "Its location makes it convenient for guests from both Mumbai and Thane." },
    ],
    homeNote: "Many Mulund homes are in established societies — we plan around terrace and hall rules.",
    travelNote: "For guests from Thane, Mulund is very close; for South Mumbai guests we plan travel time in.",
    featuredServices: ["kids-birthday-party-mumbai", "first-birthday-planner-mumbai", "birthday-decoration-mumbai", "premium-housewarming-mumbai"],
    themes: ["cocomelon-theme-birthday-mumbai", "space-theme-birthday-mumbai", "jungle-theme-birthday-mumbai"],
    faqs: [
      { q: "Can you plan a party for guests from Mulund and Thane?", a: "Yes — Mulund is a convenient meeting point for both, and we plan timings around guests' travel." },
      { q: "Do you plan kids' parties in society halls?", a: "Yes. We check society rules and design decor and activities for the space." },
    ],
    nearby: ["thane", "ghatkopar", "powai"],
    image: "/images/birthday/kids-party-hats.webp",
    imageAlt: "Two children wearing colourful party hats and smiling",
  },
];

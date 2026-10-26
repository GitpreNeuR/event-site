# Aangan — Celebration & Event Studio (Mumbai)

A multipage marketing website for a premium event-planning studio, built with
**Next.js 16 (App Router, Cache Components)**, **React 19**, **TypeScript** (`.tsx` components, `.ts` modules), **Tailwind CSS v4**,
**shadcn/ui (Radix)**, **GSAP + ScrollTrigger** and **Lucide** icons.

"Aangan" is a placeholder brand name (an *aangan* is the courtyard at the heart
of an Indian home). It is defined in one place and can be changed in seconds.

---

## Getting started

```bash
npm install          # install dependencies
npm run dev          # http://localhost:3000
npm run build        # production build (prerenders ~84 pages)
npm start            # serve the production build
npm run lint         # ESLint
npm run typecheck    # TypeScript (tsc --noEmit)
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before
deploying — it drives canonical URLs, Open Graph tags, `sitemap.xml` and
`robots.txt`.

## Project structure

```
src/
├── app/                      Routes (App Router)
│   ├── page.tsx              Home
│   ├── about/ services/ services/[slug]/ locations/ locations/[area]/
│   ├── experiences/ experiences/[slug]/ journal/ journal/[slug]/
│   ├── contact/ faq/ privacy-policy/ terms/
│   ├── api/inquiry/ api/newsletter/   Form endpoints (route handlers)
│   ├── sitemap.ts robots.ts icon.svg not-found.tsx error.tsx loading.tsx
│   └── globals.css           Design tokens, type scale, layout utilities
├── components/
│   ├── layout/               Navbar, ServicesMegaMenu, MegaMenuColumn,
│   │                         MobileNavigation, MobileServicesAccordion, Footer
│   ├── home/                 Homepage sections
│   ├── services/             ServiceLandingPage (template), ServiceCard, RelatedServices
│   ├── locations/            LocationLandingPage (template), LocationLinks
│   ├── experiences/ journal/ contact/ legal/
│   ├── shared/               Buttons, headings, PageAnimations, HeroAnimator,
│   │                         ImageFrame, CTASection, FaqList, Breadcrumbs, JsonLd…
│   └── ui/                   shadcn/ui primitives (accordion, sheet, input…)
├── data/                     ALL editable content (see below)
├── types/                    Shared domain types (service, location, article…)
├── hooks/                    useMediaQuery, useReducedMotion
├── lib/                      services helpers, SEO helpers, animations, forms
└── proxy.ts                  Returns real 404s for unknown detail slugs
```

## Where the content lives

All copy is in `src/data/` — UI components contain no page content.

| File | Contents |
| --- | --- |
| `site.ts` | Brand name, tagline, description, contact details, social links, legal placeholders |
| `navigation.ts` | Main nav, the five-column Services mega menu, footer links |
| `services.ts` | Core studio services, service groups, planning processes, homepage pillars |
| `birthday-services.ts` | Mumbai birthday, housewarming, baby shower, theme, age and venue pages |
| `mumbai-areas.ts` | The 20 target areas (Mumbai, Thane, Navi Mumbai) and their copy |
| `experiences.ts` | Illustrative portfolio concepts |
| `articles.ts` | Journal articles (structured blocks) |
| `faqs.ts` | FAQ categories and homepage preview |
| `testimonials.ts` | **Sample** testimonials — replace with real, permissioned quotes |

### Change the brand name
Edit `name`, `wordmarkSuffix`, `tagline` and `description` in `src/data/site.ts`.
The logo mark is in `src/components/layout/Logo.tsx` and the favicon in
`src/app/icon.svg` (also copied to `public/icon.svg` for structured data).

### Replace contact details
`site.contact` in `src/data/site.ts` holds obvious placeholders
(`hello@aangan.example`, `+91 00000 00000`). Set real values, add `phoneHref`
/ `whatsappHref`, set `isPlaceholder: false`, and update `social`.

### Replace images
Images live in `public/images/<category>/` as WebP and are referenced by path
from the data files. Drop in a new file and update the path (and the `alt`
text) in the relevant data entry. `next/image` handles resizing, AVIF/WebP and
lazy loading. Sources for the current photos are listed in
`public/images/CREDITS.md` (all Unsplash License).

### Add a service
Add an object to `coreServices` (`services.ts`) or `birthdayServices`
(`birthday-services.ts`) with a unique `slug`, `group`, `headline`, `summary`,
`intro`, `image`, `includes`, `highlights`, `processKey`, `faqs`, `related`,
`seo` and `cta`. The page, metadata, structured data and sitemap entry are
generated automatically. To show it in the mega menu, add it to `megaMenu` in
`navigation.ts`.

### Add a Mumbai area
Add an entry to `mumbaiAreas` in `mumbai-areas.ts` (write area-specific
`intro`, `character`, `venueNotes` and `faqs` — avoid copy that only swaps the
name). It appears automatically in the mega menu "By Area" column, the
Locations page, the sitemap and service pages that list it in `featuredServices`.

### Add a portfolio project
Add an object to `experiences` in `experiences.ts` (slug, title, category,
cover, overview, concept, objectives, details, gallery). Current entries are
labelled **Illustrative concept**; keep that label unless the project is a real,
permissioned case study.

### Add a journal article
Add an object to `articles` in `articles.ts`. `body` is an array of blocks:
`{ type: "p" | "h2" | "h3" | "quote", text }` or `{ type: "ul", items: [] }`.

## Connecting the contact form

The inquiry form (`src/components/contact/InquiryForm.tsx`) validates on the
client and again in `src/app/api/inquiry/route.ts`, using the shared schema in
`src/lib/inquiry.ts`. Delivery happens in **`src/lib/delivery.ts`**:

- Set `INQUIRY_WEBHOOK_URL` (and `NEWSLETTER_WEBHOOK_URL`) to an endpoint you
  control — a Zapier/Make webhook, a CRM, or a serverless function that sends
  email through Resend, SendGrid, Postmark, etc. Submissions are POSTed as JSON.
  Optionally set `FORM_WEBHOOK_SECRET` to send a bearer token.
- To send email directly instead, replace the `fetch` in `deliver()` with your
  provider's SDK call.
- **Without a webhook**: in development the submission is logged to the
  server console and the UI clearly says "development mode — not delivered";
  in production the API returns 503 and the visitor is asked to email instead.
  A success message is never shown unless delivery actually succeeded.

The form includes a honeypot field. Consider adding rate limiting or a captcha
service before launch.

## Design system

- **Palette** (tokens in `globals.css`): warm ivory `#f5efe6`, sand, paper,
  espresso ink `#1c1814`, a single marigold-ochre accent `#b0662a`
  (`#8a4a1a` for small text), and a deep night tone for immersive sections.
- **Type**: Instrument Serif (display, with italic accents written as
  `*word*` in data) + Manrope (UI and body), loaded via `next/font`.
  Utilities: `type-display`, `type-h1…h4`, `type-eyebrow`, `type-lead`, `type-body`.
- **Layout**: `container-page`, `section-y`, asymmetric 12-column grids,
  arch-topped image frames as a recurring motif.

## Animation system

- `PageAnimations` (one per page) scopes all scroll animation with
  `useGSAP` + `gsap.matchMedia`. Server components opt in with attributes:
  `data-split` (masked word reveals), `data-reveal` (batched fade-up),
  `data-reveal-image` (clip-path wipe), `data-line`, `data-parallax="n"`
  (desktop only).
- `HeroAnimator` runs the hero entrance timeline (`data-hero`, `data-hero-title`,
  `data-hero-media`). The LCP image is scaled, never hidden.
- Everything is reverted on unmount (StrictMode-safe). `prefers-reduced-motion`
  disables motion entirely. Content is only pre-hidden when an inline script has
  flagged the document, and a 4s fallback reveals everything if JS never runs.

## SEO

Metadata API with a title template, per-page canonical/Open Graph/Twitter tags
(`src/lib/seo.ts`), dynamic metadata for every service, area, experience and
article, `sitemap.xml`, `robots.txt`, and JSON-LD (Organization, Service,
BreadcrumbList, Article). FAQPage schema is intentionally not emitted, since
Google limits FAQ rich results to authoritative government/health sites.
`LocalBusiness` schema should only be added once a real address is confirmed.

## Before launch — content to verify

- Real company name, address, phone, email and social links (`site.ts`)
- Legal pages (`/privacy-policy`, `/terms`) are **draft placeholders** and must be reviewed by a professional
- FAQ answers marked `[Placeholder]` (deposits, cancellations, fees)
- Testimonials (sample), experiences (illustrative), journal (sample editorial)
- Actual service coverage for each listed area (currently "target service areas")
- Venue-commission policy placeholder in `birthday-venues-mumbai`

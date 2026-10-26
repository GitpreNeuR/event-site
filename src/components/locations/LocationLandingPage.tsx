import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import PageAnimations from "@/components/shared/PageAnimations";
import { DarkHero } from "@/components/shared/DarkHero";
import { ButtonLink } from "@/components/shared/Button";
import { ImageFrame } from "@/components/shared/ImageFrame";
import { Eyebrow, SectionHeading } from "@/components/shared/SectionHeading";
import { FaqList } from "@/components/shared/FaqList";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { ServiceCard } from "@/components/services/ServiceCard";
import { LocationLinks } from "./LocationLinks";
import { areaDisclaimer, areaZones, mumbaiAreas } from "@/data/mumbai-areas";
import { getServiceBySlug, getServicesBySlugs } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/data/site";
import { pad } from "@/lib/utils";

export function areaPlaceName(area) {
  return area.city === area.name ? area.name : `${area.name}, ${area.city}`;
}

function genericFaqs(area) {
  return [
    {
      q: `How do I book a birthday planner for ${area.name}?`,
      a: `Send an inquiry with your date, guest count and the venue or neighbourhood in ${area.name}. We'll confirm availability and arrange a consultation.`,
    },
    {
      q: `Can you plan a birthday at home in ${area.name}?`,
      a: "Yes, where space and building rules allow. We'll ask about room sizes, lift access and society timings first, then design around them.",
    },
  ];
}

/** Template for /locations/[area]. */
export function LocationLandingPage({ area }) {
  const path = `/locations/${area.slug}`;
  const place = areaPlaceName(area);
  const services = getServicesBySlugs(area.featuredServices);
  const themes = getServicesBySlugs(area.themes);
  const nearby = mumbaiAreas.filter((a) => area.nearby.includes(a.slug));
  const atHome = getServiceBySlug("birthday-celebration-at-home-mumbai");
  const faqs = [...area.faqs, ...genericFaqs(area)];

  return (
    <>
      <DarkHero
        eyebrow={`${areaZones[area.zone]} · Target service area`}
        title={`Birthday Planners in ${place}`}
        description={area.intro}
        image={area.image}
        imageAlt={area.imageAlt}
        breadcrumbs={[
          { label: "Locations", href: "/locations" },
          { label: area.name, href: path },
        ]}
        actions={
          <ButtonLink href={`/contact?area=${area.slug}`} variant="light">
            Plan in {area.name}
          </ButtonLink>
        }
      />

      <PageAnimations>
        <section className="section-y">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>Celebrating in {area.name}</Eyebrow>
              <p className="type-h3 mt-8 max-w-[24ch] text-pretty" data-reveal>
                {area.character}
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:col-start-8 lg:pt-14">
              <div data-reveal>
                <h2 className="type-eyebrow text-ink">At home</h2>
                <p className="type-small mt-3 text-ink-soft">{area.homeNote}</p>
              </div>
              <div data-reveal>
                <h2 className="type-eyebrow text-ink">Getting there</h2>
                <p className="type-small mt-3 text-ink-soft">{area.travelNote}</p>
              </div>
              <aside className="flex gap-3 rounded-md border border-line bg-paper p-5 sm:col-span-2" data-reveal>
                <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-ochre-deep" />
                <p className="type-small text-ink-soft">
                  {area.boundaryNote ? <>{area.boundaryNote} </> : null}
                  {areaDisclaimer}
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-y bg-sand">
          <div className="container-page">
            <SectionHeading
              eyebrow="Services"
              title={`Birthday services for ${area.name}`}
              description="The services families in this part of the city ask about most. Every plan is shaped around your guests and venue."
              align="split"
            />
            <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw" />
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Venues" title={`Venue considerations in *${area.name}*`} />
              <ImageFrame
                src={services[0]?.gallery?.[0]?.src ?? "/images/venues/indoor-dining.webp"}
                alt={services[0]?.gallery?.[0]?.alt ?? "An indoor event venue"}
                ratio="aspect-[4/3]"
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="mt-12 rounded-sm"
              />
            </div>
            <ol className="lg:col-span-6 lg:col-start-7 lg:pt-4">
              {area.venueNotes.map((note, i) => (
                <li key={note.title} className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8" data-reveal>
                  <span className="font-display text-3xl text-ochre/80 italic">{pad(i + 1)}</span>
                  <div>
                    <h3 className="type-h4 text-lg">{note.title}</h3>
                    <p className="type-body mt-2 text-ink-soft">{note.body}</p>
                  </div>
                </li>
              ))}
              <li className="border-t border-line pt-8" data-reveal>
                <p className="type-small text-ink-soft">
                  We don’t publish venue names or prices for {area.name}. Options are researched for each brief and confirmed directly with venues.{" "}
                  <Link href="/services/birthday-venues-mumbai" className="link-underline text-ink">
                    About our venue search
                  </Link>
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="on-dark grain section-y bg-night text-on-night">
          <div className="container-page">
            <SectionHeading eyebrow="Themes & decoration" title="Popular *themes* to start from" align="split" description="Each theme can be scaled for a living room, a clubhouse or a banquet hall." />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {themes.map((theme) => (
                <Link key={theme.slug} href={`/services/${theme.slug}`} className="group relative block aspect-[4/5] overflow-hidden rounded-sm" data-reveal>
                  <ImageFrame src={theme.image} alt={theme.imageAlt} ratio="absolute inset-0" reveal={false} sizes="(min-width: 768px) 30vw, 100vw" imageClassName="transition-transform duration-[1200ms] ease-expo group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <h3 className="type-h3 text-on-night">{theme.title.replace(/ in Mumbai$/, "")}</h3>
                    <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-on-night transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
            {atHome ? (
              <div className="mt-16 grid gap-8 border-t border-night-line pt-10 md:grid-cols-12 md:items-center" data-reveal>
                <div className="md:col-span-7">
                  <h3 className="type-h3">Celebrating at home in {area.name}?</h3>
                  <p className="type-body mt-3 max-w-xl text-on-night-soft">{area.homeNote}</p>
                </div>
                <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
                  <ButtonLink href={`/services/${atHome.slug}`} variant="outline-light">
                    At-home celebrations
                  </ButtonLink>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="section-y">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="FAQ" title={`Planning a birthday in ${area.name}`} titleClassName="type-h3" />
              <div className="mt-12" data-reveal>
                <h3 className="type-eyebrow text-ink">Nearby areas</h3>
                <LocationLinks areas={nearby} className="mt-4" />
                <Link href="/locations" className="link-underline mt-6 inline-block text-[0.9rem] text-ink">
                  All target areas
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <FaqList items={faqs} idPrefix={area.slug} />
            </div>
          </div>
        </section>

        <CTASection eyebrow={`Celebrating in ${area.name}`} title={`Plan a birthday in *${area.name}*`} body="Share your date, guest count and the venue or neighbourhood you have in mind. We'll confirm availability and next steps." href={`/contact?area=${area.slug}`} label="Send an inquiry" />
      </PageAnimations>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Birthday planning in ${place}`,
          serviceType: "Birthday party planning",
          url: absoluteUrl(path),
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: { "@type": "Place", name: place },
        }}
      />
    </>
  );
}

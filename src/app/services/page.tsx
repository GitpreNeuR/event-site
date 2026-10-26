import Image from "next/image";
import Link from "next/link";
import PageAnimations from "@/components/shared/PageAnimations";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { ServiceRows } from "@/components/services/ServiceGrid";
import { ServiceCard, ServiceLinkRow } from "@/components/services/ServiceCard";
import { PlanningProcess } from "@/components/home/PlanningProcess";
import { LocationLinks } from "@/components/locations/LocationLinks";
import { processes } from "@/data/services";
import { mumbaiAreas } from "@/data/mumbai-areas";
import { coreServices, getServicesByGroup } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Event Planning Services in Mumbai",
  description:
    "Birthday planning, housewarmings, baby showers, weddings, corporate events, conferences, launches and event production — every service offered by our Mumbai studio.",
  path: "/services",
  image: "/images/about/long-table-flowers.webp",
});

const jumpLinks = [
  { href: "#studio", label: "Studio services" },
  { href: "#birthday-planning", label: "Birthdays & ceremonies" },
  { href: "#themes", label: "Themes" },
  { href: "#ages", label: "By age" },
  { href: "#venues", label: "Venues" },
];

export default function ServicesPage() {
  const celebrations = [...getServicesByGroup("birthday"), ...getServicesByGroup("ceremony")];
  const themes = getServicesByGroup("theme");
  const ages = getServicesByGroup("age");
  const venues = getServicesByGroup("venue");

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Planning and production for every *kind* of gathering"
        description="From a first birthday in a Powai clubhouse to a leadership summit for four hundred, each service is designed, planned and delivered by one studio team."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
        image="/images/about/long-table-flowers.webp"
        imageAlt="A long dining table set with colourful floral centrepieces and glassware"
      />

      <PageAnimations>
        <nav aria-label="Service categories" className="sticky top-(--nav-height) z-30 border-b border-line bg-ivory/92 backdrop-blur-md">
          <ul className="container-page flex gap-6 overflow-x-auto py-4 text-[0.8rem] font-semibold whitespace-nowrap uppercase tracking-[0.14em] [scrollbar-width:none]">
            {jumpLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline text-ink-soft hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="studio" className="section-y scroll-mt-32">
          <div className="container-page">
            <SectionHeading
              eyebrow="Studio services"
              index="01"
              title="Weddings, corporate, brand and *private* events"
              description="Full planning or a single discipline — engage us for the whole event or for the part you need."
              align="split"
            />
            <div className="mt-20 md:mt-28">
              <ServiceRows services={coreServices} />
            </div>
          </div>
        </section>

        <section id="birthday-planning" className="section-y scroll-mt-32 bg-sand">
          <div className="container-page">
            <SectionHeading
              eyebrow="Birthdays & family ceremonies · Mumbai"
              index="02"
              title="Celebrations at home, in clubhouses and at *venues* across Mumbai"
              description="Planning, decoration and end-to-end management for birthdays, housewarmings and baby showers."
              align="split"
            />
            <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {celebrations.slice(0, 3).map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
            <div className="mt-14 grid gap-x-10 border-t border-line md:grid-cols-2 lg:grid-cols-3" data-reveal>
              {celebrations.slice(3).map((service) => (
                <ServiceLinkRow key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="themes" className="section-y scroll-mt-32">
          <div className="container-page">
            <SectionHeading eyebrow="Theme-based" index="03" title="Themes, styled with *restraint*" align="split" description="Popular birthday themes, designed with a considered palette so they feel special rather than cluttered." />
            <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
              {themes.map((theme) => (
                <li key={theme.slug} data-reveal>
                  <Link href={`/services/${theme.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] bg-muted">
                      <Image src={theme.image} alt={theme.imageAlt} fill sizes="(min-width: 1024px) 16vw, (min-width: 768px) 30vw, 46vw" className="object-cover transition-transform duration-[1200ms] ease-expo group-hover:scale-105" />
                    </div>
                    <h3 className="mt-4 text-[0.98rem] font-semibold leading-snug group-hover:text-ochre-deep">{theme.menuLabel.replace(/ Mumbai$/, "")}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="ages" className="section-y scroll-mt-32 bg-sand">
          <div className="container-page">
            <SectionHeading eyebrow="Age-based" index="04" title="Planned for the *age* being celebrated" align="split" description="Schedules, activities, food and venues change a lot between a first birthday and a sixtieth." />
            <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {ages.map((service) => (
                <ServiceCard key={service.slug} service={service} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 100vw" />
              ))}
            </div>
          </div>
        </section>

        <section id="venues" className="section-y scroll-mt-32">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Venue & location" index="05" title="Finding the right *space*" description="Venue research and shortlisting for your brief. Prices and availability are always confirmed directly with venues." />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-line" data-reveal>
                {venues.map((service) => (
                  <ServiceLinkRow key={service.slug} service={service} />
                ))}
              </div>
              <h3 className="type-eyebrow mt-12 text-ink" data-reveal>
                By area
              </h3>
              <div data-reveal>
                <LocationLinks areas={mumbaiAreas} className="mt-5" />
              </div>
            </div>
          </div>
        </section>

        <PlanningProcess steps={processes.studio} eyebrow="Our process" title="The same calm *sequence*, at any scale" />
        <CTASection />
      </PageAnimations>
    </>
  );
}

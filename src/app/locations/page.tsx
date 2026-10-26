import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageAnimations from "@/components/shared/PageAnimations";
import { DarkHero } from "@/components/shared/DarkHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { ServiceLinkRow } from "@/components/services/ServiceCard";
import { areaDisclaimer, areaZones, mumbaiAreas } from "@/data/mumbai-areas";
import { getServicesByGroup } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Birthday Venues & Planning Across Mumbai — By Area",
  description:
    "Browse birthday planning by Mumbai neighbourhood — Bandra, Andheri, Powai, Juhu, Worli and more, plus Thane and Navi Mumbai — with venue considerations for each area.",
  path: "/locations",
  image: "/images/mumbai/sea-link.webp",
});

export default function LocationsPage() {
  const zones = Object.entries(areaZones).map(([key, label]) => ({
    key,
    label,
    areas: mumbaiAreas.filter((area) => area.zone === key),
  }));
  const venueServices = getServicesByGroup("venue");

  return (
    <>
      <DarkHero
        eyebrow="Mumbai · Thane · Navi Mumbai"
        title="Birthday venues & planning across *Mumbai*"
        description="Every part of the city celebrates a little differently. Choose an area for local venue types, home-celebration logistics and travel considerations."
        image="/images/mumbai/sea-link.webp"
        imageAlt="The Bandra–Worli Sea Link stretching across the bay towards Mumbai's skyline"
        breadcrumbs={[{ label: "Locations", href: "/locations" }]}
      />
      <PageAnimations>
        <section className="section-y">
          <div className="container-page">
            <SectionHeading eyebrow="By area" title="Target service *areas*" description={areaDisclaimer} align="split" />
            <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {zones.map((zone) => (
                <div key={zone.key} data-reveal>
                  <h2 className="type-eyebrow border-b border-ink pb-4 text-ink">{zone.label}</h2>
                  <ul>
                    {zone.areas.map((area) => (
                      <li key={area.slug}>
                        <Link href={`/locations/${area.slug}`} className="group flex items-baseline justify-between gap-4 border-b border-line py-4">
                          <span className="font-display text-[1.7rem] leading-none transition-colors group-hover:text-ochre-deep">{area.name}</span>
                          <span className="flex items-center gap-2 text-[0.78rem] text-ink-soft">
                            {area.city !== "Mumbai" ? area.city : null}
                            <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="type-small mt-14 max-w-3xl text-ink-soft" data-reveal>
              Thane and Navi Mumbai (including Vashi and Nerul) are separate cities with their own municipal corporations within the Mumbai Metropolitan Region. They are grouped here because many families celebrate across these boundaries.
            </p>
          </div>
        </section>

        <section className="section-y bg-sand">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Venue planning" title="Help choosing the *right* space" description="Our venue services research options against your brief. We never publish venue lists or prices — those are confirmed directly, for your date." />
            </div>
            <div className="border-t border-line lg:col-span-6 lg:col-start-7" data-reveal>
              {venueServices.map((service) => (
                <ServiceLinkRow key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Tell us *where* you're celebrating" body="Share the area, date and guest count, and we'll confirm availability and suggest next steps." />
      </PageAnimations>
    </>
  );
}

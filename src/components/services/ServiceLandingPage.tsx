import { Info } from "lucide-react";
import PageAnimations from "@/components/shared/PageAnimations";
import { DarkHero } from "@/components/shared/DarkHero";
import { ButtonLink } from "@/components/shared/Button";
import { ImageFrame } from "@/components/shared/ImageFrame";
import { Eyebrow, SectionHeading } from "@/components/shared/SectionHeading";
import { SplitHeading } from "@/components/shared/SplitHeading";
import { FaqList } from "@/components/shared/FaqList";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { PlanningProcess } from "@/components/home/PlanningProcess";
import { LocationLinks } from "@/components/locations/LocationLinks";
import { RelatedServices } from "./RelatedServices";
import { mumbaiAreas } from "@/data/mumbai-areas";
import { getGroupLabel, getProcess, getServicesBySlugs } from "@/lib/services";
import { serviceSchema } from "@/lib/seo";
import { pad } from "@/lib/utils";

const BIRTHDAY_GROUPS = ["birthday", "ceremony", "theme", "age", "venue"];

/** Template for every /services/[slug] page, driven entirely by data. */
export function ServiceLandingPage({ service }) {
  const path = `/services/${service.slug}`;
  const process = getProcess(service);
  const related = getServicesBySlugs(service.related);
  const isMumbaiCelebration = BIRTHDAY_GROUPS.includes(service.group);
  const areasForService = mumbaiAreas.filter((area) => area.featuredServices.includes(service.slug));
  const areaList = areasForService.length >= 4 ? areasForService : mumbaiAreas;

  return (
    <>
      <DarkHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.summary}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title, href: path },
        ]}
        actions={
          <>
            <ButtonLink href={`/contact?service=${service.slug}`} variant="light">
              Enquire now
            </ButtonLink>
            <ButtonLink href="#included" variant="outline-light" arrow={false}>
              What’s included
            </ButtonLink>
          </>
        }
      />

      <PageAnimations>
        {/* Overview */}
        <section className="section-y">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Eyebrow>{getGroupLabel(service.group)}</Eyebrow>
              <SplitHeading text={service.headline} className="type-h2 mt-8 max-w-[17ch]" />
            </div>
            <div className="space-y-6 lg:col-span-5 lg:col-start-8 lg:pt-16" data-reveal>
              {service.intro.map((paragraph, i) => (
                <p key={i} className={i === 0 ? "type-lead text-ink" : "type-body text-ink-soft"}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          {service.gallery?.length ? (
            <div className="container-page mt-16 grid gap-6 md:mt-24 md:grid-cols-12">
              <ImageFrame
                src={service.gallery[0].src}
                alt={service.gallery[0].alt}
                ratio="aspect-[4/3]"
                sizes="(min-width: 768px) 58vw, 100vw"
                parallax="5"
                mount
                className="md:col-span-7"
              />
              {service.gallery[1] ? (
                <ImageFrame
                  src={service.gallery[1].src}
                  alt={service.gallery[1].alt}
                  ratio="aspect-[4/5]"
                  sizes="(min-width: 768px) 34vw, 100vw"
                  shape="arch"
                  mount
                  outline
                  wrapperClassName="md:col-span-4 md:col-start-9 md:mt-24"
                />
              ) : null}
            </div>
          ) : null}
        </section>

        {/* Included */}
        <section id="included" className="section-y scroll-mt-20 bg-sand">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="What's included" title="Everything this service *covers*" description="Each plan is tailored after a consultation, but these are the elements we typically take care of." />
            </div>
            <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {service.includes.map((item, i) => (
                <li key={item} className="flex items-baseline gap-5 border-b border-line py-5" data-reveal>
                  <span className="font-display text-sm text-ochre-deep italic">{pad(i + 1)}</span>
                  <span className="text-[1.02rem] text-ink">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Highlights */}
        <section className="section-y">
          <div className="container-page">
            <SectionHeading eyebrow="Why it works" title="The details that make the *difference*" align="split" />
            <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
              {service.highlights.map((item, i) => (
                <div key={item.title} className="border-t border-ink/80 pt-8" data-reveal>
                  <span className="font-display text-6xl leading-none text-ochre/70 italic">{pad(i + 1)}</span>
                  <h3 className="type-h3 mt-8">{item.title}</h3>
                  <p className="type-body mt-4 text-ink-soft">{item.body}</p>
                </div>
              ))}
            </div>
            {service.note ? (
              <aside className="mt-16 flex gap-4 rounded-md border border-line bg-paper p-6 md:p-8" data-reveal>
                <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-ochre-deep" />
                <p className="type-small text-ink-soft">
                  <strong className="font-semibold text-ink">Please note: </strong>
                  {service.note}
                </p>
              </aside>
            ) : null}
          </div>
        </section>

        <PlanningProcess
          steps={process}
          eyebrow="The process"
          title="How we plan *your* event"
          description="A clear sequence with one point of contact, so decisions are made in the right order."
        />

        {isMumbaiCelebration ? (
          <section className="section-y-sm">
            <div className="container-page grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Eyebrow>Across Mumbai</Eyebrow>
                <h2 className="type-h3 mt-6">Target service areas for this service</h2>
                <p className="type-small mt-4 text-ink-soft">
                  Area guides cover local venue types, home-celebration logistics and travel considerations. Availability for your date is confirmed during consultation.
                </p>
              </div>
              <div className="lg:col-span-7 lg:col-start-6" data-reveal>
                <LocationLinks areas={areaList} />
              </div>
            </div>
          </section>
        ) : null}

        {/* FAQs */}
        <section className="section-y bg-sand">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading eyebrow="FAQ" title={`${service.title.replace(/ (in|near) Mumbai$/, "")}: your *questions*`} titleClassName="type-h3" />
            </div>
            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <FaqList items={service.faqs} idPrefix={service.slug} />
            </div>
          </div>
        </section>

        <RelatedServices services={related} />
        <CTASection eyebrow="Start planning" title={service.cta.title} body={service.cta.body} href={`/contact?service=${service.slug}`} label="Send an inquiry" image={service.gallery?.[0]?.src ?? service.image} imageAlt="" />
      </PageAnimations>

      <JsonLd data={serviceSchema(service, path)} />
    </>
  );
}

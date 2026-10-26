import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/shared/Button";
import { ImageFrame } from "@/components/shared/ImageFrame";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { areaZones, mumbaiAreas } from "@/data/mumbai-areas";
import type { AreaZone } from "@/types/location";

const zoneOrder: AreaZone[] = ["western", "island", "eastern", "thane", "navi"];

/** Homepage band linking to every target area, grouped by zone. */
export function AcrossMumbai() {
  return (
    <section className="section-y overflow-hidden">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Across Mumbai"
            index="07"
            title="From Bandra bungalows to *Thane* townships"
            description="Every neighbourhood celebrates differently — lanes, lifts, lawns and traffic all shape the plan. Our area guides cover what to expect."
          />
          <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3" data-reveal>
            {zoneOrder.map((zone) => (
              <div key={zone}>
                <h3 className="type-eyebrow border-b border-line pb-3 text-ink">{areaZones[zone]}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                  {mumbaiAreas
                    .filter((area) => area.zone === zone)
                    .map((area) => (
                      <li key={area.slug}>
                        <Link href={`/locations/${area.slug}`} className="link-underline text-[0.95rem] text-ink-soft hover:text-ink">
                          {area.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-6" data-reveal>
            <ButtonLink href="/locations" variant="secondary">
              Browse by area
            </ButtonLink>
            <Link href="/services/birthday-venues-mumbai" className="group inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-ink hover:text-ochre-deep">
              Help finding a venue
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-500 ease-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-4 lg:col-start-9">
          <ImageFrame
            src="/images/mumbai/sea-link-dusk.webp"
            alt="The Bandra–Worli Sea Link at golden hour"
            ratio="aspect-[3/4]"
            sizes="(min-width: 1024px) 32vw, 90vw"
            shape="arch"
            mount
            outline
            parallax="5"
            caption="The Sea Link at dusk — Bandra to Worli in a few minutes, on a good day."
            index="iii."
            wrapperClassName="ml-auto w-[82%] lg:w-full"
          />
          <ImageFrame
            src="/images/mumbai/gateway.webp"
            alt="The Gateway of India and the Taj Mahal Palace on the waterfront"
            ratio="aspect-square"
            sizes="(min-width: 1024px) 14vw, 40vw"
            shape="circle"
            className="absolute top-[42%] -left-2 w-[42%] border-[6px] border-ivory shadow-[0_30px_60px_-25px_rgba(28,24,20,0.45)] lg:-left-16"
          />
        </div>
      </div>
    </section>
  );
}

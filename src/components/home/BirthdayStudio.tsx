import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/Button";
import { getServicesBySlugs } from "@/lib/services";
import { cn, pad } from "@/lib/utils";

const featured = [
  "first-birthday-planner-mumbai",
  "unicorn-theme-birthday-mumbai",
  "jungle-theme-birthday-mumbai",
  "space-theme-birthday-mumbai",
  "teen-birthday-celebration-mumbai",
  "luxury-birthday-planner-mumbai",
];

/** Horizontal, scroll-snapping strip of birthday formats (native scroll, no JS). */
export function BirthdayStudio() {
  const items = getServicesBySlugs(featured);
  return (
    <section className="section-y overflow-hidden bg-sand">
      <div className="container-page">
        <SectionHeading
          eyebrow="Birthdays in Mumbai"
          index="03"
          title="Every age, every theme — *thoughtfully* styled"
          description="From first birthdays to sixtieth celebrations, at home or at a venue. Browse a few favourites, or see every theme and age group in the services menu."
          align="split"
        />
      </div>
      <div className="mt-14 md:mt-20">
        <ul
          className="container-page flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto pb-6 md:scroll-px-10 xl:scroll-px-14 [scrollbar-width:thin] md:gap-6"
          aria-label="Birthday planning formats"
        >
          {items.map((item, i) => (
            <li key={item.slug} className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[30%] xl:w-[23%]" data-reveal>
              <Link href={`/services/${item.slug}`} className="group block">
                <div className={cn("relative aspect-[3/4] overflow-hidden bg-muted", i % 2 ? "rounded-[1.25rem]" : "rounded-t-[999px]")}>
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
                    className="object-cover transition-transform duration-[1200ms] ease-expo group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-3 border border-ivory/0 transition-colors duration-700 group-hover:border-ivory/70",
                      i % 2 ? "rounded-[0.9rem]" : "rounded-t-[999px]"
                    )}
                  />
                  <span aria-hidden="true" className="absolute bottom-4 left-4 grid size-10 place-items-center rounded-full bg-ivory/90 font-display text-sm text-ink italic backdrop-blur">
                    {pad(i + 1)}
                  </span>
                </div>
                <p className="type-eyebrow mt-5 text-ochre-deep">{item.eyebrow.split("·").pop().trim()}</p>
                <h3 className="type-h3 mt-2 text-[1.6rem] group-hover:text-ochre-deep">{item.title.replace(/ in Mumbai$/, "").replace(/ near Mumbai$/, "")}</h3>
                <p className="type-small mt-2 text-ink-soft">{item.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-page mt-10" data-reveal>
        <ButtonLink href="/services#birthday-planning" variant="secondary">
          All birthday services
        </ButtonLink>
      </div>
    </section>
  );
}

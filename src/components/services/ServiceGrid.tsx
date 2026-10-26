import Link from "next/link";
import { ImageFrame } from "@/components/shared/ImageFrame";
import { ButtonLink } from "@/components/shared/Button";
import { cn, pad } from "@/lib/utils";

/** Alternating editorial rows for the studio's core services. */
export function ServiceRows({ services }) {
  return (
    <div className="space-y-24 md:space-y-36">
      {services.map((service, i) => {
        const flip = i % 2 === 1;
        return (
          <article key={service.slug} className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
            <Link href={`/services/${service.slug}`} className={cn("group block md:col-span-6", flip && "md:order-2 md:col-start-7")} tabIndex={-1} aria-hidden="true">
              <ImageFrame
                src={service.image}
                alt=""
                ratio={i % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"}
                sizes="(min-width: 768px) 50vw, 100vw"
                parallax="5"
                className={cn("rounded-sm", i % 3 === 0 && "rounded-t-[999px]")}
                imageClassName="transition-transform duration-[1400ms] ease-expo group-hover:scale-105"
              />
            </Link>
            <div className={cn("md:col-span-5", flip ? "md:order-1 md:col-start-1" : "md:col-start-8")} data-reveal>
              <span className="font-display text-xl text-ochre-deep italic">{pad(i + 1)}</span>
              <p className="type-eyebrow mt-6 text-ink-soft">{service.eyebrow}</p>
              <h3 className="type-h2 mt-4">
                <Link href={`/services/${service.slug}`} className="hover:text-ochre-deep">
                  {service.title}
                </Link>
              </h3>
              <p className="type-body mt-5 text-ink-soft">{service.summary}</p>
              <ul className="mt-8 grid gap-x-6 border-t border-line sm:grid-cols-2">
                {service.includes.slice(0, 6).map((item) => (
                  <li key={item} className="border-b border-line py-3 text-[0.92rem]">
                    {item}
                  </li>
                ))}
              </ul>
              <ButtonLink href={`/services/${service.slug}`} variant="secondary" className="mt-8">
                Explore {service.menuLabel}
              </ButtonLink>
            </div>
          </article>
        );
      })}
    </div>
  );
}

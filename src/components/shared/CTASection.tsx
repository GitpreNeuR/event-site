import Image from "next/image";
import { site } from "@/data/site";
import { primaryCta } from "@/data/navigation";
import { ButtonLink } from "./Button";
import { Eyebrow } from "./SectionHeading";
import { SplitHeading } from "./SplitHeading";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  href?: string;
  label?: string;
  image?: string;
  imageAlt?: string;
}

/** Closing conversion band shared by every page (copy can be overridden). */
export function CTASection({
  eyebrow = "Begin the conversation",
  title = "Let's create something *worth* gathering for",
  body = "Tell us what you're celebrating, roughly when and for how many. We'll reply with how we'd approach it — no obligation.",
  href = primaryCta.href,
  label = primaryCta.label,
  image = "/images/about/garden-palace.webp",
  imageAlt = "A garden venue at dusk dressed with white florals and candlelight",
}: CTASectionProps) {
  return (
    <section className="on-dark grain relative isolate overflow-hidden bg-night text-on-night">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-y-[12%] inset-x-0" data-parallax="6">
          <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover opacity-45" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/70 to-night/30" />
      </div>
      <div className="container-page section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Eyebrow>{eyebrow}</Eyebrow>
            <SplitHeading text={title} className="type-h1 mt-8 max-w-4xl" />
          </div>
          <div className="lg:col-span-4" data-reveal>
            <p className="type-lead text-on-night-soft">{body}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href={href} variant="light" size="lg">
                {label}
              </ButtonLink>
            </div>
            <p className="type-small mt-6 text-on-night-soft">
              Or write to{" "}
              <a className="link-underline text-on-night" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

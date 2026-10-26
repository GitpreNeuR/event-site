import Image from "next/image";
import Link from "next/link";
import HeroAnimator from "@/components/shared/HeroAnimator";
import { ButtonLink } from "@/components/shared/Button";
import { SplitHeading } from "@/components/shared/SplitHeading";
import { ImageFrame } from "@/components/shared/ImageFrame";
import { RotatingBadge } from "@/components/shared/RotatingBadge";
import { primaryCta } from "@/data/navigation";

const quickLinks = [
  { label: "Birthdays", href: "/services/birthday-planner-mumbai" },
  { label: "Ceremonies", href: "/services/premium-housewarming-mumbai" },
  { label: "Weddings", href: "/services/weddings-and-ceremonies" },
  { label: "Corporate", href: "/services/corporate-events" },
];

export function Hero() {
  return (
    <HeroAnimator className="on-dark grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-night text-on-night">
      <div className="absolute inset-0 -z-10" data-hero-media>
        <Image
          src="/images/hero/candlelit-table.webp"
          alt="A long dinner table glowing with candlelight and flowers in a dark room"
          fill
          preload loading="eager"
          sizes="100vw"
          className="object-cover object-[50%_60%]"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/55 to-night/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/70 via-transparent to-transparent" />

      <div className="container-page flex flex-1 flex-col justify-end pt-[calc(var(--nav-height)+3rem)] pb-10 md:pb-14">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 xl:col-span-7">
            <p data-hero className="type-eyebrow flex items-center gap-3 text-ochre-soft">
              <span aria-hidden="true" className="h-px w-8 bg-current" />
              Celebration &amp; Event Studio · Mumbai
            </p>
            <SplitHeading
              as="h1"
              mode="hero"
              text="Celebrations designed with *heart,* delivered with precision."
              className="type-display mt-7 max-w-[15ch]"
            />
            <p data-hero className="type-lead mt-8 max-w-xl text-on-night-soft">
              We plan and produce birthdays, family ceremonies, weddings and brand gatherings across Mumbai — one studio
              from the first idea to the last guest home.
            </p>
            <div data-hero className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              <ButtonLink href={primaryCta.href} variant="light" size="lg">
                {primaryCta.label}
              </ButtonLink>
              <ButtonLink href="/services" variant="outline-light" size="lg">
                Explore Services
              </ButtonLink>
            </div>
          </div>

          <div data-hero className="hidden lg:col-span-4 lg:col-start-9 lg:block">
            <div className="relative">
            <ImageFrame
              src="/images/hero/marigold-garlands.webp"
              alt="Strands of marigold and jasmine garlands hanging in soft light"
              ratio="aspect-[3/4]"
              sizes="26vw"
              shape="arch"
              mount
              outline
              reveal={false}
              preload
              wrapperClassName="ml-auto w-[76%]"
            />
            <ImageFrame
              src="/images/services/candle-dinner.webp"
              alt="A long table set with candles, glassware and linen"
              ratio="aspect-[4/5]"
              sizes="14vw"
              shape="soft"
              reveal={false}
              className="absolute -bottom-10 left-0 w-[40%] border-[6px] border-night shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
            />
            <RotatingBadge text="Celebrations · Ceremonies · Mumbai · " className="absolute top-[10%] left-[4%] z-10 bg-night/85 text-on-night backdrop-blur-sm" />
            </div>
            <p className="type-small mt-14 ml-[46%] max-w-[13rem] text-on-night-soft">
              <span className="font-display mr-2 text-base text-ochre-soft italic">i.</span>
              Marigold, jasmine and candlelight — the palette of a Mumbai evening.
            </p>
          </div>
        </div>

        <div data-hero className="mt-20 flex flex-col gap-6 border-t border-on-night/15 pt-6 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.82rem] text-on-night-soft">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline hover:text-on-night">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href="#introduction" className="group hidden items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-on-night-soft hover:text-on-night md:flex">
            Scroll to explore
            <span aria-hidden="true" className="relative block h-9 w-px overflow-hidden bg-on-night/20">
              <span className="absolute inset-x-0 top-0 h-3 animate-[scrollcue_2.4s_ease-in-out_infinite] bg-ochre-soft motion-reduce:animate-none" />
            </span>
          </a>
        </div>
      </div>
    </HeroAnimator>
  );
}

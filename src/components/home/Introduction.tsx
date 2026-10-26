import { ButtonLink } from "@/components/shared/Button";
import { ImageFrame } from "@/components/shared/ImageFrame";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { SplitHeading } from "@/components/shared/SplitHeading";
import { RotatingBadge } from "@/components/shared/RotatingBadge";

export function Introduction() {
  return (
    <section id="introduction" className="section-y overflow-hidden">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pt-10">
          <Eyebrow index="01">The studio</Eyebrow>
          <SplitHeading
            text="A *pratha* is a custom passed down through a family — the heart of every celebration."
            className="type-h2 mt-8 max-w-[18ch]"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-xl" data-reveal>
            <p className="type-body text-ink-soft">
              We named the studio after those customs because they capture how we work: rooted, warm and organised around
              people. Every event begins with who is gathering and why — the design follows.
            </p>
            <p className="type-body text-ink-soft">
              Behind the scenes, it’s rigorous planning: budgets you can read, vendors briefed in writing, and a run-of-show
              rehearsed before the day. You host. We take care of the rest.
            </p>
          </div>
          <div className="mt-10" data-reveal>
            <ButtonLink href="/about" variant="secondary">
              About the studio
            </ButtonLink>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:col-start-8">
          <ImageFrame
            src="/images/about/henna-marigold.webp"
            alt="Hands decorated with henna holding marigold garlands against a saffron sari"
            ratio="aspect-[4/5]"
            sizes="(min-width: 1024px) 38vw, 90vw"
            parallax="6"
            shape="arch"
            mount
            outline
            caption="Mehendi afternoons, dressed in fresh marigold and jasmine."
            index="ii."
            wrapperClassName="ml-auto w-[88%] lg:w-full"
          />
          <ImageFrame
            src="/images/about/floral-table.webp"
            alt="A dinner table dressed with flowers, candles and greenery outdoors"
            ratio="aspect-square"
            sizes="(min-width: 1024px) 18vw, 45vw"
            shape="soft"
            className="absolute bottom-20 -left-2 w-[42%] border-[6px] border-ivory shadow-[0_30px_60px_-25px_rgba(28,24,20,0.45)] sm:-left-8 lg:-left-24"
          />
          <RotatingBadge text="Planned with care · Run with precision · " className="absolute -top-8 left-0 bg-ivory text-ink-soft lg:-left-14" />
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/Button";
import { FaqList } from "@/components/shared/FaqList";

export function FAQPreview({ items }) {
  return (
    <section className="section-y bg-sand">
      <div className="container-page grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Questions" index="09" title="Good to know *before* you begin" />
          <div className="mt-10 flex flex-wrap gap-3" data-reveal>
            <ButtonLink href="/faq" variant="secondary">
              All questions
            </ButtonLink>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6" data-reveal>
          <FaqList items={items} idPrefix="home-faq" />
        </div>
      </div>
    </section>
  );
}

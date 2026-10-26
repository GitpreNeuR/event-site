import PageAnimations from "@/components/shared/PageAnimations";
import { PageHeader } from "@/components/shared/PageHeader";
import { FaqList } from "@/components/shared/FaqList";
import { CTASection } from "@/components/shared/CTASection";
import { faqCategories } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description: "Answers about planning timelines, corporate events, weddings, logistics, budgets and booking a consultation with our Mumbai event studio.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, *answered* plainly"
        description="If you don't find what you're looking for, send us a note — we're happy to explain how we work."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />
      <PageAnimations>
        <section className="section-y pt-12 md:pt-16">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <nav aria-label="FAQ categories" className="lg:col-span-3">
              <ul className="flex flex-wrap gap-2 lg:sticky lg:top-[calc(var(--nav-height)+2rem)] lg:flex-col lg:gap-0 lg:border-t lg:border-line">
                {faqCategories.map((category) => (
                  <li key={category.id}>
                    <a href={`#${category.id}`} className="inline-flex rounded-full border border-line px-4 py-2 text-[0.85rem] hover:border-ink lg:flex lg:rounded-none lg:border-0 lg:border-b lg:px-0 lg:py-4 lg:hover:text-ochre-deep">
                      {category.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-20 lg:col-span-8 lg:col-start-5">
              {faqCategories.map((category) => (
                <section key={category.id} id={category.id} aria-labelledby={`${category.id}-title`} className="scroll-mt-32">
                  <h2 id={`${category.id}-title`} className="type-h3 mb-6" data-reveal>
                    {category.title}
                  </h2>
                  <div data-reveal>
                    <FaqList items={category.items} idPrefix={category.id} />
                  </div>
                </section>
              ))}
              <p className="type-small text-ink-soft">
                Answers marked [Placeholder] describe policies that are still being finalised and will be updated before launch.
              </p>
            </div>
          </div>
        </section>
        <CTASection eyebrow="Still curious?" title="Ask us *anything*" body="Send your question with a few details about your event, and we'll reply personally." />
      </PageAnimations>
    </>
  );
}

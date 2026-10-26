import { Suspense } from "react";
import PageAnimations from "@/components/shared/PageAnimations";
import { PageHeader } from "@/components/shared/PageHeader";
import { FaqList } from "@/components/shared/FaqList";
import { ImageFrame } from "@/components/shared/ImageFrame";
import { InquiryForm, InquiryFormSkeleton } from "@/components/contact/InquiryForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { faqCategories } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Plan Your Event — Contact & Inquiries",
  description: "Tell us about your birthday, ceremony, wedding or corporate event in Mumbai. Share the date, guest count and budget, and we'll reply with next steps.",
  path: "/contact",
  image: "/images/about/planning-desk.webp",
});

const steps = [
  { title: "We read every inquiry", body: "A planner reviews your details and any questions." },
  { title: "A short conversation", body: "We arrange a call to understand the occasion and priorities." },
  { title: "A proposed approach", body: "You receive a scope and estimate to consider — no obligation." },
];

export default function ContactPage() {
  const booking = faqCategories.find((c) => c.id === "booking").items;
  return (
    <>
      <PageHeader
        eyebrow="Plan your event"
        title="Tell us what you're *celebrating*"
        description="The more you share, the more useful our first reply will be — but rough answers are perfectly fine at this stage."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <PageAnimations>
        <section className="section-y pt-12 md:pt-16">
          <div className="container-page grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Suspense fallback={<InquiryFormSkeleton />}>
                <InquiryForm />
              </Suspense>
            </div>
            <aside className="space-y-14 lg:col-span-4 lg:col-start-9">
              <ContactDetails />
              <div data-reveal>
                <h2 className="type-eyebrow text-ink">What happens next</h2>
                <ol className="mt-6 space-y-6">
                  {steps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="font-display text-xl text-ochre-deep italic">{i + 1}</span>
                      <div>
                        <h3 className="text-[0.98rem] font-semibold">{step.title}</h3>
                        <p className="type-small mt-1 text-ink-soft">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <ImageFrame src="/images/about/planning-desk.webp" alt="A planner smiling while writing notes at a bright desk" ratio="aspect-[4/5]" sizes="(min-width: 1024px) 30vw, 100vw" shape="arch" mount className="hidden lg:block" />
            </aside>
          </div>
        </section>
        <section className="section-y bg-sand">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="type-h2">Before you <em className="accent">send</em></h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <FaqList items={booking} idPrefix="contact-faq" />
            </div>
          </div>
        </section>
      </PageAnimations>
    </>
  );
}

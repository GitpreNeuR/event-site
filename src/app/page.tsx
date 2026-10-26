import PageAnimations from "@/components/shared/PageAnimations";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { BirthdayStudio } from "@/components/home/BirthdayStudio";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PlanningProcess } from "@/components/home/PlanningProcess";
import { AcrossMumbai } from "@/components/home/AcrossMumbai";
import { VisualInterlude } from "@/components/home/VisualInterlude";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQPreview } from "@/components/home/FAQPreview";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { servicePillars, processes } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqPreview } from "@/data/faqs";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: `${site.name} — Celebration & Event Studio in Mumbai`,
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PageAnimations>
        <Introduction />

        <section className="section-y pt-0 md:pt-0">
          <div className="container-page">
            <SectionHeading
              eyebrow="What we do"
              index="02"
              title="One studio for the occasions that *matter*"
              description="Whether it's forty guests on a terrace or four hundred in a ballroom, the same team designs it, plans it and runs it on the day."
              align="split"
            />
            <div className="mt-16 md:mt-20">
              <ServicesOverview pillars={servicePillars} />
            </div>
          </div>
        </section>

        <BirthdayStudio />
        <FeaturedExperiences />
        <WhyChooseUs />
        <PlanningProcess steps={processes.studio} index="06" description="A clear sequence with a single planner — so you always know what's decided, what's next and who's responsible." />
        <AcrossMumbai />
        <VisualInterlude />
        <Testimonials items={testimonials} />
        <FAQPreview items={faqPreview} />
        <CTASection />
      </PageAnimations>
    </>
  );
}

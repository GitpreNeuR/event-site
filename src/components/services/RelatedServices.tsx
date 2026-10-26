import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function RelatedServices({ services, title = "You may also be *planning*", eyebrow = "Related services" }) {
  if (!services.length) return null;
  return (
    <section className="section-y">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

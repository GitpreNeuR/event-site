import { notFound } from "next/navigation";
import { ServiceLandingPage } from "@/components/services/ServiceLandingPage";
import { allServices, getServiceBySlug } from "@/lib/services";
import { createMetadata } from "@/lib/seo";

// Every valid slug is prerendered at build time. Navigations may block on
// the (static) payload so unknown slugs can return a real 404 status.
export const instant = false;

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found", robots: { index: false } };
  return createMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceLandingPage service={service} />;
}

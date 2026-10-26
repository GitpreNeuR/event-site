import { notFound } from "next/navigation";
import { LocationLandingPage, areaPlaceName } from "@/components/locations/LocationLandingPage";
import { mumbaiAreas } from "@/data/mumbai-areas";
import { createMetadata } from "@/lib/seo";

const getArea = (slug) => mumbaiAreas.find((area) => area.slug === slug);

// Every valid slug is prerendered at build time. Navigations may block on
// the (static) payload so unknown slugs can return a real 404 status.
export const instant = false;

export function generateStaticParams() {
  return mumbaiAreas.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({ params }) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return { title: "Area not found", robots: { index: false } };
  const place = areaPlaceName(area);
  return createMetadata({
    title: `Birthday Planner in ${place} — Decor, Venues & Planning`,
    description: `Birthday planning and decoration in ${place} — themes, at-home parties and venue guidance for ${area.name}, from a Mumbai celebration studio.`,
    path: `/locations/${area.slug}`,
    image: area.image,
  });
}

export default async function AreaPage({ params }) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  return <LocationLandingPage area={area} />;
}

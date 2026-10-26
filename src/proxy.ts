import { NextResponse, type NextRequest } from "next/server";
import { coreServices } from "@/data/services";
import { birthdayServices } from "@/data/birthday-services";
import { mumbaiAreas } from "@/data/mumbai-areas";
import { experiences } from "@/data/experiences";
import { articles } from "@/data/articles";

/**
 * Detail pages stream a static shell first (Partial Prerendering), so an
 * unknown slug would otherwise answer 200 with a "not found" UI. Rewriting
 * unknown slugs to a route that doesn't exist gives crawlers a real 404.
 */
const known: Record<string, Set<string>> = {
  services: new Set([...coreServices, ...birthdayServices].map((s) => s.slug)),
  locations: new Set(mumbaiAreas.map((a) => a.slug)),
  experiences: new Set(experiences.map((e) => e.slug)),
  journal: new Set(articles.map((a) => a.slug)),
};

export function proxy(request: NextRequest) {
  const [, section, slug, extra] = request.nextUrl.pathname.split("/");
  if (extra !== undefined || !section || !slug || !known[section]?.has(slug)) {
    return NextResponse.rewrite(new URL("/_404", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/services/:slug+", "/locations/:slug+", "/experiences/:slug+", "/journal/:slug+"],
};

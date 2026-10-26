/** Safely serialises structured data (escapes "<" to avoid script injection). */
import type { JsonLdData } from "@/lib/seo";

export function JsonLd({ data }: { data: JsonLdData }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

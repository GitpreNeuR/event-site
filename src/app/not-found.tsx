import Link from "next/link";
import { ButtonLink } from "@/components/shared/Button";
import { LogoMark } from "@/components/layout/Logo";

export const metadata = { title: "Page not found", robots: { index: false } };

const suggestions = [
  { label: "Services", href: "/services" },
  { label: "Birthday planning", href: "/services/birthday-planner-mumbai" },
  { label: "Locations", href: "/locations" },
  { label: "Journal", href: "/journal" },
];

export default function NotFound() {
  return (
    <section className="flex min-h-[90svh] items-center pt-(--nav-height)">
      <div className="container-page py-24 text-center">
        <LogoMark className="mx-auto h-16 text-ink" />
        <p className="type-eyebrow mt-10 text-ochre-deep">Error 404</p>
        <h1 className="type-h1 mx-auto mt-6 max-w-[14ch]">
          This page has <em className="accent">left</em> the party.
        </h1>
        <p className="type-lead mx-auto mt-6 max-w-lg text-ink-soft">The page you’re looking for doesn’t exist or has moved. Try one of these instead.</p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {suggestions.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="inline-flex rounded-full border border-line px-5 py-2.5 text-[0.9rem] hover:border-ink">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
        <ButtonLink href="/" className="mt-10">
          Back to home
        </ButtonLink>
      </div>
    </section>
  );
}

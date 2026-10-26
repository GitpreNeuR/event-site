import Link from "next/link";
import { cacheLife } from "next/cache";
import { site } from "@/data/site";
import { footerNav } from "@/data/navigation";
import { mumbaiAreas } from "@/data/mumbai-areas";
import { LogoMark } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

async function getYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="type-eyebrow text-on-night-soft">{title}</h2>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="link-underline text-[0.95rem] text-on-night">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function Footer() {
  const year = await getYear();
  const areaLinks = [
    ...mumbaiAreas.slice(0, 7).map((area) => ({ label: area.name, href: `/locations/${area.slug}` })),
    { label: "All areas", href: "/locations" },
  ];

  return (
    <footer className="on-dark grain relative overflow-hidden bg-night text-on-night">
      <div className="container-page pt-20 pb-10 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4" aria-label={`${site.name} — home`}>
              <LogoMark className="h-12 text-on-night" />
              <span className="font-display text-5xl leading-none">{site.name}</span>
            </Link>
            <p className="type-lead mt-8 max-w-md text-on-night-soft">{site.shortDescription}</p>
            <div className="mt-10 max-w-md">
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-[1fr_1.15fr_0.9fr_1.35fr]">
            <FooterColumn title="Studio" links={footerNav.studio} />
            <FooterColumn title="Services" links={footerNav.services} />
            <FooterColumn title="Areas" links={areaLinks} />
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <h2 className="type-eyebrow text-on-night-soft">Contact</h2>
              <address className="mt-5 space-y-2.5 text-[0.95rem] not-italic text-on-night">
                <a className="link-underline block [overflow-wrap:anywhere]" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
                {site.contact.phoneHref ? (
                  <a className="link-underline block" href={site.contact.phoneHref}>
                    {site.contact.phoneDisplay}
                  </a>
                ) : (
                  <span className="block text-on-night-soft">{site.contact.phoneDisplay}</span>
                )}
                <span className="block text-on-night-soft">{site.contact.studio}</span>
                <span className="block text-on-night-soft">{site.city}, {site.country}</span>
              </address>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {site.social.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="link-underline text-[0.85rem] text-on-night">
                      {item.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p aria-hidden="true" className="pointer-events-none mt-20 select-none font-display text-[clamp(4.5rem,19vw,18rem)] leading-[0.8] tracking-[-0.04em] text-on-night/[0.045]">
          {site.name}
        </p>

        <div className="mt-6 flex flex-col gap-4 border-t border-night-line pt-6 text-[0.8rem] text-on-night-soft md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved. Photography via Unsplash.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

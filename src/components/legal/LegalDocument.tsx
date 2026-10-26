import { PageHeader } from "@/components/shared/PageHeader";
import { site } from "@/data/site";

/** Shared layout for draft legal documents. */
export function LegalDocument({ title, description, path, sections }) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} description={description} breadcrumbs={[{ label: title, href: path }]} />
      <section className="section-y pt-12 md:pt-16">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="rounded-md border border-ochre/40 bg-paper p-5 lg:sticky lg:top-[calc(var(--nav-height)+2rem)]">
              <p className="type-eyebrow text-ochre-deep">Draft document</p>
              <p className="type-small mt-3 text-ink-soft">
                This is placeholder text for structure only. It is not legal advice and must be reviewed by a qualified professional before publication.
              </p>
              <p className="type-small mt-3 text-ink-soft">Last updated: {site.legal.lastUpdated}</p>
            </div>
            <nav aria-label="On this page" className="mt-8 hidden lg:block">
              <ol className="space-y-2 text-[0.88rem] text-ink-soft">
                {sections.map((section, i) => (
                  <li key={section.title}>
                    <a href={`#section-${i + 1}`} className="hover:text-ink">
                      {i + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
          <div className="prose-editorial max-w-[70ch] lg:col-span-8 lg:col-start-5">
            {sections.map((section, i) => (
              <section key={section.title} id={`section-${i + 1}`} className="scroll-mt-28">
                <h2 className="first:mt-0">
                  {i + 1}. {section.title}
                </h2>
                {section.body.map((paragraph, j) =>
                  Array.isArray(paragraph) ? (
                    <ul key={j}>
                      {paragraph.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={j}>{paragraph}</p>
                  )
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";

export function ContactDetails() {
  const { contact } = site;
  const rows = [
    { icon: Mail, label: "Email", value: <a href={`mailto:${contact.email}`} className="link-underline break-all">{contact.email}</a> },
    { icon: Phone, label: "Phone", value: contact.phoneHref ? <a href={contact.phoneHref} className="link-underline">{contact.phoneDisplay}</a> : contact.phoneDisplay },
    { icon: MapPin, label: "Studio", value: `${contact.studio} · ${site.city}` },
    { icon: Clock, label: "Hours", value: contact.hours },
  ];
  return (
    <div>
      <dl className="divide-y divide-line border-y border-line">
        {rows.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-4 py-5">
            <Icon aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-ochre-deep" strokeWidth={1.75} />
            <div>
              <dt className="type-eyebrow text-ink-soft">{label}</dt>
              <dd className="mt-1.5 text-[0.98rem] text-ink">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
      {contact.isPlaceholder ? (
        <p className="type-small mt-4 text-ink-faint">Contact details shown are placeholders until the studio’s details are confirmed.</p>
      ) : null}
    </div>
  );
}

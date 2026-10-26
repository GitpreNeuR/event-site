import { LegalDocument } from "@/components/legal/LegalDocument";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal information submitted through this website. Draft document pending review.`,
  path: "/privacy-policy",
});

const { legal, contact } = site;

const sections = [
  { title: "Who we are", body: [`This website is operated by ${legal.entityName} (“we”, “us”), trading as ${site.name}, with its registered office at ${legal.registeredAddress}.`, "[Placeholder: confirm the legal entity, registration details and data-protection contact.]"] },
  { title: "Information we collect", body: ["When you submit an inquiry or sign up for updates, we may collect:", ["Your name, email address and, if provided, phone number and organisation", "Details about your event, such as type, date, location, guest count and budget range", "Any additional information you choose to include in your message"], "We may also collect basic technical information, such as browser type and pages visited. [Placeholder: list any analytics, cookies or third-party tools actually in use.]"] },
  { title: "How we use your information", body: ["We use the information you provide to respond to your inquiry, prepare proposals, plan your event and send updates you have requested. We do not sell your personal information.", "[Placeholder: state the lawful basis for processing under the applicable data-protection law.]"] },
  { title: "Sharing your information", body: ["Where necessary to plan your event, we may share relevant details with vendors and venues you have agreed to work with. We may use service providers (for example, email or form-handling services) who process data on our behalf.", "[Placeholder: name categories of processors and any cross-border transfers.]"] },
  { title: "How long we keep information", body: ["[Placeholder: describe retention periods for inquiries, client records and newsletter subscriptions.]"] },
  { title: "Your choices and rights", body: [`You may ask to access, correct or delete the personal information we hold about you, or unsubscribe from updates at any time, by writing to ${contact.email}.`, "[Placeholder: describe rights available under the applicable law and how requests are handled.]"] },
  { title: "Security", body: ["We take reasonable measures to protect personal information. No method of transmission over the internet is completely secure. [Placeholder: summarise actual security practices.]"] },
  { title: "Changes to this policy", body: ["We may update this policy from time to time. The date of the latest revision will be shown on this page."] },
  { title: "Contact", body: [`Questions about this policy can be sent to ${contact.email}. Governing law: ${legal.jurisdiction}.`] },
];

export default function PrivacyPolicyPage() {
  return <LegalDocument title="Privacy Policy" description="How we handle the information you share with us." path="/privacy-policy" sections={sections} />;
}

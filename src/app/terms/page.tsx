import { LegalDocument } from "@/components/legal/LegalDocument";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  description: `Terms governing use of the ${site.name} website and inquiries. Draft document pending professional review.`,
  path: "/terms",
});

const { legal, contact } = site;

const sections = [
  { title: "About these terms", body: [`These terms govern your use of this website, operated by ${legal.entityName}. By using the website you agree to them. [Placeholder: confirm entity details.]`] },
  { title: "Website content", body: ["Content on this website, including articles and illustrative event concepts, is provided for general information. Illustrative concepts and sample testimonials are clearly labelled and do not describe real client events.", "Photography is used under the Unsplash License and remains the work of its respective photographers."] },
  { title: "Inquiries and proposals", body: ["Submitting an inquiry does not create a booking or contract. Any services will be governed by a separate written agreement or proposal setting out scope, fees and terms.", "[Placeholder: describe how bookings are confirmed.]"] },
  { title: "Fees, deposits and payments", body: ["[Placeholder: insert the studio's confirmed fee structure, deposit requirements and payment schedule. Do not publish until reviewed.]"] },
  { title: "Cancellations and changes", body: ["[Placeholder: insert confirmed cancellation, rescheduling and refund terms. Note that venue and vendor terms may apply separately.]"] },
  { title: "Third-party vendors and venues", body: ["Where we coordinate third-party vendors or venues, their own terms, pricing and policies may apply. [Placeholder: clarify responsibilities and liability.]"] },
  { title: "Limitation of liability", body: ["[Placeholder: insert limitation-of-liability wording reviewed by a qualified professional.]"] },
  { title: "Intellectual property", body: [`The ${site.name} name, logo and original website content may not be reproduced without permission, except as permitted by law.`] },
  { title: "Governing law", body: [`These terms are governed by the laws of ${legal.jurisdiction}. [Placeholder: confirm jurisdiction and dispute resolution.]`] },
  { title: "Contact", body: [`Questions about these terms can be sent to ${contact.email}.`] },
];

export default function TermsPage() {
  return <LegalDocument title="Terms & Conditions" description="The terms that apply when you use this website." path="/terms" sections={sections} />;
}

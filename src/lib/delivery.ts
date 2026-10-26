/**
 * Server-side delivery of form submissions.
 *
 * Integration point: set INQUIRY_WEBHOOK_URL / NEWSLETTER_WEBHOOK_URL to an
 * endpoint you control (Zapier/Make webhook, a CRM, a serverless function
 * that sends email via Resend/SendGrid, etc.). The payload is POSTed as JSON.
 *
 * Without a webhook:
 *  - development: the submission is logged to the server console and the
 *    response says so explicitly (mode: "development-log");
 *  - production: the request fails with 503 so visitors never see a false
 *    success message.
 */
export type DeliveryKind = "inquiry" | "newsletter";

export type DeliveryResult =
  | { delivered: true; mode: "webhook" }
  | { delivered: false; mode: "development-log" }
  | { delivered: false; mode: "unconfigured" | "webhook"; error: string };

export async function deliver(kind: DeliveryKind, payload: Record<string, unknown>): Promise<DeliveryResult> {
  const url = kind === "inquiry" ? process.env.INQUIRY_WEBHOOK_URL : process.env.NEWSLETTER_WEBHOOK_URL;

  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[${kind}] No webhook configured — development log only:\n`, JSON.stringify(payload, null, 2));
      return { delivered: false, mode: "development-log" };
    }
    return { delivered: false, mode: "unconfigured", error: "Delivery is not configured." };
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (process.env.FORM_WEBHOOK_SECRET) headers.Authorization = `Bearer ${process.env.FORM_WEBHOOK_SECRET}`;

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ type: kind, submittedAt: new Date().toISOString(), ...payload }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) return { delivered: false, mode: "webhook", error: `Webhook responded ${response.status}` };
  return { delivered: true, mode: "webhook" };
}

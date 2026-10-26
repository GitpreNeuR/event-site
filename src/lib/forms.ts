import type { FormApiResponse, InquiryErrors, InquiryValues } from "./inquiry";

/**
 * Client-side submission helpers. Both talk to this app's own route
 * handlers (src/app/api/*), which forward to the provider configured in
 * environment variables. See README → "Connecting the contact form".
 */

export type SubmitResult =
  | { ok: true; message: string; mode: "webhook" | "development-log" }
  | { ok: false; message: string; fieldErrors?: InquiryErrors };

function isFormApiResponse(data: unknown): data is FormApiResponse {
  return typeof data === "object" && data !== null && "ok" in data && "message" in data && typeof data.message === "string";
}

async function post(url: string, payload: unknown): Promise<SubmitResult> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data: unknown = await response.json().catch(() => null);
    if (!isFormApiResponse(data)) {
      return { ok: false, message: "Something went wrong while sending. Please try again or email us directly." };
    }
    if (!response.ok || !data.ok) {
      return {
        ok: false,
        message: data.message || "Something went wrong while sending. Please try again or email us directly.",
        fieldErrors: "fieldErrors" in data ? data.fieldErrors : undefined,
      };
    }
    return { ok: true, message: data.message, mode: data.mode };
  } catch {
    return { ok: false, message: "We couldn't reach the server. Check your connection and try again." };
  }
}

export const submitInquiry = (payload: InquiryValues) => post("/api/inquiry", payload);
export const submitNewsletter = (payload: { email: string }) => post("/api/newsletter", payload);

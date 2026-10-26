import { NextResponse } from "next/server";
import { asRecord, parseInquiry, type FormApiResponse } from "@/lib/inquiry";
import { deliver } from "@/lib/delivery";
import { site } from "@/data/site";

const reply = (body: FormApiResponse, status = 200) => NextResponse.json(body, { status });

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return reply({ ok: false, message: "Invalid request." }, 400);
  }

  // Honeypot: bots fill hidden fields. Respond neutrally without delivering.
  if (asRecord(body).website) {
    return reply({ ok: false, message: "Submission could not be accepted." }, 400);
  }

  const parsed = parseInquiry(body);
  if ("errors" in parsed) {
    return reply({ ok: false, message: "Please correct the highlighted fields.", fieldErrors: parsed.errors }, 422);
  }

  const failure = `We couldn't send your inquiry right now. Please email ${site.contact.email} instead.`;
  try {
    const result = await deliver("inquiry", { ...parsed.data });
    if (result.mode === "development-log") {
      return reply({
        ok: true,
        mode: result.mode,
        message: "Development mode: your inquiry was received and logged on the server, but not delivered — no webhook is configured yet.",
      });
    }
    if (!result.delivered) return reply({ ok: false, message: failure }, 503);
    return reply({ ok: true, mode: result.mode, message: "Thank you — your inquiry has been sent. We'll be in touch shortly." });
  } catch (error) {
    console.error("[inquiry] delivery failed", error);
    return reply({ ok: false, message: failure }, 502);
  }
}

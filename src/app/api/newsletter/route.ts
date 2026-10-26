import { NextResponse } from "next/server";
import { deliver } from "@/lib/delivery";
import { asRecord, type FormApiResponse } from "@/lib/inquiry";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const reply = (body: FormApiResponse, status = 200) => NextResponse.json(body, { status });

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const raw = asRecord(body).email;
  const email = typeof raw === "string" ? raw.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return reply({ ok: false, message: "Please enter a valid email address." }, 422);
  }
  try {
    const result = await deliver("newsletter", { email });
    if (result.mode === "development-log") {
      return reply({ ok: true, mode: result.mode, message: "Development mode: received and logged on the server — not subscribed to a list yet." });
    }
    if (!result.delivered) {
      return reply({ ok: false, message: "Sign-ups aren't available just yet. Please try again later." }, 503);
    }
    return reply({ ok: true, mode: result.mode, message: "Thank you — you're on the list." });
  } catch (error) {
    console.error("[newsletter] delivery failed", error);
    return reply({ ok: false, message: "We couldn't sign you up right now. Please try again later." }, 502);
  }
}

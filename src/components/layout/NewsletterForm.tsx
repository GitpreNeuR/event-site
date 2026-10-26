"use client";

import { useId, useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitNewsletter } from "@/lib/forms";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Footer newsletter sign-up. Success is only shown when the API confirms it. */
export function NewsletterForm() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState({ status: "idle", message: "" });

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setState({ status: "error", message: "Please enter a valid email address." });
      return;
    }
    setState({ status: "loading", message: "" });
    const result = await submitNewsletter({ email: email.trim() });
    if (result.ok) {
      setEmail("");
      setState({ status: "success", message: result.message });
    } else {
      setState({ status: "error", message: result.message });
    }
  };

  const messageId = `${id}-message`;
  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <label htmlFor={`${id}-email`} className="type-eyebrow text-on-night-soft">
        Seasonal notes, occasionally
      </label>
      <div className="mt-4 flex items-center border-b border-night-line focus-within:border-on-night">
        <input
          id={`${id}-email`}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={state.status === "error" || undefined}
          aria-describedby={messageId}
          className="h-12 w-full bg-transparent text-[0.95rem] text-on-night outline-none placeholder:text-on-night-soft/70"
        />
        <button
          type="submit"
          disabled={state.status === "loading"}
          className="grid size-10 shrink-0 place-items-center rounded-full text-on-night transition-colors hover:bg-on-night hover:text-ink disabled:opacity-60"
          aria-label="Subscribe"
        >
          {state.status === "loading" ? <Loader2 className="size-4 animate-spin" aria-hidden="true" /> : <ArrowRight className="size-4" aria-hidden="true" />}
        </button>
      </div>
      <p id={messageId} role="status" aria-live="polite" className={cn("type-small mt-3 min-h-6", state.status === "error" ? "text-ochre-soft" : "text-on-night-soft")}>
        {state.message}
      </p>
    </form>
  );
}

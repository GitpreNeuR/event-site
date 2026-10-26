"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/shared/Button";
import { budgetRanges, eventTypeForService, eventTypes, guestRanges, initialInquiry, validateInquiry } from "@/lib/inquiry";
import { submitInquiry } from "@/lib/forms";
import { mumbaiAreas } from "@/data/mumbai-areas";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const fieldClass =
  "h-13 rounded-md border-line bg-paper px-4 text-[1rem] shadow-none placeholder:text-ink-faint focus-visible:border-ochre focus-visible:ring-ochre/20 md:text-[0.95rem]";

interface FieldProps {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}

function Field({ id, label, optional, error, hint, children, className }: FieldProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className="mb-2.5 flex items-baseline justify-between gap-3 text-[0.85rem] font-semibold text-ink">
        {label}
        {optional ? <span className="text-[0.75rem] font-normal text-ink-soft">Optional</span> : null}
      </label>
      {children}
      {hint && !error ? (
        <p id={`${id}-hint`} className="mt-2 text-[0.8rem] text-ink-soft">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-[0.8rem] font-medium text-danger">
          <AlertCircle aria-hidden="true" className="size-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function NativeSelect({ id, value, onChange, options, placeholder, error }) {
  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          fieldClass,
          "w-full appearance-none border pr-10 outline-none focus-visible:ring-3 aria-invalid:border-danger",
          !value && "text-ink-faint"
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-ink">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden="true" className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink-soft" />
    </div>
  );
}

/**
 * Event inquiry form. Validation runs on the client (for feedback) and again
 * on the server. Success is shown only when /api/inquiry confirms delivery.
 */
export function InquiryForm() {
  const params = useSearchParams();
  const formRef = useRef(null);
  const statusRef = useRef(null);

  const [values, setValues] = useState(() => {
    const area = mumbaiAreas.find((a) => a.slug === params.get("area"));
    return {
      ...initialInquiry,
      eventType: eventTypeForService(params.get("service") ?? ""),
      location: area ? `${area.name}, ${area.city}` : "",
    };
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ state: "idle" | "invalid" | "loading" | "success" | "error"; message: string; mode?: string }>({ state: "idle", message: "" });

  const update = (key: string) => (event) => {
    const value = event?.target ? event.target.value : event;
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[key];
        return next;
      });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const found = validateInquiry(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus({ state: "invalid", message: "Please check the highlighted fields." });
      const first = Object.keys(found)[0];
      formRef.current?.querySelector(`#${first}`)?.focus();
      return;
    }
    setStatus({ state: "loading", message: "" });
    const result = await submitInquiry(values);
    if (result.ok) {
      setStatus({ state: "success", message: result.message, mode: result.mode });
      setValues(initialInquiry);
      requestAnimationFrame(() => statusRef.current?.focus());
    } else {
      if ("fieldErrors" in result && result.fieldErrors) setErrors(result.fieldErrors);
      setStatus({ state: "error", message: result.message });
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  };

  const err = (key) => errors[key];
  const describe = (key: string, hint = false) => (err(key) ? `${key}-error` : hint ? `${key}-hint` : undefined);

  if (status.state === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="rounded-lg border border-line bg-paper p-8 outline-none md:p-12">
        <CheckCircle2 aria-hidden="true" className="size-9 text-success" />
        <h2 className="type-h2 mt-6">{status.mode === "development-log" ? "Received (development mode)" : "Thank you."}</h2>
        <p className="type-lead mt-4 max-w-xl text-ink-soft">{status.message}</p>
        {status.mode === "development-log" ? (
          <p className="type-small mt-4 max-w-xl text-ink-soft">
            To deliver real inquiries, set <code className="rounded bg-sand px-1.5 py-0.5">INQUIRY_WEBHOOK_URL</code> — see the README.
          </p>
        ) : null}
        <Button variant="secondary" className="mt-8" onClick={() => setStatus({ state: "idle", message: "" })}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  const loading = status.state === "loading";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-describedby="form-status" className="space-y-10">
      {(status.state === "error" || status.state === "invalid") && (
        <div
          ref={statusRef}
          id="form-status"
          tabIndex={-1}
          role="alert"
          className="flex gap-3 rounded-md border border-danger/30 bg-danger/5 p-4 text-[0.9rem] text-danger outline-none"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          <p>{status.message}</p>
        </div>
      )}

      <fieldset className="space-y-6">
        <legend className="type-eyebrow mb-6 text-ochre-deep">About you</legend>
        <div className="grid gap-6 md:grid-cols-2">
          <Field id="name" label="Full name" error={err("name")}>
            <Input id="name" name="name" autoComplete="name" required value={values.name} onChange={update("name")} aria-invalid={err("name") ? true : undefined} aria-describedby={describe("name")} className={fieldClass} />
          </Field>
          <Field id="email" label="Email address" error={err("email")}>
            <Input id="email" name="email" type="email" inputMode="email" autoComplete="email" required value={values.email} onChange={update("email")} aria-invalid={err("email") ? true : undefined} aria-describedby={describe("email")} className={fieldClass} />
          </Field>
          <Field id="phone" label="Phone number" optional error={err("phone")}>
            <Input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={update("phone")} aria-invalid={err("phone") ? true : undefined} aria-describedby={describe("phone")} className={fieldClass} />
          </Field>
          <Field id="company" label="Company or organisation" optional>
            <Input id="company" name="company" autoComplete="organization" value={values.company} onChange={update("company")} className={fieldClass} />
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-6">
        <legend className="type-eyebrow mb-6 text-ochre-deep">About the event</legend>
        <div className="grid gap-6 md:grid-cols-2">
          <Field id="eventType" label="Type of event" error={err("eventType")}>
            <NativeSelect id="eventType" value={values.eventType} onChange={update("eventType")} options={eventTypes} placeholder="Choose one" error={err("eventType")} />
          </Field>
          <Field id="date" label="Date or timeframe" error={err("date")} hint="An exact date or something like “mid-December”.">
            <Input id="date" name="date" value={values.date} onChange={update("date")} aria-invalid={err("date") ? true : undefined} aria-describedby={describe("date", true)} className={fieldClass} />
          </Field>
          <Field id="location" label="Event location" error={err("location")} hint="Area, venue, or ‘at home’.">
            <Input id="location" name="location" autoComplete="address-level2" value={values.location} onChange={update("location")} aria-invalid={err("location") ? true : undefined} aria-describedby={describe("location", true)} className={fieldClass} />
          </Field>
          <Field id="guests" label="Estimated guests" error={err("guests")}>
            <NativeSelect id="guests" value={values.guests} onChange={update("guests")} options={guestRanges} placeholder="Choose a range" error={err("guests")} />
          </Field>
          <Field id="budget" label="Estimated budget" error={err("budget")} className="md:col-span-2">
            <NativeSelect id="budget" value={values.budget} onChange={update("budget")} options={budgetRanges} placeholder="Choose a range" error={err("budget")} />
          </Field>
          <Field id="details" label="Tell us more" optional error={err("details")} className="md:col-span-2" hint="The occasion, who it's for, ideas you love, anything you're unsure about.">
            <Textarea id="details" name="details" rows={6} value={values.details} onChange={update("details")} aria-invalid={err("details") ? true : undefined} aria-describedby={describe("details", true)} className={cn(fieldClass, "h-auto min-h-40 py-3.5")} />
          </Field>
        </div>
      </fieldset>

      {/* Honeypot: hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={update("website")} />
      </div>

      <div className="space-y-8 border-t border-line pt-8">
        <div>
          <div className="flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={values.consent}
              onCheckedChange={(checked) => update("consent")(checked === true)}
              aria-invalid={err("consent") ? true : undefined}
              aria-describedby={err("consent") ? "consent-error" : undefined}
              className="mt-0.5 size-5 border-ink/40 bg-paper"
            />
            <label htmlFor="consent" className="text-[0.88rem] leading-relaxed text-ink-soft">
              I agree that {site.name} may contact me about this inquiry, as described in the{" "}
              <a href="/privacy-policy" className="underline underline-offset-3 hover:text-ink">
                privacy policy
              </a>
              .
            </label>
          </div>
          {err("consent") ? (
            <p id="consent-error" className="mt-2 flex items-center gap-1.5 pl-8 text-[0.8rem] font-medium text-danger">
              <AlertCircle aria-hidden="true" className="size-3.5" />
              {err("consent")}
            </p>
          ) : null}
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={loading}
          aria-busy={loading || undefined}
          className="w-full justify-between sm:w-auto"
          icon={loading ? <span className="grid size-9 place-items-center"><Loader2 aria-hidden="true" className="size-4 animate-spin" /></span> : undefined}
        >
          {loading ? "Sending…" : "Send inquiry"}
        </Button>
      </div>
    </form>
  );
}

/** Static placeholder shown while search params resolve. */
export function InquiryFormSkeleton() {
  return <div aria-hidden="true" className="h-[1100px] animate-pulse rounded-lg bg-sand/60" />;
}

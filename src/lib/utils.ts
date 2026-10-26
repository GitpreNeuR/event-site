export { cn } from "cn";

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

/** Formats an ISO date (YYYY-MM-DD) for display, e.g. "18 September 2026". */
export function formatDate(isoDate: string): string {
  return dateFormatter.format(new Date(`${isoDate}T00:00:00+05:30`));
}

export function pad(n: number): string {
  return String(n).padStart(2, "0");
}

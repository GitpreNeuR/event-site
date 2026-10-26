export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="flex min-h-[80svh] items-center justify-center pt-(--nav-height)">
      <span className="sr-only">Loading…</span>
      <span aria-hidden="true" className="relative block h-px w-40 overflow-hidden bg-line">
        <span className="absolute inset-y-0 left-0 w-1/3 animate-[loadbar_1.2s_ease-in-out_infinite] bg-ochre" />
      </span>
    </div>
  );
}

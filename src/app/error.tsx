"use client";

import { useEffect } from "react";
import { Button, ButtonLink } from "@/components/shared/Button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[80svh] items-center pt-(--nav-height)">
      <div className="container-page py-24 text-center">
        <p className="type-eyebrow text-ochre-deep">Something went wrong</p>
        <h1 className="type-h1 mx-auto mt-6 max-w-[16ch]">We couldn’t load this page.</h1>
        <p className="type-lead mx-auto mt-6 max-w-lg text-ink-soft">Please try again. If the problem continues, return to the homepage.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button onClick={() => reset()}>Try again</Button>
          <ButtonLink href="/" variant="secondary">
            Home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

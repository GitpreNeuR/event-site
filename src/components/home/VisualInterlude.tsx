import Image from "next/image";
import { Marquee } from "@/components/shared/Marquee";
import { SplitHeading } from "@/components/shared/SplitHeading";

const occasions = ["First birthdays", "Griha pravesh", "Godh bharai", "Sangeet nights", "Leadership summits", "Product reveals", "Milestone dinners", "Mehendi afternoons"];

export function VisualInterlude() {
  return (
    <section className="on-dark grain relative isolate overflow-hidden bg-night text-on-night" aria-label="Our studio palette">
      <div className="relative h-[78svh] min-h-[520px] md:h-[92svh]">
        <div className="absolute -inset-y-[14%] inset-x-0" data-parallax="10">
          <Image src="/images/hero/ballroom-mandap.webp" alt="A ballroom ceremony glowing under a gold chandelier and candlelight" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-night/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-night/50 via-transparent to-night" />
        <div className="container-page relative flex h-full items-center">
          <SplitHeading
            text="Light, *flowers* and the people you love — arranged with intent."
            className="type-h1 mx-auto max-w-[17ch] text-center [text-shadow:0_2px_30px_rgba(22,18,15,0.55)]"
          />
        </div>
      </div>
      <Marquee items={occasions} className="border-t border-night-line py-7 font-display text-[clamp(1.8rem,4vw,3.5rem)] leading-none text-on-night/85 italic" />
    </section>
  );
}

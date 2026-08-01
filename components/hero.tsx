import { ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { hero, primaryCta } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6">
      <div className="mx-auto w-full max-w-5xl text-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-surface/80 py-1.5 pl-2.5 pr-4 text-[12.5px] font-medium text-ink-soft shadow-card backdrop-blur-sm">
            <ShieldCheckIcon size={15} weight="fill" className="text-accent" aria-hidden="true" />
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mx-auto mt-7 max-w-5xl text-[clamp(2.35rem,6.2vw,4.35rem)] font-semibold leading-[1.06] text-ink">
            {hero.headlineLead}{" "}
            <span className="block">
              <span className="relative -mb-1 mr-1 inline-grid h-[0.86em] w-[0.86em] translate-y-[0.1em] place-items-center rounded-[0.24em] bg-accent align-baseline text-accent-ink">
                <ShieldCheckIcon size="58%" weight="fill" aria-hidden="true" />
              </span>{" "}
              {hero.headlineAccent} {hero.headlineTail}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {hero.subtext}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton
              href={primaryCta.href}
              label={primaryCta.label}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            />
            <CtaButton
              href={hero.secondaryCta.href}
              label={hero.secondaryCta.label}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

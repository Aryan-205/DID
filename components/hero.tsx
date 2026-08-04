import { ShieldCheckIcon } from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { hero, primaryCta } from "@/lib/content";

export function Hero() {
  /*
    min-h-dvh only holds from sm up. On a phone a full viewport hero with the
    copy centred in it left a screen of dead space above and below; below sm the
    section is sized by its own content instead.
  */
  return (
    <section className="relative isolate flex items-center px-5 pb-16 pt-42 sm:min-h-dvh sm:px-6 sm:pb-20 sm:pt-28">
      <div className="mx-auto w-full max-w-5xl text-center">
        <Reveal>
          <p className="pill-face inline-flex items-center gap-1.5 rounded-full py-1.5 pl-2 pr-3 text-[11.5px] font-medium text-ink-soft sm:gap-2 sm:pl-2.5 sm:pr-4 sm:text-[12.5px]">
            <ShieldCheckIcon size={15} weight="fill" className="shrink-0 text-accent" aria-hidden="true" />
            {hero.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mx-auto mt-5 max-w-5xl text-[clamp(2.1rem,6.2vw,4.35rem)] font-medium leading-[1.08] text-ink sm:mt-7 sm:leading-[1.06]">
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
          <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-muted sm:mt-6 sm:text-base">
            {hero.subtext}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          {/*
            The pair shares one row and splits it evenly (grow off a zero basis).
            min-width still resolves to the label, so on a narrow phone where the
            two labels cannot both fit the line breaks and each button takes the
            full width instead of the labels overflowing.
          */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:mt-9 sm:gap-3">
            <CtaButton
              href={primaryCta.href}
              label={primaryCta.label}
              variant="primary"
              size="lg"
              className="grow basis-0 sm:grow-0 sm:basis-auto"
            />
            <CtaButton
              href={hero.secondaryCta.href}
              label={hero.secondaryCta.label}
              variant="secondary"
              size="lg"
              className="grow basis-0 sm:grow-0 sm:basis-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

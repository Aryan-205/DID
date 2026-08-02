import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { careersPage, emails } from "@/lib/content";

export function CareersHero() {
  return (
    <section className="wash-hero relative isolate overflow-hidden px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          {/* The header is the same on every page, so the way back home is stated once, here. */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-ink"
          >
            <ArrowLeftIcon
              size={13}
              weight="bold"
              aria-hidden="true"
              className="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-x-0.5"
            />
            Back to home
          </Link>

          <p className="mt-8 text-[13px] font-semibold text-accent">{careersPage.eyebrow}</p>

          <h1 className="mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-[1.06] text-ink">
            {careersPage.heading}
          </h1>

          <div className="mt-7 flex max-w-2xl flex-col gap-4">
            {careersPage.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-[15px] leading-relaxed text-ink-soft sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <CtaButton
              href={`mailto:${emails.recruitment}?subject=Application`}
              label="Send your resume"
              size="lg"
              withIcon
            />
            <CtaButton href="#opening" label="See the open role" variant="secondary" size="lg" />
          </div>
        </Reveal>

        <dl className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {careersPage.stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.06}
              className="rounded-card border border-line/70 bg-surface/70 p-6 shadow-card backdrop-blur-sm"
            >
              <div>
                <dt className="text-[clamp(1.9rem,3.2vw,2.4rem)] font-semibold leading-none tracking-[-0.04em] text-ink tabular-nums">
                  {stat.figure}
                </dt>
                <dd className="mt-3">
                  <span className="block text-[13px] font-semibold text-accent">{stat.label}</span>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-muted">
                    {stat.detail}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Wash } from "@/components/ui/wash";

type Stat = {
  figure: string;
  label: string;
  detail: string;
};

type PageHeroProps = {
  eyebrow: string;
  heading: string;
  intro: readonly string[];
  stats?: readonly Stat[];
  /** The CTA row. Passed in, because every page wants a different pair. */
  children?: ReactNode;
};

/**
 * Shared opening for the routed pages. The site header is identical everywhere,
 * so the way back home is stated once here rather than left to the browser.
 */
export function PageHero({ eyebrow, heading, intro, stats, children }: PageHeroProps) {
  return (
    <section className="relative isolate px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44">
      <Wash variant="hero" />

      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
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

          <p className="mt-8 text-[13px] font-semibold text-accent">{eyebrow}</p>

          <h1 className="mt-4 max-w-3xl text-[clamp(2.2rem,5vw,3.5rem)] font-medium leading-[1.06] text-ink">
            {heading}
          </h1>

          <div className="mt-7 flex max-w-2xl flex-col gap-4">
            {intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-[15px] leading-relaxed text-ink-soft sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {children ? (
            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              {children}
            </div>
          ) : null}
        </Reveal>

        {stats ? (
          <dl className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat, index) => (
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
        ) : null}
      </div>
    </section>
  );
}

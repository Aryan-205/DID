import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { careers, emails, routes } from "@/lib/content";

/**
 * Teaser only. Three figures, the live opening and a route out. The benefits
 * table, workplace commitments, rewards and pay structure are a page of their
 * own at /careers, and repeating any of it here would just make the landing page
 * longer without making the decision to click any easier.
 */
export function Careers() {
  return (
    <section id="careers" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="wash-panel overflow-hidden rounded-card border border-line shadow-card">
            <div className="grid grid-cols-1 gap-x-12 gap-y-12 px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-12 lg:px-14">
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="text-[13px] font-semibold text-accent">{careers.eyebrow}</span>

                <h2 className="mt-4 max-w-lg text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.12] text-ink">
                  {careers.heading}
                </h2>

                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
                  {careers.body}
                </p>

                {/* The one piece of live news worth surfacing before the click. */}
                <SmartLink
                  href={`${routes.careers}#opening`}
                  className="group mt-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 py-1.5 pl-2 pr-4 text-[13px] font-medium text-ink-soft shadow-card backdrop-blur-sm transition-colors duration-200 hover:border-line-strong hover:text-ink"
                >
                  <span className="rounded-full bg-accent-tint px-2.5 py-1 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-accent-tint-ink">
                    Open
                  </span>
                  {careers.nowHiring}
                  <ArrowRightIcon
                    size={13}
                    weight="bold"
                    aria-hidden="true"
                    className="text-faint transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
                  />
                </SmartLink>

                <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                  <CtaButton
                    href={routes.careers}
                    label={careers.ctaLabel}
                    size="lg"
                    withIcon
                  />
                  <CtaButton
                    href={`mailto:${emails.recruitment}?subject=Application`}
                    label="Send your resume"
                    variant="secondary"
                    size="lg"
                  />
                </div>
              </div>

              {/* Three figures, nothing else. The detail behind them lives on /careers. */}
              <dl className="lg:col-span-6 lg:pl-12 lg:border-l lg:border-line flex flex-col divide-y divide-line">
                {careers.highlights.map((highlight, index) => (
                  <div
                    key={highlight.label}
                    className={`flex items-baseline gap-6 ${index === 0 ? "pb-6" : "py-6 last:pb-0"}`}
                  >
                    <dt className="w-[5.5rem] shrink-0 text-[clamp(1.75rem,3vw,2.25rem)] font-semibold leading-none tracking-[-0.04em] text-ink tabular-nums">
                      {highlight.figure}
                    </dt>
                    <dd>
                      <span className="block text-[14.5px] font-semibold tracking-[-0.01em] text-ink">
                        {highlight.label}
                      </span>
                      <span className="mt-1 block text-[13.5px] leading-relaxed text-muted">
                        {highlight.detail}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

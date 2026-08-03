import { ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { caseStudies, engagements, routes } from "@/lib/content";

/**
 * Landing page teaser. Four of the nine documented engagements; the rest, with
 * scope detail, are on /past-performance.
 */
export function CaseStudies() {
  return (
    <section id="work" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">
              Past performance
            </p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.12] text-ink">
              Work delivered to federal process, on federal systems.
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <CtaButton
              href={routes.work}
              label="See all engagements"
              variant="secondary"
              size="lg"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.id} delay={index * 0.06} className="flex">
              <SmartLink
                href={`${routes.work}#${study.id}`}
                className="group flex w-full flex-col rounded-card border border-line bg-surface p-7 shadow-card transition-shadow duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-lift sm:p-8"
              >
                <p className="text-[12.5px] font-medium text-accent">
                  {study.client}
                  {study.location ? (
                    <span className="text-faint"> · {study.location}</span>
                  ) : null}
                </p>

                <h3 className="mt-3 flex items-start gap-2 text-xl font-semibold leading-snug tracking-[-0.02em] text-ink">
                  {study.title}
                  <ArrowUpRightIcon
                    size={15}
                    weight="bold"
                    aria-hidden="true"
                    className="mt-1.5 shrink-0 text-faint transition-[transform,color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </h3>

                <p className="mt-3.5 flex-1 text-[14.5px] leading-relaxed text-muted">
                  {study.summary}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
                  {study.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-accent-tint px-3 py-1.5 text-[12px] font-medium text-accent-tint-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </SmartLink>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8">
            <SmartLink
              href={routes.work}
              className="group inline-flex items-center gap-2 text-[14.5px] font-medium text-ink transition-colors duration-200 hover:text-accent"
            >
              {engagements.length} engagements are documented in full
              <ArrowRightIcon
                size={15}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1"
              />
            </SmartLink>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

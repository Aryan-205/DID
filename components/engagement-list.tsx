import { MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { engagements, workPage } from "@/lib/content";

/**
 * The full dossier. Rows rather than a card grid: nine engagements of uneven
 * length read badly as equal-height tiles, and the meta column is what a reader
 * scanning for a comparable program is actually looking for.
 */
export function EngagementList() {
  return (
    <section id="engagements" className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-card border border-line bg-surface px-6 shadow-card sm:px-10 lg:px-14">
          <ul className="divide-y divide-line">
            {engagements.map((engagement, index) => (
              <Reveal key={engagement.id} as="li" delay={index * 0.03}>
                <article
                  id={engagement.id}
                  className="scroll-mt-28 grid grid-cols-1 gap-x-12 gap-y-6 py-12 lg:grid-cols-12 sm:py-14"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="text-[12px] font-medium text-faint tabular-nums"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[12.5px] font-semibold text-accent">
                        {engagement.discipline}
                      </span>
                    </div>

                    <p className="mt-4 text-[15px] font-semibold tracking-[-0.01em] text-ink">
                      {engagement.client}
                    </p>

                    {engagement.location ? (
                      <p className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-muted">
                        <MapPinIcon
                          size={13}
                          weight="fill"
                          aria-hidden="true"
                          className="text-faint"
                        />
                        {engagement.location}
                      </p>
                    ) : null}

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {engagement.tech.map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-accent-tint px-3 py-1.5 text-[12px] font-medium text-accent-tint-ink"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-8">
                    <h2 className="text-xl font-semibold leading-snug tracking-[-0.02em] text-ink sm:text-[1.4rem]">
                      {engagement.title}
                    </h2>

                    <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
                      {engagement.summary}
                    </p>

                    {engagement.deliverables ? (
                      <div className="mt-6 rounded-tile border border-line bg-sunken p-5 sm:p-6">
                        <p className="text-[12.5px] font-semibold text-accent">On the scope</p>
                        <ul className="mt-3 flex flex-col gap-2.5">
                          {engagement.deliverables.map((deliverable) => (
                            <li
                              key={deliverable}
                              className="flex gap-3 text-[13.5px] leading-relaxed text-ink-soft"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                              />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-[13.5px] leading-relaxed text-faint">{workPage.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

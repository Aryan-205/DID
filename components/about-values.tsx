import { Reveal } from "@/components/ui/reveal";
import { aboutPage, values } from "@/lib/content";

const { valuesIntro } = aboutPage;

/**
 * Six values as a card grid. The landing page renders the same six as a divided
 * list, which is right for a section competing with everything around it; here the
 * values are the section, so each one gets its own surface and its three points
 * get shown rather than joined into a comma list.
 */
export function AboutValues() {
  return (
    <section id="values" className="scroll-mt-28 px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-[13px] font-semibold text-accent">{valuesIntro.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold leading-[1.12] text-ink">
            {valuesIntro.heading}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
            {valuesIntro.body}
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.name} as="li" delay={Math.min(index, 5) * 0.05} className="flex">
              <article className="flex w-full flex-col rounded-card border border-line bg-surface p-7 shadow-card">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-ink">
                    {value.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="text-[12px] font-medium text-faint tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {value.statement}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {value.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full bg-accent-tint px-3 py-1.5 text-[12px] font-medium text-accent-tint-ink"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

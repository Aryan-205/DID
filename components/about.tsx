import { CheckCircleIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { about, company, linkedIn, values } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.12] text-ink">
            {about.heading}
          </h2>
          <div className="mt-6 flex max-w-2xl flex-col gap-4">
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-[15px] leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Leadership */}
          <Reveal className="lg:col-span-5 flex">
            <article className="flex w-full flex-col rounded-card border border-line bg-surface p-2 shadow-card">
              {/*
                TODO: replace with a real headshot of the president, 640x640 minimum.
                Deliberately not using stock photography here: inventing a likeness for a
                named real person is not acceptable placeholder content.
              */}
              <div className="wash-tile grid h-56 shrink-0 place-items-center rounded-tile border border-line/70">
                <span
                  aria-hidden="true"
                  className="text-[2.75rem] font-semibold tracking-tighter text-accent/45"
                >
                  MS
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">
                  {company.president}
                </h3>
                <p className="mt-1 text-[13.5px] text-muted">
                  President, {company.shortName}
                </p>

                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-control border border-line bg-sunken px-3 py-1.5 text-[12.5px] font-medium text-ink-soft transition-colors duration-200 hover:border-line-strong hover:text-ink"
                >
                  <LinkedinLogoIcon size={14} weight="fill" aria-hidden="true" />
                  LinkedIn
                </a>

                <ul className="mt-7 flex flex-col gap-5 border-t border-line pt-6">
                  {about.leaderPoints.map((point) => (
                    <li key={point.title} className="flex gap-3">
                      <CheckCircleIcon
                        size={17}
                        weight="fill"
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span>
                        <span className="block text-[14px] font-medium text-ink">
                          {point.title}
                        </span>
                        <span className="mt-1 block text-[13.5px] leading-relaxed text-muted">
                          {point.body}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          {/* Values */}
          <Reveal delay={0.08} className="lg:col-span-7 flex">
            <div className="flex w-full flex-col rounded-card border border-line bg-surface px-7 py-3 shadow-card sm:px-9 justify-center">
              <ul className="divide-y divide-line">
                {values.map((value) => (
                  <li key={value.name} className="grid gap-1.5 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                      {value.name}
                    </h3>
                    <div>
                      <p className="text-[14.5px] leading-relaxed text-ink-soft">
                        {value.statement}
                      </p>
                      <p className="mt-2 text-[13px] text-faint">{value.points.join(", ")}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

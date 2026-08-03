import { Reveal } from "@/components/ui/reveal";
import { washSurface } from "@/components/ui/wash";
import { aboutPage } from "@/lib/content";

const { story, facts, factsTitle } = aboutPage;

/**
 * The position, argued in prose, with the verifiable facts pulled out alongside it
 * as a spec sheet. Two registers on purpose: the left column is the argument, the
 * right column is the part a contracting officer copies into a form.
 */
export function AboutStory() {
  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12 relative z-10">
        <Reveal className="lg:col-span-7">
          <div>
            <p className="text-[13px] font-semibold text-accent">{story.eyebrow}</p>
            <h2 className="mt-4 max-w-xl text-[clamp(1.9rem,3.6vw,2.7rem)] font-semibold leading-[1.12] text-ink">
              {story.heading}
            </h2>

            <div className="mt-7 flex max-w-xl flex-col gap-5">
              {story.body.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className={`leading-relaxed ${
                    index === 0
                      ? "text-[16.5px] text-ink-soft"
                      : "text-[15px] text-muted"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-5">
          {/* Sticky against the prose, which is the longer column at every width. */}
          <div className="lg:sticky lg:top-28">
            <div
              className="rounded-card border border-line px-6 py-2 shadow-card sm:px-7 bg-white"
            >
              <dl className="divide-y divide-line/80">
                <div className="py-5">
                  <p className="text-[13px] font-semibold text-accent">{factsTitle}</p>
                </div>

                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-6 py-4"
                  >
                    <dt className="shrink-0 text-[13px] text-muted">{fact.label}</dt>
                    <dd className="text-right text-[13.5px] font-medium tracking-[-0.01em] text-ink">
                      {fact.value}
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

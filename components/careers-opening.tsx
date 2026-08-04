import { CheckCircleIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { washSurface } from "@/components/ui/wash";
import { careersPage, emails } from "@/lib/content";

const { opening } = careersPage;

export function CareersOpening() {
  return (
    <section id="opening" className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl relative z-10">
        <Reveal>
          <article className="overflow-hidden rounded-card border border-line bg-surface shadow-card">
            <header
              className="border-b border-line px-6 py-8 sm:px-10 sm:py-10"
            >
              <p className="text-[13px] font-semibold text-accent">{opening.eyebrow}</p>

              <div className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <h2 className="text-[clamp(1.6rem,3vw,2.25rem)] font-medium leading-tight text-ink">
                  {opening.title}
                </h2>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/80 px-3 py-1 text-[12.5px] font-medium text-ink-soft">
                  <MapPinIcon size={13} weight="fill" aria-hidden="true" className="text-faint" />
                  {opening.location}
                </span>
              </div>

              <p className="mt-4 max-w-xl text-[13.5px] leading-relaxed text-muted">{opening.note}</p>
            </header>

            <div className="grid grid-cols-1 gap-x-12 gap-y-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-2">
              <div>
                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                  {opening.dutiesTitle}
                </h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {opening.duties.map((duty) => (
                    <li key={duty} className="flex gap-3">
                      <CheckCircleIcon
                        size={16}
                        weight="fill"
                        aria-hidden="true"
                        className="mt-[3px] shrink-0 text-accent"
                      />
                      <span className="text-[14px] leading-relaxed text-muted">{duty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                  {opening.requirementsTitle}
                </h3>
                <ul className="mt-5 flex flex-col gap-4">
                  {opening.requirements.map((requirement) => (
                    <li
                      key={requirement.slice(0, 32)}
                      className="rounded-tile border border-line bg-sunken px-4 py-3.5 text-[14px] leading-relaxed text-ink-soft"
                    >
                      {requirement}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <CtaButton
                    href={`mailto:${emails.recruitment}?subject=Application%20-%20${encodeURIComponent(opening.title)}`}
                    label={`Apply for ${opening.title}`}
                    size="lg"
                    className="w-full sm:w-auto"
                  />
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

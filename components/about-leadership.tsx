import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { washSurface } from "@/components/ui/wash";
import { about, aboutPage, company, linkedIn } from "@/lib/content";

const { leadership } = aboutPage;

/**
 * Leadership as a wide band rather than the portrait card the landing page uses:
 * on a page this long a second tall card in the same shape would read as a repeat.
 * Same two-layer construction as the segment cards - padded shell, inner tile - so
 * the curves stay concentric without clipping anything.
 */
export function AboutLeadership() {
  return (
    <section id="leadership" className="scroll-mt-28 px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="grid grid-cols-1 gap-2 rounded-panel bg-white p-2 shadow-segment lg:grid-cols-12">
            {/*
              TODO: replace with a real headshot of the president, 640x640 minimum.
              Deliberately not using stock photography: inventing a likeness for a
              named real person is not acceptable placeholder content.
            */}
            <div
              style={washSurface("tile-deep")}
              className="grid place-items-center rounded-shell px-8 py-12 lg:col-span-4"
            >
              <div className="text-center">
                <span
                  aria-hidden="true"
                  className="block text-[3.25rem] font-semibold leading-none tracking-tighter text-accent/45"
                >
                  MS
                </span>
                <p className="mt-6 text-[17px] font-semibold tracking-[-0.02em] text-ink">
                  {company.president}
                </p>
                <p className="mt-1 text-[13.5px] text-muted">President, {company.shortName}</p>

                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 rounded-control border border-line bg-surface/80 px-3 py-1.5 text-[12.5px] font-medium text-ink-soft backdrop-blur-sm transition-colors duration-200 hover:border-line-strong hover:text-ink"
                >
                  <LinkedinLogoIcon size={14} weight="fill" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:col-span-8">
              <p className="text-[13px] font-semibold text-accent">{leadership.eyebrow}</p>
              <h2 className="mt-4 max-w-lg text-[clamp(1.7rem,3vw,2.3rem)] font-semibold leading-[1.14] text-ink">
                {leadership.heading}
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                {leadership.body}
              </p>

              <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 border-t border-line pt-8 sm:grid-cols-3">
                {about.leaderPoints.map((point) => (
                  <div key={point.title}>
                    <dt className="text-[13.5px] font-semibold tracking-[-0.01em] text-ink">
                      {point.title}
                    </dt>
                    <dd className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                      {point.body}
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

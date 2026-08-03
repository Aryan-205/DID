import { Reveal } from "@/components/ui/reveal";
import { washSurface } from "@/components/ui/wash";
import { processPage, servicesPage } from "@/lib/content";

const { delivery } = processPage;
const { steps, body } = servicesPage.approach;

/**
 * The four delivery movements, read across rather than down: each column carries
 * the movement and, under a rule, the artifact it hands over. /services states the
 * same four movements as a summary; the artifact row is what makes this the
 * version worth reading, because it is the part a client can actually check.
 */
export function ProcessDelivery() {
  return (
    <section id="delivery" className="scroll-mt-28 px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-card border border-line bg-surface px-6 py-14 shadow-card sm:px-10 sm:py-16 lg:px-14">
          <Reveal>
            <p className="text-[13px] font-semibold text-accent">{delivery.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.12] text-ink">
              {delivery.heading}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">{body}</p>
          </Reveal>

          <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.name} as="li" delay={index * 0.07}>
                {/*
                  The rule doubles as the connector: at four columns the top borders
                  line up into one track across the row, with the marker sitting on it.
                */}
                <div className="border-t border-line pt-6">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="grid h-7 w-7 place-items-center rounded-full bg-accent text-[11px] font-semibold tabular-nums text-accent-ink"
                    >
                      {index + 1}
                    </span>
                    <h3 className="text-[16px] font-semibold tracking-[-0.015em] text-ink">
                      {step.name}
                    </h3>
                  </div>

                  <p className="mt-4 text-[14px] leading-relaxed text-muted">{step.detail}</p>

                  <div
                    style={washSurface("tile")}
                    className="mt-6 rounded-tile border border-line/70 p-4"
                  >
                    <p className="text-[11.5px] font-semibold uppercase tracking-[0.06em] text-accent">
                      Hands over
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                      {delivery.artifacts[step.name]}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.1}>
            <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-6 border-t border-line pt-10 lg:grid-cols-12">
              <p className="text-[13px] font-semibold text-accent lg:col-span-4">
                After implementation
              </p>
              <p className="text-[14.5px] leading-relaxed text-ink-soft lg:col-span-8">
                {delivery.handoverNote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

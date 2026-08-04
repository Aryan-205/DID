import { Reveal } from "@/components/ui/reveal";
import { processPhases, processPage } from "@/lib/content";

const { screening } = processPage;

/*
  Numbering runs straight through the phase boundaries, so each step carries its
  position in the twelve rather than its position in its own phase. Derived from
  the phase lengths rather than written down, so the count cannot drift from the
  list, and computed once at module scope because the source data is static.
*/
const numberedPhases = processPhases.map((phase, phaseIndex) => {
  const offset = processPhases
    .slice(0, phaseIndex)
    .reduce((total, previous) => total + previous.steps.length, 0);

  return {
    name: phase.name,
    intent: phase.intent,
    steps: phase.steps.map((step, stepIndex) => ({ step, number: offset + stepIndex + 1 })),
  };
});

const totalSteps = processPhases.reduce((total, phase) => total + phase.steps.length, 0);

/**
 * The twelve steps as one continuous rail rather than four parallel columns.
 * The landing page teaser already shows the phases side by side; here the point
 * is that the steps are sequential, so the numbering runs 01 to 12 straight
 * through the phase boundaries and the phase label sticks alongside its own steps.
 */
export function ProcessScreening() {
  return (
    <section id="screening" className="scroll-mt-28 px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl relative z-10">
        <Reveal>
          <p className="text-[13px] font-semibold text-accent">{screening.eyebrow}</p>
          <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.12] text-ink">
            {screening.heading}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">{screening.body}</p>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {numberedPhases.map((phase, phaseIndex) => (
            <div
              key={phase.name}
              className={`grid grid-cols-1 gap-x-12 gap-y-8 py-12 lg:grid-cols-12 ${
                phaseIndex > 0 ? "border-t border-line" : ""
              }`}
            >
              <Reveal className="lg:col-span-4">
                {/* Sticky, so the phase stays named while its own steps scroll past. */}
                <div className="lg:sticky lg:top-28">
                  <p className="text-[12px] font-medium text-faint tabular-nums">
                    Phase {String(phaseIndex + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-[1.55rem] font-semibold tracking-[-0.02em] text-ink">
                    {phase.name}
                  </h3>
                  <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted">
                    {phase.intent}
                  </p>
                  <p className="mt-5 text-[12.5px] font-medium text-faint">
                    {phase.steps.length} of {totalSteps} steps
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.08} className="lg:col-span-8">
                <ol className="relative ml-[13px] border-l border-line">
                  {phase.steps.map(({ step, number }, stepIndex) => (
                    <li key={step} className="relative pb-7 pl-8 last:pb-0">
                      <span
                        aria-hidden="true"
                        className="absolute -left-[13px] top-0 grid h-[26px] w-[26px] place-items-center rounded-full border border-line bg-surface text-[10.5px] font-semibold tabular-nums text-accent shadow-card"
                      >
                        {String(number).padStart(2, "0")}
                      </span>
                      <p
                        className={`-mt-0.5 text-[15px] leading-relaxed ${
                          stepIndex === 0 ? "text-ink" : "text-ink-soft"
                        }`}
                      >
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={0.06}>
          <p className="mt-10 max-w-2xl rounded-card border border-line bg-sunken p-6 text-[14px] leading-relaxed text-ink-soft sm:p-7">
            {screening.closingNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

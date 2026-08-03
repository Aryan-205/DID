import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { processPhases, routes } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-card border border-line bg-surface px-6 py-14 shadow-card sm:px-10 sm:py-16 lg:px-14">
          <Reveal>
            <h2 className="max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.12] text-ink">
              Twelve steps before anyone reaches your team.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              Our screening is deliberately rigorous, because a placement that cannot do the work
              is not a saving. Every candidate moves through four phases.
            </p>

            {/* The teaser stops at the phases; /process carries the reasoning and the delivery side. */}
            <Link
              href={routes.process}
              className="group mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-accent"
            >
              See the full process
              <ArrowRightIcon
                size={14}
                weight="bold"
                aria-hidden="true"
                className="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {processPhases.map((phase, index) => (
              <Reveal key={phase.name} delay={index * 0.07}>
                <div className="border-t-2 border-accent pt-5">
                  <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                    {phase.name}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3.5">
                    {phase.steps.map((step) => (
                      <li key={step} className="text-[14px] leading-relaxed text-muted">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

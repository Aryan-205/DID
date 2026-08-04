import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { servicesPage } from "@/lib/content";

const { approach } = servicesPage;

export function ServicesApproach() {
  return (
    <section id="approach" className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-card border border-line bg-surface px-6 py-14 shadow-card sm:px-10 sm:py-16 lg:px-14">
          <Reveal>
            <h2 className="max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.12] text-ink">
              {approach.heading}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">{approach.body}</p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {approach.steps.map((step, index) => (
              <Reveal key={step.name} delay={index * 0.07}>
                <div className="border-t-2 border-accent pt-5">
                  <p
                    aria-hidden="true"
                    className="text-[12px] font-medium text-faint tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[15px] font-semibold tracking-[-0.01em] text-ink">
                    {step.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-card border border-line bg-sunken p-7 sm:flex-row sm:items-center sm:p-8">
              <p className="max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">
                {approach.feedbackNote}
              </p>
              <SmartLink
                href="/#process"
                className="group inline-flex shrink-0 items-center gap-2 text-[14px] font-medium text-accent"
              >
                See the screening process
                <ArrowRightIcon
                  size={14}
                  weight="bold"
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
                />
              </SmartLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { ArrowRightIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { careersPage, emails } from "@/lib/content";

const { apply } = careersPage;

export function CareersApply() {
  return (
    <section
      id="apply"
      className="wash-closing relative isolate overflow-hidden px-4 py-28 sm:px-6 sm:py-36"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="text-center">
            <h2 className="mx-auto max-w-2xl text-[clamp(2.1rem,4.4vw,3.4rem)] font-semibold leading-[1.1] text-ink">
              {apply.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {apply.body}
            </p>
            <div className="mt-9 flex justify-center">
              <CtaButton
                href={`mailto:${emails.recruitment}?subject=Application`}
                label="Send your resume"
                withIcon
              />
            </div>
            <a
              href={`mailto:${emails.recruitment}?subject=Application`}
              className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
            >
              <EnvelopeSimpleIcon size={15} weight="fill" aria-hidden="true" />
              {emails.recruitment}
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal className="flex">
            <address className="flex w-full flex-col rounded-card border border-line bg-surface/80 p-7 not-italic shadow-card backdrop-blur-sm sm:p-8">
              <h3 className="text-[13px] font-semibold text-accent">{apply.postalLabel}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">
                {apply.postal.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          </Reveal>

          <Reveal delay={0.07} className="flex">
            <div className="flex w-full flex-col justify-between gap-6 rounded-card border border-line bg-surface/80 p-7 shadow-card backdrop-blur-sm sm:p-8">
              <p className="text-[15px] leading-relaxed text-ink-soft">{apply.processNote}</p>
              <SmartLink
                href="/#process"
                className="group inline-flex w-fit items-center gap-2 text-[14px] font-medium text-accent"
              >
                See the twelve steps
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

import { EnvelopeSimpleIcon, PhoneIcon, PrinterIcon } from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { closing, offices, primaryCta } from "@/lib/content";

export function Closing() {
  return (
    <section id="contact" className="wash-closing relative isolate overflow-hidden px-4 py-28 sm:px-6 sm:py-36">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="text-center">
            <h2 className="mx-auto max-w-2xl text-[clamp(2.1rem,4.4vw,3.4rem)] font-semibold leading-[1.1] text-ink">
              {closing.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft sm:text-base">
              {closing.body}
            </p>
            <div className="mt-9 flex justify-center">
              <CtaButton href={primaryCta.href} label={primaryCta.label} withIcon />
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2">
          {offices.map((office, index) => (
            <Reveal key={office.label} delay={index * 0.07} className="flex">
              <address className="flex w-full flex-col rounded-card border border-line bg-surface/80 p-7 not-italic shadow-card backdrop-blur-sm sm:p-8">
                <h3 className="text-[13px] font-semibold text-accent">{office.label}</h3>

                <p className="mt-4 text-[15px] leading-relaxed text-ink">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <ul className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
                  <li>
                    <a
                      href={office.phoneHref}
                      className="inline-flex items-center gap-2.5 text-[14px] text-ink-soft transition-colors duration-200 hover:text-accent"
                    >
                      <PhoneIcon size={15} weight="fill" aria-hidden="true" className="text-faint" />
                      {office.phone}
                    </a>
                  </li>

                  {office.fax ? (
                    <li className="inline-flex items-center gap-2.5 text-[14px] text-ink-soft">
                      <PrinterIcon size={15} weight="fill" aria-hidden="true" className="text-faint" />
                      {office.fax}
                    </li>
                  ) : null}

                  <li>
                    <a
                      href={`mailto:${office.email}`}
                      className="inline-flex items-center gap-2.5 text-[14px] text-ink-soft transition-colors duration-200 hover:text-accent"
                    >
                      <EnvelopeSimpleIcon
                        size={15}
                        weight="fill"
                        aria-hidden="true"
                        className="text-faint"
                      />
                      {office.email}
                    </a>
                  </li>
                </ul>
              </address>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { careers, emails } from "@/lib/content";

export function Careers() {
  return (
    <section id="careers" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.12] text-ink">
            {careers.heading}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">{careers.body}</p>
        </Reveal>

        {/* Benefits read as plain typography. Six boxes here would add nothing. */}
        <dl className="mt-14 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {careers.benefits.map((benefit, index) => (
            <Reveal key={benefit.name} delay={index * 0.05}>
              <div>
                <dt className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                  {benefit.name}
                </dt>
                <dd className="mt-2 text-[14px] leading-relaxed text-muted">{benefit.detail}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-card border border-line bg-surface p-7 shadow-card sm:flex-row sm:items-center sm:p-8">
            <p className="text-[15px] leading-relaxed text-ink-soft">
              {careers.applyNote}{" "}
              <a
                href={`mailto:${emails.recruitment}?subject=Application`}
                className="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {emails.recruitment}
              </a>
            </p>
            <CtaButton
              href={`mailto:${emails.recruitment}?subject=Application`}
              label="Send your resume"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

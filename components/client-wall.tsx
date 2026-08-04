import { CtaButton } from "@/components/ui/cta-button";
import { ClientLogo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import { clientWall, clients, primaryCta } from "@/lib/content";

export function ClientWall() {
  return (
    <section id="clients" className="px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        {/*
          Header row. The right column carries a real control rather than a
          floating explainer paragraph, so the split is doing actual work.
        */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <div>
              <h2 className="max-w-xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-normal leading-[1.14] text-muted">
                {clientWall.headingLead}{" "}
                <span className="font-medium text-ink">{clientWall.headingAccent}</span>{" "}
                {clientWall.headingTail}
              </h2>
              <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-muted">
                {clientWall.body}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <CtaButton href={primaryCta.href} label={primaryCta.label} size="lg" />
          </Reveal>
        </div>

        <div className="mt-12 rounded-panel bg-sunken p-2 ring-1 ring-line/70">
          <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((client, index) => (
              <Reveal key={client.name} as="li" delay={Math.min(index, 6) * 0.04} className="flex">
                <div className="group flex min-w-0 flex-1 items-center justify-center rounded-tile bg-white px-4 py-6 shadow-[0_1px_2px_rgb(13_20_32/0.05)] ring-1 ring-line/60 transition duration-200 ease-out hover:shadow-card hover:ring-line-strong">
                  <ClientLogo name={client.name} logo={client.logo} variant="wordmark" />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

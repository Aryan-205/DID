import { Reveal } from "@/components/ui/reveal";
import { washSurface } from "@/components/ui/wash";
import { careersPage } from "@/lib/content";

const { benefits, leave, worklife } = careersPage;

export function CareersBenefits() {
  return (
    <section id="benefits" className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.12] text-ink">
            {benefits.heading}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">{benefits.body}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Insurance, as a plain two column table. Six cards would add nothing. */}
          <Reveal className="lg:col-span-7 flex">
            <div className="flex w-full flex-col rounded-card border border-line bg-surface px-7 py-3 shadow-card sm:px-9">
              <dl className="divide-y divide-line">
                {benefits.items.map((item) => (
                  <div key={item.name} className="grid gap-1.5 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <dt className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                      {item.name}
                    </dt>
                    <dd className="text-[14px] leading-relaxed text-muted">{item.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <Reveal delay={0.08} className="flex">
              <div className="w-full rounded-card border border-line bg-surface p-7 shadow-card sm:p-8">
                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                  {leave.heading}
                </h3>
                <dl className="mt-6 flex flex-col gap-5">
                  {leave.items.map((item) => (
                    <div key={item.name}>
                      <dt className="text-[14px] font-medium text-ink">{item.name}</dt>
                      <dd className="mt-1 text-[13.5px] leading-relaxed text-muted">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.14} className="flex">
              <div
                style={washSurface("tile")}
                className="w-full rounded-card border border-line p-7 shadow-card sm:p-8"
              >
                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                  {worklife.heading}
                </h3>
                <ul className="mt-5 flex flex-col gap-3">
                  {worklife.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[13.5px] leading-relaxed text-ink-soft"
                    >
                      <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="flex">
              <div className="w-full rounded-card border border-line bg-sunken p-6">
                <p className="text-[12.5px] font-semibold text-accent">{benefits.support.label}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                  {benefits.support.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

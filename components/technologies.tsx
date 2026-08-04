import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { technologies, technologiesIntro } from "@/lib/content";

export function Technologies() {
  // Counted from the data, so the figure cannot drift when the list is edited.
  const platformCount = technologies.reduce((total, group) => total + group.items.length, 0);

  return (
    <section
      id="platforms"
      className="px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
          {/*
            The heading holds its own column rather than sitting above a four-up
            grid. It gives the list something to be read against, and it stops the
            longest group from setting the measure for everything else.
          */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-[13px] font-semibold text-accent">{technologiesIntro.eyebrow}</p>

              <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.12] text-ink">
                {technologiesIntro.heading}
              </h2>

              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                {technologiesIntro.body}
              </p>

              <dl className="mt-8 flex items-baseline gap-8 border-t border-line pt-6">
                <div>
                  <dt className="text-[clamp(1.6rem,2.6vw,2rem)] font-semibold leading-none tracking-[-0.04em] text-ink tabular-nums">
                    {platformCount}
                  </dt>
                  <dd className="mt-2 text-[13px] text-muted">Platforms on record</dd>
                </div>
                <div>
                  <dt className="text-[clamp(1.6rem,2.6vw,2rem)] font-semibold leading-none tracking-[-0.04em] text-ink tabular-nums">
                    {technologies.length}
                  </dt>
                  <dd className="mt-2 text-[13px] text-muted">Disciplines covered</dd>
                </div>
              </dl>

              <SmartLink
                href={technologiesIntro.linkHref}
                className="group mt-7 inline-flex items-center gap-2 text-[14px] font-medium text-accent"
              >
                {technologiesIntro.linkLabel}
                <ArrowRightIcon
                  size={14}
                  weight="bold"
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
                />
              </SmartLink>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.08}>
              <div className="rounded-card border border-line bg-surface px-6 shadow-card sm:px-9">
                <ul className="divide-y divide-line">
                  {technologies.map((group, index) => (
                    <li
                      key={group.group}
                      className="grid gap-x-8 gap-y-4 py-8 sm:grid-cols-[13rem_1fr]"
                    >
                      <div>
                        <h3 className="flex items-baseline gap-2.5 text-[15px] font-semibold tracking-[-0.01em] text-ink">
                          <span
                            aria-hidden="true"
                            className="text-[12px] font-medium text-faint tabular-nums"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {group.group}
                        </h3>
                        <p className="mt-2 text-[13px] leading-relaxed text-muted">
                          {group.detail}
                        </p>
                      </div>

                      {/* Passive tags, so full radius per the shape system. */}
                      <ul className="flex flex-wrap content-start gap-2">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-line bg-sunken px-3.5 py-1.5 text-[13px] font-medium text-ink-soft"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-2xl text-[13.5px] leading-relaxed text-faint">
                {technologiesIntro.note}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

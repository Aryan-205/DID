import {
  BrowsersIcon,
  GraduationCapIcon,
  StackIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
// Type-only, so it is erased at compile time and pulls in no client runtime.
import type { Icon } from "@phosphor-icons/react";
import { Reveal } from "@/components/ui/reveal";
import { washSurface } from "@/components/ui/wash";
import { services } from "@/lib/content";

const icons: Record<string, Icon> = {
  "it-staffing": UsersThreeIcon,
  "software-development": StackIcon,
  training: GraduationCapIcon,
  "web-services": BrowsersIcon,
};

export function ServicesDetail() {
  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl relative z-10">
        {/* Jump strip. Four service lines is short enough to index in one row. */}
        <Reveal>
          <nav aria-label="Service lines" className="border-y border-line py-4">
            <ul className="flex flex-wrap items-center gap-x-2 gap-y-2">
              {services.map((service, index) => (
                <li key={service.id} className="flex items-center gap-2">
                  {index > 0 ? (
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line-strong" />
                  ) : null}
                  <a
                    href={`#${service.id}`}
                    className="rounded-control px-2.5 py-1.5 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        <div className="flex flex-col">
          {services.map((service, index) => {
            const IconComponent = icons[service.id]!;
            // Alternating column order, so four blocks in sequence keep a rhythm.
            const flipped = index % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.id}
                className={`scroll-mt-28 grid grid-cols-1 gap-x-12 gap-y-8 py-16 lg:grid-cols-12 sm:py-20 ${
                  index > 0 ? "border-t border-line" : ""
                }`}
              >
                <Reveal className={`lg:col-span-5 ${flipped ? "lg:order-2" : ""}`}>
                  <div className="flex items-center gap-4">
                    <span
                      style={washSurface(service.tone === "deep" ? "tile-deep" : "tile")}
                      className="grid h-14 w-14 place-items-center rounded-tile border border-line/70 text-accent"
                    >
                      <IconComponent size={24} weight="duotone" aria-hidden="true" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[12px] font-medium text-faint tabular-nums"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="mt-6 text-[clamp(1.6rem,2.8vw,2.1rem)] font-medium leading-tight text-ink">
                    {service.name}
                  </h2>

                  <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
                    {service.summary}
                  </p>

                  <div className="mt-5 flex flex-col gap-4">
                    {service.detail.body.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 32)}
                        className="text-[14.5px] leading-relaxed text-muted"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.08} className={`lg:col-span-7 flex ${flipped ? "lg:order-1" : ""}`}>
                  <div className="flex w-full flex-col gap-4">
                    <div className="rounded-card border border-line bg-surface px-7 py-3 shadow-card sm:px-9">
                      <h3 className="sr-only">{service.detail.listTitle}</h3>
                      <dl className="divide-y divide-line">
                        <div className="py-5">
                          <p className="text-[13px] font-semibold text-accent">
                            {service.detail.listTitle}
                          </p>
                        </div>
                        {service.detail.items.map((item) => (
                          <div
                            key={item.name}
                            className="grid gap-1.5 py-6 sm:grid-cols-[11rem_1fr] sm:gap-6"
                          >
                            <dt className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                              {item.name}
                            </dt>
                            <dd className="text-[14px] leading-relaxed text-muted">
                              {item.detail}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {service.detail.chips ? (
                      <div className="rounded-card border border-line bg-sunken p-6 sm:p-7">
                        <p className="text-[13px] font-semibold text-accent">
                          {service.detail.chipsTitle}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {service.detail.chips.map((chip) => (
                            <li
                              key={chip}
                              className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-ink-soft"
                            >
                              {chip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  ArrowUpRightIcon,
  BrowsersIcon,
  GraduationCapIcon,
  StackIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
// Type-only, so it is erased at compile time and pulls in no client runtime.
import type { Icon } from "@phosphor-icons/react";
import { CtaButton } from "@/components/ui/cta-button";
import { Reveal } from "@/components/ui/reveal";
import { SmartLink } from "@/components/ui/smart-link";
import { routes, services } from "@/lib/content";

const icons: Record<string, Icon> = {
  "it-staffing": UsersThreeIcon,
  "software-development": StackIcon,
  training: GraduationCapIcon,
  "web-services": BrowsersIcon,
};

/** Asymmetric spans give the grid rhythm. Four items, four cells, no dead space. */
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

/**
 * Landing page teaser. Name and summary only; what each service line actually
 * covers, and how the work runs, lives on /services.
 */
export function Services() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <Reveal>
            <p className="text-[13px] font-semibold text-accent">Services</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.12] text-ink">
              Staffing, software and training under one contract.
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <CtaButton
              href={routes.services}
              label="Explore services"
              variant="secondary"
              size="lg"
            />
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {services.map((service, index) => {
            const IconComponent = icons[service.id]!;

            return (
              <Reveal
                key={service.id}
                delay={index * 0.06}
                className={`${spans[index]} flex`}
              >
                <SmartLink
                  href={`${routes.services}#${service.id}`}
                  className="group flex w-full flex-col overflow-hidden rounded-card border border-line bg-surface p-2 shadow-card transition-shadow duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-lift"
                >
                  <div
                    className={`${
                      service.tone === "deep" ? "wash-tile-deep" : "wash-tile"
                    } grid h-40 shrink-0 place-items-center rounded-tile border border-line/70 sm:h-48`}
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-surface text-accent shadow-card transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-1">
                      <IconComponent size={26} weight="duotone" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="flex items-center gap-2 text-lg font-semibold tracking-[-0.02em] text-ink">
                      {service.name}
                      <ArrowUpRightIcon
                        size={15}
                        weight="bold"
                        aria-hidden="true"
                        className="text-faint transition-[transform,color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-px group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </h3>
                    <p className="mt-2.5 max-w-prose text-[14.5px] leading-relaxed text-muted">
                      {service.summary}
                    </p>
                  </div>
                </SmartLink>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

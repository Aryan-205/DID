import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { aboutPage, routes } from "@/lib/content";

const { next } = aboutPage;

/**
 * An about page makes claims; the rest of the site is where they are checked. This
 * is the one block on the site that sends a reader away from the page on purpose,
 * so the destinations are described by what they prove rather than by their titles.
 */
const destinations = [
  {
    label: "Services",
    href: routes.services,
    detail: "The four lines in full, and how each engagement is structured.",
  },
  {
    label: "Past performance",
    href: routes.work,
    detail: "Nine engagements, named where we are free to name them.",
  },
  {
    label: "Process",
    href: routes.process,
    detail: "Twelve screening steps and four delivery movements, published.",
  },
  {
    label: "Careers",
    href: routes.careers,
    detail: "What the firm offers the people it asks all this of.",
  },
] as const;

export function AboutNext() {
  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-3 border-b border-line pb-8">
            <h2 className="text-[1.4rem] font-semibold tracking-[-0.02em] text-ink">
              {next.heading}
            </h2>
            <p className="max-w-xl text-[14.5px] leading-relaxed text-muted">{next.body}</p>
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 sm:grid-cols-2">
          {destinations.map((destination, index) => (
            <Reveal key={destination.href} as="li" delay={index * 0.06} className="flex">
              <Link
                href={destination.href}
                className="group flex w-full items-start justify-between gap-6 border-b border-line px-2 py-8 transition-colors duration-300 hover:bg-sunken sm:px-6"
              >
                <span>
                  <span className="block text-[16.5px] font-semibold tracking-[-0.015em] text-ink">
                    {destination.label}
                  </span>
                  <span className="mt-2 block max-w-xs text-[13.5px] leading-relaxed text-muted">
                    {destination.detail}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink-soft transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px"
                >
                  <ArrowUpRightIcon size={14} weight="bold" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { BankIcon, BuildingsIcon, HandshakeIcon } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { ClientLogo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import { SegmentVisual } from "@/components/ui/segment-visual";
import { Wash, washSurface } from "@/components/ui/wash";
import { platforms, segments } from "@/lib/content";

const icons: Record<string, Icon> = {
  bank: BankIcon,
  handshake: HandshakeIcon,
  buildings: BuildingsIcon,
};

/**
 * One copy of the brand line. Two of these sit inside the marquee track, so the
 * -50% keyframe lands exactly on the start of the second copy and the loop is
 * seamless. Trailing padding matches the internal gap so spacing stays even
 * across the seam.
 */
function BrandRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-x-12 pr-12 sm:gap-x-16 sm:pr-16 py-4"
    >
      {[...platforms, ...platforms].map((platform, index) => (
        <li key={`${platform}-${index}`} className="shrink-0">
          <ClientLogo name={platform} />
        </li>
      ))}
    </ul>
  );
}

export function Segments() {
  return (
    <section
      id="segments"
      className="relative isolate px-4 pb-24 pt-6 sm:px-6 sm:pb-32"
    >
      <Wash variant="segments" />

      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-center text-[13px] font-medium text-muted">Platforms we work on</p>
        </Reveal>

        <Reveal delay={0.06}>
          {/* Edge fade comes from a mask, so the logos dissolve rather than clip. */}
          <div className="marquee mt-8 overflow-hidden">
            <div className="marquee-track">
              <BrandRow />
              <BrandRow ariaHidden />
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {segments.map((segment, index) => {
            const IconComponent = icons[segment.icon]!;

            return (
              <Reveal key={segment.id} delay={index * 0.07} className="flex">
                <article className="flex w-full flex-col rounded-panel bg-white p-2 shadow-segment">
                  
                  <div
                    style={washSurface("tile-sky")}
                    className="h-56 shrink-0 overflow-hidden rounded-shell sm:h-52"
                  >
                    <SegmentVisual
                      id={segment.id}
                      icon={<IconComponent size={26} weight="duotone" />}
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-6 pt-6">
                    <h3 className="text-base font-semibold tracking-[-0.015em] text-ink">
                      {segment.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{segment.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

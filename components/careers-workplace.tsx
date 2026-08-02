import { CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { careersPage } from "@/lib/content";

const { workplace } = careersPage;

export function CareersWorkplace() {
  return (
    <section id="workplace" className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="overflow-hidden rounded-card border border-line bg-surface px-6 py-14 shadow-card sm:px-10 sm:py-16 lg:px-14">
          <Reveal>
            <h2 className="max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.12] text-ink">
              {workplace.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">{workplace.body}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="mt-14 border-t-2 border-accent pt-5 text-[15px] font-semibold tracking-[-0.01em] text-ink">
              {workplace.vowsTitle}
            </h3>
          </Reveal>

          <ul className="mt-8 grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2">
            {workplace.vows.map((vow, index) => (
              <Reveal key={vow.slice(0, 32)} delay={index * 0.04} as="li">
                <div className="flex gap-3">
                  <CheckCircleIcon
                    size={17}
                    weight="fill"
                    aria-hidden="true"
                    className="mt-[3px] shrink-0 text-accent"
                  />
                  <span className="text-[14px] leading-relaxed text-ink-soft">{vow}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

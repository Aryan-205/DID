import { Reveal } from "@/components/ui/reveal";
import { processPage } from "@/lib/content";

const { principles } = processPage;

/**
 * What both processes have in common, stated as three positions rather than as
 * more steps. Deliberately the plainest block on the page: after twelve numbered
 * steps and four numbered movements, a fifth numbered grid would read as noise.
 */
export function ProcessPrinciples() {
  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.name} delay={index * 0.07}>
              <div className="flex flex-col">
                <span
                  aria-hidden="true"
                  className="text-[2.6rem] font-semibold leading-none tracking-[-0.05em] text-wash-blue-deep tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-5 text-[17px] font-semibold leading-snug tracking-[-0.015em] text-ink">
                  {principle.name}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{principle.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

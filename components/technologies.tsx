import { Reveal } from "@/components/ui/reveal";
import { technologies } from "@/lib/content";

export function Technologies() {
  return (
    <section className="border-y border-line bg-sunken px-4 py-24 sm:px-6 sm:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.12] text-ink">
            The platforms our engagements actually run on.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((group, index) => (
            <Reveal key={group.group} delay={index * 0.06}>
              <div>
                <h3 className="text-[13px] font-semibold text-ink">{group.group}</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="px-3.5 py-2 text-[13px] font-medium text-ink-soft border border-neutral-300 rounded-2xl"
                    >
                    {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

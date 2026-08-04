import { Reveal } from "@/components/ui/reveal";
import { careersPage } from "@/lib/content";

const { rewards, growth, pay } = careersPage;

export function CareersRewards() {
  return (
    <section id="rewards" className="px-4 pb-24 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.12] text-ink">
            {rewards.heading}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">{rewards.body}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {rewards.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.07} className="flex">
              <article className="flex w-full flex-col rounded-card border border-line bg-surface p-7 shadow-card sm:p-8">
                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-ink">
                  {item.name}
                </h3>
                <p className="mt-4 text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold leading-none tracking-[-0.03em] text-accent">
                  {item.figure}
                </p>
                <p className="mt-5 text-[14px] leading-relaxed text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Growth and pay are prose, not products, so they read as typography. */}
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">{growth.heading}</h3>
              <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-muted">{growth.body}</p>
            </Reveal>

            <dl className="mt-9 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-3">
              {growth.items.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.05}>
                  <div className="border-t border-line pt-4">
                    <dt className="text-[14px] font-semibold tracking-[-0.01em] text-ink">
                      {item.name}
                    </dt>
                    <dd className="mt-2 text-[13.5px] leading-relaxed text-muted">{item.detail}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink">{pay.heading}</h3>
            </Reveal>

            <dl className="mt-9 flex flex-col gap-7">
              {pay.items.map((item, index) => (
                <Reveal key={item.name} delay={0.08 + index * 0.05}>
                  <div className="border-t border-line pt-4">
                    <dt className="text-[14px] font-semibold tracking-[-0.01em] text-ink">
                      {item.name}
                    </dt>
                    <dd className="mt-2 text-[13.5px] leading-relaxed text-muted">{item.detail}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

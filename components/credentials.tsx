import { Reveal } from "@/components/ui/reveal";
import { getCredentials } from "@/lib/content";

export function Credentials() {
  const credentials = getCredentials();

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 bg-white">
      <div className="mx-auto w-full max-w-6xl">
        {/* Plain stat row. No card containers, the numbers carry themselves. */}
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
          {credentials.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06} className="bg-linear-to-br from-wash-blue/80 via-white to-wash-sky/40 shadow-[0_0_2px_1px_rgba(0,0,0,0.1)] rounded-2xl p-4">
              <div>
                <dt className="text-[clamp(2rem,3.4vw,2.6rem)] font-semibold leading-none tracking-[-0.04em] text-ink tabular-nums">
                  {item.figure}
                </dt>
                <dd className="mt-3">
                  <span className="block text-[13px] font-semibold text-accent">{item.label}</span>
                  <span className="mt-1 block text-[13.5px] leading-relaxed text-muted">
                    {item.detail}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

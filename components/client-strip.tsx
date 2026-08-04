import { ClientLogo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import { clients } from "@/lib/content";

export function ClientStrip() {
  return (
    <section id="clients" className="px-4 pb-24 pt-4 sm:px-6 sm:pb-32">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <p className="text-center text-[13px] font-medium text-faint">Clients include</p>
        </Reveal>

        <Reveal delay={0.08}>
          {/*
            Twelve cells. Divides evenly at 2, 3 and 4 columns, so no breakpoint
            leaves a ragged final row.
          */}
          <ul className="mt-8 grid grid-cols-2 overflow-hidden rounded-card border-l border-t border-line sm:grid-cols-3 lg:grid-cols-4 bg-red-500 p-2">
            {clients.map((client) => (
              <li
                key={client.name}
                className="group flex min-w-0 items-center justify-center rounded-2xl bg-white px-4 py-6"
              >
                <ClientLogo name={client.name} logo={client.logo} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

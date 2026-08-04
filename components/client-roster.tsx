import { ClientLogo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import { clientRoster, clients } from "@/lib/content";

/**
 * The client marks on /past-performance, sitting under the dossier.
 *
 * Deliberately not the home page's wall. That one is a headline block with its own
 * CTA; running it again here would read as a repeat of the pitch rather than as
 * evidence for the engagements above it. So: no heading, no button, six across
 * instead of four, and smaller marks on a hairline grid.
 */
export function ClientRoster() {
  return (
    <section id="clients" className="px-4 pb-24 sm:px-6 sm:pb-32 bg-surface">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="text-center text-[13px] font-medium text-muted">
            {clientRoster.eyebrow}
          </p>
        </Reveal>

        {/*
          Twelve marks over 3, 4 and 6 columns. All three divide evenly, so no
          breakpoint leaves a ragged final row. The gap is the grid: cells sit on a
          sunken panel with a hairline between them, so the roster reads as one
          block of record rather than twelve loose logos.
        */}
        <Reveal delay={0.06}>
          <ul className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-panel bg-line/70 ring-1 ring-line/70 sm:grid-cols-4 lg:grid-cols-6">
            {clients.map((client) => (
              <li
                key={client.name}
                className="group flex items-center justify-center bg-white px-3 py-7 transition-colors duration-200 ease-out hover:bg-sunken"
              >
                <ClientLogo
                  name={client.name}
                  logo={client.logo}
                  logoClassName="h-12 w-12 sm:h-14 sm:w-14"
                />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-[13px] leading-relaxed text-faint">
            {clientRoster.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

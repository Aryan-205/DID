import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { CtaButton } from "@/components/ui/cta-button";
import { SmartLink } from "@/components/ui/smart-link";
import { Wordmark } from "@/components/ui/logo";
import { company, footerColumns, linkedIn, primaryCta } from "@/lib/content";

export function SiteFooter() {
  // Rendered at request time on the server, so the notice never goes stale.
  const year = new Date().getFullYear();

  return (
    <footer className="relative p-4 pb-0">
      <div className="p-1 shadow-[0_0_1px_1px_rgba(0,0,0,0.1)] rounded-2xl bg-[#85C4FF]/20 pb-0">
        <div className="bg-surface px-4 pt-16 sm:px-6 rounded-2xl pb-0">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
              <div className="col-span-2 flex flex-col items-start gap-5 lg:col-span-2">
                <Wordmark />
                <p className="max-w-xs text-[13.5px] leading-relaxed text-muted">
                  {company.legalName}. IT staffing, software development and training since{" "}
                  {company.founded}.
                </p>
                <CtaButton href={primaryCta.href} label={primaryCta.label} />
              </div>

              {footerColumns.map((column) => (
                <nav key={column.title} aria-label={column.title}>
                  <h2 className="text-[13px] font-semibold text-ink">{column.title}</h2>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {column.links.map((link) => (
                      <li key={`${column.title}-${link.label}`}>
                        <SmartLink
                          href={link.href}
                          className="text-[13.5px] text-muted transition-colors duration-200 hover:text-ink"
                        >
                          {link.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-line py-8 sm:flex-row sm:items-center">
              <p className="text-[12.5px] text-faint">
                &copy; {year} {company.legalName} All rights reserved.
              </p>

              <div className="flex items-center gap-4">
                <p className="text-[12.5px] text-faint">
                  Core values: {company.values.join(", ")}
                </p>
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Defense In Depth Solutions on LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-soft transition-colors duration-200 hover:border-line-strong hover:text-ink"
                >
                  <LinkedinLogoIcon size={16} weight="fill" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Oversized wordmark, bled off the bottom edge. */}
            <div aria-hidden="true" className="pointer-events-none select-none pt-4">
              {/*
                Sized to sit just wider than the container so it bleeds off both edges
                rather than wrapping. whitespace-nowrap keeps it on one line at every width.
              */}
              <span className="block w-full whitespace-nowrap text-center text-[clamp(3rem,13vw,11.5rem)] font-semibold leading-[0.82] tracking-[-0.055em] text-accent/12">
                {company.wordmark}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

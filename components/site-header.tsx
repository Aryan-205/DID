"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { CtaButton } from "@/components/ui/cta-button";
import { SmartLink } from "@/components/ui/smart-link";
import { Wordmark } from "@/components/ui/logo";
import { nav, primaryCta } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // Lock the page while the overlay owns the viewport.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape closes the overlay.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-4 sm:pt-6">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex h-14 items-center justify-between gap-3 rounded-shell border border-line/80 bg-surface/85 pl-4 pr-2 shadow-pill backdrop-blur-xl sm:pl-5">
            {/*
              Sized off the pill's fixed h-14 rather than the file's intrinsic
              520x240, so the lockup can never push the bar taller.
            */}
            <Link href="/" className="shrink-0" aria-label="Defense In Depth Solutions, home">
              <Wordmark className="h-9 w-auto sm:h-10" />
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <SmartLink
                      href={item.href}
                      className="whitespace-nowrap rounded-control px-3 py-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-ink"
                    >
                      {item.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              {/*
                Held back until lg: below that the menu button owns the right of
                the bar, and the same CTA sits at the foot of the open panel.

                The hiding lives on a wrapper rather than on the button itself.
                CtaButton's own classes carry `inline-flex`, and Tailwind emits
                .inline-flex after .hidden, so a `hidden` passed through
                className loses the display conflict and the button stays on
                screen at every width.
              */}
              <div className="hidden lg:block">
                <CtaButton href={primaryCta.href} label={primaryCta.label} />
              </div>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-control border border-line bg-surface transition-colors duration-200 hover:bg-sunken lg:hidden"
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 block h-[1.5px] w-4 rounded bg-ink transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      open ? "top-[5px] rotate-45" : "top-0.5 rotate-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-[1.5px] w-4 rounded bg-ink transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                      open ? "top-[5px] -rotate-45" : "top-[9px] rotate-0"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {/*
            The menu is a panel hung under the bar rather than a full-screen
            takeover: it keeps the header shape on screen, and the page stays
            visible underneath so the overlay never feels like a new page.
          */}
          <AnimatePresence>
            {open ? (
              <motion.div
                id="mobile-menu"
                key="mobile-menu"
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 1 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 origin-top overflow-hidden rounded-card border border-line/80 bg-surface p-3 shadow-pill lg:hidden"
              >
                <nav aria-label="Mobile">
                  <ul className="flex flex-col">
                    {nav.map((item, index) => (
                      <motion.li
                        key={item.href}
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: reduce ? 0 : 0.04 + index * 0.04,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <SmartLink
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-control px-3 py-3 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-sunken"
                        >
                          {item.label}
                        </SmartLink>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-2">
                  <CtaButton
                    href={primaryCta.href}
                    label={primaryCta.label}
                    size="lg"
                    className="w-full"
                  />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </header>

      {/* Tap anywhere off the panel to close it. */}
      {open ? (
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 cursor-default lg:hidden"
        />
      ) : null}
    </>
  );
}

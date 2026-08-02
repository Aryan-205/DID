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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink focus:shadow-pill"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:pt-6">
        <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between gap-4 rounded-shell border border-line/80 bg-surface/85 pl-5 pr-2 shadow-pill backdrop-blur-xl">
          <Link href="/" className="shrink-0" aria-label="Defense In Depth Solutions, home">
            <Wordmark />
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
            <CtaButton
              href={primaryCta.href}
              label={primaryCta.label}
              className="hidden sm:inline-flex"
            />

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
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-canvas/92 px-6 pb-10 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-1">
                {nav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: reduce ? 0 : 0.05 + index * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <SmartLink
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-line py-4 text-2xl font-medium tracking-[-0.03em] text-ink"
                    >
                      {item.label}
                    </SmartLink>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="mt-8">
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
    </>
  );
}

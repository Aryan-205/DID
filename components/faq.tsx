"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section className="wash-panel border-t border-line px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <h2 className="text-center text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-[1.12] text-ink">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-card border border-line bg-surface shadow-card">
            <ul className="divide-y divide-line">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <li key={faq.q}>
                    <h3>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-200 hover:bg-sunken sm:px-8"
                      >
                        <span className="text-[15px] font-medium leading-snug text-ink">
                          {faq.q}
                        </span>
                        <span
                          aria-hidden="true"
                          className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink-soft"
                        >
                          {isOpen ? (
                            <MinusIcon size={13} weight="bold" />
                          ) : (
                            <PlusIcon size={13} weight="bold" />
                          )}
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="panel"
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={reduce ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 pr-16 text-[14.5px] leading-relaxed text-muted sm:px-8 sm:pr-20">
                            {faq.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

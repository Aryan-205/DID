"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Illustration beds for the three segment cards.
 *
 * Built from this site's own vocabulary rather than from stock card art: the
 * concentric layers of the brand mark, hairline rules, tabular numerals, the
 * accent chips used for tech tags, and the 2px accent rule the process section
 * heads its phases with. No drop-shadowed floating tiles, no status badges, no
 * second hue - the same restrictions the rest of the page works under.
 *
 * Motion follows Reveal: entry is a single staggered pass on [0.16, 1, 0.3, 1] as
 * the card arrives. Each bed then keeps exactly one slow ambient movement - the
 * layers breathe, the coverage bars sweep, the indicator steps down the list - so
 * the section has life without three illustrations competing for attention. All of
 * it collapses to the finished state under prefers-reduced-motion.
 *
 * Decorative: the card heading and body carry the meaning, so the bed is hidden
 * from assistive technology and the labels inside it are never announced.
 */

type SegmentVisualProps = {
  id: string;
  /** The segment's own icon, passed as an element so this file stays a client boundary. */
  icon: ReactNode;
};

const ease = [0.16, 1, 0.3, 1] as const;

export function SegmentVisual({ id, icon }: SegmentVisualProps) {
  const reduce = Boolean(useReducedMotion());

  return (
    <div aria-hidden="true" className="relative h-full w-full">
      {id === "primes" ? (
        <PrimeCoverage icon={icon} reduce={reduce} />
      ) : id === "commercial" ? (
        <CommercialLedger reduce={reduce} />
      ) : (
        <FederalLayers icon={icon} reduce={reduce} />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ federal */

const workstreams = ["508 forms", "Oracle EBS", "BI reporting"];

/*
  The brand mark at illustration scale: three squares on the same 24-unit geometry
  as BrandMark, scaled to 160. Defense in depth is a layered idea, and this is the
  one card where drawing it literally is the accurate thing to do.
*/
const layers = [
  { inset: 2, radius: 46, width: 1.25, tone: "var(--line-strong)" },
  { inset: 30, radius: 32, width: 1.25, tone: "var(--wash-blue-deep)" },
  { inset: 56, radius: 20, width: 1.5, tone: "var(--accent)" },
];

function FederalLayers({ icon, reduce }: { icon: ReactNode; reduce: boolean }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="relative h-[136px] w-[136px]">
        <svg viewBox="0 0 160 160" fill="none" className="h-full w-full">
          {layers.map((layer, index) => (
            <motion.rect
              key={layer.inset}
              x={layer.inset}
              y={layer.inset}
              width={160 - layer.inset * 2}
              height={160 - layer.inset * 2}
              rx={layer.radius}
              stroke={layer.tone}
              strokeWidth={layer.width}
              pathLength={1}
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, delay: 0.15 + index * 0.12, ease }}
            />
          ))}
        </svg>

        {/*
          Outermost layer breathes outward on a long cycle. One movement, slow.
          Radius 39px = the outer rect's rx of 46 in a 160 viewBox drawn at 136px,
          so the ring stays concentric with the layer it echoes.
        */}
        {reduce ? null : (
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-[39px] ring-1 ring-accent/25 bg-blue-200"
            animate={{ scale: [1, 1.06, 1], opacity: [0, 0.5, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <div className="absolute inset-0 grid place-items-center">
          <motion.span
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="grid h-12 w-12 place-items-center rounded-tile bg-white text-accent shadow-card"
          >
            {icon}
          </motion.span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {workstreams.map((item, index) => (
          <motion.span
            key={item}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease }}
            className="rounded-full border border-line/70 bg-white/70 px-2.5 py-1 text-[10px] font-medium text-ink-soft backdrop-blur-sm"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- primes */

const lifecycles = [
  { name: "SAP BW 7.0", meta: "Development and design" },
  { name: "BusinessObjects", meta: "Web Intelligence, IDT" },
  { name: "Data Services", meta: "Integrated planning" },
];

/**
 * Three full lifecycle projects supplied under one prime, drawn the way the
 * process section heads its phases: a 2px accent rule over each block. The rules
 * fill left to right on entry and then sweep in sequence, which is the closest
 * thing on this site to a progress bar without inventing a metric to put on it.
 */
function PrimeCoverage({ icon, reduce }: { icon: ReactNode; reduce: boolean }) {
  return (
    <div className="flex h-full flex-col justify-center gap-4 px-5 sm:px-6">
      {/* <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, ease }}
        className="flex items-center gap-2 border-b border-line/80 pb-3"
      >
        <span className="text-accent">{icon}</span>
        <span className="text-[11px] font-semibold tracking-[-0.01em] text-ink-soft">
          Under the prime
        </span>
        <span className="ml-auto text-[10px] font-medium text-faint tabular-nums">
          3 lifecycles
        </span>
      </motion.div> */}

      <div className="flex flex-col gap-3">
        {lifecycles.map((project, index) => (
          <motion.div
            key={project.name}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.1 + index * 0.1, ease }}
          >
            <div className="relative h-0.5 w-full overflow-hidden rounded-full bg-line">
              <motion.span
                className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-accent"
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.14, ease }}
              />
              {/* The sweep: a highlight running the length of each rule in turn. */}
              {reduce ? null : (
                <motion.span
                  className="absolute inset-y-0 w-8 rounded-full bg-white/70"
                  animate={{ x: ["-2rem", "20rem"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay: 1 + index * 0.5,
                    ease: "easeInOut",
                  }}
                />
              )}
            </div>

            <div className="mt-2.5 flex items-baseline gap-2.5">
              <span className="text-[10px] font-medium text-faint tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[12px] font-semibold tracking-[-0.01em] text-ink">
                  {project.name}
                </span>
                <span className="block truncate text-[10.5px] text-muted">{project.meta}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- commercial */

const ledger = [
  { name: "Benefits administration", meta: "PeopleSoft HRMS" },
  { name: "Performance testing", meta: "LoadRunner, JMeter" },
  { name: "Bottleneck analysis", meta: "Custom ERP systems" },
];

const ROW_HEIGHT = 44;

/**
 * A divided list, the shape this site uses for anything enumerable, with the
 * accent rule from the process phases turned on its side: one indicator that steps
 * down the rows on a loop instead of three that animate at once.
 */
function CommercialLedger({ reduce }: { reduce: boolean }) {
  return (
    <div className="flex h-full flex-col justify-center px-5 sm:px-6">
      <motion.p
        initial={reduce ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease }}
        className="border-b border-line/80 pb-3 pl-4 text-[11px] font-semibold tracking-[-0.01em] text-ink-soft"
      >
        On record
      </motion.p>

      <div className="relative mt-1">
        {reduce ? null : (
          <motion.span
            className="absolute left-0 top-0 w-[2px] rounded-full bg-accent"
            style={{ height: ROW_HEIGHT - 18 }}
            initial={{ y: 9, opacity: 0 }}
            animate={{
              y: [9, 9, ROW_HEIGHT + 9, ROW_HEIGHT * 2 + 9, ROW_HEIGHT * 2 + 9],
              // opacity: [1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              times: [0, 0.12, 0.42, 0.72, 1],
              repeat: Infinity,
              ease,
            }}
          />
        )}

        <ul className="divide-y divide-line/80">
          {ledger.map((item, index) => (
            <motion.li
              key={item.name}
              initial={reduce ? false : { opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: 0.1 + index * 0.1, ease }}
              className="flex items-center gap-3 pl-4"
              style={{ height: ROW_HEIGHT }}
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12px] font-semibold tracking-[-0.01em] text-ink">
                  {item.name}
                </span>
                <span className="block truncate text-[10.5px] text-muted">{item.meta}</span>
              </span>
              <span className="shrink-0 text-[10px] font-medium text-faint tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

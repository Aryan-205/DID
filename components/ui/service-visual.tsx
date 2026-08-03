"use client";

import {
  BrowsersIcon,
  GraduationCapIcon,
  StackIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "motion/react";
import { services } from "@/lib/content";

/**
 * Illustration beds for the four service cards.
 *
 * Each one draws what its service line actually does, using the same vocabulary as
 * the rest of the page: hairlines, tabular numerals, the accent chips used for tech
 * tags, and the vertical roll borrowed from the platform marquee. Nothing here is
 * invented copy - the engagement types, the build list and the program names are
 * read straight out of lib/content, so a card cannot drift from the service it sits
 * on.
 *
 * Motion matches Reveal: one staggered entry pass on [0.16, 1, 0.3, 1] as the card
 * arrives, then exactly one slow ambient movement per bed - a selector stepping
 * across the pool, a marker running down the build list, the program roll, a page
 * painting in. All of it collapses to the finished state under reduced motion.
 *
 * Decorative: the card's own heading and summary carry the meaning, so every bed is
 * hidden from assistive technology.
 */

const ease = [0.16, 1, 0.3, 1] as const;

const serviceById = (id: string) => services.find((service) => service.id === id)!;

export function ServiceVisual({ id }: { id: string }) {
  const reduce = Boolean(useReducedMotion());

  return (
    <div aria-hidden="true" className="relative h-full w-full">
      {id === "software-development" ? (
        <BuildList reduce={reduce} />
      ) : id === "training" ? (
        <ProgramRoll reduce={reduce} />
      ) : id === "web-services" ? (
        <PagePaint reduce={reduce} />
      ) : (
        <PoolMatch reduce={reduce} />
      )}
    </div>
  );
}

/* -------------------------------------------------------------- it staffing */

const POOL = 7;
/** Where the selector settles. Off centre, so it reads as a choice rather than a default. */
const MATCH = 4;
const TILE = 28;
const GAP = 10;
const PITCH = TILE + GAP;

const engagements = serviceById("it-staffing").detail.items.map((item) => item.name);

/*
  A screened pool with one match coming out of it. The selector steps tile by tile
  rather than sliding, because the process it stands for is discrete: seven
  candidates looked at in turn, one taken forward.
*/
const stepTimes = [0, 0.08, 0.18, 0.28, 0.38, 0.48, 0.62, 0.92, 1];

function PoolMatch({ reduce }: { reduce: boolean }) {
  const stepX = [0, 0, PITCH, PITCH * 2, PITCH * 3, PITCH * MATCH, PITCH * MATCH, PITCH * MATCH, PITCH * MATCH];

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 px-4">
      <div className="relative" style={{ width: POOL * TILE + (POOL - 1) * GAP }}>
        {reduce ? null : (
          <motion.span
            className="pointer-events-none absolute -inset-y-1.5 -left-1.5 rounded-[12px] ring-2 ring-accent/40"
            style={{ width: TILE + 12 }}
            animate={{ x: stepX, opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0] }}
            transition={{ duration: 6.5, times: stepTimes, repeat: Infinity, ease }}
          />
        )}

        <div className="flex" style={{ gap: GAP }}>
          {Array.from({ length: POOL }, (_, index) => (
            <motion.span
              key={index}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: index * 0.05, ease }}
              className={`relative grid shrink-0 place-items-center rounded-[9px] border ${
                index === MATCH
                  ? "border-accent/40 bg-accent-tint text-accent-tint-ink"
                  : "border-line/70 bg-white/60"
              }`}
              style={{ height: TILE, width: TILE }}
            >
              {index === MATCH ? <UsersThreeIcon size={14} weight="duotone" /> : null}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {engagements.map((engagement, index) => (
          <motion.span
            key={engagement}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.35 + index * 0.08, ease }}
            className="rounded-full border border-line/70 bg-white/70 px-2.5 py-1 text-[10px] font-medium text-ink-soft backdrop-blur-sm"
          >
            {engagement}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------ software development */

const buildList = serviceById("software-development").detail.items.map((item) => item.name);

/*
  How far the marker runs: four rows at roughly 17px of line box, three 8px gaps,
  less the marker's own 16px and the rail's 4px top inset. Stated here rather than
  measured, because a layout effect for a decorative 2px bar is not worth the
  hydration cost.
*/
const MARKER_TRAVEL = 4 * 17 + 3 * 8 - 16 - 4;

/** The build list as a run of hairline rows, with one marker travelling the rail. */
function BuildList({ reduce }: { reduce: boolean }) {
  return (
    <div className="flex h-full flex-col justify-center gap-3 px-5 sm:px-7">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-2 border-b border-line/80 pb-2.5"
      >
        <StackIcon size={14} weight="duotone" className="text-accent" />
        <span className="text-[11px] font-semibold tracking-[-0.01em] text-ink-soft">
          What we build
        </span>
        <span className="ml-auto text-[10px] font-medium text-faint tabular-nums">
          {String(buildList.length).padStart(2, "0")}
        </span>
      </motion.div>

      <div className="relative pl-4">
        {/* Rail and marker both scale/translate rather than animating height or top:
            those interpolate from a number, and the rail's length is a percentage. */}
        <motion.span
          className="absolute inset-y-1 left-0 w-[2px] origin-top rounded-full bg-line"
          initial={reduce ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        />

        {reduce ? null : (
          <motion.span
            className="absolute left-0 top-1 h-4 w-[2px] rounded-full bg-accent"
            animate={{ y: [0, MARKER_TRAVEL], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 3.2,
              times: [0, 0.12, 0.85, 1],
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: "easeInOut",
            }}
          />
        )}

        <ul className="flex flex-col gap-2">
          {buildList.map((item, index) => (
            <motion.li
              key={item}
              initial={reduce ? false : { opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease }}
              className="flex items-baseline gap-2.5"
            >
              <span className="text-[9.5px] font-medium text-faint tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="truncate text-[11.5px] font-medium tracking-[-0.01em] text-ink-soft">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- training */

const programs = serviceById("training").detail.chips ?? [];

/**
 * The named programs on a vertical roll, using the same masked-edge treatment as
 * the platform marquee. Two copies of the list, so -50% lands exactly on the start
 * of the second one and the loop has no seam.
 */
function ProgramRoll({ reduce }: { reduce: boolean }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 px-4">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-2"
      >
        <GraduationCapIcon size={14} weight="duotone" className="text-accent" />
        <span className="text-[11px] font-semibold tracking-[-0.01em] text-ink-soft">
          Named programs
        </span>
      </motion.div>

      <div className="marquee-vertical h-[96px] w-full max-w-[220px] overflow-hidden">
        <motion.ul
          animate={reduce ? undefined : { y: ["0%", "-50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          className="flex flex-col items-center gap-2"
        >
          {[...programs, ...programs].map((program, index) => (
            <li
              key={`${program}-${index}`}
              className="shrink-0 whitespace-nowrap rounded-full border border-line/70 bg-white/75 px-3 py-1.5 text-[10.5px] font-medium text-ink-soft backdrop-blur-sm"
            >
              {program}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------- web services */

/** Skeleton widths, uneven so the frame reads as a page rather than a table. */
const paintRows = ["100%", "76%", "88%", "58%"];

function PagePaint({ reduce }: { reduce: boolean }) {
  return (
    <div className="grid h-full place-items-center px-4">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease }}
        className="w-full max-w-[236px] rounded-tile border border-line/70 bg-white/85 p-3 shadow-card backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 border-b border-line/80 pb-2.5">
          <span className="flex gap-1">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="h-[5px] w-[5px] rounded-full bg-line-strong" />
            ))}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-sunken px-2 py-0.5">
            <BrowsersIcon size={10} weight="duotone" className="text-accent" />
            <span className="text-[9px] font-medium text-muted">Multi-office</span>
          </span>
        </div>

        {/* Each row paints left to right in sequence: error free page loading, drawn. */}
        <div className="mt-3 flex flex-col gap-2">
          {paintRows.map((width, index) => (
            <div
              key={width}
              className="h-[6px] overflow-hidden rounded-full bg-line/70"
              style={{ width }}
            >
              <motion.span
                className="block h-full w-full origin-left rounded-full bg-accent/70"
                initial={reduce ? false : { scaleX: 0 }}
                animate={reduce ? undefined : { scaleX: [0, 1, 1, 1], opacity: [1, 1, 1, 0] }}
                transition={{
                  duration: 4.4,
                  times: [0, 0.22, 0.8, 1],
                  repeat: Infinity,
                  delay: index * 0.22,
                  ease,
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-line/80 pt-2.5">
          <span className="rounded-full bg-accent-tint px-2 py-0.5 text-[9.5px] font-semibold text-accent-tint-ink">
            Section 508
          </span>
          <span className="text-[9.5px] font-medium text-faint">Error free load</span>
        </div>
      </motion.div>
    </div>
  );
}

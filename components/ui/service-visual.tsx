"use client";

import {
  BrowsersIcon,
  CheckIcon,
  GraduationCapIcon,
  StackIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { services } from "@/lib/content";

/**
 * Illustration beds for the four service cards.
 *
 * Each bed is a composition rather than a diagram: a full-bleed field of whatever
 * the service line works with, and one solid object sitting on top of it. That is
 * where the weight comes from - stating the same facts in small type read as a
 * caption. The vocabulary is still the site's own: hairlines, tabular numerals,
 * accent chips, white cards on the blue wash, no second hue.
 *
 * Nothing here is invented copy. The engagement types, the build list and the
 * program names are read straight out of lib/content, so a card cannot drift from
 * the service line it sits on.
 *
 * Motion matches Reveal - one staggered entry pass on [0.16, 1, 0.3, 1] - plus a
 * single ambient loop per bed: a sweep across the pool, the stack breathing, the
 * program lanes, a page painting in. All of it collapses to the finished state
 * under prefers-reduced-motion.
 *
 * One structural rule throughout: motion writes the `transform` property, so
 * anything animated is wrapped in a plain element that owns the centring translate.
 * Putting `-translate-x-1/2` on a motion element instead would work until the first
 * frame, then be overwritten.
 *
 * Decorative: the card's own heading and summary carry the meaning, so every bed is
 * hidden from assistive technology.
 */

const ease = [0.16, 1, 0.3, 1] as const;

const serviceById = (id: string) => services.find((service) => service.id === id)!;

/** Steps a label through a list on a timer. Idle when motion is not wanted. */
function useCycle(length: number, ms: number, enabled: boolean) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!enabled || length < 2) return;
    const id = setInterval(() => setIndex((current) => (current + 1) % length), ms);
    return () => clearInterval(id);
  }, [enabled, length, ms]);

  return index;
}

export function ServiceVisual({ id }: { id: string }) {
  const reduce = Boolean(useReducedMotion());

  return (
    <div aria-hidden="true" className="relative h-full w-full overflow-hidden">
      {id === "software-development" ? (
        <ModuleStack reduce={reduce} />
      ) : id === "training" ? (
        <ProgramConveyor reduce={reduce} />
      ) : id === "web-services" ? (
        <PagePaint reduce={reduce} />
      ) : (
        <PoolMatch reduce={reduce} />
      )}
    </div>
  );
}

/** Centring wrapper. Owns the translate so the motion child can own the transform. */
function Centred({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}>
      {children}
    </div>
  );
}

/* -------------------------------------------------------------- it staffing */

const engagements = serviceById("it-staffing").detail.items.map((item) => item.name);

const POOL_ROWS = 3;
const POOL_COLUMNS = 18;

/**
 * The screened pool as a field running off both edges, with the one match lifted
 * out of it onto a card. The sweep is the screening pass, and the placement type on
 * the card cycles through the three ways an engagement can be structured.
 */
function PoolMatch({ reduce }: { reduce: boolean }) {
  const engagement = useCycle(engagements.length, 2600, !reduce);

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 flex flex-col justify-center gap-2.5">
        {Array.from({ length: POOL_ROWS }, (_, row) => (
          <motion.div
            key={row}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: row * 0.08, ease }}
            className="flex justify-center gap-2.5"
            /* Middle row shifts half a pitch, so the field reads as a pool, not a table. */
            style={{ marginLeft: row % 2 === 1 ? 21 : 0 }}
          >
            {Array.from({ length: POOL_COLUMNS }, (_, column) => (
              <span
                key={column}
                className="h-8 w-8 shrink-0 rounded-[10px] border border-line/60 bg-white/45"
              />
            ))}
          </motion.div>
        ))}
      </div>

      {reduce ? null : (
        <motion.div
          className="pointer-events-none absolute inset-y-0 left-0 w-40"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, color-mix(in srgb, var(--accent) 18%, transparent) 50%, transparent 100%)",
          }}
          animate={{ x: ["-10rem", "44rem"] }}
          transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
        />
      )}

      <Centred>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="flex items-center gap-3 rounded-tile border border-line/70 bg-white px-4 py-3 shadow-lift"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-tile bg-accent-tint text-accent-tint-ink">
            <UsersThreeIcon size={20} weight="duotone" />
          </span>

          <span className="min-w-0">
            <span className="block whitespace-nowrap text-[13px] font-semibold tracking-[-0.015em] text-ink">
              Matched to the role
            </span>
            <span className="mt-0.5 flex items-center gap-1.5 whitespace-nowrap text-[10.5px] text-muted">
              <CheckIcon size={11} weight="bold" className="text-accent" />
              Screened on twelve steps
            </span>
          </span>

          {/* Fixed box, so the card does not resize as the label swaps. */}
          <span className="relative ml-1 hidden h-6 w-[8.75rem] shrink-0 sm:block">
            <AnimatePresence initial={false}>
              <motion.span
                key={engagements[engagement]}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease }}
                className="absolute inset-0 flex items-center justify-center whitespace-nowrap rounded-full bg-sunken px-3 text-[10.5px] font-semibold text-ink-soft"
              >
                {engagements[engagement]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>
      </Centred>
    </div>
  );
}

/* ------------------------------------------------------ software development */

const buildList = serviceById("software-development").detail.items.map((item) => item.name);

/* Fan geometry, in px: plate height, the gap between plates, and the box they sit in. */
const PLATE_HEIGHT = 56;
const PLATE_SLOT = 34;
const STACK_HEIGHT = 164;

/**
 * Four plates settling into one fanned stack: four kinds of system, assembled by
 * one firm. The build list rides on the plates, so the object carries the content
 * rather than a caption beside it. The stack then breathes, bottom plate first.
 */
function ModuleStack({ reduce }: { reduce: boolean }) {
  const count = buildList.length;

  return (
    <div className="grid h-full w-full place-items-center px-4">
      <div className="relative w-full max-w-[17rem]" style={{ height: STACK_HEIGHT }}>
        {buildList.map((item, index) => {
          const offset = (index - (count - 1) / 2) * PLATE_SLOT;

          return (
            <div
              key={item}
              className="absolute inset-x-0"
              style={{ top: STACK_HEIGHT / 2 - PLATE_HEIGHT / 2 + offset }}
            >
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 34, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.09, ease }}
              >
                <motion.div
                  animate={reduce ? undefined : { y: [0, -6, 0] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    repeatDelay: 2.6,
                    delay: 1.2 + (count - 1 - index) * 0.2,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-3 rounded-tile border border-line/70 bg-white/95 px-4 shadow-card backdrop-blur-sm"
                  style={{ height: PLATE_HEIGHT }}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-accent-tint text-[10px] font-semibold tabular-nums text-accent-tint-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[12.5px] font-semibold tracking-[-0.01em] text-ink">
                      {item}
                    </span>
                    <span className="mt-1.5 block h-1 w-12 rounded-full bg-line" />
                  </span>

                  {index === count - 1 ? (
                    <StackIcon size={17} weight="duotone" className="shrink-0 text-accent" />
                  ) : null}
                </motion.div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- training */

const programs = serviceById("training").detail.chips ?? [];

/** Three lanes, alternating direction and speed, so the roll never lines up. */
const lanes = [
  { items: programs, reverse: false, duration: 26 },
  { items: [...programs.slice(3), ...programs.slice(0, 3)], reverse: true, duration: 33 },
  { items: [...programs.slice(5), ...programs.slice(0, 5)], reverse: false, duration: 29 },
];

/**
 * The named programs as three lanes of traffic behind one fixed card. Each lane
 * holds two copies of its list, so -50% lands on the start of the second copy and
 * the loop has no seam - the same construction as the platform marquee.
 */
function ProgramConveyor({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 flex flex-col justify-center gap-2.5">
        {lanes.map((lane, index) => (
          <motion.div
            key={index}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease }}
            className="marquee overflow-hidden"
          >
            <motion.div
              className="flex w-max gap-2.5"
              animate={reduce ? undefined : { x: lane.reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
              transition={{ duration: lane.duration, repeat: Infinity, ease: "linear" }}
            >
              {[...lane.items, ...lane.items].map((program, position) => (
                <span
                  key={`${program}-${position}`}
                  className="shrink-0 whitespace-nowrap rounded-full border border-line/70 bg-white/85 px-4 py-2 text-[12px] font-medium text-ink-soft shadow-card"
                >
                  {program}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* The one fixed object in the traffic: what all of it is for. */}
      <Centred>
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
          className="flex items-center gap-2.5 rounded-tile border border-line/70 bg-white px-4 py-3 shadow-lift"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-tile bg-accent-tint text-accent-tint-ink">
            <GraduationCapIcon size={18} weight="duotone" />
          </span>
          <span>
            <span className="block whitespace-nowrap text-[12.5px] font-semibold tracking-[-0.015em] text-ink">
              Knowledge transferred
            </span>
            <span className="block whitespace-nowrap text-[10.5px] text-muted tabular-nums">
              {programs.length} named programs
            </span>
          </span>
        </motion.div>
      </Centred>
    </div>
  );
}

/* ------------------------------------------------------------- web services */

/** Skeleton widths, uneven so the frame reads as a page rather than a table. */
const columnRows = [
  ["100%", "72%", "88%"],
  ["84%", "100%", "62%"],
];

/**
 * A page painting itself in, inside a frame that runs off the bottom edge of the
 * bed. Error free page loading is the claim the engagement actually makes, so the
 * illustration is the load: blocks filling left to right, in order, on a loop. The
 * ghost frame behind it is the same structure serving a second office.
 */
function PagePaint({ reduce }: { reduce: boolean }) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-[6%] top-11 h-full w-[17rem] max-w-[80%] rounded-tile border border-line/50 bg-white/40" />

      <div className="absolute left-1/2 top-6 w-[20.5rem] max-w-[92%] -translate-x-1/2">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="rounded-tile border border-line/70 bg-white/95 p-3.5 shadow-lift backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 border-b border-line/80 pb-2.5">
            <span className="flex gap-1">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className="h-[6px] w-[6px] rounded-full bg-line-strong" />
              ))}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-sunken px-2.5 py-1">
              <BrowsersIcon size={11} weight="duotone" className="text-accent" />
              <span className="text-[9.5px] font-medium text-muted">Multi-office rollout</span>
            </span>
            <span className="ml-auto rounded-full bg-accent-tint px-2 py-0.5 text-[9.5px] font-semibold text-accent-tint-ink">
              508
            </span>
          </div>

          {/* Hero block first, then the two columns beneath it, in load order. */}
          <PaintBlock reduce={reduce} delay={0} width="100%" className="mt-3 h-14 rounded-[10px]" />

          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
            {columnRows.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col gap-2">
                {column.map((width, rowIndex) => (
                  <PaintBlock
                    key={`${width}-${rowIndex}`}
                    reduce={reduce}
                    width={width}
                    delay={0.35 + (rowIndex * 2 + columnIndex) * 0.16}
                    className="h-[7px] rounded-full"
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function PaintBlock({
  reduce,
  width,
  delay,
  className,
}: {
  reduce: boolean;
  width: string;
  delay: number;
  className: string;
}) {
  return (
    <div className={`overflow-hidden bg-line/60 ${className}`} style={{ width }}>
      <motion.span
        className="block h-full w-full origin-left bg-accent/65"
        initial={reduce ? false : { scaleX: 0 }}
        animate={reduce ? undefined : { scaleX: [0, 1, 1, 1], opacity: [1, 1, 1, 0] }}
        transition={{ duration: 5, times: [0, 0.2, 0.82, 1], repeat: Infinity, delay, ease }}
      />
    </div>
  );
}

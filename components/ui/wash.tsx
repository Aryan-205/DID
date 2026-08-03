import type { CSSProperties } from "react";

/*
  Ambient blue washes. All drawn from the single blue, per the palette note in
  globals.css.

  These used to be `.wash-*` classes whose gradients were the background-image of
  the element being tinted. That has one flaw with no CSS fix: a background-image
  is clipped to its own element's box, always, and no amount of `overflow` changes
  it — overflow clips child boxes, never the parent's own background. So any wash
  whose gradient was still mid-strength where the section ended stopped dead in a
  straight horizontal line at the boundary. The page hero was the obvious one: its
  ellipse was centred at 110% of the section height with a fade that only reached
  zero at 62% of an 80%-tall radius, so the section edge cut it at roughly 80% of
  full colour.

  Two mechanisms replace it, split by what the wash is for:

    <Wash variant="hero" />   ambient light behind a section. Its own positioned
                              layer, so it is free to extend past the section that
                              owns it, and its stops reach zero alpha inside that
                              layer rather than at the edge of it.

    washSurface("tile")       the fill of a card interior. Contained by definition
                              — the card edge is the intended edge — so this stays
                              a background on the element itself, just declared
                              here instead of in the stylesheet.

  A <Wash> parent must be `relative isolate`. `isolate` is what makes -z-10 safe:
  it gives the section its own stacking context, so the layer sits above the
  section's own background but below its content, instead of falling behind it.
*/

type WashLayer = {
  /** Positioning for this layer, relative to the `relative isolate` parent. */
  box: string;
  image: string;
};

/*
  Sizing rule for anything that bleeds: a radial gradient reaches equally far in
  every direction, so `distance the wash rises into the section` and `distance it
  needs below the section to finish fading` are the same number. The rise layers
  below are 45rem tall and hang 15rem past the section, which puts the brightest
  point 6rem above the section edge and lands zero alpha exactly on the layer's
  own top and bottom edges — nothing left to cut.
*/
const RISE_BOX = "inset-x-0 bottom-[-15rem] h-[45rem]";

const ambientWashes = {
  /* Behind the routed-page heroes. Rises from below the fold of the section. */
  hero: [
    {
      box: RISE_BOX,
      image: "radial-gradient(125% 50% at 50% 50%, var(--wash-blue) 0%, transparent 100%)",
    },
    {
      box: "inset-0",
      image: "radial-gradient(70% 38% at 86% 62%, var(--wash-blue-soft) 0%, transparent 100%)",
    },
  ],

  /*
    Behind the closing CTA. The footer that follows is opaque and paints over the
    bleed, but the bleed is what keeps the wash from ending in a line if the
    footer ever stops being a white wall.
  */
  closing: [
    {
      box: RISE_BOX,
      image: "radial-gradient(120% 50% at 50% 50%, var(--wash-blue) 0%, transparent 100%)",
    },
    {
      box: "inset-0",
      image: "radial-gradient(76% 30% at 10% 30%, var(--wash-blue-soft) 0%, transparent 100%)",
    },
  ],

  /*
    Sky band behind the segment cards. Contained on purpose — this one is a band
    with two soft edges, not a glow rising off the page — so it is sized to fade
    out inside its own layer at both the top and the bottom.
  */
  segments: [
    {
      box: "inset-0",
      image:
        "radial-gradient(100% 40% at 50% 55%, color-mix(in srgb, var(--wash-sky) 80%, transparent) 10%, transparent 100%)",
    },
  ],
} satisfies Record<string, readonly WashLayer[]>;

export type AmbientWash = keyof typeof ambientWashes;

/**
 * Decorative light behind a section. The parent must carry `relative isolate`.
 */
export function Wash({ variant }: { variant: AmbientWash }) {
  return (
    <>
      {ambientWashes[variant].map((layer) => (
        <div
          key={layer.box + layer.image}
          aria-hidden="true"
          className={`pointer-events-none absolute -z-10 ${layer.box}`}
          style={{ backgroundImage: layer.image }}
        />
      ))}
    </>
  );
}

/*
  Card and panel interiors. Geometry is unchanged from the stylesheet: these are
  meant to stop at the element they fill, so there is nothing to bleed and an
  extra positioned layer would only buy corner-radius and stacking bugs.

  tile and tile-deep are the two illustration beds — same blue, one lighter and
  one deeper, so a grid of cards varies without introducing a second hue.
*/
const surfaceWashes = {
  panel: {
    backgroundImage: [
      "linear-gradient(180deg, var(--wash-blue-soft) 0%, transparent 48%)",
      "radial-gradient(86% 64% at 92% 100%, var(--wash-blue-soft) 0%, transparent 64%)",
    ].join(", "),
  },

  tile: {
    backgroundImage: [
      "linear-gradient(168deg, var(--wash-blue-soft) 0%, var(--surface) 72%)",
      "radial-gradient(64% 58% at 82% 6%, var(--wash-blue) 0%, transparent 62%)",
    ].join(", "),
  },

  "tile-deep": {
    backgroundImage: [
      "linear-gradient(168deg, var(--wash-blue) 0%, var(--wash-sand) 80%)",
      "radial-gradient(60% 56% at 18% 4%, var(--wash-blue-deep) 0%, transparent 64%)",
    ].join(", "),
  },

  /* Sky glow rising off the bottom edge with a soft bloom top right, over white. */
  "tile-sky": {
    backgroundColor: "var(--surface)",
    backgroundImage: [
      "radial-gradient(86% 78% at 50% 112%, color-mix(in srgb, var(--wash-sky) 55%, transparent) 0%, transparent 68%)",
      "radial-gradient(56% 52% at 84% 2%, color-mix(in srgb, var(--wash-sky) 26%, transparent) 0%, transparent 64%)",
    ].join(", "),
  },
} satisfies Record<string, CSSProperties>;

export type SurfaceWash = keyof typeof surfaceWashes;

/** Background fill for a card interior. Spread onto the element's `style`. */
export function washSurface(variant: SurfaceWash): CSSProperties {
  return surfaceWashes[variant];
}

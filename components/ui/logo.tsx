import Image from "next/image";
import { CLIENT_LOGO_SIZE, company, type Platform } from "@/lib/content";

/**
 * Brand mark: three concentric layers, which is literally what defense in depth
 * describes. Kept to plain geometry so it holds up at 20px in the header.
 */
export function BrandMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="1.1" y="1.1" width="21.8" height="21.8" rx="7" stroke="currentColor" strokeWidth="1.5" opacity="0.26" />
      <rect x="5.9" y="5.9" width="12.2" height="12.2" rx="4.2" stroke="currentColor" strokeWidth="1.5" opacity="0.58" />
      <rect x="10.2" y="10.2" width="3.6" height="3.6" rx="1.2" fill="currentColor" />
    </svg>
  );
}

/** Intrinsic pixel size of `public/Logo.avif`. */
const WORDMARK_WIDTH = 520;
const WORDMARK_HEIGHT = 240;

/**
 * The real company lockup. It already carries the name as artwork, so nothing is
 * set alongside it and the legal name lives in `alt` instead.
 *
 * Height is driven by `className` with `w-auto` holding the 13:6 ratio, so the
 * header pill keeps its fixed h-14 no matter what the file's intrinsic size is.
 */
export function Wordmark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/Logo.avif"
      alt={company.legalName}
      width={WORDMARK_WIDTH}
      height={WORDMARK_HEIGHT}
      sizes="160px"
      loading="eager"
      fetchPriority="high"
      className={className}
    />
  );
}

/**
 * Vendor mark for the brand line under the hero. Each file is the vendor's own
 * artwork, so the drawn height comes from the data rather than a shared class -
 * the proportions run from 7.6:1 to 2:1 and one box would set ORACLE as a
 * hairline beside SAP. Width is derived from the intrinsic ratio so nothing is
 * squashed.
 *
 * Held in greyscale at rest so eight vendor palettes read as one band, and
 * released to full colour on hover. The marquee pauses on hover, so there is
 * something to hover.
 *
 * Without a file we set the name in type rather than invent a mark for it.
 */
export function PlatformLogo({ name, logo, width, height, drawnHeight = 24 }: Platform) {
  if (!logo || !width || !height) {
    return (
      <span className="text-[15px] font-semibold uppercase tracking-[0.08em] text-muted transition duration-300 ease-out group-hover:text-ink">
        {name}
      </span>
    );
  }

  return (
    <Image
      src={logo}
      alt={name}
      width={Math.round((drawnHeight * width) / height)}
      height={drawnHeight}
      style={{ height: drawnHeight }}
      className="w-auto opacity-70 grayscale transition duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0"
    />
  );
}

function initialsFor(name: string) {
  const words = name.trim().split(/\s+/);
  if (words.length > 1) {
    return (words[0]![0]! + words[1]![0]!).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

/**
 * Client lockup. When we hold the actual mark it is rendered as the image and the
 * name carries only in `alt`; otherwise we fall back to a neutral house-style
 * monogram or wordmark rather than inventing a logo.
 *
 * The marks sit slightly held back at rest and come to full strength on hover of
 * the enclosing tile.
 *
 * `wordmark` drops the monogram for the client wall, where each name already sits
 * alone in its own tile and the disc only competes with it.
 *
 * `logoClassName` lets a denser context ask for a smaller mark; the default is the
 * home page wall's size.
 */
export function ClientLogo({
  name,
  logo,
  variant = "lockup",
  logoClassName = "h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18",
}: {
  name: string;
  logo?: string;
  variant?: "lockup" | "wordmark";
  logoClassName?: string;
}) {
  if (logo) {
    return (
      <Image
        src={logo}
        alt={name}
        width={CLIENT_LOGO_SIZE}
        height={CLIENT_LOGO_SIZE}
        sizes="120px"
        className={`object-contain opacity-80 transition duration-300 ease-out group-hover:opacity-100 ${logoClassName}`}
      />
    );
  }

  if (variant === "wordmark") {
    return (
      <span className="truncate text-[13.5px] font-semibold tracking-[-0.02em] text-ink-soft sm:text-[15px] lg:text-[16.5px]">
        {name}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink/[0.05] text-[9.5px] font-semibold tracking-tight text-ink-soft"
      >
        {initialsFor(name)}
      </span>
      <span className="truncate text-base font-medium tracking-[-0.01em] text-ink-soft">
        {name}
      </span>
    </span>
  );
}

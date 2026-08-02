import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

type Variant = "primary" | "secondary";
type Size = "sm" | "lg";

type CtaButtonProps = {
  href: string;
  label: string;
  variant?: Variant;
  size?: Size;
  /** Nests the arrow in its own circle. Reserved for the two full size page CTAs. */
  withIcon?: boolean;
  className?: string;
};

const base =
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-control font-medium whitespace-nowrap " +
  "transition-[transform,background-image,background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] " +
  "active:scale-[0.98]";

const variants: Record<Variant, string> = {
  // Fill, 2px stroke and the four-layer shadow all live in .cta-face (globals.css).
  primary: "cta-face text-white",
  secondary:
    "bg-surface text-ink border border-line shadow-card hover:border-line-strong hover:bg-sunken",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  lg: "h-12 pl-6 pr-6 text-[15px]",
};

export function CtaButton({
  href,
  label,
  variant = "primary",
  size = "sm",
  withIcon = false,
  className = "",
}: CtaButtonProps) {
  const classes = `${base} ${variants[variant]} ${withIcon ? "h-12 pl-6 pr-1.5 text-[15px]" : sizes[size]} ${className}`;

  const content = (
    <>
      {label}
      {withIcon ? (
        <span
          aria-hidden="true"
          className={`grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px ${
            variant === "primary" ? "bg-white/18" : "bg-ink/[0.06]"
          }`}
        >
          <ArrowUpRightIcon size={15} weight="bold" />
        </span>
      ) : null}
    </>
  );

  /*
    Route changes go through <Link> so they prefetch and transition client side.
    mailto:, tel: and bare hashes stay on a plain anchor: Link has nothing to
    prefetch for them, and a hash on the current page should just scroll.
  */
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}

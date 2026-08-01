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
  "transition-[transform,background-color,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] " +
  "active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink shadow-pill hover:bg-accent-hover",
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
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${withIcon ? "h-12 pl-6 pr-1.5 text-[15px]" : sizes[size]} ${className}`}
    >
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
    </a>
  );
}

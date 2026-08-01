import { company } from "@/lib/content";

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

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark className="h-[22px] w-[22px] text-accent" />
      <span className="text-[15px] font-semibold tracking-[-0.03em] text-ink">
        {company.shortName}
      </span>
    </span>
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
 * Client lockup: monogram plus wordmark. These are real companies, so we render a
 * neutral house-style mark rather than reproducing trademarked logos we do not hold.
 */
export function ClientLogo({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink/[0.05] text-[9.5px] font-semibold tracking-tight text-ink-soft"
      >
        {initialsFor(name)}
      </span>
      <span className="truncate text-[13px] font-medium tracking-[-0.01em] text-ink-soft">
        {name}
      </span>
    </span>
  );
}

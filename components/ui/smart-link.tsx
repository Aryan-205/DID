import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/**
 * One link component for a site that is part single page and part routed.
 *
 * Anything site-internal ("/careers", "/#services") goes through <Link>, so it
 * prefetches and transitions client side, and so a section anchor still resolves
 * when the reader is on /careers rather than home. Bare hashes, mailto: and tel:
 * stay on a plain anchor, where the browser's own handling is what we want.
 */
export function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

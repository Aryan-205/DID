import type { Metadata } from "next";
import { Closing } from "@/components/closing";
import { EngagementList } from "@/components/engagement-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/ui/cta-button";
import { PageHero } from "@/components/ui/page-hero";
import { primaryCta, routes, workPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Past performance",
  description:
    "Nine documented engagements: Section 508 compliant federal forms, Oracle E-Business Suite, SAP BW and BusinessObjects for the USDA and under primes, PeopleSoft HRMS, and performance testing at postal scale.",
  openGraph: {
    title: "Past performance | Defense In Depth Solutions",
    description:
      "Nine engagements delivered to federal process, on federal systems. Client references available on request.",
    type: "website",
  },
};

export default function PastPerformancePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          eyebrow={workPage.eyebrow}
          heading={workPage.heading}
          intro={workPage.intro}
          stats={workPage.stats}
        >
          <CtaButton href={primaryCta.href} label={primaryCta.label} size="lg" withIcon />
          <CtaButton
            href={routes.services}
            label="See what we deliver"
            variant="secondary"
            size="lg"
          />
        </PageHero>

        <EngagementList />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}

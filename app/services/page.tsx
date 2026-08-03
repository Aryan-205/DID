import type { Metadata } from "next";
import { Closing } from "@/components/closing";
import { ServicesApproach } from "@/components/services-approach";
import { ServicesDetail } from "@/components/services-detail";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/ui/cta-button";
import { PageHero } from "@/components/ui/page-hero";
import { primaryCta, routes, servicesPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "IT staffing, software development, training and web services from a women-owned firm established in 2007. Full project lifecycle management, Section 508 accessibility, and twelve step candidate screening.",
  openGraph: {
    title: "Services | Defense In Depth Solutions",
    description:
      "Staffing, software, training and web services under one contract, delivered to federal process.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          eyebrow={servicesPage.eyebrow}
          heading={servicesPage.heading}
          intro={servicesPage.intro}
          stats={servicesPage.stats}
        >
          <CtaButton href={primaryCta.href} label={primaryCta.label} size="lg" withIcon />
          <CtaButton
            href={routes.work}
            label="See past performance"
            variant="secondary"
            size="lg"
          />
        </PageHero>

        <ServicesDetail />
        <ServicesApproach />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}

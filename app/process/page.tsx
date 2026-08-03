import type { Metadata } from "next";
import { Closing } from "@/components/closing";
import { ProcessDelivery } from "@/components/process-delivery";
import { ProcessPrinciples } from "@/components/process-principles";
import { ProcessScreening } from "@/components/process-screening";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/ui/cta-button";
import { PageHero } from "@/components/ui/page-hero";
import { primaryCta, processPage, routes } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "The twelve step screening process every candidate moves through, in four phases, and the four delivery movements every project runs on: analyze, design, develop and implement, with full project lifecycle management.",
  openGraph: {
    title: "Process | Defense In Depth Solutions",
    description:
      "Twelve screening steps for the people, four movements for the delivery. Both published in full.",
    type: "website",
  },
};

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          eyebrow={processPage.eyebrow}
          heading={processPage.heading}
          intro={processPage.intro}
          stats={processPage.stats}
        >
          <CtaButton href={primaryCta.href} label={primaryCta.label} size="lg" withIcon />
          <CtaButton
            href={routes.work}
            label="See where it has been applied"
            variant="secondary"
            size="lg"
          />
        </PageHero>

        <ProcessScreening />
        <ProcessDelivery />
        <ProcessPrinciples />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}

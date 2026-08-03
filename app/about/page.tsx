import type { Metadata } from "next";
import { AboutLeadership } from "@/components/about-leadership";
import { AboutNext } from "@/components/about-next";
import { AboutStory } from "@/components/about-story";
import { AboutValues } from "@/components/about-values";
import { Closing } from "@/components/closing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CtaButton } from "@/components/ui/cta-button";
import { PageHero } from "@/components/ui/page-hero";
import { aboutPage, getCredentials, routes } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Defense in Depth Solutions, Inc. is a women-owned IT services firm established in 2007, with offices in Houston, TX and Leesburg, VA. Led by president Madina Shaik, accountable for both the people placed and the software delivered.",
  openGraph: {
    title: "About us | Defense In Depth Solutions",
    description:
      "A women-owned IT firm established in 2007, answerable for the people and the delivery.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        {/*
          The hero figures come from getCredentials() rather than a hardcoded set:
          the years-in-business line is computed, and this is the page where a stale
          founding-to-today figure would be most obvious.
        */}
        <PageHero
          eyebrow={aboutPage.eyebrow}
          heading={aboutPage.heading}
          intro={aboutPage.intro}
          stats={getCredentials()}
        >
          <CtaButton href={routes.process} label="See how we work" size="lg" withIcon />
          <CtaButton
            href={routes.work}
            label="See past performance"
            variant="secondary"
            size="lg"
          />
        </PageHero>

        <AboutStory />
        <AboutLeadership />
        <AboutValues />
        <AboutNext />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}

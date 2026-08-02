import type { Metadata } from "next";
import { CareersApply } from "@/components/careers-apply";
import { CareersBenefits } from "@/components/careers-benefits";
import { CareersHero } from "@/components/careers-hero";
import { CareersOpening } from "@/components/careers-opening";
import { CareersRewards } from "@/components/careers-rewards";
import { CareersWorkplace } from "@/components/careers-workplace";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work at Defense In Depth Solutions. Benefits, leave and retirement, rewards, advancement and how pay is set, plus current openings. Apply to recruitment@didsolutions.net.",
  openGraph: {
    title: "Careers | Defense In Depth Solutions",
    description:
      "Benefits comparable to leading Fortune 500 companies, a Safe Harbor 401(k) with a 4 percent match, and openings in Houston, TX.",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <CareersHero />
        <CareersOpening />
        <CareersBenefits />
        <CareersWorkplace />
        <CareersRewards />
        <CareersApply />
      </main>
      <SiteFooter />
    </>
  );
}

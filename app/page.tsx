import { About } from "@/components/about";
import { Careers } from "@/components/careers";
import { CaseStudies } from "@/components/case-studies";
import { ClientStrip } from "@/components/client-strip";
import { Closing } from "@/components/closing";
import { Credentials } from "@/components/credentials";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Technologies } from "@/components/technologies";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <ClientStrip />
        <Services />
        <Credentials />
        <CaseStudies />
        <Process />
        <About />
        <Technologies />
        <Careers />
        <Faq />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}

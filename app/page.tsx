import { About } from "@/components/about";
import { Careers } from "@/components/careers";
import { CaseStudies } from "@/components/case-studies";
import { ClientWall } from "@/components/client-wall";
import { Closing } from "@/components/closing";
import { Credentials } from "@/components/credentials";
import { Segments } from "@/components/segments";
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
        <Segments />
        <ClientWall />
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

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CommonProblemsSection } from "@/components/common-problems-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";
import { ProjectRangeSection } from "@/components/project-range-section";
import { ServiceAreaSection } from "@/components/service-area-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCall } from "@/components/sticky-mobile-call";
import { WhyChooseSection } from "@/components/why-choose-section";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <SiteHeader />
      <main>
        <HeroSection />
        <CommonProblemsSection />
        <ServicesSection />
        <ProjectRangeSection />
        <WhyChooseSection />
        <AboutSection />
        <ServiceAreaSection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
      <StickyMobileCall />
    </>
  );
}

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CommonProblemsSection } from "@/components/common-problems-section";
import { GallerySection } from "@/components/gallery-section";
import { HowCallWorksSection } from "@/components/how-call-works-section";
import { HeroSection } from "@/components/hero-section";
import { IntroAnimation } from "@/components/IntroAnimation";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";
import { ServiceAreaSection } from "@/components/service-area-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCall } from "@/components/sticky-mobile-call";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <IntroAnimation />
      <SiteHeader />
      <main>
        <HeroSection />
        <CommonProblemsSection />
        <ServicesSection />
        <HowCallWorksSection />
        <AboutSection />
        <GallerySection />
        <ServiceAreaSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <StickyMobileCall />
    </>
  );
}

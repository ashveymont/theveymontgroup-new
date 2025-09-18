import { WovenLightHero } from "@/components/ui/woven-light-hero";
import { WovenLightSection } from "@/components/ui/woven-light-section";
import { CyberneticBentoGrid } from "@/components/ui/cybernetic-bento-grid";
import { FounderSection } from "@/components/ui/founder-section";
import { InvestSection } from "@/components/ui/invest-section";
import { ContactSection } from "@/components/ui/contact-section";
import { StickyFooter } from "@/components/ui/sticky-footer";

export default function Home() {
  return (
    <>
      <WovenLightHero
        headline="The Veymont Group"
        subtext="Engineering a Dharmic Legacy for the Next Generation"
        ctaLabel="View Portfolios"
        ctaHref="/portfolios"
      />
      <WovenLightSection
        title="Business as Dharma"
        description="The Veymont Group exists to build industries that free people from powerlessness. We serve where technology and spirit meet: AI that listens, travel that connects, sapphires that endure, green data that powers the future, and mental-health platforms that dissolve stigma. Our purpose is simple: create systems of prosperity so the next generation never has to wonder if greatness is possible."
      />
      {/* Third section: Cybernetic Bento Grid */}
      <section id="portfolios" className="relative bg-black">
        <CyberneticBentoGrid />
      </section>
      {/* Fourth section: Founder */}
      <FounderSection />
      {/* Fifth section: Invest */}
      <InvestSection />
      {/* Sixth section: Contact */}
      <ContactSection />
      {/* Sticky Footer */}
      <StickyFooter />
    </>
  );
}

import { WovenLightHero } from "@/components/ui/woven-light-hero";
import { WovenLightSection } from "@/components/ui/woven-light-section";
import { CyberneticBentoGrid } from "@/components/ui/cybernetic-bento-grid";
import { FounderSection } from "@/components/ui/founder-section";
import { PartnerContactSection } from "@/components/ui/partner-contact-section";
import { MinimalFooter } from "@/components/ui/minimal-footer";

export default function Home() {
  return (
    <>
      <WovenLightHero
        headline="The Veymont Group"
        subtext="Engineering a Dharmic Legacy for the Next Generation"
        ctaLabel="View Portfolios"
        ctaHref="#portfolios"
      />
      <WovenLightSection
        title="Our Mission"
        subtitle="Building Realms of Lasting Prosperity"
        paragraphs={[
          "The Veymont Group is a house of creation—where advanced technology and timeless wisdom move as one.",
          "We build enterprises that honor the highest order of progress: AI that elevates human potential, journeys that awaken a sense of wonder, sapphires that carry generational stories, green data centers that safeguard the planet, and mindful platforms that return humanity to its center.",
          "Our work is not simply business. It is a vow to shape industries worthy of the future—ventures conceived in clarity, sustained by discipline, and guided by dharma.",
          "Every company we create is designed to endure, so the next generation inherits possibility as an unquestioned truth."
        ]}
      />
      {/* Third section: Cybernetic Bento Grid */}
      <section id="portfolios" className="relative bg-black">
        <CyberneticBentoGrid />
      </section>
      {/* Fourth section: Founder */}
      <FounderSection />
      {/* Fifth section: Partner & Contact */}
      <PartnerContactSection />
      {/* Footer */}
      <MinimalFooter />
    </>
  );
}

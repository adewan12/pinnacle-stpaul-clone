import TopInfoBar from "@/components/TopInfoBar";
import HeaderCTA from "@/components/HeaderCTA";
import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import HeroContent from "@/components/HeroContent";
import MonitoringSection from "@/components/MonitoringSection";
import ProgramsSection from "@/components/ProgramsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <img src="/promo-banner.jpg" alt="Enroll Now - $500 off tuition" className="w-full" />
      <TopInfoBar />
      <HeaderCTA />
      <Navigation />
      <HeroBanner />
      <HeroContent />
      <MonitoringSection />
      <ProgramsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

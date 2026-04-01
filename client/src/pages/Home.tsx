/* ============================================================
   HOME PAGE — Legacy Way Vending
   Assembles all sections in order for the full landing page
   ============================================================ */

import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import MachineFeatures from "@/components/MachineFeatures";
import WhySchools from "@/components/WhySchools";
import ProductsSection from "@/components/ProductsSection";
import PaymentMethods from "@/components/PaymentMethods";
import ServiceArea from "@/components/ServiceArea";
import QualifyForm from "@/components/QualifyForm";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyCallout from "@/components/StickyCallout";
import MarqueeBar from "@/components/MarqueeBar";

export default function Home() {
  useSEO({
    title: "Legacy Way Vending | Free Healthy Vending Machines for Schools in Upstate SC",
    description: "Legacy Way Vending provides FREE healthy vending machines for middle and high schools in Upstate South Carolina. No cost, no hassle — we install, stock, and maintain. USDA Smart Snacks compliant. Call 864-381-9290.",
    canonical: "https://legacywayvending.com/",
  });

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_145)]">
      <Navbar />
      <MarqueeBar />
      <main>
        <HeroSection />
        <StatsBar />
        <HowItWorks />
        <MachineFeatures />
        <PaymentMethods />
        <WhySchools />
        <ServiceArea />
        <ProductsSection />
        <QualifyForm />
        <FAQSection />
      </main>
      <Footer />
      <StickyCallout />
    </div>
  );
}

/* ============================================================
   HOME PAGE — Legacy Way Vending
   Assembles all sections in order for the full landing page
   ============================================================ */

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

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_145)]">
      <Navbar />
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

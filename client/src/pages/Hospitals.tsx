/* ============================================================
   HOSPITALS PAGE — Legacy Way Vending
   Targets facilities directors, operations managers, and food
   services directors at hospitals and medical facilities in
   Spartanburg and Greenville counties, SC.
   Design: Warm & Inviting — same as Home (Option B)
   ============================================================ */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HospitalHero from "@/components/hospitals/HospitalHero";
import HospitalWhy from "@/components/hospitals/HospitalWhy";
import HospitalMachineFeatures from "@/components/hospitals/HospitalMachineFeatures";
import HospitalProducts from "@/components/hospitals/HospitalProducts";
import HospitalServiceArea from "@/components/hospitals/HospitalServiceArea";
import HospitalQualifyForm from "@/components/hospitals/HospitalQualifyForm";
import HospitalFAQ from "@/components/hospitals/HospitalFAQ";
import StickyCallout from "@/components/StickyCallout";
import MarketsBar from "@/components/MarketsBar";

export default function Hospitals() {
  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_145)]">
      <Navbar />
      <MarketsBar />
      <main>
        <HospitalHero />
        <HospitalWhy />
        <HospitalMachineFeatures />
        <HospitalProducts />
        <HospitalServiceArea />
        <HospitalQualifyForm />
        <HospitalFAQ />
      </main>
      <Footer />
      <StickyCallout />
    </div>
  );
}

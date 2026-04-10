/* ============================================================
   HOSPITALS PAGE — Legacy Way Vending
   Targets facilities directors, operations managers, and food
   services directors at hospitals and medical facilities in
   Spartanburg and Greenville counties, SC.
   Design: Warm & Inviting — same as Home (Option B)
   ============================================================ */

import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HospitalHero from "@/components/hospitals/HospitalHero";
import HospitalWhy from "@/components/hospitals/HospitalWhy";
import HospitalMachineFeatures from "@/components/hospitals/HospitalMachineFeatures";
import HospitalProducts from "@/components/hospitals/HospitalProducts";
import HospitalServiceArea from "@/components/hospitals/HospitalServiceArea";
import HospitalQualifyForm from "@/components/hospitals/HospitalQualifyForm";
import HospitalFAQ, { hospitalFaqs } from "@/components/hospitals/HospitalFAQ";
import StickyCallout from "@/components/StickyCallout";
import MarqueeBar from "@/components/MarqueeBar";

const HOSPITAL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Free Healthy Vending Machines for Hospitals and Medical Facilities",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Legacy Way Vending",
    "telephone": "+1-864-381-9290",
    "url": "https://legacywayvending.com"
  },
  "serviceType": "Healthy Vending Machine Service",
  "areaServed": [
    { "@type": "City", "name": "Greenville", "sameAs": "https://en.wikipedia.org/wiki/Greenville,_South_Carolina" },
    { "@type": "City", "name": "Simpsonville", "sameAs": "https://en.wikipedia.org/wiki/Simpsonville,_South_Carolina" },
    { "@type": "City", "name": "Fountain Inn", "sameAs": "https://en.wikipedia.org/wiki/Fountain_Inn,_South_Carolina" },
    { "@type": "City", "name": "Mauldin", "sameAs": "https://en.wikipedia.org/wiki/Mauldin,_South_Carolina" },
    { "@type": "City", "name": "Greer", "sameAs": "https://en.wikipedia.org/wiki/Greer,_South_Carolina" },
    { "@type": "City", "name": "Spartanburg", "sameAs": "https://en.wikipedia.org/wiki/Spartanburg,_South_Carolina" },
    { "@type": "City", "name": "Boiling Springs", "sameAs": "https://en.wikipedia.org/wiki/Boiling_Springs,_South_Carolina" },
    { "@type": "City", "name": "Chesnee", "sameAs": "https://en.wikipedia.org/wiki/Chesnee,_South_Carolina" },
    { "@type": "City", "name": "Inman", "sameAs": "https://en.wikipedia.org/wiki/Inman,_South_Carolina" },
    { "@type": "City", "name": "Landrum", "sameAs": "https://en.wikipedia.org/wiki/Landrum,_South_Carolina" },
    { "@type": "City", "name": "Easley", "sameAs": "https://en.wikipedia.org/wiki/Easley,_South_Carolina" },
    { "@type": "City", "name": "Liberty", "sameAs": "https://en.wikipedia.org/wiki/Liberty,_South_Carolina" },
    { "@type": "City", "name": "Powdersville", "sameAs": "https://en.wikipedia.org/wiki/Powdersville,_South_Carolina" },
    { "@type": "AdministrativeArea", "name": "Greenville County, South Carolina" },
    { "@type": "AdministrativeArea", "name": "Spartanburg County, South Carolina" },
    { "@type": "AdministrativeArea", "name": "Pickens County, South Carolina" }
  ],
  "description": "Free healthy vending machine installation, stocking, and maintenance for hospitals, clinics, and medical facilities in Greenville, Spartanburg, and Pickens counties, South Carolina. No cost to your facility.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Completely free for qualified medical facilities with 300+ daily visitors"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Hospitals, Medical Clinics, Healthcare Facilities"
  }
};

export default function Hospitals() {
  useSEO({
    title: "Free Healthy Vending Machines for Hospitals & Clinics | Legacy Way Vending | Upstate SC",
    description: "Legacy Way Vending provides FREE healthy vending machines for hospitals, clinics, and medical facilities in Greenville, Spartanburg, and Pickens counties, SC. No cost, no hassle. We install, stock, and maintain. Call 864-381-9290.",
    canonical: "https://legacywayvending.com/hospitals/",
    keywords: "free healthy vending machine hospital, healthy vending machine clinic, no cost vending machine medical facility, hospital vending machine Greenville SC, hospital vending machine Spartanburg SC, hospital vending machine Greer SC, hospital vending machine Boiling Springs SC, hospital vending machine Simpsonville SC, hospital vending machine Mauldin SC, hospital vending machine Easley SC, hospital vending machine Inman SC, hospital vending machine Landrum SC, healthy vending Upstate SC hospital, free vending machine healthcare facility South Carolina, vending machine for hospital Upstate SC",
  });

  useEffect(() => {
    // Inject Service schema
    const serviceId = "hospital-service-schema";
    if (!document.getElementById(serviceId)) {
      const script = document.createElement("script");
      script.id = serviceId;
      script.type = "application/ld+json";
      script.text = JSON.stringify(HOSPITAL_SCHEMA);
      document.head.appendChild(script);
    }
    // Inject single FAQPage schema — consolidated here to prevent duplicates
    const faqId = "hospital-faq-schema";
    if (!document.getElementById(faqId)) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": hospitalFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      };
      const script = document.createElement("script");
      script.id = faqId;
      script.type = "application/ld+json";
      script.text = JSON.stringify(faqSchema);
      document.head.appendChild(script);
    }
    return () => {
      ["hospital-service-schema", "hospital-faq-schema"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_145)]">
      <Navbar />
      <MarqueeBar />
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

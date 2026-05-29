/* ============================================================
   HOME PAGE — Legacy Way Vending
   Assembles all sections in order for the full landing page
   ============================================================ */

import { useEffect } from "react";
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

  useEffect(() => {
    const schemas = [
      {
        id: "school-faq-schema",
        data: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How much does the free vending machine program cost for our school?", acceptedAnswer: { "@type": "Answer", text: "Nothing — it's completely free for qualified locations. There are no equipment fees, no installation charges, no maintenance costs, and no contracts. The program is 100% free for schools that meet the qualification criteria." } },
            { "@type": "Question", name: "What are the requirements to qualify for a free healthy vending machine?", acceptedAnswer: { "@type": "Answer", text: "Your school needs a minimum of 300 daily in-person students and staff. Most middle and high schools qualify easily. We serve public schools, private schools, and charter schools throughout Upstate South Carolina." } },
            { "@type": "Question", name: "Are the vending machine products USDA Smart Snacks in Schools compliant?", acceptedAnswer: { "@type": "Answer", text: "Yes. We have full menus for High Schools and Middle Schools — all 100% USDA Smart Snacks in Schools compliant. We offer far more product variety than standard vending companies." } },
            { "@type": "Question", name: "How quickly can we get a healthy vending machine installed at our school?", acceptedAnswer: { "@type": "Answer", text: "Your machine is custom-built in the USA 🇺🇸 for your location. Most facilities are up and running within 6 weeks of approval." } },
            { "@type": "Question", name: "Does our school earn revenue from the vending machine?", acceptedAnswer: { "@type": "Answer", text: "Our program is structured so that Legacy Way Vending handles all operations — installation, stocking, and maintenance — at no cost to your school. The machine provides a valuable service to your students and staff with healthy, USDA-compliant snacks and beverages." } },
            { "@type": "Question", name: "Do you serve schools in Cherokee County, SC?", acceptedAnswer: { "@type": "Answer", text: "Yes. Legacy Way Vending now serves schools in Cherokee County, including Gaffney and Blacksburg. Cherokee County schools qualify for the same 100% free healthy vending program available to schools throughout Upstate South Carolina. If your school has 300 or more daily students and staff, submit a qualification request and we will follow up within one business day." } },
            { "@type": "Question", name: "Which Cherokee County schools qualify for the free vending program?", acceptedAnswer: { "@type": "Answer", text: "Any public, private, or charter school in Cherokee County with a minimum of 300 daily in-person students and staff qualifies for review. This includes middle schools and high schools in Gaffney and Blacksburg. The program is completely free — no equipment fees, no installation costs, and no maintenance charges." } },
            { "@type": "Question", name: "How far do you travel to serve schools in Gaffney and Blacksburg?", acceptedAnswer: { "@type": "Answer", text: "Gaffney and Blacksburg are within our direct service area. We handle all installation, restocking, and maintenance for Cherokee County schools just as we do for schools in Greenville, Spartanburg, Pickens, and York counties. There are no additional fees or travel charges for Cherokee County locations." } },
          ],
        },
      },
      {
        id: "school-service-schema",
        data: {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Free Healthy Vending Machine for Schools",
          provider: { "@type": "LocalBusiness", name: "Legacy Way Vending", telephone: "+1-864-381-9290" },
          serviceType: "Vending Machine Service",
          areaServed: "Upstate South Carolina",
          description: "Free installation, stocking, and maintenance of state-of-the-art healthy vending machines for qualified schools and facilities in Upstate South Carolina.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Completely free for qualified locations with 300+ daily visitors" },
        },
      },
    ];
    schemas.forEach(({ id, data }) => {
      if (!document.getElementById(id)) {
        const s = document.createElement("script");
        s.id = id;
        s.type = "application/ld+json";
        s.textContent = JSON.stringify(data);
        document.head.appendChild(s);
      }
    });
    return () => {
      schemas.forEach(({ id }) => document.getElementById(id)?.remove());
    };
  }, []);

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

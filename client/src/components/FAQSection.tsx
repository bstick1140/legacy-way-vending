/* ============================================================
   FAQ SECTION — Bold Organic Modernism
   Accordion-style, cream background, green accents
   ============================================================ */

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does the program cost for our school?",
    answer:
      "Nothing — it's completely free for qualified locations. There are no equipment fees, no installation charges, and no maintenance costs. The program is 100% free for schools that meet the qualification criteria.",
  },
  {
    question: "What are the requirements to qualify?",
    answer:
      "Your school needs a minimum of 300 daily in-person students and staff. Most middle and high schools qualify easily. We serve public schools, private schools, and charter schools throughout Upstate South Carolina.",
  },
  {
    question: "Are the products USDA Smart Snacks in Schools (SSIS) compliant?",
    answer:
      "Yes, 100%. Every product in our machines meets the USDA Smart Snacks in Schools (SSIS) nutritional standards. SSIS sets specific limits on calories, sodium, sugar, and fat for all foods and beverages sold in schools during the school day. We carry full menus for both middle schools and high schools, all certified SSIS compliant. We offer far more product variety than standard vending companies while staying within every SSIS guideline.",
  },
  {
    question: "What is the USDA Smart Snacks in Schools (SSIS) standard and why does it matter?",
    answer:
      "USDA Smart Snacks in Schools (SSIS) is a federal nutrition standard that applies to all foods and beverages sold to students during the school day. It sets maximum limits on calories, saturated fat, sodium, and added sugars. Schools that sell non-compliant items risk losing federal nutrition program funding. Every product in our machines is pre-vetted to meet SSIS standards, so your school stays fully compliant without any extra work on your part.",
  },
  {
    question: "What if we already have a drink contract with another company?",
    answer:
      "No problem. We can offer a snack-only program so your existing drink contract is not breached. We're flexible and work around your existing agreements.",
  },
  {
    question: "How quickly can we get a machine installed?",
    answer:
      "Your machine is custom-built in the USA 🇺🇸 for your location. Most facilities are up and running within 6 weeks of approval. We'll keep you updated every step of the way.",
  },
  {
    question: "What happens if a product doesn't dispense properly?",
    answer:
      "Refund complaints are a thing of the past with our SureVend™ Guaranteed Product Delivery technology. Our infrared sensors detect if a product doesn't drop, and the machine automatically gives the coil an extra push. If it still doesn't vend, the student receives a full refund — no complaints to you.",
  },
  {
    question: "What makes this program different from a standard vending arrangement?",
    answer:
      "Unlike traditional vending arrangements that often come with outdated machines and junk food, our program is completely free and gives you a state-of-the-art machine stocked with USDA Smart Snacks compliant products. We handle all installation, restocking, and maintenance — you simply enjoy the benefits.",
  },
  {
    question: "Is the machine ADA compliant?",
    answer:
      "Yes, 100% ADA compliant. All payment and product selection components are positioned between 15\" and 48\", meeting all Americans with Disabilities Act requirements.",
  },

];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[oklch(0.99_0.005_145)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="badge-pill bg-[oklch(0.58_0.16_145/0.08)] text-[oklch(0.58_0.16_145)] border border-[oklch(0.58_0.16_145/0.2)] mb-4 mx-auto">
            Common Questions
          </div>
          <h2 className="font-display text-[oklch(0.18_0.005_285)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Frequently Asked
            <span className="text-[oklch(0.58_0.16_145)] italic"> Questions</span>
          </h2>
          <p className="font-body text-[oklch(0.44_0.04_145)] text-lg">
            Everything school principals need to know about the free healthy vending program.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                openIndex === i
                  ? "border-[oklch(0.58_0.16_145/0.4)] shadow-sm bg-white"
                  : "border-[oklch(0.90_0.04_145)] hover:border-[oklch(0.58_0.16_145/0.25)] bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-body font-semibold text-[oklch(0.18_0.005_285)] text-sm sm:text-base leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[oklch(0.58_0.16_145)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-[oklch(0.90_0.04_145)] mb-4" />
                  <p className="font-body text-[oklch(0.40_0.01_285)] text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 text-center bg-[oklch(0.58_0.16_145/0.05)] rounded-2xl p-8 border border-[oklch(0.58_0.16_145/0.15)]">
          <h3 className="font-display text-[oklch(0.18_0.005_285)] text-2xl font-bold mb-2">
            Still have questions?
          </h3>
          <p className="font-body text-[oklch(0.44_0.04_145)] mb-6">
            We'd love to talk through the program with you directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#qualify" className="btn-amber py-3 px-8 justify-center">
              Apply Now — It's Free
            </a>
            <a href="tel:8643819290" className="btn-green py-3 px-8 justify-center">
              Call 864-381-9290
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      "Nothing — it's completely free for qualified locations. There are no equipment fees, no installation charges, no maintenance costs, and no contracts. The program is 100% free for schools that meet the qualification criteria.",
  },
  {
    question: "What are the requirements to qualify?",
    answer:
      "Your school needs a minimum of 300 daily in-person students and staff. Most middle and high schools qualify easily. We serve public schools, private schools, and charter schools throughout Upstate South Carolina.",
  },
  {
    question: "Are the products USDA Smart Snacks in Schools compliant?",
    answer:
      "Absolutely. We have full menus for High Schools, Middle Schools, and Elementary Schools — all 100% USDA Smart Snacks in Schools compliant. We offer far more product variety than standard vending companies, and our buying power keeps prices affordable for every student.",
  },
  {
    question: "What if we already have a drink contract with another company?",
    answer:
      "No problem. We can offer a snack-only program so your existing drink contract is not breached. We're flexible and work around your existing agreements.",
  },
  {
    question: "How quickly can we get a machine installed?",
    answer:
      "We build each machine brand-new for your specific location. In most cases, installation takes place within 4 to 6 weeks of approval — and sometimes even sooner.",
  },
  {
    question: "What happens if a product doesn't dispense properly?",
    answer:
      "Refund complaints are a thing of the past with our SureVend™ Guaranteed Product Delivery technology. Our infrared sensors detect if a product doesn't drop, and the machine automatically gives the coil an extra push. If it still doesn't vend, the student receives a full refund — no complaints to you.",
  },
  {
    question: "How does our school earn revenue?",
    answer:
      "Your school receives a commission on every sale made from the machine. It's completely passive — we handle all the operations, and you receive a regular check. Our healthy vending program outperforms traditional junk food machines 2-to-1 in revenue.",
  },
  {
    question: "What if we're not satisfied with the service?",
    answer:
      "Our program is backed by a 1st Class Service Guarantee. If you're not receiving exceptional service, we will remove the machine from your facility with no questions asked. We stand behind our commitment to quality.",
  },
  {
    question: "Can the machine handle perishable items like yogurt?",
    answer:
      "Yes! Our machines feature a Health & Safety Lock that automatically locks the machine if a perishable product is spoiled, preventing any liability for your school. This allows us to offer yogurts, smoothies, and other fresh items that students love.",
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
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="badge-pill bg-[oklch(0.28_0.09_155/0.08)] text-[oklch(0.28_0.09_155)] border border-[oklch(0.28_0.09_155/0.2)] mb-4 mx-auto">
            Common Questions
          </div>
          <h2 className="font-display text-[oklch(0.18_0.005_285)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Frequently Asked
            <span className="text-[oklch(0.28_0.09_155)] italic"> Questions</span>
          </h2>
          <p className="font-body text-[oklch(0.45_0.01_285)] text-lg">
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
                  ? "border-[oklch(0.28_0.09_155/0.4)] shadow-sm"
                  : "border-[oklch(0.90_0.01_90)] hover:border-[oklch(0.28_0.09_155/0.25)]"
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
                  className={`w-5 h-5 text-[oklch(0.28_0.09_155)] flex-shrink-0 transition-transform duration-300 ${
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
                  <div className="h-px bg-[oklch(0.90_0.01_90)] mb-4" />
                  <p className="font-body text-[oklch(0.40_0.01_285)] text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 text-center bg-[oklch(0.28_0.09_155/0.05)] rounded-2xl p-8 border border-[oklch(0.28_0.09_155/0.15)]">
          <h3 className="font-display text-[oklch(0.18_0.005_285)] text-2xl font-bold mb-2">
            Still have questions?
          </h3>
          <p className="font-body text-[oklch(0.45_0.01_285)] mb-6">
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

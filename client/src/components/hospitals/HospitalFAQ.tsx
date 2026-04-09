/* ============================================================
   HOSPITAL FAQ — Legacy Way Vending
   Addresses questions from facilities directors, operations
   managers, and food services directors.
   ============================================================ */

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does this program cost our facility?",
    answer:
      "Nothing. The program is completely free for qualified locations. There are no equipment fees, no installation charges, and no maintenance costs. We provide the machine, stock it, and maintain it at no cost to your facility.",
  },
  {
    question: "What are the requirements to qualify?",
    answer:
      "Your facility needs a minimum of 300 daily staff, patients, and visitors combined. Most hospitals, medical centers, and larger clinics qualify easily. We serve facilities in Spartanburg and Greenville counties in South Carolina.",
  },
  {
    question: "How is this different from the bland health food machines we've seen before?",
    answer:
      "Our products are carefully selected to be both nutritious and genuinely enjoyable. We've heard the same feedback about other healthy vending programs — the food doesn't taste good. Our buying power and product selection process ensures staff and patients will actually want to use the machine, not avoid it.",
  },
  {
    question: "Who handles restocking and maintenance?",
    answer:
      "We do. Your facilities team has zero involvement after the machine is placed. We monitor inventory remotely and restock proactively. If anything needs maintenance, we handle it — no calls to your team required.",
  },
  {
    question: "What if we already have a vending arrangement with another company?",
    answer:
      "We can work around existing arrangements. If you have a contract with a beverage company, for example, we can provide a snack-only machine. We're flexible and will discuss the best fit for your specific situation.",
  },
  {
    question: "Is the machine ADA compliant?",
    answer:
      "Yes, 100% ADA compliant. All payment and product selection components are positioned between 15\" and 48\", meeting all Americans with Disabilities Act requirements — important for hospital environments.",
  },
  {
    question: "What payment methods does the machine accept?",
    answer:
      "Cash, coins, debit and credit cards, Apple Pay, and Google Pay. Every staff member, visitor, and patient can pay the way they prefer.",
  },
  {
    question: "How quickly can we get a machine installed?",
    answer:
      "Your machine is custom-built in the USA for your location. Most facilities are up and running within 9 weeks of approval. We'll keep you updated every step of the way.",
  },
];

export default function HospitalFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const id = "hospital-faq-schema";
    if (!document.getElementById(id)) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      };
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);

  return (
    <section id="hospital-faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[oklch(0.96_0.04_145)] border border-[oklch(0.88_0.08_145)] rounded-full px-4 py-1.5 mb-4">
            <span className="font-body text-[oklch(0.42_0.12_145)] text-xs font-semibold uppercase tracking-widest">
              Common Questions
            </span>
          </div>
          <h2 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-3xl sm:text-4xl leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-[oklch(0.45_0.008_60)] text-base max-w-xl mx-auto">
            Everything facilities directors and operations managers need to know about the free healthy vending program.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[oklch(0.90_0.04_145)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[oklch(0.99_0.005_145)] transition-colors"
              >
                <span className="font-body font-semibold text-[oklch(0.28_0.10_145)] text-sm pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[oklch(0.58_0.16_145)] flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4">
                  <p className="font-body text-[oklch(0.45_0.008_60)] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center bg-[oklch(0.99_0.005_145)] border border-[oklch(0.90_0.04_145)] rounded-2xl p-6">
          <p className="font-body text-[oklch(0.45_0.008_60)] text-sm mb-3">
            Still have questions? We'd love to talk through the program with you directly.
          </p>
          <a
            href="tel:8643819290"
            className="inline-flex items-center gap-2 text-[oklch(0.58_0.16_145)] font-body font-semibold text-sm hover:underline"
          >
            Call 864-381-9290
          </a>
        </div>
      </div>
    </section>
  );
}

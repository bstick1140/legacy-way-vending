/* ============================================================
   HOW IT WORKS — Bold Organic Modernism
   Editorial numbered steps, cream background, diagonal top
   ============================================================ */

import { useEffect, useRef } from "react";
import { ClipboardCheck, Truck, RefreshCw, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Check Your Eligibility",
    description:
      "Complete our short 4-question survey to confirm your school qualifies. You need 300+ daily in-person students and staff. Most middle and high schools qualify instantly.",
  },
  {
    number: "02",
    icon: Truck,
    title: "We Install at No Cost",
    description:
      "Our team delivers, installs, and sets up your brand-new state-of-the-art machine — completely free. No equipment fees, no installation charges, no contracts. Allow up to 9 weeks from approval to installation.",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "We Stock & Maintain",
    description:
      "We handle everything: restocking with USDA Smart Snacks compliant products, maintenance, repairs, and real-time monitoring. You never lift a finger.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Enjoy the Benefits",
    description:
      "Sit back while we handle everything. Healthier students, happier parents, and a modern vending experience your school can be proud of — at zero cost to you.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".step-card");
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[oklch(0.99_0.005_90)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="badge-pill bg-[oklch(0.28_0.09_155/0.08)] text-[oklch(0.28_0.09_155)] border border-[oklch(0.28_0.09_155/0.2)] mb-4">
            Simple Process
          </div>
          <h2 className="font-display text-[oklch(0.18_0.005_285)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            How the Free Vending
            <br />
            <span className="text-[oklch(0.28_0.09_155)]">Program Works</span>
          </h2>
          <p className="font-body text-[oklch(0.45_0.01_285)] text-lg leading-relaxed">
            Getting a free healthy vending machine for your school is easier than you think. From qualification to installation, we handle everything.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="step-card relative"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                }}
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%-1rem)] w-8 h-0.5 bg-[oklch(0.28_0.09_155/0.2)] z-10" />
                )}

                {/* Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-[oklch(0.90_0.01_90)] hover:shadow-md hover:border-[oklch(0.28_0.09_155/0.3)] transition-all duration-300 h-full">
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[oklch(0.28_0.09_155)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-mono-brand text-4xl font-bold text-[oklch(0.28_0.09_155/0.12)] leading-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-display text-[oklch(0.18_0.005_285)] text-xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-[oklch(0.45_0.01_285)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a href="#qualify" className="btn-amber text-base py-4 px-10 inline-flex">
            Start Your Free Application
          </a>
          <p className="font-body text-[oklch(0.55_0.01_285)] text-sm mt-3">
            Takes less than 2 minutes · No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}

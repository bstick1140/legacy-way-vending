/* ============================================================
   MACHINE FEATURES — Bold Organic Modernism
   Dark green background, white text, amber accents
   ============================================================ */

import { useEffect, useRef } from "react";
import {
  Zap,
  CreditCard,
  Shield,
  Smartphone,
  CheckSquare,
  Thermometer,
  Award,
  BarChart3,
} from "lucide-react";

const features: { icon: React.ElementType; title: string; description: string }[] = [
  {
    icon: Zap,
    title: "Energy Star Certified",
    description: "LED lighting, auto-dim when idle, and smart energy management reduce your facility's energy costs.",
  },
  {
    icon: CreditCard,
    title: "All Payment Methods",
    description: "Cash, coins, debit/credit cards, Apple Pay, Google Pay — every student can make a purchase.",
  },
  {
    icon: Shield,
    title: "Guaranteed Delivery",
    description: "SureVend™ infrared technology ensures every product is delivered or the customer gets a refund. No more complaints.",
  },
  {
    icon: Smartphone,
    title: "Real-Time Monitoring",
    description: "Live inventory tracking via smartphone app means faster restocking and zero downtime for your students.",
  },
  {
    icon: CheckSquare,
    title: "100% ADA Compliant",
    description: "All payment and selection features are accessible between 15\" and 48\", meeting all ADA requirements.",
  },
  {
    icon: Thermometer,
    title: "Health & Safety Lock",
    description: "Auto-locks the machine if a product reaches an unsafe temperature, protecting your students and eliminating liability.",
  },
  {
    icon: Award,
    title: "USDA Smart Snacks",
    description: "Full menus for middle and high schools — 100% compliant with USDA Smart Snacks in Schools guidelines.",
  },
  {
    icon: BarChart3,
    title: "Outperforms 2-to-1",
    description: "Our healthy vending program outsells traditional junk food machines 2-to-1. Students choose healthier options when they’re available.",
  },
];

const STUDENTS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/school-students-snacks-HS7bqsU7ZhXJLWhZZHSS4D.webp";

export default function MachineFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".feature-item");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0)";
              }, i * 80);
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
      id="features"
      ref={sectionRef}
      className="bg-[oklch(0.58_0.16_145)] py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Subtle leaf pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: text/features left, image right */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Header + Feature grid */}
          <div>
            <div className="badge-pill bg-[oklch(0.80_0.18_95/0.2)] text-[oklch(0.80_0.18_95)] border border-[oklch(0.80_0.18_95/0.4)] mb-6">
              State-of-the-Art Equipment
            </div>
            <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              A Machine Built for
              <br />
              <span className="text-[oklch(0.80_0.18_95)] italic">Modern Schools</span>
            </h2>
            <p className="font-body text-[oklch(0.92_0.04_145)] text-lg leading-relaxed mb-6">
              Every machine is brand-new, built specifically for your location, and packed with technology that makes it the most advanced vending solution available.
            </p>

            {/* SSIS compliance callout */}
            <div className="bg-[oklch(0.42_0.16_145)] border border-[oklch(0.80_0.18_95/0.3)] rounded-xl p-5 mb-10">
              <h3 className="font-display text-[oklch(0.80_0.18_95)] text-lg font-bold mb-2">
                100% USDA Smart Snacks in Schools (SSIS) Compliant
              </h3>
              <p className="font-body text-[oklch(0.92_0.04_145)] text-sm leading-relaxed">
                Every product we stock meets the federal USDA Smart Snacks in Schools (SSIS) nutritional standards — mandatory calorie, sodium, sugar, and fat limits for all school-day food sales. Your school stays fully compliant with no extra effort. We carry certified SSIS menus for both middle schools and high schools.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="feature-item group"
                    style={{
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
                    }}
                  >
                    <div className="bg-white hover:bg-[oklch(0.97_0.03_145)] rounded-lg p-4 transition-all duration-300 border border-[oklch(0.88_0.05_145)] hover:border-[oklch(0.58_0.16_145)] shadow-sm hover:shadow-md h-full">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[oklch(0.58_0.16_145)] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-body font-bold text-[oklch(0.32_0.14_145)] text-sm mb-1">{feature.title}</h3>
                          <p className="font-body text-[oklch(0.38_0.06_145)] text-xs leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Students image */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={STUDENTS_IMG}
                alt="Happy students using healthy vending machine at school"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.42_0.16_145/0.6)] to-transparent" />

            </div>

            {/* Floating stat */}
            <div className="absolute -top-4 -right-4 bg-[oklch(0.80_0.18_95)] rounded-xl p-4 shadow-xl">
              <div className="font-display text-[oklch(0.18_0.005_285)] text-3xl font-bold leading-none">2×</div>
              <div className="font-body text-[oklch(0.18_0.005_285)] text-xs font-semibold mt-0.5">More Sales</div>
              <div className="font-body text-[oklch(0.28_0.005_285)] text-xs">vs. junk machines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

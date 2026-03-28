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

const features = [
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
    title: "Perishable-Ready",
    description: "Health & Safety Lock auto-locks if a product is spoiled, enabling yogurts, smoothies, and fresh items.",
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
      className="bg-[oklch(0.28_0.09_155)] py-20 lg:py-28 relative overflow-hidden"
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
            <div className="badge-pill bg-[oklch(0.72_0.16_72/0.2)] text-[oklch(0.72_0.16_72)] border border-[oklch(0.72_0.16_72/0.4)] mb-6">
              State-of-the-Art Equipment
            </div>
            <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              A Machine Built for
              <br />
              <span className="text-[oklch(0.72_0.16_72)] italic">Modern Schools</span>
            </h2>
            <p className="font-body text-[oklch(0.82_0.02_85)] text-lg leading-relaxed mb-10">
              Every machine is brand-new, built specifically for your location, and packed with technology that makes it the most advanced vending solution available.
            </p>

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
                    <div className="bg-[oklch(0.38_0.09_155/0.5)] hover:bg-[oklch(0.38_0.09_155/0.7)] rounded-lg p-4 transition-all duration-300 border border-[oklch(0.50_0.09_155/0.3)] hover:border-[oklch(0.72_0.16_72/0.4)] h-full">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-[oklch(0.72_0.16_72/0.2)] rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-[oklch(0.72_0.16_72)]" />
                        </div>
                        <div>
                          <h3 className="font-body font-bold text-white text-sm mb-1">{feature.title}</h3>
                          <p className="font-body text-[oklch(0.75_0.02_85)] text-xs leading-relaxed">{feature.description}</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.09_155/0.6)] to-transparent" />

            </div>

            {/* Floating stat */}
            <div className="absolute -top-4 -right-4 bg-[oklch(0.75_0.17_75)] rounded-xl p-4 shadow-xl">
              <div className="font-display text-[oklch(0.18_0.005_285)] text-3xl font-bold leading-none">2×</div>
              <div className="font-body text-[oklch(0.25_0.005_285)] text-xs font-semibold mt-0.5">More Sales</div>
              <div className="font-body text-[oklch(0.35_0.005_285)] text-xs">vs. junk machines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SMART COOLER SECTION — Bold Organic Modernism
   Warm cream background, forest green headings, amber accents
   Highlights the free AI smart cooler for teachers' lounges
   ============================================================ */

import { useEffect, useRef } from "react";
import { Cpu, Thermometer, CreditCard, RefreshCw, Coffee, Leaf } from "lucide-react";

const COOLER_IMG = "/manus-storage/ai-smart-cooler_14a4d7e4.jpg";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Inventory",
    description: "Smart sensors track every item in real time. We restock before you run out — no empty shelves, no manual counts.",
  },
  {
    icon: CreditCard,
    title: "Cashless & Contactless",
    description: "Tap, swipe, or use a mobile wallet. Fast checkout so teachers get back to their day.",
  },
  {
    icon: Thermometer,
    title: "Chilled & Fresh",
    description: "Refrigerated unit keeps drinks cold and snacks at the right temperature around the clock.",
  },
  {
    icon: Leaf,
    title: "Healthy Options",
    description: "Stocked with better-for-you drinks and snacks. No junk food — just real choices teachers appreciate.",
  },
  {
    icon: RefreshCw,
    title: "We Handle Everything",
    description: "Installation, restocking, and maintenance are all on us. Zero work for your staff.",
  },
  {
    icon: Coffee,
    title: "Built for the Lounge",
    description: "Compact footprint designed for break rooms and teachers' lounges. Fits where a standard fridge would.",
  },
];

export default function SmartCooler() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".cooler-item");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0)";
              }, i * 90);
            });
            const hero = entry.target.querySelector(".cooler-hero") as HTMLElement | null;
            if (hero) {
              hero.style.opacity = "1";
              hero.style.transform = "translateX(0)";
            }
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
      ref={sectionRef}
      id="smart-cooler"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 Q55 25 55 40 Q55 55 40 70 Q25 55 25 40 Q25 25 40 10Z' fill='%231B4332'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Text */}
          <div>
            <div className="badge-pill bg-[oklch(0.58_0.16_145/0.10)] text-[oklch(0.58_0.16_145)] border border-[oklch(0.58_0.16_145/0.25)] mb-4">
              Also Free for Qualified Schools
            </div>
            <h2 className="font-display text-[oklch(0.18_0.005_285)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              Free AI Smart Coolers
              <br />
              <span className="text-[oklch(0.58_0.16_145)] italic">for Your Teachers' Lounge</span>
            </h2>
            <p className="font-body text-[oklch(0.40_0.01_285)] text-lg leading-relaxed mb-6">
              Your teachers work hard. Give them a dedicated space to grab a cold drink or a healthy snack without leaving the building. Our AI smart coolers are free for qualified schools — installed, stocked, and maintained at no cost to you.
            </p>
            <div className="bg-[oklch(0.96_0.04_145)] border border-[oklch(0.88_0.08_145)] rounded-xl p-5">
              <p className="font-body text-[oklch(0.32_0.14_145)] font-semibold text-sm leading-relaxed">
                Stocked with healthy drinks and snacks. No junk food. No compliance headaches. Just a better break room experience for the people who run your school.
              </p>
            </div>
          </div>

          {/* Right: Cooler image */}
          <div
            className="cooler-hero flex justify-center lg:justify-end"
            style={{
              opacity: 0,
              transform: "translateX(30px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-[oklch(0.58_0.16_145/0.10)] rounded-2xl blur-3xl scale-90" />
              <img
                src={COOLER_IMG}
                alt="AI smart cooler for teachers lounge stocked with healthy drinks and snacks"
                className="relative z-10 w-full max-w-xs lg:max-w-sm rounded-2xl shadow-2xl object-cover"
                style={{ filter: "drop-shadow(0 20px 40px oklch(0.42 0.16 145 / 0.20))" }}
                loading="lazy"
              />
              {/* Free badge */}
              <div className="absolute -top-4 -left-4 bg-[oklch(0.84_0.20_95)] text-[oklch(0.12_0.005_285)] rounded-lg px-4 py-2 shadow-lg z-20">
                <div className="font-mono-brand text-xs font-bold uppercase tracking-wide">100% FREE</div>
                <div className="font-body text-xs font-semibold">For Qualified Schools</div>
              </div>
              {/* AI badge */}
              <div className="absolute bottom-6 -right-4 bg-white rounded-lg px-3 py-2 shadow-lg z-20 text-center border border-[oklch(0.90_0.04_145)]">
                <div className="font-mono-brand text-xs font-bold text-[oklch(0.58_0.16_145)] uppercase tracking-wide">AI</div>
                <div className="font-body text-xs text-[oklch(0.70_0.14_145)] font-medium">Smart</div>
                <div className="font-body text-xs text-[oklch(0.70_0.14_145)]">Cooler</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="cooler-item bg-[oklch(0.97_0.02_145)] rounded-xl p-5 border border-[oklch(0.90_0.04_145)] hover:border-[oklch(0.58_0.16_145/0.35)] hover:shadow-md transition-all duration-300"
                style={{
                  opacity: 0,
                  transform: "translateY(25px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[oklch(0.58_0.16_145)] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-[oklch(0.32_0.14_145)] text-sm mb-1">{feature.title}</h3>
                    <p className="font-body text-[oklch(0.45_0.06_145)] text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-12 text-center">
          <a
            href="#qualify"
            className="btn-amber text-base py-4 px-10 inline-flex items-center gap-2"
          >
            See If Your School Qualifies
          </a>
          <p className="font-body text-[oklch(0.50_0.01_285)] text-sm mt-3">
            One qualification form covers both the vending machine and the smart cooler.
          </p>
        </div>
      </div>
    </section>
  );
}

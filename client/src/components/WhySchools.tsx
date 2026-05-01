/* ============================================================
   WHY SCHOOLS — Bold Organic Modernism
   Targeted messaging for principals, cream background
   ============================================================ */

import { useEffect, useRef } from "react";
import { GraduationCap, Heart, DollarSign, Shield, Users, Star } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Zero Budget Impact",
    description: "No capital expenditure, no operating costs, no maintenance budget required. The machine is completely free — forever.",
  },
  {
    icon: Heart,
    title: "Student Wellness",
    description: "Give your students access to nutritious options that improve focus, energy, and long-term eating habits. Parents and wellness committees will thank you.",
  },
  {
    icon: Shield,
    title: "USDA Compliant",
    description: "Every product meets USDA Smart Snacks in Schools guidelines. No compliance headaches, no policy violations — we handle it all.",
  },
  {
    icon: DollarSign,
    title: "Zero Cost to Your School",
    description: "No equipment fees, no installation charges, and no maintenance costs. The program is completely free for qualified schools.",
  },
  {
    icon: Users,
    title: "Serves Everyone",
    description: "ADA compliant, accepts all payment methods, and offers products at every price point — accessible to every student in your school.",
  },
  {
    icon: Star,
    title: "Dedicated Service",
    description: "Our team handles all restocking, maintenance, and support. You get a reliable partner committed to keeping your machine running at its best.",
  },
];

export default function WhySchools() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".why-item");
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[oklch(0.96_0.04_145)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="badge-pill bg-[oklch(0.58_0.16_145/0.08)] text-[oklch(0.58_0.16_145)] border border-[oklch(0.58_0.16_145/0.2)] mb-4">
              For School Principals
            </div>
            <h2 className="font-display text-[oklch(0.18_0.005_285)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Why Principals
              <br />
              <span className="text-[oklch(0.58_0.16_145)] italic">Choose Legacy Way</span>
            </h2>
          </div>
          <div>
            <p className="font-body text-[oklch(0.40_0.01_285)] text-lg leading-relaxed">
              As a school principal in Upstate South Carolina, you're responsible for student wellness, budget management, and facility operations. Our free healthy vending program addresses all three for schools in Greenville, Spartanburg, Pickens, York, and Cherokee counties — without adding a single item to your to-do list.
            </p>

          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className="why-item bg-white rounded-xl p-6 border border-[oklch(0.90_0.04_145)] hover:border-[oklch(0.58_0.16_145/0.3)] hover:shadow-md transition-all duration-300"
                style={{
                  opacity: 0,
                  transform: "translateY(25px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                }}
              >
                <div className="w-11 h-11 bg-[oklch(0.58_0.16_145/0.08)] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[oklch(0.58_0.16_145)]" />
                </div>
                <h3 className="font-display text-[oklch(0.18_0.005_285)] text-lg font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="font-body text-[oklch(0.44_0.04_145)] text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a href="#qualify" className="btn-amber text-base py-4 px-10 inline-flex">
            Check Your School's Eligibility
          </a>
        </div>
      </div>
    </section>
  );
}

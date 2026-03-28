/* ============================================================
   PRODUCTS SECTION — Bold Organic Modernism
   Cream background, price tiers, snacks image
   ============================================================ */

import { useEffect, useRef } from "react";

const SNACKS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/healthy-snacks-spread-Ba52yKJg2AoU8JCLV9dJjf.webp";

const priceTiers = [
  {
    range: "$1.00 – $1.75",
    items: "Chips, Popcorn, Juices & Sodas",
    description: "Everyday snacks and drinks students reach for between classes.",
    color: "oklch(0.28_0.09_155)",
  },
  {
    range: "$2.00 – $2.50",
    items: "Protein Bars, Fruit Bars, Teas, Yogurts & Smoothies",
    description: "Nutritious options that fuel focus and sustained energy.",
    color: "oklch(0.38_0.09_155)",
    highlight: true,
  },
  {
    range: "$2.25 – $3.50",
    items: "Energy Drinks, Cold Brews, Meal Replacements & Jerky",
    description: "Premium selections for athletes and students on the go.",
    color: "oklch(0.75_0.17_75)",
  },
];

const productHighlights = [
  "KIND Bars & Larabars",
  "Organic Trail Mix",
  "Chobani Yogurt Pouches",
  "Bai Antioxidant Drinks",
  "KeVita Kombucha",
  "Epic Meat Sticks",
  "Organic Popcorn",
  "Coconut Water",
  "Cold Brew Coffee",
  "Protein Smoothies",
  "Fruit & Nut Mixes",
  "Veggie Chips",
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".product-reveal");
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
    <section
      id="products"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[oklch(0.99_0.005_90)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-pill bg-[oklch(0.28_0.09_155/0.08)] text-[oklch(0.28_0.09_155)] border border-[oklch(0.28_0.09_155/0.2)] mb-4 mx-auto">
            USDA Smart Snacks Compliant
          </div>
          <h2 className="font-display text-[oklch(0.18_0.005_285)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Snacks Students
            <span className="text-[oklch(0.28_0.09_155)] italic"> Actually Want</span>
          </h2>
          <p className="font-body text-[oklch(0.45_0.01_285)] text-lg leading-relaxed">
            Our curated product selection meets every dietary preference and price point — from everyday snacks to premium wellness options. All USDA Smart Snacks in Schools compliant.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div
            className="product-reveal rounded-2xl overflow-hidden shadow-xl"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            <img
              src={SNACKS_IMG}
              alt="Healthy snack products available in Legacy Way Vending machines"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: Price tiers + product list */}
          <div className="space-y-6">
            {/* Price tiers */}
            {priceTiers.map((tier, i) => (
              <div
                key={i}
                className={`product-reveal rounded-xl p-5 border transition-all duration-300 hover:shadow-md ${
                  tier.highlight
                    ? "bg-[oklch(0.28_0.09_155)] border-[oklch(0.38_0.09_155)] text-white"
                    : "bg-white border-[oklch(0.90_0.01_90)] hover:border-[oklch(0.28_0.09_155/0.3)]"
                }`}
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${i * 0.1}s, transform 0.5s ease-out ${i * 0.1}s`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div
                      className={`font-mono-brand text-xs font-bold uppercase tracking-widest mb-1 ${
                        tier.highlight ? "text-[oklch(0.75_0.17_75)]" : "text-[oklch(0.28_0.09_155)]"
                      }`}
                    >
                      {tier.items}
                    </div>
                    <p
                      className={`font-body text-sm leading-relaxed ${
                        tier.highlight ? "text-[oklch(0.80_0.02_155)]" : "text-[oklch(0.45_0.01_285)]"
                      }`}
                    >
                      {tier.description}
                    </p>
                  </div>
                  <div
                    className={`font-display text-xl font-bold flex-shrink-0 ${
                      tier.highlight ? "text-[oklch(0.75_0.17_75)]" : "text-[oklch(0.28_0.09_155)]"
                    }`}
                  >
                    {tier.range}
                  </div>
                </div>
              </div>
            ))}

            {/* Product tags */}
            <div
              className="product-reveal"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s",
              }}
            >
              <p className="font-body text-[oklch(0.45_0.01_285)] text-sm font-medium mb-3">
                Popular products include:
              </p>
              <div className="flex flex-wrap gap-2">
                {productHighlights.map((product) => (
                  <span
                    key={product}
                    className="badge-pill bg-[oklch(0.28_0.09_155/0.08)] text-[oklch(0.28_0.09_155)] border border-[oklch(0.28_0.09_155/0.15)] text-xs py-1"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>

            {/* USDA note */}
            <div className="bg-[oklch(0.75_0.17_75/0.1)] border border-[oklch(0.75_0.17_75/0.3)] rounded-lg p-4">
              <p className="font-body text-[oklch(0.35_0.05_155)] text-sm font-medium">
                <strong>USDA Smart Snacks in Schools Compliant</strong> — Full menus available for Middle Schools, High Schools, and Elementary Schools. We have more product variety at lower prices than any standard vending company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

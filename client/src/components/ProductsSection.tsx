/* ============================================================
   PRODUCTS SECTION — Bold Organic Modernism
   Three public price tiers from FHV. No brand names.
   No planogram images. No proprietary product lists.
   Site design: green/amber palette, Playfair headings.
   ============================================================ */

import { CheckCircle2, ShieldCheck, Leaf } from "lucide-react";

const TIER1_PHOTO =
  "/images/fhv-tier1-photo.png";
const TIER2_PHOTO =
  "/images/fhv-tier2-photo.png";
const TIER3_PHOTO =
  "/images/fhv-tier3-photo.png";

const tiers = [
  {
    label: "Chips, Popcorn, Juices & Sodas",
    price: "$1.00 – $1.75",
    photo: TIER1_PHOTO,
    alt: "Healthy chips, popcorn, juices, and sodas",
    colorClass: "bg-amber-50 border-amber-200",
    badgeClass: "bg-amber-100 text-amber-900",
  },
  {
    label: "Protein or Fruit Bars & Teas",
    price: "$2.00 – $2.50",
    photo: TIER2_PHOTO,
    alt: "Protein bars, fruit bars, and teas",
    colorClass: "bg-green-50 border-green-200",
    badgeClass: "bg-green-100 text-green-900",
  },
  {
    label: "Energy Drinks, Cold Brews & Jerky",
    price: "$2.25 – $3.50",
    photo: TIER3_PHOTO,
    alt: "Energy drinks, cold brews, and jerky",
    colorClass: "bg-sky-50 border-sky-200",
    badgeClass: "bg-sky-100 text-sky-900",
    note: "Caffeinated drinks available for high schools only. Not stocked in middle school machines.",
  },
];

type Tier = {
  label: string;
  price: string;
  photo: string;
  alt: string;
  colorClass: string;
  badgeClass: string;
  note?: string;
};

const highlights = [
  { icon: ShieldCheck, text: "100% USDA Smart Snacks compliant" },
  { icon: Leaf, text: "Healthy, organic, and better-for-you options" },
  { icon: CheckCircle2, text: "More variety than standard vending" },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-[oklch(0.96_0.04_145)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge-pill bg-[oklch(0.58_0.16_145/0.08)] text-[oklch(0.58_0.16_145)] border border-[oklch(0.58_0.16_145/0.2)] mb-4 mx-auto">
            USDA Smart Snacks Compliant
          </div>
          <h2 className="font-display text-[oklch(0.18_0.005_285)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Healthier Snacks &{" "}
            <em className="text-[oklch(0.80_0.18_95)] not-italic">Great Taste</em>
          </h2>
          <p className="font-body text-[oklch(0.44_0.04_145)] text-lg leading-relaxed">
            Our machines stock healthy, organic, and better-for-you products at prices students
            can afford. Every item meets USDA Smart Snacks in Schools standards.
          </p>
        </div>

        {/* Three tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className={`rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow ${tier.colorClass}`}
            >
              {/* Product photo */}
              <div className="bg-white flex items-center justify-center p-4 h-44">
                <img
                  src={tier.photo}
                  alt={tier.alt}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              {/* Label + price */}
              <div className="p-5">
                <p className="font-display font-bold text-[oklch(0.28_0.10_145)] text-base leading-snug mb-3">
                  {tier.label}
                </p>
                <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full ${tier.badgeClass}`}>
                  {tier.price}
                </span>
                {(tier as Tier).note && (
                  <p className="mt-3 text-xs text-[oklch(0.44_0.04_145)] leading-snug border-t border-sky-200 pt-3">
                    {(tier as Tier).note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights bar */}
        <div className="bg-[oklch(0.58_0.16_145)] rounded-2xl px-6 py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-10">
          {highlights.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white text-sm font-medium">
              <Icon className="w-4 h-4 text-[oklch(0.80_0.18_95)]" />
              {text}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-[oklch(0.44_0.04_145)] mb-5 text-base">
            Our healthy vending program outperforms traditional junk-food machines 2-to-1 — and it costs your school nothing.
          </p>
          <a href="#qualify" className="btn-amber inline-flex items-center gap-2 text-base">
            Check If Your School Qualifies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

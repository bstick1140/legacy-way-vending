/* ============================================================
   PRODUCTS SECTION — Bold Organic Modernism
   Uses only product categories publicly shown on freehealthyvending.com
   Three price tiers with FHV product spread images
   No yogurt, no protein shakes, no meal replacements
   ============================================================ */

import { CheckCircle2, ShieldCheck, Leaf } from "lucide-react";

const TIER1_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/fhv-tier1-chips-juices_a6c68e60.webp";
const TIER3_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/fhv-tier3-energy-jerky_1d042fdf.webp";
const SPREAD_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/fhv-product-spread-hero_f5832e3d.webp";

const tiers = [
  {
    id: "tier1",
    label: "Chips, Popcorn, Juices & Sodas",
    price: "$1.00 – $1.75",
    image: TIER1_IMAGE,
    imageAlt: "Healthy chips, popcorn, juices, and sodas available in the vending machine",
    colorClass: "bg-amber-100 text-amber-900",
    borderClass: "border-amber-200",
  },
  {
    id: "tier2",
    label: "Protein or Fruit Bars & Teas",
    price: "$2.00 – $2.50",
    image: null,
    imageAlt: null,
    colorClass: "bg-green-100 text-green-900",
    borderClass: "border-green-200",
  },
  {
    id: "tier3",
    label: "Energy Drinks, Cold Brews & Jerky",
    price: "$2.25 – $3.50",
    image: TIER3_IMAGE,
    imageAlt: "Healthy energy drinks, cold brews, and jerky available in the vending machine",
    colorClass: "bg-sky-100 text-sky-900",
    borderClass: "border-sky-200",
  },
];

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
            Our machines stock healthy, organic, and better-for-you products at prices your students
            can afford. Every item meets USDA Smart Snacks in Schools standards.
          </p>
        </div>

        {/* Product spread image */}
        <div className="flex justify-center mb-12">
          <img
            src={SPREAD_IMAGE}
            alt="Full range of healthy vending products available from Free Healthy Vending"
            className="max-w-lg w-full object-contain drop-shadow-xl"
            loading="lazy"
          />
        </div>

        {/* Three price tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-white rounded-2xl border ${tier.borderClass} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
            >
              {tier.image && (
                <img
                  src={tier.image}
                  alt={tier.imageAlt ?? ""}
                  className="w-full h-40 object-cover object-center"
                  loading="lazy"
                />
              )}
              {!tier.image && (
                <div className="w-full h-40 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                  <Leaf className="w-12 h-12 text-[oklch(0.58_0.16_145/0.4)]" />
                </div>
              )}
              <div className="p-5">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${tier.colorClass}`}>
                  {tier.price}
                </span>
                <p className="font-body font-semibold text-[oklch(0.28_0.10_145)] text-base leading-snug">
                  {tier.label}
                </p>
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

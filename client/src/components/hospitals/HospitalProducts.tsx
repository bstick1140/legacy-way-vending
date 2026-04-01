/* ============================================================
   HOSPITAL PRODUCTS — Legacy Way Vending
   Three price tiers using product photos from FHV public site.
   Site design: green/amber palette.
   No yogurt, no protein shakes, no meal replacements.
   ============================================================ */

import { Leaf, CheckCircle } from "lucide-react";

const TIER1_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/fhv-tier1-photo_34180e20.png";
const TIER2_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/fhv-tier2-photo_7b55f5b9.png";
const TIER3_PHOTO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/fhv-tier3-photo_b1a63753.png";

const tiers = [
  {
    name: "Chips, Popcorn, Juices & Sodas",
    price: "$1.00 – $1.75",
    photo: TIER1_PHOTO,
    alt: "Healthy chips, popcorn, juices, and sodas",
  },
  {
    name: "Protein or Fruit Bars & Teas",
    price: "$2.00 – $2.50",
    photo: TIER2_PHOTO,
    alt: "Protein bars, fruit bars, and teas",
  },
  {
    name: "Energy Drinks, Cold Brews & Jerky",
    price: "$2.25 – $3.50",
    photo: TIER3_PHOTO,
    alt: "Energy drinks, cold brews, and jerky",
  },
];

const standards = [
  "No artificial colors or flavors",
  "Organic and better-for-you options",
  "Carefully selected for taste and nutrition",
  "Products your staff will actually enjoy",
  "Custom selections available on request",
];

export default function HospitalProducts() {
  return (
    <section id="hospital-products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[oklch(0.96_0.04_145)] border border-[oklch(0.88_0.08_145)] rounded-full px-4 py-1.5 mb-4">
            <Leaf className="w-3.5 h-3.5 text-[oklch(0.58_0.16_145)]" />
            <span className="font-body text-[oklch(0.42_0.12_145)] text-xs font-semibold uppercase tracking-widest">
              Healthy Products
            </span>
          </div>
          <h2 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Snacks That Taste Good
            <br />
            <span className="text-[oklch(0.58_0.16_145)]">and Are Good for You</span>
          </h2>
          <p className="font-body text-[oklch(0.45_0.008_60)] text-lg max-w-2xl mx-auto leading-relaxed">
            Unlike the bland health food machines you may have seen elsewhere, our products are carefully chosen to be both nutritious and genuinely enjoyable. Your staff will actually use this machine.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Product tier cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-[oklch(0.99_0.005_145)] border border-[oklch(0.92_0.04_145)] rounded-2xl overflow-hidden">
                {/* Product photo */}
                <div className="bg-white flex items-center justify-center p-3 h-36">
                  <img
                    src={tier.photo}
                    alt={tier.alt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                {/* Label + price */}
                <div className="p-4">
                  <p className="font-display font-bold text-[oklch(0.28_0.10_145)] text-sm leading-snug mb-2">
                    {tier.name}
                  </p>
                  <span className="font-body text-xs font-semibold text-[oklch(0.58_0.16_145)] bg-[oklch(0.96_0.04_145)] px-2 py-0.5 rounded-full">
                    {tier.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Standards sidebar */}
          <div className="bg-[oklch(0.42_0.16_145)] rounded-2xl p-6 text-white flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-xl mb-2">Our Product Standards</h3>
              <p className="font-body text-white/80 text-sm mb-5 leading-relaxed">
                Every product in the machine meets strict nutritional criteria. No exceptions.
              </p>
              <ul className="space-y-3">
                {standards.map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[oklch(0.80_0.18_95)] flex-shrink-0 mt-0.5" />
                    <span className="font-body text-white/90 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-5 border-t border-white/20">
              <p className="font-body text-white/70 text-xs">
                Sample menu shown. Actual selection may vary based on availability and facility preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center">
          <p className="font-body text-[oklch(0.55_0.008_60)] text-sm">
            Interested in a custom product selection for your facility? We discuss specific preferences during your consultation.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOSPITAL PRODUCTS — Legacy Way Vending
   Healthy packaged snacks and beverages only.
   No fresh items, protein shakes, or meal replacements.
   ============================================================ */

import { Leaf, CheckCircle } from "lucide-react";

const categories = [
  {
    name: "Chips & Popcorn",
    items: [
      "PopCorners (Kettle Corn, Sea Salt, White Cheddar)",
      "Lays Kettle Cooked (Original, Jalapeño, BBQ)",
      "PopChips (Original, BBQ, Hot)",
      "Smartfood White Cheddar Popcorn",
    ],
  },
  {
    name: "Bars & Snacks",
    items: [
      "Grains Bar",
      "Baked Bar",
      "Granola Bars (multiple varieties)",
      "Fig Bars & Fig Brownie",
      "Made Good Granola Bars",
      "GoGo Squeez & Smoothie Pouches",
    ],
  },
  {
    name: "Beverages",
    items: [
      "Poland Spring Water",
      "Nurri Water",
      "Vita Coco Coconut Water",
      "Dole Juices",
      "IZZE Sparkling Juices (Berry, Peach)",
    ],
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
          {/* Product categories */}
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-[oklch(0.99_0.005_145)] border border-[oklch(0.92_0.04_145)] rounded-2xl p-5">
                <h3 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-base mb-3 pb-2 border-b border-[oklch(0.92_0.04_145)]">
                  {cat.name}
                </h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="font-body text-[oklch(0.45_0.008_60)] text-xs leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
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

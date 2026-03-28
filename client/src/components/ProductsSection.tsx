/* ============================================================
   PRODUCTS SECTION — Bold Organic Modernism
   Tabbed display: High School vs Middle School planograms
   Cream background, amber tab accents, Playfair headings
   ============================================================ */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, CheckCircle2, ShieldCheck, Leaf } from "lucide-react";

const HS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/planogram-hs-v2-JK36gjR4XZSFrEHWiMPKsE.webp";
const MS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/planogram-ms-v2-HBfwSJesXmrgh2YM2xcG7P.webp";

const tabs = [
  {
    id: "hs",
    label: "High School",
    icon: GraduationCap,
    image: HS_IMAGE,
    imageAlt: "High School vending machine product menu — chips, bars, protein shakes, juices",
    badge: "Grades 9–12",
    tagline: "More variety, higher price points — including protein shakes & sparkling juices.",
    categories: [
      {
        name: "Chips & Popcorn",
        colorClass: "bg-amber-100 text-amber-900",
        items: [
          "PopCorners (Kettle Corn, Sea Salt, White Cheddar)",
          "Lays Kettle Cooked (Original, Jalapeño, BBQ)",
          "PopChips (Original, BBQ, Hot)",
          "Smartfood White Cheddar Popcorn",
        ],
      },
      {
        name: "Bars & Snacks",
        colorClass: "bg-green-100 text-green-900",
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
        colorClass: "bg-sky-100 text-sky-900",
        items: [
          "Poland Spring Water",
          "Nurri Water",
          "Fairlife Protein Shakes (Chocolate & Vanilla)",
          "Num Protein Shakes",
          "Vita Coco Coconut Water",
          "Dole Juices",
          "IZZE Sparkling Juices (Berry, Peach)",
        ],
      },
    ],
    highlights: [
      { icon: ShieldCheck, text: "100% USDA Smart Snacks compliant" },
      { icon: Leaf, text: "No artificial colors or flavors" },
      { icon: CheckCircle2, text: "Protein options for active students" },
    ],
    priceRange: "$1.00 – $3.50",
  },
  {
    id: "ms",
    label: "Middle School",
    icon: BookOpen,
    image: MS_IMAGE,
    imageAlt: "Middle School vending machine product menu — chips, bars, juices, no caffeine",
    badge: "Grades 6–8",
    tagline: "Caffeine-free beverages only — age-appropriate, parent-approved options.",
    categories: [
      {
        name: "Chips & Popcorn",
        colorClass: "bg-amber-100 text-amber-900",
        items: [
          "PopCorners (Kettle Corn, Sea Salt, White Cheddar)",
          "Lays Kettle Cooked (Original, Jalapeño, BBQ)",
          "PopChips (Original, BBQ, Hot)",
          "Smartfood White Cheddar Popcorn",
        ],
      },
      {
        name: "Bars & Snacks",
        colorClass: "bg-green-100 text-green-900",
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
        name: "Beverages — Caffeine-Free",
        colorClass: "bg-purple-100 text-purple-900",
        items: [
          "Poland Spring Water",
          "Nurri Water",
          "Dole Apple Juice",
          "Dole Orange Juice",
          "IZZE Sparkling Juices (Berry, Peach, Apple, Orange)",
          "Chocolate Milk",
        ],
      },
    ],
    highlights: [
      { icon: ShieldCheck, text: "100% USDA Smart Snacks compliant" },
      { icon: Leaf, text: "Zero caffeine — age-appropriate" },
      { icon: CheckCircle2, text: "Parent & administrator approved" },
    ],
    priceRange: "$1.00 – $2.00",
  },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"hs" | "ms">("hs");
  const active = tabs.find((t) => t.id === activeTab)!;
  const ActiveIcon = active.icon;

  return (
    <section id="products" className="py-20 lg:py-28 bg-[oklch(0.99_0.005_90)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge-pill bg-[oklch(0.28_0.09_155/0.08)] text-[oklch(0.28_0.09_155)] border border-[oklch(0.28_0.09_155/0.2)] mb-4 mx-auto">
            USDA Smart Snacks Compliant
          </div>
          <h2 className="font-display text-[oklch(0.18_0.005_285)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Sample Menu —{" "}
            <em className="text-[oklch(0.75_0.17_75)] not-italic">By School Type</em>
          </h2>
          <p className="font-body text-[oklch(0.45_0.01_285)] text-lg leading-relaxed">
            Select your school type below to preview a representative product menu. Every item meets
            USDA Smart Snacks in Schools standards — curated specifically for each grade level.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[oklch(0.93_0.01_90)] rounded-xl p-1.5 gap-1 shadow-inner">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "hs" | "ms")}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-lg font-body font-semibold text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[oklch(0.28_0.09_155)] text-white shadow-lg"
                      : "text-[oklch(0.45_0.01_285)] hover:text-[oklch(0.28_0.09_155)] hover:bg-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      isActive
                        ? "bg-[oklch(0.75_0.17_75)] text-[oklch(0.18_0.005_285)]"
                        : "bg-[oklch(0.88_0.01_90)] text-[oklch(0.50_0.01_285)]"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            {/* Tagline */}
            <p className="text-center text-[oklch(0.50_0.01_285)] mb-8 flex items-center justify-center gap-2 text-sm font-medium">
              <ActiveIcon className="w-4 h-4 text-[oklch(0.28_0.09_155)]" />
              {active.tagline}
            </p>

            {/* Sample menu disclaimer banner */}
            <div className="flex items-center justify-center gap-2.5 bg-[oklch(0.75_0.17_75/0.12)] border border-[oklch(0.75_0.17_75/0.35)] rounded-xl px-5 py-3 mb-6 max-w-2xl mx-auto">
              <svg className="w-4 h-4 text-[oklch(0.55_0.12_75)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-[oklch(0.40_0.08_75)] font-medium">
                <strong>Sample menu only.</strong> Actual product selection may vary based on availability and school preferences.
              </p>
            </div>

            {/* Planogram image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[oklch(0.28_0.09_155/0.15)] mb-10 border border-[oklch(0.90_0.01_90)]">
              <img
                src={active.image}
                alt={active.imageAlt}
                className="w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Product categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {active.categories.map((cat) => (
                <div
                  key={cat.name}
                  className="bg-white rounded-xl border border-[oklch(0.90_0.01_90)] p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${cat.colorClass}`}>
                    {cat.name}
                  </span>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[oklch(0.35_0.01_285)]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.28_0.09_155)] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Highlights + price bar */}
            <div className="bg-[oklch(0.28_0.09_155)] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
                {active.highlights.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-white text-sm font-medium">
                    <Icon className="w-4 h-4 text-[oklch(0.75_0.17_75)]" />
                    {text}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[oklch(0.75_0.17_75)] text-sm font-medium">Price range:</span>
                <span className="bg-[oklch(0.75_0.17_75)] text-[oklch(0.18_0.005_285)] font-bold text-sm px-4 py-1.5 rounded-full">
                  {active.priceRange}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-[oklch(0.55_0.01_285)] text-xs italic mb-2">
            * Sample menus shown above. Actual product selection may vary based on availability, regional distribution, and school preferences.
          </p>
          <p className="text-[oklch(0.45_0.01_285)] mb-5 text-base">
            More variety at lower prices than any standard vending company — and always 100% USDA Smart Snacks compliant.
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

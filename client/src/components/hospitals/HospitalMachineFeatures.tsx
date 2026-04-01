/* ============================================================
   HOSPITAL MACHINE FEATURES — Legacy Way Vending
   Highlights machine tech relevant to medical facilities:
   SureVend, ADA compliance, Health & Safety Lock, cashless.
   ============================================================ */

import { ShieldCheck, Accessibility, CreditCard, Wifi, Thermometer, RefreshCw } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "SureVend™ Guaranteed Delivery",
    description:
      "Infrared sensors confirm every product drops. If it doesn't, the machine automatically retries — and issues a full refund if needed. Zero complaints to your staff.",
  },
  {
    icon: Accessibility,
    title: "100% ADA Compliant",
    description:
      "All payment and product selection components are positioned between 15\" and 48\", meeting all Americans with Disabilities Act requirements — important for hospital environments.",
  },
  {
    icon: Thermometer,
    title: "Health & Safety Lock",
    description:
      "The machine automatically locks if a perishable product is detected as spoiled, protecting patients, staff, and your facility from any liability.",
  },
  {
    icon: CreditCard,
    title: "All Payment Methods Accepted",
    description:
      "Cash, coins, debit and credit cards, Apple Pay, and Google Pay. Every patient, visitor, and staff member can pay the way they prefer.",
  },
  {
    icon: Wifi,
    title: "Remote Monitoring",
    description:
      "We monitor inventory and machine health remotely. Restocking happens proactively — the machine is never empty when your staff needs it most.",
  },
  {
    icon: RefreshCw,
    title: "Full Service — We Handle Everything",
    description:
      "Installation, restocking, cleaning, and maintenance are all our responsibility. Your facilities team has zero involvement after the machine is placed.",
  },
];

export default function HospitalMachineFeatures() {
  return (
    <section id="hospital-features" className="py-20 bg-[oklch(0.97_0.008_145)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-[oklch(0.88_0.08_145)] rounded-full px-4 py-1.5 mb-4">
            <span className="font-body text-[oklch(0.42_0.12_145)] text-xs font-semibold uppercase tracking-widest">
              State-of-the-Art Equipment
            </span>
          </div>
          <h2 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Built for the Demands of
            <br />
            <span className="text-[oklch(0.58_0.16_145)]">Healthcare Environments</span>
          </h2>
          <p className="font-body text-[oklch(0.45_0.008_60)] text-lg max-w-2xl mx-auto leading-relaxed">
            Every machine is brand-new and purpose-built. The technology inside is designed to operate reliably in high-traffic, 24/7 environments — exactly what hospitals and clinics require.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white border border-[oklch(0.92_0.04_145)] rounded-2xl p-6 hover:shadow-md hover:shadow-[oklch(0.18_0.005_285/0.06)] transition-shadow duration-200"
              >
                <div className="w-10 h-10 bg-[oklch(0.42_0.16_145)] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-lg mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="font-body text-[oklch(0.45_0.008_60)] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

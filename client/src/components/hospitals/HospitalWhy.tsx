/* ============================================================
   HOSPITAL WHY — Legacy Way Vending
   Addresses the core concerns of facilities directors,
   operations managers, and food services directors.
   ============================================================ */

import { Heart, TrendingUp, Users, Award, Clock, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Supports a Culture of Wellness",
    description:
      "When your facility provides healthy snack options, it reinforces your commitment to health and well-being — for staff, patients, and visitors alike. Healthy eating habits start with access.",
  },
  {
    icon: Users,
    title: "Staff Who Eat Better, Perform Better",
    description:
      "Healthcare workers face long shifts and high-stress environments. Easy access to nutritious snacks helps sustain energy, focus, and morale — without leaving the building.",
  },
  {
    icon: TrendingUp,
    title: "Enhances Your Facility's Reputation",
    description:
      "Patients and visitors notice the details. A vending machine stocked with great-tasting, healthy options signals that your facility takes health seriously at every level.",
  },
  {
    icon: Award,
    title: "Great Taste — Not Bland Health Food",
    description:
      "Our products are carefully selected to be both nutritious and genuinely enjoyable. Staff and patients will actually want to use the machine — not avoid it.",
  },
  {
    icon: Leaf,
    title: "Healthy, Organic, Better-for-You Products",
    description:
      "Every item in the machine meets strict nutritional standards. No artificial colors, no junk. Just clean, better-for-you snacks and beverages your team can feel good about.",
  },
  {
    icon: Clock,
    title: "Zero Work for Your Team",
    description:
      "We handle installation, restocking, and all maintenance. Your facilities team never touches the machine. You simply enjoy the benefit.",
  },
];

export default function HospitalWhy() {
  return (
    <section id="hospital-why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[oklch(0.96_0.04_145)] border border-[oklch(0.88_0.08_145)] rounded-full px-4 py-1.5 mb-4">
            <span className="font-body text-[oklch(0.42_0.12_145)] text-xs font-semibold uppercase tracking-widest">
              For Medical Facilities
            </span>
          </div>
          <h2 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Why Medical Facilities
            <br />
            <span className="text-[oklch(0.58_0.16_145)]">Choose Legacy Way Vending</span>
          </h2>
            <p className="font-body text-[oklch(0.45_0.008_60)] text-lg max-w-2xl mx-auto leading-relaxed">
            Free Healthy Vending services are used successfully in hospitals and medical facilities across the country, including facilities in Greenville, Spartanburg, Pickens, York, and Cherokee counties, SC. Here is why facilities directors and operations managers choose this program.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-[oklch(0.99_0.005_145)] border border-[oklch(0.92_0.04_145)] rounded-2xl p-6 hover:shadow-md hover:shadow-[oklch(0.18_0.005_285/0.06)] transition-shadow duration-200"
              >
                <div className="w-10 h-10 bg-[oklch(0.96_0.04_145)] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[oklch(0.58_0.16_145)]" />
                </div>
                <h3 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-lg mb-2 leading-snug">
                  {reason.title}
                </h3>
                <p className="font-body text-[oklch(0.45_0.008_60)] text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Community impact callout */}
        <div className="mt-12 bg-[oklch(0.42_0.16_145)] rounded-2xl p-8 text-white text-center">
          <h3 className="font-display font-bold text-2xl mb-3">
            A Healthier Facility Creates a Healthier Community
          </h3>
          <p className="font-body text-white/85 text-base max-w-2xl mx-auto leading-relaxed">
            When patients and staff consistently choose better food options, the positive impact extends beyond your walls. Your facility becomes a model for healthy living in Upstate South Carolina.
          </p>
        </div>
      </div>
    </section>
  );
}

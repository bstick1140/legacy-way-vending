/* ============================================================
   SERVICE AREA SECTION — Legacy Way Vending
   Warm cream background, forest green accents
   Greenville, Spartanburg & Pickens counties, SC
   ============================================================ */

import { MapPin, ArrowRight } from "lucide-react";

const counties = [
  {
    name: "Greenville County",
    cities: ["Greenville", "Simpsonville", "Fountain Inn", "Mauldin", "Greer"],
  },
  {
    name: "Spartanburg County",
    cities: ["Spartanburg", "Chesnee", "Landrum", "Inman"],
  },
  {
    name: "Pickens County",
    cities: ["Easley", "Liberty", "Powdersville"],
  },
];

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(180deg, oklch(0.97 0.012 85) 0%, oklch(0.99 0.005 145) 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-pill bg-[oklch(0.58_0.16_145/0.10)] text-[oklch(0.58_0.16_145)] border border-[oklch(0.58_0.16_145/0.25)] mb-4 mx-auto">
            <MapPin className="w-3.5 h-3.5" />
            Our Service Area
          </div>
          <h2 className="font-display text-[oklch(0.42_0.16_145)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Serving Upstate
            <br />
            <span className="text-[oklch(0.80_0.18_95)] italic">South Carolina</span>
          </h2>
          <p className="font-body text-[oklch(0.35_0.008_60)] text-lg max-w-2xl mx-auto leading-relaxed">
            Legacy Way Vending places machines in schools and facilities across Greenville, Spartanburg, and Pickens counties. Outside our area? Submit a request and we will connect you with a Free Healthy Vending partner near you.
          </p>
        </div>

        {/* County cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {counties.map((county) => (
            <div
              key={county.name}
              className="bg-white rounded-2xl border border-[oklch(0.90_0.04_145)] p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-[oklch(0.58_0.16_145/0.10)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[oklch(0.58_0.16_145)]" />
                </div>
                <h3 className="font-display text-[oklch(0.42_0.16_145)] text-xl font-bold">
                  {county.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {county.cities.map((city) => (
                  <span
                    key={city}
                    className="font-body text-sm text-[oklch(0.35_0.008_60)] bg-[oklch(0.96_0.022_85)] border border-[oklch(0.90_0.04_145)] rounded-full px-3 py-1"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Outside area callout */}
        <div className="bg-[oklch(0.58_0.16_145/0.06)] border border-[oklch(0.58_0.16_145/0.20)] rounded-2xl p-8 text-center">
          <p className="font-body text-[oklch(0.35_0.008_60)] text-base leading-relaxed mb-5">
            <strong className="text-[oklch(0.42_0.16_145)]">School outside our service area?</strong> Submit your request anyway. Legacy Way Vending is a certified Free Healthy Vending partner, and we will connect you with a qualified representative in your area at no cost to you.
          </p>
          <a href="#qualify" className="btn-amber inline-flex py-3 px-8">
            Submit a Request
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

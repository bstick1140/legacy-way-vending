/* ============================================================
   SERVICE AREA SECTION — Legacy Way Vending
   Warm cream background, forest green accents
   Greenville, Spartanburg, Pickens & Cherokee counties, SC
   Row layout: county name left column, cities wrap right
   ============================================================ */

import { MapPin, ArrowRight } from "lucide-react";

const counties = [
  {
    name: "Greenville County",
    cities: ["Greenville", "Simpsonville", "Fountain Inn", "Mauldin", "Greer", "Taylors", "Travelers Rest", "Pauline"],
  },
  {
    name: "Spartanburg County",
    cities: ["Spartanburg", "Boiling Springs", "Chesnee", "Landrum", "Inman"],
  },
  {
    name: "Pickens County",
    cities: ["Easley", "Liberty", "Powdersville"],
  },
  {
    name: "Cherokee County",
    cities: ["Gaffney", "Blacksburg"],
  },
];

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(180deg, oklch(0.97 0.012 85) 0%, oklch(0.99 0.005 145) 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Legacy Way Vending places machines in schools and facilities across Greenville, Spartanburg, Pickens, and Cherokee counties. Outside our area? Submit a request and we will connect you with a Free Healthy Vending partner near you.
          </p>
        </div>

        {/* County rows */}
        <div className="bg-white rounded-2xl border border-[oklch(0.90_0.04_145)] shadow-sm overflow-hidden mb-12">
          {counties.map((county, idx) => (
            <div
              key={county.name}
              className={`flex flex-col sm:flex-row sm:items-start gap-3 px-6 py-5 ${
                idx < counties.length - 1 ? "border-b border-[oklch(0.93_0.03_145)]" : ""
              }`}
            >
              {/* County name */}
              <div className="flex items-center gap-2.5 sm:w-44 flex-shrink-0 pt-0.5">
                <div className="w-7 h-7 bg-[oklch(0.58_0.16_145/0.10)] rounded-md flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[oklch(0.58_0.16_145)]" />
                </div>
                <span className="font-display text-[oklch(0.42_0.16_145)] text-sm font-bold leading-snug">
                  {county.name}
                </span>
              </div>

              {/* Cities */}
              <div className="flex flex-wrap gap-2">
                {county.cities.map((city) => (
                  <span
                    key={city}
                    className="font-body text-sm text-[oklch(0.35_0.008_60)] bg-[oklch(0.96_0.022_85)] border border-[oklch(0.90_0.04_145)] rounded-full px-3 py-1 whitespace-nowrap"
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

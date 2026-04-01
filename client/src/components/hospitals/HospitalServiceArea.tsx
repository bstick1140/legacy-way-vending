/* ============================================================
   HOSPITAL SERVICE AREA — Legacy Way Vending
   Spartanburg and Greenville counties, SC.
   ============================================================ */

import { MapPin, ArrowRight } from "lucide-react";

const counties = [
  {
    name: "Spartanburg County",
    facilities: ["Spartanburg Regional Medical Center", "Pelham Medical Center", "Cherokee Medical Center", "Upstate Community Medical Center", "Spartanburg Medical Center"],
  },
  {
    name: "Greenville County",
    facilities: ["Prisma Health Greenville Memorial", "Patewood Medical Campus", "Greenville Health System facilities", "St. Francis Downtown", "Bon Secours St. Francis"],
  },
];

export default function HospitalServiceArea() {
  return (
    <section className="py-20 bg-[oklch(0.97_0.008_145)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-[oklch(0.88_0.08_145)] rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[oklch(0.58_0.16_145)]" />
            <span className="font-body text-[oklch(0.42_0.12_145)] text-xs font-semibold uppercase tracking-widest">
              Our Service Area
            </span>
          </div>
          <h2 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-3xl sm:text-4xl leading-tight mb-4">
            Serving Upstate South Carolina
          </h2>
          <p className="font-body text-[oklch(0.45_0.008_60)] text-base max-w-xl mx-auto">
            Legacy Way Vending currently serves medical facilities in Spartanburg and Greenville counties. Local service means faster restocking and faster response times.
          </p>
        </div>

        {/* County cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {counties.map((county) => (
            <div key={county.name} className="bg-white border border-[oklch(0.92_0.04_145)] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[oklch(0.96_0.04_145)] rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[oklch(0.58_0.16_145)]" />
                </div>
                <h3 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-lg">{county.name}</h3>
              </div>
              <ul className="space-y-2">
                {county.facilities.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.80_0.18_95)] flex-shrink-0" />
                    <span className="font-body text-[oklch(0.45_0.008_60)] text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Outside area callout */}
        <div className="bg-[oklch(0.42_0.16_145)] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div>
            <h3 className="font-display font-bold text-lg mb-1">Outside Spartanburg or Greenville County?</h3>
            <p className="font-body text-white/80 text-sm">
              Submit your request and we will connect you with a Free Healthy Vending representative in your area.
            </p>
          </div>
          <a
            href="#hospital-qualify"
            className="flex-shrink-0 flex items-center gap-2 bg-[oklch(0.80_0.18_95)] text-[oklch(0.18_0.005_285)] font-body font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[oklch(0.85_0.18_95)] transition-colors"
          >
            Submit a Request
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

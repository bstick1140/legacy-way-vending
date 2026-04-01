/* ============================================================
   HOSPITAL SERVICE AREA — Legacy Way Vending
   Spartanburg and Greenville counties, SC.
   No specific facility names — county outlines only.
   ============================================================ */

import { MapPin, ArrowRight } from "lucide-react";

/* Simplified SVG path outlines for each county — stylized shapes
   that suggest the county boundary without requiring a full GIS map. */
function SpartanburgOutline() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
      {/* Stylized Spartanburg County outline — roughly rectangular with notch NE */}
      <path
        d="M30 20 L170 20 L170 60 L155 60 L155 80 L170 80 L170 140 L30 140 Z"
        fill="oklch(0.94 0.06 145)"
        stroke="oklch(0.58 0.16 145)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text
        x="100"
        y="88"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="oklch(0.28 0.10 145)"
        fontFamily="serif"
      >
        Spartanburg
      </text>
      <text
        x="100"
        y="106"
        textAnchor="middle"
        fontSize="11"
        fill="oklch(0.45 0.10 145)"
        fontFamily="sans-serif"
      >
        County, SC
      </text>
    </svg>
  );
}

function GreenvilleOutline() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none">
      {/* Stylized Greenville County outline — wider with angled SW corner */}
      <path
        d="M20 20 L175 20 L175 140 L55 140 L20 105 Z"
        fill="oklch(0.94 0.06 145)"
        stroke="oklch(0.58 0.16 145)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text
        x="105"
        y="88"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="oklch(0.28 0.10 145)"
        fontFamily="serif"
      >
        Greenville
      </text>
      <text
        x="105"
        y="106"
        textAnchor="middle"
        fontSize="11"
        fill="oklch(0.45 0.10 145)"
        fontFamily="sans-serif"
      >
        County, SC
      </text>
    </svg>
  );
}

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

        {/* County outline cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-3xl mx-auto">
          {/* Spartanburg */}
          <div className="bg-white border border-[oklch(0.92_0.04_145)] rounded-2xl p-6 flex flex-col items-center">
            <div className="w-full max-w-[200px] h-[160px] mb-4">
              <SpartanburgOutline />
            </div>
            <h3 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-lg text-center">
              Spartanburg County
            </h3>
            <p className="font-body text-[oklch(0.55_0.008_60)] text-sm text-center mt-1">
              Hospitals, clinics, and medical offices
            </p>
          </div>

          {/* Greenville */}
          <div className="bg-white border border-[oklch(0.92_0.04_145)] rounded-2xl p-6 flex flex-col items-center">
            <div className="w-full max-w-[200px] h-[160px] mb-4">
              <GreenvilleOutline />
            </div>
            <h3 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-lg text-center">
              Greenville County
            </h3>
            <p className="font-body text-[oklch(0.55_0.008_60)] text-sm text-center mt-1">
              Hospitals, clinics, and medical offices
            </p>
          </div>
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

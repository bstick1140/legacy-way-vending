/* ============================================================
   HOSPITAL SERVICE AREA — Legacy Way Vending
   Spartanburg and Greenville counties, SC.
   No county cards — header + outside-area callout only.
   ============================================================ */

import { MapPin, ArrowRight } from "lucide-react";

export default function HospitalServiceArea() {
  return (
    <section className="py-20 bg-[oklch(0.97_0.008_145)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white border border-[oklch(0.88_0.08_145)] rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[oklch(0.58_0.16_145)]" />
            <span className="font-body text-[oklch(0.42_0.12_145)] text-xs font-semibold uppercase tracking-widest">
              Our Service Area
            </span>
          </div>
          <h2 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-3xl sm:text-4xl leading-tight mb-4">
            Serving Hospitals &amp; Clinics in Upstate South Carolina
          </h2>
          <p className="font-body text-[oklch(0.45_0.008_60)] text-base max-w-xl mx-auto">
            Legacy Way Vending serves hospitals, medical clinics, and healthcare facilities across Greenville, Spartanburg, Pickens, and Cherokee counties, SC. Local operators mean faster restocking, faster service calls, and a direct point of contact — not a national call center.
          </p>
        </div>

        {/* Outside area callout */}
        <div className="max-w-3xl mx-auto bg-[oklch(0.42_0.16_145)] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
          <div>
            <h3 className="font-display font-bold text-lg mb-1">Outside Our Service Area?</h3>
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

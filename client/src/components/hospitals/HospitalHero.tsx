/* ============================================================
   HOSPITAL HERO — Legacy Way Vending
   Warm & Inviting design. Targets facilities directors,
   operations managers, and food services directors.
   ============================================================ */

import { Heart, Shield, Star } from "lucide-react";

export default function HospitalHero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[oklch(0.99_0.005_145)] overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='1'%3E%3Cpath d='M30 30c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[oklch(0.96_0.04_145)] border border-[oklch(0.88_0.08_145)] rounded-full px-4 py-1.5">
              <Heart className="w-3.5 h-3.5 text-[oklch(0.58_0.16_145)]" />
              <span className="font-body text-[oklch(0.42_0.12_145)] text-xs font-semibold uppercase tracking-widest">
                Free Healthy Vending for Hospitals &amp; Clinics in Upstate SC
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
              Healthier Snacks
              <br />
              <span className="text-[oklch(0.80_0.18_95)] italic">for Your Staff</span>
              <br />
              and Patients
            </h1>

            <p className="font-body text-[oklch(0.38_0.008_60)] text-lg leading-relaxed max-w-lg">
              Provide your hospital staff, visitors, and patients with great-tasting, healthy snack options — at <strong className="text-[oklch(0.42_0.16_145)]">absolutely no cost</strong> to your facility. We handle everything.
            </p>

            {/* Trust signals */}
            <div className="space-y-2.5">
              {[
                { icon: Shield, text: "No cost to your facility — ever" },
                { icon: Heart, text: "Healthy, organic, and better-for-you products" },
                { icon: Star, text: "Great taste — not the bland health food you've seen before" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[oklch(0.96_0.04_145)] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3 h-3 text-[oklch(0.58_0.16_145)]" />
                  </div>
                  <span className="font-body text-[oklch(0.38_0.008_60)] text-sm">{text}</span>
                </div>
              ))}
            </div>

            <p className="font-body text-[oklch(0.55_0.008_60)] text-xs">
              Serving hospitals, clinics, and medical facilities in Greenville, Spartanburg, Pickens, York, and Cherokee counties, SC — Greenville, Spartanburg, Gaffney, Greer, Boiling Springs, Easley & surrounding areas. Response within 1 business day.
            </p>
          </div>

          {/* Right: Machine image + stat cards */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Machine image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[oklch(0.18_0.005_285/0.15)] bg-white p-4 max-w-sm">
                <div className="absolute top-4 left-4 z-10 bg-[oklch(0.80_0.18_95)] text-[oklch(0.18_0.005_285)] text-xs font-bold font-body px-3 py-1.5 rounded-full">
                  100% FREE
                  <br />
                  For Qualified Facilities
                </div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/vitruvian-man-upperbody-6CVbrJhrT2QLs7z3cEJm9M.webp"
                  alt="Da Vinci Vitruvian Man — human health and wellness"
                  className="w-full h-80 object-cover object-top rounded-xl"
                  style={{ objectPosition: '50% 15%' }}
                />
                {/* Da Vinci parchment-style badge */}
                <div className="absolute bottom-8 right-4 rounded-xl p-3 shadow-lg text-center border" style={{ background: 'oklch(0.97 0.03 85)', borderColor: 'oklch(0.78 0.10 75)' }}>
                  <div className="font-body text-xs font-bold uppercase tracking-widest" style={{ color: 'oklch(0.42 0.12 60)', fontStyle: 'italic' }}>Used in Medical</div>
                  <div className="font-display font-bold text-lg" style={{ color: 'oklch(0.28 0.10 145)' }}>Facilities</div>
                  <div className="font-body text-xs font-semibold" style={{ color: 'oklch(0.52 0.14 75)' }}>Nationwide</div>
                </div>
              </div>

              {/* Floating stat */}
              <div className="absolute -left-6 top-1/3 bg-white rounded-xl shadow-xl p-4 border border-[oklch(0.92_0.04_145)]">
                <div className="font-display font-bold text-[oklch(0.58_0.16_145)] text-2xl">24/7</div>
                <div className="font-body text-[oklch(0.55_0.008_60)] text-xs leading-tight">Healthy snacks<br />always available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

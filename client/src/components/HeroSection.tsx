/* ============================================================
   HERO SECTION — Bold Organic Modernism
   Full-bleed green bg, editorial headline, machine image right
   Dark background → white text
   ============================================================ */

import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { useEffect, useRef } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/hero-bg-pattern-eXBF9zS5wBmrM2umqx87AH.webp";
const MACHINE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663487738921/FWBzfm3EpAjHnNF5scF6S5/hero-vending-machine-nJnTZbPKX6CWTj3xGcyHVm.webp";

export default function HeroSection() {
  const machineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = machineRef.current;
    if (!el) return;
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[oklch(0.18_0.09_155/0.75)]" />

      {/* Diagonal bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-[oklch(0.99_0.005_90)]"
        style={{ clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="badge-pill bg-[oklch(0.75_0.17_75/0.2)] text-[oklch(0.75_0.17_75)] border border-[oklch(0.75_0.17_75/0.4)]">
              Certified Free Healthy Vending Partner
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]">
                Free Healthy
                <br />
                <span className="text-[oklch(0.75_0.17_75)] italic">Vending Machines</span>
                <br />
                for Your School
              </h1>
              <p className="font-body text-[oklch(0.85_0.02_155)] text-lg sm:text-xl leading-relaxed max-w-lg">
                Upgrade your school's vending with a state-of-the-art, USDA Smart Snacks compliant machine — at <strong className="text-white">absolutely no cost</strong> to you.
              </p>
            </div>

            {/* Trust signals */}
            <div className="space-y-2.5">
              {[
                "No cost, no contract, no hassle",
                "USDA Smart Snacks in Schools compliant",
                "We install, stock & maintain everything",
                "Your school earns revenue — zero effort",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[oklch(0.75_0.17_75)] flex-shrink-0" />
                  <span className="font-body text-[oklch(0.90_0.02_155)] text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#qualify" className="btn-amber text-base py-4 px-8 justify-center">
                See If Your School Qualifies
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:8643819290"
                className="flex items-center justify-center gap-2 text-white border border-white/30 hover:border-white/60 rounded-md py-4 px-6 font-body font-semibold text-base transition-all hover:bg-white/10"
              >
                <Phone className="w-5 h-5" />
                864-381-9290
              </a>
            </div>

            {/* Location note */}
            <p className="font-body text-[oklch(0.70_0.02_155)] text-sm">
              Proudly serving <strong className="text-[oklch(0.85_0.02_155)]">Upstate South Carolina</strong> — Greenville, Spartanburg, Anderson & surrounding areas
            </p>
          </div>

          {/* Right: Machine Image */}
          <div
            ref={machineRef}
            className="flex justify-center lg:justify-end"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <div className="relative">
              {/* Glow effect behind machine */}
              <div className="absolute inset-0 bg-[oklch(0.75_0.17_75/0.15)] rounded-full blur-3xl scale-75" />
              <img
                src={MACHINE_IMG}
                alt="State-of-the-art healthy vending machine for schools"
                className="relative z-10 w-full max-w-sm lg:max-w-md xl:max-w-lg animate-float drop-shadow-2xl"
                loading="eager"
              />
              {/* Floating badge */}
              <div className="absolute top-8 -left-4 bg-[oklch(0.75_0.17_75)] text-[oklch(0.18_0.005_285)] rounded-lg px-4 py-2 shadow-lg z-20">
                <div className="font-mono-brand text-xs font-bold uppercase tracking-wide">100% FREE</div>
                <div className="font-body text-xs font-semibold">For Qualified Schools</div>
              </div>
              {/* USDA badge */}
              <div className="absolute bottom-16 -right-2 bg-white rounded-lg px-3 py-2 shadow-lg z-20 text-center">
                <div className="font-mono-brand text-xs font-bold text-[oklch(0.28_0.09_155)] uppercase tracking-wide">USDA</div>
                <div className="font-body text-xs text-[oklch(0.40_0.05_155)] font-medium">Smart Snacks</div>
                <div className="font-body text-xs text-[oklch(0.40_0.05_155)]">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

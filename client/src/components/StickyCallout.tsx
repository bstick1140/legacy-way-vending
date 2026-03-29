/* ============================================================
   STICKY CALLOUT — Bold Organic Modernism
   Amber background, appears after scrolling past hero
   ============================================================ */

import { useState, useEffect } from "react";
import { Phone, X } from "lucide-react";

export default function StickyCallout() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed && window.scrollY > 600) {
        setVisible(true);
      } else if (window.scrollY <= 600) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[oklch(0.58_0.16_145)] border-t-2 border-[oklch(0.80_0.18_95)] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="hidden sm:flex w-2 h-2 bg-[oklch(0.80_0.18_95)] rounded-full animate-pulse-amber flex-shrink-0" />
            <p className="font-body text-white text-sm font-medium truncate">
              <span className="text-[oklch(0.80_0.18_95)] font-bold">FREE</span> healthy vending machines for schools with 300+ students — no cost, ever.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="tel:8643819290" className="hidden sm:flex items-center gap-1.5 text-[oklch(0.80_0.18_95)] hover:text-white transition-colors text-sm font-semibold">
              <Phone className="w-4 h-4" />
              864-381-9290
            </a>
            <a href="#qualify" className="btn-amber py-2 px-4 text-sm">
              Apply Free
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="text-[oklch(0.60_0.02_155)] hover:text-white transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

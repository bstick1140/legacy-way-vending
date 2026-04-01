/* ============================================================
   MARQUEE BAR — Legacy Way Vending
   Infinite scrolling banner showing all 7 market types.
   Schools and Hospitals are active links.
   Others show a "coming soon" toast on click.
   Dark green background, amber accent on active market.
   ============================================================ */

import { GraduationCap, Heart, Dumbbell, Building2, Factory, Briefcase, Users } from "lucide-react";
import { useLocation } from "wouter";
import { toast } from "sonner";

type Market = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  comingSoon?: boolean;
};

const markets: Market[] = [
  { label: "Middle Schools", icon: GraduationCap, href: "/" },
  { label: "High Schools", icon: GraduationCap, href: "/" },
  { label: "Hospitals & Clinics", icon: Heart, href: "/hospitals" },
  { label: "YMCA Facilities", icon: Dumbbell, comingSoon: true },
  { label: "Office Buildings", icon: Briefcase, comingSoon: true },
  { label: "Manufacturing", icon: Factory, comingSoon: true },
  { label: "Community Centers", icon: Users, comingSoon: true },
];

// Duplicate items to create seamless infinite loop
const items = [...markets, ...markets, ...markets];

export default function MarqueeBar() {
  const [location] = useLocation();

  const handleComingSoon = (label: string) => {
    toast(`${label} — Coming Soon!`, {
      description: "We're expanding to new markets. Call us at 864-381-9290 to discuss your facility.",
      duration: 3000,
    });
  };

  const isActive = (market: Market) => {
    if (!market.href) return false;
    if (market.href === "/" && (location === "/" || location === "")) return true;
    if (market.href !== "/" && location === market.href) return true;
    return false;
  };

  return (
    <div className="bg-[oklch(0.28_0.10_145)] border-b border-[oklch(0.35_0.10_145)] sticky top-16 lg:top-20 z-40 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[oklch(0.28_0.10_145)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[oklch(0.28_0.10_145)] to-transparent z-10 pointer-events-none" />

      {/* Label */}
      <div className="absolute left-4 top-0 bottom-0 flex items-center z-20 pointer-events-none">
        <span className="font-body text-[oklch(0.80_0.18_95)] text-[0.65rem] font-bold uppercase tracking-widest whitespace-nowrap">
          We Serve
        </span>
      </div>

      {/* Scrolling track */}
      <div
        className="flex items-center gap-0 py-2.5 pl-24"
        style={{
          animation: "marquee 28s linear infinite",
          width: "max-content",
        }}
      >
        {items.map((market, index) => {
          const Icon = market.icon;
          const active = isActive(market);

          if (market.comingSoon) {
            return (
              <button
                key={`${market.label}-${index}`}
                onClick={() => handleComingSoon(market.label)}
                className="flex items-center gap-2 px-5 py-1 mx-1 rounded-full font-body text-xs font-medium whitespace-nowrap text-white/50 hover:text-white/80 transition-colors group"
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                {market.label}
                <span className="text-[0.55rem] bg-white/10 text-white/40 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide group-hover:bg-white/20 group-hover:text-white/60 transition-colors">
                  Soon
                </span>
                <span className="text-white/20 ml-2">·</span>
              </button>
            );
          }

          return (
            <a
              key={`${market.label}-${index}`}
              href={market.href}
              className={`flex items-center gap-2 px-5 py-1 mx-1 rounded-full font-body text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                active
                  ? "bg-[oklch(0.80_0.18_95)] text-[oklch(0.18_0.005_285)]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon className="w-3.5 h-3.5 flex-shrink-0" />
              {market.label}
              <span className={`ml-2 ${active ? "text-[oklch(0.18_0.005_285)]/40" : "text-white/20"}`}>·</span>
            </a>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-bar:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

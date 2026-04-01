/* ============================================================
   MARQUEE BAR — Legacy Way Vending
   Modern professional scrolling market selector.
   Design: clean SVG icons, sharp geometry, refined typography.
   White background, dark green accent, subtle borders.
   Responsive — works on mobile, tablet, and desktop.
   ============================================================ */

import {
  GraduationCap,
  Stethoscope,
  Dumbbell,
  Building2,
  Factory,
  Briefcase,
  Users,
} from "lucide-react";
import { useLocation } from "wouter";
import { toast } from "sonner";

type Market = {
  label: string;
  sublabel: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  href?: string;
  comingSoon?: boolean;
};

const markets: Market[] = [
  {
    label: "Middle Schools",
    sublabel: "Grades 6–8",
    icon: GraduationCap,
    href: "/",
  },
  {
    label: "High Schools",
    sublabel: "Grades 9–12",
    icon: GraduationCap,
    href: "/",
  },
  {
    label: "Hospitals & Clinics",
    sublabel: "Medical Facilities",
    icon: Stethoscope,
    href: "/hospitals",
  },
  {
    label: "YMCA Facilities",
    sublabel: "Recreation Centers",
    icon: Dumbbell,
    comingSoon: true,
  },
  {
    label: "Office Buildings",
    sublabel: "Corporate Spaces",
    icon: Briefcase,
    comingSoon: true,
  },
  {
    label: "Manufacturing",
    sublabel: "Plant & Warehouse",
    icon: Factory,
    comingSoon: true,
  },
  {
    label: "Community Centers",
    sublabel: "Public Spaces",
    icon: Users,
    comingSoon: true,
  },
];

// Triple for seamless infinite loop
const items = [...markets, ...markets, ...markets];

export default function MarqueeBar() {
  const [location] = useLocation();

  const handleComingSoon = (label: string) => {
    toast(`${label} — Coming Soon`, {
      description: "We're expanding to new markets. Call 864-381-9290 to discuss your facility.",
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
    <div className="bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-40 overflow-hidden shadow-sm">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div
        className="flex items-center"
        style={{
          animation: "marquee-scroll 38s linear infinite",
          width: "max-content",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {items.map((market, index) => {
          const Icon = market.icon;
          const active = isActive(market);

          const inner = (
            <div
              className={`flex items-center gap-3 px-5 py-4 mx-1 border-b-2 transition-all duration-200 ${
                active
                  ? "border-[oklch(0.58_0.16_145)]"
                  : "border-transparent"
              }`}
            >
              {/* Icon container */}
              <div
                className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                  active
                    ? "bg-[oklch(0.58_0.16_145)] text-white"
                    : market.comingSoon
                    ? "bg-gray-100 text-gray-300"
                    : "bg-[oklch(0.94_0.06_145)] text-[oklch(0.45_0.12_145)] group-hover:bg-[oklch(0.88_0.10_145)]"
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.75} />
              </div>

              {/* Text */}
              <div className="flex flex-col min-w-0">
                <span
                  className={`font-body font-semibold text-sm leading-tight whitespace-nowrap transition-colors duration-200 ${
                    active
                      ? "text-[oklch(0.28_0.10_145)]"
                      : market.comingSoon
                      ? "text-gray-300"
                      : "text-gray-800 group-hover:text-[oklch(0.28_0.10_145)]"
                  }`}
                >
                  {market.label}
                </span>
                <span
                  className={`font-body text-[0.68rem] leading-tight whitespace-nowrap mt-0.5 ${
                    active
                      ? "text-[oklch(0.55_0.10_145)]"
                      : market.comingSoon
                      ? "text-gray-200"
                      : "text-gray-400"
                  }`}
                >
                  {market.comingSoon ? "Coming Soon" : market.sublabel}
                </span>
              </div>

              {/* Divider dot */}
              <span className="ml-3 text-gray-200 text-lg leading-none flex-shrink-0">·</span>
            </div>
          );

          if (market.comingSoon) {
            return (
              <button
                key={`${market.label}-${index}`}
                onClick={() => handleComingSoon(market.label)}
                className="group cursor-pointer"
              >
                {inner}
              </button>
            );
          }

          return (
            <a
              key={`${market.label}-${index}`}
              href={market.href}
              className="group cursor-pointer"
            >
              {inner}
            </a>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}

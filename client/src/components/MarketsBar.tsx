/* ============================================================
   MARKETS BAR — Legacy Way Vending
   Horizontal scrolling segment switcher showing all 7 markets.
   Schools and Hospitals are active; others show "coming soon".
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
  { label: "Schools", icon: GraduationCap, href: "/" },
  { label: "Hospitals & Clinics", icon: Heart, href: "/hospitals" },
  { label: "YMCA Facilities", icon: Dumbbell, comingSoon: true },
  { label: "Office Buildings", icon: Briefcase, comingSoon: true },
  { label: "Manufacturing", icon: Factory, comingSoon: true },
  { label: "Community Centers", icon: Users, comingSoon: true },
  { label: "Other Facilities", icon: Building2, comingSoon: true },
];

export default function MarketsBar() {
  const [location] = useLocation();

  const handleComingSoon = () => {
    toast("Coming soon! We're expanding to new markets.", {
      description: "Check back soon or call us at 864-381-9290.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-white border-b border-[oklch(0.92_0.04_145)] sticky top-16 lg:top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <span className="font-body text-[oklch(0.55_0.008_60)] text-xs font-medium whitespace-nowrap mr-2 flex-shrink-0">
            We Serve:
          </span>
          {markets.map((market) => {
            const Icon = market.icon;
            const isActive = market.href
              ? location === market.href || (market.href === "/" && location === "/")
              : false;

            if (market.comingSoon) {
              return (
                <button
                  key={market.label}
                  onClick={handleComingSoon}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body text-xs font-medium whitespace-nowrap flex-shrink-0 text-[oklch(0.65_0.008_60)] hover:bg-[oklch(0.96_0.04_145)] transition-colors border border-transparent"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {market.label}
                  <span className="text-[0.6rem] bg-[oklch(0.92_0.04_145)] text-[oklch(0.55_0.008_60)] px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                    Soon
                  </span>
                </button>
              );
            }

            return (
              <a
                key={market.label}
                href={market.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body text-xs font-medium whitespace-nowrap flex-shrink-0 transition-colors border ${
                  isActive
                    ? "bg-[oklch(0.58_0.16_145)] text-white border-[oklch(0.58_0.16_145)]"
                    : "text-[oklch(0.45_0.008_60)] hover:bg-[oklch(0.96_0.04_145)] border-transparent hover:border-[oklch(0.88_0.08_145)]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {market.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

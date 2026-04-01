/* ============================================================
   MARQUEE BAR — Legacy Way Vending
   Infinite scrolling banner with large icon + label cards.
   Each card: icon above label, consistent size, easy to read.
   Dark green background. Amber highlight on active market.
   Schools and Hospitals are active links. Others = coming soon.
   ============================================================ */

import { useLocation } from "wouter";
import { toast } from "sonner";

type Market = {
  label: string;
  sublabel: string;
  emoji: string;
  href?: string;
  comingSoon?: boolean;
};

const markets: Market[] = [
  {
    label: "Middle Schools",
    sublabel: "Grades 6–8",
    emoji: "🏫",
    href: "/",
  },
  {
    label: "High Schools",
    sublabel: "Grades 9–12",
    emoji: "🎓",
    href: "/",
  },
  {
    label: "Hospitals & Clinics",
    sublabel: "Medical Facilities",
    emoji: "🏥",
    href: "/hospitals",
  },
  {
    label: "YMCA Facilities",
    sublabel: "Recreation Centers",
    emoji: "🏋️",
    comingSoon: true,
  },
  {
    label: "Office Buildings",
    sublabel: "Corporate Spaces",
    emoji: "🏢",
    comingSoon: true,
  },
  {
    label: "Manufacturing",
    sublabel: "Plant & Warehouse",
    emoji: "🏭",
    comingSoon: true,
  },
  {
    label: "Community Centers",
    sublabel: "Public Spaces",
    emoji: "🤝",
    comingSoon: true,
  },
];

// Triple the items for a seamless infinite loop
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
    <div className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40 overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div
        className="flex items-center gap-0 py-3"
        style={{
          animation: "marquee-scroll 35s linear infinite",
          width: "max-content",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {items.map((market, index) => {
          const active = isActive(market);

          const cardContent = (
            <>
              {/* Icon circle */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-2 transition-all duration-200 ${
                  active
                    ? "bg-[oklch(0.58_0.16_145)]"
                    : market.comingSoon
                    ? "bg-gray-100"
                    : "bg-gray-100 group-hover:bg-[oklch(0.92_0.08_145)]"
                }`}
              >
                {market.emoji}
              </div>
              {/* Label */}
              <span
                className={`font-body font-bold text-xs whitespace-nowrap leading-tight text-center block ${
                  active
                    ? "text-[oklch(0.28_0.10_145)]"
                    : market.comingSoon
                    ? "text-gray-300"
                    : "text-gray-700 group-hover:text-[oklch(0.28_0.10_145)]"
                }`}
              >
                {market.label}
              </span>
              {/* Sublabel */}
              <span
                className={`font-body text-[0.6rem] whitespace-nowrap text-center block mt-0.5 ${
                  active
                    ? "text-[oklch(0.28_0.10_145)]/70"
                    : market.comingSoon
                    ? "text-gray-300"
                    : "text-gray-400"
                }`}
              >
                {market.comingSoon ? "Coming Soon" : market.sublabel}
              </span>
            </>
          );

          const cardClass = `group flex flex-col items-center justify-center w-24 mx-3 cursor-pointer transition-all duration-200 ${
            active ? "opacity-100" : market.comingSoon ? "opacity-60 hover:opacity-80" : "opacity-80 hover:opacity-100"
          }`;

          if (market.comingSoon) {
            return (
              <button
                key={`${market.label}-${index}`}
                onClick={() => handleComingSoon(market.label)}
                className={cardClass}
              >
                {cardContent}
              </button>
            );
          }

          return (
            <a
              key={`${market.label}-${index}`}
              href={market.href}
              className={cardClass}
            >
              {cardContent}
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

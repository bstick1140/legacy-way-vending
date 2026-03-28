/* ============================================================
   STATS BAR — Bold Organic Modernism
   Amber accent numbers, clean white background
   ============================================================ */

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 300, suffix: "+", label: "Daily Visitors Required", description: "Minimum to qualify" },
  { value: 2, suffix: "x", label: "Outperforms Junk Machines", description: "Revenue performance" },
  { value: 4, suffix: "-6 wks", label: "To Installation", description: "Fast turnaround" },
  { value: 100, suffix: "%", label: "Free for Schools", description: "Zero cost program" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-white py-12 border-b border-[oklch(0.90_0.01_90)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[oklch(0.75_0.17_75)] leading-none mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} active={active} />
              </div>
              <div className="font-body font-semibold text-[oklch(0.28_0.09_155)] text-sm sm:text-base mt-1">
                {stat.label}
              </div>
              <div className="font-body text-[oklch(0.55_0.01_285)] text-xs mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

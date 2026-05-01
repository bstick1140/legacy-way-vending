/* ============================================================
   FOOTER — Bold Organic Modernism
   Dark green, amber accents, clean layout
   ============================================================ */

import { Phone, Mail, MapPin, Leaf, ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [location] = useLocation();
  const isHospitals = location.startsWith("/hospitals");

  const quickLinks = isHospitals
    ? [
        { label: "Why It Works", href: "#hospital-why" },
        { label: "Machine Features", href: "#hospital-features" },
        { label: "Our Products", href: "#hospital-products" },
        { label: "FAQ", href: "#hospital-faq" },
        { label: "Request a Machine", href: "#hospital-qualify" },
      ]
    : [
        { label: "How It Works", href: "#how-it-works" },
        { label: "Machine Features", href: "#features" },
        { label: "Our Products", href: "#products" },
        { label: "FAQ", href: "#faq" },
        { label: "Check Qualification", href: "#qualify" },
      ];

  return (
    <footer className="bg-[oklch(0.42_0.16_145)] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-[oklch(0.80_0.18_95)] rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-[oklch(0.18_0.005_285)]" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-xl leading-tight">Legacy Way Vending</div>
                <div className="font-body text-[oklch(0.80_0.18_95)] text-xs font-medium tracking-widest uppercase">Smart Snacks That Fuel Your Day</div>
              </div>
            </div>
            <p className="font-body text-white/80 text-sm leading-relaxed max-w-sm">
              Your local certified Free Healthy Vending partner, proudly serving schools and businesses across Upstate South Carolina. We provide state-of-the-art healthy vending machines at absolutely no cost to qualified locations.
            </p>
            <div className="space-y-2">
              <a href="tel:8643819290" className="flex items-center gap-2 text-[oklch(0.80_0.18_95)] hover:text-white transition-colors text-sm font-medium">
                <Phone className="w-4 h-4" />
                864-381-9290
              </a>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Upstate South Carolina — Greenville, Spartanburg, Pickens, York & Cherokee counties
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-bold text-white text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal Locations */}
          <div>
            <h4 className="font-body font-bold text-white text-sm uppercase tracking-widest mb-4">We Serve</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Middle Schools", href: null },
                { label: "High Schools", href: null },
                { label: "Hospitals & Clinics", href: "/hospitals/" },
                { label: "YMCA Facilities", href: null },
                { label: "Manufacturing Facilities", href: null },
                { label: "Office Buildings", href: null },
              ].map((loc) => (
                <li key={loc.label} className="font-body text-white/80 text-sm">
                  {loc.href ? (
                    <a href={loc.href} className="hover:text-white transition-colors">{loc.label}</a>
                  ) : loc.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Partner badge + bottom bar */}
      <div className="border-t border-[oklch(0.58_0.16_145)] bg-[oklch(0.28_0.16_145)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[oklch(0.50_0.05_145)] text-xs text-center sm:text-left">
            © {currentYear} Legacy Way Vending. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-body text-[oklch(0.50_0.05_145)] text-xs">Certified Partner of</span>
            <a
              href="https://www.freehealthyvending.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[oklch(0.80_0.18_95)] hover:text-white transition-colors text-xs font-semibold font-body"
            >
              Free Healthy Vending
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

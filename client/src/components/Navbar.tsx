/* ============================================================
   NAVBAR — Option B: Warm & Inviting
   Warm cream/white background, deep green logo/links, golden amber CTA
   Page-aware: shows correct section links for Home vs Hospitals page
   Active market links (Schools, Medical Facilities) always visible
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { useLocation } from "wouter";

const homeNavLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Machine Features", href: "#features" },
  { label: "Products", href: "#products" },
  { label: "FAQ", href: "#faq" },
];

const hospitalsNavLinks = [
  { label: "Why It Works", href: "#hospital-why" },
  { label: "Machine Features", href: "#hospital-features" },
  { label: "Products", href: "#hospital-products" },
  { label: "FAQ", href: "#hospital-faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHospitals = location.startsWith("/hospitals");
  const navLinks = isHospitals ? hospitalsNavLinks : homeNavLinks;
  const qualifyHref = isHospitals ? "#hospital-qualify" : "#qualify";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md shadow-[oklch(0.18_0.005_285/0.08)]"
          : "bg-[oklch(0.99_0.005_145)]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-8 h-8 bg-[oklch(0.58_0.16_145)] rounded-full flex items-center justify-center flex-shrink-0">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-[oklch(0.58_0.16_145)] text-lg leading-tight">Legacy Way</span>
              <span className="font-body text-[oklch(0.80_0.18_95)] text-xs font-medium tracking-widest uppercase">Vending</span>
            </div>
          </a>

          {/* Desktop Nav — market links + page section links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Active market links — always visible */}
            <a
              href="/"
              className={`font-body text-sm font-semibold px-3 py-1.5 rounded-md transition-colors duration-200 ${
                !isHospitals
                  ? "text-[oklch(0.58_0.16_145)] bg-[oklch(0.94_0.06_145)]"
                  : "text-[oklch(0.50_0.008_60)] hover:text-[oklch(0.58_0.16_145)] hover:bg-[oklch(0.96_0.04_145)]"
              }`}
            >
              Schools
            </a>
            <a
              href="/hospitals/"
              className={`font-body text-sm font-semibold px-3 py-1.5 rounded-md transition-colors duration-200 ${
                isHospitals
                  ? "text-[oklch(0.58_0.16_145)] bg-[oklch(0.94_0.06_145)]"
                  : "text-[oklch(0.50_0.008_60)] hover:text-[oklch(0.58_0.16_145)] hover:bg-[oklch(0.96_0.04_145)]"
              }`}
            >
              Medical Facilities
            </a>

            {/* Divider */}
            <span className="mx-2 text-gray-200 text-lg leading-none">|</span>

            {/* Page section links */}
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[oklch(0.38_0.008_60)] hover:text-[oklch(0.58_0.16_145)] text-sm font-medium px-3 py-1.5 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8643819290"
              className="flex items-center gap-2 text-[oklch(0.58_0.16_145)] hover:text-[oklch(0.70_0.14_145)] transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              864-381-9290
            </a>
            <a href={qualifyHref} className="btn-amber text-sm py-2.5 px-5">
              {isHospitals ? "Request a Machine" : "See If You Qualify"}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[oklch(0.58_0.16_145)] p-2 rounded-md hover:bg-[oklch(0.96_0.04_145)] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white px-4 py-4 space-y-1 border-t border-[oklch(0.90_0.04_145)]">
          {/* Market links */}
          <div className="pb-2 mb-2 border-b border-[oklch(0.90_0.04_145)]">
            <p className="font-body text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400 mb-2">Markets</p>
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block font-body text-sm font-semibold py-1.5 px-2 rounded transition-colors ${
                !isHospitals ? "text-[oklch(0.58_0.16_145)]" : "text-[oklch(0.38_0.008_60)]"
              }`}
            >
              Schools
            </a>
            <a
              href="/hospitals/"
              onClick={() => setIsOpen(false)}
              className={`block font-body text-sm font-semibold py-1.5 px-2 rounded transition-colors ${
                isHospitals ? "text-[oklch(0.58_0.16_145)]" : "text-[oklch(0.38_0.008_60)]"
              }`}
            >
              Medical Facilities
            </a>
          </div>

          {/* Section links */}
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-body text-[oklch(0.38_0.008_60)] hover:text-[oklch(0.58_0.16_145)] py-2 px-2 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 space-y-2 border-t border-[oklch(0.90_0.04_145)]">
            <a
              href="tel:8643819290"
              className="flex items-center gap-2 text-[oklch(0.58_0.16_145)] text-sm font-medium py-1"
            >
              <Phone className="w-4 h-4" />
              864-381-9290
            </a>
            <a
              href={qualifyHref}
              onClick={() => setIsOpen(false)}
              className="btn-amber w-full justify-center text-sm py-2.5"
            >
              {isHospitals ? "Request a Machine" : "See If You Qualify"}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

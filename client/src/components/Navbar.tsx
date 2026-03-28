/* ============================================================
   NAVBAR — Bold Organic Modernism
   Deep forest green background, amber CTA, Playfair logo
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Machine Features", href: "#features" },
    { label: "Products", href: "#products" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.28_0.09_155)] shadow-xl shadow-[oklch(0.28_0.09_155/0.3)]"
          : "bg-[oklch(0.28_0.09_155)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[oklch(0.75_0.17_75)] rounded-full flex items-center justify-center flex-shrink-0">
              <Leaf className="w-4 h-4 text-[oklch(0.18_0.005_285)]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-lg leading-tight">Legacy Way</span>
              <span className="font-body text-[oklch(0.75_0.17_75)] text-xs font-medium tracking-widest uppercase">Vending</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[oklch(0.85_0.02_155)] hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8643819290"
              className="flex items-center gap-2 text-[oklch(0.75_0.17_75)] hover:text-white transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              864-381-9290
            </a>
            <a
              href="#qualify"
              className="btn-amber text-sm py-2.5 px-5"
            >
              See If You Qualify
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-md hover:bg-[oklch(0.38_0.09_155)] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[oklch(0.22_0.09_155)] px-4 py-4 space-y-3 border-t border-[oklch(0.38_0.09_155)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-body text-[oklch(0.85_0.02_155)] hover:text-white py-2 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 space-y-2 border-t border-[oklch(0.38_0.09_155)]">
            <a
              href="tel:8643819290"
              className="flex items-center gap-2 text-[oklch(0.75_0.17_75)] text-sm font-medium py-1"
            >
              <Phone className="w-4 h-4" />
              864-381-9290
            </a>
            <a
              href="#qualify"
              onClick={() => setIsOpen(false)}
              className="btn-amber w-full justify-center text-sm py-2.5"
            >
              See If You Qualify
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

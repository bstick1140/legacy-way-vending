/* ============================================================
   PAYMENT METHODS — Bold Organic Modernism
   Light cream background, large branded payment icons
   Positioned between MachineFeatures and QualifyForm
   ============================================================ */

export default function PaymentMethods() {
  const methods = [
    {
      label: "Cash",
      sub: "Bills accepted",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <rect x="4" y="16" width="56" height="32" rx="4" fill="oklch(0.52 0.12 192)" opacity="0.12"/>
          <rect x="4" y="16" width="56" height="32" rx="4" stroke="oklch(0.52 0.12 192)" strokeWidth="2"/>
          <circle cx="32" cy="32" r="8" stroke="oklch(0.52 0.12 192)" strokeWidth="2"/>
          <text x="32" y="37" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="bold" fontSize="11" fill="oklch(0.52 0.12 192)">$</text>
          <circle cx="12" cy="32" r="4" fill="oklch(0.52 0.12 192)" opacity="0.2"/>
          <circle cx="52" cy="32" r="4" fill="oklch(0.52 0.12 192)" opacity="0.2"/>
        </svg>
      ),
    },
    {
      label: "Coins",
      sub: "All denominations",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
          <circle cx="28" cy="34" r="18" fill="oklch(0.70 0.19 42)" opacity="0.2"/>
          <circle cx="28" cy="34" r="18" stroke="oklch(0.60 0.19 42)" strokeWidth="2"/>
          <text x="28" y="39" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="bold" fontSize="13" fill="oklch(0.45 0.12 75)">¢</text>
          <circle cx="42" cy="22" r="12" fill="oklch(0.70 0.19 42)" opacity="0.3"/>
          <circle cx="42" cy="22" r="12" stroke="oklch(0.60 0.19 42)" strokeWidth="2"/>
          <text x="42" y="27" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="bold" fontSize="10" fill="oklch(0.45 0.12 75)">¢</text>
        </svg>
      ),
    },
    {
      label: "Visa",
      sub: "Debit & credit",
      icon: (
        <svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-10">
          <rect x="1" y="1" width="78" height="48" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
          <text x="40" y="33" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="26" fill="#1A1F71" letterSpacing="-1">VISA</text>
        </svg>
      ),
    },
    {
      label: "Mastercard",
      sub: "Debit & credit",
      icon: (
        <svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-10">
          <rect x="1" y="1" width="78" height="48" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
          <circle cx="30" cy="25" r="14" fill="#EB001B"/>
          <circle cx="50" cy="25" r="14" fill="#F79E1B"/>
          <path d="M40 13.5a14 14 0 0 1 0 23A14 14 0 0 1 40 13.5z" fill="#FF5F00"/>
        </svg>
      ),
    },
    {
      label: "Apple Pay",
      sub: "Tap to pay",
      icon: (
        <svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-10">
          <rect x="1" y="1" width="78" height="48" rx="6" fill="#000" stroke="#333" strokeWidth="1.5"/>
          {/* Apple logo */}
          <path d="M28 18.5c1.3-1.6 2.1-3.8 1.9-6-.1 0-4.3.2-5.7 4.7-.6 1.8-.5 3.7.1 5.1 1.5-.1 3.4-1.2 3.7-3.8z" fill="white"/>
          <path d="M30 23.2c-2 0-3.7 1.2-4.7 1.2-1 0-2.6-1.1-4.3-1.1-2.2 0-4.3 1.3-5.4 3.3-2.3 4-.6 10 1.6 13.3 1.1 1.6 2.4 3.3 4.1 3.3 1.6-.1 2.2-1 4.2-1 2 0 2.5 1 4.3 1 1.8 0 2.9-1.6 4-3.2.8-1.2 1.1-1.8 1.7-3.1-4.4-1.7-5.1-8-.7-10.4-.9-1.2-2.2-2.3-4.8-2.3z" fill="white"/>
          {/* Pay text */}
          <text x="52" y="32" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="13" fill="white">Pay</text>
        </svg>
      ),
    },
    {
      label: "Google Pay",
      sub: "Tap to pay",
      icon: (
        <svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-10">
          <rect x="1" y="1" width="78" height="48" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
          {/* G logo */}
          <path d="M22 25c0-4.4 3.6-8 8-8 2.1 0 4 .8 5.4 2.1l-2.2 2.2c-.8-.8-2-1.3-3.2-1.3-2.7 0-4.9 2.2-4.9 5s2.2 5 4.9 5c2.5 0 4.2-1.4 4.6-3.4H30v-3h8.1c.1.5.1.9.1 1.4 0 4.5-3 7-8.2 7-4.4 0-8-3.6-8-8z" fill="#4285F4"/>
          <path d="M30 28.6h8.1c-.4 2-2.1 3.4-4.6 3.4v3c2.7 0 5-1 6.6-2.7l-2.2-2.2c-.8.8-2 1.3-3.2 1.3v-2.8z" fill="#34A853"/>
          <path d="M22 25c0-1.4.4-2.8 1.1-3.9l-2.9-2.3C18.8 20.5 18 22.7 18 25s.8 4.5 2.2 6.2l2.9-2.3C22.4 27.8 22 26.4 22 25z" fill="#FBBC05"/>
          <path d="M30 17c1.5 0 2.8.5 3.8 1.4l2.7-2.7C34.8 14 32.6 13 30 13c-3.3 0-6.2 1.8-7.8 4.5l2.9 2.3C26 17.9 27.9 17 30 17z" fill="#EA4335"/>
          {/* Pay text */}
          <text x="58" y="30" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="12" fill="#5f6368">Pay</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[oklch(0.97_0.03_145)] py-16 lg:py-20 border-t border-[oklch(0.90_0.04_145)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="badge-pill bg-[oklch(0.58_0.16_145/0.1)] text-[oklch(0.58_0.16_145)] border border-[oklch(0.58_0.16_145/0.25)] mb-4 mx-auto">
            Accepted Payments
          </div>
          <h2 className="font-display text-[oklch(0.18_0.005_285)] text-2xl sm:text-3xl font-bold mb-2">
            Pay Any Way You Like
          </h2>
          <p className="font-body text-[oklch(0.44_0.04_145)] text-base max-w-xl mx-auto">
            Our machines accept all major payment methods — cash, coins, debit/credit cards, Apple Pay, and Google Pay.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-4 sm:gap-6">
          {methods.map((method) => (
            <div
              key={method.label}
              className="flex flex-col items-center gap-3 bg-white rounded-xl shadow-sm border border-[oklch(0.90_0.04_145)] px-6 py-5 min-w-[110px] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center justify-center h-12">
                {method.icon}
              </div>
              <div className="text-center">
                <div className="font-body font-bold text-[oklch(0.22_0.005_285)] text-sm">{method.label}</div>
                <div className="font-body text-[oklch(0.50_0.05_145)] text-xs mt-0.5">{method.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TERMS OF SERVICE PAGE — Legacy Way Vending
   Clean, readable layout matching site design
   ============================================================ */

import { useEffect } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

export default function TermsOfService() {
  useSEO({
    title: "Terms of Service | Legacy Way Vending",
    description: "Terms of Service for Legacy Way Vending, a Free Healthy Vending partner serving schools and facilities in Upstate South Carolina.",
    canonical: "https://legacywayvending.com/terms-of-service/",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_145)]">
      {/* Header */}
      <div className="bg-[oklch(0.42_0.16_145)] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-[oklch(0.85_0.08_145)] text-sm mb-2">Legal</p>
          <h1 className="font-display text-white text-4xl font-bold">Terms of Service</h1>
          <p className="font-body text-[oklch(0.85_0.08_145)] text-sm mt-3">Last updated: May 8, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none font-body text-[oklch(0.35_0.008_60)] space-y-10">

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Agreement to Terms</h2>
            <p>By accessing legacywayvending.com or submitting a qualification request, you agree to these Terms of Service. If you do not agree, do not use this site.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">About the Program</h2>
            <p>Legacy Way Vending is a certified Free Healthy Vending partner that places state-of-the-art, USDA Smart Snacks compliant vending machines in qualified schools and facilities at no cost to the location. The program is available to qualifying locations in Upstate South Carolina and, through our partner network, in other regions of the United States.</p>
            <p className="mt-4">Submitting a qualification request does not guarantee placement of a machine. Qualification is subject to review and approval based on location, daily traffic, and other factors.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Use of This Site</h2>
            <p>You agree to use this site only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Submit false or misleading information in a qualification form</li>
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Use automated tools to scrape or collect data from the site</li>
              <li>Use the site in any way that could damage, disable, or impair its operation</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Accuracy of Information</h2>
            <p>We make reasonable efforts to keep the information on this site accurate and current. However, we do not warrant that all content is complete, accurate, or up to date. Product availability, pricing, service area, and program details are subject to change without notice.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Intellectual Property</h2>
            <p>All content on this site, including text, images, logos, and design, is the property of Legacy Way Vending or its licensors. You may not reproduce, distribute, or use any content from this site without our written permission.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Third-Party Links</h2>
            <p>This site may contain links to third-party websites. We do not control those sites and are not responsible for their content, privacy practices, or terms. Linking to a third-party site does not imply endorsement.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Legacy Way Vending is not liable for any indirect, incidental, or consequential damages arising from your use of this site or the information on it. Our total liability for any claim arising from your use of this site is limited to the amount you paid us, if any, in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Disclaimer of Warranties</h2>
            <p>This site and its content are provided "as is" without warranties of any kind, express or implied. We do not warrant that the site will be available without interruption or that it is free of errors or viruses.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Governing Law</h2>
            <p>These Terms are governed by the laws of the State of South Carolina. Any disputes arising from these Terms or your use of this site will be resolved in the courts of South Carolina.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Changes to These Terms</h2>
            <p>We may update these Terms from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the site after changes are posted constitutes your acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Contact Us</h2>
            <p>If you have questions about these Terms, contact us:</p>
            <div className="mt-3 space-y-1">
              <p><strong>Legacy Way Vending</strong></p>
              <p>Upstate South Carolina</p>
              <p>Phone: <a href="tel:8643819290" className="text-[oklch(0.58_0.16_145)] hover:underline">864-381-9290</a></p>
              <p>Website: <a href="https://legacywayvending.com" className="text-[oklch(0.58_0.16_145)] hover:underline">legacywayvending.com</a></p>
            </div>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[oklch(0.90_0.04_145)]">
          <Link href="/" className="font-body text-[oklch(0.58_0.16_145)] hover:underline text-sm">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

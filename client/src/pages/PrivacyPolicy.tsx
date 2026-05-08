/* ============================================================
   PRIVACY POLICY PAGE — Legacy Way Vending
   Clean, readable layout matching site design
   ============================================================ */

import { useEffect } from "react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_145)]">
      {/* Header */}
      <div className="bg-[oklch(0.42_0.16_145)] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-[oklch(0.85_0.08_145)] text-sm mb-2">Legal</p>
          <h1 className="font-display text-white text-4xl font-bold">Privacy Policy</h1>
          <p className="font-body text-[oklch(0.85_0.08_145)] text-sm mt-3">Last updated: May 8, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none font-body text-[oklch(0.35_0.008_60)] space-y-10">

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Overview</h2>
            <p>Legacy Way Vending ("we," "our," or "us") operates legacywayvending.com. This Privacy Policy explains what information we collect when you visit our site or submit a qualification request, how we use that information, and your rights regarding your data.</p>
            <p>We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Information We Collect</h2>
            <p>We collect information you provide directly when you submit a qualification form. This includes:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Your first and last name</li>
              <li>Your email address</li>
              <li>Your phone number</li>
              <li>Your facility or school name</li>
              <li>Your city and state</li>
              <li>Your role or title</li>
              <li>Your responses to qualification questions</li>
            </ul>
            <p className="mt-4">We also collect standard technical data automatically when you visit the site, including your IP address, browser type, pages visited, and time spent on pages. This data is collected through analytics tools and is used in aggregate form only.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Evaluate your facility's eligibility for the free healthy vending program</li>
              <li>Contact you to discuss the program and schedule a consultation</li>
              <li>Connect you with a Free Healthy Vending representative if your facility is outside our service area</li>
              <li>Respond to questions or requests you submit</li>
            </ul>
            <p className="mt-4">We use aggregate technical data to understand how visitors use the site and to improve its content and performance.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">How We Share Your Information</h2>
            <p>We do not sell, rent, or trade your personal information. We may share your information in the following limited circumstances:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>Free Healthy Vending network:</strong> If your facility is outside our direct service area, we may share your contact information with a certified Free Healthy Vending partner in your region to follow up on your request.</li>
              <li><strong>Service providers:</strong> We use third-party tools to operate the site and communicate with you. These providers process data only on our behalf and are not permitted to use it for their own purposes.</li>
              <li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect the rights and safety of our business or others.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Data Retention</h2>
            <p>We retain your contact information for as long as necessary to fulfill the purpose for which it was collected or as required by law. If you request that we delete your information, we will do so within 30 days unless we are required to retain it for legal reasons.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Cookies and Tracking</h2>
            <p>Our site uses cookies and similar technologies to analyze traffic and improve the user experience. You can disable cookies in your browser settings. Disabling cookies will not affect your ability to use the site or submit a qualification request.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Children's Privacy</h2>
            <p>This site is intended for school administrators, facilities directors, and operations managers. We do not knowingly collect personal information from anyone under the age of 18. If you believe a minor has submitted information through this site, contact us and we will delete it promptly.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Request a copy of the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of future communications from us</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us at the information below.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. Continued use of the site after changes are posted constitutes your acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="font-display text-[oklch(0.42_0.16_145)] text-2xl font-bold mb-3">Contact Us</h2>
            <p>If you have questions about this Privacy Policy or how we handle your information, contact us:</p>
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

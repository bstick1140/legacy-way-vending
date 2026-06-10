/* ============================================================
   QUALIFY FORM — Bold Organic Modernism
   Multi-step survey like Free Healthy Vending, dark green bg
   Progress bar in amber, congratulations modal on qualify
   ============================================================ */

import { useState } from "react";
import { CheckCircle2, ArrowRight, X, Phone, Mail } from "lucide-react";

type Step = {
  id: string;
  question: string;
  options: { label: string; value: string; disqualify?: boolean }[];
};

const steps: Step[] = [
  {
    id: "manages_facility",
    question: "Do you own or manage a school or commercial facility?",
    options: [
      { label: "Yes — I manage a school or facility", value: "yes" },
      { label: "No — I do not manage a facility", value: "no", disqualify: true },
    ],
  },
  {
    id: "daily_visitors",
    question: "How many students and staff are in your facility daily?",
    options: [
      { label: "Fewer than 100 per day", value: "under_100", disqualify: true },
      { label: "100 – 299 per day", value: "100_299", disqualify: true },
      { label: "300 – 599 per day", value: "300_599" },
      { label: "600 – 999 per day", value: "600_999" },
      { label: "1,000+ per day", value: "1000_plus" },
    ],
  },
  {
    id: "has_vending",
    question: "Does your facility currently have a vending machine?",
    options: [
      { label: "Yes — we have an existing machine", value: "yes" },
      { label: "No — we don't have one yet", value: "no" },
    ],
  },
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  facilityName: string;
  facilityType: string;
  state: string;
  comments: string;
};

export default function QualifyForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [disqualified, setDisqualified] = useState(false);
  const [qualified, setQualified] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    facilityName: "",
    facilityType: "Middle School",
    state: "South Carolina",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = steps.length;
  const progress = ((currentStep) / totalSteps) * 100;

  const handleOptionSelect = (stepId: string, value: string, disqualify?: boolean) => {
    const newAnswers = { ...answers, [stepId]: value };
    setAnswers(newAnswers);

    if (disqualify) {
      setTimeout(() => setDisqualified(true), 300);
      return;
    }

    if (currentStep < totalSteps - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      // Last step answered — qualified!
      setTimeout(() => {
        setQualified(true);
        setShowContactForm(true);
      }, 300);
    }
  };

  // Human-readable labels for survey answers
  const answerLabels: Record<string, Record<string, string>> = {
    manages_facility: {
      yes: "Yes — I manage a school or facility",
      no: "No — I do not manage a facility",
    },
    daily_visitors: {
      under_100: "Fewer than 100 per day",
      "100_299": "100 – 299 per day",
      "300_599": "300 – 599 per day",
      "600_999": "600 – 999 per day",
      "1000_plus": "1,000+ per day",
    },
    has_vending: {
      yes: "Yes — we have an existing machine",
      no: "No — we don't have one yet",
    },
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Disqualify elementary schools at contact form submission
    if (formData.facilityType === "Elementary School") {
      setShowContactForm(false);
      setQualified(false);
      setDisqualified(true);
      return;
    }

    setSubmitting(true);

    const surveyLines = steps
      .map((step) => {
        const raw = answers[step.id];
        const label = answerLabels[step.id]?.[raw] ?? raw;
        return `${step.question}\n→ ${label}`;
      })
      .join("\n\n");

    const commentsSection = formData.comments.trim()
      ? `\n\n=== COMMENTS ===\n\n${formData.comments.trim()}`
      : "";
    const outOfState = formData.state !== "South Carolina";
    const message = `=== QUALIFICATION SURVEY ANSWERS ===\n\n${surveyLines}\n\n=== CONTACT DETAILS ===\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nFacility: ${formData.facilityName}\nFacility Type: ${formData.facilityType}\nState: ${formData.state}${outOfState ? " *** OUT OF SERVICE AREA — REFERRAL NEEDED ***" : ""}${commentsSection}`;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3c62acd8-0455-4e78-ba9b-47269953d378",
          subject: `New Vending Qualification — ${formData.facilityName} (${formData.facilityType})`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please call us at 864-381-9290.");
      }
    } catch {
      alert("Network error. Please call us at 864-381-9290.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setAnswers({});
    setDisqualified(false);
    setQualified(false);
    setShowContactForm(false);
    setSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      facilityName: "",
      facilityType: "Middle School",
      state: "South Carolina",
      comments: "",
    });
  };

  return (
    <section
      id="qualify"
      className="py-20 lg:py-28 bg-[oklch(0.58_0.16_145)] relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.80_0.18_95/0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.70_0.14_145) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
            <div className="badge-pill bg-[oklch(0.80_0.18_95/0.25)] text-[oklch(0.80_0.18_95)] border border-[oklch(0.80_0.18_95/0.5)] mb-4 mx-auto">
            Free Qualification Survey
          </div>
          <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Does Your School
            <br />
            <span className="text-[oklch(0.80_0.18_95)] italic">Qualify for Free Vending?</span>
          </h2>
          <p className="font-body text-white/90 text-lg">
            Answer 4 quick questions to find out if your school qualifies for a free, state-of-the-art healthy vending machine.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Progress bar */}
          {!disqualified && !submitted && (
            <div className="progress-bar rounded-none">
              <div
                className="progress-bar-fill"
                style={{ width: `${qualified ? 100 : progress}%` }}
              />
            </div>
          )}

          <div className="p-8 sm:p-10">
            {/* DISQUALIFIED STATE */}
            {disqualified && (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-[oklch(0.96_0.04_145)] rounded-full flex items-center justify-center mx-auto">
                  <X className="w-8 h-8 text-[oklch(0.50_0.05_145)]" />
                </div>
                <h3 className="font-display text-[oklch(0.18_0.005_285)] text-2xl font-bold">
                  Not Quite a Match
                </h3>
                <p className="font-body text-[oklch(0.44_0.04_145)] leading-relaxed max-w-md mx-auto">
                  Unfortunately, your facility doesn't meet the minimum requirements for the free vending program (300+ daily visitors). However, we'd love to explore other options with you!
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <a href="tel:8643819290" className="btn-green py-3 px-6 justify-center">
                    <Phone className="w-4 h-4" />
                    Call Us: 864-381-9290
                  </a>
                  <button onClick={resetForm} className="font-body text-[oklch(0.44_0.04_145)] underline text-sm py-3">
                    Start Over
                  </button>
                </div>
              </div>
            )}

            {/* SUBMITTED STATE */}
            {submitted && (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-[oklch(0.58_0.16_145)] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-[oklch(0.18_0.005_285)] text-2xl font-bold">
                  Request Received!
                </h3>
                {formData.state === "South Carolina" ? (
                  <p className="font-body text-[oklch(0.44_0.04_145)] leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.firstName}</strong>! We'll review your application for <strong>{formData.facilityName}</strong> and contact you within 1 business day to schedule your free consultation.
                  </p>
                ) : (
                  <p className="font-body text-[oklch(0.44_0.04_145)] leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.firstName}</strong>! Legacy Way Vending currently serves Greenville, Spartanburg, Pickens, and Cherokee counties in South Carolina. We will review your request for <strong>{formData.facilityName}</strong> and connect you with a Free Healthy Vending representative in <strong>{formData.state}</strong> within 1 business day.
                  </p>
                )}
                <div className="bg-[oklch(0.58_0.16_145/0.06)] rounded-lg p-4 max-w-sm mx-auto">
                  <p className="font-body text-[oklch(0.58_0.16_145)] text-sm font-medium">
                    Questions? Call us directly:
                  </p>
                  <a href="tel:8643819290" className="font-display text-[oklch(0.58_0.16_145)] text-xl font-bold">
                    864-381-9290
                  </a>
                </div>
              </div>
            )}

            {/* SURVEY STEPS */}
            {!disqualified && !submitted && !showContactForm && (
              <div className="space-y-6">
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-brand text-xs text-[oklch(0.50_0.05_145)] uppercase tracking-wider">
                    Step {currentStep + 1} of {totalSteps}
                  </span>
                  <div className="flex gap-1.5">
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i <= currentStep
                            ? "bg-[oklch(0.58_0.16_145)] w-6"
                            : "bg-[oklch(0.90_0.04_145)] w-3"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Question */}
                <div>
                  <h3 className="font-display text-[oklch(0.18_0.005_285)] text-xl sm:text-2xl font-bold leading-snug">
                    {steps[currentStep].question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() =>
                        handleOptionSelect(
                          steps[currentStep].id,
                          option.value,
                          option.disqualify
                        )
                      }
                      className={`form-step-option w-full text-left ${
                        answers[steps[currentStep].id] === option.value ? "selected" : ""
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                          answers[steps[currentStep].id] === option.value
                            ? "border-[oklch(0.58_0.16_145)] bg-[oklch(0.58_0.16_145)]"
                            : "border-[oklch(0.75_0.01_285)]"
                        }`}
                      >
                        {answers[steps[currentStep].id] === option.value && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="font-body text-[oklch(0.18_0.005_285)] font-medium text-sm sm:text-base">
                        {option.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[oklch(0.58_0.16_145)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* CONTACT FORM (after qualification) */}
            {showContactForm && !submitted && (
              <div className="space-y-6">
                {/* Congratulations header */}
                <div className="text-center pb-2">
                  <div className="w-14 h-14 bg-[oklch(0.80_0.18_95)] rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7 text-[oklch(0.18_0.005_285)]" />
                  </div>
                  <h3 className="font-display text-[oklch(0.18_0.005_285)] text-2xl font-bold mb-2">
                    Congratulations! Your School Pre-Qualifies!
                  </h3>
                  <p className="font-body text-[oklch(0.44_0.04_145)] text-sm">
                    Please leave your contact details so we can schedule a free consultation call.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-[oklch(0.28_0.005_285)] text-sm font-semibold block mb-1.5">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full border border-[oklch(0.85_0.04_145)] rounded-lg px-4 py-2.5 font-body text-[oklch(0.18_0.005_285)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.16_145/0.3)] focus:border-[oklch(0.58_0.16_145)] transition-all"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="font-body text-[oklch(0.28_0.005_285)] text-sm font-semibold block mb-1.5">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full border border-[oklch(0.85_0.04_145)] rounded-lg px-4 py-2.5 font-body text-[oklch(0.18_0.005_285)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.16_145/0.3)] focus:border-[oklch(0.58_0.16_145)] transition-all"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.28_0.005_285)] text-sm font-semibold block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[oklch(0.85_0.04_145)] rounded-lg px-4 py-2.5 font-body text-[oklch(0.18_0.005_285)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.16_145/0.3)] focus:border-[oklch(0.58_0.16_145)] transition-all"
                      placeholder="principal@school.edu"
                    />
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.28_0.005_285)] text-sm font-semibold block mb-1.5">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-[oklch(0.85_0.04_145)] rounded-lg px-4 py-2.5 font-body text-[oklch(0.18_0.005_285)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.16_145/0.3)] focus:border-[oklch(0.58_0.16_145)] transition-all"
                      placeholder="(864) 555-0100"
                    />
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.28_0.005_285)] text-sm font-semibold block mb-1.5">
                      School / Facility Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.facilityName}
                      onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
                      className="w-full border border-[oklch(0.85_0.04_145)] rounded-lg px-4 py-2.5 font-body text-[oklch(0.18_0.005_285)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.16_145/0.3)] focus:border-[oklch(0.58_0.16_145)] transition-all"
                      placeholder="School or Facility Name"
                    />
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.28_0.005_285)] text-sm font-semibold block mb-1.5">
                      Facility Type
                    </label>
                    <select
                      value={formData.facilityType}
                      onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                      className="w-full border border-[oklch(0.85_0.04_145)] rounded-lg px-4 py-2.5 font-body text-[oklch(0.18_0.005_285)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.16_145/0.3)] focus:border-[oklch(0.58_0.16_145)] transition-all bg-white"
                    >
                      <option value="Middle School">Middle School</option>
                      <option value="High School">High School</option>
                      <option value="YMCA / Community Center">YMCA / Community Center</option>
                      <option value="Office Building">Office Building</option>
                      <option value="Hospital / Clinic">Hospital / Clinic</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.28_0.005_285)] text-sm font-semibold block mb-1.5">
                      State *
                    </label>
                    <select
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full border border-[oklch(0.85_0.04_145)] rounded-lg px-4 py-2.5 font-body text-[oklch(0.18_0.005_285)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.16_145/0.3)] focus:border-[oklch(0.58_0.16_145)] transition-all bg-white"
                    >
                      {["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.28_0.005_285)] text-sm font-semibold block mb-1.5">
                      Do you have any comments about your vending experience to share? <span className="font-normal text-[oklch(0.50_0.05_145)]">(Optional)</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full border border-[oklch(0.85_0.04_145)] rounded-lg px-4 py-2.5 font-body text-[oklch(0.18_0.005_285)] text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.58_0.16_145/0.3)] focus:border-[oklch(0.58_0.16_145)] transition-all resize-none"
                      placeholder="Share any details about your current vending situation, concerns, or questions..."
                    />
                  </div>

                  {/* Service area note */}
                  <div className="bg-[oklch(0.58_0.16_145/0.06)] border border-[oklch(0.58_0.16_145/0.20)] rounded-lg px-4 py-3 text-center">
                    <p className="font-body text-[oklch(0.44_0.04_145)] text-xs leading-relaxed">
                      <strong className="text-[oklch(0.42_0.16_145)]">We currently serve Greenville, Spartanburg, Pickens, and Cherokee counties, SC.</strong> Outside our area? Submit your request anyway and we will connect you with a Free Healthy Vending representative near you.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-amber w-full justify-center py-4 text-base mt-2"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[oklch(0.18_0.005_285)/0.3] border-t-[oklch(0.18_0.005_285)] rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        Submit My Application
                      </>
                    )}
                  </button>

                  <p className="font-body text-[oklch(0.50_0.05_145)] text-xs text-center">
                    By submitting, you agree to be contacted by Legacy Way Vending. We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Below form trust signals */}
        {!submitted && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2 text-sm font-body">
              <CheckCircle2 className="w-4 h-4 text-[oklch(0.80_0.18_95)]" />
              No cost, ever
            </div>
            <div className="flex items-center gap-2 text-sm font-body">
              <CheckCircle2 className="w-4 h-4 text-[oklch(0.80_0.18_95)]" />
              USDA Smart Snacks compliant
            </div>
            <div className="flex items-center gap-2 text-sm font-body">
              <CheckCircle2 className="w-4 h-4 text-[oklch(0.80_0.18_95)]" />
              Response within 1 business day
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

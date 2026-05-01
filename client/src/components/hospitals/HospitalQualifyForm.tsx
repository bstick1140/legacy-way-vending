/* ============================================================
   HOSPITAL QUALIFY FORM — Legacy Way Vending
   Adapted for medical facilities. Survey questions target
   facilities directors, operations managers, food services.
   ============================================================ */

import { useState } from "react";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

type Step = {
  id: string;
  question: string;
  options: { label: string; value: string; disqualify?: boolean }[];
};

const steps: Step[] = [
  {
    id: "manages_facility",
    question: "Do you manage or oversee a medical or healthcare facility?",
    options: [
      { label: "Yes — I manage or oversee a facility", value: "yes" },
      { label: "No — I do not manage a facility", value: "no", disqualify: true },
    ],
  },
  {
    id: "daily_traffic",
    question: "How many staff, patients, and visitors pass through your facility daily?",
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

const facilityTypes = [
  "Hospital",
  "Medical Clinic",
  "Family Medical Practice",
  "Urgent Care Center",
  "Rehabilitation Center",
  "Specialty Medical Center",
  "Other Healthcare Facility",
];

const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  facilityName: string;
  facilityType: string;
  role: string;
  state: string;
  comments: string;
};

export default function HospitalQualifyForm() {
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
    facilityType: "Hospital",
    role: "",
    state: "South Carolina",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const totalSteps = steps.length;
  const progress = (currentStep / totalSteps) * 100;

  const answerLabels: Record<string, Record<string, string>> = {
    manages_facility: {
      yes: "Yes — I manage or oversee a facility",
      no: "No — I do not manage a facility",
    },
    daily_traffic: {
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
      setTimeout(() => {
        setQualified(true);
        setShowContactForm(true);
      }, 300);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const surveyLines = steps
      .map((step) => {
        const raw = answers[step.id];
        const label = answerLabels[step.id]?.[raw] ?? raw;
        return `${step.question}\n→ ${label}`;
      })
      .join("\n\n");

    const outOfState = formData.state !== "South Carolina";
    const commentsSection = formData.comments.trim()
      ? `\n\n=== COMMENTS ===\n\n${formData.comments.trim()}`
      : "";

    const message = `=== HOSPITAL/MEDICAL QUALIFICATION SURVEY ===\n\n${surveyLines}\n\n=== CONTACT DETAILS ===\n\nName: ${formData.firstName} ${formData.lastName}\nRole/Title: ${formData.role}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nFacility: ${formData.facilityName}\nFacility Type: ${formData.facilityType}\nState: ${formData.state}${outOfState ? " *** OUT OF SERVICE AREA — REFERRAL NEEDED ***" : ""}${commentsSection}`;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "3c62acd8-0455-4e78-ba9b-47269953d378",
          subject: `New Medical Facility Request — ${formData.facilityName} (${formData.facilityType})`,
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
      facilityType: "Hospital",
      role: "",
      state: "South Carolina",
      comments: "",
    });
  };

  const outOfState = formData.state !== "South Carolina";

  return (
    <section
      id="hospital-qualify"
      className="py-20 lg:py-28 bg-[oklch(0.58_0.16_145)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.80_0.18_95/0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.70_0.14_145) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[oklch(0.80_0.18_95/0.25)] border border-[oklch(0.80_0.18_95/0.5)] rounded-full px-4 py-1.5 mb-4">
            <span className="font-body text-[oklch(0.80_0.18_95)] text-xs font-semibold uppercase tracking-widest">
              Free Qualification Survey
            </span>
          </div>
          <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Does Your Facility
            <br />
            <span className="text-[oklch(0.80_0.18_95)] italic">Qualify for Free Vending?</span>
          </h2>
          <p className="font-body text-white/90 text-lg">
            Answer 3 quick questions to find out if your hospital or clinic in Greenville, Spartanburg, Pickens, or York County, SC qualifies for a free, state-of-the-art healthy vending machine.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Progress bar */}
          <div className="h-1.5 bg-[oklch(0.94_0.04_145)]">
            <div
              className="h-full bg-[oklch(0.80_0.18_95)] transition-all duration-500"
              style={{ width: `${qualified || disqualified ? 100 : progress}%` }}
            />
          </div>

          <div className="p-8 sm:p-10">
            {/* Survey steps */}
            {!qualified && !disqualified && (
              <div>
                <div className="text-center mb-2">
                  <span className="font-body text-[oklch(0.65_0.008_60)] text-sm">
                    Step {currentStep + 1} of {totalSteps}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-xl sm:text-2xl text-center mb-8">
                  {steps[currentStep].question}
                </h3>
                <div className="space-y-3">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleOptionSelect(steps[currentStep].id, option.value, option.disqualify)}
                      className="w-full text-left px-5 py-4 border-2 border-[oklch(0.90_0.04_145)] rounded-xl hover:border-[oklch(0.58_0.16_145)] hover:bg-[oklch(0.97_0.03_145)] transition-all duration-200 font-body text-[oklch(0.35_0.008_60)] text-sm font-medium"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Disqualified */}
            {disqualified && (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-[oklch(0.96_0.04_145)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-[oklch(0.58_0.16_145)]" />
                </div>
                <h3 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-2xl mb-3">
                  Let's Talk Directly
                </h3>
                <p className="font-body text-[oklch(0.45_0.008_60)] text-base mb-6 max-w-sm mx-auto">
                  Your facility may still qualify. Call us and we'll discuss the best options for your location.
                </p>
                <a href="tel:8643819290" className="btn-amber inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call 864-381-9290
                </a>
                <button onClick={resetForm} className="block mx-auto mt-4 font-body text-[oklch(0.58_0.16_145)] text-sm underline">
                  Start over
                </button>
              </div>
            )}

            {/* Qualified — Contact Form */}
            {qualified && showContactForm && !submitted && (
              <div>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-[oklch(0.96_0.04_145)] rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6 text-[oklch(0.58_0.16_145)]" />
                  </div>
                  <h3 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-2xl mb-1">
                    Your Facility Pre-Qualifies!
                  </h3>
                  <p className="font-body text-[oklch(0.45_0.008_60)] text-sm">
                    Leave your contact details and we'll schedule a free consultation.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-[oklch(0.35_0.008_60)] text-sm font-medium block mb-1.5">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full border border-[oklch(0.88_0.04_145)] rounded-lg px-3 py-2.5 font-body text-sm text-[oklch(0.28_0.10_145)] focus:outline-none focus:border-[oklch(0.58_0.16_145)] focus:ring-1 focus:ring-[oklch(0.58_0.16_145)]"
                      />
                    </div>
                    <div>
                      <label className="font-body text-[oklch(0.35_0.008_60)] text-sm font-medium block mb-1.5">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full border border-[oklch(0.88_0.04_145)] rounded-lg px-3 py-2.5 font-body text-sm text-[oklch(0.28_0.10_145)] focus:outline-none focus:border-[oklch(0.58_0.16_145)] focus:ring-1 focus:ring-[oklch(0.58_0.16_145)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.35_0.008_60)] text-sm font-medium block mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="director@hospital.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.04_145)] rounded-lg px-3 py-2.5 font-body text-sm text-[oklch(0.28_0.10_145)] focus:outline-none focus:border-[oklch(0.58_0.16_145)] focus:ring-1 focus:ring-[oklch(0.58_0.16_145)]"
                    />
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.35_0.008_60)] text-sm font-medium block mb-1.5">Mobile Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(864) 555-0100"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.04_145)] rounded-lg px-3 py-2.5 font-body text-sm text-[oklch(0.28_0.10_145)] focus:outline-none focus:border-[oklch(0.58_0.16_145)] focus:ring-1 focus:ring-[oklch(0.58_0.16_145)]"
                    />
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.35_0.008_60)] text-sm font-medium block mb-1.5">Facility Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Hospital or Facility Name"
                      value={formData.facilityName}
                      onChange={(e) => setFormData({ ...formData, facilityName: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.04_145)] rounded-lg px-3 py-2.5 font-body text-sm text-[oklch(0.28_0.10_145)] focus:outline-none focus:border-[oklch(0.58_0.16_145)] focus:ring-1 focus:ring-[oklch(0.58_0.16_145)]"
                    />
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.35_0.008_60)] text-sm font-medium block mb-1.5">Your Role / Title</label>
                    <input
                      type="text"
                      placeholder="Facilities Director, Operations Manager, Food Services Director..."
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.04_145)] rounded-lg px-3 py-2.5 font-body text-sm text-[oklch(0.28_0.10_145)] focus:outline-none focus:border-[oklch(0.58_0.16_145)] focus:ring-1 focus:ring-[oklch(0.58_0.16_145)]"
                    />
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.35_0.008_60)] text-sm font-medium block mb-1.5">Facility Type</label>
                    <select
                      value={formData.facilityType}
                      onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.04_145)] rounded-lg px-3 py-2.5 font-body text-sm text-[oklch(0.28_0.10_145)] focus:outline-none focus:border-[oklch(0.58_0.16_145)] focus:ring-1 focus:ring-[oklch(0.58_0.16_145)] bg-white"
                    >
                      {facilityTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.35_0.008_60)] text-sm font-medium block mb-1.5">State</label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.04_145)] rounded-lg px-3 py-2.5 font-body text-sm text-[oklch(0.28_0.10_145)] focus:outline-none focus:border-[oklch(0.58_0.16_145)] focus:ring-1 focus:ring-[oklch(0.58_0.16_145)] bg-white"
                    >
                      {US_STATES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-body text-[oklch(0.35_0.008_60)] text-sm font-medium block mb-1.5">
                      Comments <span className="text-[oklch(0.65_0.008_60)] font-normal">(Optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share any details about your current vending situation, number of locations, or questions..."
                      value={formData.comments}
                      onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full border border-[oklch(0.88_0.04_145)] rounded-lg px-3 py-2.5 font-body text-sm text-[oklch(0.28_0.10_145)] focus:outline-none focus:border-[oklch(0.58_0.16_145)] focus:ring-1 focus:ring-[oklch(0.58_0.16_145)] resize-none"
                    />
                  </div>

                  {/* Service area note */}
                  <p className="font-body text-[oklch(0.55_0.008_60)] text-xs text-center">
                    We currently serve Greenville, Spartanburg, Pickens, York, and Cherokee counties in South Carolina. Outside our area? Submit anyway and we will connect you with a Free Healthy Vending representative near you.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full btn-amber flex items-center justify-center gap-2 py-3.5 text-base disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : (
                      <>
                        Submit My Request
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* Submitted */}
            {submitted && (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-[oklch(0.96_0.04_145)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[oklch(0.58_0.16_145)]" />
                </div>
                <h3 className="font-display font-bold text-[oklch(0.28_0.10_145)] text-2xl mb-3">
                  Thank You, {formData.firstName}!
                </h3>
                {outOfState ? (
                  <p className="font-body text-[oklch(0.45_0.008_60)] text-base max-w-sm mx-auto">
                    Legacy Way Vending currently serves Greenville, Spartanburg, Pickens, York, and Cherokee counties in South Carolina. We will review your request for {formData.facilityName} and connect you with a Free Healthy Vending representative in {formData.state} within 1 business day.
                  </p>
                ) : (
                  <p className="font-body text-[oklch(0.45_0.008_60)] text-base max-w-sm mx-auto">
                    We received your request for {formData.facilityName}. We will be in touch within 1 business day to schedule your free consultation and discuss the next steps.
                  </p>
                )}
                <a href="tel:8643819290" className="inline-flex items-center gap-2 mt-6 text-[oklch(0.58_0.16_145)] font-body font-medium text-sm hover:underline">
                  <Phone className="w-4 h-4" />
                  Questions? Call 864-381-9290
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState, useRef, useEffect } from "react";
import { Download, FileText } from "lucide-react";
import emailjs, { EMAIL_CONFIG, PUBLIC_KEY } from "@/utils/emailjs";
import { checkRateLimit, recordSubmission } from "@/utils/rateLimiting";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateCompany,
  containsSuspiciousContent,
  HONEYPOT_FIELD,
  validateHoneypot,
  checkSubmissionSpeed,
} from "@/utils/formValidation";

interface Option {
  value: string;
  label: string;
}

const OTHER = "other";

const ROLES: Option[] = [
  { value: "owner-director", label: "Owner / Director" },
  { value: "medical-director", label: "Medical Director" },
  { value: "facility-manager", label: "Facility or Operations Manager" },
  { value: "administrator", label: "Administrator" },
  { value: "clinician", label: "Clinician" },
  { value: OTHER, label: "Other" },
];

const FACILITY_SIZES: Option[] = [
  { value: "under-10", label: "Under 10" },
  { value: "10-30", label: "10 to 30" },
  { value: "30-100", label: "30 to 100" },
  { value: "above-100", label: "Above 100" },
];

const CONCERNS: Option[] = [
  { value: "water-bills", label: "Water bills" },
  { value: "diesel-power-costs", label: "Diesel / power costs" },
  { value: "unreliable-power", label: "Unreliable power supply" },
  { value: "sustainability-goals", label: "Sustainability goals" },
  { value: OTHER, label: "Other" },
];

const CONTACT_TIMES: Option[] = [
  { value: "morning", label: "Morning" },
  { value: "afternoon", label: "Afternoon" },
  { value: "evening", label: "Evening" },
];

const labelFor = (options: Option[], value: string) =>
  options.find((o) => o.value === value)?.label ?? "";

// Resolve a choice to its label, or the typed answer when "Other" is picked
const answerFor = (options: Option[], value: string, other: string) =>
  value === OTHER ? other.trim() : labelFor(options, value);

const validateBooking = (formData: FormData) => {
  const errors: Record<string, string> = {};
  const get = (key: string) => ((formData.get(key) as string) || "").trim();

  if (!validateName(get("full_name"))) {
    errors.full_name = "Full name must be between 2 and 50 characters";
  }
  if (!validateEmail(get("from_email"))) {
    errors.from_email = "Please enter a valid email address";
  }
  if (!get("phone") || !validatePhone(get("phone"))) {
    errors.phone = "Please enter a valid phone / WhatsApp number";
  }
  if (!get("organisation")) {
    errors.organisation = "Please enter your organisation";
  } else if (!validateCompany(get("organisation"))) {
    errors.organisation = "Organisation must be less than 100 characters";
  }
  if (get("facility_location").length > 100) {
    errors.facility_location = "Location must be less than 100 characters";
  }
  if (!ROLES.some((r) => r.value === get("role"))) {
    errors.role = "Please select your role";
  } else if (get("role") === OTHER && !get("role_other")) {
    errors.role = "Please tell us your role";
  }
  if (get("concern") === OTHER && !get("concern_other")) {
    errors.concern = "Please tell us your main concern";
  }

  const freeText = ["organisation", "facility_location", "role_other", "concern_other"]
    .map(get)
    .join(" ");
  if (containsSuspiciousContent(freeText)) {
    errors.organisation = "Your answers contain suspicious content";
  }

  return { isValid: Object.keys(errors).length === 0, errors };
};

const RATE_LIMIT_KEY = "een_wihcn_submissions";

const COMPANY_PROFILE_URL = "/EEN%20Company%20Profile.pdf";

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#1AA3DD] focus:border-transparent transition-colors duration-200 ${
    hasError ? "border-red-300" : "border-gray-300"
  }`;

export default function WihcnEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [role, setRole] = useState("");
  const [concern, setConcern] = useState("");
  const formStartTime = useRef(Date.now());
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  // Bring the result (and profile download) into view after submitting
  useEffect(() => {
    if (!submitStatus) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    statusRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [submitStatus]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const rateLimitCheck = checkRateLimit(RATE_LIMIT_KEY);
    if (!rateLimitCheck.allowed) {
      setSubmitStatus({
        type: "error",
        message:
          rateLimitCheck.message ??
          "Rate limit exceeded. Please try again later.",
      });
      return;
    }

    if (!validateHoneypot(formData, HONEYPOT_FIELD)) {
      setSubmitStatus({ type: "error", message: "Invalid submission detected" });
      return;
    }

    if (!checkSubmissionSpeed(formStartTime.current)) {
      setSubmitStatus({
        type: "error",
        message: "Please take your time filling out the form",
      });
      return;
    }

    const validation = validateBooking(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const get = (key: string) => ((formData.get(key) as string) || "").trim();
      const templateParams = {
        full_name: get("full_name"),
        from_email: get("from_email"),
        phone: get("phone"),
        organisation: get("organisation"),
        facility_location: get("facility_location"),
        role: answerFor(ROLES, get("role"), get("role_other")),
        facility_size: labelFor(FACILITY_SIZES, get("facility_size")),
        main_concern: answerFor(CONCERNS, get("concern"), get("concern_other")),
        best_time: labelFor(CONTACT_TIMES, get("best_time")),
      };

      const result = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATES.WIHCN,
        templateParams,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        recordSubmission(RATE_LIMIT_KEY);
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your facility audit booking has been received. Free audits go to the first 10 bookings; we'll confirm by WhatsApp.",
        });
        form.reset();
        setRole("");
        setConcern("");
        formStartTime.current = Date.now();
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your booking. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Honeypot field for anti-spam */}
        <input
          type="text"
          name={HONEYPOT_FIELD}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {submitStatus && (
          <div
            ref={statusRef}
            role="status"
            className={`scroll-mt-24 p-4 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-100 text-green-700 border border-green-200"
                : "bg-red-100 text-red-700 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {submitStatus?.type === "success" && (
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-xl border border-[#1AA3DD]/20 bg-gradient-to-br from-blue-50 to-green-50">
            <div className="w-12 h-12 rounded-lg bg-[#1AA3DD]/10 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-[#1AA3DD]" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                Get to know EEN Consulting
              </h3>
              <p className="text-sm text-gray-600">
                Download our company profile to learn about our solar, water,
                smart metering and EDGE certification work. (PDF, 6.7 MB)
              </p>
            </div>
            <a
              href={COMPANY_PROFILE_URL}
              download="EEN Company Profile.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#1AA3DD] text-white font-semibold hover:bg-[#1592c7] transition-colors duration-200 flex-shrink-0"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download Profile
            </a>
          </div>
        )}

        <Field label="Full Name *" name="full_name" error={errors.full_name}>
          <input
            type="text"
            id="full_name"
            name="full_name"
            required
            autoComplete="name"
            className={inputClass(!!errors.full_name)}
            placeholder="Enter your full name"
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Email Address *" name="from_email" error={errors.from_email}>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              autoComplete="email"
              className={inputClass(!!errors.from_email)}
              placeholder="you@example.com"
            />
          </Field>
          <Field label="Phone / WhatsApp Number *" name="phone" error={errors.phone}>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autoComplete="tel"
              className={inputClass(!!errors.phone)}
              placeholder="+234 800 000 0000"
            />
          </Field>
        </div>

        <Field label="Organisation *" name="organisation" error={errors.organisation}>
          <input
            type="text"
            id="organisation"
            name="organisation"
            required
            autoComplete="organization"
            className={inputClass(!!errors.organisation)}
            placeholder="Hospital, clinic or company"
          />
        </Field>

        <Field
          label="Facility Location"
          name="facility_location"
          error={errors.facility_location}
        >
          <input
            type="text"
            id="facility_location"
            name="facility_location"
            autoComplete="address-level2"
            className={inputClass(!!errors.facility_location)}
            placeholder="e.g. Ikeja, Lagos"
          />
        </Field>

        <ChoiceGroup
          legend="Your Role *"
          name="role"
          options={ROLES}
          value={role}
          onChange={setRole}
          error={errors.role}
          otherPlaceholder="Your role"
        />

        <ChoiceGroup
          legend="Roughly how many taps or washrooms are in the facility?"
          name="facility_size"
          options={FACILITY_SIZES}
        />

        <ChoiceGroup
          legend="What is your biggest concern right now?"
          name="concern"
          options={CONCERNS}
          value={concern}
          onChange={setConcern}
          error={errors.concern}
          otherPlaceholder="Your main concern"
        />

        <ChoiceGroup
          legend="Best time to reach you"
          name="best_time"
          options={CONTACT_TIMES}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-semibold py-3 px-6 rounded-lg text-white transition-colors duration-200 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#1AA3DD] to-[#73C167] hover:opacity-90"
          }`}
        >
          {isSubmitting ? "Sending..." : "Book Facility Audit"}
        </button>
      </form>
    </div>
  );
}

interface FieldProps {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, name, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      {children}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}

interface ChoiceGroupProps {
  legend: string;
  name: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  otherPlaceholder?: string;
}

function ChoiceGroup({
  legend,
  name,
  options,
  value,
  onChange,
  error,
  otherPlaceholder,
}: ChoiceGroupProps) {
  return (
    <fieldset>
      <legend className="block text-sm font-medium text-gray-700 mb-2">
        {legend}
      </legend>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-3 px-4 py-3 border rounded-lg cursor-pointer transition-colors duration-200 has-[:checked]:border-[#1AA3DD] has-[:checked]:bg-[#1AA3DD]/5 hover:border-[#1AA3DD]/50 ${
              error ? "border-red-300" : "border-gray-300"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="h-4 w-4 accent-[#1AA3DD]"
            />
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
      {value === OTHER && (
        <input
          type="text"
          name={`${name}_other`}
          aria-label={otherPlaceholder}
          autoFocus
          className={`${inputClass(!!error)} mt-2`}
          placeholder={otherPlaceholder}
        />
      )}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </fieldset>
  );
}

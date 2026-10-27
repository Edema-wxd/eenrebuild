"use client";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Download, FileText } from "lucide-react";
import { EMAIL_CONFIG } from "@/utils/emailjs";
import { checkRateLimit, recordSubmission } from "@/utils/rateLimiting";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateMessage,
  validateCompany,
  generateHoneypotField,
  validateHoneypot,
  checkSubmissionSpeed,
} from "@/utils/formValidation";

const ENQUIRY_TYPES = [
  { value: "attendance", label: "Attendance / Registration" },
  { value: "sponsorship", label: "Sponsorship" },
  { value: "exhibition", label: "Exhibition" },
  { value: "speaking", label: "Speaking Opportunity" },
  { value: "partnership", label: "Partnership" },
  { value: "media", label: "Media / Press" },
  { value: "general", label: "General Enquiry" },
];

const validateEnquiry = (formData: FormData) => {
  const errors: Record<string, string> = {};
  const get = (key: string) => (formData.get(key) as string) || "";

  if (!validateName(get("first_name"))) {
    errors.first_name = "First name must be between 2 and 50 characters";
  }
  if (!validateName(get("last_name"))) {
    errors.last_name = "Last name must be between 2 and 50 characters";
  }
  if (!validateEmail(get("from_email"))) {
    errors.from_email = "Please enter a valid email address";
  }
  if (!get("phone") || !validatePhone(get("phone"))) {
    errors.phone = "Please enter a valid phone number";
  }
  if (!validateCompany(get("organization"))) {
    errors.organization = "Organization must be less than 100 characters";
  }
  if (!ENQUIRY_TYPES.some((t) => t.value === get("enquiry_type"))) {
    errors.enquiry_type = "Please select an enquiry type";
  }
  const attendees = get("attendees");
  if (attendees && (!/^\d+$/.test(attendees) || Number(attendees) < 1)) {
    errors.attendees = "Please enter a valid number";
  }
  if (!validateMessage(get("message"))) {
    errors.message = "Message must be between 10 and 1000 characters";
  }

  return { isValid: Object.keys(errors).length === 0, errors };
};

const COMPANY_PROFILE_URL = "/EEN%20Company%20Profile.pdf";

const inputClass =(hasError: boolean) =>
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
  const [honeypotField] = useState(generateHoneypotField());
  const formStartTime = useRef(Date.now());

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const rateLimitCheck = checkRateLimit();
    if (!rateLimitCheck.allowed) {
      setSubmitStatus({
        type: "error",
        message:
          rateLimitCheck.message ??
          "Rate limit exceeded. Please try again later.",
      });
      return;
    }

    if (!validateHoneypot(formData, honeypotField)) {
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

    const validation = validateEnquiry(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const enquiryType = formData.get("enquiry_type") as string;
      const templateParams = {
        first_name: formData.get("first_name") || "",
        last_name: formData.get("last_name") || "",
        from_email: formData.get("from_email") || "",
        phone: formData.get("phone") || "",
        organization: formData.get("organization") || "",
        job_title: formData.get("job_title") || "",
        enquiry_type:
          ENQUIRY_TYPES.find((t) => t.value === enquiryType)?.label ??
          enquiryType,
        attendees: formData.get("attendees") || "",
        message: formData.get("message") || "",
      };

      const result = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATES.WIHCN,
        templateParams,
        "MLE4LPkEt5si2d7m0"
      );

      if (result.status === 200) {
        recordSubmission();
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your enquiry has been sent. Our team will get back to you shortly.",
        });
        form.reset();
        formStartTime.current = Date.now();
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your enquiry. Please try again later.",
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
          name={honeypotField}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {submitStatus && (
          <div
            role="status"
            className={`p-4 rounded-lg ${
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="First Name *" name="first_name" error={errors.first_name}>
            <input
              type="text"
              id="first_name"
              name="first_name"
              required
              autoComplete="given-name"
              className={inputClass(!!errors.first_name)}
              placeholder="Enter your first name"
            />
          </Field>
          <Field label="Last Name *" name="last_name" error={errors.last_name}>
            <input
              type="text"
              id="last_name"
              name="last_name"
              required
              autoComplete="family-name"
              className={inputClass(!!errors.last_name)}
              placeholder="Enter your last name"
            />
          </Field>
        </div>

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
          <Field label="Phone Number *" name="phone" error={errors.phone}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Organization" name="organization" error={errors.organization}>
            <input
              type="text"
              id="organization"
              name="organization"
              autoComplete="organization"
              className={inputClass(!!errors.organization)}
              placeholder="Your organization"
            />
          </Field>
          <Field label="Job Title" name="job_title">
            <input
              type="text"
              id="job_title"
              name="job_title"
              autoComplete="organization-title"
              className={inputClass(false)}
              placeholder="Your role"
            />
          </Field>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Field label="Enquiry Type *" name="enquiry_type" error={errors.enquiry_type}>
            <select
              id="enquiry_type"
              name="enquiry_type"
              required
              defaultValue=""
              className={inputClass(!!errors.enquiry_type)}
            >
              <option value="" disabled>
                Select an enquiry type
              </option>
              {ENQUIRY_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Number of Attendees" name="attendees" error={errors.attendees}>
            <input
              type="number"
              id="attendees"
              name="attendees"
              min={1}
              inputMode="numeric"
              className={inputClass(!!errors.attendees)}
              placeholder="e.g. 2"
            />
          </Field>
        </div>

        <Field label="Message *" name="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={`${inputClass(!!errors.message)} resize-none`}
            placeholder="Tell us about your enquiry..."
          />
        </Field>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full font-semibold py-3 px-6 rounded-lg text-white transition-colors duration-200 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-[#1AA3DD] to-[#73C167] hover:opacity-90"
          }`}
        >
          {isSubmitting ? "Sending..." : "Submit Enquiry"}
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

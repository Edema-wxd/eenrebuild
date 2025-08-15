"use client";
import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "@/utils/emailjs";
import { checkRateLimit, recordSubmission } from "@/utils/rateLimiting";
import {
  validateFormData,
  generateHoneypotField,
  validateHoneypot,
  checkSubmissionSpeed,
} from "@/utils/formValidation";
import { GiPin, GiEnvelope, GiPhone, GiAlarmClock } from "react-icons/gi";

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [honeypotField] = useState(generateHoneypotField());
  const formStartTime = useRef(Date.now());
  const formRef = useRef(null);

  useEffect(() => {
    // Reset form start time when component mounts
    formStartTime.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submission started");

    // Reset previous errors
    setErrors({});
    setSubmitStatus(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Debug: Log form data
    console.log("Form data:", {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      from_email: formData.get("from_email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    });

    // Rate limiting check
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

    // Honeypot validation
    if (!validateHoneypot(formData, honeypotField)) {
      setSubmitStatus({
        type: "error",
        message: "Invalid submission detected",
      });
      return;
    }

    // Submission speed check
    if (!checkSubmissionSpeed(formStartTime.current)) {
      setSubmitStatus({
        type: "error",
        message: "Please take your time filling out the form",
      });
      return;
    }

    // Form validation
    const validation = validateFormData(formData);
    console.log("Validation result:", validation);
    if (!validation.isValid) {
      console.log("Validation failed:", validation.errors);
      setErrors(validation.errors as unknown as Record<string, string>);
      return;
    }

    setIsSubmitting(true);
    console.log("Starting email submission...");

    try {
      const templateParams = {
        first_name: formData.get("first_name") || "",
        last_name: formData.get("last_name") || "",
        from_email: formData.get("from_email") || "",
        phone: formData.get("phone") || "",
        company: formData.get("company") || "",
        service: formData.get("service") || "",
        message: formData.get("message") || "",
      };

      console.log("Template params:", templateParams);

      const result = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATES.CONTACT,
        templateParams,
        "MLE4LPkEt5si2d7m0"
      );

      if (result.status === 200) {
        recordSubmission();
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you soon.",
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
          "Sorry, there was an error sending your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to improve your energy efficiency? Contact our team of experts
            to discuss your needs and discover the best solutions for your
            project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot field for anti-spam */}
              <input
                type="text"
                name={honeypotField}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Status messages */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-red-100 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                      errors.first_name ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.first_name && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.first_name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                      errors.last_name ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.last_name && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.last_name}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.from_email ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.from_email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.from_email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.phone ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.company ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Enter your company name"
                />
                {errors.company && (
                  <p className="text-red-600 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.service ? "border-red-300" : "border-gray-300"
                  }`}
                >
                  <option value="">Select a service</option>
                  <option value="energy-audit">Energy Audit</option>
                  <option value="smart-metering">Smart Metering</option>
                  <option value="water-solutions">Water Solutions</option>
                  <option value="edge-certification">EDGE Certification</option>
                  <option value="solar-energy">Solar Energy</option>
                  <option value="consultation">General Consultation</option>
                </select>
                {errors.service && (
                  <p className="text-red-600 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none ${
                    errors.message ? "border-red-300" : "border-gray-300"
                  }`}
                  placeholder="Tell us about your project or requirements..."
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
                // The button is of type="submit", so onClick is unnecessary and can cause issues.
                // Form submission should be handled via the form's onSubmit handler.
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GiPin className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      Road 14 Adebayo Doherty,
                      <br />
                      Lekki Phase 1, Lagos
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GiEnvelope className="text-2xl text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a
                        href="mailto:info@eenconsult.com.ng"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        info@eenconsult.com.ng
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GiPhone className=" text-2xl text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">
                      <a
                        href="tel:+2348127576854"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        +234 812 757 6854
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <GiAlarmClock className="text-2xl text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="mb-4 opacity-90">
                For urgent inquiries or emergency support, please call our 24/7
                hotline.
              </p>
              <a
                href="tel:+2348127576854"
                className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

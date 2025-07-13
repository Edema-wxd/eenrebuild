// Form validation utility
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  if (!phone) return true; // Phone is optional

  const cleaned = phone.replace(/[\s\-\(\)]/g, "");

  // Accept numbers starting with + or a digit, and also those starting with 0 (local)
  const phoneRegex = /^(\+?[1-9]\d{0,15}|0\d{9,15})$/;

  return phoneRegex.test(cleaned);
};

export const validateName = (name) => {
  return name && name.trim().length >= 2 && name.trim().length <= 50;
};

export const validateMessage = (message) => {
  return (
    message && message.trim().length >= 10 && message.trim().length <= 1000
  );
};

export const validateCompany = (company) => {
  if (!company) return true; // Company is optional
  return company.trim().length <= 100;
};

export const validateService = (service) => {
  const validServices = [
    "energy-audit",
    "smart-metering",
    "water-solutions",
    "edge-certification",
    "solar-energy",
    "consultation",
  ];
  return validServices.includes(service);
};

export const validateFormData = (formData) => {
  const errors = {};

  // Required field validations
  const firstName = formData.get("first_name");
  if (!validateName(firstName)) {
    errors.first_name = "First name must be between 2 and 50 characters";
  }

  const lastName = formData.get("last_name");
  if (!validateName(lastName)) {
    errors.last_name = "Last name must be between 2 and 50 characters";
  }

  const email = formData.get("from_email");
  if (!validateEmail(email)) {
    errors.from_email = "Please enter a valid email address";
  }

  const phone = formData.get("phone");
  if (!validatePhone(phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  const company = formData.get("company");
  if (!validateCompany(company)) {
    errors.company = "Company name must be less than 100 characters";
  }

  const service = formData.get("service");
  if (!validateService(service)) {
    errors.service = "Please select a valid service";
  }

  const message = formData.get("message");
  if (!validateMessage(message)) {
    errors.message = "Message must be between 10 and 1000 characters";
  }

  // Check for suspicious content (basic spam detection)
  const messageText = message?.toLowerCase() || "";
  const suspiciousPatterns = [
    /buy.*viagra/i,
    /casino/i,
    /loan/i,
    /make.*money.*fast/i,
    /click.*here/i,
    /free.*money/i,
    /urgent.*reply/i,
  ];

  if (suspiciousPatterns.some((pattern) => pattern.test(messageText))) {
    errors.message = "Message contains suspicious content";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Anti-spam utilities
export const generateHoneypotField = () => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 15);
  return `${timestamp}_${randomString}`;
};

export const validateHoneypot = (formData, honeypotField) => {
  const honeypotValue = formData.get(honeypotField);
  return !honeypotValue; // Should be empty for real users
};

export const checkSubmissionSpeed = (startTime) => {
  const submissionTime = Date.now() - startTime;
  const minSubmissionTime = 3000; // 3 seconds minimum
  return submissionTime >= minSubmissionTime;
};

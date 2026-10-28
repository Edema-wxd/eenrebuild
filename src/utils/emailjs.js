import emailjs from "@emailjs/browser";

export const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "MLE4LPkEt5si2d7m0";

// Initialize with your public key
emailjs.init(PUBLIC_KEY);

export const EMAIL_CONFIG = {
  SERVICE_ID: "service_oeq5w9r",
  TEMPLATES: {
    CONTACT: "template_p9xmyq8",
    EDGE: "template_edge",
    AUTO_RESPONSE: "template_autoresponse",
    SOLAR: "template_solar",
    PARTNERSHIP: "template_partnership",
    WIHCN: "template_wihcn",
  },
};

export default emailjs;

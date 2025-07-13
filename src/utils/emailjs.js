import emailjs from "@emailjs/browser";

// Initialize with your public key
emailjs.init("MLE4LPkEt5si2d7m0");

export const EMAIL_CONFIG = {
  SERVICE_ID: "service_oeq5w9r",
  TEMPLATES: {
    CONTACT: "template_p9xmyq8",
    EDGE: "template_edge",
    AUTO_RESPONSE: "template_autoresponse",
    SOLAR: "template_solar",
    PARTNERSHIP: "template_partnership",
  },
};

export default emailjs;

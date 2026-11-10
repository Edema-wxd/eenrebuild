// Schema.org JSON-LD for the business and its services.
// Read by search engines and AI assistants.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://eenconsult.com.ng";

const provider = {
  "@type": "ProfessionalService",
  name: "EEN Consulting",
  url: SITE_URL,
};

const nigeria = { "@type": "Country", name: "Nigeria" };

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "EEN Consulting",
  description:
    "Energy efficiency consulting and green building certification in Lagos, Nigeria. Certified EDGE experts and exclusive West African distributor of Neoperl water-saving products.",
  url: SITE_URL,
  telephone: "+234-812-757-6854",
  email: "info@eenconsult.com.ng",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Road 14 Adebayo Doherty",
    addressLocality: "Lekki Phase 1, Lagos",
    addressCountry: "NG",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  areaServed: nigeria,
  knowsAbout: [
    "EDGE green building certification",
    "Energy efficiency consulting",
    "Water conservation solutions",
    "Solar energy systems",
    "Sustainability consulting Nigeria",
  ],
};

export const edgeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EDGE Green Building Certification Nigeria",
  description:
    "End-to-end EDGE certification consulting for buildings in Nigeria. Energy modelling, BEEC compliance, documentation, and post-certification support. 20%+ improvement in energy, water, and embodied energy.",
  provider,
  areaServed: nigeria,
  url: `${SITE_URL}/edge-building`,
};

export const waterServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Neoperl Water Saving Solutions Nigeria",
  description:
    "Neoperl flow regulators and aerators for buildings in Nigeria. Reduces water consumption by up to 70%. 5-minute retrofit. EEN Consulting is the exclusive West African distributor.",
  provider,
  areaServed: nigeria,
  url: `${SITE_URL}/services/water-solutions`,
};

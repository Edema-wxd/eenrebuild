import React from "react";
import PartnerCard from "./PartnerCard";

const partners = [
  {
    logo: "/logos/neoperl-logo.svg",
    name: "Neoperl",
    heading: "Premium Water Technology from Germany",
    description:
      "As the exclusive distributor of authentic Neoperl® products in West Africa, EEN brings world-class German engineering to Nigerian buildings. Neoperl is a leading technology company offering innovative solutions for drinking water management.",
    linkUrl: "https://neoperl.com",
    linkText: "Explore Neoperl Solutions →",
    badgeColor: "bg-[#1aa3dd]",
    linkColor: "#1aa3dd",
    badges: ["West Africa Exclusive Distributor", "Water Management"],
    features: [
      "Up to 70% water savings without compromising performance",
      "25-year proven track record of quality and innovation",
      "Complete range of flow regulators and aerators",
      "German-Swiss precision engineering",
    ],
  },
  {
    logo: "/logos/edge.png",
    name: "EDGE Building",
    heading: "International Green Building Standards",
    description:
      "Through our partnership with EDGE Building, a member of the World Bank Group, we deliver EDGE green building certification - the world's fastest and most affordable certification designed specifically for emerging markets.",
    linkUrl: "https://edgebuildings.com/",
    linkText: "Explore EDGE Building →",
    badgeColor: "bg-[#002f6c]",
    linkColor: "#002f6c",
    badges: ["Technology"],
    features: [
      "Access to global green building standards",
      "Free EDGE software and technical resources",
      "International recognition for certified buildings",
      "Direct support from World Bank sustainability experts",
    ],
  },
  {
    logo: "/logos/solid-green-logo.svg",
    name: "Solid Green",
    heading: "Sustainability Consulting Services",
    description:
      "In partnership with Solid Green Consulting in South Africa, we offer advanced sustainability consulting services. Solid Green has received numerous awards for their Green Star certification work and brings decades of African market experience.",
    linkUrl: "https://www.solidgreen.co.za/",
    linkText: "Learn about Solid Green →",
    badgeColor: "bg-[#00A651]",
    linkColor: "#00A651",
    badges: ["EDGE Certification Partner"],
    features: [
      "End-to-end green building certification",
      "Sustainability consulting services",
      "Streamlined EDGE assessment for the African market",
      "Streamlined EDGE assessment for the African market",
    ],
  },
];

function Pcards() {
  return (
    <div className=" w-full flex flex-col justify-center gap-6 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Strategic Partners
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We collaborate with industry leaders and innovative companies to
          deliver comprehensive energy efficiency solutions and sustainable
          technologies.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-10 w-full p-4 ">
        {partners.map((partner) => (
          <PartnerCard key={partner.name} {...partner} />
        ))}
      </div>
    </div>
  );
}

export default Pcards;

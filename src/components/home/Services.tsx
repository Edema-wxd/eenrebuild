import Link from "next/link";
import React from "react";
//import { FaCode } from "react-icons/fa";

const services = [
  {
    icon: "",
    title: "Water Solutions",
    description:
      "Premium Neoperl flow regulators and aerators reducing water consumption by up to 70% without compromising performance.",
    link: "/services/water-solutions",
    linkText: "Explore Products →",
  },
  {
    icon: "",
    title: "EDGE Certification",
    description:
      "Expert guidance through the IFC EDGE green building certification process, ensuring 20%+ resource efficiency.",
    link: "/services/edge-certification",
    linkText: "Get Certified →",
  },
  {
    icon: "",
    title: "Solar Energy Systems",
    description:
      "Complete solar installations for residential and commercial properties with 5-year warranty and expert maintenance..",
    link: "/services/solar",
    linkText: "Explore Solutions →",
  },

  {
    icon: "",
    title: "Smart Metering",
    description:
      "Advanced monitoring systems to track and optimize your energy consumption in real-time for maximum efficiency.",
    link: "/services/smart-metering",
    linkText: "Learn More →",
  },
];

function Services() {
  return (
    <div className="flex flex-col items-center gap-10 py-10 justify-center">
      <div className="flex flex-col items-center gap-4 justify-center">
        <h5 className="text-[#1aa3dd] font-semibold uppercase tracking-[2px] text-base ">
          Our Services
        </h5>
        <h2 className="text-4xl text-center font-bold text-[#606163]">
          Comprehensive Green Solutions
        </h2>
        <p className="text-[#606163] text-center">
          From water conservation to renewable energy, we provide end-to-end
          sustainability solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 p-4 w-full mx-auto ">
        {services.map((service) => (
          <div
            className="flex flex-col items-start justify-start gap-4 bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            key={service.title}
          >
            <div>{service.icon}</div>
            <h4 className="text-xl font-bold text-[#606163]">
              {service.title}
            </h4>
            <p className="text-[#606163] text-sm">{service.description}</p>

            <Link
              href={service.link}
              className="text-[#1aa3dd] text-sm font-bold"
            >
              {service.linkText}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

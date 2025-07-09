"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "💧",
    title: "Water Solutions",
    desc: "Premium Neoperl® flow regulators and aerators as West Africa's exclusive distributor.",
    highlightLabel: "Potential Savings",
    highlightValue: "Up to 70%",
    features: [
      "Flow regulators for all applications",
      "Washbasin, kitchen & shower solutions",
      "5-minute retrofit installation",
      "German engineering quality",
      "EDGE certification compliant",
    ],
    learnMore: "/services/water-solutions",
    quote: "/contact-us",
    quoteLabel: "Get Quote",
  },
  {
    icon: "☀️",
    title: "Solar Energy Systems",
    desc: "Complete solar installations with battery backup for reliable, clean power.",
    highlightLabel: "Energy Independence",
    highlightValue: "Up to 95%",
    features: [
      "Residential & commercial installations",
      "Hybrid inverters with 5-year warranty",
      "Lithium & gel battery options",
      "24/7 power availability",
      "Professional maintenance plans",
    ],
    learnMore: "#",
    quote: "/contact-us",
    quoteLabel: "Get Quote",
  },
  {
    icon: "📊",
    title: "Smart Metering",
    desc: "Advanced monitoring systems for real-time energy consumption tracking.",
    highlightLabel: "Visibility Increase",
    highlightValue: "100%",
    features: [
      "Real-time consumption monitoring",
      "Mobile app integration",
      "Automated alerts & reporting",
      "Identify wastage patterns",
      "Solid Green technology partnership",
    ],
    learnMore: "#",
    quote: "/contact-us",
    quoteLabel: "Get Quote",
  },
  {
    icon: "🏆",
    title: "EDGE Certification",
    desc: "Expert guidance through IFC EDGE green building certification process.",
    highlightLabel: "Certification Success",
    highlightValue: "100%",
    features: [
      "Complete certification management",
      "BEEC compliance assessment",
      "Energy modeling & analysis",
      "ROI financial calculations",
      "Post-certification support",
    ],
    learnMore: "/edge-building",
    quote: "/contact-us",
    quoteLabel: "Get Started",
  },
];

function SServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col shadow-sm transition-all duration-300 relative group hover:-translate-y-2 hover:shadow-2xl"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Header */}
              <div className="relative bg-white p-10">
                {/* Gradient bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1aa3dd] to-[#73c167]" />
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#1aa3dd] to-[#73c167] rounded-xl flex items-center justify-center text-white text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-700">
                  {service.title}
                </h3>
                <p className="text-base text-gray-700">{service.desc}</p>
              </div>
              {/* Body */}
              <div className="flex-1 flex flex-col p-8 pt-6">
                <div className="bg-white rounded-lg mb-6 p-4 flex items-center justify-between">
                  <span className="text-sm text-gray-700">
                    {service.highlightLabel}
                  </span>
                  <span className="text-lg font-bold text-[#73c167]">
                    {service.highlightValue}
                  </span>
                </div>
                <ul className="mb-6 flex-1 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative pl-6 text-gray-700 font-medium"
                    >
                      <span className="absolute left-0 text-[#73c167] font-bold">
                        →
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <a
                    href={service.learnMore}
                    className="flex-1 text-center py-3 bg-[#1aa3dd] text-white rounded-full font-semibold transition-all duration-300 hover:bg-[#73c167]"
                  >
                    Learn More
                  </a>
                  <a
                    href={service.quote}
                    className="flex-1 text-center py-3 border-2 border-[#1aa3dd] text-[#1aa3dd] rounded-full font-semibold transition-all duration-300 hover:bg-[#1aa3dd] hover:text-white"
                  >
                    {service.quoteLabel}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SServices;

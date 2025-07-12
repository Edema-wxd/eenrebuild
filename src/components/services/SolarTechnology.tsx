"use client";

import React, { useEffect, useState } from "react";

const technologies = [
  {
    icon: "☀️",
    title: "Solar Panels",
    desc: "High-efficiency monocrystalline panels with 25-year performance warranty",
    specs: [
      { label: "Efficiency", value: "21%+" },
      { label: "Power Output", value: "450W-550W" },
      { label: "Warranty", value: "25 Years" },
    ],
  },
  {
    icon: "⚡",
    title: "Hybrid Inverters",
    desc: "Smart inverters that seamlessly switch between solar, battery, and grid power",
    specs: [
      { label: "Types", value: "Basic & Hybrid" },
      { label: "Capacity", value: "1kVA-100kVA" },
      { label: "Warranty", value: "5 Years" },
    ],
  },
  {
    icon: "🔋",
    title: "Battery Storage",
    desc: "Advanced battery systems for reliable power storage and overnight usage",
    specs: [
      { label: "Types", value: "Lithium & Gel" },
      { label: "Lifespan", value: "5,000+ Cycles" },
      { label: "DOD", value: "80-95%" },
    ],
  },
];

export default function SolarTechnology() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-700 animate-slideInUp transition-all duration-700 delay-200">
            Premium Components
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fadeIn transition-all duration-700 delay-400">
            We use only top-tier components to ensure maximum efficiency and
            longevity of your solar investment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {technologies.map((tech, i) => (
            <div
              key={tech.title}
              className={`bg-[#f5f5f5] p-6 sm:p-8 lg:p-10 rounded-2xl text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp group cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                animationDelay: `${0.6 + i * 0.2}s`,
                animationFillMode: "both",
              }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-100/20 to-yellow-100/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 text-2xl sm:text-4xl group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 animate-bounceIn">
                {tech.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-700 animate-slideInUp">
                {tech.title}
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 animate-fadeIn">
                {tech.desc}
              </p>
              <ul className="space-y-2 pt-4 border-t border-gray-300">
                {tech.specs.map((spec) => (
                  <li
                    key={spec.label}
                    className="flex justify-between items-center text-xs sm:text-sm"
                  >
                    <span className="text-gray-600">{spec.label}</span>
                    <span className="font-semibold text-[#FFA500]">
                      {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out;
        }
        /* Enhanced hover effects */
        .group:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        /* Responsive text sizing */
        @media (max-width: 640px) {
          .text-2xl {
            font-size: 1.5rem;
          }
          .text-3xl {
            font-size: 1.875rem;
          }
          .text-4xl {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </section>
  );
}

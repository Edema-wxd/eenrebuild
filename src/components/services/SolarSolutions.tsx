"use client";

import React, { useState } from "react";

const tabs = [
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industrial" },
];

const solutions = {
  residential: {
    title: "Residential Solar Systems",
    desc: "Complete home solar solutions designed to eliminate dependency on generators and provide 24/7 clean power.",
    features: [
      {
        icon: "🏠",
        title: "Whole Home Coverage",
        desc: "Power all appliances including ACs, refrigerators, and electronics",
      },
      {
        icon: "🔋",
        title: "Battery Backup",
        desc: "Lithium-ion batteries for overnight power and cloudy days",
      },
      {
        icon: "📱",
        title: "Smart Monitoring",
        desc: "Track energy production and consumption via mobile app",
      },
    ],
    package: {
      name: "Popular Home Package",
      power: "5kVA",
      features: [
        "8 x 450W Solar Panels",
        "5kVA Hybrid Inverter",
        "4 x 200Ah Lithium Batteries",
        "Complete Installation",
        "5 Year Warranty",
      ],
    },
  },
  commercial: {
    title: "Commercial Solar Systems",
    desc: "Scalable solutions for businesses, offices, and commercial facilities.",
    features: [
      {
        icon: "🏢",
        title: "Business Continuity",
        desc: "Ensure uninterrupted operations with reliable solar power",
      },
      {
        icon: "💰",
        title: "Cost Reduction",
        desc: "Significantly reduce operational costs and improve profitability",
      },
      {
        icon: "📊",
        title: "Energy Analytics",
        desc: "Detailed monitoring and reporting for energy optimization",
      },
    ],
    package: {
      name: "Commercial Package",
      power: "20kVA",
      features: [
        "32 x 450W Solar Panels",
        "20kVA Hybrid Inverter",
        "16 x 200Ah Lithium Batteries",
        "Professional Installation",
        "10 Year Warranty",
      ],
    },
  },
  industrial: {
    title: "Industrial Solar Systems",
    desc: "Large-scale installations for factories, warehouses, and industrial facilities.",
    features: [
      {
        icon: "🏭",
        title: "High Capacity",
        desc: "Multi-megawatt systems for heavy industrial loads",
      },
      {
        icon: "⚡",
        title: "Peak Shaving",
        desc: "Reduce peak demand charges and optimize energy costs",
      },
      {
        icon: "🛡️",
        title: "Grid Stability",
        desc: "Advanced systems with grid support capabilities",
      },
    ],
    package: {
      name: "Industrial Package",
      power: "100kVA",
      features: [
        "160 x 450W Solar Panels",
        "100kVA Hybrid Inverter",
        "80 x 200Ah Lithium Batteries",
        "15 Year Warranty",
      ],
    },
  },
};

export default function SolarSolutions() {
  const [activeTab, setActiveTab] = useState("residential");
  const currentSolution = solutions[activeTab as keyof typeof solutions];

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            Tailored Solar Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            From residential homes to large commercial facilities, we design and
            install systems that meet your specific power needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#FFA500] to-[#FFD700] text-white"
                  : "bg-white text-gray-700 border-2 border-transparent hover:border-[#FFA500]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-extrabold mb-4 text-gray-700">
              {currentSolution.title}
            </h3>
            <p className="text-gray-600 mb-8">{currentSolution.desc}</p>
            <div className="space-y-6 mb-8">
              {currentSolution.features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FFA500] to-[#FFD700] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1 text-gray-700">
                      {f.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#quote"
              className="bg-[#1AA3DD] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-[#73C167] transition"
            >
              Get Free Assessment
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="border-2 border-[#FFA500] rounded-xl p-6 bg-gradient-to-br from-yellow-100/20 to-orange-100/20">
              <div className="text-center mb-4">
                <div className="text-lg font-bold text-gray-700 mb-1">
                  {currentSolution.package.name}
                </div>
                <div className="text-3xl font-extrabold text-[#FFA500] mb-4">
                  {currentSolution.package.power}
                </div>
              </div>
              <ul className="space-y-2">
                {currentSolution.package.features.map((f) => (
                  <li
                    key={f}
                    className="py-2 border-b border-gray-200 last:border-b-0 text-sm text-gray-700"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes scaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
        }

        /* Enhanced hover effects */
        .group:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.12);
        }

        /* Responsive text sizing */
        @media (max-width: 640px) {
          .text-xl {
            font-size: 1.25rem;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
          .text-3xl {
            font-size: 1.875rem;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import React from "react";

const benefits = [
  {
    icon: "☀️",
    title: "Solar Production Tracking",
    desc: "Monitor real-time solar generation and see exactly how much grid power you're offsetting.",
  },
  {
    icon: "🔋",
    title: "Battery Performance",
    desc: "Track battery charge levels, cycles, and health to optimize storage utilization.",
  },
  {
    icon: "💰",
    title: "ROI Calculations",
    desc: "See real-time savings from solar and calculate exact payback periods with accurate data.",
  },
];

export default function SolarIntegration() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-100/20 to-purple-100/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            Perfect Integration with Solar Systems
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Maximize your renewable energy investment by monitoring both
            consumption and generation in one platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
          <div>
            <h3 className="text-2xl font-extrabold mb-4 text-gray-700">
              Complete <span className="text-[#6B46C1]">Energy Ecosystem</span>{" "}
              Visibility
            </h3>
            <p className="mb-6 text-gray-600">
              When combined with our solar installations, smart metering
              provides a complete picture of your energy independence journey.
            </p>
            <div className="flex flex-col gap-6 mb-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl bg-gradient-to-br from-yellow-400 to-yellow-200 text-white flex-shrink-0">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold mb-1 text-gray-700">
                      {b.title}
                    </h4>
                    <p className="text-gray-600">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="solar-energy.html"
              className="bg-[#1AA3DD] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-[#73C167] transition"
            >
              Explore Solar Solutions
            </a>
          </div>
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl text-center">
            <h4 className="mb-6 md:mb-8 text-gray-700 font-bold text-lg md:text-xl">
              Unified Energy Management
            </h4>
            {/* 
              Mobile optimization:
              - Use flex-col on mobile, flex-row on md+
              - Reduce gap on mobile, keep arrows visible
              - Adjust icon/text sizes for readability
            */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-4 mb-4">
              <div className="flex-1 w-full text-center mb-4 md:mb-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-full flex items-center justify-center mx-auto text-xl md:text-2xl text-white mb-2">
                  ☀️
                </div>
                <p className="text-xs md:text-xs text-gray-500">Solar Generation</p>
                <strong className="block text-base md:text-lg text-gray-700">8.5 kW</strong>
              </div>
              <div className="hidden md:block text-2xl text-[#6B46C1] animate-flow">→</div>
              {/* Mobile arrow */}
              <div className="block md:hidden text-xl text-[#6B46C1] animate-flow mb-4">↓</div>
              <div className="flex-1 w-full text-center mb-4 md:mb-0">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#6B46C1] to-[#0066CC] rounded-full flex items-center justify-center mx-auto text-xl md:text-2xl text-white mb-2">
                  📊
                </div>
                <p className="text-xs md:text-xs text-gray-500">Smart Meter</p>
                <strong className="block text-base md:text-lg text-gray-700">
                  Monitoring
                </strong>
              </div>
              <div className="hidden md:block text-2xl text-[#6B46C1] animate-flow">→</div>
              {/* Mobile arrow */}
              <div className="block md:hidden text-xl text-[#6B46C1] animate-flow mb-4">↓</div>
              <div className="flex-1 w-full text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#73C167] to-[#1AA3DD] rounded-full flex items-center justify-center mx-auto text-xl md:text-2xl text-white mb-2">
                  🏢
                </div>
                <p className="text-xs md:text-xs text-gray-500">Consumption</p>
                <strong className="block text-base md:text-lg text-gray-700">6.2 kW</strong>
              </div>
            </div>
            <p className="mt-4 md:mt-6 text-xs md:text-sm text-gray-600">
              Net Grid Independence:{" "}
              <strong className="text-[#73C167]">73%</strong>
            </p>
            <style>
              {`
                @keyframes flow {
                  0%, 100% { transform: translateX(0); }
                  50% { transform: translateX(10px); }
                }
                .animate-flow {
                  animation: flow 2s ease-in-out infinite;
                }
                @media (max-width: 767px) {
                  .animate-flow {
                    animation: flow-mobile 2s ease-in-out infinite;
                  }
                  @keyframes flow-mobile {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(6px); }
                  }
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
}

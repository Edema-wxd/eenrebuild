"use client";

import React from "react";
import { GiWaterDrop, GiKitchenTap, GiShower } from "react-icons/gi";

const categories = [
  {
    icon: <GiWaterDrop className="text-7xl text-[#ffffff]" />,
    title: "Washbasin Solutions",
    flow: "2.0 L/min",
    savings: "Up to 85%",
    features: [
      "Public washrooms",
      "Office buildings",
      "Hotels & restaurants",
      "Healthcare facilities",
    ],
  },
  {
    icon: <GiKitchenTap className="text-7xl text-[#ffffff]" />,
    title: "Kitchen Solutions",
    flow: "4.0 - 6.0 L/min",
    savings: "Up to 60%",
    features: [
      "Commercial kitchens",
      "Residential homes",
      "Restaurant prep areas",
      "Staff pantries",
    ],
  },
  {
    icon: <GiShower className="text-7xl text-[#ffffff]" />,
    title: "Shower Solutions",
    flow: "8.0 - 10.0 L/min",
    savings: "Up to 40%",
    features: [
      "Hotel bathrooms",
      "Gym facilities",
      "Residential showers",
      "Hospital rooms",
    ],
  },
];

function WSol() {
  return (
    <section className="py-20 bg-[#f6f8fa]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            Complete Water-Saving Solutions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored flow rates for every application, ensuring optimal
            performance and maximum savings.
          </p>
        </div>
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp"
              style={{
                animationDelay: `${0.1 + i * 0.15}s`,
                animationFillMode: "both",
              }}
            >
              {/* Card Header */}
              <div className=" flex flex-col items-center justify-center bg-gradient-to-br from-[#00A8E8] to-[#1aa3dd] text-white px-8 py-8 text-center rounded-t-2xl">
                <div className="text-4xl mb-2">{cat.icon}</div>
                <h3 className="text-lg font-bold mb-1">{cat.title}</h3>
                <div className="text-sm opacity-90">{cat.flow}</div>
              </div>
              {/* Card Body */}
              <div className="px-8 py-8">
                <div className="flex items-center justify-between mb-6 p-4 bg-[#f6f8fa] rounded-lg">
                  <span className="font-semibold text-gray-700">
                    Water Savings
                  </span>
                  <span className="text-xl font-extrabold text-[#73c167]">
                    {cat.savings}
                  </span>
                </div>
                <ul className="mb-6 list-none">
                  {cat.features.map((f) => (
                    <li key={f} className="pl-6 py-2 relative text-gray-700">
                      <span className="absolute left-0 text-[#73c167] font-bold">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Custom keyframes for fadeInUp */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
        `}
      </style>
    </section>
  );
}

export default WSol;

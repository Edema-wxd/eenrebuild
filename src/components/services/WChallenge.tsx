"use client";

import React from "react";
import { GiWaterDrop, GiElectric, GiCapitol } from "react-icons/gi";

const problems = [
  {
    icon: <GiWaterDrop className="text-7xl text-[#1aa3dd]" />,
    title: "Water Scarcity",
    stat: "60%",
    desc: "of Nigerians lack access to clean water",
  },
  {
    icon: <GiElectric className="text-7xl text-[#1aa3dd]" />,
    title: "Pumping Costs",
    stat: "₦150k+",
    desc: "Monthly pumping costs for average commercial building",
  },
  {
    icon: <GiCapitol className="text-7xl text-[#1aa3dd]" />,
    title: "Building Efficiency",
    stat: "70%",
    desc: "Potential water savings with proper flow management",
  },
];

function WChallenge() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-700">
            The Water Challenge in Nigeria
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            With increasing water scarcity and rising pumping costs, efficient
            water management is no longer optional&apos;s essential for
            sustainable development.
          </p>
        </div>
        {/* Problem Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="bg-gradient-to-br from-[#00a8e80d] to-[#1aa3dd0d] rounded-2xl p-10 text-center shadow-sm animate-fadeInUp"
              style={{
                animationDelay: `${0.1 + i * 0.15}s`,
                animationFillMode: "both",
              }}
            >
              <div className="w-fit h-fit p-4  bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-700">
                {p.title}
              </h3>
              <div className="text-3xl font-extrabold text-[#00A8E8] mb-1">
                {p.stat}
              </div>
              <p className="text-gray-600">{p.desc}</p>
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

export default WChallenge;

"use client";

import React, { useEffect, useState } from "react";

const challenges = [
  {
    icon: "⚡",
    title: "Grid Instability",
    stat: "4-8 hrs",
    desc: "Average daily power supply in many areas",
  },
  {
    icon: "⛽",
    title: "Fuel Costs",
    stat: "₦850+",
    desc: "Per liter of diesel, increasing monthly",
  },
  {
    icon: "🏭",
    title: "Carbon Emissions",
    stat: "2.5 tons",
    desc: "CO2 per year from average generator use",
  },
];

export default function SolarChallenge() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with staggered animations */}
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-gray-700 animate-slideInUp transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Nigeria&apos;s Power Challenge
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fadeIn transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            With unreliable grid supply and rising fuel costs, solar power is no
            longer a luxury it&apos;s a necessity for homes and businesses.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {challenges.map((c, i) => (
            <div
              key={c.title}
              className={`bg-gradient-to-br from-orange-100/20 to-yellow-100/20 rounded-2xl p-6 sm:p-8 lg:p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fadeInUp group cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                animationDelay: `${0.6 + i * 0.2}s`,
                animationFillMode: "both",
              }}
            >
              {/* Icon with enhanced animation */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-2xl sm:text-3xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 animate-bounceIn">
                {c.icon}
              </div>

              {/* Title with slide-in animation */}
              <h3
                className={`text-base sm:text-lg font-bold mb-2 text-gray-700 animate-slideInUp transition-all duration-700 delay-${
                  0.8 + i * 0.1
                }s ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {c.title}
              </h3>

              {/* Stat with scale animation */}
              <div
                className={`text-2xl sm:text-3xl font-extrabold text-[#FFA500] mb-1 group-hover:scale-110 transition-transform duration-300 animate-scaleIn ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                {c.stat}
              </div>

              {/* Description with fade-in */}
              <p
                className={`text-sm sm:text-base text-gray-600 animate-fadeIn transition-all duration-700 delay-${
                  1 + i * 0.1
                }s ${isVisible ? "opacity-100" : "opacity-0"}`}
              >
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div
          className={`mt-12 sm:mt-16 text-center animate-slideInUp transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-6 py-3 rounded-full shadow-lg">
            <span className="text-orange-600 font-semibold"></span>
            <span className="text-sm sm:text-base text-gray-700 font-medium">
              Solar power provides a sustainable solution to these challenges
            </span>
          </div>
        </div>
      </div>

      {/* Custom CSS for enhanced animations */}
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

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
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
        }
      `}</style>
    </section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import {
  GiMagnifyingGlass,
  GiCheckMark,
  GiPencilRuler,
  GiTruck,
  GiSpanner,
  GiAlarmClock,
} from "react-icons/gi";

const steps = [
  {
    icon: <GiMagnifyingGlass className="text-5xl text-[#1aa3dd]" />,
    title: "Site Assessment",
    duration: "Day 1",
  },
  {
    icon: <GiPencilRuler className="text-5xl text-[#1aa3dd]" />,
    title: "System Design",
    duration: "Days 2-3",
  },
  {
    icon: <GiTruck className="text-5xl text-[#1aa3dd]" />,
    title: "Equipment Delivery",
    duration: "Day 5",
  },
  {
    icon: <GiSpanner className="text-5xl text-[#1aa3dd]" />,
    title: "Installation",
    duration: "Days 6-8",
  },
  {
    icon: <GiCheckMark className="text-5xl text-[#1aa3dd]" />,
    title: "Commissioning",
    duration: "Day 9",
  },
];

export default function SolarProcess() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-100/20 to-orange-100/20">
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
            Professional Installation Process
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fadeIn transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            From assessment to commissioning, our certified team ensures a
            smooth installation experience.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mt-8">
          {/* Timeline connector - responsive */}
          <div className="hidden lg:block absolute top-10 left-[10%] w-[80%] h-1 bg-gradient-to-r from-[#FFA500] to-[#FFD700] z-0 animate-slideInLeft" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`text-center relative z-10 group cursor-pointer transition-all duration-500 hover:-translate-y-2 animate-fadeInUp ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                animationDelay: `${0.6 + i * 0.15}s`,
                animationFillMode: "both",
              }}
            >
              {/* Step Icon with enhanced animation */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-4 border-[#f5f5f5] rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300   group-hover:text-white group-hover:border-transparent group-hover:scale-110 shadow-lg animate-bounceIn">
                <span className="text-xl sm:text-2xl group-hover:animate-pulse">
                  {step.icon}
                </span>
              </div>

              {/* Step Title with slide-in animation */}
              <h3
                className={`font-bold mb-1 text-gray-700 animate-slideInUp transition-all duration-700 delay-${
                  0.8 + i * 0.1
                }s ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {step.title}
              </h3>

              {/* Duration with scale animation */}
              <div
                className={`text-xs sm:text-sm   font-semibold animate-scaleIn transition-all duration-700 delay-${
                  1 + i * 0.1
                }s ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                {step.duration}
              </div>
            </div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div
          className={`mt-12 sm:mt-16 text-center animate-slideInUp transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 px-6 py-3 rounded-full shadow-lg">
            <span className="text-orange-600 font-semibold">
              <GiAlarmClock className="text-2xl" />
            </span>
            <span className="text-sm sm:text-base text-gray-700 font-medium">
              Complete installation in just 9 days
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

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
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
        }

        /* Responsive timeline adjustments */
        @media (max-width: 1024px) {
          .grid-cols-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .grid-cols-5 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }

        /* Responsive text sizing */
        @media (max-width: 640px) {
          .text-xl {
            font-size: 1.25rem;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

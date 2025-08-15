"use client";

import React, { useEffect, useState } from "react";
import { GiMoneyStack, GiElectric, GiChart, GiWorld } from "react-icons/gi";

const benefits = [
  {
    icon: <GiMoneyStack className="text-7xl bg-none text-[#1aa3dd]" />,
    title: "Immediate Cost Savings",
    desc: "Eliminate generator fuel costs and reduce electricity bills by up to 95% from day one.",
  },
  {
    icon: <GiElectric className="text-7xl text-[#1aa3dd]" />,
    title: "Silent Operation",
    desc: "Enjoy peaceful, noise-free power generation unlike traditional generators.",
  },
  {
    icon: <GiWorld className="text-7xl text-[#1aa3dd]" />,
    title: "Environmental Impact",
    desc: "Reduce carbon footprint by 2.5 tons annually while contributing to a cleaner Nigeria.",
  },
  {
    icon: <GiChart className="text-7xl text-[#1aa3dd]" />,
    title: "Property Value Increase",
    desc: "Solar installations increase property value by 15-20% on average.",
  },
];

export default function SolarBenefits() {
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
            The Solar Advantage
          </h2>
          <p
            className={`text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fadeIn transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Investing in solar power transforms your energy costs into long-term
            savings and independence.
          </p>
        </div>

        {/* Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-8 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Savings Calculator Card */}
          <div
            className={`flex justify-center animate-slideInLeft transition-all duration-700 delay-800 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-gradient-to-br from-[#FFA500] to-[#FFD700] p-6 sm:p-8 rounded-2xl text-white shadow-2xl w-full max-w-md hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-bold mb-6 text-center animate-slideInUp">
                Typical Monthly Savings
              </h3>
              <div className="space-y-4">
                <div
                  className="flex justify-between items-center py-2 border-b border-white/20 animate-fadeIn"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="font-medium text-sm sm:text-base">
                    Generator Fuel
                  </span>
                  <span className="font-bold text-lg sm:text-xl">₦60,000</span>
                </div>
                <div
                  className="flex justify-between items-center py-2 border-b border-white/20 animate-fadeIn"
                  style={{ animationDelay: "1.1s" }}
                >
                  <span className="font-medium text-sm sm:text-base">
                    Maintenance
                  </span>
                  <span className="font-bold text-lg sm:text-xl">₦15,000</span>
                </div>
                <div
                  className="flex justify-between items-center py-2 border-b border-white/20 animate-fadeIn"
                  style={{ animationDelay: "1.2s" }}
                >
                  <span className="font-medium text-sm sm:text-base">
                    Grid Bills
                  </span>
                  <span className="font-bold text-lg sm:text-xl">₦25,000</span>
                </div>
                <div
                  className="pt-4 text-center animate-scaleIn"
                  style={{ animationDelay: "1.3s" }}
                >
                  <div className="text-xl sm:text-2xl font-bold">
                    Total Savings: ₦100,000/month
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-8">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`flex rounded items-start gap-4 group animate-fadeInUp transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${0.8 + i * 0.15}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="w-10 h-10 m-0.5 sm:w-12 sm:h-12  rounded-lg flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-all duration-300 animate-bounceIn">
                  {b.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-gray-700 animate-slideInUp">
                    {b.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 animate-fadeIn">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
        .group:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.12);
        }
        @media (max-width: 640px) {
          .text-base {
            font-size: 1rem;
          }
          .text-lg {
            font-size: 1.125rem;
          }
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

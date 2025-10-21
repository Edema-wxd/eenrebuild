"use client";
import React, { useEffect, useState } from "react";

import { GiBarbedSun } from "react-icons/gi";

export default function SolarHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-yellow-100/20 to-orange-100/20">
      {/* Enhanced decorative radial background with animation */}
      <div
        className="absolute right-[-5%] top-[20%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full pointer-events-none animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Additional floating elements */}
      <div
        className="absolute left-[10%] top-[60%] w-4 h-4 bg-yellow-300/40 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute right-[20%] top-[30%] w-3 h-3 bg-orange-300/40 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute left-[30%] top-[20%] w-2 h-2 bg-yellow-400/40 rounded-full animate-bounce"
        style={{ animationDelay: "3s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          {/* Content Section */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge with entrance animation */}
            <div
              className={`inline-block bg-[#FFA500] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-slideInLeft transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              24/7 Reliable Power
            </div>

            {/* Heading with staggered animation */}
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 leading-tight animate-slideInUp transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Harness the Power of the{" "}
              <span className="bg-gradient-to-r from-[#FFA500] to-[#FFD700] bg-clip-text text-transparent animate-gradient">
                Nigerian Sun
              </span>
            </h1>

            {/* Description with fade-in */}
            <p
              className={`text-base sm:text-lg text-gray-600 mb-8 max-w-xl animate-fadeIn transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Professional solar installations with premium components and up to
              5-year warranty, giving you energy independence and massive
              savings.
            </p>

            {/* Buttons with staggered animation */}
            <div
              className={`flex flex-col sm:flex-row flex-wrap gap-4 mb-8 animate-slideInUp transition-all duration-700 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* <a
                href="#packages"
                className="bg-[#1AA3DD] text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#73C167] hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
              >
                View Solar Packages
              </a>
              <a
                href="#calculator"
                className="border-2 border-[#FFA500] text-[#FFA500] font-semibold px-6 sm:px-8 py-3 rounded-full hover:bg-[#FFA500] hover:text-white transform hover:scale-105 transition-all duration-300 text-center"
              >
                Calculate Your Savings
              </a> */}
            </div>

            {/* Stats with staggered animation */}
            <div
              className={`flex flex-col sm:flex-row gap-6 sm:gap-8 animate-slideInUp transition-all duration-700 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col items-center sm:items-start group">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FFA500] mb-1 group-hover:scale-110 transition-transform duration-300">
                  45%
                </div>
                <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                  Nigerians with Grid Access
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start group">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FFA500] mb-1 group-hover:scale-110 transition-transform duration-300">
                  ₦900K+
                </div>
                <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                  Monthly Generator Costs
                </div>
              </div>
              <div className="flex flex-col items-center sm:items-start group">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#FFA500] mb-1 group-hover:scale-110 transition-transform duration-300">
                  95%
                </div>
                <div className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                  Energy Independence
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div
            className={`flex justify-center items-center animate-slideInRight transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Enhanced animated energy rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border-2 border-yellow-300/30 rounded-full animate-pulse" />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-2 border-yellow-300/30 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border-2 border-yellow-300/30 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />

              {/* Sun icon with enhanced animation */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-2xl animate-float hover:scale-110 transition-transform duration-300 cursor-pointer ">
                <GiBarbedSun className="text-[120px]  text-orange-500 rounded-full bg-transparent" />
              </div>

              {/* Additional floating particles */}
              <div
                className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/60 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-orange-400/60 rounded-full animate-bounce"
                style={{ animationDelay: "1.5s" }}
              />
              <div
                className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-300/60 rounded-full animate-bounce"
                style={{ animationDelay: "2.5s" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

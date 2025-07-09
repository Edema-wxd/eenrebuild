"use client";

import Link from "next/link";
import React from "react";

function EHero() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-green-100/20 to-blue-100/20"
      aria-label="EDGE Certification Hero"
    >
      {/* Decorative radial background */}
      <div
        className="pointer-events-none absolute top-[20%] right-[-20vw] w-[80vw] max-w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 md:gap-16 items-center relative z-10">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col items-start animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 shadow">
            <span aria-hidden>🏆</span>
            <span>Certified EDGE Experts</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-gray-800">
            Transform Your Building with{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 text-transparent bg-clip-text">
              EDGE Certification
            </span>
          </h1>
          <p className="text-base sm:text-lg mb-8 text-gray-800">
            The world&apos;s fastest and most affordable green building
            certification designed specifically for emerging markets. Achieve
            20%+ savings in energy, water, and materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-xs sm:max-w-none">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto text-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-base shadow hover:bg-blue-600 focus:bg-blue-600 transition-colors duration-300 outline-none"
            >
              Start Your EDGE Journey
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto text-center bg-transparent text-green-600 px-6 py-3 rounded-full font-semibold text-base border-2 border-green-600 hover:bg-green-600 hover:text-white focus:bg-green-600 focus:text-white transition-all duration-300 outline-none"
            >
              Calculate Savings
            </Link>
          </div>
        </div>
        {/* Right: Visual */}
        <div className="flex-1 flex items-center justify-center min-h-[300px] animate-fade-in-slow w-full">
          <div className="relative w-[90vw] max-w-[350px] sm:max-w-[400px] aspect-square flex items-center justify-center">
            {/* Animated efficiency rings */}
            <div className="absolute border-2 border-green-300 rounded-full animate-[pulse-ring_3s_ease-in-out_infinite] w-[62%] h-[62%] left-[19%] top-[19%] [animation-delay:0s]" />
            <div className="absolute border-2 border-green-300 rounded-full animate-[pulse-ring_3s_ease-in-out_infinite] w-[80%] h-[80%] left-[10%] top-[10%] [animation-delay:1s]" />
            <div className="absolute border-2 border-green-300 rounded-full animate-[pulse-ring_3s_ease-in-out_infinite] w-[98%] h-[98%] left-[1%] top-[1%] [animation-delay:2s]" />
            {/* Building icon */}
            <div className="w-[120px] sm:w-[160px] md:w-[200px] h-[120px] sm:h-[160px] md:h-[200px] rounded-2xl flex items-center justify-center text-5xl sm:text-6xl md:text-7xl text-white relative z-10 shadow-xl bg-gradient-to-br from-green-600 to-blue-600">
              🏢
            </div>
            {/* Efficiency metrics */}
            <div className="absolute top-2 right-2 sm:top-5 sm:right-5 bg-white/90 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow font-bold text-xs sm:text-base text-green-600">
              20% Energy
            </div>
            <div className="absolute bottom-2 left-2 sm:bottom-5 sm:left-5 bg-white/90 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow font-bold text-xs sm:text-base text-blue-600">
              20% Water
            </div>
            <div className="absolute bottom-2 right-2 sm:bottom-5 sm:right-5 bg-white/90 px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow font-bold text-xs sm:text-base text-green-400">
              20% Materials
            </div>
          </div>
        </div>
      </div>
      {/* Tailwind custom keyframes for pulse-ring and fade-in */}
      <style>
        {`
        @layer utilities {
          @keyframes pulse-ring {
            0%,100% { transform: scale(1); opacity: 0; }
            50% { transform: scale(1.1); opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) both;
          }
          .animate-fade-in-slow {
            animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(24px);}
            to { opacity: 1; transform: none;}
          }
        }
        `}
      </style>
    </section>
  );
}

export default EHero;

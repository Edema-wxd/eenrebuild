"use client";

import React from "react";

export default function MeteringHero() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#6B46C10d] to-[#0066CC0d]">
      <div
        className="absolute left-[-5%] top-[30%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(107,70,193,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="hidden bg-[#6B46C1] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Solid Green Technology Partner
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
            Take Control with{" "}
            <span className="bg-gradient-to-r from-[#6B46C1] to-[#0066CC] bg-clip-text text-transparent">
              Smart Energy Monitoring
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Real-time visibility into your electrical consumption, enabling
            data-driven decisions that reduce costs and optimize energy usage.
          </p>
          <div className="hidden  gap-4 mb-8">
            <a
              href="#demo"
              className="bg-[#1AA3DD] text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-[#73C167] transition"
            >
              Request Live Demo
            </a>
            <a
              href="#features"
              className="border-2 border-[#6B46C1] text-[#6B46C1] font-semibold px-8 py-3 rounded-full hover:bg-[#6B46C1] hover:text-white transition"
            >
              Explore Features
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div className="font-bold text-gray-700">Energy Dashboard</div>
              <div className="flex items-center gap-2 text-[#73C167] text-sm">
                <span className="w-2 h-2 rounded-full bg-[#73C167] animate-pulse" />
                Live
              </div>
            </div>
            <div className="text-center mb-6">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-[#6B46C1] to-[#0066CC] bg-clip-text text-transparent mb-1">
                15.7
              </div>
              <div className="text-gray-500 font-medium">kW Current Usage</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#f5f5f5] rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-[#6B46C1]">₦2,450</div>
                <div className="text-xs text-gray-500 mt-1">Today&apos;s Cost</div>
              </div>
              <div className="bg-[#f5f5f5] rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-[#6B46C1]">-23%</div>
                <div className="text-xs text-gray-500 mt-1">vs Yesterday</div>
              </div>
              <div className="bg-[#f5f5f5] rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-[#6B46C1]">432</div>
                <div className="text-xs text-gray-500 mt-1">kWh Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

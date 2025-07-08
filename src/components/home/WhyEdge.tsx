"use client";

import React, { useState } from "react";
import Image from "next/image";

const processSteps = [
  {
    label: "Design",
    img: "/step-design.png", // Place your image in /public
    alt: "Design Step",
  },
  {
    label: "Audit",
    img: "/step-audit.png",
    alt: "Audit Step",
  },
  {
    label: "Certify",
    img: "/step-certify.png",
    alt: "Certify Step",
  },
];

const features = [
  {
    title: "Fast & Affordable",
    desc: "Streamlined certification process at a fraction of the cost of other green standards.",
  },
  {
    title: "Proven ROI",
    desc: "Increased property values and significantly lower utility bills from day one.",
  },
  {
    title: "ESG Compliance",
    desc: "Meet international sustainability standards and attract ESG-conscious investors.",
  },
];

export default function WhyEdge() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-br from-[#f8fcfa] via-[#f8fcfa] to-[#e6f6f2] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Text */}
        <div className="flex-1 min-w-[320px]">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Why EDGE <br /> Certification?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            EDGE (Excellence in Design for Greater Efficiencies) is the green
            building certification designed specifically for emerging markets.
            As certified EDGE experts, we guide you through the entire process.
          </p>
          <ul className="space-y-6">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1">
                  <svg width="32" height="32" fill="none">
                    <rect width="32" height="32" rx="10" fill="#4ECB71" />
                    <path
                      d="M11 17l3 3 7-7"
                      stroke="#fff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <span className="block font-bold text-gray-800 text-lg">
                    {f.title}
                  </span>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Process Card */}
        <div className="flex-1 min-w-[320px] mx-auto my-auto flex justify-center">
          <div className="bg-white rounded-3xl shadow-xl px-8 py-10 w-full max-w-md text-center relative">
            <h3 className="text-xl font-bold text-gray-800 mb-8">
              EDGE Certification Process
            </h3>
            <div className="flex items-center justify-between relative">
              {processSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div className="relative flex flex-col items-center group">
                    <button
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl transition-all duration-200
                        ${
                          hovered === idx
                            ? "bg-green-400 text-white scale-110 shadow-lg"
                            : "bg-gray-100 text-gray-800"
                        }
                      `}
                      onMouseEnter={() => setHovered(idx)}
                      onMouseLeave={() => setHovered(null)}
                      aria-label={step.label}
                      tabIndex={0}
                    >
                      {idx + 1}
                    </button>
                    <span className="mt-2 text-gray-700 font-medium text-base">
                      {step.label}
                    </span>
                    {/* Animated image on hover */}
                    <div
                      className={`absolute -top-28 left-1/2 -translate-x-1/2 transition-all duration-300
                        ${
                          hovered === idx
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95 pointer-events-none"
                        }
                        z-20`}
                    >
                      <div className="bg-white rounded-xl shadow-lg p-2">
                        <Image
                          src={step.img}
                          alt={step.alt}
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <span className="w-8 h-1 bg-gray-200 mx-2 rounded-full" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

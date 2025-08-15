"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    label: "Design",
    alt: "Design Step",
  },
  {
    label: "Audit",
    alt: "Audit Step",
  },
  {
    label: "Certify",
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
    <motion.section
      className="bg-gradient-to-br from-[#f8fcfa] via-[#f8fcfa] to-[#e6f6f2] py-12 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Text */}
        <motion.div
          className="flex-1 min-w-[320px]"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Why EDGE <br /> Certification?
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mb-8 max-w-xl"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            EDGE (Excellence in Design for Greater Efficiencies) is the green
            building certification designed specifically for emerging markets.
            As certified EDGE experts, we guide you through the entire process.
          </motion.p>
          <motion.ul
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {features.map((f, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-4"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="flex-shrink-0 mt-1"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.span>
                <div>
                  <span className="block font-bold text-gray-800 text-lg">
                    {f.title}
                  </span>
                  <p className="text-gray-600">{f.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        {/* Right: Process Card */}
        <motion.div
          className="flex-1 min-w-[320px] mx-auto my-auto flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-xl px-8 py-10 w-full max-w-md text-center relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-xl font-bold text-gray-800 mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              EDGE Certification Process
            </motion.h3>
            <div className="flex items-center justify-between relative">
              {processSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <motion.div
                    className="relative flex flex-col items-center group"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
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
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {idx + 1}
                    </motion.button>
                    <motion.span
                      className="mt-2 text-gray-700 font-medium text-base"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {step.label}
                    </motion.span>
                    {/* Animated image on hover */}
                    <motion.div
                      className={`absolute -top-28 left-1/2 -translate-x-1/2 z-20`}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{
                        opacity: hovered === idx ? 1 : 0,
                        scale: hovered === idx ? 1 : 0.8,
                        y: hovered === idx ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </motion.div>
                  {idx < processSteps.length - 1 && (
                    <motion.span
                      className="w-8 h-1 bg-gray-200 mx-2 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                      viewport={{ once: true }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

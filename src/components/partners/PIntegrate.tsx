"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeSlideStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

function PIntegrate() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-12 md:py-20 px-4 sm:px-8 bg-white"
      aria-labelledby="ecosystem-title"
    >
      <motion.div
        className="max-w-xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeSlideStagger}
      >
        <motion.h2
          id="ecosystem-title"
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2"
          custom={0}
        >
          Integrated Solutions Ecosystem
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base sm:text-lg mb-6"
          custom={1}
        >
          Our partnerships create a comprehensive sustainability ecosystem that
          addresses every aspect of green building.
        </motion.p>
        <motion.h3 className="text-2xl sm:text-3xl font-bold mb-2" custom={2}>
          Creating{" "}
          <span className="bg-gradient-to-r from-[#1e90ff] to-[#7ed957] text-transparent bg-clip-text">
            Synergy
          </span>{" "}
          Through Collaboration
        </motion.h3>
        <motion.ul className="mb-6 space-y-4" variants={fadeSlideStagger}>
          <motion.li
            className="flex items-start gap-2 text-gray-700"
            custom={3}
          >
            <span className="text-green-500 mt-1">✔</span>
            <span>
              <span className="font-bold text-[#1e90ff]">Neoperl + EDGE:</span>{" "}
              Water-saving products contribute directly to EDGE certification
              points
            </span>
          </motion.li>
          <motion.li
            className="flex items-start gap-2 text-gray-700"
            custom={4}
          >
            <span className="text-green-500 mt-1">✔</span>
            <span>
              <span className="font-bold text-[#7ed957]">
                Smart Metering + Solar:
              </span>{" "}
              Monitor and optimize renewable energy generation and consumption
            </span>
          </motion.li>
          <motion.li
            className="flex items-start gap-2 text-gray-700"
            custom={5}
          >
            <span className="text-green-500 mt-1">✔</span>
            <span>
              <span className="font-bold text-[#1e90ff]">EDGE + BEEC:</span>{" "}
              International certification ensures Nigerian code compliance
            </span>
          </motion.li>
          <motion.li
            className="flex items-start gap-2 text-gray-700"
            custom={6}
          >
            <span className="text-green-500 mt-1">✔</span>
            <span>
              <span className="font-bold text-gray-800">All Partners:</span>{" "}
              Combined expertise delivers turnkey sustainability transformations
            </span>
          </motion.li>
        </motion.ul>
        <motion.p className="text-gray-600 text-base" custom={7}>
          This integrated approach ensures our clients receive holistic
          solutions that maximize efficiency, savings, and environmental impact.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default PIntegrate;

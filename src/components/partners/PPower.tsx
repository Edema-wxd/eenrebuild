"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GiWorld,
  GiWrench,
  GiLightBulb,
  GiShakingHands,
  GiTrophy,
  GiChart,
} from "react-icons/gi";

const pfeatures = [
  {
    icon: <GiWorld className="text-4xl text-[#1aa3dd]" />,
    title: "Global Standards",
    description:
      "Access internationally recognized certifications and technologies that meet global sustainability benchmarks while addressing local needs.",
  },
  {
    icon: <GiWrench className="text-4xl text-[#1aa3dd]" />,
    title: "Technical Excellence",
    description:
      "Leverage world-class engineering and technical expertise from partners with decades of innovation in their respective fields.",
  },
  {
    icon: <GiLightBulb className="text-4xl text-[#1aa3dd]" />,
    title: "Local Implementation",
    description:
      "International solutions adapted for Nigerian conditions, ensuring practical and effective sustainability outcomes.",
  },
  {
    icon: <GiShakingHands className="text-4xl text-[#1aa3dd]" />,
    title: "Continuous Support",
    description:
      "Ongoing training, technical assistance, and knowledge transfer from our partners keeps us at the forefront of sustainability.",
  },
  {
    icon: <GiTrophy className="text-4xl text-[#1aa3dd]" />,
    title: "Market Leadership",
    description:
      "Exclusive partnerships position EEN as Nigeria's sustainability consultant with unique access to premium solutions.",
  },
  {
    icon: <GiChart  className="text-4xl text-[#1aa3dd]" />,
    title: "Proven Success",
    description:
      "Our partners' global track records translate into guaranteed results for Nigerian projects, backed by international warranties.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

function PPower() {
  return (
    <motion.div
      className="w-full bg-gradient-to-br from-sky-50 to-green-50 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex flex-col gap-8 items-center justify-center text-center min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="flex flex-col items-center gap-4 sm:gap-6 justify-center max-w-4xl mx-auto">
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 leading-tight">
          The Power of Partnership
        </motion.h1>
        <motion.p className="text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-3xl leading-relaxed">
          Our strategic alliances enable us to deliver unmatched value to
          Nigerian businesses and property developers.
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto w-full"
        variants={containerVariants}
      >
        {pfeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="flex flex-col items-center gap-3 sm:gap-4 bg-white p-4 sm:p-6 lg:p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100"
            whileHover="hover"
            custom={index}
          >
            <motion.div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white border-2 border-[#73C167] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-xl sm:text-2xl lg:text-3xl text-white shadow-lg">
              {feature.icon}
            </motion.div>
            <motion.h3
              className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 leading-tight"
              whileHover={{ color: "#1e90ff" }}
              transition={{ duration: 0.3 }}
            >
              {feature.title}
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
              whileHover={{ color: "#374151" }}
              transition={{ duration: 0.3 }}
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default PPower;

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  GiStarMedal,
  GiChart,
  GiTeamIdea,
  GiShakingHands,
} from "react-icons/gi";


// Animation variants for staggered points
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const pointVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } },
};

const visualCardVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 80, delay: 0.5 },
  },
};

const points = [
  {
    icon: <GiStarMedal className="text-7xl text-[#1aa3dd]" />,
    title: "Certified EDGE Experts",
    desc: "Our entire engineering team is EDGE certified, ensuring expert guidance through your green building journey.",
  },
  {
    icon: <GiShakingHands className="text-7xl text-[#1aa3dd]" />,
    title: "Exclusive Partnerships",
    desc: "As West Africa's exclusive Neoperl distributor, we bring world-class German engineering to Nigeria.",
  },
  {
    icon: <GiChart   className="text-7xl text-[#1aa3dd]" />,
    title: "Proven ROI",
    desc: "Our solutions typically pay for themselves within 18-24 months through reduced utility costs.",
  },
  {
    icon: <GiTeamIdea className="text-7xl text-[#1aa3dd]" />,
    title: "End-to-End Service",
    desc: "From initial consultation to ongoing maintenance, we handle every aspect of your sustainability transformation.",
  },
];

function SChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-8">
          {/* Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className=""
          >
            <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-gray-700">
              Why Choose EEN Consulting?
            </h3>
            <div className="flex flex-col gap-6">
              {points.map((point) => (
                <motion.div
                  key={point.title}
                  variants={pointVariant as Variants}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl bg-gradient-to-br from-[#73c1671a] to-[#1aa3dd1a] flex-shrink-0">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold mb-1 text-gray-700">
                      {point.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            className="flex justify-center items-center relative"
            variants={visualCardVariant as Variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-[#1aa3dd] to-[#73c167] rounded-2xl px-10 py-16 text-white text-center shadow-2xl overflow-hidden"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              {/* Animated radial overlay */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)",
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <h3 className="relative text-5xl font-extrabold mb-2 z-10">
                10+
              </h3>
              <p className="relative text-lg z-10">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SChoose;

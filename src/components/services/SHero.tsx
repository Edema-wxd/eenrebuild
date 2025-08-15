"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSolarPanel } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
  import { GiWaterDrop } from "react-icons/gi";


const stats = [
  { icon: <GiWaterDrop className="text-7xl text-[#1aa3dd]" />, number: "70%", label: "Water Savings" },
  { icon: <FaSolarPanel className="text-7xl text-[#4ECB71]" />, number: "50%", label: "Energy Reduction" },
  { icon: <GiMoneyStack className="text-7xl text-[#1aa3dd]" />, number: "30%", label: "Cost Savings" },

];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

 

function SHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-br from-[#1aa3dd0d] to-[#73c1670d] text-center">
      {/* Decorative background circles */}
      <div className="pointer-events-none absolute -top-1/2 -left-1/12 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(26,163,221,0.1)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-1/2 -right-1/12 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(115,193,103,0.1)_0%,transparent_70%)]" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-700">
          Comprehensive{" "}
          <span className="bg-gradient-to-r from-[#1aa3dd] to-[#73c167] bg-clip-text text-transparent">
            Green Solutions
          </span>{" "}
          for Nigerian Buildings
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-12">
          From water conservation to renewable energy, we provide end-to-end
          sustainability solutions that reduce costs and environmental impact.
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="  px-8 py-6 min-w-[120px] flex flex-col items-center"
            >
              <div className="text-3xl p-4 shadow-md bg-white rounded-full mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-[#1aa3dd]">
                {stat.number}
              </div>
              <div className="text-gray-700 text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SHero;

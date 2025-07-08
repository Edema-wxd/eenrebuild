"use client";
import React from "react";
import { motion } from "framer-motion";

function Mission() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center w-full py-8 sm:py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-full max-w-3xl mx-auto space-y-8 flex flex-row gap-10">
        {/* Mission Card */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {/* Gradient Bar */}
          <div
            className="w-full h-[5px] rounded-t-[20px] mb-0"
            style={{
              background:
                "linear-gradient(90deg, var(--battery-blue, #1aa3dd) 0%, var(--mantis-green, #4ECB71) 100%)",
            }}
          />
          {/* Mission Card */}
          <motion.article
            className="w-full flex flex-col items-center justify-center p-6 sm:p-8 bg-[#f8fafc] rounded-b-[20px] rounded-t-none shadow-md transition-shadow hover:shadow-lg focus-within:shadow-lg bg-white/60 backdrop-blur-sm"
            tabIndex={0}
            aria-label="Our Mission"
          >
            <span className="text-3xl mb-2" role="img" aria-label="Mission">
              🎯
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1aa3dd] mb-3">
              Our Mission
            </h2>
            <p className="text-[#606163] text-base sm:text-lg text-center">
              To provide world-class consulting and implementation of energy
              efficiency interventions for the Nigerian Market, making
              sustainable development accessible and achievable for all.
            </p>
          </motion.article>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Gradient Bar */}
          <div
            className="w-full h-[5px] rounded-t-[20px] mb-0"
            style={{
              background:
                "linear-gradient(90deg, var(--battery-blue, #1aa3dd) 0%, var(--mantis-green, #4ECB71) 100%)",
            }}
          />
          {/* Vision Card */}
          <motion.article
            className="w-full flex flex-col items-center justify-center p-6 sm:p-8 bg-[#f8fafc] rounded-b-[20px] rounded-t-none shadow-md transition-shadow hover:shadow-lg focus-within:shadow-lg bg-white/60 backdrop-blur-sm"
            tabIndex={0}
            aria-label="Our Vision"
          >
            <span className="text-3xl mb-2" role="img" aria-label="Vision">
              🌟
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#4ECB71] mb-3">
              Our Vision
            </h2>
            <p className="text-[#606163] text-base sm:text-lg text-center">
              To ensure that energy is efficiently implemented and used in the
              Nigerian market while boosting economic growth and creating a
              sustainable future for generations to come.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Mission;

"use client";
import React from "react";
import { motion } from "framer-motion";

// Utility for gradient text
const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
    {children}
  </span>
);

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "50M+", label: "Liters Water Saved" },
  { value: "30%", label: "Average Energy Reduction" },
];

function Building() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Building a <GradientText>Sustainable Future</GradientText> for
            Nigeria
          </h2>
          <p className="text-gray-700 mb-4">
            EEN Consulting is a young and vibrant energy consulting and
            implementation company whose partners have vast experience in the
            built environment, supply chain, project management, and medical
            fields.
          </p>
          <p className="text-gray-700 mb-4">
            We are passionate about driving sustainability in the Nigerian built
            environment. We believe that for the future to thrive, living life
            needs to be sustainable, and sustainability should start in our
            homes, our offices, our schools, and our hospitals.
          </p>
          <blockquote className="bg-white border-l-4 border-green-400 shadow-md p-4 mb-4 italic text-gray-800">
            &quot;If we build sustainably, then we begin to live sustainably,
            and we give the future a chance.&quot;
          </blockquote>
          <p className="text-gray-700">
            As West Africa&apos;s exclusive distributor of Neoperl products and
            certified EDGE experts, we bring international best practices and
            cutting-edge solutions to the Nigerian market, ensuring our clients
            achieve their sustainability goals efficiently and cost-effectively.
          </p>
        </motion.div>

        {/* Right: Stats Card */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-500 to-green-400 rounded-2xl shadow-xl p-8 w-full max-w-sm flex flex-col items-center">
            <div className="text-white text-2xl md:text-3xl font-bold mb-2 text-center">
              10+ Years
            </div>
            <div className="text-white text-lg mb-6 text-center opacity-80">
              of Excellence
            </div>
            <div className="bg-white rounded-xl shadow-md flex justify-between w-full px-4 py-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center mx-2"
                >
                  <span className="text-blue-600 font-bold text-xl">
                    {stat.value}
                  </span>
                  <span className="text-gray-600 text-xs text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Building;

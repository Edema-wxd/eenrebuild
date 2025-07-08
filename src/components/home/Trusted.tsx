"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  {
    name: "NEOPERL",
    logo: "/logos/neoperl-logo.svg",
    alt: "Neoperl Logo",
  },
  {
    name: "IFC | World Bank",
    logo: "/logos/ifc.png", // Replace with correct logo if available
    alt: "IFC | World Bank Logo",
  },
  {
    name: "SOLID GREEN",
    logo: "/logos/solid-green-logo.svg",
    alt: "Solid Green Logo",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Trusted() {
  return (
    <section className="w-full py-12 bg-white flex flex-col items-center">
      <h2 className="text-center text-gray-600 tracking-widest font-semibold mb-8 text-sm md:text-base">
        TRUSTED PARTNERS
      </h2>
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-10 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {partners.map((partner) => (
          <motion.div
            key={partner.name}
            className="flex flex-col items-center group cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={partner.logo}
              alt={partner.alt}
              className="h-12 w-auto mb-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              unoptimized={true}
              width={100}
              height={100}
            />
            <span className="text-lg font-bold text-gray-400 group-hover:text-gray-700 transition-colors duration-300">
              {partner.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Trusted;

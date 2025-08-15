"use client";

import React from "react";
import { motion } from "framer-motion";

import { FaPhone, FaEnvelope } from "react-icons/fa";

const leaders = [
  {
    initials: "UG",
    image: "/images/unoma.jpg",
    name: "Unoma Grant",
    title: "Co-Founder / Chief Executive Officer",
    titleColor: "text-sky-600",
    description:
      "Certified EDGE Expert with a background in Mechanical Engineering and Business Management, combining technical expertise with strategic insight to drive EEN's growth.",
    email: "unoma@eenconsult.com.ng",
    phone: "+2348094563216",
  },
  {
    initials: "OU",
    image: "/images/obinna.jpg",
    name: "Obinna Ukwa",
    title: "Co-Founder / Managing Director",
    titleColor: "text-sky-600",
    description:
      "Certified EDGE Expert in Mechanical and Civil Engineering, delivering sustainable building solutions with technical precision and passion.",
    email: "obinna@eenconsult.com.ng",
    phone: "+2348099719533",
  },

  {
    initials: "FW",
    image: "/images/francis.jpg",
    name: "Francis Woods",
    title: "Sustainablity Implementation Engineer",
    titleColor: "text-sky-600",
    description:
      "Civil Engineer and Sustainability Implementation Engineer, integrating green building strategies to meet EDGE standards and maximize project impact.",
    email: "francis@eenconsult.com.ng",
    phone: "+2348127576854",
  },
];

function Team() {
  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-gray-600 text-lg">
            Our team is passionate about Nigeria&apos;s sustainable development.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-xl bg-white overflow-hidden flex flex-col"
            >
              {/* Gradient Initials */}
              <div className="flex items-center justify-center h-40 bg-gradient-to-br from-sky-500 to-green-400">
                <span className="text-5xl font-bold text-white">
                  {leader.initials}
                </span>
              </div>
              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  {leader.name}
                </h3>
                <div className={`mb-2 font-medium ${leader.titleColor}`}>
                  {leader.title}
                </div>
                <p className="text-gray-600 mb-4">{leader.description}</p>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={`mailto:${leader.email}`}
                    className="rounded-full border border-gray-200 p-2 hover:bg-gray-100 transition"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href={`tel:${leader.phone}`}
                    className="rounded-full border border-gray-200 p-2 hover:bg-gray-100 transition"
                    aria-label="Phone"
                  >
                    <FaPhone />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;

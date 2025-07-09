"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="space-y-6">
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              >
                Building a{" "}
                <span className="text-green-600 relative">
                  Sustainable
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-600 transform scale-x-0 animate-scale-x origin-left"></span>
                </span>{" "}
                Nigeria Through{" "}
                <span className="text-blue-600">Energy Efficiency</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                West Africa&apos;s exclusive Neoperl distributor and certified
                EDGE experts, leading the transformation to green buildings and
                sustainable development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact-us"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                aria-label="Start your green journey with us"
              >
                <span className="relative z-10">Start Your Green Journey</span>
                <div className="absolute inset-0 bg-green-700 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>

              <Link
                href="/services"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-transparent text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-600 hover:text-white transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                aria-label="Calculate your energy savings"
              >
                <span className="relative z-10">Calculate Savings</span>
                <div className="absolute inset-0 bg-green-600 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className=" flex-col max-w-fit  flex text-sm text-gray-600 font-medium">
                    <span className=" text-3xl text-blue-600 font-bold">
                      +20%
                    </span>{" "}
                    Energy Savings Guaranteed
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-1000"></div>
                  <p className=" flex-col flex text-sm text-gray-600 font-medium">
                    <span className="text-2xl text-green-600 font-bold">
                      7+
                    </span>{" "}
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <div className="w-full max-w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder content */}
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl mb-4">🏗️</div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      Sustainable Building Solutions
                    </h3>
                    <p className="text-gray-600">
                      Energy-efficient technologies for a greener future
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-green-200 rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-200 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 left-4 w-8 h-8 bg-yellow-200 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">♻️</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce animation-delay-1000">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">⚡</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;

'use client'

import React from "react";
import Link from "next/link";
import NewsletterSubscribe from "../blog/NewsletterSubscribe";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-sky-400 to-green-400">
      {/* Newsletter Section */}
      <div className="border-b border-white/20 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">
              Stay Updated on Sustainability
            </h3>
            <p className="mb-6 text-white/90">
              Get expert insights on solar energy, water conservation, and green building delivered to your inbox
            </p>
            <div className="flex justify-center">
              <NewsletterSubscribe variant="inline" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white font-semibold text-lg mb-2 md:mb-0">
            EEN &copy; {new Date().getFullYear()}
          </div>
          <nav className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Blog
            </Link>
            <Link
              href="/partners"
              className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Partners
            </Link>
            <Link
              href="/contact-us"
              className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

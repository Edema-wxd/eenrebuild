import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-sky-400 to-green-400 py-6 px-4 ">
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
            href="/resources"
            className="text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            Resources
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
    </footer>
  );
}

export default Footer;

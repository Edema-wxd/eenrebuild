"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/edge-building", label: "EDGE" },
    { href: "/resources", label: "Resources" },
    { href: "/partners", label: "Partners" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 h-fit w-full items-center justify-between">
        <Link
          href="/"
          className="transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          aria-label="Go to homepage"
        >
          <Image
            unoptimized={true}
            src="/logos/een-logo.svg"
            alt="EEN Logo"
            width={120}
            height={120}
            className="w-auto h-16 lg:h-20"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-1 md:gap-2 lg:gap-4">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 relative group ${
                isActive(item.href)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              }`}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></span>
              )}
              <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-20 rounded-md transition-opacity duration-200"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop CTA Button */}
        <Link
          className="hidden sm:flex items-center justify-center"
          href="/contact-us"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2 px-4 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm sm:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl sm:hidden animate-in slide-in-from-top-2 duration-300"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col p-4 space-y-2">
              <Link
                className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive("/")
                    ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Home
              </Link>

              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  className={`px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link
                  href="/contact-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-3 px-4 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Header;

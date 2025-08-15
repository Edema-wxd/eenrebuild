import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo with pulse animation */}
        <div className="relative">
          <Image
            src="/logos/een-logo.svg"
            alt="EEN Consulting Logo"
            width={120}
            height={120}
            className="animate-pulse"
            priority
          />
        </div>

        {/* Loading text with fade animation */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Loading...
          </h2>
          <p className="text-gray-600 text-sm">
            Please wait while we prepare your experience
          </p>
        </div>

        {/* Loading dots animation */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-[#1AA3DD] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-[#73C167] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-[#606163] rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}

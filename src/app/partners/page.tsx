import React from "react";
import Image from "next/image";

export default function PartnersPage() {
  const partners = [
    {
      name: "Neoperl",
      logo: "/logos/neoperl-logo.svg",
      description:
        "Leading manufacturer of water flow control solutions and energy-efficient plumbing products.",
      category: "Water Solutions",
    },
    {
      name: "Sterling",
      logo: "/logos/sterling-logo.svg",
      description:
        "Innovative provider of smart metering and IoT solutions for energy management.",
      category: "Smart Metering",
    },
    {
      name: "Solid Green",
      logo: "/logos/solid-green-logo.svg",
      description:
        "Sustainable building materials and green construction solutions provider.",
      category: "Green Building",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders and innovative companies to
            deliver comprehensive energy efficiency solutions and sustainable
            technologies.
          </p>
        </div>

        {/* Featured Partners */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Strategic Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">
                  <div className="h-20 w-48 relative">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {partner.name}
                  </h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {partner.category}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Collaborative Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Work together to develop cutting-edge energy solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Sustainability Focus
              </h3>
              <p className="text-gray-600 text-sm">
                Shared commitment to environmental responsibility
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">📈</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Market Growth
              </h3>
              <p className="text-gray-600 text-sm">
                Access to expanding energy efficiency markets
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-600 text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600 text-sm">
                Technical expertise and industry knowledge sharing
              </p>
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Become Our Partner</h2>
          <p className="text-xl mb-6 opacity-90">
            Join our network of industry leaders and help shape the future of
            energy efficiency.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

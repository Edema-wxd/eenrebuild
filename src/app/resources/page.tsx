import React from "react";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive collection of resources, guides, and tools
            to help you make informed decisions about energy efficiency and
            sustainable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Resource Cards */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-blue-600 text-4xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Energy Calculators
            </h3>
            <p className="text-gray-600 mb-4">
              Calculate your energy consumption and potential savings with our
              interactive tools.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Explore Calculators →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-green-600 text-4xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Guides & Whitepapers
            </h3>
            <p className="text-gray-600 mb-4">
              In-depth guides and research papers on energy efficiency and
              sustainability.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View Guides →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-purple-600 text-4xl">🎥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Video Library
            </h3>
            <p className="text-gray-600 mb-4">
              Educational videos and case studies showcasing successful energy
              projects.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Watch Videos →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-yellow-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-yellow-600 text-4xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Case Studies
            </h3>
            <p className="text-gray-600 mb-4">
              Real-world examples of energy efficiency implementations and their
              results.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Read Cases →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-red-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-red-600 text-4xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Industry Reports
            </h3>
            <p className="text-gray-600 mb-4">
              Latest industry insights and market analysis for energy efficiency
              trends.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Download Reports →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-indigo-600 text-4xl">🛠️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tools & Templates
            </h3>
            <p className="text-gray-600 mb-4">
              Practical tools and templates to help you implement energy
              solutions.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Access Tools →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

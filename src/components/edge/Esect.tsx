import React from "react";

function Esect() {
  return (
    <section className="p-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-700">
            What is EDGE?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Excellence in Design for Greater Efficiencies - a green building
            certification system created by IFC, a member of the World Bank
            Group.
          </p>
        </div>

        {/* Edge Intro */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Description */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-700">
              Green Building Made Simple
            </h3>
            <p className="mb-6 text-gray-700">
              EDGE is a measurable way for builders to optimize their designs,
              leading to more investment-worthy and marketable buildings. By
              keeping certification fast and inexpensive, EDGE keeps pace with
              the momentum that developers need to stay at the forefront of the
              green building trend.
            </p>
            <p className="mb-6 text-gray-700">
              Unlike other certification systems, EDGE has been specifically
              designed for emerging markets like Nigeria, taking into account
              local challenges and providing achievable standards based on your
              national average.
            </p>

            {/* Standards */}
            <div className="flex flex-col gap-4 bg-gray-100 p-8 rounded-xl mt-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 ">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                  ⚡
                </div>
                <div>
                  <strong className="block text-gray-800">
                    20% Energy Efficiency
                  </strong>
                  <p className="text-gray-700">
                    Reduce energy consumption through smart design and efficient
                    systems
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 ">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                  💧
                </div>
                <div>
                  <strong className="block text-gray-800">
                    20% Water Efficiency
                  </strong>
                  <p className="text-gray-700">
                    Lower water usage with efficient fixtures and smart
                    management
                  </p>
                </div>
              </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl flex-shrink-0">
                  🏗️
                </div>
                <div>
                  <strong className="block text-gray-800">
                    20% Embodied Energy in Materials
                  </strong>
                  <p className="text-gray-700">
                    Choose sustainable materials with lower environmental impact
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Info / Features */}
          <div>
            <div className="grid sm:grid-cols-2 gap-8 mt-8 md:mt-0">
              <div className="bg-gradient-to-br from-green-600/5 to-blue-600/5 p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="text-lg font-bold mb-1 text-gray-700">SMART</h4>
                <p className="text-gray-700">
                  Powerful engine that understands local climatic conditions
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-600/5 to-blue-600/5 p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="text-lg font-bold mb-1 text-gray-700">FAST</h4>
                <p className="text-gray-700">
                  Discover ideal measures for best ROI within minutes
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-600/5 to-blue-600/5 p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="text-3xl mb-2">💰</div>
                <h4 className="text-lg font-bold mb-1 text-gray-700">
                  AFFORDABLE
                </h4>
                <p className="text-gray-700">
                  Free software with certification at modest cost
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-600/5 to-blue-600/5 p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="text-3xl mb-2">🌍</div>
                <h4 className="text-lg font-bold mb-1 text-gray-700">
                  INCLUSIVE
                </h4>
                <p className="text-gray-700">
                  Green buildings available to all, not just premium projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Building Types */}
        <div className="flex flex-col items-center gap-10">
          <h3 className="text-2xl font-bold   text-gray-700 text-center">
            EDGE Certifies All Building Types
          </h3>

          <div className="flex flex-wrap mx-auto w-fit gap-6 sm:gap-8 justify-items-center items-center">
            {[
              { icon: "🏠", label: "Homes" },
              { icon: "🏨", label: "Hotels" },
              { icon: "🏢", label: "Offices" },
              { icon: "🛍️", label: "Retail" },
              { icon: "🏥", label: "Healthcare" },
              { icon: "🎓", label: "Education" },
              { icon: "🏭", label: "Industrial" },
              { icon: "🏗️", label: "Mixed Use" },
            ].map((b) => (
              <div key={b.label} className="flex flex-col items-center   py-4">
                <div className="text-3xl mb-2">{b.icon}</div>
                <p className="w-fit text-gray-700">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Esect;

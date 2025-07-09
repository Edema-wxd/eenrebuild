import React from "react";

const stages = [
  {
    title: "Design Stage",
    description:
      "Enter project details into EDGE software and select green options to achieve 20% improvements. Our EDGE experts help optimize your design for maximum efficiency and cost-effectiveness.",
    duration: "2-3 weeks",
    icon: "📐",
  },
  {
    title: "Project Registration",
    description:
      "Register your project for certification once the EDGE standard is achieved. We handle all documentation and submission requirements.",
    duration: "1 week",
    icon: "📋",
  },
  {
    title: "Design Review",
    description:
      "EDGE-trained auditors review documentation at design stage. We ensure all requirements are met for smooth approval.",
    duration: "2-3 weeks",
    icon: "🔍",
  },
  {
    title: "Construction & Site Audit",
    description:
      "Documentation submitted during construction with on-site audit performed to verify implementation of green measures.",
    duration: "During construction",
    icon: "🏗️",
  },
  {
    title: "EDGE Certification",
    description:
      "Projects meeting the EDGE standard receive certification confirming predicted performance. Your building is now officially green!",
    duration: "2 weeks",
    icon: "🏆",
  },
];

function ECertificate() {
  return (
    <section className="py-20 bg-gray-100" id="certification-process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The EDGE Certification Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A streamlined approach from design to certification, with EEN&apos;s
            expert guidance every step of the way.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-green-500 to-blue-500 z-0" />
          <div className="flex flex-col gap-16 relative z-10">
            {stages.map((stage, idx) => (
              <div
                key={stage.title}
                className={`
                  flex flex-col md:flex-row
                  ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
                  items-center
                  relative
                `}
              >
                {/* Content */}
                <div
                  className={`
                    flex-1 bg-white rounded-xl shadow-lg p-8
                    ${idx % 2 === 0 ? "md:mr-12 md:text-right" : "md:ml-12"}
                    w-full
                  `}
                >
                  <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{stage.description}</p>
                  <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {stage.duration}
                  </span>
                </div>
                {/* Icon */}
                <div className="flex-shrink-0 z-10 mt-6 md:mt-0">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-green-500 bg-white text-3xl shadow-md mx-auto">
                    {stage.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Timeline line for mobile */}
          <div className="md:hidden absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-green-500 to-blue-500 z-0" />
        </div>
      </div>
    </section>
  );
}

export default ECertificate;

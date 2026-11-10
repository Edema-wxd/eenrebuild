import type { Metadata } from "next";
import React from "react";
import SMHero from "@/components/services/SMHero";
import SMVis from "@/components/services/SMVis";
import SMFeat from "@/components/services/SMFeat";
import SMSol from "@/components/services/SMSol";
import SMHow from "@/components/services/SMHow";
import SMBen from "@/components/services/SMBen";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Smart Energy Metering Nigeria | Real-Time Consumption Monitoring",
  description:
    "Monitor building energy use in real time with smart metering. Mobile app, automated alerts, and wastage reports. Technology partnership with Solid Green.",
};

function page() {
  return (
    <div>
      <SMHero />
      <SMVis />
      <SMFeat />
      <SMSol />
      <SMHow />
      <SMBen />
      <CTA
        title="Start Saving Energy Today"
        description="Join leading Nigerian organizations already benefiting from our smart metering solutions."
        buttonText="Get Your Free Energy Audit"
        buttonLink="/contact-us"
      />
    </div>
  );
}

export default page;

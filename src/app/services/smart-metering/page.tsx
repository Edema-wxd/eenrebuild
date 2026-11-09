import React from "react";
import SMHero from "@/components/services/SMHero";
import SMVis from "@/components/services/SMVis";
import SMFeat from "@/components/services/SMFeat";
import SMSol from "@/components/services/SMSol";
import SMHow from "@/components/services/SMHow";
import SMBen from "@/components/services/SMBen";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Energy Metering | EEN Consulting",
  description:
    "Real-time visibility into your electricity consumption, so you can make data-driven decisions that reduce costs and optimise energy use.",
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

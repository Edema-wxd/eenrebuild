import type { Metadata } from "next";
import React from "react";
import SolarHero from "@/components/services/SolarHero";
import SolarChallenge from "@/components/services/SolarChallenge";
import SolarSolutions from "@/components/services/SolarSolutions";
import SolarTechnology from "@/components/services/SolarTechnology";
import SolarProcess from "@/components/services/SolarProcess";
import SolarBenefits from "@/components/services/SolarBenefits";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Solar Energy Installation Lagos Nigeria | Residential & Commercial",
  description:
    "Solar panel installation with battery backup for homes and businesses in Lagos. Hybrid inverters, 5-year warranty, maintenance plans. Up to 95% energy independence.",
};

export default function SolarPage() {
  return (
    <>
      <SolarHero />
      <SolarChallenge />
      <SolarSolutions />
      <SolarTechnology />
      <SolarProcess />
      <SolarBenefits />
      <CTA
        title="Ready to go solar?"
        description="Get a free solar assessment and start saving today."
        buttonText="Get a free solar assessment"
        buttonLink="/contact"
      />
    </>
  );
}

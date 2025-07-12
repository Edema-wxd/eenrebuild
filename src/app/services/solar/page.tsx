import React from "react";
import SolarHero from "@/components/services/SolarHero";
import SolarChallenge from "@/components/services/SolarChallenge";
import SolarSolutions from "@/components/services/SolarSolutions";
import SolarTechnology from "@/components/services/SolarTechnology";
import SolarProcess from "@/components/services/SolarProcess";
import SolarBenefits from "@/components/services/SolarBenefits";
import CTA from "@/components/home/CTA";

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

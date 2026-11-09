import React from "react";
import WHero from "@/components/services/WHero";
import WChallenge from "@/components/services/WChallenge";
import WSol from "@/components/services/WSol";
import WTech from "@/components/services/WTech";
import CTA from "@/components/home/CTA";
import WCase from "@/components/services/WCase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Conservation Solutions | EEN Consulting",
  description:
    "Premium Neoperl flow regulators and aerators that cut water use without compromising performance. Supplied and installed by West Africa's exclusive Neoperl distributor.",
};

function page() {
  return (
    <div>
      <WHero />
      <WChallenge />
      <WSol />
      <WTech />
      <WCase />

      <CTA
        title="Start Saving Water Today"
        description="Join leading Nigerian organizations already benefiting from Neoperl's premium water-saving technology."
        buttonText="Get Your Free Water Audit"
        buttonLink="/contact-us"
      />
    </div>
  );
}

export default page;

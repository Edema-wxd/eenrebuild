import React from "react";
import EHero from "@/components/edge/EHero";
import Esect from "@/components/edge/Esect";
import ECertificate from "@/components/edge/ECertificate";
import EBenefits from "@/components/edge/EBenefits";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EDGE Building Certification | EEN Consulting",
  description:
    "Get your building EDGE certified: the fast, affordable green building certification for emerging markets. Achieve 20%+ savings in energy, water and materials.",
};

function page() {
  return (
    <div>
      <EHero />
      <Esect />
      <ECertificate />
      <EBenefits />

      <CTA
        title="Ready to Go Green with EDGE?"
        description="Join the growing number of Nigerian developers achieving international green building certification with local expertise."
        buttonText="Start Your EDGE Certification"
        buttonLink="/contact-us"
      />
    </div>
  );
}

export default page;

import { pageMetadata } from "@/lib/seo/metadata";
import React from "react";
import PHero from "@/components/partners/PHero";
import Pcards from "@/components/partners/Pcards";
import CTA from "@/components/home/CTA";
import PPower from "@/components/partners/PPower";
import PIntegrate from "@/components/partners/PIntegrate";

export const metadata = pageMetadata({
  title: "Our Partners | Neoperl, IFC EDGE & Solid Green | EEN Consulting",
  description:
    "EEN Consulting partners with Neoperl (exclusive West Africa distributor), IFC World Bank's EDGE program, and Solid Green to deliver green buildings in Nigeria.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PHero />
      <Pcards />

      <PPower />
      <PIntegrate />

      <CTA
        title="Experience the Advantage"
        description="Benefit from our world-class partnerships and transform your building into a beacon of sustainability."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </div>
  );
}

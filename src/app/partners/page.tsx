import React from "react";
import PHero from "@/components/partners/PHero";
import Pcards from "@/components/partners/Pcards";
import CTA from "@/components/home/CTA";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PHero />
      <Pcards />

      <CTA />
    </div>
  );
}

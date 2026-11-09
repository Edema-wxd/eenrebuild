import React from "react";
import CTA from "@/components/home/CTA";
import SHero from "@/components/services/SHero";
import SServices from "@/components/services/SServices";
import SProcess from "@/components/services/SProcess";
import SChoose from "@/components/services/SChoose";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | EEN Consulting",
  description:
    "End-to-end sustainability services in Nigeria: solar energy, Neoperl water-saving solutions, smart energy metering and EDGE green building certification.",
};

function page() {
  return (
    <div>
      <SHero />
      <SServices />
      <SProcess />
      <SChoose />
      <CTA
        title="Ready to Transform Your Building?"
        description="Let's work together to create a more sustainable and profitable future for your property."
        buttonText="Schedule a Consultation"
        buttonLink="/contact-us"
      />
    </div>
  );
}

export default page;

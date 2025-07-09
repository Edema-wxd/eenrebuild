import React from "react";
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Building from "@/components/about/Building";
import CTA from "@/components/home/CTA";
import Team from "@/components/about/Team";

function page() {
  return (
    <div>
      <AboutHero
        title="About EEN Consulting"
        description="Leading Nigeria's transformation to sustainable buildings through innovation, expertise, and passion."
      />
      <Mission />
      <Building />
      <Team />

      <CTA
        title="Ready to Join Nigeria's Green Revolution?"
        description="Let's work together to create sustainable, efficient, and profitable buildings."
        buttonText="Start a Conversation"
        buttonLink="/contact-us"
      />
    </div>
  );
}

export default page;

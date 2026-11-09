import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyEdge from "@/components/home/WhyEdge";
import Trusted from "@/components/home/Trusted";
import CTA from "@/components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EEN Consulting | Sustainable Energy & Green Buildings in Nigeria",
  description:
    "Solar energy, water conservation, smart metering and EDGE green building certification for Nigerian homes and businesses, from West Africa's exclusive Neoperl distributor.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyEdge />
      <Trusted />
      <CTA
        title="Ready to Build Green?"
        description="Join Nigeria's sustainability revolution with expert guidance every step of the way."
        buttonText="Schedule a Consultation"
        buttonLink="/contact-us"
      />
    </div>
  );
}

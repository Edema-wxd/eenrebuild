import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { businessSchema } from "@/lib/seo/structuredData";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyEdge from "@/components/home/WhyEdge";
import Trusted from "@/components/home/Trusted";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "EEN Consulting | Green Building & Sustainability Experts, Lagos Nigeria",
  description:
    "EDGE-certified green building consultants in Lagos. Water efficiency, solar energy, smart metering, and EDGE certification for homes, offices, and commercial buildings across Nigeria.",
};

export default function Home() {
  return (
    <div>
      <JsonLd data={businessSchema} />
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

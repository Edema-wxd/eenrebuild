import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/seo/JsonLd";
import { waterServiceSchema } from "@/lib/seo/structuredData";
import React from "react";
import WHero from "@/components/services/WHero";
import WChallenge from "@/components/services/WChallenge";
import WSol from "@/components/services/WSol";
import WTech from "@/components/services/WTech";
import CTA from "@/components/home/CTA";
import WCase from "@/components/services/WCase";

export const metadata = pageMetadata({
  title: "Neoperl Water Saving Solutions Nigeria | Up to 70% Water Reduction",
  description:
    "Exclusive West African distributor of Neoperl flow regulators and aerators. Reduce building water consumption by up to 70%. 5-minute retrofit, German engineering.",
  path: "/services/water-solutions",
});

function page() {
  return (
    <div>
      <JsonLd data={waterServiceSchema} />
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

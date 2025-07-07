import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyEdge from "@/components/home/WhyEdge";
import Trusted from "@/components/home/Trusted";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyEdge />
      <Trusted />
      <CTA />
    </div>
  );
}

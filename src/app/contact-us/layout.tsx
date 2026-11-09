import type { Metadata } from "next";

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: "Contact Us | EEN Consulting",
  description:
    "Talk to EEN Consulting about solar, water conservation, smart metering or EDGE certification for your building. Request a consultation with our Lagos team.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/genui/Header";
import Footer from "@/components/genui/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Fallback only: every page sets its own title and description.
  title: "EEN Consulting | Green Building & Sustainability Experts, Lagos Nigeria",
  description:
    "EDGE-certified green building consultants in Lagos. Water efficiency, solar energy, smart metering, and EDGE certification for homes, offices, and commercial buildings across Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

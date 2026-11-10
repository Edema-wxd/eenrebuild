import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/genui/Header";
import Footer from "@/components/genui/Footer";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/metadata";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Resolves relative og:image / og:url / canonical paths to absolute URLs.
  metadataBase: new URL(SITE_URL),
  // Fallback only: every page sets its own title, description and Open Graph
  // tags via pageMetadata().
  title: "EEN Consulting | Green Building & Sustainability Experts, Lagos Nigeria",
  description:
    "EDGE-certified green building consultants in Lagos. Water efficiency, solar energy, smart metering, and EDGE certification for homes, offices, and commercial buildings across Nigeria.",
  openGraph: {
    siteName: "EEN Consulting",
    locale: "en_NG",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE.url] },
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

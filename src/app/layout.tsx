import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/genui/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EEN Consulting",
  description:
    "EEN Consulting - Driving sustainability in the Nigerian built environment through energy consulting and implementation. Building sustainable homes, offices, schools, and hospitals for a thriving future.",
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
      </body>
    </html>
  );
}

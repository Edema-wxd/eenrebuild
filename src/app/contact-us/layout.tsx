import { pageMetadata } from "@/lib/seo/metadata";
import JsonLd from "@/components/seo/JsonLd";
import { businessSchema } from "@/lib/seo/structuredData";

// The contact page is a client component, so its metadata lives here.
export const metadata = pageMetadata({
  title: "Contact EEN Consulting | Green Building Consultants, Lekki Lagos",
  description:
    "Schedule a consultation with EEN Consulting. Lekki Phase 1, Lagos. Mon-Fri 9am-5pm, Sat 9am-1pm. Call +234 812 757 6854 or email info@eenconsult.com.ng.",
  path: "/contact-us",
});

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <JsonLd data={businessSchema} />
      {children}
    </>
  );
}

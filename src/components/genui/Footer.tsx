import Image from "next/image";
import Link from "next/link";
import NewsletterSubscribe from "../blog/NewsletterSubscribe";
import { CONTACT_EMAIL } from "@/lib/site";

const serviceLinks = [
  { href: "/services/solar", label: "Solar energy" },
  { href: "/services/water-solutions", label: "Water solutions" },
  { href: "/services/smart-metering", label: "Smart metering" },
  { href: "/edge-building", label: "EDGE certification" },
];

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/partners", label: "Partners" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

const PHONE_DISPLAY = "+234 812 757 6854";
const PHONE_HREF = "tel:+2348127576854";

// Text links: deepened Battery Blue on hover keeps 5:1+ contrast on the mist
// background (the brand #1AA3DD alone is too light for text).
const linkClass =
  "rounded-sm text-[#46525A] transition-colors duration-150 ease-out hover:text-[#0A6A94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A6A94]";

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-4 text-sm font-semibold text-[#1E2A31]">{title}</h2>
      <ul className="space-y-3 text-[15px]">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#DCE5EA] bg-[#F3F7F9] text-[#46525A]">
      <div className="container mx-auto px-4 pt-14 pb-10 md:px-6 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="EEN Consulting home"
              className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A6A94]"
            >
              <Image
                unoptimized
                src="/logos/een-logo.svg"
                alt="EEN Consulting"
                width={673}
                height={325}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-md text-base leading-relaxed">
              Driving sustainability in the Nigerian built environment.
            </p>

            <div className="mt-8 max-w-md">
              <h2 className="text-sm font-semibold text-[#1E2A31]">
                Get our newsletter
              </h2>
              <p className="mt-1 mb-4 text-sm leading-relaxed">
                Insights on solar, water conservation and green building, sent
                to your inbox.
              </p>
              <NewsletterSubscribe variant="inline" />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:pl-8">
            <LinkColumn title="Services" links={serviceLinks} />
            <LinkColumn title="Company" links={companyLinks} />

            <div className="col-span-2 sm:col-span-1">
              <h2 className="mb-4 text-sm font-semibold text-[#1E2A31]">
                Contact
              </h2>
              <address className="space-y-3 text-[15px] not-italic leading-relaxed">
                <p>
                  Road 14 Adebayo Doherty,
                  <br />
                  Lekki Phase 1, Lagos
                </p>
                <p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <p>
                  <a href={PHONE_HREF} className={linkClass}>
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[#DCE5EA] pt-6 text-[13px] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} EEN Consulting Limited</p>
          <p>Exclusive Neoperl distributor for West Africa</p>
        </div>
      </div>
    </footer>
  );
}

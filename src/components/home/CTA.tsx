import React from "react";
import Link from "next/link";

function CTA() {
  return (
    <section className="w-full bg-gradient-to-r from-sky-400 to-green-400 py-12 px-4 flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Ready to Build Green?
      </h2>
      <p className="text-white text-base md:text-lg mb-8 max-w-2xl">
        Join Nigeria&apos;s sustainability revolution with expert guidance every
        step of the way.
      </p>
      <Link href="/contact-us" passHref legacyBehavior>
        <a className="inline-block bg-white text-sky-600 font-semibold rounded-full px-8 py-3 shadow-md transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
          Schedule a Consultation
        </a>
      </Link>
    </section>
  );
}

export default CTA;

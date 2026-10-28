import WihcnEnquiryForm from "@/components/wihcn/WihcnEnquiryForm";

export const metadata = {
  title: "Free Facility Audit | WIHCN | EEN Consulting",
  description:
    "Book a facility audit for your hospital or clinic. Free audits go to the first 10 bookings; we'll confirm by WhatsApp.",
};

export default function WihcnPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block mb-4 rounded-full bg-[#1AA3DD]/10 px-4 py-1 text-sm font-semibold text-[#1AA3DD]">
            WIHCN Conference
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Facility Audit
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Free audits go to the first 10 bookings; we&apos;ll confirm by
            WhatsApp.
          </p>
        </div>

        <WihcnEnquiryForm />
      </div>
    </main>
  );
}

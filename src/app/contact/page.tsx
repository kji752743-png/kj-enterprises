import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { getBrandInfo } from "@/lib/products";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Consultations",
  description:
    "Connect with K J ENTERPRISES. Reach out for home furnishing inquiries, bespoke drapery sizing, fabric consultations, and residential orders.",
};

const faqs = [
  {
    q: "How can I request custom sizes for curtains or bedsheets?",
    a: "Submit an enquiry mentioning your required length, width, and quantity. Our specialists will review dimension feasibility and follow up with tailored guidance.",
  },
  {
    q: "Can I inspect fabric swatches before placing an order?",
    a: "Yes. For trade, interior design professionals, and whole-home furnishers, swatch sets can be coordinated upon request.",
  },
  {
    q: "What is your primary product focus?",
    a: "We specialize in four foundational home furnishing categories: bedsheet sets, all-season comforters, decorative cushion covers, and architectural curtains.",
  },
  {
    q: "Is K J ENTERPRISES an e-commerce direct checkout platform?",
    a: "We operate as an informational brand platform providing direct concierge service, bespoke consultations, and direct trade/residential order fulfillment rather than automated retail cart checkout.",
  },
];

export default function ContactPage() {
  const brand = getBrandInfo();

  return (
    <div className="bg-white text-black py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeading
          eyebrow="Direct Inquiries"
          title="Connect with K J ENTERPRISES"
          subtitle="Whether you are curating a single room or outfitting an entire residence, our team is at your disposal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-6">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 p-8 sm:p-10 shadow-sm">
            <div className="mb-6 space-y-1">
              <h3 className="font-serif text-2xl font-normal text-black">
                Send an Enquiry
              </h3>
              <p className="text-xs text-neutral-500 font-light">
                Fill in your details and requirements. All fields marked with * are required.
              </p>
            </div>

            <ContactForm />
          </div>

          {/* Right Column: Verified Details & Placeholders */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-neutral-50 border border-neutral-200 p-8 space-y-6">
              <h3 className="font-serif text-xl font-normal text-black border-b border-neutral-200 pb-3">
                Business Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-neutral-700">
                  <Mail className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-black uppercase text-[10px] tracking-wider">
                      Email Communication
                    </span>
                    <a
                      href={`mailto:${brand.contactPlaceholders.email}`}
                      className="font-mono text-neutral-800 hover:text-black underline underline-offset-2 transition-colors"
                    >
                      {brand.contactPlaceholders.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-neutral-700">
                  <Phone className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-black uppercase text-[10px] tracking-wider">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${brand.contactPlaceholders.phone.replace(/\s+/g, '')}`}
                      className="font-mono text-neutral-800 hover:text-black underline underline-offset-2 transition-colors"
                    >
                      {brand.contactPlaceholders.phone}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/918865874772"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-widest py-3 border border-black bg-black text-white hover:bg-neutral-800 transition-colors"
                  >
                    <span>Connect on WhatsApp (+91 88658 74772)</span>
                  </a>
                </div>

                <div className="flex items-start space-x-3 text-neutral-700 pt-2">
                  <MapPin className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-black uppercase text-[10px] tracking-wider">
                      Corporate Office
                    </span>
                    <span className="font-mono text-neutral-600">
                      {brand.contactPlaceholders.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-neutral-700">
                  <Clock className="w-4 h-4 text-black flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-black uppercase text-[10px] tracking-wider">
                      Business Hours
                    </span>
                    <span className="text-neutral-600 font-light">
                      {brand.contactPlaceholders.operatingHours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500 font-light leading-relaxed">
                <strong className="text-black font-medium block mb-1">
                  Verified Contact Information:
                </strong>
                Direct phone inquiries and emails are handled by the K J ENTERPRISES concierge team. Corporate showroom location will be published upon final schedule confirmation.
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-medium text-black">
                Frequently Addressed Inquiries
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-neutral-200 p-4 bg-white">
                    <p className="font-medium text-xs text-black mb-1">{faq.q}</p>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

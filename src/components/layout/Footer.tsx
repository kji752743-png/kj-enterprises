import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import brandData from "../../../data/brand.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          <div className="md:col-span-4 space-y-4">
            <span className="font-serif text-2xl tracking-widest block font-medium">
              K J ENTERPRISES
            </span>
            <p className="text-xs uppercase tracking-ultra text-neutral-400">
              Home Furnishing & Décor
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
              {brandData.shortStatement}
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-neutral-300 hover:text-white transition-colors border-b border-neutral-700 pb-0.5"
              >
                <span>Direct Inquiries</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Brand
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Enquiry
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold">
              Collections
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link
                  href="/collections/bedsheets"
                  className="hover:text-white transition-colors"
                >
                  Bedsheets
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/comforters"
                  className="hover:text-white transition-colors"
                >
                  Comforters
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/cushion-covers"
                  className="hover:text-white transition-colors"
                >
                  Cushion Covers
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/curtains"
                  className="hover:text-white transition-colors"
                >
                  Curtains
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-neutral-200 font-semibold">
              Brand Presence
            </h3>
            <div className="space-y-2 text-sm text-neutral-400">
              <div>
                <span className="block text-[11px] text-neutral-400 uppercase tracking-wider">
                  Contact Email
                </span>
                <a
                  href={`mailto:${brandData.contactPlaceholders.email}`}
                  className="text-neutral-300 font-mono text-xs hover:text-white transition-colors"
                >
                  {brandData.contactPlaceholders.email}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-neutral-400 uppercase tracking-wider">
                  Telephone / WhatsApp
                </span>
                <a
                  href={`tel:${brandData.contactPlaceholders.phone.replace(/\s+/g, '')}`}
                  className="text-neutral-300 font-mono text-xs hover:text-white transition-colors"
                >
                  {brandData.contactPlaceholders.phone}
                </a>
              </div>
              <div>
                <span className="block text-[11px] text-neutral-400 uppercase tracking-wider">
                  Location
                </span>
                <span className="text-neutral-300 font-mono text-xs">
                  {brandData.contactPlaceholders.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 space-y-4 sm:space-y-0">
          <p>© {currentYear} K J ENTERPRISES. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-neutral-400 cursor-pointer">
              Privacy Notice
            </span>
            <span className="hover:text-neutral-400 cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

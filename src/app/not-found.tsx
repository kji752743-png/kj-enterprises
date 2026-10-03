import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white text-black px-6">
      <div className="max-w-md text-center space-y-6">
        <span className="text-[11px] font-mono tracking-ultra uppercase text-neutral-400 block">
          Error 404
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal leading-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-neutral-600 font-light leading-relaxed">
          The requested page or collection could not be located. Explore our primary collections or return to the homepage.
        </p>
        <div className="pt-4 flex items-center justify-center space-x-4">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-6 py-3 bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest px-6 py-3 border border-neutral-300 text-neutral-800 hover:border-black hover:text-black transition-colors"
          >
            <span>Collections</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

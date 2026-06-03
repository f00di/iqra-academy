import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-brand-sky py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Page Not Found</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">
          This page is not available.
        </h1>
        <p className="mt-5 text-base leading-7 text-slate-600">
          Return to the programs page to explore Iqra Angels Learning Academy courses and fees.
        </p>
        <Link
          href="/programs"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-extrabold text-white transition hover:bg-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to Programs
        </Link>
      </div>
    </section>
  );
}

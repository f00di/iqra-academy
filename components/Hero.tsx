import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { withBasePath } from "@/lib/assets";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const enrollLink = createWhatsAppLink(
    "Assalamualaikum, I want to enroll at Iqra Angels Learning Academy. Please share details."
  );

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      <Image
        src={withBasePath("/images/academy-hero.png")}
        alt="Children learning in a bright classroom at Iqra Angels Learning Academy"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy via-brand-navy/88 to-brand-navy/15" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-brand-navy to-transparent" />

      <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-gold">Academic Session 2026</p>
          <h1 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Iqra Angels Learning Academy
          </h1>
          <p className="mt-5 text-xl font-semibold text-white">Learn Today, Lead Tomorrow</p>
          <p className="mt-3 max-w-xl text-base leading-7 text-white/82">
            Where Knowledge Meets Joy through Quranic Arabic, language, Computer & AI, fitness, skills, and joyful
            early learning programs for children.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={enrollLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-extrabold text-brand-navy transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/40"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Enroll Now
            </a>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-extrabold text-white transition hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
              Explore Programs
            </Link>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-5 border-t border-white/20 pt-6">
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-white/62">Programs</dt>
              <dd className="mt-1 text-2xl font-black text-white">6</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-white/62">Add-ons</dt>
              <dd className="mt-1 text-2xl font-black text-white">Rs. 500</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-[0.18em] text-white/62">Session</dt>
              <dd className="mt-1 text-2xl font-black text-white">2026</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

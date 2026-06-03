import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { programs } from "@/lib/data";
import { createWhatsAppLink } from "@/lib/whatsapp";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Fees", href: "/fees" },
  { label: "Activities", href: "/activities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Footer() {
  const whatsappLink = createWhatsAppLink(
    "Assalamualaikum, I want to know more about Iqra Angels Learning Academy."
  );

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-navy text-sm font-black text-brand-gold">
              IA
            </span>
            <div>
              <p className="font-black text-brand-navy">Iqra Angels Learning Academy</p>
              <p className="text-sm font-semibold text-slate-500">Learn Today, Lead Tomorrow</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">Where Knowledge Meets Joy for academic session 2026.</p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-brand-navy">Quick Links</h2>
          <div className="mt-4 grid gap-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-brand-blue">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-brand-navy">Programs</h2>
          <div className="mt-4 grid gap-3">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="text-sm font-semibold text-slate-600 hover:text-brand-blue"
              >
                {program.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-brand-navy">Contact Info</h2>
          <div className="mt-4 grid gap-4 text-sm font-semibold text-slate-600">
            <a href="mailto:baitulquran8282@gmail.com" className="flex items-center gap-3 hover:text-brand-blue">
              <Mail aria-hidden="true" className="h-4 w-4 text-brand-gold" />
              baitulquran8282@gmail.com
            </a>
            <a href="tel:+923135249881" className="flex items-center gap-3 hover:text-brand-blue">
              <Phone aria-hidden="true" className="h-4 w-4 text-brand-gold" />
              +92 3135249881
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-brand-blue">
              <MessageCircle aria-hidden="true" className="h-4 w-4 text-brand-gold" />
              WhatsApp Academy
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-5">
        <p className="px-4 text-center text-sm font-semibold text-slate-500">
          © 2026 Iqra Angels Learning Academy. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

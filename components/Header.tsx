"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Fees", href: "/fees" },
  { label: "Activities", href: "/activities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const enrollLink = createWhatsAppLink(
    "Assalamualaikum, I want to enroll at Iqra Angels Learning Academy. Please share details."
  );

  const isActive = (href: string) => (href === "/" ? pathname === href : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/94 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main">
        <Link href="/" className="flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/35">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-sm font-black text-brand-gold">
            IA
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black text-brand-navy sm:text-base">
              Iqra Angels Learning Academy
            </span>
            <span className="hidden text-xs font-semibold text-slate-500 sm:block">Learn Today, Lead Tomorrow</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/30 ${
                isActive(item.href) ? "bg-brand-sky text-brand-blue" : "text-slate-600 hover:bg-slate-100 hover:text-brand-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={enrollLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4" />
            Enroll Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-brand-navy transition hover:border-brand-blue hover:text-brand-blue focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-4 shadow-soft lg:hidden">
          <div className="grid gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                  isActive(item.href) ? "bg-brand-sky text-brand-blue" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={enrollLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-extrabold text-white"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Enroll Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

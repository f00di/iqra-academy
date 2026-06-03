import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Iqra Angels Learning Academy by email, phone, WhatsApp, or by submitting the parent inquiry form."
};

export default function ContactPage() {
  const whatsappLink = createWhatsAppLink(
    "Assalamualaikum, I want to contact Iqra Angels Learning Academy. Please share details."
  );

  return (
    <>
      <section className="bg-brand-sky py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Contact</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">
              Contact Iqra Angels Learning Academy
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Reach the academy by email, phone, WhatsApp, or send a prepared inquiry through the contact form.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[360px_1fr] lg:px-8">
          <aside className="grid gap-5 self-start">
            <a
              href="mailto:baitulquran8282@gmail.com"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:border-brand-gold hover:shadow-soft"
            >
              <Mail aria-hidden="true" className="h-6 w-6 text-brand-gold" />
              <h2 className="mt-4 text-lg font-black text-brand-navy">Email</h2>
              <p className="mt-2 break-words text-sm font-semibold text-slate-600">baitulquran8282@gmail.com</p>
            </a>
            <a
              href="tel:+923135249881"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:border-brand-gold hover:shadow-soft"
            >
              <Phone aria-hidden="true" className="h-6 w-6 text-brand-gold" />
              <h2 className="mt-4 text-lg font-black text-brand-navy">Phone/WhatsApp</h2>
              <p className="mt-2 text-sm font-semibold text-slate-600">+92 3135249881</p>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-brand-blue/20 bg-brand-blue p-6 text-white shadow-card transition hover:bg-brand-navy hover:shadow-soft"
            >
              <MessageCircle aria-hidden="true" className="h-6 w-6 text-brand-gold" />
              <h2 className="mt-4 text-lg font-black">WhatsApp</h2>
              <p className="mt-2 text-sm font-semibold text-white/82">Open a direct academy inquiry.</p>
            </a>
          </aside>

          <div>
            <div className="mb-6 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Parent Inquiry Form</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy">Send enrollment details</h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

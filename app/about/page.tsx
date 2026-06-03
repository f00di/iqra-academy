import type { Metadata } from "next";
import Image from "next/image";
import { HeartHandshake, ListChecks, MessageCircle, Sparkles, type LucideIcon } from "lucide-react";
import CTASection from "@/components/CTASection";
import { benefits, galleryItems } from "@/lib/data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Iqra Angels Learning Academy, a child-friendly academy focused on faith-based care, academics, modern skills, and joyful learning."
};

const benefitIcons: Record<string, LucideIcon> = {
  "heart-handshake": HeartHandshake,
  "list-checks": ListChecks,
  sparkles: Sparkles,
  "message-circle": MessageCircle
};

export default function AboutPage() {
  const whatsappLink = createWhatsAppLink(
    "Assalamualaikum, I want to know more about Iqra Angels Learning Academy."
  );

  return (
    <>
      <section className="bg-brand-sky py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">About</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">
              Iqra Angels Learning Academy
            </h1>
            <p className="mt-4 text-xl font-bold text-brand-blue">Learn Today, Lead Tomorrow</p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Iqra Angels Learning Academy is a child-friendly learning space where academic support, Quranic Arabic,
              modern digital skills, and creative activities come together with care and structure.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft">
            <Image
              src="/images/academy-hero.png"
              alt="Bright classroom learning environment at Iqra Angels Learning Academy"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
              className="object-cover object-right"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Our Approach</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Where Knowledge Meets Joy
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-700">
              The academy supports students through respectful teaching, practical skill-building, clear class-level
              options, and parent-friendly communication for academic session 2026.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon] ?? Sparkles;

              return (
                <article key={benefit.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-goldSoft text-brand-navy">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-brand-navy">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-brand-grey py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Academy Moments</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              A learning environment designed for confidence
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {galleryItems.map((item) => (
              <article key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover ${item.focus}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Parent Support"
        title="Talk to the academy about your child's learning needs."
        description="Ask about programs, levels, activities, fees, or enrollment for the 2026 academic session."
        primary={{ label: "Message on WhatsApp", href: whatsappLink, external: true }}
        secondary={{ label: "View Programs", href: "/programs" }}
      />
    </>
  );
}

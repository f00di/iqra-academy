import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ListChecks, MessageCircle, Sparkles, type LucideIcon } from "lucide-react";
import ActivityCard from "@/components/ActivityCard";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import PricingCard from "@/components/PricingCard";
import ProgramCard from "@/components/ProgramCard";
import { activities, benefits, getMainPricingPlans, programs } from "@/lib/data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore Iqra Angels Learning Academy programs, fees, activities, and enrollment options for academic session 2026."
};

const benefitIcons: Record<string, LucideIcon> = {
  "heart-handshake": HeartHandshake,
  "list-checks": ListChecks,
  sparkles: Sparkles,
  "message-circle": MessageCircle
};

export default function HomePage() {
  const pricingPreview = getMainPricingPlans().slice(0, 3);
  const enrollLink = createWhatsAppLink(
    "Assalamualaikum, I want to enroll at Iqra Angels Learning Academy. Please share details."
  );

  return (
    <>
      <Hero />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Featured Programs</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Programs designed for faith, academics, skills, and confidence
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Every course card opens a dedicated detail page with learning outcomes, suitable class levels, and
                related 2026 pricing.
              </p>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue hover:text-brand-navy"
            >
              View All Programs
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-grey py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Pricing Preview</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
                Clear monthly fees for academic session 2026
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Start with the most common class levels below, or view the full fee structure for Matric,
                Intermediate, and activity add-ons.
              </p>
            </div>
            <Link
              href="/fees"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-extrabold text-white transition hover:bg-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25"
            >
              View Full Fee Structure
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingPreview.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Activities Preview</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Skill-building add-ons that keep learning joyful
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Add creative, computer, cooking, play, or interactive learning sessions for Rs. 500 monthly.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-sky py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              A caring academy experience built around parents and students
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefitIcons[benefit.icon] ?? Sparkles;

              return (
                <article key={benefit.id} className="rounded-2xl border border-white bg-white p-6 shadow-card">
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

      <CTASection
        eyebrow="Enrollment Support"
        title="Speak with the academy and choose the right program."
        description="Ask about class levels, course fit, monthly fees, and activity add-ons directly on WhatsApp."
        primary={{ label: "Enroll Now", href: enrollLink, external: true }}
        secondary={{ label: "Contact Page", href: "/contact" }}
      />
    </>
  );
}

import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import ActivityCard from "@/components/ActivityCard";
import CTASection from "@/components/CTASection";
import PricingCard from "@/components/PricingCard";
import PricingTable from "@/components/PricingTable";
import { activities, getAddOnPricingPlans, getMainPricingPlans } from "@/lib/data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Fees",
  description:
    "View the 2026 monthly fee structure for Iqra Angels Learning Academy, including class-level fees and Rs. 500 activity add-ons."
};

export default function FeesPage() {
  const mainPlans = getMainPricingPlans();
  const addOnPlans = getAddOnPricingPlans();
  const askFeesLink = createWhatsAppLink(
    "Assalamualaikum, I want to know more about the 2026 fee structure at Iqra Angels Learning Academy."
  );

  return (
    <>
      <section className="bg-brand-sky py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Fees</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">
              2026 monthly fee structure
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Transparent class-level pricing with optional Extra Curricular & Skilled Activities for Rs. 500 monthly.
            </p>
            <a
              href={askFeesLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-extrabold text-white transition hover:bg-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25"
            >
              <HelpCircle aria-hidden="true" className="h-4 w-4" />
              Ask About Fees
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Monthly Fee Cards</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Main class-level monthly fees
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {mainPlans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-grey py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Comparison Table</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Compare class levels at a glance
            </h2>
          </div>
          <div className="mt-10">
            <PricingTable plans={mainPlans} />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Activity Add-ons</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Extra Curricular & Skilled Activities
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Add any activity option for Rs. 500 monthly.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[360px_1fr]">
            <div>
              {addOnPlans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Fee Questions"
        title="Ask the academy about the best plan for your child."
        description="Send a WhatsApp message for class-level guidance, activity add-ons, and enrollment details."
        primary={{ label: "Ask About Fees", href: askFeesLink, external: true }}
        secondary={{ label: "Contact Academy", href: "/contact" }}
      />
    </>
  );
}

import { HelpCircle, MessageCircle } from "lucide-react";
import type { PricingPlan } from "@/lib/data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  const enrollLink = createWhatsAppLink(
    `Assalamualaikum, I want to enroll for ${plan.level} at Iqra Angels Learning Academy. Please share details.`
  );
  const askFeesLink = createWhatsAppLink(
    "Assalamualaikum, I want to know more about the 2026 fee structure at Iqra Angels Learning Academy."
  );

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft ${
        plan.highlight
          ? "border-brand-gold bg-brand-goldSoft"
          : plan.category === "addon"
            ? "border-brand-blue/20 bg-brand-sky"
            : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
          {plan.category === "addon" ? "Activity add-on" : "Class level"}
        </p>
        <h3 className="mt-3 text-xl font-bold text-brand-navy">{plan.level}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{plan.description}</p>
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Monthly Fee</p>
          <p className="mt-1 text-4xl font-extrabold text-brand-navy">Rs. {plan.monthlyFee.toLocaleString()}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <a
          href={enrollLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          Enroll for this level
        </a>
        <a
          href={askFeesLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/20 bg-white px-5 py-3 text-sm font-bold text-brand-blue transition hover:border-brand-gold hover:text-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/30"
        >
          <HelpCircle aria-hidden="true" className="h-4 w-4" />
          Ask About Fees
        </a>
      </div>
    </article>
  );
}

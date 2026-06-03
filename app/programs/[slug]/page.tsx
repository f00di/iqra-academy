import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { ProgramIcon } from "@/components/ProgramCard";
import {
  getActivityById,
  getPricingPlanById,
  getProgramBySlug,
  programs,
  type Activity,
  type PricingPlan
} from "@/lib/data";
import { createWhatsAppLink } from "@/lib/whatsapp";

type ProgramPageProps = {
  params: Promise<{ slug: string }>;
};

function isDefined<T>(item: T | undefined): item is T {
  return Boolean(item);
}

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return {
      title: "Program Not Found"
    };
  }

  return {
    title: program.title,
    description: program.shortDescription
  };
}

function PricingMiniCard({ plan }: { plan: PricingPlan }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
        {plan.category === "addon" ? "Activity add-on" : "Class fee"}
      </p>
      <h3 className="mt-3 text-lg font-bold text-brand-navy">{plan.level}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{plan.description}</p>
      <p className="mt-4 text-2xl font-black text-brand-navy">Rs. {plan.monthlyFee.toLocaleString()} monthly</p>
    </article>
  );
}

function ActivityMiniCard({ activity }: { activity: Activity }) {
  return (
    <article className="rounded-2xl border border-brand-gold/40 bg-brand-goldSoft p-5 shadow-card">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">Activity add-on</p>
      <h3 className="mt-3 text-lg font-bold text-brand-navy">{activity.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{activity.shortDescription}</p>
      <p className="mt-4 text-2xl font-black text-brand-navy">Rs. {activity.monthlyFee.toLocaleString()} monthly</p>
    </article>
  );
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const relatedPlans = program.relatedPricing.planIds.map(getPricingPlanById).filter(isDefined);
  const addOnPlans = (program.relatedPricing.addOnPlanIds ?? []).map(getPricingPlanById).filter(isDefined);
  const activityAddOns = (program.relatedPricing.activityIds ?? []).map(getActivityById).filter(isDefined);
  const enrollLink = createWhatsAppLink(
    `Assalamualaikum, I want to enroll for ${program.title} at Iqra Angels Learning Academy. Please share details.`
  );

  return (
    <>
      <section className="bg-brand-sky py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-blue shadow-card">
                <ProgramIcon icon={program.icon} className="h-7 w-7" />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Program Detail</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">{program.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">{program.shortDescription}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={enrollLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-extrabold text-white transition hover:bg-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  Enroll on WhatsApp
                </a>
                <Link
                  href="/fees"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/20 bg-white px-6 py-3 text-sm font-extrabold text-brand-blue transition hover:border-brand-gold hover:text-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/30"
                >
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  View Fee Structure
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-blue/20 bg-white px-6 py-3 text-sm font-extrabold text-brand-blue transition hover:border-brand-gold hover:text-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/30"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  Contact Academy
                </Link>
              </div>
            </div>

            <aside className="rounded-2xl border border-white bg-white p-6 shadow-card">
              <h2 className="text-lg font-black text-brand-navy">Program Snapshot</h2>
              <dl className="mt-5 grid gap-4">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Duration</dt>
                  <dd className="mt-1 font-bold text-brand-navy">{program.duration}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Mode</dt>
                  <dd className="mt-1 font-bold text-brand-navy">{program.mode}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">CTA</dt>
                  <dd className="mt-1 font-bold text-brand-navy">{program.ctaText}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-navy">About this program</h2>
            <p className="mt-5 text-base leading-8 text-slate-700">{program.longDescription}</p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <section>
                <h2 className="text-2xl font-extrabold text-brand-navy">What students learn</h2>
                <ul className="mt-5 grid gap-3">
                  {program.whatStudentsLearn.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-brand-navy">Learning outcomes</h2>
                <ul className="mt-5 grid gap-3">
                  {program.learningOutcomes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <aside className="grid gap-6 self-start">
            <section className="rounded-2xl border border-slate-200 bg-brand-grey p-6">
              <h2 className="text-xl font-extrabold text-brand-navy">Suitable for</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {program.suitableFor.map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-brand-blue shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-brand-grey p-6">
              <h2 className="text-xl font-extrabold text-brand-navy">Available levels</h2>
              <div className="mt-4 grid gap-2">
                {program.availableLevels.map((item) => (
                  <span key={item} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>

      <section className="bg-brand-grey py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Related Pricing</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
              Matching 2026 monthly fees for {program.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{program.relatedPricing.note}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedPlans.map((plan) => (
              <PricingMiniCard key={plan.id} plan={plan} />
            ))}
            {addOnPlans.map((plan) => (
              <PricingMiniCard key={plan.id} plan={plan} />
            ))}
            {activityAddOns.map((activity) => (
              <ActivityMiniCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

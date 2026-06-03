import type { Metadata } from "next";
import ActivityCard from "@/components/ActivityCard";
import CTASection from "@/components/CTASection";
import { activities } from "@/lib/data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Explore Art & Craft, Computer Activities, Cooking Skills, Play Area Activities, and Creative Learning Sessions at Iqra Angels Learning Academy."
};

export default function ActivitiesPage() {
  const whatsappLink = createWhatsAppLink(
    "Assalamualaikum, I want to know more about Extra Curricular & Skilled Activities at Iqra Angels Learning Academy."
  );

  return (
    <>
      <section className="bg-brand-sky py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Activities</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">
              Extra Curricular & Skilled Activities
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Choose joyful, skill-building sessions for Rs. 500 monthly as an add-on to the main class-level plan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-5 lg:px-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Activity Guidance"
        title="Ask which activity add-on fits your child."
        description="The academy can help parents choose creative, digital, play, cooking, or hands-on learning sessions."
        primary={{ label: "Ask on WhatsApp", href: whatsappLink, external: true }}
        secondary={{ label: "View Fees", href: "/fees" }}
      />
    </>
  );
}

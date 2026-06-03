import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import ProgramCard from "@/components/ProgramCard";
import { programs } from "@/lib/data";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Browse Quranic Arabic, language, Computer & AI, Fitness & Skills, Learn & Play, and Advanced English programs at Iqra Angels Learning Academy."
};

export default function ProgramsPage() {
  const enrollLink = createWhatsAppLink(
    "Assalamualaikum, I want to enroll in a program at Iqra Angels Learning Academy. Please share details."
  );

  return (
    <>
      <section className="bg-brand-sky py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Programs</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-brand-navy sm:text-5xl">
              Course options for academic, faith-based, digital, and creative growth
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Select any course to view its dedicated detail page, learning outcomes, suitable class levels, and related
              monthly fees.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-8">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Admissions"
        title="Need help choosing a program?"
        description="Share your child's class level and goals with the academy, and ask which program is the best fit."
        primary={{ label: "Ask on WhatsApp", href: enrollLink, external: true }}
        secondary={{ label: "View Fees", href: "/fees" }}
      />
    </>
  );
}

import {
  Blocks,
  MessageCircle,
  Monitor,
  Palette,
  Sparkles,
  Utensils,
  type LucideIcon
} from "lucide-react";
import type { Activity } from "@/lib/data";
import { createWhatsAppLink } from "@/lib/whatsapp";

const activityIcons: Record<string, LucideIcon> = {
  palette: Palette,
  monitor: Monitor,
  utensils: Utensils,
  blocks: Blocks,
  sparkles: Sparkles
};

export function ActivityIcon({
  icon,
  className = "h-6 w-6"
}: {
  icon: string;
  className?: string;
}) {
  const Icon = activityIcons[icon] ?? Sparkles;

  return <Icon aria-hidden="true" className={className} />;
}

export default function ActivityCard({ activity }: { activity: Activity }) {
  const whatsappLink = createWhatsAppLink(
    `Assalamualaikum, I want to know more about ${activity.title} at Iqra Angels Learning Academy.`
  );

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-gold hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-goldSoft text-brand-navy">
        <ActivityIcon icon={activity.icon} />
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-xl font-bold text-brand-navy">{activity.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{activity.shortDescription}</p>
        <div className="mt-5 rounded-2xl bg-brand-grey p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Monthly add-on fee</p>
          <p className="mt-1 text-2xl font-extrabold text-brand-navy">Rs. {activity.monthlyFee}</p>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          Ask About This Activity
        </a>
      </div>
    </article>
  );
}

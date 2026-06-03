import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  BookOpen,
  BrainCircuit,
  Dumbbell,
  Languages,
  PenTool,
  type LucideIcon
} from "lucide-react";
import type { Program } from "@/lib/data";

const programIcons: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  languages: Languages,
  "brain-circuit": BrainCircuit,
  dumbbell: Dumbbell,
  blocks: Blocks,
  "pen-tool": PenTool
};

export function ProgramIcon({
  icon,
  className = "h-6 w-6"
}: {
  icon: string;
  className?: string;
}) {
  const Icon = programIcons[icon] ?? BookOpen;

  return <Icon aria-hidden="true" className={className} />;
}

export default function ProgramCard({ program }: { program: Program }) {
  const classRange = program.suitableFor.join(" | ");

  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card outline-none transition hover:-translate-y-1 hover:border-brand-gold hover:shadow-soft focus-visible:ring-4 focus-visible:ring-brand-gold/35"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sky text-brand-blue transition group-hover:bg-brand-goldSoft group-hover:text-brand-navy">
          <ProgramIcon icon={program.icon} />
        </div>
        <ArrowRight
          aria-hidden="true"
          className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-gold"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-xl font-bold text-brand-navy">{program.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{program.shortDescription}</p>
        <p className="mt-5 border-t border-slate-100 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
          {classRange}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue">
          View Details
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

type CTAAction = {
  label: string;
  href: string;
  external?: boolean;
};

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primary: CTAAction;
  secondary?: CTAAction;
};

function ActionLink({
  action,
  variant
}: {
  action: CTAAction;
  variant: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-3 text-sm font-extrabold text-brand-navy transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/40"
      : "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-extrabold text-white transition hover:border-brand-gold hover:text-brand-gold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30";
  const icon =
    variant === "primary" ? (
      <MessageCircle aria-hidden="true" className="h-4 w-4" />
    ) : (
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    );

  if (action.external) {
    return (
      <a href={action.href} target="_blank" rel="noreferrer" className={className}>
        {icon}
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {icon}
      {action.label}
    </Link>
  );
}

export default function CTASection({ eyebrow, title, description, primary, secondary }: CTASectionProps) {
  return (
    <section className="bg-brand-navy py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">{eyebrow}</p>
          ) : null}
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-7 text-white/78">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-shrink-0">
          <ActionLink action={primary} variant="primary" />
          {secondary ? <ActionLink action={secondary} variant="secondary" /> : null}
        </div>
      </div>
    </section>
  );
}

import type { PricingPlan } from "@/lib/data";

export default function PricingTable({ plans }: { plans: PricingPlan[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left">
          <caption className="sr-only">2026 monthly fee comparison table</caption>
          <thead className="bg-brand-navy text-white">
            <tr>
              <th scope="col" className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                Level
              </th>
              <th scope="col" className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                Monthly Fee
              </th>
              <th scope="col" className="min-w-[260px] px-5 py-4 text-sm font-bold">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {plans.map((plan) => (
              <tr key={plan.id} className="transition hover:bg-brand-sky/60">
                <th scope="row" className="whitespace-nowrap px-5 py-4 text-sm font-bold text-brand-navy">
                  {plan.level}
                </th>
                <td className="whitespace-nowrap px-5 py-4 text-sm font-extrabold text-brand-blue">
                  Rs. {plan.monthlyFee.toLocaleString()} monthly
                </td>
                <td className="px-5 py-4 text-sm leading-6 text-slate-600">{plan.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";

import { ChaosCard } from "@/components/ui/ChaosCard";

const ITEMS = [
  {
    title: "Ticket",
    subtitle: "Access to enlightenment",
    amount: "₹15,000",
  },
  {
    title: "Travel",
    subtitle: "Pilgrimage expenses",
    amount: "₹8,000",
  },
  {
    title: "Emotional Damage",
    subtitle: "Post-concert therapy",
    amount: "₹2,500",
  },
  {
    title: "Hydration",
    subtitle: "Crying requires fluids",
    amount: "₹500",
  },
];

export function BudgetSection() {
  return (
    <section className="py-20 px-4 bg-stone-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-white text-center mb-3">
          Budget Breakdown
        </h2>
        <p className="text-stone-400 text-center mb-12">
          (Overdramatic but accurate)
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {ITEMS.map((row, i) => (
            <ChaosCard
              key={row.title}
              title={row.title}
              subtitle={row.subtitle}
              amount={row.amount}
              delay={i * 0.08}
            />
          ))}
        </div>

        <p className="text-center text-stone-500 mt-6 font-mono text-sm">
          Total: ~₹26,000 (manifesting early bird)
        </p>
      </div>
    </section>
  );
}

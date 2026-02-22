"use client";

import { motion } from "framer-motion";

const TIERS = [
  { amount: "₹100", label: "NPC Supporter", desc: "Your name in the credits (my Notes app)" },
  { amount: "₹500", label: "Side Character", desc: "Shoutout in my post-concert thread" },
  { amount: "₹1000", label: "Executive Producer of My Lore", desc: "You're in the lore now" },
  { amount: "₹2000", label: "Angel Investor in My Main Character Arc", desc: "Canonically part of the arc" },
];

export function RewardTiersSection() {
  return (
    <section className="py-20 px-4 bg-stone-950 border-y border-stone-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-white text-center mb-3">
          Reward Tiers
        </h2>
        <p className="text-stone-400 text-center mb-12">
          Gamified. Like in-app purchases, but for my soul.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{
                scale: 1.02,
                rotate: [0, -0.3, 0.3, 0],
                transition: { duration: 0.25 },
              }}
              className="bg-stone-900 border border-stone-600 rounded-2xl p-5 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 text-[10px] uppercase tracking-wider text-amber-400/70 font-semibold">
                Unlock
              </div>
              <div className="font-mono text-amber-400 text-xl font-bold mb-1">
                {tier.amount}
              </div>
              <h3 className="text-white font-bold text-lg">{tier.label}</h3>
              <p className="text-stone-400 text-sm mt-1">{tier.desc}</p>
              <motion.div
                className="mt-4 inline-block px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400 text-sm font-medium border border-amber-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Select
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const BLOCKS = [
  {
    label: "Problem",
    text: "A broke CS student with a dream. The 9–5 pipeline is closing in. Only one concert can save the timeline.",
  },
  {
    label: "Solution",
    text: "You fund the ticket. I attend. I come back emotionally debugged and refuse to become a corporate NPC.",
  },
  {
    label: "Market Opportunity",
    text: "India has never had a Kanye tour. First-mover advantage on main character energy. Undervalued asset.",
  },
  {
    label: "Competitive Advantage",
    text: "I am him. (Self-aware delusion. Still true.)",
  },
];

export function ManifestoSection() {
  return (
    <section className="py-20 px-4 bg-stone-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-white text-center mb-12">
          Delusion Manifesto
        </h2>
        <p className="text-stone-400 text-center mb-12 -mt-8">
          Styled like a startup pitch (because it is)
        </p>

        <div className="space-y-6">
          {BLOCKS.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-4 border-amber-500 pl-5 py-2"
            >
              <span className="text-amber-400 font-bold text-sm uppercase tracking-wider">
                {block.label}
              </span>
              <p className="text-stone-200 mt-1">{block.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

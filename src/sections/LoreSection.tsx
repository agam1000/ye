"use client";

import { motion } from "framer-motion";

const BULLETS = [
  "Prevents 9–5 employment",
  "Boosts Indian GDP",
  "Expands consciousness",
  "Required for emotional debugging",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function LoreSection() {
  return (
    <section className="py-20 px-4 bg-stone-950 border-y border-stone-800">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-display text-3xl sm:text-4xl font-black text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why This Is Bigger Than Me
        </motion.h2>
        <motion.p
          className="text-stone-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          The lore section (objectively correct)
        </motion.p>

        <motion.ul
          className="space-y-4 text-left"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {BULLETS.map((text, i) => (
            <motion.li
              key={text}
              variants={item}
              className="flex items-center gap-3 bg-stone-900/60 border border-stone-700 rounded-xl px-5 py-4"
              whileHover={{
                x: [0, 4, -2, 0],
                transition: { duration: 0.4 },
              }}
            >
              <span className="text-amber-400 text-xl">◦</span>
              <span className="text-stone-200 font-medium">{text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

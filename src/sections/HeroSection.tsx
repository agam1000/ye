"use client";

import { motion } from "framer-motion";
import { useLiveCounter } from "@/hooks/useLiveCounter";
import { useFakeActivity } from "@/hooks/useFakeActivity";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { WobbleButton } from "@/components/ui/WobbleButton";

const CTAS = [
  "Invest in My Lore",
  "Prevent Corporate Arc",
  "Enable Ye-conomics Research",
];

export function HeroSection() {
  const count = useLiveCounter();
  const activity = useFakeActivity();

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.15),transparent)]" />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="text-amber-400/90 text-sm uppercase tracking-[0.3em] mb-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Fund My Main Character Arc
        </motion.p>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          THIS IS NOT A WANT.
          <br />
          <span className="text-amber-400">THIS IS A CHARACTER DEVELOPMENT ARC.</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-xl text-stone-400 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          If I don&apos;t go, I become corporate.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <ProgressBar />
        </motion.div>

        <motion.div
          className="mt-6 text-stone-500 text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2 align-middle" />
          {count.toLocaleString()} people have already accepted the lore
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap gap-3 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {CTAS.map((label, i) => (
            <a key={label} href="#donate">
              <WobbleButton variant={i === 0 ? "primary" : "secondary"}>
                {label}
              </WobbleButton>
            </a>
          ))}
        </motion.div>

        <motion.p
          className="mt-8 text-stone-500 text-xs max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {activity}
        </motion.p>
      </motion.div>
    </section>
  );
}

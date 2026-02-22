"use client";

import { motion } from "framer-motion";

interface ChaosCardProps {
  title: string;
  subtitle: string;
  amount?: string;
  children?: React.ReactNode;
  delay?: number;
}

export function ChaosCard({
  title,
  subtitle,
  amount,
  children,
  delay = 0,
}: ChaosCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      whileHover={{
        rotate: [0, -0.5, 0.5, 0],
        transition: { duration: 0.3 },
      }}
      className="bg-stone-900/80 border border-stone-600 rounded-2xl p-5 backdrop-blur-sm"
    >
      <div className="flex justify-between items-start gap-2">
        <div>
          <h3 className="font-bold text-lg text-white">{title}</h3>
          <p className="text-stone-400 text-sm mt-0.5">{subtitle}</p>
        </div>
        {amount && (
          <span className="text-amber-400 font-mono font-semibold shrink-0">
            {amount}
          </span>
        )}
      </div>
      {children}
    </motion.div>
  );
}

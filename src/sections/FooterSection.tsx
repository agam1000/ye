"use client";

import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer className="py-8 px-4 bg-stone-950 border-t border-stone-800">
      <motion.p
        className="text-center text-stone-600 text-[10px] max-w-md mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        If this works, capitalism wins.
      </motion.p>
    </footer>
  );
}

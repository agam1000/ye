"use client";

import { motion } from "framer-motion";
import { WobbleButton } from "@/components/ui/WobbleButton";

export function DonationSection() {
  return (
    <section id="donate" className="py-20 px-4 bg-stone-950 border-t border-stone-800 scroll-mt-20">
      <div className="max-w-lg mx-auto text-center">
        <motion.h2
          className="font-display text-3xl sm:text-4xl font-black text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Donate
        </motion.h2>
        <motion.p
          className="text-stone-400 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          UPI / Paytm / Whatever gets me to Ye
        </motion.p>

        <motion.div
          className="bg-stone-900 border-2 border-dashed border-stone-600 rounded-2xl p-8 mb-6"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: "rgba(251,191,36,0.3)" }}
        >
          <p className="text-stone-500 text-sm mb-4">Scan to fund the timeline</p>
          <div className="w-40 h-40 mx-auto bg-stone-800 rounded-xl flex items-center justify-center text-stone-600 text-xs">
          <img
            src="/upi-qr.png"
            alt="UPI QR Code"
          />
          </div>
          <p className="text-stone-500 text-xs mt-4 font-mono">
            upi:fund-my-lore@ybl
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <WobbleButton variant="primary" className="text-base px-8 py-4">
            Fund The Timeline
          </WobbleButton>
        </motion.div>

        <motion.p
          className="mt-8 text-stone-500 text-xs max-w-sm mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          This is 70% satire, 30% manifestation.
        </motion.p>

        <motion.blockquote
          className="mt-10 text-stone-400 text-sm italic border-l-2 border-amber-500/50 pl-4 text-left max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &ldquo;I donated ₹500 and my skin cleared.&rdquo; — Anonymous
        </motion.blockquote>
      </div>
    </section>
  );
}

"use client";

import { motion, useMotionValue, useTransform, animate, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

const TARGET = 34; // percent for dramatic effect
const DURATION = 2.5;

export function ProgressBar() {
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v));
  const width = useTransform(value, [0, 100], ["0%", "100%"]);
  const [displayPercent, setDisplayPercent] = useState(0);

  useMotionValueEvent(rounded, "change", (v) => setDisplayPercent(v));

  useEffect(() => {
    const controls = animate(value, TARGET, {
      duration: DURATION,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value]);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex justify-between text-sm mb-1 font-medium text-stone-400">
        <span>Main character energy</span>
        <span className="tabular-nums">{displayPercent}%</span>
      </div>
      <div className="h-3 bg-stone-800 rounded-full overflow-hidden border border-stone-600">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full"
          style={{ width }}
        />
      </div>
    </div>
  );
}

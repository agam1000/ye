"use client";

import { motion } from "framer-motion";

interface WobbleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export function WobbleButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}: WobbleButtonProps) {
  return (
    <motion.button
      type="button"
      whileHover={{
        scale: 1.02,
        rotate: [0, -1.5, 1.5, 0],
        transition: { rotate: { duration: 0.4 } },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        px-5 py-3 rounded-xl font-semibold text-sm transition-colors
        ${variant === "primary" && "bg-amber-500 text-black hover:bg-amber-400"}
        ${variant === "secondary" && "bg-stone-800 text-amber-400 border border-stone-600 hover:bg-stone-700"}
        ${variant === "ghost" && "bg-transparent text-stone-300 hover:bg-stone-800/50"}
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}

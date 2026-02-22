"use client";

import { useState, useEffect } from "react";

const MESSAGES = [
  "Someone in Delhi just funded the vision.",
  "Mumbai just invested in the lore.",
  "Bangalore detected. Funding received.",
  "A believer in Chennai just sent it.",
  "Pune unlocked: main character energy funded.",
];

const ROTATE_MS = 5000;

export function useFakeActivity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  return MESSAGES[index];
}

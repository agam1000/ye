"use client";

import { useState, useEffect } from "react";

const INITIAL = 1247;
const MAX = 2500;
const TICK_MS = 1800;
const INCREMENT = () => Math.floor(Math.random() * 3) + 1;

export function useLiveCounter() {
  const [count, setCount] = useState(INITIAL);

  useEffect(() => {
    if (count >= MAX) return;
    const id = setInterval(() => {
      setCount((c) => Math.min(MAX, c + INCREMENT()));
    }, TICK_MS);
    return () => clearInterval(id);
  }, [count]);

  return count;
}

"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const EMOJIS = ["🔥", "🚀", "🌟", "💥", "✨"];

export default function EmojiRotator({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % EMOJIS.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "text-6xl font-bold animate-spin-slow",
        "text-pink-500",
        className
      )}
    >
      {EMOJIS[index]}
    </div>
  );
}

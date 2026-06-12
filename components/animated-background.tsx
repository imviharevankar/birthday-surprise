"use client";

import { motion } from "framer-motion";

const hearts = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: (index % 9) * 0.45,
  duration: 8 + (index % 5),
  size: 14 + (index % 4) * 7
}));

export function AnimatedBackground({ onHeartClick }: { onHeartClick?: () => void }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,204,225,0.78),transparent_30%),radial-gradient(circle_at_85%_5%,rgba(255,221,151,0.55),transparent_28%),linear-gradient(135deg,#fff7fb_0%,#ffe4ef_34%,#f0d9ff_68%,#fff1bf_100%)] dark:bg-[radial-gradient(circle_at_15%_15%,rgba(115,35,86,0.65),transparent_30%),radial-gradient(circle_at_85%_5%,rgba(158,98,32,0.35),transparent_28%),linear-gradient(135deg,#170c1d_0%,#321438_45%,#4b1d4b_100%)]" />
      {hearts.map((heart) => (
        <motion.button
          aria-label="Floating heart"
          className="pointer-events-auto absolute bottom-[-12vh] text-rose-400/35 drop-shadow-sm dark:text-rose-200/25"
          key={heart.id}
          onClick={onHeartClick}
          style={{ left: heart.left, fontSize: heart.size }}
          animate={{ y: ["0vh", "-116vh"], x: [0, heart.id % 2 === 0 ? 28 : -28], rotate: [0, 18, -10] }}
          transition={{ duration: heart.duration, delay: heart.delay, repeat: Infinity, ease: "linear" }}
        >
          ♥
        </motion.button>
      ))}
    </div>
  );
}

"use client";

import { ArrowDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-4 py-2 text-sm font-semibold text-rosewood shadow-glass backdrop-blur-2xl dark:border-white/15 dark:bg-white/10 dark:text-rose-100"
        >
          <Sparkles size={16} />
          13 June is officially the sweetest day
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
          className="mt-8 font-display text-5xl font-black leading-tight text-ink dark:text-white sm:text-7xl lg:text-8xl"
        >
          Happy Birthday <span className="gold-text block">My Love</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-rosewood/85 dark:text-rose-100 sm:text-2xl"
        >
          Another year older, another year more beautiful.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/72 dark:text-white/72"
        >
          I made this little world for you because a normal wish felt too small
          for someone who makes every ordinary day feel chosen, warm, and
          wonderfully ours.
        </motion.p>
        <motion.a
          href="#countdown"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-amber-400 px-7 py-4 text-base font-bold text-white shadow-glow focus:outline-none focus:ring-4 focus:ring-amber-200"
        >
          Start Our Journey
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
}

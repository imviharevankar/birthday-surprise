"use client";

import { SmilePlus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { compliments } from "@/lib/content";
import { randomItem } from "@/lib/utils";
import { SectionShell } from "@/components/section-shell";

export function ComplimentGenerator() {
  const [compliment, setCompliment] = useState("Click the button. I have a lot to say about how wonderful you are.");

  return (
    <SectionShell id="compliments" eyebrow="Instant smile machine" title="Random Compliment Generator">
      <div className="glass mx-auto max-w-3xl rounded-[2rem] p-6 text-center sm:p-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={compliment}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            className="min-h-28 font-display text-3xl font-bold leading-tight text-rosewood dark:text-rose-100 sm:text-4xl"
          >
            {compliment}
          </motion.p>
        </AnimatePresence>
        <motion.button
          type="button"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCompliment(randomItem(compliments))}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 font-bold text-white shadow-glow focus:outline-none focus:ring-4 focus:ring-amber-200 dark:bg-white dark:text-ink"
        >
          <SmilePlus size={20} />
          Make Me Smile
        </motion.button>
      </div>
    </SectionShell>
  );
}

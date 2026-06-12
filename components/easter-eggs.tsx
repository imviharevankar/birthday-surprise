"use client";

import Confetti from "react-confetti";
import { Award } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useConfetti } from "@/hooks/use-confetti";
import { useKonamiCode } from "@/hooks/use-konami-code";
import { floatingMessages } from "@/lib/content";
import { randomItem } from "@/lib/utils";

export function EasterEggs({
  heartClicks
}: {
  heartClicks: number;
}) {
  const { isActive, fire } = useConfetti();
  const [award, setAward] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const unlockAward = useCallback(() => {
    setAward(true);
    fire();
  }, [fire]);

  useKonamiCode(unlockAward);

  useEffect(() => {
    if (heartClicks > 0 && heartClicks % 10 === 0) {
      fire();
    }
  }, [fire, heartClicks]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setMessage(randomItem(floatingMessages));
      window.setTimeout(() => setMessage(null), 3600);
    }, 16000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      {isActive ? <Confetti recycle={false} numberOfPieces={320} className="!fixed" /> : null}
      <AnimatePresence>
        {award ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.86, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-1/2 top-5 z-50 flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-3xl bg-ink p-4 text-white shadow-glow"
          >
            <Award className="text-amber-300" />
            <div>
              <p className="font-display text-xl font-bold">Best Wife Ever Award 🏆</p>
              <p className="text-sm text-white/70">Unlocked by elite keyboard romance.</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {message ? (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className="fixed right-4 top-28 z-40 rounded-full bg-white/82 px-5 py-3 text-sm font-bold text-rosewood shadow-glass backdrop-blur-xl dark:bg-ink/80 dark:text-rose-100"
          >
            {message}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

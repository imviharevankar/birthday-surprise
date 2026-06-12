"use client";

import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCountdown } from "@/hooks/use-countdown";
import { useConfetti } from "@/hooks/use-confetti";
import { SectionShell } from "@/components/section-shell";

export function Countdown({ birthdayDate }: { birthdayDate: Date }) {
  const [_hasMounted, setHasMounted] = useState(false);
  const countdown = useCountdown(birthdayDate);
  const { isActive, fire } = useConfetti();

  useEffect(() => {
    setHasMounted(true);

    if (countdown.isComplete) {
      fire();
    }
  }, [fire, countdown.isComplete]);

  const units = [
    ["Days", countdown.days],
    ["Hours", countdown.hours],
    ["Minutes", countdown.minutes],
    ["Seconds", countdown.seconds],
  ] as const;

  return (
    <SectionShell id="countdown" eyebrow="The moment" title="Live Countdown">
      {isActive ? (
        <Confetti recycle={false} numberOfPieces={420} className="!fixed" />
      ) : null}
      <div className="glass mx-auto max-w-4xl rounded-[2rem] p-6 sm:p-8">
        {countdown.isComplete ? (
          <motion.div
            initial={{ scale: 0.86, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-10 text-center"
          >
            <p className="gold-text font-display text-4xl font-black sm:text-6xl">
              HAPPY BIRTHDAY MY LOVE 🎉
            </p>
            <p className="mt-5 text-lg text-ink/75 dark:text-white/75">
              Today belongs to you. I hope it feels as loved as you make me
              feel.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {units.map(([label, value], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/45 bg-white/45 p-5 text-center dark:border-white/10 dark:bg-white/10"
              >
                <p className="font-display text-5xl font-black text-rosewood dark:text-rose-100">
                  {value}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-ink/55 dark:text-white/55">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </SectionShell>
  );
}

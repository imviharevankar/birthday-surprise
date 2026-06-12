"use client";

import Confetti from "react-confetti";
import { Gift } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useConfetti } from "@/hooks/use-confetti";
import { SectionShell } from "@/components/section-shell";

export function HiddenSurprise() {
  const [open, setOpen] = useState(false);
  const { isActive, fire } = useConfetti();

  function openGift() {
    setOpen(true);
    fire();
  }

  return (
    <SectionShell id="surprise" eyebrow="Tap the present" title="Hidden Surprise">
      {isActive ? <Confetti recycle={false} numberOfPieces={360} className="!fixed" /> : null}
      <div className="mx-auto max-w-3xl text-center">
        <motion.button
          type="button"
          onClick={openGift}
          whileHover={{ scale: 1.06, rotate: open ? 0 : -2 }}
          whileTap={{ scale: 0.96 }}
          className="relative mx-auto grid size-44 place-items-center rounded-[2rem] bg-gradient-to-br from-rose-500 via-fuchsia-500 to-amber-400 text-white shadow-glow focus:outline-none focus:ring-4 focus:ring-amber-200"
          aria-label="Open gift box"
        >
          <motion.span animate={open ? { y: -34, rotate: -12 } : { y: 0, rotate: 0 }} transition={{ type: "spring" }}>
            <Gift size={82} />
          </motion.span>
        </motion.button>
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              className="glass mt-8 rounded-[2rem] p-7"
            >
              <p className="font-display text-3xl font-bold leading-tight text-rosewood dark:text-rose-100">
                Thank you for choosing me every day. You are my best friend, my favorite person, and the greatest
                blessing in my life.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}

"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";

export function LoveLetter() {
  return (
    <SectionShell id="letter" eyebrow="From my heart">
      <motion.article
        initial={{ opacity: 0, rotateX: -18, y: 42 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass mx-auto max-w-3xl rounded-[2rem] p-7 shadow-glass sm:p-12"
      >
        <div className="mb-8 flex items-center justify-between border-b border-rose-200/60 pb-5 dark:border-white/10">
          <p className="font-script text-4xl text-rosewood dark:text-rose-100">
            My Love,
          </p>
          <Mail className="text-rose-500" size={34} />
        </div>
        <div className="space-y-5 font-display text-2xl leading-relaxed text-ink/82 dark:text-white/82">
          <p>
            Thank you for filling my life with happiness, laughter, and love.
          </p>
          <p>Every day with you feels special.</p>
          <p>You make ordinary moments extraordinary.</p>
          <p>
            I am grateful for every memory we&apos;ve created and excited for
            every memory still to come.
          </p>
          <p>Happy Birthday Baiko ❤️</p>
        </div>
        <p className="mt-10 font-script text-4xl text-rosewood dark:text-rose-100">
          Love, Your Aho
        </p>
      </motion.article>
    </SectionShell>
  );
}

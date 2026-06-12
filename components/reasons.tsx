"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { reasons } from "@/lib/content";
import { SectionShell } from "@/components/section-shell";

export function ReasonsGrid() {
  return (
    <SectionShell id="reasons" eyebrow="Twenty truths" title="Reasons I Love You">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => (
          <motion.article
            key={reason}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 8) * 0.035 }}
            className="perspective h-44"
          >
            <div className="flip-card preserve-3d relative h-full rounded-3xl transition duration-500">
              <div className="backface-hidden glass absolute inset-0 grid place-items-center rounded-3xl p-5 text-center">
                <Heart className="mb-3 text-rose-500" />
                <p className="font-display text-2xl font-bold">Reason {index + 1}</p>
              </div>
              <div className="backface-hidden rotate-y-180 absolute inset-0 grid place-items-center rounded-3xl bg-gradient-to-br from-rose-500 via-fuchsia-500 to-amber-400 p-5 text-center text-white shadow-glow">
                <p className="text-lg font-bold leading-7">{reason}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

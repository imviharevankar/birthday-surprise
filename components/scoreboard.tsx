"use client";

import { Laugh, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { scoreboard } from "@/lib/content";
import { SectionShell } from "@/components/section-shell";

export function Scoreboard() {
  return (
    <SectionShell
      id="scoreboard"
      eyebrow="Highly scientific"
      title="Aho vs Baiko Scoreboard"
    >
      <div className="grid gap-5 lg:grid-cols-5">
        {scoreboard.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass rounded-3xl p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">{item.label}</h3>
              {index % 2 === 0 ? (
                <Trophy className="text-amber-500" />
              ) : (
                <Laugh className="text-rose-500" />
              )}
            </div>
            <ScoreLine
              label="Aho"
              value={item.husband}
              percent={item.husbandValue}
              muted
            />
            <ScoreLine
              label="Baiko"
              value={item.wife}
              percent={item.wifeValue}
            />
          </motion.article>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-ink/68 dark:text-white/68">
        This scoreboard has been audited by absolutely nobody, but the results
        are spiritually accurate.
      </p>
    </SectionShell>
  );
}

function ScoreLine({
  label,
  value,
  percent,
  muted,
}: {
  label: string;
  value: string;
  percent: number;
  muted?: boolean;
}) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-2 flex items-center justify-between text-sm font-bold">
        <span
          className={
            muted
              ? "text-ink/55 dark:text-white/55"
              : "text-rosewood dark:text-rose-100"
          }
        >
          {label}
        </span>
        <span>{value}</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-white/55 dark:bg-white/12">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={
            muted
              ? "h-full rounded-full bg-ink/25 dark:bg-white/30"
              : "h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-300"
          }
        />
      </div>
    </div>
  );
}

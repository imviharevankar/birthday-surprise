"use client";

import { CalendarHeart } from "lucide-react";
import { motion } from "framer-motion";
import { timeline } from "@/lib/content";
import { SectionShell } from "@/components/section-shell";

export function StoryTimeline() {
  return (
    <SectionShell id="story" eyebrow="Our little forever" title="Our Story Timeline">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-rose-300 via-fuchsia-300 to-amber-300 sm:left-1/2" />
        {timeline.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative mb-8 pl-14 sm:grid sm:grid-cols-2 sm:gap-10 sm:pl-0"
          >
            <div className={index % 2 === 0 ? "sm:text-right" : "sm:col-start-2"}>
              <div className="glass rounded-3xl p-5">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-rosewood dark:text-rose-100">
                  <CalendarHeart size={18} />
                  {item.date}
                </div>
                <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink/70 dark:text-white/70">{item.body}</p>
              </div>
            </div>
            <span className="absolute left-2 top-6 flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-amber-300 text-white shadow-glow sm:left-1/2 sm:-translate-x-1/2">
              ♥
            </span>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

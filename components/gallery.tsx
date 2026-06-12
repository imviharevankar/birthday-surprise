"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { galleryImages } from "@/lib/content";
import { SectionShell } from "@/components/section-shell";
import { cn } from "@/lib/utils";

export function PhotoGallery() {
  const [active, setActive] = useState<(typeof galleryImages)[number] | null>(
    null,
  );

  return (
    <SectionShell id="gallery" eyebrow="Tiny museum" title="Photo Gallery">
      <div className="masonry">
        {galleryImages.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setActive(image)}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className={cn(
              "masonry-item relative w-full overflow-hidden rounded-[1.5rem] border border-white/50 shadow-glass focus:outline-none focus:ring-4 focus:ring-amber-200",
              image.heightClass,
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              unoptimized
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-ink/82 p-4 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[2rem]"
            >
              <Image
                src={active.src}
                alt={active.alt}
                fill
                priority
                unoptimized
                className="object-cover"
              />
              <button
                type="button"
                aria-label="Close gallery"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 rounded-full bg-white/86 p-3 text-ink shadow-glass focus:outline-none focus:ring-4 focus:ring-amber-200"
              >
                <X size={22} />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </SectionShell>
  );
}

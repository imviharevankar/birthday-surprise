import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, eyebrow, title, children, className }: SectionShellProps) {
  return (
    <section id={id} className={cn("relative px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rosewood/75 dark:text-rose-200">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink dark:text-white sm:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

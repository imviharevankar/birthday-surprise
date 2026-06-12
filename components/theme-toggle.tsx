"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  function toggle() {
    setDark((current) => {
      const next = !current;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="fixed right-4 top-4 z-40 grid size-11 place-items-center rounded-full border border-white/45 bg-white/70 text-rosewood shadow-glass backdrop-blur-xl focus:outline-none focus:ring-4 focus:ring-amber-200 dark:border-white/10 dark:bg-ink/70 dark:text-rose-100"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

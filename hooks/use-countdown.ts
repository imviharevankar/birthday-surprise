"use client";

import { useEffect, useMemo, useState } from "react";

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
};

function getCountdownParts(target: Date): CountdownParts {
  const diff = Math.max(target.getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isComplete: diff === 0
  };
}

export function useCountdown(birthdayDate: Date) {
  const stableTarget = useMemo(() => birthdayDate, [birthdayDate]);
  const [parts, setParts] = useState<CountdownParts>(() => getCountdownParts(stableTarget));

  useEffect(() => {
    const id = window.setInterval(() => setParts(getCountdownParts(stableTarget)), 1000);
    return () => window.clearInterval(id);
  }, [stableTarget]);

  return parts;
}

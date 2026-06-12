"use client";

import { useCallback, useEffect, useState } from "react";

export function useConfetti(duration = 4200) {
  const [isActive, setIsActive] = useState(false);

  const fire = useCallback(() => {
    setIsActive(true);
  }, []);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const id = window.setTimeout(() => setIsActive(false), duration);
    return () => window.clearTimeout(id);
  }, [duration, isActive]);

  return { isActive, fire };
}

"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.55);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    function startAfterInteraction() {
      const audio = audioRef.current;
      if (!audio || playing) {
        return;
      }

      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => undefined);
      window.removeEventListener("pointerdown", startAfterInteraction);
      window.removeEventListener("keydown", startAfterInteraction);
    }

    window.addEventListener("pointerdown", startAfterInteraction, {
      once: true,
    });
    window.addEventListener("keydown", startAfterInteraction, { once: true });
    return () => {
      window.removeEventListener("pointerdown", startAfterInteraction);
      window.removeEventListener("keydown", startAfterInteraction);
    };
  }, [playing]);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => undefined);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-3xl border border-white/45 bg-white/72 p-3 shadow-glass backdrop-blur-2xl dark:border-white/10 dark:bg-ink/70"
    >
      <audio
        ref={audioRef}
        src="/music/birthday-song.mp3"
        preload="metadata"
        loop
        onTimeUpdate={(event) => {
          const audio = event.currentTarget;
          setProgress(
            audio.duration ? (audio.currentTime / audio.duration) * 100 : 0,
          );
        }}
        onEnded={() => setPlaying(false)}
      />
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause music" : "Play music"}
          className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-rose-500 to-amber-400 text-white shadow-glow focus:outline-none focus:ring-4 focus:ring-amber-200"
        >
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-ink dark:text-white">
            Your fav song
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-rose-100 dark:bg-white/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <Volume2 size={18} className="text-rosewood dark:text-rose-100" />
        <input
          aria-label="Music volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          className="w-20 accent-rose-500"
        />
      </div>
    </motion.div>
  );
}

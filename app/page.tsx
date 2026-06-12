"use client";

import { useState } from "react";
import { AnimatedBackground } from "@/components/animated-background";
import { Countdown } from "@/components/countdown";
import { EasterEggs } from "@/components/easter-eggs";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { MusicPlayer } from "@/components/music-player";
import { PhotoGallery } from "@/components/gallery";
import { Scoreboard } from "@/components/scoreboard";
import { StoryTimeline } from "@/components/timeline";
import { ReasonsGrid } from "@/components/reasons";
import { ComplimentGenerator } from "@/components/compliment-generator";
import { HiddenSurprise } from "@/components/hidden-surprise";
import { LoveLetter } from "@/components/love-letter";
import { ThemeToggle } from "@/components/theme-toggle";
import { birthdayDate } from "@/lib/content";

export default function Home() {
  const [heartClicks, setHeartClicks] = useState(0);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground onHeartClick={() => setHeartClicks((count) => count + 1)} />
      <ThemeToggle />
      <EasterEggs heartClicks={heartClicks} />
      <div className="relative z-10">
        <Hero />
        <Countdown birthdayDate={birthdayDate} />
        <StoryTimeline />
        <PhotoGallery />
        <Scoreboard />
        <ReasonsGrid />
        <ComplimentGenerator />
        <HiddenSurprise />
        <LoveLetter />
        <Footer />
      </div>
      <MusicPlayer />
    </main>
  );
}

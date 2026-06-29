"use client";

import { useRef, useState, useCallback } from "react";
import { Play, Pause } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
    setHasStarted(false);
  }, []);

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              See It In Action
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              See Trazo in 60 seconds
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              From QR scan to documented practices. Watch how farmers log
              their growing story and how buyers explore the proof.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Player */}
        <ScrollReveal delay={200} duration={800}>
          <div className="relative mx-auto mt-12 max-w-4xl">
            {/* Glow background */}
            <div
              className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl"
              aria-hidden="true"
            />

            {/* Video container */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5">
              <div
                className="relative aspect-video cursor-pointer"
                onClick={togglePlay}
              >
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  poster="/videos/trazo-demo-poster.jpg"
                  playsInline
                  preload="metadata"
                  onEnded={handleEnded}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                >
                  <source src="/videos/trazo-demo.mp4" type="video/mp4" />
                </video>

                {/* Play/Pause overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    isPlaying && hasStarted
                      ? "opacity-0 hover:opacity-100"
                      : "opacity-100"
                  }`}
                >
                  {/* Dimmed background when not playing */}
                  {!isPlaying && (
                    <div className="absolute inset-0 bg-black/20" />
                  )}

                  {/* Play/Pause button */}
                  <button
                    className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg backdrop-blur-sm transition-transform duration-200 hover:scale-110 hover:bg-primary"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    {isPlaying ? (
                      <Pause size={32} className="ml-0" />
                    ) : (
                      <Play size={32} className="ml-1" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="mt-4 text-center text-sm text-muted-foreground">
              From consumer QR scan to farmer dashboard, the complete Trazo
              experience
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

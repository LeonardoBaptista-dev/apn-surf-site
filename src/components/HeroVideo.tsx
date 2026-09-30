"use client";

import { useEffect, useRef } from "react";

const BASE = "/apn-surf-site/video";

// Background loop for the hero. The poster layer behind it (see .hero-poster in
// globals.css) paints instantly and stays as the fallback when the video is
// skipped: reduced motion, Save-Data, or a failed load.
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (conn?.saveData || reduceMotion) {
      video.removeAttribute("autoplay");
      video.pause();
      video.hidden = true;
      return;
    }

    // React omits the `muted` attribute from static HTML, and iOS refuses to
    // autoplay without it, so set the property and start playback explicitly.
    video.muted = true;
    video.play().catch(() => {
      video.hidden = true;
    });
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={`${BASE}/hero-surf-portrait.mp4`} media="(max-aspect-ratio: 1/1)" type="video/mp4" />
      <source src={`${BASE}/hero-surf-landscape.mp4`} type="video/mp4" />
    </video>
  );
}

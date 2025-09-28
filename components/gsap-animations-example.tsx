"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function GSAPAnimationExample() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const greenRef = useRef<HTMLDivElement | null>(null);
  const blueRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      if (greenRef.current) {
        gsap.fromTo(
          greenRef.current,
          { x: 0, rotate: 0 },
          {
            x: 120,
            rotate: 360,
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      }

      if (blueRef.current) {
        // Subtle float + pulse
        gsap.to(blueRef.current, {
          y: -30,
          scale: 1.1,
          duration: 1.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-4 p-6">
      <div ref={greenRef} className="h-24 w-24 rounded-lg bg-green-400 shadow" />
      <div className="h-24 w-24 rounded-lg bg-purple-400 shadow" />
      <div ref={blueRef} className="h-24 w-24 rounded-lg bg-blue-400 shadow" />
    </div>
  );
}
  
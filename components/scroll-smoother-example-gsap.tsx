"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function GSAPScrollSmootherExample() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const purpleRef = useRef<HTMLDivElement | null>(null);

  let smoother: ScrollSmoother;

  useGSAP(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });

    smoother.effects(
      ".box", {
        speed: 2,
        lag: (i) => i * 1,
    })

    gsap.to(purpleRef.current, {
      scrollTrigger:{
        trigger:purpleRef.current,
        start:"center center",
        markers:true,
        scrub:true,
      },
      rotation: 360,
    })

    ScrollTrigger.create({
      pin:".green",
      start:"top center",
      end:"-200px",
      markers:true,
    })
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <h1 className="title">Scroll Smooth Example</h1>
        <button 
          className=""
        onClick={() => gsap.to( smoother, 
        { 
          scrollTop: smoother.offset(purpleRef.current, "center center"),
          duration: 1,
          ease: "back.out",
        })}>
          JUMP TO PURPLE
        </button>
        <div className="h-[1000px]"></div>
        <div className="flex flex-row items-center gap-10">
          <div className="h-24 w-24 rounded-lg bg-green-400 shadow-sm green box" />
          <div className="h-24 w-24 rounded-lg bg-blue-400 shadow-sm blue box"/>
          <div ref={purpleRef} className="h-24 w-24 rounded-lg bg-purple-400 shadow-sm box"/>
        </div>
        <div className="h-[1000px]"></div>
      </div>
    </div>
  );
}
  
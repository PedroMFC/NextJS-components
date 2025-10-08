"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function GSAPScrollTriggerExample() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const purpleRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".green",
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

    gsap.to(
      ".blue", 
      {
      y: -30,
      scale: 1.1,
      duration: 1.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(purpleRef.current, {
      scrollTrigger:{
        trigger:purpleRef.current,
        start:"top center",
        end:"bottom 100px",
        markers:true,
        // toggleActions:"restart pause reverse pause",
        scrub:1,
      },
      x: 400,
      rotation: 360,
      duration: 4,
    })

    ScrollTrigger.create({
      trigger:purpleRef.current,
      start:"top center",
      end:"bottom 100px",
      markers:true,
      onEnter:()=>{
        console.log("onEnter");
      },
      onEnterBack:()=>{
        console.log("onEnterBack");
      },
      onLeave:()=>{
        console.log("onLeave");
      },
      onLeaveBack:()=>{
        console.log("onLeaveBack");
      },
      scrub:1,
    })

  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-[700px] p-6">
      <div className="h-24 w-24 rounded-lg bg-green-400 shadow-sm green" />
      <div className="h-24 w-24 rounded-lg bg-blue-400 shadow-sm blue" />
      <div ref={purpleRef} className="h-24 w-24 rounded-lg bg-purple-400 shadow-sm" />
      <div className="h-[1000px]"></div>
    </div>
  );
}
  
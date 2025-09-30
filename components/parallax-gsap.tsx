"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from '@gsap/react';
import { City } from "./gallery-hover";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function GSAPParallax({ cities }: { cities: City[] }) {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      content: "#content",
      smooth: true,
      effects: true,
    })

    smoother.effects("img", {speed:"auto"})
  }, []);

  return (
    <div id="content">
      {cities.map((city: City) => (
        <div
          key={city.id}
          className="img-cont"
        >
          <img
            src={String(city.imageSrc)}
            alt={city.name}
            className="imagen"
          />
          
        </div>
      ))}
      <StyleSheet />
    </div>
  );
}
  

function StyleSheet() {
  return (
      <style>{`
      .img-cont {
          position: relative;
          overflow: hidden;
          height: 80vh;
          max-height: 500px;
      }

      .imagen {
          position: absolute;
          width: 100%;
          height: 160%;
          object-fit: cover;
          bottom: 0;
      }
  `}</style>
  )
}
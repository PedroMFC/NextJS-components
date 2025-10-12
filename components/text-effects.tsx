"use client";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function GSAPTextEffects() {
    const heroTexts = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        let duration = 0.75
        let tl = gsap.timeline()
        gsap.set(".hero", { yPercent: 75 })
        heroTexts.current.forEach((text, index) => {
            tl.from(text, {
                duration: duration,
                yPercent: 120,
                scale: 0.6,
                opacity: 0,
                ease: "power3"
            })

            if (index > 0) {
                tl.to(".hero", {
                    yPercent: "-=25",
                    duration: duration,
                    ease: "power2"
                }, "<")
            }
        })
        ScrollTrigger.create({
            trigger: ".hero",
            start: "top 300px",
            end: "bottom bottom",
            animation: tl,
            scrub: 4,
            markers: true
        })
    }, []);

    return (
        <div className="wrapper">
            <div className="guides"></div>
            <div className="hero flex flex-col justify-center items-center">

                <h2 ref={(el) => { heroTexts.current[0] = el }} className="first uppercase font-bold text-[clamp(18px,8vw,100px)] text-blue-600">educator</h2>
                <h2 ref={(el) => { heroTexts.current[1] = el }} className="uppercase font-bold text-[clamp(18px,8vw,100px)] text-blue-600">coach</h2>
                <h2 ref={(el) => { heroTexts.current[2] = el }} className="uppercase font-bold text-[clamp(18px,8vw,100px)] text-blue-600">mentor</h2>
                <h2 ref={(el) => { heroTexts.current[3] = el }} className="uppercase font-bold text-[clamp(18px,8vw,100px)] text-blue-600">consultant</h2>
            </div>

            <section className="h-[100vh] bg-white" />

        </div>

    );
}

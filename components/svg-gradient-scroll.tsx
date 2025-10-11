"use client";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function GSAPSVGGradientScroll() {


    useGSAP(() => {

        const topAni = gsap.timeline()
            .from(".top img", { rotationX: 90, transformOrigin: "50% 0%", duration: 3, ease: "linear" })


        ScrollTrigger.create({
            trigger: ".gradient_trigger.top",
            start: "top bottom",
            end: "bottom bottom",
            animation: topAni,
            scrub: true
        })

        const split = SplitText.create(".second", {
            type: "chars, lines"
        })

        const textAni = gsap.to(split.chars, {
            scale: 1.5,
            duration: 0.2,
            stagger: {
                repeat: 1,
                yoyo: true,
                each: 0.05
            }
        })

        ScrollTrigger.create({
            trigger: ".second_trigger",
            animation: textAni,
            start: "top top",
            end: "top -200px",
            pin: true,
            anticipatePin: 1,
            toggleActions: "play reverse play reverse"
        })

        const bottomAni = gsap.timeline()
            .from(".bottom img", { rotationX: 90, transformOrigin: "50% 0%", duration: 3, ease: "linear" })


        ScrollTrigger.create({
            trigger: ".gradient_trigger.bottom",
            start: "top bottom",
            end: "bottom bottom",
            animation: bottomAni,
            scrub: true
        })

    }, []);

    return (
        <>
            <div className="spacer relative h-[100vh] w-full bg-white flex items-center justify-center">
                <h1 className="m-0 text-black text-[clamp(18px,8vw,100px)]">SCROLL DOWN</h1>
            </div>


            <div className="gradient_trigger top relative w-full aspect-[0.8] overflow-hidden -mb-px">
                <div className="gradient_wrapper absolute inset-0">
                    <img className="block h-full w-full object-cover" src="https://assets.codepen.io/32887/top-gradient.png" alt="" />
                </div>
            </div>

            <div className="spacer second_trigger relative h-[100vh] w-full bg-black flex items-center justify-center">
                <h1 className="second m-0 text-white text-[clamp(18px,8vw,100px)]">PINNED</h1>
            </div>

            <div className="gradient_trigger bottom relative w-full aspect-[0.8] overflow-hidden -mb-px">
                <div className="gradient_wrapper absolute inset-0">
                    <img className="block h-full w-full object-cover" src="https://assets.codepen.io/32887/gradient-bottom-dark.jpg" alt="" />
                </div>

            </div>
        </>
    );
}

"use client";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin)


export default function GSAPSVGGradient() {


    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from("path", { drawSVG: "0%", stagger: 0.3, duration: 0.3, ease: "none" })
            .add("draw")
            .to("path", { drawSVG: "100% 100%", stagger: 0.3, duration: 0.3, ease: "none" }, "+=0.5")
            .add("end")

        const main = gsap.timeline()
        main.add(tl.tweenTo("draw", { duration: 5, ease: "bounce" }))
        main.add(tl.tweenTo("end", { duration: 5, ease: "bounce" }))
        main.add(tl.tweenTo(0, { duration: 10, ease: "bounce" }))

    }, []);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400">
            <defs>
                <linearGradient gradientUnits="userSpaceOnUse" x1="199.665" y1="110.356" x2="199.665" y2="200" id="gradient-0" gradientTransform="matrix(0.046083, 0.998938, -4.172214, 0.192474, 840.683757, -40.732032)">
                    <stop offset="0" style={{ stopColor: "rgb(255, 255, 0)" }}></stop>
                    <stop offset="1" style={{ stopColor: "rgb(255, 0, 0)" }}></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" x1="258.91" y1="200" x2="258.91" y2="353.123" id="gradient-1" gradientTransform="matrix(-0.091378, -0.995816, 1.68495, -0.154616, -183.423882, 512.880013)">
                    <stop offset="0" style={{ stopColor: "rgb(64, 255, 0)" }}></stop>
                    <stop offset="1" style={{ stopColor: "rgb(255, 248, 0)" }}></stop>
                </linearGradient>
                <linearGradient gradientUnits="userSpaceOnUse" x1="302.585" y1="45.968" x2="302.585" y2="223.85" id="gradient-2" gradientTransform="matrix(0.298664, 0.954359, -1.961727, 0.613915, 479.188804, -200.957512)">
                    <stop offset="0" style={{ stopColor: "rgb(0, 71, 255)" }}></stop>
                    <stop offset="1" style={{ stopColor: "rgb(64, 255, 0)" }}></stop>
                </linearGradient>
            </defs>
            <path id="path1" style={{ fill: "none", strokeWidth: 19, stroke: "url(#gradient-0)", paintOrder: "fill" }} d="M 12.25 197.11 C 12.25 197.11 19.945 192.919 33.132 186.379 C 51.34 177.349 80.016 163.841 113.359 150.705 C 221.472 108.112 378.645 69.432 387.08 200"></path>
            <path id="path2" style={{ fill: "none", strokeWidth: 19, stroke: "url(#gradient-1)", paintOrder: "fill" }} d="M 387.08 200 C 400 400 128.64 400 130.3 223.85"></path>
            <path id="path3" style={{ fill: "none", strokeWidth: 19, stroke: "url(#gradient-2)", paintOrder: "fill" }} d="M 130.3 223.85 C 131.74 71.32 521.81 -54.96 470.16 162.07"></path>
        </svg>
    );
}

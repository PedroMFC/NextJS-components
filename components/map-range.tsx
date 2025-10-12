"use client";

import { gsap } from "gsap";
import { useRef } from "react";

export default function GSAPMapRange() {

    const demoRef = useRef<HTMLDivElement>(null)
    const mouseXRef = useRef<HTMLParagraphElement>(null)
    const mouseYRef = useRef<HTMLParagraphElement>(null)

    let center = 300

    demoRef.current?.addEventListener("mousemove", function (e) {
        mouseXRef.current!.textContent = e.offsetX.toString()
        mouseYRef.current!.textContent = e.offsetY.toString()

        let distance = Math.abs(center - e.offsetX)
        let scale = gsap.utils.mapRange(0, center, 4, 1, distance)
        console.log(distance)
        let scale2 = gsap.utils.mapRange(0, 600, 0, 4, e.offsetY)
        console.log(scale2)
        gsap.set(".box", {
            scaleX: scale,
            scaleY: scale2,
        })
    })

    return (
        <div className="relative">
            <h1>Move Mouse (desktop only)</h1>
            <div ref={demoRef} id="demo" className="absolute border border-[#000] w-[600px] h-[600px]">
                <div className="line w-[1px] h-screen absolute top-0 left-[50%] bg-[#000] z-0 pointer-events-none"></div>
                <div className="box absolute top-0 left-[50%] w-[50px] h-[50px] bg-blue z-10 pointer-events-none">
                    <svg viewBox="0 0 16 16">
                        <path d="M14.13 9.11h-12l6-7 6 7z" className="bg-white" />
                        <path d="M6.12 8h4v6h-4z" className="bg-white" />
                    </svg>
                </div>
            </div>
            <p>mouseX <span ref={mouseXRef} className="output" id="mouseX"></span></p>
            <p>mouseY <span ref={mouseYRef} className="output" id="mouseY"></span></p>
        </div>
    );
}

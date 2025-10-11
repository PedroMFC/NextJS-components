"use client";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin)


export default function GSAPSVGDashedLine() {


    useGSAP(() => {
        gsap.to("path", {
            strokeDashoffset: 0,
            duration: 1,
            repeat: -1,
            ease: "none",
        })

    }, []);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 500">
            <path style={{ stroke: "rgb(0, 0, 0); fill: none; stroke-width: 10px; stroke-dasharray: 16, 32; stroke-linecap: round; stroke-dashoffset: 96px;" }} d="M 13.582 240.976 L 281.022 240.056 C 281.022 240.056 304.812 242.636 316.982 228.546 C 329.152 214.456 405.312 121.836 405.312 121.836 C 405.312 121.836 424.982 102.716 437.652 102.176 C 450.322 101.636 537.592 101.056 537.592 101.056"></path>
            <path style={{ stroke: "rgb(0, 0, 0); fill: none; stroke-width: 10; stroke-dasharray: 16, 32; stroke-linecap: round; stroke-dashoffset: 96px;" }} d="M 13.14 240.697 L 539.861 239.777"></path>
            <path style={{ stroke: "rgb(0, 0, 0); fill: none; stroke-width: 10; stroke-dasharray: 16, 32; stroke-linecap: round; stroke-dashoffset: 96px;" }} d="M 13.369 240.98 L 280.809 241.9 C 280.809 241.9 304.599 239.32 316.769 253.41 C 328.939 267.5 405.099 360.12 405.099 360.12 C 405.099 360.12 424.769 379.24 437.439 379.78 C 450.109 380.32 537.379 380.9 537.379 380.9"></path>
            <ellipse style={{ fill: "rgb(216, 216, 216); stroke: rgb(0, 0, 0);" }} cx="511.702" cy="100.779" rx="32.644" ry="32.644"></ellipse>
            <ellipse style={{ fill: "rgb(216, 216, 216); stroke: rgb(0, 0, 0); stroke-width: 1;" }} cx="507.039" cy="240.014" rx="32.644" ry="32.644"></ellipse>
            <ellipse style={{ fill: "rgb(216, 216, 216); stroke: rgb(0, 0, 0); stroke-width: 1;" }} cx="511.036" cy="377.251" rx="32.644" ry="32.644"></ellipse>
        </svg>
    );
}

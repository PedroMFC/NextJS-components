"use client"

import Image from "next/image";
import { City } from "./gallery-hover";
import {
    motion,
    MotionValue,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react"
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance])
}

function MyImage({ city }: { city: City }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref })
    const y = useParallax(scrollYProgress, 300)

    return (
        <div className="flex flex-col gap-2 img-container">
            <div key={city.id} className="relative w-[500px] h-[600px] overflow-hidden rounded-lg shadow-sm" ref={ref}>
                <Image
                    src={city.imageSrc}
                    alt={city.name}
                    fill
                    className="object-cover"
                />
            </div>
            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >{`#00${city.id}`}</motion.h2>
        </div>
    )
}

export default function Parallax({ cities }: { cities: City[] }) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <div id="example" className="flex flex-col gap-6 w-[500px] h-fit">
            {cities.map((city: City) => (
                <MyImage city={city} />
            ))}
            <motion.div className="progress" style={{ scaleX, originX: 0 }} />
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
    return (
        <style>{`
        html {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }


        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: -3px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8df0cc;
            bottom: 50px;
            transform: scaleX(0);
        }
    `}</style>
    )
}
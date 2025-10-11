"use client";

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin)


export default function GSAPInfographAnimation() {


    useGSAP(() => {
        gsap.set(".segment", {
            x: (index) => index * -25,
            y: (index) => index * -25
        })

        gsap.set(".ribbon", { opacity: 1 })

        const frontDuration = 0.5
        const sideDuration = 0.1
        const stagger = frontDuration + sideDuration

        const tl = gsap.timeline()
            .from(".front", {
                clipPath: "polygon(0 0, 0% 0%, 0% 100%, 0% 100%)",
                stagger: stagger,
                duration: frontDuration,
                ease: "none"
            })
            .from(".side", {
                clipPath: "polygon(100% 25%, 100% 25%, 100% 100%, 100% 100%)",
                stagger: stagger,
                duration: sideDuration,
                ease: "none"
            }, frontDuration)
            .from(".arrow", {
                clipPath: "polygon(0 0, 0% 0%, 0% 100%, 0% 100%)"
            })

    }, []);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen w-full">
                <div className="ribbon flex items-center justify-center w-[800px] h-[400px] bg-[radial-gradient(circle_at_0%_0%,_rgb(229_254_255)_0%,_rgba(223,_235,_255,_1)_100%)]">
                    <div className="flex relative translate-x-[25px] translate-y-[50px]">
                        {/* Segment 1 */}
                        <div className="relative w-[125px] h-[75px] segment">
                            <div className="front absolute w-[125px] h-[75px] [clip-path:polygon(0_0,100%_0%,100%_100%,0%_100%)] bg-[#4fcdcc]"></div>
                        </div>

                        {/* Segment 2 */}
                        <div className="relative w-[125px] h-[75px] segment">
                            <div className="side absolute w-[25px] h-[100px] bg-[#777] z-0 [clip-path:polygon(0_0,100%_25%,100%_100%,0_75%)]"></div>
                            <div className="front absolute w-[125px] h-[75px] [clip-path:polygon(0_0,100%_0%,100%_100%,0%_100%)] bg-[#18b6b4]"></div>
                        </div>

                        {/* Segment 3 */}
                        <div className="relative w-[125px] h-[75px] segment">
                            <div className="side absolute w-[25px] h-[100px] bg-[#777] z-0 [clip-path:polygon(0_0,100%_25%,100%_100%,0_75%)]"></div>
                            <div className="front absolute w-[125px] h-[75px] [clip-path:polygon(0_0,100%_0%,100%_100%,0%_100%)] bg-[#37c9ef]"></div>
                        </div>

                        {/* Segment 4 */}
                        <div className="relative w-[125px] h-[75px] segment">
                            <div className="side absolute w-[25px] h-[100px] bg-[#777] z-0 [clip-path:polygon(0_0,100%_25%,100%_100%,0_75%)]"></div>
                            <div className="front absolute w-[125px] h-[75px] [clip-path:polygon(0_0,100%_0%,100%_100%,0%_100%)] bg-[#2c92d5]"></div>
                        </div>

                        {/* Segment 5 */}
                        <div className="relative w-[125px] h-[75px] segment">
                            <div className="side absolute w-[25px] h-[100px] bg-[#777] z-0 [clip-path:polygon(0_0,100%_25%,100%_100%,0_75%)]"></div>
                            <div className="front absolute w-[125px] h-[75px] [clip-path:polygon(0_0,100%_0%,100%_100%,0%_100%)] bg-[#13538a]"></div>
                            <div className="arrow absolute w-[50px] h-[125px] bg-[#13538a] left-[124px] top-[-25px] [clip-path:polygon(0_0,100%_50%,100%_50%,0%_100%)]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


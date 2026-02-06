import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Showcase: React.FC = () => {

    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

    useGSAP(() => {
        if (!isMobile) {
            const timeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: "#showcase",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                }
            });
            timeLine
                .to('.mask img', {
                    transform: 'scale(1.0)'
                }).to('.content', { opacity: 1, y: 0, ease: 'power1.inOut' });
        };


    }, [isMobile])
    return (
        <section id="showcase">
            <div className="media">
                <video className="overflow-y-hidden" src="/videos/game.mp4" autoPlay loop muted playsInline preload="auto" />
                <div className="mask max-h-1080px">
                    <img src="/mask-logo.svg" />
                </div>
            </div>

            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2 className="text-white">Happily ever faster.</h2>

                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                The M5 chip joins M4 Pro and M4 Max to create the most advanced series of chips ever built for a pro laptop. Each chip delivers phenomenal single- and multithreaded CPU performance and faster unified memory — {" "}
                                <span className="section-highlight">
                                    giving you the kind of speed you’ve never thought possible.
                                </span>
                                {" "} And with powerful Neural Accelerators in the M5 chip, you can fly through AI tasks at mind-bending speeds.
                            </p>
                            <p className="section-highlight">Learn more about Apple Intelligence</p>
                        </div>
                    </div>

                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>6x faster</h3>
                            <p>AI performance than M1</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>2x faster</h3>
                            <p>CPU performance than M4</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default Showcase
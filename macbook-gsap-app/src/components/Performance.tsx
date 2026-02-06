import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { performanceImages, performanceImgPositions } from '../constants';
import { useMediaQuery } from 'react-responsive';

const Performance: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Text animation: fade in and move up
        gsap.to('.content p', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.content',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        });

        if (isMobile) return;

        const timeline = gsap.timeline({
            defaults: {
                ease: "power1.inOut",
                duration: 2,
                overwrite: "auto",
            },
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "center center",
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });

        performanceImgPositions.forEach((pos) => {
            if (pos.id === 'p5') return;

            const target = `.${pos.id}`;
            const vars: gsap.TweenVars = {};

            if (pos.left !== undefined) vars.left = `${pos.left}%`;
            if (pos.right !== undefined) vars.right = `${pos.right}%`;
            if (pos.bottom !== undefined) vars.bottom = `${pos.bottom}%`;

            timeline.to(target, vars, 0);
        });
    }, { scope: sectionRef, dependencies: [isMobile] });

    return (
        <section id="performance" ref={sectionRef}>
            <h2 className="section-highlight">Next-level graphics performance. Game On.</h2>

            <div className="wrapper">
                {performanceImages.map(({ id, src }) => (
                    <img key={id} src={src} alt={id} className={id} />
                ))}
            </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="section-highlight">
                        gaming feels more immersive and realistic than ever.
                    </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>

        </section>
    )
}

export default Performance
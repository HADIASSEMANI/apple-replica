import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights.tsx";
import { features } from "../constants/index.ts";
import clsx from "clsx";
import { Suspense, useRef } from "react";
import { Html } from "@react-three/drei";
import MacbookModel from "./models/Macbook.tsx";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "./store";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { Group } from "three";

const ModelScroll: React.FC = () => {
    const groupRef = useRef<Group>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const { setTexture } = useMacbookStore();

    useGSAP(() => {
        // 3D Model Rotation Animation
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: '+=6000',
                scrub: true,
                pin: true,
            }
        });

        if (groupRef.current) {
            timeline
                .call(() => setTexture('/videos/feature-1.mp4'))
                .to('.box1', { opacity: 1, y: 0, duration: 1 })
                .to(groupRef.current.scale, {
                    x: 5,
                    y: 5,
                    z: 5,
                    ease: 'power2.inOut'
                }, '<')
                .to(groupRef.current.position, {
                    y: -5,
                    ease: 'power2.inOut'
                }, '<')
                .to(groupRef.current.rotation, {
                    x: Math.PI / 10,
                    ease: 'power2.inOut'
                }, '<')
                .call(() => setTexture('/videos/feature-2.mp4'))
                .to('.box2', { opacity: 1, y: 0, duration: 1 })

                .call(() => setTexture('/videos/feature-3.mp4'))
                .to('.box3', { opacity: 1, y: 0, duration: 1 })

                .call(() => setTexture('/videos/feature-4.mp4'))
                .to('.box4', { opacity: 1, y: 0, duration: 1 })

                .call(() => setTexture('/videos/feature-5.mp4'))
                .to('.box5', { opacity: 1, y: 0, duration: 1 })
        }

    }, []);

    return (
        <group ref={groupRef}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
            </Suspense>
        </group>
    )
}

const Features = () => {
    return (
        <section id="features">
            <h2 className="section-highlight">See it all in a new light.</h2>

            <Canvas id="f-canvas">
                <StudioLights />
                <ambientLight intensity={0.5} />
                <ModelScroll />
            </Canvas>

            <div className="absolute inset-0">
                {features.map((feature, index) => (
                    <div key={feature.id} className={clsx('box', `box${index + 1}`, feature.styles)}>
                        <img src={feature.icon} alt={feature.highlight} />
                        <p>
                            <span className="text-white">{feature.highlight}</span>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features

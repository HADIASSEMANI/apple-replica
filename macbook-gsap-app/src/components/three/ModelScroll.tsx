import gsap from 'gsap';
import { Suspense, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import type { Group } from "three";
import { Html } from "@react-three/drei";

import MacbookModel from "../models/Macbook.tsx";

import { useMacbookStore, useFeatureScrollStore } from "../store";

const ModelScroll = () => {
    const groupRef = useRef<Group>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const { featureRef } = useFeatureScrollStore();
    const { setTexture } = useMacbookStore();

    useGSAP(() => {
        if (!featureRef?.current || !groupRef.current) return;
        // 3D Model Rotation Animation
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#f-canvas',
                start: 'top top',
                end: '+=8000',
                scrub: true,
                pin: true,
            }
        });


        timeline
            .call(() => setTexture('/videos/feature-1.mp4'))
            .to(groupRef.current.scale, {
                x: 5,
                y: 5,
                z: 5,
            }, '<')
            .to(featureRef.current.scale, {
                x: 18,
                y: 18,
            }, '<')
            .to(featureRef.current.position, {
                y: "+=" + -1,
            }, '<')
            .to(groupRef.current.position, {
                y: -5,
            }, '<')
            .to(groupRef.current.rotation, {
                x: Math.PI / 10,
            }, '<')
            .to(featureRef.current.rotation, {
                z: "+=" + (Math.PI / 2.25),
                duration: 1,
                direction: -1,
            })
            .call(() => setTexture('/videos/feature-2.mp4'))
            .to(featureRef.current.rotation, {
                z: "+=" + (Math.PI / 2.25),
                duration: 1,
            }, '<')
            .call(() => setTexture('/videos/feature-3.mp4'))
            .to(featureRef.current.rotation, {
                z: "+=" + (Math.PI / 2.25),
                duration: 1,
            }, '<')
            .call(() => setTexture('/videos/feature-4.mp4'))
            .to(featureRef.current.rotation, {
                z: "+=" + (Math.PI / 4),
                duration: 1,
            }, '<')
            .call(() => setTexture('/videos/feature-5.mp4'))

    }, [featureRef]);

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
                <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
            </Suspense>
        </group>

    )
}

export default ModelScroll;
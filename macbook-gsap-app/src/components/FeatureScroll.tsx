import { Image } from '@react-three/drei'
import type { Group } from 'three'
import { useEffect, useRef } from 'react'
import { useFeatureScrollStore } from './store';

const FeatureScroll = () => {
    const localRef = useRef<Group>(null);
    const { setFeatureRef } = useFeatureScrollStore();

    useEffect(() => {
        setFeatureRef(localRef);
    }, [setFeatureRef, localRef]);

    return (
        <group ref={localRef}>
            <Image url="/features.svg" transparent scale={[1, 1]} position={[0, 0, -10]} />
        </group >
    )
}

export default FeatureScroll
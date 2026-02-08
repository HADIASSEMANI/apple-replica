import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights.tsx";
import ModelScroll from "./three/ModelScroll.tsx";
import FeatureScroll from "./FeatureScroll.tsx";

const Features = () => {

    return (
        <section id="features">
            <h2 className="text-white">See it all in a new light.</h2>
            <Canvas id="f-canvas">
                <StudioLights />
                <ambientLight intensity={0.5} />
                <ModelScroll />
                <FeatureScroll />
            </Canvas>
        </section>
    )
}

export default Features

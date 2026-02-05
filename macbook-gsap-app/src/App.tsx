import * as React from "react";
import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";
import Showcase from "./components/Showcase.tsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
        </main>
    )
}

export default App
import React, { useEffect } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";
import Showcase from "./components/Showcase.tsx";
import Performance from "./components/Performance.tsx";
import Features from "./components/Features.tsx";
import Highlights from "./components/Highlights.tsx";
import Footer from "./components/Footer.tsx";

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
});

const App: React.FC = () => {

    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            syncTouch: true,
        });
        lenis.on('scroll', ScrollTrigger.update);

        const update = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);

        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
        };

    }, [])

    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Features />
            <Highlights />
            <Footer />
        </main>
    )
}

export default App
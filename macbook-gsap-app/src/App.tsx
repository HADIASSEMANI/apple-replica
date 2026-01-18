import * as React from "react";
import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";

const App: React.FC = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
        </main>
    )
}

export default App
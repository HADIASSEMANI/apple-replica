import * as React from "react";
import NavBar from "./components/NavBar.tsx";
import Hero from "./components/Hero.tsx";

const App: React.FC = () => {
    return (
        <main>
            <NavBar />
            <Hero />
        </main>
    )
}

export default App
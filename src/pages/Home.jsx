import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";


export default function Home() {
    return (
        <div className="flex flex-col bg-gray-950">

            <Hero />
            <div className="relative">
                <About />
                <Skills />
            </div>
        </div>


    )
}
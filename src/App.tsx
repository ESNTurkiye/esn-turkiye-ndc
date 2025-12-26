import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectInfo from "@/components/ProjectInfo";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Hero />
                <ProjectInfo />
                <Team />
            </main>
            <Footer />
        </div>
    )
}
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectInfo from "@/components/ProjectInfo";
import Testimonies from "@/components/Testimonies";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow">
                <Hero />
                <ProjectInfo />
                <Team />
                <Testimonies />
            </main>
            <Footer />
        </div>
    )
}
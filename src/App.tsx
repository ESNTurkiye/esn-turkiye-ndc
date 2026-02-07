import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectInfo from "@/components/ProjectInfo";
import Testimonies from "@/components/Testimonies";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import DocumentHead from "@/components/DocumentHead";

export default function App() {
    return (
        <HelmetProvider>
            <div className="min-h-screen flex flex-col">
                <DocumentHead />
                <Header />
                <main className="grow">
                    <Hero />
                    <ProjectInfo />
                    <Team />
                    <Testimonies />
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
}
import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DocumentHead from "@/components/layout/DocumentHead";
import Hero from "@/components/sections/Hero";
import ProjectInfo from "@/components/sections/ProjectInfo";
import Team from "@/components/sections/Team";
import Testimonies from "@/components/sections/Testimonies";

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

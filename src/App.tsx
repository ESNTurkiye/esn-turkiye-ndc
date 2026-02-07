import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProjectInfo from "@/components/sections/ProjectInfo";
import Team from "@/components/sections/Team";
import Testimonies from "@/components/sections/Testimonies";

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
  );
}

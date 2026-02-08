import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/sections/Hero";
import ProjectInfo from "@/components/sections/ProjectInfo";
import Team from "@/components/sections/Team";
import Testimonies from "@/components/sections/Testimonies";

const HEADER_OFFSET = 100;

export default function HomePage() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash?.slice(1);
        if (!hash) return;
        const id = setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
                const top =
                    el.getBoundingClientRect().top +
                    window.scrollY -
                    (window.innerWidth >= 768 ? HEADER_OFFSET : 80);
                window.scrollTo({ top, behavior: "smooth" });
            }
        }, 100);
        return () => clearTimeout(id);
    }, [location.pathname, location.hash]);

    return (
        <>
            <Hero />
            <ProjectInfo />
            <Team />
            <Testimonies />
        </>
    );
}
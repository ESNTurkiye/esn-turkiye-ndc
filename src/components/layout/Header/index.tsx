import MobileHeader from "./MobileHeader.tsx";
import DesktopHeader from "./DesktopHeader.tsx";
import { SURVEY_URL } from "@/config";

export interface NavigationLink {
    label: string;
    sectionId: string;
    isButton?: boolean;
}

const Header = () => {
    const scrollToSection = (sectionId: string) => {
        if (sectionId === "top" || sectionId === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        if (sectionId === "survey") {
            window.open(SURVEY_URL, "_blank", "noopener,noreferrer");
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = window.innerWidth >= 768 ? 100 : 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const navigationLinks: NavigationLink[] = [
        { label: "HOME", sectionId: "top" },
        { label: "Introduction", sectionId: "introduction" },
        { label: "2024 Edition", sectionId: "report-2024" },
        { label: "The Team", sectionId: "team" },
        { label: "Testimonies", sectionId: "testimonies" },
        { label: "Take the Survey", sectionId: "survey", isButton: true },
    ];

    const desktopNavigation = {
        main: [{ label: "HOME", sectionId: "top" }],
        about: [
            { label: "Introduction", sectionId: "introduction" },
            { label: "2024 Edition", sectionId: "report-2024" },
            { label: "The Team", sectionId: "team" },
            { label: "Testimonies", sectionId: "testimonies" },
        ],
        survey: { label: "Take the Survey", sectionId: "survey" },
    };

    return (
        <>
            <MobileHeader
                navigationLinks={navigationLinks}
                scrollToSection={scrollToSection}
            />
            <DesktopHeader
                scrollToSection={scrollToSection}
                navigationLinks={desktopNavigation}
            />
        </>
    );
};

export default Header;

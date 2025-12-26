import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export interface NavigationLink {
    label: string;
    sectionId: string;
    isButton?: boolean;
}

const Header = () => {
    const scrollToSection = (sectionId: string) => {
        if (sectionId === 'top' || sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = window.innerWidth >= 768 ? 100 : 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    // Shared navigation links for both mobile and desktop
    const navigationLinks: NavigationLink[] = [
        { label: "HOME", sectionId: "top" },
        { label: "Introduction", sectionId: "introduction" },
        { label: "2025 Edition", sectionId: "report-2025" },
        { label: "The Team", sectionId: "team" },
        { label: "Testimonies", sectionId: "testimonies" },
        { label: "Take Survey", sectionId: "survey", isButton: true },
    ];

    // Desktop navigation structure (for dropdown menu)
    const desktopNavigation = {
        main: [
            { label: "HOME", sectionId: "top" },
        ],
        about: [
            { label: "Introduction", sectionId: "introduction" },
            { label: "2025 Edition", sectionId: "report-2025" },
            { label: "The Team", sectionId: "team" },
            { label: "Testimonies", sectionId: "testimonies" },
        ],
        survey: { label: "Take Survey", sectionId: "survey" },
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
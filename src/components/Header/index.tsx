import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
    const scrollToSection = (sectionId: string) => {
        if (sectionId === 'top' || sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = window.innerWidth >= 768 ? 100 : 80; // Desktop için 100px, mobile için 80px
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const mobileNavigationLinks = [
        { label: "HOME", sectionId: "top" },
        { label: "Introduction", sectionId: "introduction" },
        { label: "2025 Edition", sectionId: "report-2025" },
        { label: "The Team", sectionId: "team" },
        { label: "Take Survey", sectionId: "survey" },
    ];

    return (
        <>
            <MobileHeader 
                navigationLinks={mobileNavigationLinks} 
                scrollToSection={scrollToSection} 
            />
            <DesktopHeader 
                scrollToSection={scrollToSection}
            />
        </>
    );
};

export default Header;


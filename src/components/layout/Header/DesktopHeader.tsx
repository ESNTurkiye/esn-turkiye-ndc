import { useState, useEffect } from "react";
import type { NavigationLink } from "./index";
import { SURVEY_URL } from "@/config";

interface DesktopNavigation {
    main: NavigationLink[];
    about: NavigationLink[];
    survey: NavigationLink;
}

interface DesktopHeaderProps {
    scrollToSection: (sectionId: string) => void;
    navigationLinks: DesktopNavigation;
}

const DesktopHeader = ({
    scrollToSection,
    navigationLinks,
}: DesktopHeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`hidden md:block fixed w-full bg-esn-dark-blue z-50 border-b border-esn-dark-blue/20 transition-all duration-300 ease-in-out ${isScrolled
                    ? "shadow-lg shadow-esn-dark-blue/30"
                    : "shadow-md shadow-esn-dark-blue/20"
                }`}
        >
            <div
                className={`container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? "py-2" : "py-3"
                    }`}
            >
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition-opacity"
                >
                    <img
                        src="https://esnturkiye.github.io/esn-assets/images/logos/web-TR-colour-white.png"
                        alt="ESN Türkiye Official Logo - International Student Support"
                        className={`h-14 w-auto object-contain transition-all duration-300 ease-in-out ${isScrolled ? "md:h-12 lg:h-[72px]" : "lg:h-20"
                            }`}
                    />
                    <div className="hidden lg:flex flex-col border-l-2 border-white/30 pl-2 md:pl-3 leading-tight transition-all duration-300 ease-in-out">
                        <span
                            className={`text-white font-display font-bold tracking-wide transition-all duration-300 ease-in-out ${isScrolled ? "text-sm md:text-base" : "text-base md:text-lg"
                                }`}
                        >
                            BARRIERS OF
                        </span>
                        <span
                            className={`text-white font-display font-bold tracking-wide transition-all duration-300 ease-in-out ${isScrolled ? "text-sm md:text-base" : "text-base md:text-lg"
                                }`}
                        >
                            MOBILITY
                        </span>
                        <span
                            className={`text-white/80 font-body text-xs font-normal tracking-normal mt-1 transition-all duration-300 ease-in-out ${isScrolled ? "text-[10px]" : "text-xs"
                                }`}
                        >
                            Research Project by ESN
                        </span>
                    </div>
                </a>

                <nav className="hidden md:block" aria-label="Main navigation">
                    <ul
                        className={`flex items-center space-x-8 text-white font-body font-bold tracking-wider transition-all duration-300 ease-in-out ${isScrolled ? "text-xs md:text-xs lg:text-sm" : "text-xs md:text-sm"
                            }`}
                        role="list"
                    >
                        {navigationLinks.main.map((link) => (
                            <li key={link.sectionId}>
                                <button
                                    onClick={() => scrollToSection(link.sectionId)}
                                    className="relative cursor-pointer py-4 group"
                                    aria-label={`Navigate to ${link.label} section`}
                                >
                                    <span className="relative z-10">{link.label}</span>
                                    <span
                                        className="absolute bottom-2 left-0 right-0 h-1 bg-esn-cyan origin-center scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
                                        aria-hidden="true"
                                    />
                                </button>
                            </li>
                        ))}

                        <li className="relative group py-4">
                            <button
                                className="flex items-center gap-1 cursor-pointer uppercase relative z-10"
                                aria-expanded="false"
                                aria-haspopup="true"
                                aria-label="About menu"
                            >
                                About
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            <div
                                className="absolute top-full left-0 w-48 bg-white shadow-xl shadow-esn-dark-blue/20 rounded-b-lg border-t-2 border-esn-cyan opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50"
                                role="menu"
                            >
                                <ul className="py-2 text-gray-700 font-normal normal-case" role="list">
                                    {navigationLinks.about.map((link, index) => (
                                        <li key={link.sectionId} role="menuitem">
                                            <button
                                                onClick={() => scrollToSection(link.sectionId)}
                                                className={`w-full text-left px-4 py-2 hover:bg-gray-50 hover:text-esn-cyan cursor-pointer transition-colors ${index < navigationLinks.about.length - 1
                                                        ? "border-b border-gray-100"
                                                        : ""
                                                    }`}
                                                aria-label={`Navigate to ${link.label} section`}
                                            >
                                                {link.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>

                        <li className="py-4">
                            <a
                                href={SURVEY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-esn-dark-blue px-6 py-2 rounded-full hover:bg-gray-100 transition shadow-md shadow-esn-dark-blue/15 hover:shadow-lg hover:shadow-esn-dark-blue/25 inline-block"
                                aria-label="Take the Barriers of Mobility survey"
                            >
                                {navigationLinks.survey.label.toUpperCase()}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default DesktopHeader;

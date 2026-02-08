import { useState } from "react";
import type { NavItem } from "@/config/navigation";

interface MobileHeaderProps {
    navItems: NavItem[];
    onNav: (item: NavItem) => void;
    getNavItemKey: (item: NavItem) => string;
}

const MobileHeader = ({
    navItems,
    onNav,
    getNavItemKey,
}: MobileHeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (item: NavItem) => {
        setIsMenuOpen(false);
        onNav(item);
    };

    return (
        <header className="fixed w-full bg-esn-dark-blue shadow-md shadow-esn-dark-blue/20 z-50 border-b border-esn-dark-blue/20 md:hidden">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        onNav({ type: "home", label: "HOME" });
                    }}
                    className="flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                    <img
                        src="https://esnturkiye.github.io/esn-assets/images/logos/web-TR-colour-white.png"
                        alt="ESN Türkiye Official Logo - International Student Support"
                        className="h-14 w-auto object-contain"
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="text-white font-display font-bold tracking-wide text-xs">
                            BARRIERS OF
                        </span>
                        <span className="text-white font-display font-bold tracking-wide text-xs">
                            MOBILITY
                        </span>
                        <span className="text-white/80 font-body text-[9px] font-normal tracking-normal mt-0.5">
                            Research Project by ESN
                        </span>
                    </div>
                </a>

                <button
                    type="button"
                    className="text-white p-1"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                >
                    {isMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            <div
                id="mobile-navigation"
                className={`absolute top-full left-0 w-full bg-white shadow-xl shadow-esn-dark-blue/15 border-b border-gray-100 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <nav className="container mx-auto px-4 py-4" aria-label="Mobile navigation">
                    <ul className="flex flex-col space-y-4" role="list">
                        {navItems.map((item) => (
                            <li key={getNavItemKey(item)}>
                                {item.type === "external" ? (
                                    <button
                                        type="button"
                                        onClick={() => handleClick(item)}
                                        className="bg-esn-dark-blue text-white px-6 py-3 rounded-full hover:bg-blue-900 transition shadow-md shadow-esn-dark-blue/25 hover:shadow-lg hover:shadow-esn-dark-blue/35 w-full font-body font-bold text-sm tracking-wider"
                                        aria-label={`Navigate to ${item.label}`}
                                    >
                                        {item.label.toUpperCase()}
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => handleClick(item)}
                                        className="text-gray-700 font-body font-bold text-sm tracking-wider py-2 block w-full text-left hover:text-esn-cyan transition-colors"
                                        aria-label={`Navigate to ${item.label}`}
                                    >
                                        {item.label}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default MobileHeader;
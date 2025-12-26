import { useState } from "react";

interface MobileHeaderProps {
    navigationLinks: Array<{ label: string; sectionId: string }>;
    scrollToSection: (sectionId: string) => void;
}

const MobileHeader = ({ navigationLinks, scrollToSection }: MobileHeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const onLinkClick = (sectionId: string) => {
        setIsMenuOpen(false);
        scrollToSection(sectionId);
    };

    return (
        <header className="fixed w-full bg-esn-dark-blue shadow-sm z-50 border-b border-esn-dark-blue/20 md:hidden">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <a 
                    href="#" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                    <img 
                        src="/assets/images/logos/web-TR-colour-white.png" 
                        alt="ESN Türkiye Logo" 
                        className="h-14 w-auto object-contain"
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="text-white font-display font-bold tracking-wide text-xs">BARRIERS OF</span>
                        <span className="text-white font-display font-bold tracking-wide text-xs">MOBILITY</span>
                        <span className="text-white/80 font-body text-[9px] font-normal tracking-normal mt-0.5">Research Project by ESN</span>
                    </div>
                </a>

                <button 
                    className="text-white p-1"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            <div 
                className={`absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
                <nav className="container mx-auto px-4 py-4">
                    <ul className="flex flex-col space-y-4">
                        {navigationLinks.map((link) => (
                            <li key={link.label}>
                                {link.sectionId === 'survey' ? (
                                    <button
                                        onClick={() => onLinkClick(link.sectionId)}
                                        className="bg-esn-dark-blue text-white px-6 py-3 rounded-full hover:bg-blue-900 transition shadow-md shadow-blue-900/20 w-full font-body font-bold text-sm tracking-wider"
                                    >
                                        {link.label.toUpperCase()}
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => onLinkClick(link.sectionId)}
                                        className="text-gray-700 font-body font-bold text-sm tracking-wider py-2 block w-full text-left hover:text-esn-cyan transition-colors"
                                    >
                                        {link.label}
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


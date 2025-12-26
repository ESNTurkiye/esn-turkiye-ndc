import { useState, useEffect } from "react";

interface DesktopHeaderProps {
    scrollToSection: (sectionId: string) => void;
}

const DesktopHeader = ({ scrollToSection }: DesktopHeaderProps) => {
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
        <header className={`hidden md:block fixed w-full bg-esn-dark-blue shadow-sm z-50 border-b border-esn-dark-blue/20 transition-all duration-300 ease-in-out ${
            isScrolled ? 'shadow-md' : ''
        }`}>
            <div className={`container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex justify-between items-center transition-all duration-300 ease-in-out ${
                isScrolled ? 'py-2' : 'py-3'
            }`}>
                <div className="flex items-center gap-2 md:gap-3">
                    <img 
                        src="/assets/images/logos/web-TR-colour-white.png" 
                        alt="ESN Türkiye Logo" 
                        className={`h-14 w-auto object-contain transition-all duration-300 ease-in-out ${
                            isScrolled ? 'md:h-12 lg:h-[72px]' : 'lg:h-20'
                        }`}
                    />
                    <div className="hidden lg:flex flex-col border-l-2 border-white/30 pl-2 md:pl-3 leading-none space-y-0 transition-all duration-300 ease-in-out">
                        <span className={`text-white font-display font-bold tracking-wide transition-all duration-300 ease-in-out ${
                            isScrolled ? 'text-sm md:text-base' : 'text-base md:text-lg'
                        }`}>NATIONAL</span>
                        <span className={`text-white font-display font-bold tracking-wide -mt-1 transition-all duration-300 ease-in-out ${
                            isScrolled ? 'text-sm md:text-base' : 'text-base md:text-lg'
                        }`}>DEVELOPMENT</span>
                        <span className={`text-esn-cyan font-display font-bold tracking-wide -mt-1 transition-all duration-300 ease-in-out ${
                            isScrolled ? 'text-sm md:text-base' : 'text-base md:text-lg'
                        }`}>COMMITTEE</span>
                    </div>
                </div>

                <nav className="hidden md:block">
                    <ul className={`flex items-center space-x-8 text-white font-body font-bold tracking-wider transition-all duration-300 ease-in-out ${
                        isScrolled ? 'text-xs md:text-xs lg:text-sm' : 'text-xs md:text-sm'
                    }`}>
                        <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-esn-cyan transition-colors cursor-pointer py-4">HOME</li>
                        
                        {/* ABOUT DROPDOWN */}
                        <li className="relative group py-4">
                            <button className="flex items-center gap-1 hover:text-esn-orange transition-colors cursor-pointer uppercase">
                                About
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>
                            
                            <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-lg border-t-2 border-esn-orange opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                <ul className="py-2 text-gray-700 font-normal normal-case">
                                    <li onClick={() => scrollToSection('introduction')} className="px-4 py-2 hover:bg-gray-50 hover:text-esn-orange cursor-pointer border-b border-gray-100">Introduction</li>
                                    <li onClick={() => scrollToSection('report-2025')} className="px-4 py-2 hover:bg-gray-50 hover:text-esn-orange cursor-pointer border-b border-gray-100">2025 Edition</li>
                                    <li onClick={() => scrollToSection('team')} className="px-4 py-2 hover:bg-gray-50 hover:text-esn-orange cursor-pointer">The Team</li>
                                </ul>
                            </div>
                        </li>

                        <li className="py-4">
                            <button onClick={() => scrollToSection('survey')} className="bg-white text-esn-dark-blue px-6 py-2 rounded-full hover:bg-gray-100 transition shadow-md">
                                TAKE SURVEY
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default DesktopHeader;


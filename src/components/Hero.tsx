// Survey link - will be updated to https://www.limesurvey.org later
const SURVEY_URL = "https://esnsurvey.limesurvey.net/174291?lang=en/";

const Hero = () => {
    return (
        <section id="top" className="relative min-h-[90vh] flex items-center justify-center bg-esn-dark-blue pt-20 overflow-hidden">
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src="https://activities.esn.org/sites/default/files/styles/max_2600x2600/public/img_causes/banner_culture.png.webp?itok=AiFLiAv4"
                    alt="ESN Culture Banner"
                    className="w-full h-full object-cover object-center"
                    style={{ filter: 'brightness(0.5) saturate(0.9)' }}
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-esn-dark-blue/70 via-esn-dark-blue/50 to-esn-dark-blue/60 z-[1]"></div>

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-esn-cyan/10 rounded-full blur-[100px] z-[2]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-esn-light-blue/10 rounded-full blur-[120px] z-[2]"></div>

            <div className="container mx-auto px-4 text-center relative z-10">

                <span className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold mb-6 tracking-[0.2em] shadow-md shadow-white/10 uppercase">
                    Research Project by ESN Türkiye
                </span>

                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-[1.2] sm:leading-tight uppercase break-words px-2">
                    <span>Mobility is a Right</span>
                    <br className="hidden sm:block" />
                    <span className="text-esn-cyan block sm:inline">
                        Not a Privilege
                    </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto font-body font-light">
                    International students face increasing visa barriers. Currently we are identifying, analyzing
                    and reporting these obstacles to influence policy makers. <br />
                    Project Timeline :  19.01.2026-19.02.2026 <br />
                    <span className="font-bold text-white">Your voice matters in this process.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center font-display">
                    <a
                        href={SURVEY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-8 py-4 rounded-lg font-bold tracking-wide shadow-lg shadow-esn-light-blue/25 hover:shadow-xl hover:shadow-esn-light-blue/30 transition-shadow duration-300 uppercase overflow-hidden group bg-esn-light-blue inline-block text-center"
                        aria-label="Share your visa experience story"
                    >
                        <span className="absolute inset-0 bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        <span className="relative z-10 text-white group-hover:text-esn-dark-blue transition-colors duration-300">Take the Survey</span>
                    </a>
                    <button
                        onClick={() => {
                            const element = document.getElementById('report-2025');
                            if (element) {
                                const headerOffset = 100;
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                            }
                        }}
                        className="relative px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-bold tracking-wide shadow-md shadow-white/10 hover:shadow-lg hover:shadow-white/20 transition-shadow duration-300 uppercase overflow-hidden group"
                        aria-label="Read the 2025 Barriers of Mobility report"
                    >
                        <span className="absolute inset-0 bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                        <span className="relative z-10 group-hover:text-esn-dark-blue transition-colors duration-300">Read 2024 Report</span>
                    </button>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <div className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer group" 
                     onClick={() => {
                         const element = document.getElementById('report-2025') || document.querySelector('section:nth-of-type(2)');
                         if (element) {
                             const headerOffset = 100;
                             const elementPosition = element.getBoundingClientRect().top;
                             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                             window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                         }
                     }}>
                    <span className="text-xs font-display uppercase tracking-wider font-semibold">Scroll Down</span>
                    <svg 
                        className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-esn-dark-blue pt-20 overflow-hidden">

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-esn-cyan/10 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-esn-light-blue/10 rounded-full blur-[120px] -z-10"></div>

            <div className="container mx-auto px-4 text-center z-10">

                <span className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold mb-6 tracking-[0.2em] shadow-sm uppercase">
                    Research Project by ESN Türkiye
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight uppercase">
                    Mobility is a Right <br />
                    <span className="text-esn-cyan">
                        Not a Privilege
                    </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto font-body font-light">
                    International students face increasing visa barriers. Currently, we are identifying, analyzing,
                    and reporting these obstacles to influence policy makers. <br />
                    <span className="font-bold text-white">Your voice matters in this process.</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center font-display">
                    <button className="px-8 py-4 bg-esn-cyan text-white rounded-lg font-bold tracking-wide hover:bg-blue-700 transition shadow-lg shadow-esn-cyan/20 uppercase">
                        Share Your Story
                    </button>
                    <button className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-bold tracking-wide hover:bg-white hover:text-esn-dark-blue transition uppercase">
                        Read 2025 Report
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
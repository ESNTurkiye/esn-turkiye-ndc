const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 pt-6 sm:pt-8 md:pt-10 lg:pt-12 font-body text-sm leading-relaxed">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">

                    <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-5">
                        <img
                            src="https://esnturkiye.github.io/esn-assets/images/logos/web-tr-colour-black.png"
                            alt="ESN Türkiye - Erasmus Student Network Türkiye Logo"
                            className="h-14 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                            width="auto"
                            height="64"
                        />
                        <p className="text-gray-700 text-xs sm:text-xs md:text-sm lg:text-base">
                            ESN Türkiye is the national level of the Erasmus Student Network.
                            We are a non-partisan, non-profit, international student organisation.
                            Our mission is to represent international students, thus provide opportunities
                            for cultural understanding and self-development under the principle of
                            <span className="text-esn-dark-blue font-bold italic"> Students Helping Students</span>.
                        </p>
                    <div className="hidden">
                            <a href="#" className="text-gray-600 hover:text-esn-dark-blue underline decoration-gray-400 underline-offset-4 transition">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-5">
                        <div className="pt-2 sm:pt-2 md:pt-0">
                            <h4 className="text-gray-900 font-display uppercase tracking-wide mb-2 text-xs sm:text-xs md:text-sm lg:text-base">Project Governance</h4>
                            <p className="text-gray-700 text-xs sm:text-xs md:text-sm">
                                Barriers of Mobility is a research project managed by the National Development Committee (NDC) of ESN Türkiye.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-5">
                        <div>
                            <h5 className="text-gray-900 font-display uppercase tracking-wide mb-2 sm:mb-3 text-xs sm:text-xs md:text-sm lg:text-base">Follow Us</h5>
                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                <a 
                                    href="https://www.facebook.com/esntr/?locale=tr_TR" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-esn-dark-blue transition-colors"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-6 h-6 sm:w-6 md:w-7 lg:w-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.instagram.com/esnturkiye/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-esn-dark-blue transition-colors"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-6 h-6 sm:w-6 md:w-7 lg:w-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/company/erasmusstudentnetwork-turkey/posts/?feedView=all" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-esn-dark-blue transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-6 h-6 sm:w-6 md:w-7 lg:w-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://x.com/esnturkiye" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-esn-dark-blue transition-colors"
                                    aria-label="Twitter"
                                >
                                    <svg className="w-6 h-6 sm:w-6 md:w-7 lg:w-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="pt-3 sm:pt-4 md:pt-4 border-t border-gray-300 space-y-2">
                            <p className="text-gray-600 text-xs sm:text-xs md:text-sm leading-relaxed">
                                We've taken extra care to reach high accessibility standards. If you have any comment, please let us know.
                            </p>
                            <div>
                                <h6 className="text-gray-900 font-display uppercase tracking-wide mb-1 text-[10px] sm:text-[10px] md:text-xs">
                                    Privacy &amp; Analytics
                                </h6>
                                <p className="text-gray-600 text-[10px] sm:text-[10px] md:text-xs leading-relaxed">
                                    This website uses Google Analytics 4 to collect anonymous, aggregated usage statistics that help us understand how the Barriers of Mobility project is accessed and improve student mobility advocacy. No personally identifiable information is collected, and data is processed in line with ESN Türkiye&apos;s privacy commitments.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-gray-200 py-2 sm:py-2.5 md:py-3 lg:py-3 border-t border-gray-300">
                <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-3 md:gap-4 lg:gap-6 text-[10px] sm:text-[10px] md:text-xs lg:text-sm text-gray-600">

                    <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4">
                        <span className="text-center md:text-left">
                            This platform is made by the <span className="bg-gray-300 px-2 py-1 text-gray-800">WebTeam of ESN Türkiye</span>
                        </span>
                    </div>

                    <div className="flex gap-4 sm:gap-4 md:gap-4 lg:gap-6">
                        <span>&copy; {new Date().getFullYear()} ESN Türkiye</span>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
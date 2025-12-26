const ProjectInfo = () => {
    return (
      <section className="bg-gray-50 text-gray-800 py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
              {/* Grid Card System - Mobile First: Stack vertically, Desktop: Side by side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
                  
                  {/* INTRODUCTION BÖLÜMÜ - Left/Top */}
                  <div id="introduction" className="flex flex-col justify-center">
                      <span className="text-esn-green font-bold tracking-widest text-xs sm:text-sm uppercase mb-2 block">Project Overview</span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6 uppercase text-gray-900">
                          What is <span className="text-esn-dark-blue">Barriers of Mobility?</span>
                      </h2>
                      <p className="text-gray-600 font-body leading-relaxed text-base sm:text-lg">
                          This project aims to detect, analyze, and report visa problems faced by students going from Türkiye and non-EU countries. 
                          Our goal is to reach policy makers with a concrete policy paper based on real data from the Erasmus Generation.
                      </p>
                  </div>
  
                  {/* 2025 EDITION CARD - Right/Bottom */}
                  <div id="report-2025">
                      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 relative overflow-hidden">
                          {/* Subtle background decoration */}
                          <div className="absolute top-0 right-0 w-48 h-48 bg-esn-dark-blue/5 rounded-full blur-3xl -z-10"></div>
                          
                          <div className="text-center relative z-10">
                              <span className="bg-esn-magenta text-white text-xs font-bold px-3 py-1 rounded-full mb-4 sm:mb-6 inline-block">LATEST PUBLICATION</span>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6 uppercase text-gray-900">2025 Edition Report</h2>
                              <p className="text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-10 text-sm sm:text-base md:text-lg">
                                  The previous edition highlighted critical bottlenecks in the appointment systems of consular services. 
                                  Explore the full analysis and the impact of our policy paper presented to the National Agency.
                              </p>
                              
                              <div className="flex justify-center gap-4">
                                  <button className="px-6 sm:px-8 py-3 bg-esn-dark-blue text-white font-bold font-display rounded-lg hover:bg-blue-900 transition uppercase flex items-center gap-2 text-sm sm:text-base">
                                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                      Download Policy Paper
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  };
  
  export default ProjectInfo;
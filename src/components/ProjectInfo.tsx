const ProjectInfo = () => {
    return (
      <section className="bg-gray-50 text-gray-800 py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
                  
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
  
                  <div id="report-2025">
                      <div className="bg-white shadow-lg p-6 sm:p-8 md:p-10 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                          <div className="absolute top-0 right-0 w-48 h-48 bg-esn-dark-blue/5 rounded-full blur-3xl -z-10"></div>
                          
                          <div className="relative z-10">
                              <span className="bg-esn-magenta text-white text-xs font-bold px-3 py-1 mb-4 sm:mb-6 inline-block">LATEST PUBLICATION</span>
                              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6 uppercase text-gray-900">2025 Edition Report</h2>
                              
                              <div className="space-y-4 mb-6 sm:mb-8">
                                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                                      The previous edition of Barriers of Mobility achieved significant milestones in understanding visa challenges faced by the Erasmus Generation.
                                  </p>
                                  
                                  <article className="bg-gray-50 rounded-lg p-4 sm:p-5">
                                      <h3 className="font-display font-bold text-gray-900 mb-3 text-sm sm:text-base uppercase">Key Achievements</h3>
                                      <ul className="space-y-2 text-gray-700 text-sm sm:text-base" role="list">
                                          <li className="flex items-start gap-2">
                                              <svg className="w-5 h-5 text-esn-dark-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                              <span>Analyzed visa rejection rates from <strong>42 countries</strong></span>
                                          </li>
                                          <li className="flex items-start gap-2">
                                              <svg className="w-5 h-5 text-esn-dark-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                              <span>Presented policy paper to the <strong>Turkish National Agency</strong></span>
                                          </li>
                                          <li className="flex items-start gap-2">
                                              <svg className="w-5 h-5 text-esn-dark-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                              <span>Discussed bottlenecks in <strong>appointment systems</strong></span>
                                          </li>
                                      </ul>
                                  </article>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                                  <button 
                                      className="px-6 sm:px-8 py-3 bg-esn-dark-blue text-white font-bold font-display rounded-lg hover:bg-blue-900 transition uppercase flex items-center justify-center gap-2 text-sm sm:text-base"
                                      aria-label="Download the 2025 Barriers of Mobility policy paper"
                                  >
                                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                      Download Policy Paper
                                  </button>
                                  <a 
                                      href="#" 
                                      className="px-6 sm:px-8 py-3 bg-white text-esn-dark-blue font-bold font-display rounded-lg hover:bg-gray-50 transition uppercase flex items-center justify-center gap-2 text-sm sm:text-base border-2 border-esn-dark-blue"
                                      aria-label="Read the full story of the 2025 Barriers of Mobility report"
                                  >
                                      Read the Full Story
                                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                  </a>
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
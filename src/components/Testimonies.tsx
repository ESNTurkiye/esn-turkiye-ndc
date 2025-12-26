const testimonies = [
    {
        id: 1,
        name: "Erasmus Student",
        country: "Germany Destination",
        title: "Appointment delays cost me my semester",
        preview: "I applied for my visa 3 months in advance, but due to the lack of appointment slots at iDATA, I missed the start of the academic year...",
        category: "Appointment Issue"
    },
    {
        id: 2,
        name: "Anonymous",
        country: "Italy Destination",
        title: "Rejected without a clear reason",
        preview: "Despite having all my documents, financial proof, and acceptance letter ready, I received a rejection letter stating article 13...",
        category: "Rejection"
    },
    {
        id: 3,
        name: "PhD Candidate",
        country: "Czechia Destination",
        title: "Waiting for 6 months",
        preview: "The uncertainty is the hardest part. My research project is on hold because the consulate has been processing my application for over...",
        category: "Processing Time"
    }
];

const Testimonies = () => {
    return (
        <section id="testimonies" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-esn-magenta font-bold tracking-widest text-sm uppercase">Voice of Students</span>
                        <h2 className="text-4xl font-display font-bold text-gray-900 mt-2 uppercase">
                            Visa <span className="text-esn-cyan">Testimonies</span>
                        </h2>
                        <p className="text-gray-600 mt-3 text-base max-w-2xl">
                            Real stories from the Erasmus Generation. Read about the challenges faced during the visa process.
                        </p>
                    </div>
                    <a href="#" className="hidden md:block text-esn-dark-blue font-bold hover:underline decoration-2 underline-offset-4" aria-label="View all visa testimonial stories">
                        View All Stories &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
                    {testimonies.map((item) => (
                        <article key={item.id} className="bg-gray-50 border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="mb-4">
                                <span className="bg-esn-orange/10 text-esn-orange text-xs font-bold px-3 py-1 uppercase" aria-label={`Category: ${item.category}`}>
                                    {item.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-display font-bold text-gray-800 mb-3 group-hover:text-esn-dark-blue transition-colors">
                                {item.title}
                            </h3>
                            <blockquote className="text-gray-600 text-sm mb-6 leading-relaxed">
                                "{item.preview}"
                            </blockquote>
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200 mb-4">
                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs font-bold" aria-hidden="true">
                                    {item.name[0]}
                                </div>
                                <div className="text-xs">
                                    <p className="font-bold text-gray-900">{item.name}</p>
                                    <p className="text-gray-500">{item.country}</p>
                                </div>
                            </div>
                            <a 
                                href="#" 
                                className="inline-flex items-center gap-2 text-esn-dark-blue font-bold text-sm hover:text-esn-cyan transition-colors group/link"
                                aria-label={`Read full story: ${item.title}`}
                            >
                                Read Full Story
                                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </article>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="text-esn-dark-blue font-bold hover:underline" aria-label="View all visa testimonial stories">View All Stories &rarr;</a>
                </div>
            </div>
        </section>
    );
};

export default Testimonies;
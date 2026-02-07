import { testimonies } from "@/data/testimonies";

const Testimonies = () => {
    return (
        <section id="testimonies" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-esn-magenta font-bold tracking-widest text-sm uppercase">
                            Voice of Students
                        </span>
                        <h2 className="text-4xl font-display font-bold text-gray-900 mt-2 uppercase">
                            Visa <span className="text-esn-cyan">Testimonies</span>
                        </h2>
                        <p className="text-gray-600 mt-3 text-base max-w-2xl">
                            Real stories from the Erasmus Generation. Read about the
                            challenges faced during the visa process.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="hidden md:block text-esn-dark-blue font-bold hover:underline decoration-2 underline-offset-4"
                        aria-label="View all visa testimonial stories"
                    >
                        View All Stories &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
                    {testimonies.map((item) => (
                        <article
                            key={item.id}
                            className="bg-gray-50 border border-gray-100 p-8 shadow-md shadow-gray-200/30 hover:shadow-xl hover:shadow-esn-dark-blue/15 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="mb-4">
                                <span
                                    className="bg-esn-orange/10 text-esn-orange text-xs font-bold px-3 py-1 uppercase"
                                    aria-label={`Category: ${item.category}`}
                                >
                                    {item.category}
                                </span>
                            </div>
                            <h3 className="text-xl font-display font-bold text-gray-800 mb-3 group-hover:text-esn-dark-blue transition-colors">
                                {item.title}
                            </h3>
                            <blockquote className="text-gray-600 text-sm mb-6 leading-relaxed">
                                &quot;{item.preview}&quot;
                            </blockquote>
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200 mb-4">
                                <div
                                    className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white text-xs font-bold"
                                    aria-hidden="true"
                                >
                                    {item.name[0]}
                                </div>
                                <div className="text-xs">
                                    <p className="font-bold text-gray-900">{item.name}</p>
                                    <p className="text-gray-500">{item.country}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a
                        href="#"
                        className="text-esn-dark-blue font-bold hover:underline"
                        aria-label="View all visa testimonial stories"
                    >
                        View All Stories &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonies;
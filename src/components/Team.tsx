import { useEffect, useState } from "react";
import {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/shared/ui/carousel";

type TeamMember = {
    name: string;
    role: string;
    image?: string;
};

const previousEditionTeam: TeamMember[] = [
    { name: "Gökay", role: "Previous edition" },
    { name: "Merve", role: "Previous edition" },
    { name: "Hazal", role: "Previous edition" },
    { name: "Berker", role: "Previous edition" },
];

const currentTeam: TeamMember[] = [
    {
        name: "Sedanur Demiral",
        role: "NDC Main Chair",
        image: "https://esnturkiye.github.io/esn-assets/images/team/sedanur.jpeg",
    },
    {
        name: "Ömer Çavuşoğlu",
        role: "NDC Survey Team Vice Chair",
        image: "https://esnturkiye.github.io/esn-assets/images/team/omer.jpeg",
    },
    {
        name: "Efe Berke Akkaya",
        role: "ESN Türkiye President",
        image: "https://esnturkiye.github.io/esn-assets/images/team/efe-berke.jpeg",
    },
];

const prTeam: TeamMember[] = [
    { name: "Merve Ceylan", role: "PR team" },
    { name: "Neva Karakoyun", role: "PR team", image: "https://esnturkiye.github.io/esn-assets/images/team/IMG_5641.jpeg" },
];

const webTeam: TeamMember[] = [
    { name: "Ali Görkem Sali", role: "WPA", image: "https://esnturkiye.github.io/esn-assets/images/team/IMG_5640.jpg" },
    { name: "Hakkı Erdem Günal", role: "Project Team Leader", image: "https://esnturkiye.github.io/esn-assets/images/team/IMG_5642.jpg" },
];

const TeamMemberBadge = ({ member }: { member: TeamMember }) => (
    <article className="flex flex-col items-center text-center group">
        <div
            className={`
                w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32
                mb-3 sm:mb-4
                rounded-full 
                border-4 border-white 
                shadow-lg shadow-esn-dark-blue/15 
                flex items-center justify-center 
                overflow-hidden 
                group-hover:border-esn-cyan 
                group-hover:shadow-xl 
                group-hover:shadow-esn-cyan/25 
                transition-all duration-300
                ${member.image ? "bg-gray-200" : "bg-esn-light-blue/10"}
            `}
        >
            {member.image ? (
                <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
            ) : (
                <span className="text-xl sm:text-2xl font-bold text-esn-dark-blue" aria-hidden="true">
                    {member.name[0]}
                </span>
            )}
        </div>
        <h3 className="text-base sm:text-lg font-display font-bold text-gray-900 px-2">
            {member.name}
        </h3>
        <p className="text-esn-magenta text-xs font-bold uppercase tracking-wide mt-1">
            {member.role}
        </p>
    </article>
);

const CAROUSEL_SLIDE_COUNT = 2;

const Team = () => {
    const [api, setApi] = useState<CarouselApi | undefined>(undefined);
    const [current, setCurrent] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!api) return;
        
        const updateState = () => {
            setCurrent(api.selectedScrollSnap());
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        };

        updateState();
        api.on("select", updateState);
        
        return () => {
            api.off("select", updateState);
        };
    }, [api]);

    const scrollPrev = () => api?.scrollPrev();
    const scrollNext = () => api?.scrollNext();

    return (
        <section id="team" className="py-8 sm:py-12 lg:py-16 bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header - Mobile optimized */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <span className="text-esn-dark-blue font-bold tracking-widest text-xs sm:text-sm uppercase">
                        Meet the People
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mt-2 uppercase leading-tight">
                        Behind the <span className="text-esn-cyan block sm:inline">Project: 25/26</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto font-body text-sm sm:text-base px-4">
                        The dedicated team from the National Development Committee working to identify and report mobility barriers.
                    </p>
                </div>

                {/* Current Team - Mobile first grid */}
                <div className="mb-8 sm:mb-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" role="list">
                        {currentTeam.map((member, index) => (
                            <TeamMemberBadge key={index} member={member} />
                        ))}
                    </div>
                </div>

                {/* Other Teams - Carousel Section */}
                <div className="mt-8 sm:mt-12 space-y-6">
                    {/* Carousel Container */}
                    <div className="relative w-full">
                        <Carousel
                            opts={{ 
                                align: "start", 
                                loop: true, 
                                dragFree: false,
                                watchDrag: false
                            }}
                            className="relative w-full"
                            setApi={setApi}
                        >
                            <CarouselContent className="ml-0">
                                {/* Slide 1: Previous Edition Team */}
                                <CarouselItem className="pl-0 basis-full">
                                    <div className="px-2 sm:px-4 py-4 sm:py-6">
                                        <h3 className="text-center sm:text-left text-base sm:text-lg font-display font-bold text-gray-800 uppercase mb-4 sm:mb-6">
                                            Responsibles for Previous Editions
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6" role="list">
                                            {previousEditionTeam.map((member, index) => (
                                                <TeamMemberBadge key={index} member={member} />
                                            ))}
                                        </div>
                                    </div>
                                </CarouselItem>

                                {/* Slide 2: PR & Web Teams */}
                                <CarouselItem className="pl-0 basis-full">
                                    <div className="px-2 sm:px-4 py-4 sm:py-6 space-y-8 sm:space-y-0 sm:flex sm:flex-row sm:gap-8 lg:gap-12">
                                        {/* PR Team */}
                                        <div className="flex-1">
                                            <h3 className="text-center sm:text-left text-base sm:text-lg font-display font-bold text-gray-800 uppercase mb-4 sm:mb-6">
                                                PR Team
                                            </h3>
                                            <div className="grid grid-cols-2 gap-4 sm:gap-6" role="list">
                                                {prTeam.map((member, index) => (
                                                    <TeamMemberBadge key={index} member={member} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Web Team */}
                                        <div className="flex-1">
                                            <h3 className="text-center sm:text-left text-base sm:text-lg font-display font-bold text-gray-800 uppercase mb-4 sm:mb-6">
                                                Web Team
                                            </h3>
                                            <div className="grid grid-cols-2 gap-4 sm:gap-6" role="list">
                                                {webTeam.map((member, index) => (
                                                    <TeamMemberBadge key={index} member={member} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>

                    {/* Controls - Carousel dışında, temiz layout */}
                    <div className="flex items-center justify-center gap-4 pt-2">
                        {/* Previous Button */}
                        <button
                            type="button"
                            onClick={scrollPrev}
                            disabled={!canScrollPrev}
                            aria-label="View previous team members"
                            className={`
                                h-10 w-10 sm:h-11 sm:w-11
                                rounded-full 
                                border-2 border-esn-dark-blue 
                                bg-white text-esn-dark-blue 
                                shadow-md 
                                hover:bg-esn-cyan hover:text-white hover:border-esn-cyan 
                                disabled:opacity-40 disabled:cursor-not-allowed
                                transition-all duration-200
                                flex items-center justify-center
                                ${!canScrollPrev ? 'pointer-events-none' : ''}
                            `}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                className="sm:w-5 sm:h-5"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        {/* Indicators */}
                        <div className="flex items-center gap-2" role="tablist" aria-label="Team slides navigation">
                            {Array.from({ length: CAROUSEL_SLIDE_COUNT }).map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    role="tab"
                                    aria-selected={current === index}
                                    aria-label={`Go to slide ${index + 1}: ${index === 0 ? 'Previous edition team' : 'PR and Web teams'}`}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`
                                        h-2.5 rounded-full transition-all duration-300
                                        ${current === index 
                                            ? "w-8 bg-esn-cyan shadow-md shadow-esn-cyan/30" 
                                            : "w-2.5 bg-gray-300 hover:bg-gray-400"
                                        }
                                    `}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            type="button"
                            onClick={scrollNext}
                            disabled={!canScrollNext}
                            aria-label="View next team members"
                            className={`
                                h-10 w-10 sm:h-11 sm:w-11
                                rounded-full 
                                border-2 border-esn-dark-blue 
                                bg-white text-esn-dark-blue 
                                shadow-md 
                                hover:bg-esn-cyan hover:text-white hover:border-esn-cyan 
                                disabled:opacity-40 disabled:cursor-not-allowed
                                transition-all duration-200
                                flex items-center justify-center
                                ${!canScrollNext ? 'pointer-events-none' : ''}
                            `}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                className="sm:w-5 sm:h-5"
                            >
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
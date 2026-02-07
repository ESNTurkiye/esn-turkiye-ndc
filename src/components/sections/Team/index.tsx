import { useEffect, useState } from "react";
import {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/shared/ui/carousel";
import {
    currentTeam,
    previousEditionTeam,
    prTeam,
    webTeam,
} from "@/data/team";
import { TeamMemberBadge } from "./TeamMemberBadge";
import { TeamCarouselControls } from "./TeamCarouselControls";

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
        <section
            id="team"
            className="py-8 sm:py-12 lg:py-16 bg-gray-50 border-t border-gray-200"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                    <span className="text-esn-dark-blue font-bold tracking-widest text-xs sm:text-sm uppercase">
                        Meet the People
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mt-2 uppercase leading-tight">
                        Behind the{" "}
                        <span className="text-esn-cyan block sm:inline">
                            Project: 25/26
                        </span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto font-body text-sm sm:text-base px-4">
                        The dedicated team from the National Development Committee working
                        to identify and report mobility barriers.
                    </p>
                </div>

                <div className="mb-8 sm:mb-12">
                    <div
                        className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                        role="list"
                    >
                        {currentTeam.map((member, index) => (
                            <TeamMemberBadge key={index} member={member} />
                        ))}
                    </div>
                </div>

                <div className="mt-8 sm:mt-12 space-y-6">
                    <div className="relative w-full">
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                                dragFree: false,
                                watchDrag: false,
                            }}
                            className="relative w-full"
                            setApi={setApi}
                        >
                            <CarouselContent className="ml-0">
                                <CarouselItem className="pl-0 basis-full">
                                    <div className="px-2 sm:px-4 py-4 sm:py-6">
                                        <h3 className="text-center sm:text-left text-base sm:text-lg font-display font-bold text-gray-800 uppercase mb-4 sm:mb-6">
                                            Responsibles for Previous Editions
                                        </h3>
                                        <div
                                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
                                            role="list"
                                        >
                                            {previousEditionTeam.map((member, index) => (
                                                <TeamMemberBadge key={index} member={member} />
                                            ))}
                                        </div>
                                    </div>
                                </CarouselItem>

                                <CarouselItem className="pl-0 basis-full">
                                    <div className="px-2 sm:px-4 py-4 sm:py-6 space-y-8 sm:space-y-0 sm:flex sm:flex-row sm:gap-8 lg:gap-12">
                                        <div className="flex-1">
                                            <h3 className="text-center sm:text-left text-base sm:text-lg font-display font-bold text-gray-800 uppercase mb-4 sm:mb-6">
                                                PR Team
                                            </h3>
                                            <div
                                                className="grid grid-cols-2 gap-4 sm:gap-6"
                                                role="list"
                                            >
                                                {prTeam.map((member, index) => (
                                                    <TeamMemberBadge key={index} member={member} />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-center sm:text-left text-base sm:text-lg font-display font-bold text-gray-800 uppercase mb-4 sm:mb-6">
                                                Web Team
                                            </h3>
                                            <div
                                                className="grid grid-cols-2 gap-4 sm:gap-6"
                                                role="list"
                                            >
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

                    <TeamCarouselControls
                        current={current}
                        canScrollPrev={canScrollPrev}
                        canScrollNext={canScrollNext}
                        onPrev={scrollPrev}
                        onNext={scrollNext}
                        onGoToSlide={(index) => api?.scrollTo(index)}
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;
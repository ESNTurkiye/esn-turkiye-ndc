import { useState } from "react";
import {
    type CarouselApi,
    Carousel,
    CarouselContent,
} from "@/components/shared/ui/carousel";
import { currentTeam } from "@/data/team";
import { TeamCarouselControls } from "./TeamCarouselControls";
import { TeamCarouselSlides } from "./TeamCarouselSlides";
import { TeamMemberBadge } from "./TeamMemberBadge";
import { TeamSectionHeader } from "./TeamSectionHeader";
import { useTeamCarousel } from "./useTeamCarousel";

export default function Team() {
    const [api, setApi] = useState<CarouselApi | undefined>(undefined);
    const { current, canScrollPrev, canScrollNext, scrollPrev, scrollNext, scrollTo } = useTeamCarousel(api);

    return (
        <section
            id="team"
            className="py-8 sm:py-12 lg:py-16 bg-gray-50 border-t border-gray-200"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <TeamSectionHeader />

                <div className="mb-8 sm:mb-12">
                    <div
                        className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                        role="list"
                    >
                        {currentTeam.map((member, index) => (
                            <TeamMemberBadge key={`${member.name}-${index}`} member={member} />
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
                                <TeamCarouselSlides />
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <TeamCarouselControls
                        current={current}
                        canScrollPrev={canScrollPrev}
                        canScrollNext={canScrollNext}
                        onPrev={scrollPrev}
                        onNext={scrollNext}
                        onGoToSlide={scrollTo}
                    />
                </div>
            </div>
        </section>
    );
}

import { CarouselItem } from "@/components/shared/ui/carousel";
import type { TeamMember } from "@/data/team";
import { previousEditionTeam, prTeam, webTeam } from "@/data/team";
import { TeamMemberBadge } from "./TeamMemberBadge";

const SECTION_TITLE_CLASS =
    "text-center sm:text-left text-base sm:text-lg font-display font-bold text-gray-800 uppercase mb-4 sm:mb-6";

function TeamGrid({ members }: { members: TeamMember[] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6" role="list">
            {members.map((member, index) => (
                <TeamMemberBadge key={`${member.name}-${index}`} member={member} />
            ))}
        </div>
    );
}

function PreviousEditionSlide() {
    return (
        <div className="px-2 sm:px-4 py-4 sm:py-6">
            <h3 className={SECTION_TITLE_CLASS}>Responsibles for Previous Editions</h3>
            <TeamGrid members={previousEditionTeam} />
        </div>
    );
}

function PrWebSlide() {
    return (
        <div className="px-2 sm:px-4 py-4 sm:py-6 space-y-8 sm:space-y-0 sm:flex sm:flex-row sm:gap-8 lg:gap-12">
            <div className="flex-1">
                <h3 className={SECTION_TITLE_CLASS}>PR Team</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6" role="list">
                    {prTeam.map((member, index) => (
                        <TeamMemberBadge key={`${member.name}-${index}`} member={member} />
                    ))}
                </div>
            </div>
            <div className="flex-1">
                <h3 className={SECTION_TITLE_CLASS}>Web Team</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6" role="list">
                    {webTeam.map((member, index) => (
                        <TeamMemberBadge key={`${member.name}-${index}`} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function TeamCarouselSlides() {
    return (
        <>
            <CarouselItem className="pl-0 basis-full">
                <PreviousEditionSlide />
            </CarouselItem>
            <CarouselItem className="pl-0 basis-full">
                <PrWebSlide />
            </CarouselItem>
        </>
    );
}

import type { TeamMember } from "@/data/team";

interface TeamMemberBadgeProps {
    member: TeamMember;
}

export const TeamMemberBadge = ({ member }: TeamMemberBadgeProps) => (
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
                <span
                    className="text-xl sm:text-2xl font-bold text-esn-dark-blue"
                    aria-hidden="true"
                >
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
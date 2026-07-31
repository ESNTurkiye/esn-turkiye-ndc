import { TARGET_AUDIENCE, PROJECT_INTRODUCTION } from "./projectInfoData";

function TargetAudienceBadge() {
    return (
        <div className="flex items-center gap-3 text-sm text-gray-500 italic">
            <svg
                className="w-5 h-5 text-esn-magenta shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden
            >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a7 7 0 017 7v1H1v-1a7 7 0 017-7z" />
            </svg>
            <span>{TARGET_AUDIENCE}</span>
        </div>
    );
}

export function ProjectInfoIntroduction() {
    return (
        <div id="introduction" className="flex flex-col justify-center">
            <span className="text-esn-green font-bold tracking-widest text-xs sm:text-sm uppercase mb-2 block">
                {PROJECT_INTRODUCTION.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6 uppercase text-gray-900">
                {PROJECT_INTRODUCTION.title}
            </h2>
            <div className="space-y-6">
                <p className="text-gray-600 font-body leading-relaxed text-base sm:text-lg">
                    {PROJECT_INTRODUCTION.description}
                </p>
                <div className="bg-white border-l-4 border-esn-dark-blue p-4 sm:p-5 shadow-sm shadow-gray-200/50">
                    <h3 className="font-display font-bold text-gray-900 mb-2 text-base sm:text-lg uppercase">
                        {PROJECT_INTRODUCTION.whyItMattersTitle}
                    </h3>
                    <p className="text-gray-600 font-body leading-relaxed text-base sm:text-base">
                        {PROJECT_INTRODUCTION.whyItMattersDescription}
                    </p>
                </div>
                <TargetAudienceBadge />
            </div>
        </div>
    );
}
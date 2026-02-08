import { TARGET_AUDIENCE } from "./projectInfoData";

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
                Project Overview
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6 uppercase text-gray-900">
                What is <span className="text-esn-dark-blue">Barriers of Mobility?</span>
            </h2>
            <div className="space-y-6">
                <p className="text-gray-600 font-body leading-relaxed text-base sm:text-lg">
                    The{" "}
                    <strong className="text-gray-900">
                        &quot;Barriers of Mobility: Visa Issues for Non-EU Students&quot;
                    </strong>{" "}
                    survey focuses on understanding how visa and residence permit procedures
                    affect the mobility experiences of{" "}
                    <strong className="text-gray-900">
                        non-EU students and young people participating in international
                        programmes
                    </strong>{" "}
                    such as Erasmus+ the European Solidarity Corps (ESC), ESN events and other
                    mobility opportunities, with particular attention to{" "}
                    <strong className="text-gray-900">non-EU student mobility</strong> across
                    Europe.
                </p>
                <p className="text-gray-600 font-body leading-relaxed text-base sm:text-lg">
                    By collecting first hand experiences the survey examines the level of
                    information and institutional support provided during visa processes the
                    challenges faced in applications and approvals, processing times,
                    rejection reasons and the overall impact of visa related issues on
                    participants&apos; motivation, satisfaction and programme experience.{" "}
                    <strong className="text-gray-900">
                        The survey aims to identify structural barriers within current
                        mobility systems
                    </strong>{" "}
                    and provide evidence based insights to{" "}
                    <strong className="text-gray-900">
                        improve accessibility, fairness and inclusivity in international
                        mobility for non-EU participants
                    </strong>
                    .
                </p>
                <h3>
                    <span className="text-esn-dark-blue font-bold">2026 Edition Overview</span>
                </h3>
                <p className="text-gray-600 font-body leading-relaxed text-base sm:text-lg">
                    This year&apos;s survey represents a fundamental redesign compared to the
                    previous edition, shifting from a descriptive, experience-based
                    questionnaire to a structured, policy-oriented data collection tool.
                    While last year&apos;s survey primarily documented whether participants
                    faced visa difficulties and how they perceived the process, the new
                    edition systematically analyses how visa and residence permit regimes
                    influence access to mobility, decision-making, financial planning,
                    wellbeing, and perceptions of equality. The scope has been significantly
                    expanded to include full degree students alongside short-term mobility
                    participants, allowing the survey to reflect real and diverse mobility
                    pathways. The new structure captures the entire visa journey—from
                    pre-application motivation and institutional guidance to appointment
                    access, visa appointment delays, costs, processing times, outcomes,
                    appeals, and post-arrival residence permit challenges and residence
                    permit bottlenecks—enabling the identification of concrete bottlenecks
                    and institutional responsibilities. Greater emphasis is placed on the
                    role and quality of support provided by sending institutions, host
                    institutions, consulates, and visa centres, moving beyond simple
                    satisfaction measures toward accountability. Additionally, the survey
                    now explicitly measures the academic, financial, psychological, and
                    equality-related impacts of visa procedures, transforming individual
                    experiences into robust evidence of structural barriers. Overall, the new
                    edition is designed not only to collect feedback, but to generate
                    advocacy-ready data that can support systemic change at institutional,
                    national, and European levels.
                </p>
                <TargetAudienceBadge />
            </div>
        </div>
    );
}
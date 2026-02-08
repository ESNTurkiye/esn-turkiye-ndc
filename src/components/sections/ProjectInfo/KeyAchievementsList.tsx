import { KEY_ACHIEVEMENTS } from "./projectInfoData";

function CheckIcon() {
    return (
        <svg
            className="w-5 h-5 text-esn-dark-blue shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
            />
        </svg>
    );
}

export function KeyAchievementsList() {
    return (
        <article className="bg-gray-50 rounded-lg p-4 sm:p-5 shadow-sm shadow-gray-200/50">
            <h3 className="font-display font-bold text-gray-900 mb-3 text-sm sm:text-base uppercase">
                Key Achievements of the Survey
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-4 italic">
                The Barriers of Mobility: Visa Issues for Non-EU Students survey represents
                an important step toward understanding and addressing visa related
                challenges in international mobility.
            </p>
            <ul className="space-y-2.5 text-gray-700 text-sm sm:text-base" role="list">
                {KEY_ACHIEVEMENTS.map((item, i) => {
                    const [title, ...descParts] = item.split(": ");
                    const description = descParts.join(": ");
                    return (
                        <li key={i} className="flex items-start gap-2">
                            <CheckIcon />
                            <span>
                                <strong>{title}:</strong> {description}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}
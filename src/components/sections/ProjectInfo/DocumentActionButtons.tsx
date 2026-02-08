import { DOCUMENT_CONFIG } from "./projectInfoData";

function DocumentIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
        </svg>
    );
}

interface DocumentActionButtonsProps {
    onPolicyClick: () => void;
    onSurveyClick: () => void;
}

export function DocumentActionButtons({
    onPolicyClick,
    onSurveyClick,
}: DocumentActionButtonsProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button
                onClick={onPolicyClick}
                className="px-6 sm:px-8 py-3.5 sm:py-3 bg-esn-dark-blue text-white font-bold font-display rounded-lg hover:bg-blue-900 active:bg-blue-950 transition shadow-md shadow-esn-dark-blue/25 hover:shadow-lg hover:shadow-esn-dark-blue/35 uppercase flex items-center justify-center gap-2 text-sm sm:text-base touch-manipulation"
                aria-label={`View the ${DOCUMENT_CONFIG.policyPaper.modalTitle}`}
            >
                <DocumentIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>{DOCUMENT_CONFIG.policyPaper.buttonLabel}</span>
            </button>
            <button
                onClick={onSurveyClick}
                className="px-6 sm:px-8 py-3.5 sm:py-3 bg-white text-esn-dark-blue font-bold font-display rounded-lg hover:bg-gray-50 active:bg-gray-100 transition shadow-sm shadow-esn-dark-blue/10 hover:shadow-md hover:shadow-esn-dark-blue/20 uppercase flex items-center justify-center gap-2 text-sm sm:text-base border-2 border-esn-dark-blue touch-manipulation"
                aria-label={`View the ${DOCUMENT_CONFIG.surveyReport.modalTitle}`}
            >
                <span>{DOCUMENT_CONFIG.surveyReport.buttonLabel}</span>
                <DocumentIcon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            </button>
        </div>
    );
}
const CAROUSEL_SLIDE_COUNT = 2;

interface TeamCarouselControlsProps {
    current: number;
    canScrollPrev: boolean;
    canScrollNext: boolean;
    onPrev: () => void;
    onNext: () => void;
    onGoToSlide: (index: number) => void;
}

export const TeamCarouselControls = ({
    current,
    canScrollPrev,
    canScrollNext,
    onPrev,
    onNext,
    onGoToSlide,
}: TeamCarouselControlsProps) => (
    <div className="flex items-center justify-center gap-4 pt-2">
        <button
            type="button"
            onClick={onPrev}
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
        ${!canScrollPrev ? "pointer-events-none" : ""}
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

        <div
            className="flex items-center gap-2"
            role="tablist"
            aria-label="Team slides navigation"
        >
            {Array.from({ length: CAROUSEL_SLIDE_COUNT }).map((_, index) => (
                <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-selected={current === index}
                    aria-label={`Go to slide ${index + 1}: ${index === 0 ? "Previous edition team" : "PR and Web teams"}`}
                    onClick={() => onGoToSlide(index)}
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

        <button
            type="button"
            onClick={onNext}
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
        ${!canScrollNext ? "pointer-events-none" : ""}
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
);
import ReactGA from "react-ga4";

export function useAnalytics() {
    const trackDocumentAction = (
        action: "view" | "download",
        fileName: string
    ): void => {
        ReactGA.event({
            category: "Documents",
            action: `${action}_${fileName}`,
        });
    };

    const trackButtonClick = (buttonName: string, location: string): void => {
        ReactGA.event({
            category: "Engagement",
            action: `click_${buttonName}`,
            label: location,
        });
    };

    return { trackDocumentAction, trackButtonClick };
}
import ReactGA from "react-ga4";
import { ANALYTICS } from "@/config/analytics";

const { categories } = ANALYTICS;

export function useAnalytics() {
    const trackDocumentAction = (
        action: "view" | "download",
        fileName: string
    ): void => {
        ReactGA.event({
            category: categories.documents,
            action: `${action}_${fileName}`,
        });
    };

    const trackButtonClick = (buttonName: string, location: string): void => {
        ReactGA.event({
            category: categories.engagement,
            action: `click_${buttonName}`,
            label: location,
        });
    };

    /** Track blog list page view (/blog). */
    const trackBlogListView = (): void => {
        ReactGA.event({
            category: categories.blog,
            action: "view_list",
            label: "blog",
        });
    };

    /** Track single blog post view (/blog/:slug). */
    const trackBlogPostView = (slug: string, title?: string): void => {
        ReactGA.event({
            category: categories.blog,
            action: "view_post",
            label: slug,
        });
        ReactGA.gtag("event", "blog_post_view", {
            post_slug: slug,
            post_title: title ?? slug,
        });
    };

    return {
        trackDocumentAction,
        trackButtonClick,
        trackBlogListView,
        trackBlogPostView,
    };
}
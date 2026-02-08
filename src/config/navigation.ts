export type NavItemType = "home" | "route" | "section" | "external";

export interface NavItemBase {
    label: string;
}

export interface NavItemHome extends NavItemBase {
    type: "home";
}

export interface NavItemRoute extends NavItemBase {
    type: "route";
    path: string;
}

export interface NavItemSection extends NavItemBase {
    type: "section";
    sectionId: string;
}

export interface NavItemExternal extends NavItemBase {
    type: "external";
    url: string;
}

export type NavItem =
    | NavItemHome
    | NavItemRoute
    | NavItemSection
    | NavItemExternal;

export function getNavItemKey(item: NavItem): string {
    switch (item.type) {
        case "home":
            return "home";
        case "route":
            return item.path;
        case "section":
            return item.sectionId;
        case "external":
            return item.url;
        default:
            return (item as NavItemBase).label;
    }
}

export const HOME_SECTION_IDS = [
    "top",
    "introduction",
    "report-2025",
    "team",
    "testimonies",
] as const;

export const NAV_MAIN: NavItem[] = [{ type: "home", label: "HOME" }];

export const NAV_ABOUT: NavItem[] = [
    { type: "section", label: "Introduction", sectionId: "introduction" },
    { type: "section", label: "2024 Edition", sectionId: "report-2025" },
    { type: "section", label: "The Team", sectionId: "team" },
    { type: "section", label: "Testimonies", sectionId: "testimonies" },
    { type: "route", label: "Blog", path: "/blog" },
];

export const NAV_SURVEY: NavItem = {
    type: "external",
    label: "Take the Survey",
    url: "",
};

export function getMobileNavItems(surveyUrl: string): NavItem[] {
    const surveyItem: NavItemExternal = {
        type: "external",
        label: NAV_SURVEY.label,
        url: surveyUrl,
    };
    return [...NAV_MAIN, ...NAV_ABOUT, surveyItem];
}
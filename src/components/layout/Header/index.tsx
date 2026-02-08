import { useNavigate, useLocation } from "react-router-dom";
import MobileHeader from "./MobileHeader.tsx";
import DesktopHeader from "./DesktopHeader.tsx";
import { SURVEY_URL } from "@/config";
import type { NavItem } from "@/config/navigation";
import {
    NAV_MAIN,
    NAV_ABOUT,
    NAV_SURVEY,
    getMobileNavItems,
    getNavItemKey,
} from "@/config/navigation";

const HEADER_OFFSET = 100;

function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = window.innerWidth >= 768 ? HEADER_OFFSET : 80;
        const top =
            element.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: "smooth" });
    }
}

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const isHome = pathname === "/";

    const handleNav = (item: NavItem) => {
        switch (item.type) {
            case "home":
                if (!isHome) navigate("/");
                else window.scrollTo({ top: 0, behavior: "smooth" });
                break;
            case "route":
                navigate(item.path);
                break;
            case "section":
                if (isHome) {
                    scrollToSection(item.sectionId);
                } else {
                    navigate(`/#${item.sectionId}`, { replace: false });
                }
                break;
            case "external":
                window.open(item.url, "_blank", "noopener,noreferrer");
                break;
            default:
                break;
        }
    };

    const desktopSurveyItem: NavItem = {
        type: "external",
        label: NAV_SURVEY.label,
        url: SURVEY_URL,
    };
    const mobileNavItems = getMobileNavItems(SURVEY_URL);

    return (
        <>
            <MobileHeader
                navItems={mobileNavItems}
                onNav={handleNav}
                getNavItemKey={getNavItemKey}
            />
            <DesktopHeader
                mainItems={NAV_MAIN}
                aboutItems={NAV_ABOUT}
                surveyItem={desktopSurveyItem}
                onNav={handleNav}
                getNavItemKey={getNavItemKey}
            />
        </>
    );
};

export default Header;
export type { NavItem };

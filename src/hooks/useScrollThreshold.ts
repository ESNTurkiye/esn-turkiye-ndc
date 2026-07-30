import { useState, useEffect } from "react";

/**
 * Tracks whether the page has scrolled beyond a given threshold (in px).
 * Default threshold is 100px.
 */
export function useScrollThreshold(threshold = 100): boolean {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold);
        };

        handleScroll(); // set initial value
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return isScrolled;
}

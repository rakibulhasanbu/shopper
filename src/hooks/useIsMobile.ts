import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = "(max-width: 768px)";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia(MOBILE_BREAKPOINT).matches;
        }
        return false;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);

        const handleChange = () => setIsMobile(mediaQuery.matches);

        handleChange();

        mediaQuery.addEventListener("change", handleChange);

        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return isMobile;
};

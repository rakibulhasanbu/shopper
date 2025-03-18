"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

import { ThemeProviderProps, useTheme } from "next-themes";

import setGlobalColorTheme, { Theme, ThemeColors } from "@/lib/theme-colors";

interface ThemeColorStateParams {
    themeColor: ThemeColors;
    setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}

const ThemeContext = createContext<ThemeColorStateParams>({} as ThemeColorStateParams);

const DEFAULT_THEME_COLOR = Theme.Blue;

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
    const getSavedThemeColor = () => {
        if (typeof window === "undefined") return DEFAULT_THEME_COLOR;
        try {
            return (localStorage.getItem("themeColor") as ThemeColors) || DEFAULT_THEME_COLOR;
        } catch (error) {
            console.error(error);
            return DEFAULT_THEME_COLOR as ThemeColors;
        }
    };

    const [themeColor, setThemeColor] = useState<ThemeColors>(DEFAULT_THEME_COLOR);
    const [isMounted, setIsMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setThemeColor(getSavedThemeColor());
        setIsMounted(true);
    }, []);

    useEffect(() => {
        localStorage.setItem("themeColor", themeColor);
        setGlobalColorTheme(theme as "light" | "dark", themeColor);

        if (!isMounted) {
            setIsMounted(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [themeColor, theme]);

    if (!isMounted) {
        return null;
    }

    return <ThemeContext.Provider value={{ themeColor, setThemeColor }}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
    return useContext(ThemeContext);
}

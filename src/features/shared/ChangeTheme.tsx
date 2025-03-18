"use client";

import { useEffect } from "react";

import { useThemeContext } from "@/features/shared/theme-data-provider";

import { ThemeColors } from "@/lib/theme-colors";

const ChangeTheme = ({ theme }: { theme: ThemeColors }) => {
    const { setThemeColor } = useThemeContext();

    useEffect(() => {
        setThemeColor(theme);
    }, [theme, setThemeColor]);

    return null;
};

export default ChangeTheme;

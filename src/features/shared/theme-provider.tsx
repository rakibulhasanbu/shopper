"use client";

import * as React from "react";

import ThemeDataProvider from "@/features/shared/theme-data-provider";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange {...props}>
            <ThemeDataProvider>{children}</ThemeDataProvider>
        </NextThemesProvider>
    );
}

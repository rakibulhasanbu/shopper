"use client";

import React from "react";

import { ThemeProvider } from "@/features/shared/theme-provider";
import { AlertProvider } from "@/providers/AlertProvider";

import { Toaster } from "@/components/ui/sonner";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <AlertProvider>
                <Toaster position="top-right" />
                {children}
            </AlertProvider>
        </ThemeProvider>
    );
};

import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";

import { seoData } from "@/data/metadata";

import "./globals.css";

import { Providers } from "@/providers";

const notoSansBengali = Noto_Sans_Bengali({
    subsets: ["bengali"],
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap",
    variable: "--font-bengali",
});

export const metadata: Metadata = seoData;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${notoSansBengali.variable}`} suppressHydrationWarning>
            <body className={`${notoSansBengali.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

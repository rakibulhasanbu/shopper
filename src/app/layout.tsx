import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";

import { seoData } from "@/data/metadata";

import "./globals.css";

// import ThirdParties from "@/lib/ThirdParties";

const hindSiliguri = Hind_Siliguri({
    subsets: ["latin", "bengali"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-hind-siliguri",
});

export const metadata: Metadata = seoData;

const Mode = "light";
// const Mode = "dark";

const Theme = "green";
// const Theme = "purple";
// const Theme = "zinc";
// const Theme = "blue";
// const Theme = "orange";
// const Theme = "rose";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${Mode} ${Theme} ${hindSiliguri.variable}`} suppressHydrationWarning>
            {/* <ThirdParties /> */}
            <body className={`${hindSiliguri.className} antialiased`}>{children}</body>
        </html>
    );
}

import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";

import { seoData } from "@/data/metadata";

import "./globals.css";

import { Providers } from "@/providers";

// import ThirdParties from "@/lib/ThirdParties";

const hindSiliguri = Hind_Siliguri({
    subsets: ["bengali"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-siliguri",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = seoData;

const Mode = "light";
// const Mode = "dark";

// const Theme = "green";
// const Theme = "purple";
// const Theme = "zinc";
// const Theme = "blue";
const Theme = "orange";
// const Theme = "rose";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={`${Mode} ${Theme} ${inter.variable} ${hindSiliguri.variable} `} suppressHydrationWarning>
            {/* <ThirdParties /> */}
            <body className={`${inter.className} ${hindSiliguri.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";

import { seoData } from "@/data/metadata";

import "./globals.css";

import { Providers } from "@/providers";

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={`${inter.variable} ${hindSiliguri.variable}`} suppressHydrationWarning>
            {/* <ThirdParties /> */}
            <body className={`${inter.className} ${hindSiliguri.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

import config from "@/config";

export const seoData = {
    metadataBase: new URL(config.serverUrl),
    title: {
        default: config.websiteName || "Hattbar - Stay Healthy With Nature",
        template: `%s | ${config.websiteName || "Hattbar"}`,
    },
    description:
        "Hattbar - Stay Healthy with nature. Your trusted source for natural and healthy products in Bangladesh",
    keywords: [
        "hattbar",
        "natural products",
        "healthy living",
        "bangladesh",
        "online shopping",
        "organic products",
        "wellness",
        "organic",
        "organic food",
        "natural remedies",
        "herbal products",
        "natural health",
        "natural healing",
        "natural medicine",
        "natural supplements",
        "natural remedies",
        "natural remedies for health",
        "natural remedies for skin",
        "natural remedies for hair",
        "natural remedies for weight loss",
        "natural remedies for sleep",
        "natural remedies for stress",
        "natural remedies for immunity",
        "natural remedies for energy",
        "natural remedies for brain",
        "natural remedies for heart",
        "natural remedies for liver",
        "natural remedies for kidney",
        "natural remedies for diabetes",
        "natural remedies for cancer",
        "natural remedies for asthma",
        "natural remedies for arthritis",
        "natural remedies for cholesterol",
        "natural remedies for blood pressure",
        "natural remedies for blood sugar",
        "natural remedies for cholesterol",
        "natural remedies for blood sugar",
        "natural remedies for cholesterol",
    ],
    authors: [{ name: "Hattbar" }],
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        locale: "bn_BD",
        siteName: config.websiteName || "Hattbar",
    },
    twitter: {
        card: "summary_large_image",
        site: "@hattbar",
    },
};

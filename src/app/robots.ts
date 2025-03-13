import type { MetadataRoute } from "next";

import config from "@/config";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/products", "/products/:slug", "/cart", "/checkout", "/privacy-policy", "/terms-conditions"],
            disallow: [],
        },

        sitemap: `${config.clientUrl}/sitemap.xml`,
    };
}

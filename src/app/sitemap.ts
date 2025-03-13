import type { MetadataRoute } from "next";

import { getProducts } from "@/actions/product-actions";
import config from "@/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const products = await getProducts();

    const sitemap =
        products?.data?.map((product) => ({
            url: `${config.clientUrl}/products/${product.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
        })) ?? [];

    return [
        {
            url: `${config.clientUrl}/products`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
        },
        {
            url: `${config.clientUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
        },

        {
            url: `${config.clientUrl}/terms-conditions`,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
        },

        ...sitemap,
    ];
}

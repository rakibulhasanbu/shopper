import { ResponseObject } from "@/types";

import { ILandingPage } from "@/types/landing-page-type";
import { CustomFetch } from "@/lib/CustomFetch";

export const getLandingPageBySlug = async (slug: string) => {
    const product = await CustomFetch<ResponseObject<ILandingPage>>(`/shopLayout/details/${slug}`);
    return product;
};

"use server";

import { PaginatedResponse } from "@/types";

import { Shop } from "@/types/shop-type";
import { CustomFetch } from "@/lib/CustomFetch";

export const getShops = async () => {
    const shops = await CustomFetch<PaginatedResponse<Shop>>(`/shop`);

    if (!shops?.data) {
        return { data: [], total: 0, skip: 0, limit: 0 };
    }
    return shops;
};

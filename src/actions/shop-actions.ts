"use server";

import { defaultPaginatedData, PaginatedResponse } from "@/types";

import { Shop } from "@/types/shop-type";
import { CustomFetch } from "@/lib/CustomFetch";

export const getShops = async () => {
    const response = await CustomFetch<PaginatedResponse<Shop>>(`/shop`);

    if (!response?.success) {
        return defaultPaginatedData;
    }
    return response;
};

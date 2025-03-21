"use server";

import { getQueryString } from "@/lib";
import { defaultPaginatedData, PaginatedResponse, QueryParams, ResponseObject } from "@/types";

import { Category, Product } from "@/types/product-type";
import { CustomFetch } from "@/lib/CustomFetch";

export const getProducts = async (params?: QueryParams) => {
    const products = await CustomFetch<PaginatedResponse<Product>>(`/product${getQueryString(params)}`);

    if (!products?.data) {
        return defaultPaginatedData;
    }
    return products;
};

export const getProductById = async (id: string) => {
    const product = await CustomFetch<ResponseObject<Product>>(`/product/${id}`);
    return product;
};

export const getProductBySlug = async (slug: string) => {
    const product = await CustomFetch<ResponseObject<Product>>(`/product/product-details/${slug}`);
    return product;
};

export const getCategories = async () => {
    const response = await CustomFetch<PaginatedResponse<Category>>(`/category`);

    if (!response?.success) {
        return defaultPaginatedData;
    }

    return response;
};

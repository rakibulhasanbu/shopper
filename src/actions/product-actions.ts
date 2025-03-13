"use server";

import config from "@/config";
import { PaginatedResponse, ResponseObject } from "@/types";

import { Product } from "@/types/product-type";
import { CustomFetch } from "@/lib/CustomFetch";

export const getProducts = async () => {
    const products = await CustomFetch<PaginatedResponse<Product>>(`/product?shopName=${config.shopName}`, {
        cache: "no-store",
    });

    if (!products?.data) {
        return { data: [], total: 0, skip: 0, limit: 0 };
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

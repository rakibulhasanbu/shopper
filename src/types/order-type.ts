import { Product, ProductVariant } from "@/types/product-type";

export type Order = {
    shopId: string;
    orderItems: { productId: string; productVariantId?: string; quantity: number }[];
    customerName: string;
    customerPhoneNumber: string;
    customerAddress: string;
    orderNumber?: string;
};

export type OrderResponse = {
    id: string;
    shopId: string;
    orderItems: {
        id: string;
        productId: string;
        productVariant?: ProductVariant;
        quantity: number;
        product: Product;
    }[];
    customerName: string;
    customerPhoneNumber: string;
    customerAddress: string;
    orderNumber?: string;
    createdAt: string;
    status: string;
    totalAmount: number;
    paymentMethod: string;
    paymentStatus: string;
    paymentId: string;
    updatedAt: string;
};

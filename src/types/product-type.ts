export type ProductVariant = {
    id: string;
    name: string;
    price: number;
    discountPrice: number;
    productId: string;
    createdAt: string;
    updatedAt: string;
};

export type Category = {
    id: string;
    name: string;
    shopId: string;
    keywords: string;
    updatedAt: string;
    createdAt: string;
};

export type Product = {
    id: string;
    slug: string;
    name: string;
    banglaName: string;
    description: string;
    price: number | null;
    discountPrice: number | null;
    photoURL: string;
    keywords: string;
    stock: number;
    createdAt: string;
    updatedAt: string;
    shopId: string;
    categoryId: string;
    category: Category;
    productVariant: ProductVariant[];
};

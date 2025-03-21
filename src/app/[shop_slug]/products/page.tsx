import { Metadata } from "next";

import { getProducts } from "@/actions/product-actions";
import ProductCard from "@/features/products/ProductCard";
import PageTopBar from "@/features/shared/PageTopBar";
import { Params } from "@/types";

export const metadata: Metadata = {
    title: "সকল প্রডাক্ট | Natural Products Collection",
    description:
        "Browse our complete collection of natural and healthy products at Hattbar. Find organic, wellness, and lifestyle products.",
    openGraph: {
        title: "সকল প্রডাক্ট - Natural Products Collection",
        description: "Browse our complete collection of natural and healthy products at Hattbar",
        type: "website",
        images: ["/products-og.jpg"],
    },
    alternates: {
        canonical: "/products",
    },
};

export const revalidate = 60;

const Products = async ({ params }: { params: Params<"shop_slug"> }) => {
    const { shop_slug } = await params;
    const products = await getProducts({ shopName: shop_slug });

    return (
        <div>
            <PageTopBar title="সকল প্রডাক্ট" />

            <div className="width py-6 pb-8 max-sm:px-3 lg:py-8 lg:pb-16">
                <div className="flex items-center justify-between pb-4 lg:pb-6">
                    <h2 className="uppercase lg:text-xl">Showing {products?.data?.length} Results</h2>
                </div>

                <div className="grid min-h-[70dvh] grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
                    {products?.data?.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
            </div>
        </div>
    );
};

export default Products;

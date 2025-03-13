import { Suspense } from "react";
import { Metadata } from "next";

import { getProductBySlug } from "@/actions/product-actions";
import config from "@/config";
import ProductVariantSelector from "@/features/products/ProductVariantSelector";
import ShowPrice from "@/features/products/ShowPrice";
import { Params } from "@/types";
import { Loader } from "lucide-react";

import { Product } from "@/types/product-type";
import { Separator } from "@/components/ui/separator";
import CustomTab from "@/components/CustomTab";
import { Editor } from "@/components/editor";
import ZoomImage from "@/components/ZoomImage";

// export async function generateStaticParams() {
//     const response = await getProducts();
//     const products = response?.data || [];

//     return products.map((product) => ({
//         slug: product.slug,
//     }));
// }

export async function generateMetadata({ params }: { params: Params<"slug"> }): Promise<Metadata> {
    const { slug } = await params;
    const response = await getProductBySlug(slug);
    const product = response?.data;

    if (!product) {
        return {
            title: "Product Not Found",
            description: "The requested product could not be found",
        };
    }

    return {
        title: `${product.banglaName} | ${product.name}`,
        description: product.description || "Discover this amazing natural product at Ecory",
        openGraph: {
            title: product.banglaName,
            description: product.description,
            images: [
                {
                    url: product.photoURL || "",
                    width: 800,
                    height: 600,
                    alt: product.name || "",
                },
            ],
            type: "website",
        },
        alternates: {
            canonical: `/products/${product.slug}`,
        },
    };
}

function generateProductJsonLd(product: Product) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product?.name,
        description: product?.description,
        image: product?.photoURL,

        offers: {
            "@type": "Offer",
            price: product?.discountPrice,
            priceCurrency: "BDT",
            availability: product?.stock > 0 ? "InStock" : "OutOfStock",
            url: `/products/${product?.slug}`,
        },
    };
}

export const revalidate = 300;

const Page = async (props: { params: Params<"slug"> }) => {
    const { slug } = await props.params;

    const response = await getProductBySlug(slug);

    const product = response?.data;

    if (!product) {
        return <div>Product not found</div>;
    }

    const tabLists = [{ label: "Description", value: "description" }];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateProductJsonLd(product)),
                }}
            />
            <Suspense
                fallback={
                    <div className="flex h-screen items-center justify-center">
                        <Loader className="h-10 w-10 animate-spin text-primary" />
                    </div>
                }
            >
                <div className="width py-6 pb-8 max-sm:px-3 lg:py-8 lg:pb-16">
                    <div className="flex gap-6 max-lg:flex-col lg:gap-10 2xl:gap-16">
                        <div className="lg:w-[50%]">
                            <ZoomImage src={product.photoURL} alt={product.name} width={800} height={800} />
                        </div>
                        <div className="lg:w-[50%]">
                            <h1 className="text-2xl font-bold leading-[1.5] lg:text-3xl lg:leading-[1.5]">
                                {product.banglaName}
                            </h1>

                            <ShowPrice
                                product={product}
                                className="mt-2 text-lg font-bold text-foreground/80 lg:mt-4 lg:text-xl"
                            />

                            <Separator className="my-6 lg:my-10" />

                            <ul className="space-y-1">
                                <li>এখানে মোট ২৫০ টি এলার্জি বিনাশ ট্যাবলেট থাকবে।</li>
                                <li>প্রতিদিন সকাল এবং রাতে ২ টি করে খাবার পরে খেয়ে নিবেন।</li>
                                <li>কয়েক দিনের মধ্যে সমস্যা আর না থাকলে ও সম্পূর্ণ ফাইল সেস করবেন।</li>
                            </ul>

                            <Suspense fallback={<div>Loading...</div>}>
                                <ProductVariantSelector product={product} />
                            </Suspense>

                            <Separator className="my-6 lg:my-10" />

                            <div className="mt-6 space-y-2">
                                {config.isShowStock && (
                                    <p className="text-sm text-foreground/70">
                                        <span className="font-bold"> STOCK</span>:{" "}
                                        {product.stock > 0 ? product.stock : "N/A"}
                                    </p>
                                )}
                                <p className="text-sm text-foreground/70">
                                    <span className="font-semibold">CATEGORIES</span>: {product?.category?.name}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <CustomTab tabLists={tabLists} />
                        <Editor content={product.description} />
                    </div>
                </div>
            </Suspense>
        </>
    );
};

export default Page;

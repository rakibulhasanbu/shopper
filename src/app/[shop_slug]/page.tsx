import { Metadata } from "next";

import { getProducts } from "@/actions/product-actions";
import config from "@/config";
import Banner from "@/features/home/Banner";
import ProductCard from "@/features/products/ProductCard";
import { Params } from "@/types";

const Home = async ({ params }: { params: Params<"shop_slug"> }) => {
    const { shop_slug } = await params;
    const products = await getProducts({ shopName: shop_slug });

    return (
        <div>
            <Banner />
            <div className="width py-8 max-sm:px-3 lg:py-12">
                <h1 className="pb-6 text-center text-2xl font-semibold text-primary lg:text-3xl">পপুলার প্রডাক্টস</h1>
                <div className="grid min-h-[70dvh] grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
                    {products?.data?.map((product) => <ProductCard key={product?.id} product={product} />)}
                </div>
            </div>
        </div>
    );
};

export const metadata: Metadata = {
    metadataBase: new URL(config.serverUrl),
    title: "Home",
    description:
        "Discover quality products at great prices. Shop now for the best deals on our wide selection of items.",
    openGraph: {
        title: config.websiteName || "Hattbar",
        description: "Your One-Stop Shopping Destination",
        type: "website",
        images: [config.openGraphImage],
    },
    twitter: {
        card: "summary_large_image",
        title: config.websiteName || "Hattbar",
        description: "Your One-Stop Shopping Destination",
        images: [config.openGraphImage],
    },
};

export default Home;

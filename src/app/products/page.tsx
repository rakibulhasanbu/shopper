import { getProducts } from "@/actions/product-actions";
import ProductCard from "@/features/products/ProductCard";
import ProductSidebar from "@/features/products/ProductSidebar";

const ProductsPage = async () => {
    const products = await getProducts();

    return (
        <div className="width flex gap-4 py-8 max-sm:px-3 lg:py-12">
            <ProductSidebar />
            <div className="w-3/4 bg-blue-200">
                <h1 className="pb-6 text-center text-2xl font-semibold text-primary lg:text-3xl">পপুলার প্রডাক্টস</h1>
                <div className="grid min-h-[70dvh] grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
                    {products?.data?.map((product) => <ProductCard key={product?.id} product={product} />)}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;

import Link from "next/link";

import { getCategories } from "@/actions/product-actions";

import { Category } from "@/types/product-type";

const ProductSidebar = async () => {
    const categories = await getCategories();
    // console.log("categories :>> ", categories);

    return (
        <div className="w-1/4">
            <p className="pb-2 uppercase">Product Categories</p>
            <div className="flex flex-col gap-2">
                {categories.data.map((category: Category) => (
                    <Link
                        className="text-foreground/70 hover:text-foreground"
                        replace
                        href={`/products?category=${category.name}`}
                        key={category.id}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductSidebar;

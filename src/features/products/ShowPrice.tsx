import { Minus } from "lucide-react";

import { Product } from "@/types/product-type";
import { cn } from "@/lib/utils";

const ShowPrice = ({ product, className }: { product: Product; className?: string }) => {
    return product.price ? (
        <div className={cn("flex items-center gap-4 text-sm font-bold lg:text-xl", className)}>
            <p>৳ {product.discountPrice}</p>

            <p className="line-through opacity-70">৳ {product.price}</p>
        </div>
    ) : (
        <div className={cn("flex items-center gap-1 text-sm font-bold lg:text-xl", className)}>
            <p>৳ {product.productVariant && product.productVariant[0]?.price}</p>
            <Minus className="w-4 lg:w-6" />
            <p>
                ৳ {product.productVariant && product.productVariant[product.productVariant.length - 1]?.discountPrice}
            </p>
        </div>
    );
};

export default ShowPrice;

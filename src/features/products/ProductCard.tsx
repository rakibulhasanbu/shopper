import Link from "next/link";

import ShowPrice from "@/features/products/ShowPrice";

import { Product } from "@/types/product-type";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import CustomImage from "@/components/CustomImage";

const ProductCard = ({ product, shop_slug }: { product: Product; shop_slug?: string }) => {
    const getUrl = shop_slug ? `/${shop_slug}/products/${product.id}` : `/products/${product.id}`;

    return (
        <Link href={getUrl}>
            <Card className="h-fit overflow-hidden">
                <CardContent className="p-0 lg:p-0">
                    {product.photoURL && (
                        <CustomImage
                            src={product.photoURL}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="h-auto w-full object-contain object-center"
                        />
                    )}
                    <div className="flex flex-col items-center gap-2 pb-4 pt-4 text-primary lg:pt-8">
                        <h3 className="px-2 text-sm font-bold lg:text-lg">{product.banglaName}</h3>
                        <ShowPrice product={product} />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button className="max-lg:w-full">Quick View</Button>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default ProductCard;

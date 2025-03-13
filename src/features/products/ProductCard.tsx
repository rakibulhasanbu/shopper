import Image from "next/image";
import Link from "next/link";

import ShowPrice from "@/features/products/ShowPrice";

import { Product } from "@/types/product-type";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link href={`/products/${product.slug}`}>
            <Card className="overflow-hidden">
                <CardContent className="p-0 lg:p-0">
                    <Image
                        src={product.photoURL}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="h-auto w-full object-contain object-center"
                    />
                    <div className="flex flex-col items-center gap-2 pb-4 pt-4 text-primary lg:pt-8">
                        <h3 className="px-2 text-sm font-bold lg:text-lg">{product.banglaName}</h3>
                        <ShowPrice product={product} />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button href={`/products/${product.slug}`} className="max-lg:w-full">
                        Quick View
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default ProductCard;

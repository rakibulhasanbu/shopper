"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Minus, Plus, X } from "lucide-react";

import { Product, ProductVariant } from "@/types/product-type";
import { cartStorage, MAX_QUANTITY } from "@/lib/cart";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ProductVariantSelector = ({ product }: { product: Product }) => {
    const router = useRouter();
    const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        if (!product.price && !selectedVariant) return;

        // Check current quantity in cart
        const currentCart = cartStorage.getCart();
        const existingItem = currentCart.find(
            (item) =>
                item.productId === product.id &&
                (selectedVariant ? item.variantId === selectedVariant.id : !item.variantId)
        );

        const newTotalQuantity = (existingItem?.quantity || 0) + quantity;

        if (newTotalQuantity > MAX_QUANTITY) {
            window.alert(`Cannot add more items. Maximum quantity of ${MAX_QUANTITY} would be exceeded`);
            return;
        }

        const price = product.discountPrice || selectedVariant?.discountPrice || 0;

        cartStorage.addItem({
            productId: product.id,
            variantId: selectedVariant?.id || "",
            quantity: quantity,
            name: product.name,
            photoURL: product.photoURL,
            variant: selectedVariant,
            price,
        });

        if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "AddToCart", {
                content_name: product.name,
                content_ids: [product.id],
                content_type: "product",
                value: price,
                currency: "BDT",
                contents: [
                    {
                        id: selectedVariant?.id || product.id,
                        quantity: quantity,
                    },
                ],
            });
        }

        window.dispatchEvent(new Event("cart-updated"));
        setQuantity(1);
        setSelectedVariant(null);
    };

    const handleBuyNow = () => {
        if (!product.price && !selectedVariant) return;

        // Check current quantity in cart
        const currentCart = cartStorage.getCart();
        const existingItem = currentCart.find(
            (item) =>
                item.productId === product.id &&
                (selectedVariant ? item.variantId === selectedVariant.id : !item.variantId)
        );

        const newTotalQuantity = (existingItem?.quantity || 0) + quantity;

        if (newTotalQuantity > MAX_QUANTITY) {
            window.alert(`Cannot add more items. Maximum quantity of ${MAX_QUANTITY} would be exceeded`);
            return;
        }

        const price = product.discountPrice || selectedVariant?.discountPrice || 0;

        cartStorage.addItem({
            productId: product.id,
            variantId: selectedVariant?.id || "",
            quantity: quantity,
            name: product.name,
            photoURL: product.photoURL,
            variant: selectedVariant,
            price,
        });

        window.dispatchEvent(new Event("cart-updated"));
        router.push("/checkout");
        setQuantity(1);
    };

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= 0 && value <= 1000) {
            setQuantity(value);
        }
    };

    return (
        <>
            <div className="space-y-3 lg:space-y-4">
                {!product.price && (
                    <div className="flex items-center gap-2 text-base text-foreground/80">
                        <p className="font-medium">Variant:</p>

                        <h4 className="font-semibold text-primary">{selectedVariant?.name}</h4>
                    </div>
                )}

                <div className="flex flex-wrap gap-2.5">
                    {product?.productVariant?.map((variant) => (
                        <button
                            onClick={() => setSelectedVariant(variant)}
                            title={variant.name}
                            className={cn(
                                "rounded border px-2 py-1 text-sm ring-accent hover:bg-primary/10 lg:px-3 lg:text-base",
                                selectedVariant?.id === variant.id &&
                                    "border-primary/80 bg-primary/10 text-primary ring-1 ring-primary/80"
                            )}
                            key={variant.id}
                        >
                            {variant.name}
                        </button>
                    ))}

                    {selectedVariant && (
                        <button
                            onClick={() => setSelectedVariant(null)}
                            className="flex items-center gap-1 rounded border border-destructive/10 bg-destructive/10 px-2 py-1 text-sm hover:bg-destructive/15 lg:px-3 lg:text-base"
                        >
                            Clear <X className="size-4" />
                        </button>
                    )}
                </div>
            </div>

            {selectedVariant && (
                <p className="space-x-2 pt-5 lg:pt-8">
                    <span className="text-xl font-bold text-foreground/80">৳ {selectedVariant?.discountPrice}</span>
                    <span className="text-lg font-semibold text-muted-foreground/90 line-through">
                        ৳ {selectedVariant?.price}
                    </span>
                </p>
            )}

            <div className="mt-6 flex gap-2 max-md:flex-col lg:mt-8 lg:gap-4">
                <div className="flex h-10 w-fit items-center rounded-sm border max-md:mx-auto max-md:hidden lg:h-12">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                        className="h-full rounded-l-sm bg-accent px-4 py-2 hover:bg-muted-foreground/20 disabled:opacity-50"
                    >
                        <Minus className="size-4" />
                    </button>
                    <input
                        type="text"
                        onChange={handleQuantityChange}
                        value={quantity}
                        max={20}
                        min={1}
                        className="h-full w-12 text-center"
                    />
                    <button
                        onClick={() => setQuantity(Math.min(MAX_QUANTITY, quantity + 1))}
                        disabled={quantity >= MAX_QUANTITY}
                        className="h-full rounded-r-sm bg-accent px-4 py-2 hover:bg-muted-foreground/20 disabled:opacity-50"
                    >
                        <Plus className="size-4" />
                    </button>
                </div>
                <Button
                    onClick={handleAddToCart}
                    disabled={!product.price && !selectedVariant}
                    className="h-10 max-md:hidden lg:h-12 lg:w-[25%]"
                >
                    Add to cart
                </Button>

                <div className="flex items-center gap-2 md:hidden">
                    <div className="mx-auto flex h-10 w-fit items-center rounded-sm border">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            disabled={quantity <= 1}
                            className="h-full rounded-l-sm bg-accent px-4 py-2 hover:bg-muted-foreground/20 disabled:opacity-50"
                        >
                            <Minus className="size-4" />
                        </button>
                        <input
                            type="text"
                            onChange={handleQuantityChange}
                            value={quantity}
                            max={20}
                            min={1}
                            className="h-full w-12 text-center"
                        />
                        <button
                            onClick={() => setQuantity(Math.min(MAX_QUANTITY, quantity + 1))}
                            disabled={quantity >= MAX_QUANTITY}
                            className="h-full rounded-r-sm bg-accent px-4 py-2 hover:bg-muted-foreground/20 disabled:opacity-50"
                        >
                            <Plus className="size-4" />
                        </button>
                    </div>
                    <Button
                        onClick={handleAddToCart}
                        disabled={!product.price && !selectedVariant}
                        className="h-10 w-full lg:h-12 lg:w-[25%]"
                    >
                        Add to cart
                    </Button>
                </div>
                <Button
                    onClick={handleBuyNow}
                    disabled={!product.price && !selectedVariant}
                    className="h-10 bg-[#FB8500] hover:bg-[#FB8500]/90 lg:h-12 lg:w-[25%]"
                >
                    এখনই কিনুন
                </Button>
            </div>
        </>
    );
};

export default ProductVariantSelector;

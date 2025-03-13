"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Minus, Plus, Trash2, X } from "lucide-react";

import { calculateItemTotal, CartItem, cartStorage, MAX_QUANTITY } from "@/lib/cart";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CartItems = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const updateCart = () => {
            const items = cartStorage.getCart();
            setCartItems(items);
        };

        updateCart();
        window.addEventListener("cart-updated", updateCart);
        return () => window.removeEventListener("cart-updated", updateCart);
    }, []);

    const handleQuantityChange = (productId: string, variantId: string, newQuantity: number) => {
        if (newQuantity < 1) return;

        if (newQuantity > MAX_QUANTITY) {
            console.warn(`Maximum  quantity of ${MAX_QUANTITY} exceeded`);
            return;
        }

        cartStorage.updateQuantity(productId, variantId, newQuantity);
        window.dispatchEvent(new Event("cart-updated"));
    };

    const handleRemoveItem = (productId: string, variantId: string) => {
        cartStorage.removeItem(productId, variantId);
        window.dispatchEvent(new Event("cart-updated"));
    };

    if (cartItems.length === 0) {
        return (
            <div className="lg:col-span-2">
                <div className="flex justify-end pt-6">
                    <Button href="/products" className="max-lg:w-full">
                        Continue Shopping
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="lg:col-span-2">
            <div className="flex items-center border-b-2 pb-4 lg:pb-6">
                <p className="font-medium lg:w-[60%]">Product</p>
                <p className="w-[20%] pl-[2%] font-medium max-lg:hidden">Quantity</p>
                <p className="w-[20%] text-center font-medium max-lg:hidden">Subtotal</p>
            </div>

            {cartItems.map((item) => (
                <div
                    className="flex items-center gap-4 border-b py-4 lg:py-6"
                    key={`${item.productId}-${item.variantId}`}
                >
                    <div className="flex w-full items-center gap-3 lg:w-[60%] lg:gap-5">
                        <Image
                            src={item.photoURL || ""}
                            alt={item.name || ""}
                            width={100}
                            height={100}
                            className="aspect-square size-[90px] rounded-sm object-cover"
                        />
                        <div className="flex flex-col gap-1 max-lg:w-full">
                            <h3 className="font-medium">{item.name}</h3>
                            {item.variant ? (
                                <p className="text-sm text-muted-foreground max-lg:hidden">
                                    Variant: {item.variant.name}
                                </p>
                            ) : null}
                            <div className="flex items-center justify-between gap-2 lg:hidden">
                                <ItemQuantity
                                    quantity={item.quantity}
                                    onQuantityChange={(newQuantity) =>
                                        handleQuantityChange(item.productId, item.variantId, newQuantity)
                                    }
                                />

                                <p className="flex items-center gap-1 text-sm font-medium">
                                    <X className="size-3" /> ৳ {item.variant?.discountPrice || item.price}
                                </p>
                                <button
                                    onClick={() => handleRemoveItem(item.productId, item.variantId)}
                                    className="hover:text-destructive"
                                >
                                    <Trash2 className="size-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <ItemQuantity
                        className="max-lg:hidden"
                        quantity={item.quantity}
                        onQuantityChange={(newQuantity) =>
                            handleQuantityChange(item.productId, item.variantId, newQuantity)
                        }
                    />

                    <div className="flex w-[20%] items-center justify-end gap-[50%] max-lg:hidden">
                        <p className="font-medium">৳ {calculateItemTotal(item).toLocaleString()}</p>
                        <button
                            onClick={() => handleRemoveItem(item.productId, item.variantId)}
                            className="hover:text-destructive"
                        >
                            <Trash2 className="size-5" />
                        </button>
                    </div>
                </div>
            ))}

            <div className="flex justify-end pt-6">
                <Button href="/products" className="max-lg:w-full">
                    Continue Shopping
                </Button>
            </div>
        </div>
    );
};

const ItemQuantity = ({
    className,
    quantity,
    onQuantityChange,
}: {
    className?: string;
    quantity: number;
    onQuantityChange: (quantity: number) => void;
}) => {
    return (
        <div className={cn("flex items-center lg:w-[20%]", className)}>
            <div className="flex items-center rounded-sm border px-2 lg:gap-2 lg:px-3 lg:py-1.5">
                <button
                    onClick={() => onQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    className="disabled:opacity-50"
                >
                    <Minus className="size-3.5 lg:size-4" />
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                    onClick={() => onQuantityChange(quantity + 1)}
                    disabled={quantity >= MAX_QUANTITY}
                    className="disabled:opacity-50"
                >
                    <Plus className="size-3.5 lg:size-4" />
                </button>
            </div>
            {quantity === MAX_QUANTITY && <span className="ml-2 text-xs text-destructive">Max limit</span>}
        </div>
    );
};

export default CartItems;

"use client";

import { useEffect, useState } from "react";

import CartItems from "@/features/cart/CartItems";
import CartSummary from "@/features/cart/CartSummary";
import EmptyState from "@/features/shared/empty-state";

import { cartStorage } from "@/lib/cart";

const CartWrapper = () => {
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        const updateCartState = () => {
            const items = cartStorage.getCart();
            setIsEmpty(items.length === 0);
        };

        updateCartState();
        window.addEventListener("cart-updated", updateCartState);
        return () => window.removeEventListener("cart-updated", updateCartState);
    }, []);

    if (isEmpty) {
        return (
            <EmptyState
                title="আপনি কোন প্রোডাক্ট যোগ করেননি"
                description="আপনার কার্টে কোন প্রোডাক্ট নেই। প্রোডাক্ট যোগ করতে নিচের বাটনে ক্লিক করুন।"
                action={{
                    label: "প্রোডাক্টগুলো দেখুন",
                    href: "/products",
                }}
            />
        );
    }

    return (
        <div className="min-h-[85.1dvh] bg-background">
            <div className="width py-8 lg:py-16">
                <h1 className="mb-6 text-2xl font-bold lg:mb-12 lg:text-3xl">শপিং কার্ট</h1>
                <div className="grid gap-16 lg:grid-cols-3">
                    <CartItems />
                    <CartSummary />
                </div>
            </div>
        </div>
    );
};

export default CartWrapper;

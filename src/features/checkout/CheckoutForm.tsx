"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { makeOrder } from "@/actions/order-actions";
import config from "@/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Order } from "@/types/order-type";
import { CartItem, cartStorage } from "@/lib/cart";
import { Form } from "@/components/ui/form";

const formSchema = z.object({
    name: z
        .string({
            required_error: "আপনার নাম লিখুন",
        })
        .min(3, { message: "আপনার নাম কমপক্ষে ৩ টি অক্ষর হতে হবে" }),
    address: z
        .string({
            required_error: "আপনার ঠিকানা লিখুন",
        })
        .min(4, { message: "ঠিকানা কমপক্ষে ৪ টি অক্ষর হতে হবে" }),
    phone: z
        .string({
            required_error: "ফোন নম্বর লিখুন",
        })
        .min(10, { message: "ফোন নম্বর কমপক্ষে 10 ডিজিট হতে হবে" })
        .refine(
            (value) => {
                const cleanNumber = value.replace(/[\s-]/g, "");

                const bdNumberRegex = /^(?:\+88|88)?01[3-9]\d{8}$/;
                return bdNumberRegex.test(cleanNumber);
            },
            {
                message: "সঠিক বাংলাদেশী ফোন নম্বর দিন",
            }
        ),
});

const CheckoutForm = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [defaultValues, setDefaultValues] = useState({
        name: "",
        address: "",
        phone: "",
    });

    useEffect(() => {
        const savedForm = localStorage.getItem("checkout_form");
        if (savedForm) {
            const parsedForm = JSON.parse(savedForm);
            setDefaultValues(parsedForm);
            form.reset(parsedForm);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const cartItems = cartStorage.getCart();

        const orderItems = cartItems?.map((item: CartItem) => ({
            productId: item.productId,
            ...(item.variantId && { productVariantId: item.variantId }),
            quantity: item.quantity,
        }));

        const order: Order = {
            shopId: config.shopId || "",
            orderItems,
            customerName: values.name,
            customerPhoneNumber: values.phone,
            customerAddress: values.address,
        };

        await makeOrder(order).then((res) => {
            cartStorage.clearCart();
            localStorage.setItem("checkout_form", JSON.stringify(values));
            router.push(`/order-success?order=${res?.data?.id}`);
        });
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
        </Form>
    );
};

export default CheckoutForm;
